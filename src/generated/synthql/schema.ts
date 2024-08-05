import { Schema } from "@synthql/queries";
import { DB } from "./db";
export const schema: Schema<DB> = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  type: "object",
  description: "Your database's schema",
  properties: {
    actor: {
      type: "object",
      description: "Table details:\n\n- Schema: public\n- Table: actor",
      properties: {
        columns: {
          type: "object",
          properties: {
            actor_id: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: actor_id\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.int4",
                  type: "integer",
                  minimum: -2147483648,
                  maximum: 2147483647,
                  description: "A PG int4",
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
            first_name: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: first_name\n- PG type: pg_catalog.text\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.text",
                  type: "string",
                  description: "A PG text",
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
            last_name: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: last_name\n- PG type: pg_catalog.text\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.text",
                  type: "string",
                  description: "A PG text",
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
            last_update: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: last_update\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
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
          required: ["actor_id", "first_name", "last_name", "last_update"],
          additionalProperties: false,
        },
      },
      required: ["columns"],
      additionalProperties: false,
    },
  },
  required: ["actor"],
  additionalProperties: false,
  $defs: {
    table_actor: {
      type: "object",
      description: "Table details:\n\n- Schema: public\n- Table: actor",
      properties: {
        columns: {
          type: "object",
          properties: {
            actor_id: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: actor_id\n- PG type: pg_catalog.int4\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.int4",
                  type: "integer",
                  minimum: -2147483648,
                  maximum: 2147483647,
                  description: "A PG int4",
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
            first_name: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: first_name\n- PG type: pg_catalog.text\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.text",
                  type: "string",
                  description: "A PG text",
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
            last_name: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: last_name\n- PG type: pg_catalog.text\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
              properties: {
                type: {
                  id: "pg_catalog.text",
                  type: "string",
                  description: "A PG text",
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
            last_update: {
              type: "object",
              description:
                "Column details:\n\n- Schema: public\n- Table: actor\n- Column: last_update\n- PG type: pg_catalog.timestamptz\n- PG kind: base\n- Nullable: false\n- Generated: NEVER",
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
          required: ["actor_id", "first_name", "last_name", "last_update"],
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
    "public.mpaa_rating.enum": {
      id: "public.mpaa_rating.enum",
      type: "string",
      enum: ["G", "PG", "PG-13", "R", "NC-17"],
      description: "The mpaa_rating enum from the public schema",
    },
    "public.bıgınt.domain": {
      id: "pg_catalog.int8",
      title: "public.bıgınt.domain",
      type: "integer",
      description: "The bıgınt domain from the public schema",
    },
    "public.year.domain": {
      id: "pg_catalog.int4",
      title: "public.year.domain",
      type: "integer",
      description: "The year domain from the public schema",
    },
  },
};
