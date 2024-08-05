import { Schema } from "@synthql/queries";
import { DB } from "./db";
export const schema: Schema<DB> = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  type: "object",
  description: "Your database's schema",
  properties: {
    test_table_delete_this_later: {
      type: "object",
      description:
        "Table details:\n\n- Schema: public\n- Table: test_table_delete_this_later",
      properties: {
        columns: {
          type: "object",
          properties: {
            id: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: test_table_delete_this_later\n- Column: id\n- PG type: pg_catalog.int8\n- PG kind: base\n- Nullable: false\n- Generated: BY DEFAULT",
              properties: {
                type: {
                  id: "pg_catalog.int8",
                  type: "integer",
                  minimum: -9223372036854776000,
                  maximum: 9223372036854776000,
                  description: "A PG int8",
                },
                selectable: {
                  type: "boolean",
                  const: true,
                },
                includable: {
                  type: "boolean",
                  const: true,
                },
                whereable: {
                  type: "boolean",
                  const: true,
                },
                nullable: {
                  type: "boolean",
                  const: false,
                },
                isPrimaryKey: {
                  type: "boolean",
                  const: true,
                },
              },
              required: [
                "type",
                "selectable",
                "includable",
                "whereable",
                "isPrimaryKey",
                "nullable",
              ],
              additionalProperties: false,
            },
            created_at: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: test_table_delete_this_later\n- Column: created_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.timestamptz",
                  type: "string",
                  format: "date-time",
                  tsType: "Date",
                  description: "A PG timestamptz",
                },
                selectable: {
                  type: "boolean",
                  const: true,
                },
                includable: {
                  type: "boolean",
                  const: true,
                },
                whereable: {
                  type: "boolean",
                  const: true,
                },
                nullable: {
                  type: "boolean",
                  const: false,
                },
                isPrimaryKey: {
                  type: "boolean",
                  const: false,
                },
              },
              required: [
                "type",
                "selectable",
                "includable",
                "whereable",
                "isPrimaryKey",
                "nullable",
              ],
              additionalProperties: false,
            },
          },
          required: ["id", "created_at"],
          additionalProperties: false,
        },
      },
      required: ["columns"],
      additionalProperties: false,
    },
  },
  required: ["test_table_delete_this_later"],
  additionalProperties: false,
  $defs: {
    table_test_table_delete_this_later: {
      type: "object",
      description:
        "Table details:\n\n- Schema: public\n- Table: test_table_delete_this_later",
      properties: {
        columns: {
          type: "object",
          properties: {
            id: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: test_table_delete_this_later\n- Column: id\n- PG type: pg_catalog.int8\n- PG kind: base\n- Nullable: false\n- Generated: BY DEFAULT",
              properties: {
                type: {
                  id: "pg_catalog.int8",
                  type: "integer",
                  minimum: -9223372036854776000,
                  maximum: 9223372036854776000,
                  description: "A PG int8",
                },
                selectable: {
                  type: "boolean",
                  const: true,
                },
                includable: {
                  type: "boolean",
                  const: true,
                },
                whereable: {
                  type: "boolean",
                  const: true,
                },
                nullable: {
                  type: "boolean",
                  const: false,
                },
                isPrimaryKey: {
                  type: "boolean",
                  const: true,
                },
              },
              required: [
                "type",
                "selectable",
                "includable",
                "whereable",
                "isPrimaryKey",
                "nullable",
              ],
              additionalProperties: false,
            },
            created_at: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: test_table_delete_this_later\n- Column: created_at\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.timestamptz",
                  type: "string",
                  format: "date-time",
                  tsType: "Date",
                  description: "A PG timestamptz",
                },
                selectable: {
                  type: "boolean",
                  const: true,
                },
                includable: {
                  type: "boolean",
                  const: true,
                },
                whereable: {
                  type: "boolean",
                  const: true,
                },
                nullable: {
                  type: "boolean",
                  const: false,
                },
                isPrimaryKey: {
                  type: "boolean",
                  const: false,
                },
              },
              required: [
                "type",
                "selectable",
                "includable",
                "whereable",
                "isPrimaryKey",
                "nullable",
              ],
              additionalProperties: false,
            },
          },
          required: ["id", "created_at"],
          additionalProperties: false,
        },
      },
      required: ["columns"],
      additionalProperties: false,
    },
    "pg_catalog.text": {
      id: "pg_catalog.text",
      type: "string",
      description: "A PG text",
    },
    "pg_catalog.varchar": {
      id: "pg_catalog.varchar",
      type: "string",
      description: "A PG varchar",
    },
    "pg_catalog.bool": {
      id: "pg_catalog.bool",
      type: "boolean",
      description: "A PG bool",
    },
    "pg_catalog.date": {
      id: "pg_catalog.date",
      type: "string",
      format: "date",
      tsType: "Date",
      description: "A PG date",
    },
    "pg_catalog.timestamp": {
      id: "pg_catalog.timestamp",
      type: "string",
      format: "date-time",
      tsType: "Date",
      description: "A PG timestamp",
    },
    "pg_catalog.timestamptz": {
      id: "pg_catalog.timestamptz",
      type: "string",
      format: "date-time",
      tsType: "Date",
      description: "A PG timestamptz",
    },
    "pg_catalog.numeric": {
      id: "pg_catalog.numeric",
      type: "string",
      description:
        "A PG numeric.\nNote that values of the PG numeric type,\nare returned as strings from the database.\nThis is because that is how they can be best\naccurately processed in JavaScript/TypeScript",
    },
    "pg_catalog.int2": {
      id: "pg_catalog.int2",
      type: "integer",
      minimum: -32768,
      maximum: 32767,
      description: "A PG int2",
    },
    "pg_catalog.int4": {
      id: "pg_catalog.int4",
      type: "integer",
      minimum: -2147483648,
      maximum: 2147483647,
      description: "A PG int4",
    },
    "pg_catalog.int8": {
      id: "pg_catalog.int8",
      type: "integer",
      minimum: -9223372036854776000,
      maximum: 9223372036854776000,
      description: "A PG int8",
    },
    "pg_catalog.float4": {
      id: "pg_catalog.float4",
      type: "number",
      description: "A PG float4",
    },
    "pg_catalog.float8": {
      id: "pg_catalog.float8",
      type: "number",
      description: "A PG float8",
    },
    "pg_catalog.tsvector": {
      id: "pg_catalog.tsvector",
      type: "string",
      description: "A PG tsvector",
    },
    "pg_catalog.bpchar": {
      id: "pg_catalog.bpchar",
      type: "string",
      description: "A PG bpchar",
    },
    "pg_catalog.bytea": {
      id: "pg_catalog.bytea",
      type: "string",
      description: "A PG bytea",
    },
    "pg_catalog.uuid": {
      id: "pg_catalog.uuid",
      type: "string",
      format: "uuid",
      description: "A PG uuid",
    },
    "pg_catalog.json": {
      id: "pg_catalog.json",
      type: "object",
      description: "A PG json",
    },
    "pg_catalog.jsonb": {
      id: "pg_catalog.jsonb",
      type: "object",
      description: "A PG jsonb",
    },
    "public.chemo_regime.enum": {
      id: "public.chemo_regime.enum",
      type: "string",
      enum: ["cisplatin", "peb", "other"],
      description: "The chemo_regime enum from the public schema",
    },
    "public.chemo_type.enum": {
      id: "public.chemo_type.enum",
      type: "string",
      enum: ["not_needed", "planned", "initiated", "completed"],
      description: "The chemo_type enum from the public schema",
    },
    "public.lymph_node_resection.enum": {
      id: "public.lymph_node_resection.enum",
      type: "string",
      enum: ["none", "local", "extended"],
      description: "The lymph_node_resection enum from the public schema",
    },
    "public.orchidectomy_type.enum": {
      id: "public.orchidectomy_type.enum",
      type: "string",
      enum: ["one_side", "both_sides"],
      description: "The orchidectomy_type enum from the public schema",
    },
    "public.relationship_status.enum": {
      id: "public.relationship_status.enum",
      type: "string",
      enum: ["single", "married", "long_term_relationship"],
      description: "The relationship_status enum from the public schema",
    },
  },
};
