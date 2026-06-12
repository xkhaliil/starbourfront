"use client";

import { useActionState } from "react";
import { importPaymentsAction } from "./actions";
import type { ImportState } from "./lib/payment-import";

type ImporterFormProps = {
  initialState: ImportState;
};

function submitLabel(pending: boolean) {
  return pending ? "Importing..." : "Import payments";
}

export function ImporterForm({ initialState }: ImporterFormProps) {
  const [state, formAction, pending] = useActionState(
    importPaymentsAction,
    initialState,
  );

  return (
    <div className="stack">
      <section className="card">
        <form action={formAction} className="stack form-stack">
          <label className="field">
            <span>Base URL</span>
            <input
              type="url"
              name="baseUrl"
              defaultValue={state.baseUrl}
              placeholder="http://localhost:9091"
              required
            />
          </label>

          <label className="field">
            <span>Store ID</span>
            <input
              type="text"
              name="storeId"
              defaultValue={state.storeId}
              placeholder="store-london-01"
            />
          </label>

          <label className="field">
            <span>CSV</span>
            <input type="file" name="csvFile" accept=".csv,text/csv" required />
          </label>

          <button type="submit" disabled={pending}>
            {submitLabel(pending)}
          </button>
        </form>
      </section>

      <section className="card">
        <p className={state.kind === "error" ? "status error" : "status success"}>
          {state.message}
        </p>

        <p className="summary-line">
          {state.summary.totalRows} rows, {state.summary.created} created,{" "}
          {state.summary.replayed} replayed, {state.summary.failed} failed
        </p>

        {state.rows.length > 0 ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Source</th>
                  <th>Result</th>
                  <th>Attempts</th>
                  <th>Payment ID</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {state.rows.map((row) => (
                  <tr key={`${row.rowNumber}-${row.idempotencyKey}`}>
                    <td>{row.rowNumber}</td>
                    <td>{row.sourceReference}</td>
                    <td>{row.status}</td>
                    <td>{row.attempts}</td>
                    <td>{row.paymentId ?? "-"}</td>
                    <td>{row.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="muted">No import has been run yet.</p>
        )}
      </section>
    </div>
  );
}
