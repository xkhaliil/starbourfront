export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    status: "ok",
    service: process.env.LB_INSTANCE_NAME?.trim() || "app-instance",
  });
}
