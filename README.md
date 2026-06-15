# Async Payment Processing

This project converts bulk payment import from synchronous processing to
asynchronous processing.

## Design

- When a CSV bulk request is received, the request and its items are stored in a
  relational database.
- Prisma ORM is used for all database access.
- The client gets a request ID immediately.
- The client can query request status by this ID.
- Each payment is sent to the remote payment system in the background.
- When a remote payment succeeds, a payment row is stored in a database shard.
- The number of shards is static and configured by environment variables.

## Database Layout

- `CONTROL_DATABASE_URL`: Postgres database used for:
  - `bulk_requests`
  - `bulk_request_items`
- `SHARD_DATABASE_URLS`: comma-separated Postgres URLs used for the sharded
  `payments` table
- Prisma schemas:
  - `prisma/control.prisma`
  - `prisma/shard.prisma`

Example:

```powershell
$env:CONTROL_DATABASE_URL="postgres://postgres:postgres@localhost:5432/payments_control"
$env:SHARD_DATABASE_URLS="postgres://postgres:postgres@localhost:5433/payments_shard_1,postgres://postgres:postgres@localhost:5434/payments_shard_2"
```

## Main Routes

- `/`: upload CSV and create an async bulk request
- `/api/requests/{requestId}`: query request status
- `/api/health`: health endpoint
- `/loadbalancer`: simple redirect load balancer from the previous task

## Run

Set the database variables:

```powershell
$env:CONTROL_DATABASE_URL="postgres://postgres:postgres@localhost:5432/payments_control"
$env:SHARD_DATABASE_URLS="postgres://postgres:postgres@localhost:5433/payments_shard_1,postgres://postgres:postgres@localhost:5434/payments_shard_2"
```

Generate Prisma clients:

```powershell
npm run prisma:generate
```

Create the tables:

```powershell
npx prisma db push --schema prisma/control.prisma
$env:SHARD_DATABASE_URL="postgres://postgres:postgres@localhost:5433/payments_shard_1"
npx prisma db push --schema prisma/shard.prisma
$env:SHARD_DATABASE_URL="postgres://postgres:postgres@localhost:5434/payments_shard_2"
npx prisma db push --schema prisma/shard.prisma
```

Start the app:

```powershell
npm run dev
```

## Async Flow

1. Upload a CSV file from the home page.
2. The app stores the bulk request in Postgres.
3. The app returns a request ID immediately.
4. The UI polls `/api/requests/{requestId}`.
5. Background processing sends each payment to the remote system.
6. Successful payments are inserted into one shard based on a hash of
   `storeId + paymentRef`.
7. The request ends with status `done`.

## Test

### 1. Queue A Bulk Request

- Open `http://localhost:3000`
- Upload a valid CSV
- Expected:
  - request ID appears immediately
  - request status starts as `queued` or `processing`

### 2. Query Request Status

- Open:
  - `http://localhost:3000/api/requests/<request-id>`
- Expected:
  - request status
  - processed count
  - success count
  - failed count
  - item-level status

### 3. Verify Async Processing

- Submit a CSV with multiple rows
- Expected:
  - response returns quickly
  - rows move from `queued` -> `processing` -> `done` or `failed`

### 4. Verify Sharding

- Configure at least 2 shard database URLs in `SHARD_DATABASE_URLS`
- Submit payments with different `storeId` / `paymentRef`
- Expected:
  - rows are inserted into different shard databases
  - each row shows its selected shard index in the UI

## Notes

- The code uses Prisma ORM and keeps the DB layer intentionally simple.
- Sharding is static.
- Resharding is not implemented.
- The database schema is created with `prisma db push`.
