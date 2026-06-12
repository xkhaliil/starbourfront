import { createHash } from "node:crypto";
import { parse } from "csv-parse/sync";

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

const REQUIRED_COLUMNS = [
  "coffeeType",
  "price",
  "currency",
  "loyaltyCardId",
] as const;

const OPTIONAL_COLUMNS = ["paymentRef", "storeId"] as const;
const MAX_RETRIES = 3;
const REQUEST_TIMEOUT_MS = 4_000;

type ImportKind = "idle" | "success" | "error";
type RowStatus = "created" | "replayed" | "failed";

type CsvRow = Record<string, string>;

export type ImportRowResult = {
  rowNumber: number;
  sourceReference: string;
  idempotencyKey: string;
  status: RowStatus;
  attempts: number;
  paymentId: string | null;
  message: string;
};

export type ImportState = {
  kind: ImportKind;
  message: string;
  baseUrl: string;
  storeId: string;
  summary: {
    totalRows: number;
    created: number;
    replayed: number;
    failed: number;
  };
  rows: ImportRowResult[];
};

type PaymentPayload = {
  coffeeType: string;
  price: number;
  currency: string;
  loyaltyCardId: string;
};

type PaymentRow = {
  rowNumber: number;
  sourceReference: string;
  storeId: string;
  idempotencyKey: string;
  payload: PaymentPayload;
};

export function createInitialImportState(
  overrides?: Partial<Pick<ImportState, "baseUrl" | "storeId">>,
): ImportState {
  return {
    kind: "idle",
    message: "Upload a CSV file to start the import.",
    baseUrl: overrides?.baseUrl ?? "",
    storeId: overrides?.storeId ?? "",
    summary: {
      totalRows: 0,
      created: 0,
      replayed: 0,
      failed: 0,
    },
    rows: [],
  };
}

export async function importPaymentsFromFormData(
  formData: FormData,
): Promise<ImportState> {
  const baseUrl = normalizeBaseUrl(getRequiredText(formData, "baseUrl"));
  const fallbackStoreId = getOptionalText(formData, "storeId");
  const csvFile = formData.get("csvFile");

  if (!(csvFile instanceof File)) {
    throw new Error("Please attach a CSV file.");
  }

  const csvText = await csvFile.text();
  const rows = parseCsv(csvText);
  const results: ImportRowResult[] = [];

  for (const [index, row] of rows.entries()) {
    results.push(await importRow(baseUrl, row, index + 2, fallbackStoreId));
  }

  const summary = {
    totalRows: results.length,
    created: results.filter((row) => row.status === "created").length,
    replayed: results.filter((row) => row.status === "replayed").length,
    failed: results.filter((row) => row.status === "failed").length,
  };

  const succeeded = summary.failed === 0;
  const kind: ImportKind = succeeded ? "success" : "error";
  const message = succeeded
    ? `Imported ${summary.totalRows} rows successfully.`
    : `Imported ${summary.totalRows} rows with ${summary.failed} failure(s).`;

  return {
    kind,
    message,
    baseUrl,
    storeId: fallbackStoreId,
    summary,
    rows: results,
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

async function importRow(
  baseUrl: string,
  record: CsvRow,
  rowNumber: number,
  fallbackStoreId: string,
): Promise<ImportRowResult> {
  const sourceReference = record.paymentRef?.trim() || `row-${rowNumber}`;
  const idempotencyKey =
    record.paymentRef?.trim() || buildDerivedIdempotencyKey(record, rowNumber);

  let row: PaymentRow;

  try {
    row = buildPaymentRow(record, rowNumber, fallbackStoreId);
  } catch (error) {
    return {
      rowNumber,
      sourceReference,
      idempotencyKey,
      status: "failed",
      attempts: 0,
      paymentId: null,
      message: getErrorMessage(error),
    };
  }

  let lastMessage = "Request failed.";

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    const result = await sendOnce(baseUrl, row, attempt);

    if (!result.retry) {
      return result.row as ImportRowResult;
    }

    lastMessage = result.message;
  }

  return {
    rowNumber,
    sourceReference,
    idempotencyKey,
    status: "failed",
    attempts: MAX_RETRIES,
    paymentId: null,
    message: lastMessage,
  };
}

function buildPaymentRow(
  record: CsvRow,
  rowNumber: number,
  fallbackStoreId: string,
): PaymentRow {
  const storeId = required(
    record.storeId ?? fallbackStoreId,
    rowNumber,
    "storeId",
  );
  const coffeeType = required(
    record.coffeeType,
    rowNumber,
    "coffeeType",
  ).toUpperCase();
  const priceText = required(record.price, rowNumber, "price");
  const currency = required(
    record.currency,
    rowNumber,
    "currency",
  ).toUpperCase();
  const loyaltyCardId = required(
    record.loyaltyCardId,
    rowNumber,
    "loyaltyCardId",
  );

  if (!COFFEE_TYPES.has(coffeeType)) {
    throw new Error(
      `Row ${rowNumber}: unsupported coffeeType "${coffeeType}".`,
    );
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

  return {
    rowNumber,
    sourceReference: record.paymentRef?.trim() || `row-${rowNumber}`,
    storeId,
    idempotencyKey:
      record.paymentRef?.trim() ||
      buildDerivedIdempotencyKey(record, rowNumber),
    payload: {
      coffeeType,
      price,
      currency,
      loyaltyCardId,
    },
  };
}

async function sendOnce(baseUrl: string, row: PaymentRow, attempts: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${baseUrl}/api/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Store-Id": row.storeId,
        "Idempotency-Key": row.idempotencyKey,
      },
      body: JSON.stringify(row.payload),
      cache: "no-store",
      signal: controller.signal,
    });

    if (response.status === 200 || response.status === 201) {
      const body = (await response.json()) as { paymentId?: string };

      return {
        retry: false,
        message: "",
        row: {
          rowNumber: row.rowNumber,
          sourceReference: row.sourceReference,
          idempotencyKey: row.idempotencyKey,
          status: response.status === 201 ? "created" : "replayed",
          attempts,
          paymentId: body.paymentId ?? null,
          message:
            response.status === 201
              ? "Payment created."
              : "Payment already existed.",
        } satisfies ImportRowResult,
      };
    }

    if (response.status >= 500) {
      return {
        retry: true,
        message: `Central system returned ${response.status}.`,
      };
    }

    const errorText = await response.text();
    return {
      retry: false,
      message: "",
      row: {
        rowNumber: row.rowNumber,
        sourceReference: row.sourceReference,
        idempotencyKey: row.idempotencyKey,
        status: "failed",
        attempts,
        paymentId: null,
        message: `Central system rejected row ${row.rowNumber} with ${response.status}: ${errorText || "no details"}`,
      } satisfies ImportRowResult,
    };
  } catch (error) {
    return {
      retry: true,
      message:
        error instanceof Error && error.name === "AbortError"
          ? `Request timed out for row ${row.rowNumber}.`
          : `Network error for row ${row.rowNumber}: ${getErrorMessage(error)}`,
    };
  } finally {
    clearTimeout(timeout);
  }
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

function buildDerivedIdempotencyKey(record: CsvRow, rowNumber: number) {
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
