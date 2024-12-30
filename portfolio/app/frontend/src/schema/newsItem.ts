import { FromSchema } from "json-schema-to-ts"

export const newsItemSchema = {
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
    newsId: {
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
    "newsId",
    "tags",
    "title"
  ],
  type: "object"
} as const

export type NewsItem = FromSchema<typeof newsItemSchema>
