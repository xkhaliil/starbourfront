import { getImportState } from "../../../lib/payment-import";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    requestId: string;
  }>;
};

export async function GET(
  _request: Request,
  context: RouteContext,
) {
  try {
    const { requestId } = await context.params;
    const state = await getImportState(requestId);
    return Response.json(state);
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Request not found.",
      },
      { status: 404 },
    );
  }
}
