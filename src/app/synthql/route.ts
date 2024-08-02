import { requestHandler } from "@/handler";
import {
  ExpressSynthqlHandlerRequest,
  ExpressSynthqlHandlerResponse,
} from "@synthql/backend";
import { ServerResponse } from "http";

export async function GET(request: Request) {
  return Response.json({ error: "Internal Server Error" }, { status: 500 });
}

export async function POST(req: Request) {
  const body = await req.text();

  const requestHeaders = Object.fromEntries(req.headers);

  const newReq: ExpressSynthqlHandlerRequest = {
    headers: requestHeaders,
    body: body,
  };

  console.log(1, JSON.stringify(newReq, null, 2));

  const newRes: ExpressSynthqlHandlerResponse = new ServerResponse(req);

  requestHandler(newReq, newRes);
}
