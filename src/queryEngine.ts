import { QueryEngine } from "@synthql/backend";

export const queryEngine = new QueryEngine({
  url: process.env.DATABASE_URL,
});
