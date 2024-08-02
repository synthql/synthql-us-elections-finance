import { queryEngine } from "./queryEngine";
import { createNextSynthqlHandler } from "./createNextSynthqlHandler";

export const nextSynthqlRequestHandler = createNextSynthqlHandler(queryEngine);
