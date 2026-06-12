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
        <h1>Payment Import</h1>
        <p className="muted">
          CSV columns: <code>coffeeType</code>, <code>price</code>,{" "}
          <code>currency</code>, <code>loyaltyCardId</code>. Optional:{" "}
          <code>paymentRef</code>, <code>storeId</code>.
        </p>
      </section>

      <section>
        <ImporterForm initialState={initialState} />
      </section>
    </main>
  );
}
