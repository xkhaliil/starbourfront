import { getHealthyServices, getNextService } from "../lib/load-balancer";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const health = await getHealthyServices();
  const healthyServices = health
    .filter((service) => service.healthy)
    .map((service) => service.url);
  const selected = getNextService(healthyServices);

  if (!selected) {
    return new Response("No healthy services available.", { status: 503 });
  }

  const requestUrl = new URL(request.url);
  const target = new URL(`${requestUrl.pathname}${requestUrl.search}`, `${selected}/`);

  return Response.redirect(target, 302);
}
