import { Pool } from 'pg';
import { createTableQuery } from './sqlQueries';

// Database connection configuration
const client = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
});

// Function to create the table
const createTable = async () => {
    try {
        await client.connect();

        await client.query(createTableQuery);

        console.log('Table created successfully!');
    } catch (err) {
        console.error('Error creating table', err);
    }
};

createTable().then(() => process.exit(0));
