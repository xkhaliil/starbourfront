import { getHealthyServices, getServices } from "../../lib/load-balancer";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    services: getServices(),
    healthCheck: "GET /api/health",
    algorithm: "round-robin",
    redirectStatus: "302",
    status: await getHealthyServices(),
  });
}
