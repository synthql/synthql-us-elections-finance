import { Pool } from 'pg';
import { insertRowQuery } from './sqlQueries';
import {
    HARRIS_CANDIDATE_ID,
    KENNEDY_CANDIDATE_ID,
    TRUMP_CANDIDATE_ID,
} from './constants';

// Database connection configuration
const client = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
});

// Function to insert data
const insertData = async (candidateIds: string[]) => {
    try {
        await client.connect();

        for (const candidateId of candidateIds) {
            await client.query(insertRowQuery, [candidateId]);
            console.log(
                `Record with ID: ${candidateId} inserted successfully!`,
            );
        }
    } catch (err) {
        console.error('Error inserting record', err);
    }
};

insertData([
    HARRIS_CANDIDATE_ID,
    TRUMP_CANDIDATE_ID,
    KENNEDY_CANDIDATE_ID,
]).then(() => process.exit(0));
