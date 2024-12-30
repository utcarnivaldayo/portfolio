import { FromSchema } from "json-schema-to-ts"

export const biographyItemSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  properties: {
    yearMonth: {
      pattern: "^[0-9]{4}-[0-9]{2}$",
      type: "string"
    },
    event: {
      type: "string"
    },
    link: {
      format: "uri",
      type: "string"
    },
    biographyId: {
      minimum: 1,
      type: "integer"
    },
  },
  required: [
    "yearMonth",
    "event",
    "biographyId",
  ],
  type: "object"
} as const

export type BiographyItem = FromSchema<typeof biographyItemSchema>
