import { FromSchema } from "json-schema-to-ts"

// 1. json schema の宣言
export const pagenationSearchSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  properties: {
    limit: {
      maximum: 4294967295,
      minimum: 1,
      type: "integer"
    },
    pageIndex: {
      maximum: 4294967295,
      minimum: 1,
      type: "integer"
    },
    tag: {
      type: "string"
    }
  },
  required: [
    "pageIndex",
    "limit"
  ],
  type: "object"
} as const

// 2. json schema から型定義を導出
export type PagenationSearch = FromSchema<typeof pagenationSearchSchema>

// 3. 型定義のデフォルト値インスタンスを作成
export const defaultPagenationSearch: PagenationSearch = { pageIndex: 1, limit: 6 } as const
