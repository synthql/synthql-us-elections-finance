import { QueryEngine } from "@synthql/backend";

export const queryEngine = new QueryEngine({
  url: "postgres://postgres:postgres@localhost:5432/postgres",
});
