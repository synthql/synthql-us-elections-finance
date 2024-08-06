import { Result } from './fetch';

export type Value = string | number | boolean | null;

export function getParamValues(result: Result): Array<Value> {
    return [
        result.candidate_contribution, // candidate_contribution
        result.candidate_election_year, // candidate_election_year
        result.contribution_refunds, // contribution_refunds
        result.contributions, // contributions
        result.coverage_end_date, // coverage_end_date
        result.coverage_start_date, // coverage_start_date
        result.cycle, // cycle
        result.disbursements, // disbursements
        result.election_full, // election_full
        result.exempt_legal_accounting_disbursement, // exempt_legal_accounting_disbursement
        result.federal_funds, // federal_funds
        result.fundraising_disbursements, // fundraising_disbursements
        result.individual_contributions, // individual_contributions
        result.individual_itemized_contributions, // individual_itemized_contributions
        result.individual_unitemized_contributions, // individual_unitemized_contributions
        result.last_beginning_image_number, // last_beginning_image_number
        result.last_cash_on_hand_end_period, // last_cash_on_hand_end_period
        result.last_debts_owed_by_committee, // last_debts_owed_by_committee
        result.last_debts_owed_to_committee, // last_debts_owed_to_committee
        result.last_report_type_full, // last_report_type_full
        result.last_report_year, // last_report_year
        result.loan_repayments_made, // loan_repayments_made
        result.loans_received, // loans_received
        result.loans_received_from_candidate, // loans_received_from_candidate
        result.net_contributions, // net_contributions
        result.net_operating_expenditures, // net_operating_expenditures
        result.offsets_to_fundraising_expenditures, // offsets_to_fundraising_expenditures
        result.offsets_to_legal_accounting, // offsets_to_legal_accounting
        result.offsets_to_operating_expenditures, // offsets_to_operating_expenditures
        result.operating_expenditures, // operating_expenditures
        result.other_disbursements, // other_disbursements
        result.other_loans_received, // other_loans_received
        result.other_political_committee_contributions, // other_political_committee_contributions
        result.other_receipts, // other_receipts
        result.political_party_committee_contributions, // political_party_committee_contributions
        result.receipts, // receipts
        result.refunded_individual_contributions, // refunded_individual_contributions
        result.refunded_other_political_committee_contributions, // refunded_other_political_committee_contributions
        result.refunded_political_party_committee_contributions, // refunded_political_party_committee_contributions
        result.repayments_loans_made_by_candidate, // repayments_loans_made_by_candidate
        result.repayments_other_loans, // repayments_other_loans
        result.total_offsets_to_operating_expenditures, // total_offsets_to_operating_expenditures
        result.transaction_coverage_date, // transaction_coverage_date
        result.transfers_from_affiliated_committee, // transfers_from_affiliated_committee
        result.transfers_to_other_authorized_committee, // transfers_to_other_authorized_committee
        result.candidate_id, // candidate_id (for WHERE clause)
    ];
}
