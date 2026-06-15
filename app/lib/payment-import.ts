import { createHash, randomUUID } from "node:crypto";
import { parse } from "csv-parse/sync";
import type { BulkRequest, BulkRequestItem, ItemStatus, RequestStatus } from "../generated/control";
import { getControlDb, getShardCount, getShardDb } from "./db";

const globalForImport = globalThis as typeof globalThis & {
  processingRequestIds?: Set<string>;
};

const COFFEE_TYPES = new Set([
  "ESPRESSO",
  "DOUBLE_ESPRESSO",
  "AMERICANO",
  "LATTE",
  "CAPPUCCINO",
  "FLAT_WHITE",
  "MOCHA",
  "CORTADO",
  "MACCHIATO",
  "COLD_BREW",
]);

const REQUIRED_COLUMNS = ["coffeeType", "price", "currency", "loyaltyCardId"] as const;
const OPTIONAL_COLUMNS = ["paymentRef", "storeId"] as const;
const MAX_RETRIES = 3;
const REQUEST_TIMEOUT_MS = 4_000;

type ImportKind = "idle" | "success" | "error";
type CsvRow = Record<string, string>;
type RequestWithItems = BulkRequest & { items: BulkRequestItem[] };

type ParsedPayment = {
  id: string;
  rowNumber: number;
  sourceReference: string;
  paymentRef: string;
  storeId: string;
  coffeeType: string;
  price: number;
  currency: string;
  loyaltyCardId: string;
  shardIndex: number;
};

export type ImportRowResult = {
  rowNumber: number;
  sourceReference: string;
  shardIndex: number;
  status: ItemStatus;
  attempts: number;
  remotePaymentId: string | null;
  message: string;
};

export type ImportState = {
  kind: ImportKind;
  message: string;
  requestId: string | null;
  requestStatus: RequestStatus | null;
  baseUrl: string;
  storeId: string;
  summary: {
    totalRows: number;
    processed: number;
    success: number;
    failed: number;
  };
  rows: ImportRowResult[];
};

export function createInitialImportState(
  overrides?: Partial<Pick<ImportState, "baseUrl" | "storeId">>,
): ImportState {
  return {
    kind: "idle",
    message: "Upload a CSV file to queue a bulk request.",
    requestId: null,
    requestStatus: null,
    baseUrl: overrides?.baseUrl ?? "",
    storeId: overrides?.storeId ?? "",
    summary: { totalRows: 0, processed: 0, success: 0, failed: 0 },
    rows: [],
  };
}

export async function importPaymentsFromFormData(formData: FormData): Promise<ImportState> {
  const baseUrl = normalizeBaseUrl(getRequiredText(formData, "baseUrl"));
  const fallbackStoreId = getOptionalText(formData, "storeId");
  const csvFile = formData.get("csvFile");

  if (!(csvFile instanceof File)) {
    throw new Error("Please attach a CSV file.");
  }

  const csvText = await csvFile.text();
  const items = parseCsv(csvText).map((row, index) =>
    buildPaymentRow(row, index + 2, fallbackStoreId),
  );
  const requestId = randomUUID();
  const db = getControlDb();

  await db.$transaction([
    db.bulkRequest.create({
      data: {
        id: requestId,
        remoteBaseUrl: baseUrl,
        fallbackStoreId: fallbackStoreId || null,
        status: "queued",
        totalCount: items.length,
      },
    }),
    ...items.map((item) =>
      db.bulkRequestItem.create({
        data: {
          id: item.id,
          requestId,
          rowNumber: item.rowNumber,
          shardIndex: item.shardIndex,
          sourceReference: item.sourceReference,
          paymentRef: item.paymentRef,
          storeId: item.storeId,
          coffeeType: item.coffeeType,
          price: item.price,
          currency: item.currency,
          loyaltyCardId: item.loyaltyCardId,
          status: "queued",
        },
      }),
    ),
  ]);

  startProcessingRequest(requestId);

  return getImportState(requestId, {
    baseUrl,
    storeId: fallbackStoreId,
  });
}

export async function getImportState(
  requestId: string,
  overrides?: Partial<Pick<ImportState, "baseUrl" | "storeId">>,
): Promise<ImportState> {
  const request = await getControlDb().bulkRequest.findUnique({
    where: { id: requestId },
    include: {
      items: {
        orderBy: { rowNumber: "asc" },
      },
    },
  });

  if (!request) {
    throw new Error("Bulk request not found.");
  }

  return buildImportState(request, overrides);
}

function startProcessingRequest(requestId: string) {
  const processingRequestIds =
    globalForImport.processingRequestIds ?? new Set<string>();

  globalForImport.processingRequestIds = processingRequestIds;

  if (processingRequestIds.has(requestId)) {
    return;
  }

  processingRequestIds.add(requestId);

  setTimeout(() => {
    void processRequest(requestId).finally(() => {
      processingRequestIds.delete(requestId);
    });
  }, 0);
}

async function processRequest(requestId: string) {
  const db = getControlDb();
  const request = await db.bulkRequest.findUnique({
    where: { id: requestId },
    include: {
      items: {
        orderBy: { rowNumber: "asc" },
      },
    },
  });

  if (!request) {
    return;
  }

  await db.bulkRequest.update({
    where: { id: requestId },
    data: { status: "processing" },
  });

  for (const item of request.items) {
    if (item.status === "done") {
      continue;
    }

    await processItem(request.remoteBaseUrl, requestId, item);
  }

  const summary = await getRequestSummary(requestId);

  await db.bulkRequest.update({
    where: { id: requestId },
    data: {
      status: "done",
      processedCount: summary.processed,
      successCount: summary.success,
      failedCount: summary.failed,
    },
  });
}

async function processItem(remoteBaseUrl: string, requestId: string, item: BulkRequestItem) {
  const db = getControlDb();

  await db.bulkRequestItem.update({
    where: { id: item.id },
    data: { status: "processing" },
  });

  let lastError = "Remote request failed.";

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const remotePaymentId = await createRemotePayment(remoteBaseUrl, item);

      await getShardDb(item.shardIndex).payment.upsert({
        where: { itemId: item.id },
        update: {
          remotePaymentId,
        },
        create: {
          id: randomUUID(),
          requestId,
          itemId: item.id,
          shardKey: item.paymentRef,
          storeId: item.storeId,
          paymentRef: item.paymentRef,
          coffeeType: item.coffeeType,
          price: item.price,
          currency: item.currency,
          loyaltyCardId: item.loyaltyCardId,
          remotePaymentId,
        },
      });

      await db.bulkRequestItem.update({
        where: { id: item.id },
        data: {
          status: "done",
          attempts: attempt,
          remotePaymentId,
          error: null,
        },
      });

      return;
    } catch (error) {
      lastError = getErrorMessage(error);
    }
  }

  await db.bulkRequestItem.update({
    where: { id: item.id },
    data: {
      status: "failed",
      attempts: MAX_RETRIES,
      error: lastError,
    },
  });
}

async function createRemotePayment(remoteBaseUrl: string, item: BulkRequestItem) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${remoteBaseUrl}/api/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Store-Id": item.storeId,
        "Idempotency-Key": item.paymentRef,
      },
      body: JSON.stringify({
        coffeeType: item.coffeeType,
        price: item.price,
        currency: item.currency,
        loyaltyCardId: item.loyaltyCardId,
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (response.status !== 200 && response.status !== 201) {
      const errorText = await response.text();
      throw new Error(`Remote system returned ${response.status}: ${errorText || "no details"}`);
    }

    const body = (await response.json()) as { paymentId?: string };

    if (!body.paymentId) {
      throw new Error("Remote system did not return a paymentId.");
    }

    return body.paymentId;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Remote system timed out.");
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function getRequestSummary(requestId: string) {
  const items = await getControlDb().bulkRequestItem.findMany({
    where: { requestId },
    select: { status: true },
  });

  return {
    totalRows: items.length,
    processed: items.filter((item) => item.status === "done" || item.status === "failed").length,
    success: items.filter((item) => item.status === "done").length,
    failed: items.filter((item) => item.status === "failed").length,
  };
}

function buildImportState(
  request: RequestWithItems,
  overrides?: Partial<Pick<ImportState, "baseUrl" | "storeId">>,
): ImportState {
  const summary = {
    totalRows: request.items.length,
    processed: request.items.filter((item) => item.status === "done" || item.status === "failed").length,
    success: request.items.filter((item) => item.status === "done").length,
    failed: request.items.filter((item) => item.status === "failed").length,
  };

  return {
    kind: request.status === "done" && summary.failed > 0 ? "error" : "success",
    message: getRequestMessage(request, summary.failed),
    requestId: request.id,
    requestStatus: request.status,
    baseUrl: overrides?.baseUrl ?? request.remoteBaseUrl,
    storeId: overrides?.storeId ?? request.fallbackStoreId ?? "",
    summary,
    rows: request.items.map((item) => ({
      rowNumber: item.rowNumber,
      sourceReference: item.sourceReference,
      shardIndex: item.shardIndex,
      status: item.status,
      attempts: item.attempts,
      remotePaymentId: item.remotePaymentId,
      message: getRowMessage(item),
    })),
  };
}

function parseCsv(csvText: string): CsvRow[] {
  const trimmed = csvText.trim();

  if (!trimmed) {
    throw new Error("The CSV file is empty.");
  }

  const records = parse(trimmed, {
    bom: true,
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as CsvRow[];

  if (records.length === 0) {
    throw new Error("The CSV file does not contain any data rows.");
  }

  const headers = Object.keys(records[0] ?? {});

  for (const column of REQUIRED_COLUMNS) {
    if (!headers.includes(column)) {
      throw new Error(`Missing required CSV column: ${column}.`);
    }
  }

  for (const header of headers) {
    if (
      !REQUIRED_COLUMNS.includes(header as (typeof REQUIRED_COLUMNS)[number]) &&
      !OPTIONAL_COLUMNS.includes(header as (typeof OPTIONAL_COLUMNS)[number])
    ) {
      throw new Error(`Unexpected CSV column: ${header}.`);
    }
  }

  return records;
}

function buildPaymentRow(record: CsvRow, rowNumber: number, fallbackStoreId: string): ParsedPayment {
  const storeId = required(record.storeId ?? fallbackStoreId, rowNumber, "storeId");
  const coffeeType = required(record.coffeeType, rowNumber, "coffeeType").toUpperCase();
  const priceText = required(record.price, rowNumber, "price");
  const currency = required(record.currency, rowNumber, "currency").toUpperCase();
  const loyaltyCardId = required(record.loyaltyCardId, rowNumber, "loyaltyCardId");

  if (!COFFEE_TYPES.has(coffeeType)) {
    throw new Error(`Row ${rowNumber}: unsupported coffeeType "${coffeeType}".`);
  }

  if (!/^[A-Z]{3}$/.test(currency)) {
    throw new Error(`Row ${rowNumber}: currency must be a 3-letter ISO code.`);
  }

  if (!/^\d+(\.\d{1,2})?$/.test(priceText)) {
    throw new Error(`Row ${rowNumber}: price may contain at most 2 decimals.`);
  }

  const price = Number(priceText);

  if (!Number.isFinite(price) || price <= 0) {
    throw new Error(`Row ${rowNumber}: price must be a positive number.`);
  }

  const paymentRef = record.paymentRef?.trim() || buildDerivedPaymentRef(record, rowNumber);

  return {
    id: randomUUID(),
    rowNumber,
    sourceReference: paymentRef,
    paymentRef,
    storeId,
    coffeeType,
    price,
    currency,
    loyaltyCardId,
    shardIndex: getShardIndex(storeId, paymentRef),
  };
}

function getShardIndex(storeId: string, paymentRef: string) {
  return hash(`${storeId}:${paymentRef}`) % getShardCount();
}

function hash(value: string) {
  let result = 0;

  for (const char of value) {
    result = (result * 31 + char.charCodeAt(0)) >>> 0;
  }

  return result;
}

function getRequestMessage(request: BulkRequest, failedCount: number) {
  if (request.status === "queued") {
    return `Bulk request ${request.id} queued with ${request.totalCount} payments.`;
  }

  if (request.status === "processing") {
    return `Bulk request ${request.id} is processing.`;
  }

  if (failedCount > 0) {
    return `Bulk request ${request.id} finished with ${failedCount} failed payment(s).`;
  }

  return `Bulk request ${request.id} finished successfully.`;
}

function getRowMessage(item: BulkRequestItem) {
  if (item.status === "queued") {
    return "Queued.";
  }

  if (item.status === "processing") {
    return "Processing.";
  }

  if (item.status === "done") {
    return "Stored in shard and sent to remote system.";
  }

  return item.error || "Processing failed.";
}

function normalizeBaseUrl(value: string) {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error("Central system base URL must be a valid absolute URL.");
  }

  return url.toString().replace(/\/$/, "");
}

function getRequiredText(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required field: ${key}.`);
  }

  return value.trim();
}

function getOptionalText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function required(value: string | undefined, rowNumber: number, field: string) {
  if (!value?.trim()) {
    throw new Error(`Row ${rowNumber}: missing ${field}.`);
  }

  return value.trim();
}

function buildDerivedPaymentRef(record: CsvRow, rowNumber: number) {
  const hash = createHash("sha256");
  hash.update(
    JSON.stringify({
      rowNumber,
      coffeeType: record.coffeeType ?? "",
      price: record.price ?? "",
      currency: record.currency ?? "",
      loyaltyCardId: record.loyaltyCardId ?? "",
      storeId: record.storeId ?? "",
    }),
  );

  return `csv-${hash.digest("hex").slice(0, 24)}`;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unexpected error.";
}
