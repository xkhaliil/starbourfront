import { ImporterForm } from "./importer-form";
import { createInitialImportState } from "./lib/payment-import";

export default function Home() {
  const initialState = createInitialImportState({
    baseUrl:
      process.env.CENTRAL_SYSTEM_BASE_URL?.trim() || "http://localhost:9091",
    storeId: process.env.DEFAULT_STORE_ID?.trim() || "",
  });

  return (
    <main className="page-shell">
      <section className="hero">
        <h1>Async Payment Import</h1>
        <p className="muted">
          Upload a CSV, store the bulk request in Postgres, get a request ID
          back, then poll the request status while payments are sent in the
          background and written to static database shards.
        </p>
      </section>

      <section>
        <ImporterForm initialState={initialState} />
      </section>
    </main>
  );
}
