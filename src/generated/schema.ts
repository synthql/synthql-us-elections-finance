import { Schema } from '@synthql/queries';
import { DB } from './db';
export const schema: Schema<DB> = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    type: 'object',
    description: "Your database's schema",
    properties: {
        test_table: {
            type: 'object',
            description:
                'Table details:\n\n- Schema: public\n- Table: test_table',
            properties: {
                columns: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: test_table\n- Column: id\n- PG type: pg_catalog.int8\n- PG kind: base\n- Nullable: false\n- Generated: BY DEFAULT',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int8',
                                    type: 'integer',
                                    minimum: -9223372036854776000,
                                    maximum: 9223372036854776000,
                                    description: 'A PG int8',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: true,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        created_at: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: test_table\n- Column: created_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.timestamptz',
                                    type: 'string',
                                    format: 'date-time',
                                    tsType: 'Date',
                                    description: 'A PG timestamptz',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                    },
                    required: ['id', 'created_at'],
                    additionalProperties: false,
                },
            },
            required: ['columns'],
            additionalProperties: false,
        },
        candidate_finances: {
            type: 'object',
            description:
                'Table details:\n\n- Schema: public\n- Table: candidate_finances',
            properties: {
                columns: {
                    type: 'object',
                    properties: {
                        candidate_contribution: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: candidate_contribution\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        candidate_election_year: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: candidate_election_year\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int4',
                                    type: 'integer',
                                    minimum: -2147483648,
                                    maximum: 2147483647,
                                    description: 'A PG int4',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        candidate_id: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: candidate_id\n- PG type: pg_catalog.varchar\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.varchar',
                                    type: 'string',
                                    description: 'A PG varchar',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: true,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        contribution_refunds: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: contribution_refunds\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        coverage_end_date: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: coverage_end_date\n- PG type: pg_catalog.date\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.date',
                                    type: 'string',
                                    format: 'date',
                                    tsType: 'Date',
                                    description: 'A PG date',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        coverage_start_date: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: coverage_start_date\n- PG type: pg_catalog.date\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.date',
                                    type: 'string',
                                    format: 'date',
                                    tsType: 'Date',
                                    description: 'A PG date',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        cycle: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: cycle\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int4',
                                    type: 'integer',
                                    minimum: -2147483648,
                                    maximum: 2147483647,
                                    description: 'A PG int4',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        disbursements: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: disbursements\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        election_full: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: election_full\n- PG type: pg_catalog.bool\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.bool',
                                    type: 'boolean',
                                    description: 'A PG bool',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        exempt_legal_accounting_disbursement: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: exempt_legal_accounting_disbursement\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        federal_funds: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: federal_funds\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        fundraising_disbursements: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: fundraising_disbursements\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        individual_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: individual_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        individual_itemized_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: individual_itemized_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        individual_unitemized_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: individual_unitemized_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_beginning_image_number: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_beginning_image_number\n- PG type: pg_catalog.varchar\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.varchar',
                                    type: 'string',
                                    description: 'A PG varchar',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_cash_on_hand_end_period: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_cash_on_hand_end_period\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_debts_owed_by_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_debts_owed_by_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_debts_owed_to_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_debts_owed_to_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_report_type_full: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_report_type_full\n- PG type: pg_catalog.varchar\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.varchar',
                                    type: 'string',
                                    description: 'A PG varchar',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_report_year: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_report_year\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int4',
                                    type: 'integer',
                                    minimum: -2147483648,
                                    maximum: 2147483647,
                                    description: 'A PG int4',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        loan_repayments_made: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: loan_repayments_made\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        loans_received: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: loans_received\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        loans_received_from_candidate: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: loans_received_from_candidate\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        net_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: net_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        net_operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: net_operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        offsets_to_fundraising_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: offsets_to_fundraising_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        offsets_to_legal_accounting: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: offsets_to_legal_accounting\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        offsets_to_operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: offsets_to_operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_disbursements: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_disbursements\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_loans_received: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_loans_received\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_political_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_political_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_receipts: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_receipts\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        political_party_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: political_party_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        receipts: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: receipts\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        refunded_individual_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: refunded_individual_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        refunded_other_political_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: refunded_other_political_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        refunded_political_party_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: refunded_political_party_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        repayments_loans_made_by_candidate: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: repayments_loans_made_by_candidate\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        repayments_other_loans: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: repayments_other_loans\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        total_offsets_to_operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: total_offsets_to_operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        transaction_coverage_date: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: transaction_coverage_date\n- PG type: pg_catalog.date\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.date',
                                    type: 'string',
                                    format: 'date',
                                    tsType: 'Date',
                                    description: 'A PG date',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        transfers_from_affiliated_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: transfers_from_affiliated_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        transfers_to_other_authorized_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: transfers_to_other_authorized_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        created_at: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: created_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.timestamptz',
                                    type: 'string',
                                    format: 'date-time',
                                    tsType: 'Date',
                                    description: 'A PG timestamptz',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_updated_at: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_updated_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.timestamptz',
                                    type: 'string',
                                    format: 'date-time',
                                    tsType: 'Date',
                                    description: 'A PG timestamptz',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                    },
                    required: [
                        'candidate_contribution',
                        'candidate_election_year',
                        'candidate_id',
                        'contribution_refunds',
                        'contributions',
                        'coverage_end_date',
                        'coverage_start_date',
                        'cycle',
                        'disbursements',
                        'election_full',
                        'exempt_legal_accounting_disbursement',
                        'federal_funds',
                        'fundraising_disbursements',
                        'individual_contributions',
                        'individual_itemized_contributions',
                        'individual_unitemized_contributions',
                        'last_beginning_image_number',
                        'last_cash_on_hand_end_period',
                        'last_debts_owed_by_committee',
                        'last_debts_owed_to_committee',
                        'last_report_type_full',
                        'last_report_year',
                        'loan_repayments_made',
                        'loans_received',
                        'loans_received_from_candidate',
                        'net_contributions',
                        'net_operating_expenditures',
                        'offsets_to_fundraising_expenditures',
                        'offsets_to_legal_accounting',
                        'offsets_to_operating_expenditures',
                        'operating_expenditures',
                        'other_disbursements',
                        'other_loans_received',
                        'other_political_committee_contributions',
                        'other_receipts',
                        'political_party_committee_contributions',
                        'receipts',
                        'refunded_individual_contributions',
                        'refunded_other_political_committee_contributions',
                        'refunded_political_party_committee_contributions',
                        'repayments_loans_made_by_candidate',
                        'repayments_other_loans',
                        'total_offsets_to_operating_expenditures',
                        'transaction_coverage_date',
                        'transfers_from_affiliated_committee',
                        'transfers_to_other_authorized_committee',
                        'created_at',
                        'last_updated_at',
                    ],
                    additionalProperties: false,
                },
            },
            required: ['columns'],
            additionalProperties: false,
        },
    },
    required: ['test_table', 'candidate_finances'],
    additionalProperties: false,
    $defs: {
        'table_test_table': {
            type: 'object',
            description:
                'Table details:\n\n- Schema: public\n- Table: test_table',
            properties: {
                columns: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: test_table\n- Column: id\n- PG type: pg_catalog.int8\n- PG kind: base\n- Nullable: false\n- Generated: BY DEFAULT',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int8',
                                    type: 'integer',
                                    minimum: -9223372036854776000,
                                    maximum: 9223372036854776000,
                                    description: 'A PG int8',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: true,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        created_at: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: test_table\n- Column: created_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.timestamptz',
                                    type: 'string',
                                    format: 'date-time',
                                    tsType: 'Date',
                                    description: 'A PG timestamptz',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                    },
                    required: ['id', 'created_at'],
                    additionalProperties: false,
                },
            },
            required: ['columns'],
            additionalProperties: false,
        },
        'table_candidate_finances': {
            type: 'object',
            description:
                'Table details:\n\n- Schema: public\n- Table: candidate_finances',
            properties: {
                columns: {
                    type: 'object',
                    properties: {
                        candidate_contribution: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: candidate_contribution\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        candidate_election_year: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: candidate_election_year\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int4',
                                    type: 'integer',
                                    minimum: -2147483648,
                                    maximum: 2147483647,
                                    description: 'A PG int4',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        candidate_id: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: candidate_id\n- PG type: pg_catalog.varchar\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.varchar',
                                    type: 'string',
                                    description: 'A PG varchar',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: true,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        contribution_refunds: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: contribution_refunds\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        coverage_end_date: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: coverage_end_date\n- PG type: pg_catalog.date\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.date',
                                    type: 'string',
                                    format: 'date',
                                    tsType: 'Date',
                                    description: 'A PG date',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        coverage_start_date: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: coverage_start_date\n- PG type: pg_catalog.date\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.date',
                                    type: 'string',
                                    format: 'date',
                                    tsType: 'Date',
                                    description: 'A PG date',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        cycle: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: cycle\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int4',
                                    type: 'integer',
                                    minimum: -2147483648,
                                    maximum: 2147483647,
                                    description: 'A PG int4',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        disbursements: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: disbursements\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        election_full: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: election_full\n- PG type: pg_catalog.bool\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.bool',
                                    type: 'boolean',
                                    description: 'A PG bool',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        exempt_legal_accounting_disbursement: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: exempt_legal_accounting_disbursement\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        federal_funds: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: federal_funds\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        fundraising_disbursements: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: fundraising_disbursements\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        individual_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: individual_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        individual_itemized_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: individual_itemized_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        individual_unitemized_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: individual_unitemized_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_beginning_image_number: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_beginning_image_number\n- PG type: pg_catalog.varchar\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.varchar',
                                    type: 'string',
                                    description: 'A PG varchar',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_cash_on_hand_end_period: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_cash_on_hand_end_period\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_debts_owed_by_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_debts_owed_by_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_debts_owed_to_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_debts_owed_to_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_report_type_full: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_report_type_full\n- PG type: pg_catalog.varchar\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.varchar',
                                    type: 'string',
                                    description: 'A PG varchar',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_report_year: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_report_year\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.int4',
                                    type: 'integer',
                                    minimum: -2147483648,
                                    maximum: 2147483647,
                                    description: 'A PG int4',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        loan_repayments_made: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: loan_repayments_made\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        loans_received: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: loans_received\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        loans_received_from_candidate: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: loans_received_from_candidate\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        net_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: net_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        net_operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: net_operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        offsets_to_fundraising_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: offsets_to_fundraising_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        offsets_to_legal_accounting: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: offsets_to_legal_accounting\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        offsets_to_operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: offsets_to_operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_disbursements: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_disbursements\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_loans_received: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_loans_received\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_political_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_political_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        other_receipts: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: other_receipts\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        political_party_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: political_party_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        receipts: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: receipts\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        refunded_individual_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: refunded_individual_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        refunded_other_political_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: refunded_other_political_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        refunded_political_party_committee_contributions: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: refunded_political_party_committee_contributions\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        repayments_loans_made_by_candidate: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: repayments_loans_made_by_candidate\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        repayments_other_loans: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: repayments_other_loans\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        total_offsets_to_operating_expenditures: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: total_offsets_to_operating_expenditures\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        transaction_coverage_date: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: transaction_coverage_date\n- PG type: pg_catalog.date\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.date',
                                    type: 'string',
                                    format: 'date',
                                    tsType: 'Date',
                                    description: 'A PG date',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        transfers_from_affiliated_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: transfers_from_affiliated_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        transfers_to_other_authorized_committee: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: transfers_to_other_authorized_committee\n- PG type: pg_catalog.numeric\n- PG kind: base\n- Nullable: true\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.numeric',
                                    type: 'string',
                                    description:
                                        'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        created_at: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: created_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.timestamptz',
                                    type: 'string',
                                    format: 'date-time',
                                    tsType: 'Date',
                                    description: 'A PG timestamptz',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                        last_updated_at: {
                            type: 'object',
                            description:
                                'Column details:\n\n- Schema: public\n- Table: candidate_finances\n- Column: last_updated_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER',
                            properties: {
                                type: {
                                    id: 'pg_catalog.timestamptz',
                                    type: 'string',
                                    format: 'date-time',
                                    tsType: 'Date',
                                    description: 'A PG timestamptz',
                                },
                                selectable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                includable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                whereable: {
                                    type: 'boolean',
                                    const: true,
                                },
                                nullable: {
                                    type: 'boolean',
                                    const: false,
                                },
                                isPrimaryKey: {
                                    type: 'boolean',
                                    const: false,
                                },
                            },
                            required: [
                                'type',
                                'selectable',
                                'includable',
                                'whereable',
                                'isPrimaryKey',
                                'nullable',
                            ],
                            additionalProperties: false,
                        },
                    },
                    required: [
                        'candidate_contribution',
                        'candidate_election_year',
                        'candidate_id',
                        'contribution_refunds',
                        'contributions',
                        'coverage_end_date',
                        'coverage_start_date',
                        'cycle',
                        'disbursements',
                        'election_full',
                        'exempt_legal_accounting_disbursement',
                        'federal_funds',
                        'fundraising_disbursements',
                        'individual_contributions',
                        'individual_itemized_contributions',
                        'individual_unitemized_contributions',
                        'last_beginning_image_number',
                        'last_cash_on_hand_end_period',
                        'last_debts_owed_by_committee',
                        'last_debts_owed_to_committee',
                        'last_report_type_full',
                        'last_report_year',
                        'loan_repayments_made',
                        'loans_received',
                        'loans_received_from_candidate',
                        'net_contributions',
                        'net_operating_expenditures',
                        'offsets_to_fundraising_expenditures',
                        'offsets_to_legal_accounting',
                        'offsets_to_operating_expenditures',
                        'operating_expenditures',
                        'other_disbursements',
                        'other_loans_received',
                        'other_political_committee_contributions',
                        'other_receipts',
                        'political_party_committee_contributions',
                        'receipts',
                        'refunded_individual_contributions',
                        'refunded_other_political_committee_contributions',
                        'refunded_political_party_committee_contributions',
                        'repayments_loans_made_by_candidate',
                        'repayments_other_loans',
                        'total_offsets_to_operating_expenditures',
                        'transaction_coverage_date',
                        'transfers_from_affiliated_committee',
                        'transfers_to_other_authorized_committee',
                        'created_at',
                        'last_updated_at',
                    ],
                    additionalProperties: false,
                },
            },
            required: ['columns'],
            additionalProperties: false,
        },
        'pg_catalog.text': {
            id: 'pg_catalog.text',
            type: 'string',
            description: 'A PG text',
        },
        'pg_catalog.varchar': {
            id: 'pg_catalog.varchar',
            type: 'string',
            description: 'A PG varchar',
        },
        'pg_catalog.bool': {
            id: 'pg_catalog.bool',
            type: 'boolean',
            description: 'A PG bool',
        },
        'pg_catalog.date': {
            id: 'pg_catalog.date',
            type: 'string',
            format: 'date',
            tsType: 'Date',
            description: 'A PG date',
        },
        'pg_catalog.timestamp': {
            id: 'pg_catalog.timestamp',
            type: 'string',
            format: 'date-time',
            tsType: 'Date',
            description: 'A PG timestamp',
        },
        'pg_catalog.timestamptz': {
            id: 'pg_catalog.timestamptz',
            type: 'string',
            format: 'date-time',
            tsType: 'Date',
            description: 'A PG timestamptz',
        },
        'pg_catalog.numeric': {
            id: 'pg_catalog.numeric',
            type: 'string',
            description:
                'A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript',
        },
        'pg_catalog.int2': {
            id: 'pg_catalog.int2',
            type: 'integer',
            minimum: -32768,
            maximum: 32767,
            description: 'A PG int2',
        },
        'pg_catalog.int4': {
            id: 'pg_catalog.int4',
            type: 'integer',
            minimum: -2147483648,
            maximum: 2147483647,
            description: 'A PG int4',
        },
        'pg_catalog.int8': {
            id: 'pg_catalog.int8',
            type: 'integer',
            minimum: -9223372036854776000,
            maximum: 9223372036854776000,
            description: 'A PG int8',
        },
        'pg_catalog.float4': {
            id: 'pg_catalog.float4',
            type: 'number',
            description: 'A PG float4',
        },
        'pg_catalog.float8': {
            id: 'pg_catalog.float8',
            type: 'number',
            description: 'A PG float8',
        },
        'pg_catalog.tsvector': {
            id: 'pg_catalog.tsvector',
            type: 'string',
            description: 'A PG tsvector',
        },
        'pg_catalog.bpchar': {
            id: 'pg_catalog.bpchar',
            type: 'string',
            description: 'A PG bpchar',
        },
        'pg_catalog.bytea': {
            id: 'pg_catalog.bytea',
            type: 'string',
            description: 'A PG bytea',
        },
        'pg_catalog.uuid': {
            id: 'pg_catalog.uuid',
            type: 'string',
            format: 'uuid',
            description: 'A PG uuid',
        },
        'pg_catalog.json': {
            id: 'pg_catalog.json',
            type: 'object',
            description: 'A PG json',
        },
        'pg_catalog.jsonb': {
            id: 'pg_catalog.jsonb',
            type: 'object',
            description: 'A PG jsonb',
        },
        'public.chemo_regime.enum': {
            id: 'public.chemo_regime.enum',
            type: 'string',
            enum: ['cisplatin', 'peb', 'other'],
            description: 'The chemo_regime enum from the public schema',
        },
        'public.chemo_type.enum': {
            id: 'public.chemo_type.enum',
            type: 'string',
            enum: ['not_needed', 'planned', 'initiated', 'completed'],
            description: 'The chemo_type enum from the public schema',
        },
        'public.lymph_node_resection.enum': {
            id: 'public.lymph_node_resection.enum',
            type: 'string',
            enum: ['none', 'local', 'extended'],
            description: 'The lymph_node_resection enum from the public schema',
        },
        'public.orchidectomy_type.enum': {
            id: 'public.orchidectomy_type.enum',
            type: 'string',
            enum: ['one_side', 'both_sides'],
            description: 'The orchidectomy_type enum from the public schema',
        },
        'public.relationship_status.enum': {
            id: 'public.relationship_status.enum',
            type: 'string',
            enum: ['single', 'married', 'long_term_relationship'],
            description: 'The relationship_status enum from the public schema',
        },
    },
};
