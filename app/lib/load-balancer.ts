const DEFAULT_SERVICES = [
  "http://localhost:8081",
  "http://localhost:8082",
  "http://localhost:8083",
];

let currentIndex = 0;

export function getServices() {
  const raw = process.env.LB_UPSTREAMS?.trim();
  const values = raw ? raw.split(",") : DEFAULT_SERVICES;

  return values
    .map((value) => value.trim().replace(/\/$/, ""))
    .filter(Boolean);
}

export async function getHealthyServices() {
  const services = getServices();
  const results = await Promise.all(
    services.map(async (service) => ({
      url: service,
      healthy: await isHealthy(service),
    })),
  );

  return results;
}

export function getNextService(services: string[]) {
  if (services.length === 0) {
    return null;
  }

  const service = services[currentIndex % services.length];
  currentIndex += 1;
  return service;
}

async function isHealthy(service: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);

  try {
    const response = await fetch(`${service}/api/health`, {
      cache: "no-store",
      signal: controller.signal,
    });

    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
