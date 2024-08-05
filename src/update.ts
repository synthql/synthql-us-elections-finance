import { Pool } from "pg";
import { updateRowQuery } from "./sqlQueries";
import { Value } from "./values";

// Database connection configuration
const client = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/elections",
  max: 10,
});

// Function to update the database
export const updateDatabase = async (values: Array<Value>) => {
  try {
    await client.connect();

    const result = await client.query(updateRowQuery, values);

    console.log(`Updated ${result.rowCount} row(s)!`);
  } catch (err) {
    console.error("Error executing query", err);
  }
};
