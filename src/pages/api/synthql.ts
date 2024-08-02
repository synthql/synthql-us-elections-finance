import { requestHandler } from "@/handler";
import {
  ExpressSynthqlHandlerRequest,
  ExpressSynthqlHandlerResponse,
} from "@synthql/backend";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const newReq: ExpressSynthqlHandlerRequest = {
      headers: req.headers,
      body: req.body,
    };

    console.log(1, JSON.stringify(newReq, null, 2));

    const newRes: ExpressSynthqlHandlerResponse = {
      statusCode: res.statusCode,
      write: res.write,
      setHeader: res.setHeader,
      end: res.end,
    };

    requestHandler(newReq, newRes);
  } else {
    // Handle any other HTTP method
  }
}
