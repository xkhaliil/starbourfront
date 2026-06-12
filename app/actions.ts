"use server";

import {
  createInitialImportState,
  importPaymentsFromFormData,
  type ImportState,
} from "./lib/payment-import";

export async function importPaymentsAction(
  _previousState: ImportState,
  formData: FormData,
): Promise<ImportState> {
  try {
    return await importPaymentsFromFormData(formData);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Import failed unexpectedly.";

    return {
      ...createInitialImportState({
        baseUrl:
          typeof formData.get("baseUrl") === "string"
            ? formData.get("baseUrl")?.toString().trim()
            : "",
        storeId:
          typeof formData.get("storeId") === "string"
            ? formData.get("storeId")?.toString().trim()
            : "",
      }),
      kind: "error",
      message,
    };
  }
}
