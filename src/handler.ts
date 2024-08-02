import { createExpressSynthqlHandler } from "@synthql/backend";
import { queryEngine } from "./queryEngine";

export const requestHandler = createExpressSynthqlHandler(queryEngine);
