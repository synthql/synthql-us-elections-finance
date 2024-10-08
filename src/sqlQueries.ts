export const createTableQuery = `
    CREATE TABLE candidate_finances (
        candidate_contribution DECIMAL(15, 2),
        candidate_election_year INT,
        candidate_id VARCHAR(10) PRIMARY KEY,
        contribution_refunds DECIMAL(15, 2),
        contributions DECIMAL(15, 2),
        coverage_end_date DATE,
        coverage_start_date DATE,
        cycle INT,
        disbursements DECIMAL(15, 2),
        election_full BOOLEAN,
        exempt_legal_accounting_disbursement DECIMAL(15, 2),
        federal_funds DECIMAL(15, 2),
        fundraising_disbursements DECIMAL(15, 2),
        individual_contributions DECIMAL(15, 2),
        individual_itemized_contributions DECIMAL(15, 2),
        individual_unitemized_contributions DECIMAL(15, 2),
        last_beginning_image_number VARCHAR(20),
        last_cash_on_hand_end_period DECIMAL(15, 2),
        last_debts_owed_by_committee DECIMAL(15, 2),
        last_debts_owed_to_committee DECIMAL(15, 2),
        last_report_type_full VARCHAR(20),
        last_report_year INT,
        loan_repayments_made DECIMAL(15, 2),
        loans_received DECIMAL(15, 2),
        loans_received_from_candidate DECIMAL(15, 2),
        net_contributions DECIMAL(15, 2),
        net_operating_expenditures DECIMAL(15, 2),
        offsets_to_fundraising_expenditures DECIMAL(15, 2),
        offsets_to_legal_accounting DECIMAL(15, 2),
        offsets_to_operating_expenditures DECIMAL(15, 2),
        operating_expenditures DECIMAL(15, 2),
        other_disbursements DECIMAL(15, 2),
        other_loans_received DECIMAL(15, 2),
        other_political_committee_contributions DECIMAL(15, 2),
        other_receipts DECIMAL(15, 2),
        political_party_committee_contributions DECIMAL(15, 2),
        receipts DECIMAL(15, 2),
        refunded_individual_contributions DECIMAL(15, 2),
        refunded_other_political_committee_contributions DECIMAL(15, 2),
        refunded_political_party_committee_contributions DECIMAL(15, 2),
        repayments_loans_made_by_candidate DECIMAL(15, 2),
        repayments_other_loans DECIMAL(15, 2),
        total_offsets_to_operating_expenditures DECIMAL(15, 2),
        transaction_coverage_date DATE,
        transfers_from_affiliated_committee DECIMAL(15, 2),
        transfers_to_other_authorized_committee DECIMAL(15, 2),
        created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        last_updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`;

export const insertRowQuery = `
    INSERT INTO candidate_finances (
        candidate_id
    )
    VALUES (
        $1
    );
`;

export const updateRowQuery = `
    UPDATE candidate_finances
    SET
        candidate_contribution = $1,
        candidate_election_year = $2,
        contribution_refunds = $3,
        contributions = $4,
        coverage_end_date = $5,
        coverage_start_date = $6,
        cycle = $7,
        disbursements = $8,
        election_full = $9,
        exempt_legal_accounting_disbursement = $10,
        federal_funds = $11,
        fundraising_disbursements = $12,
        individual_contributions = $13,
        individual_itemized_contributions = $14,
        individual_unitemized_contributions = $15,
        last_beginning_image_number = $16,
        last_cash_on_hand_end_period = $17,
        last_debts_owed_by_committee = $18,
        last_debts_owed_to_committee = $19,
        last_report_type_full = $20,
        last_report_year = $21,
        loan_repayments_made = $22,
        loans_received = $23,
        loans_received_from_candidate = $24,
        net_contributions = $25,
        net_operating_expenditures = $26,
        offsets_to_fundraising_expenditures = $27,
        offsets_to_legal_accounting = $28,
        offsets_to_operating_expenditures = $29,
        operating_expenditures = $30,
        other_disbursements = $31,
        other_loans_received = $32,
        other_political_committee_contributions = $33,
        other_receipts = $34,
        political_party_committee_contributions = $35,
        receipts = $36,
        refunded_individual_contributions = $37,
        refunded_other_political_committee_contributions = $38,
        refunded_political_party_committee_contributions = $39,
        repayments_loans_made_by_candidate = $40,
        repayments_other_loans = $41,
        total_offsets_to_operating_expenditures = $42,
        transaction_coverage_date = $43,
        transfers_from_affiliated_committee = $44,
        transfers_to_other_authorized_committee = $45,
        last_updated_at = DEFAULT
    WHERE candidate_id = $46;
`;
