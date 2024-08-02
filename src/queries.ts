import { from } from "./generated";

export const q = from("actor")
  .columns("actor_id", "first_name", "last_name")
  .take(2);
