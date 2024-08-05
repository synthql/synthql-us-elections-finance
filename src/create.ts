import { Pool } from "pg";
import { createTableQuery } from "./sqlQueries";

// Database connection configuration
const client = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/elections",
  max: 10,
});

// Function to create the table
const createTable = async () => {
  try {
    await client.connect();

    await client.query(createTableQuery);

    console.log("Table created successfully!");
  } catch (err) {
    console.error("Error creating table", err);
  } finally {
    await client.end();
  }
};

createTable();
