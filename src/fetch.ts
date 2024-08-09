import {
    HARRIS_CANDIDATE_ID,
    KENNEDY_CANDIDATE_ID,
    TRUMP_CANDIDATE_ID,
} from './constants';
import { updateDatabase } from './update';
import { getParamValues } from './values';

interface Pagination {
    count: number;
    is_count_exact: boolean;
    page: number;
    pages: number;
    per_page: number;
}

export interface Result {
    candidate_contribution: number;
    candidate_election_year: number;
    candidate_id: string;
    contribution_refunds: number;
    contributions: number;
    coverage_end_date: string;
    coverage_start_date: string;
    cycle: number | null;
    disbursements: number;
    election_full: boolean;
    exempt_legal_accounting_disbursement: number;
    federal_funds: number;
    fundraising_disbursements: number;
    individual_contributions: number;
    individual_itemized_contributions: number;
    individual_unitemized_contributions: number;
    last_beginning_image_number: string;
    last_cash_on_hand_end_period: number;
    last_debts_owed_by_committee: number;
    last_debts_owed_to_committee: number;
    last_report_type_full: string;
    last_report_year: number;
    loan_repayments_made: number;
    loans_received: number;
    loans_received_from_candidate: number;
    net_contributions: number;
    net_operating_expenditures: number;
    offsets_to_fundraising_expenditures: number;
    offsets_to_legal_accounting: number;
    offsets_to_operating_expenditures: number;
    operating_expenditures: number;
    other_disbursements: number;
    other_loans_received: number;
    other_political_committee_contributions: number;
    other_receipts: number;
    political_party_committee_contributions: number;
    receipts: number;
    refunded_individual_contributions: number;
    refunded_other_political_committee_contributions: number;
    refunded_political_party_committee_contributions: number;
    repayments_loans_made_by_candidate: number;
    repayments_other_loans: number;
    total_offsets_to_operating_expenditures: number;
    transaction_coverage_date: string;
    transfers_from_affiliated_committee: number;
    transfers_to_other_authorized_committee: number;
}

interface ApiResponse {
    api_version: string;
    pagination: Pagination;
    results: Result[];
}

async function fetchData(candidateIds: string[]) {
    for (const candidateId of candidateIds) {
        const url = `https://api.open.fec.gov/v1/candidate/${candidateId}/totals/?api_key=DEMO_KEY&cycle=2024&election_full=true`;

        try {
            const response = await fetch(url);

            // Check if response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: ApiResponse = await response.json();

            // Check if results are available
            if (data.results.length > 0) {
                const result = data.results[0];

                // Log all fields of the result data
                console.log('Result Data:');

                for (const [key, value] of Object.entries(result)) {
                    console.log(`${key}:`, value);
                }

                const values = getParamValues(result);

                await updateDatabase(values);
            } else {
                console.log('No results found!');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

fetchData([HARRIS_CANDIDATE_ID, KENNEDY_CANDIDATE_ID, TRUMP_CANDIDATE_ID]).then(
    () => process.exit(0),
);
