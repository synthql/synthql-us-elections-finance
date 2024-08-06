/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A PG int8
 */
export type PgCatalogInt8 = number;
/**
 * A PG timestamptz
 */
export type PgCatalogTimestamptz = Date;
/**
 * A PG numeric.
 * Note that values of the PG numeric type,
 * are returned as strings from the database.
 * This is because that is how they can be best
 * accurately processed in JavaScript/TypeScript
 */
export type PgCatalogNumeric = string;
/**
 * A PG int4
 */
export type PgCatalogInt4 = number;
/**
 * A PG varchar
 */
export type PgCatalogVarchar = string;
/**
 * A PG date
 */
export type PgCatalogDate = Date;
/**
 * A PG bool
 */
export type PgCatalogBool = boolean;

/**
 * Your database's schema
 */
export interface DB {
    test_table: TableTestTable;
    candidate_finances: TableCandidateFinances;
}
/**
 * Table details:
 *
 * - Schema: public
 * - Table: test_table
 */
export interface TableTestTable {
    columns: {
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: test_table
         * - Column: id
         * - PG type: pg_catalog.int8
         * - PG kind: base
         * - Nullable: false
         * - Generated: BY DEFAULT
         */
        id: {
            type: PgCatalogInt8;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: false;
            isPrimaryKey: true;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: test_table
         * - Column: created_at
         * - PG type: pg_catalog.timestamptz
         * - PG kind: base
         * - Nullable: false
         * - Generated: NEVER
         */
        created_at: {
            type: PgCatalogTimestamptz;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: false;
            isPrimaryKey: false;
        };
    };
}
/**
 * Table details:
 *
 * - Schema: public
 * - Table: candidate_finances
 */
export interface TableCandidateFinances {
    columns: {
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: candidate_contribution
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        candidate_contribution: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: candidate_election_year
         * - PG type: pg_catalog.int4
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        candidate_election_year: {
            type: PgCatalogInt4;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: candidate_id
         * - PG type: pg_catalog.varchar
         * - PG kind: base
         * - Nullable: false
         * - Generated: NEVER
         */
        candidate_id: {
            type: PgCatalogVarchar;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: false;
            isPrimaryKey: true;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: contribution_refunds
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        contribution_refunds: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: coverage_end_date
         * - PG type: pg_catalog.date
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        coverage_end_date: {
            type: PgCatalogDate;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: coverage_start_date
         * - PG type: pg_catalog.date
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        coverage_start_date: {
            type: PgCatalogDate;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: cycle
         * - PG type: pg_catalog.int4
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        cycle: {
            type: PgCatalogInt4;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: disbursements
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        disbursements: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: election_full
         * - PG type: pg_catalog.bool
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        election_full: {
            type: PgCatalogBool;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: exempt_legal_accounting_disbursement
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        exempt_legal_accounting_disbursement: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: federal_funds
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        federal_funds: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: fundraising_disbursements
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        fundraising_disbursements: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: individual_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        individual_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: individual_itemized_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        individual_itemized_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: individual_unitemized_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        individual_unitemized_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: last_beginning_image_number
         * - PG type: pg_catalog.varchar
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        last_beginning_image_number: {
            type: PgCatalogVarchar;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: last_cash_on_hand_end_period
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        last_cash_on_hand_end_period: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: last_debts_owed_by_committee
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        last_debts_owed_by_committee: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: last_debts_owed_to_committee
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        last_debts_owed_to_committee: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: last_report_type_full
         * - PG type: pg_catalog.varchar
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        last_report_type_full: {
            type: PgCatalogVarchar;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: last_report_year
         * - PG type: pg_catalog.int4
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        last_report_year: {
            type: PgCatalogInt4;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: loan_repayments_made
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        loan_repayments_made: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: loans_received
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        loans_received: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: loans_received_from_candidate
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        loans_received_from_candidate: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: net_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        net_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: net_operating_expenditures
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        net_operating_expenditures: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: offsets_to_fundraising_expenditures
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        offsets_to_fundraising_expenditures: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: offsets_to_legal_accounting
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        offsets_to_legal_accounting: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: offsets_to_operating_expenditures
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        offsets_to_operating_expenditures: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: operating_expenditures
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        operating_expenditures: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: other_disbursements
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        other_disbursements: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: other_loans_received
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        other_loans_received: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: other_political_committee_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        other_political_committee_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: other_receipts
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        other_receipts: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: political_party_committee_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        political_party_committee_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: receipts
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        receipts: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: refunded_individual_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        refunded_individual_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: refunded_other_political_committee_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        refunded_other_political_committee_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: refunded_political_party_committee_contributions
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        refunded_political_party_committee_contributions: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: repayments_loans_made_by_candidate
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        repayments_loans_made_by_candidate: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: repayments_other_loans
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        repayments_other_loans: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: total_offsets_to_operating_expenditures
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        total_offsets_to_operating_expenditures: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: transaction_coverage_date
         * - PG type: pg_catalog.date
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        transaction_coverage_date: {
            type: PgCatalogDate;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: transfers_from_affiliated_committee
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        transfers_from_affiliated_committee: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
        /**
         * Column details:
         *
         * - Schema: public
         * - Table: candidate_finances
         * - Column: transfers_to_other_authorized_committee
         * - PG type: pg_catalog.numeric
         * - PG kind: base
         * - Nullable: true
         * - Generated: NEVER
         */
        transfers_to_other_authorized_committee: {
            type: PgCatalogNumeric;
            selectable: true;
            includable: true;
            whereable: true;
            nullable: true;
            isPrimaryKey: false;
        };
    };
}
