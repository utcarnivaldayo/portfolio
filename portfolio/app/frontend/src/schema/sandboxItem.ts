import { FromSchema } from "json-schema-to-ts"

export const sandboxItemSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  properties: {
    date: {
      format: "date",
      type: "string"
    },
    link: {
      format: "uri",
      type: "string"
    },
    sandboxId: {
      minimum: 1,
      type: "integer"
    },
    tags: {
      items: {
        type: "string"
      },
      type: "array"
    },
    title: {
      type: "string"
    }
  },
  required: [
    "date",
    "link",
    "sandboxId",
    "tags",
    "title"
  ],
  type: "object"
} as const

export type SandboxItem = FromSchema<typeof sandboxItemSchema>