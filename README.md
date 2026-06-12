# Redirect Load Balancer

This project contains a simple redirect load balancer built with Next.js.

## Design

- Redirect endpoint: `/loadbalancer`
- Redirect type: `HTTP 302`
- Service list: static list from `LB_UPSTREAMS`
- Health check: `GET /api/health`
- Algorithm: round robin between healthy services

## Routes

- `/loadbalancer`: redirects to the next healthy service
- `/api/services`: shows services and health status
- `/api/health`: health endpoint for one instance

## Run

```powershell
$env:LB_UPSTREAMS="http://localhost:8081,http://localhost:8082,http://localhost:8083"
```

Start 3 app instances:

```powershell
npm run dev -- --port 8081
```

```powershell
npm run dev -- --port 8082
```

```powershell
npm run dev -- --port 8083
```

Start the balancer:

```powershell
$env:LB_UPSTREAMS="http://localhost:8081,http://localhost:8082,http://localhost:8083"
npm run dev -- --port 3000
```

## Test

### 1. Test Redirect

Run:

```powershell
curl.exe -I http://localhost:3000/loadbalancer
```

- Expected: status `302`
- Expected: `Location` points to `8081`, `8082`, or `8083`

### 2. Test Service List

Open:

- `http://localhost:3000/api/services`

- Expected: configured services, algorithm, and health status

### 3. Test Health Check

Open these directly:

- `http://localhost:8081/api/health`
- `http://localhost:8082/api/health`
- `http://localhost:8083/api/health`

Then open:

- `http://localhost:3000/api/services`

- Expected: healthy instances show `"healthy": true`

### 4. Test Round Robin

Run several times:

```powershell
curl.exe -I http://localhost:3000/loadbalancer
curl.exe -I http://localhost:3000/loadbalancer
curl.exe -I http://localhost:3000/loadbalancer
```

- Expected: redirects rotate between `8081`, `8082`, and `8083`

### 5. Test Failure

Stop one app instance, for example the one on `8082`.

Then open:

- `http://localhost:3000/api/services`

- Expected: `8082` becomes unhealthy

Run again:

```powershell
curl.exe -I http://localhost:3000/loadbalancer
curl.exe -I http://localhost:3000/loadbalancer
```

- Expected: redirects skip the stopped instance

### 6. Test No Healthy Services

Stop all worker instances and run:

```powershell
curl.exe -I http://localhost:3000/loadbalancer
```

- Expected: status `503`
