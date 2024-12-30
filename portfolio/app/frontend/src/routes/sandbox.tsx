import { createFileRoute } from '@tanstack/react-router'
import { Card } from '../components/Card'
import sandboxMaster from '../assets/masterdata/sandboxMaster.json'
import { AjvSingleton } from '../util/ajv'
import { sandboxItemSchema, SandboxItem } from '../schema/sandboxItem.ts'
import {pagenationSearchSchema, PagenationSearch, defaultPagenationSearch } from '../schema/pagenationSearch.ts'
import { PageNationButton, isVaildPageAndLimit } from '../components/PageNationButton'

const validatePageNationSearch = (query: Record<string, unknown>): PagenationSearch => {
  const ajv = AjvSingleton.getInstance()
  const validatePageNationSearch = ajv.compile(pagenationSearchSchema)
  if (!validatePageNationSearch(query)) {
    return defaultPagenationSearch
  }
  const pageIndex = query.pageIndex as number
  const limit = query.limit as number
  const tag = query.tag as string | undefined
  const tagedLength = tag === undefined ? sandboxMaster.length : sandboxMaster.filter((item: SandboxItem) => item.tags.includes(tag)).length
  return isVaildPageAndLimit(pageIndex, limit, tagedLength) ? query as PagenationSearch : defaultPagenationSearch
}

const SANDBOX_PATH='/sandbox'

const Sandbox = () => {
  const { pageIndex, limit, tag } = Route.useSearch()

  const validateMaster = () => {
    const ajv = AjvSingleton.getInstance()
    const validateSandboxItem = ajv.compile(sandboxItemSchema)
    sandboxMaster.forEach((sandboxItem: SandboxItem) => {
      if (!validateSandboxItem(sandboxItem)) {
        console.log(sandboxItem)
        console.log(validateSandboxItem.errors)
      }
    })
  }

  const filterByPageNation = (sandboxItems: SandboxItem[], pageIndex: number, limit: number, tag: string | undefined) => {
    return [...sandboxItems]
      .filter((item: SandboxItem) => tag === undefined || item.tags.includes(tag))
      .sort((a: SandboxItem, b: SandboxItem) => b.sandboxId - a.sandboxId)
      .slice((pageIndex - 1) * limit, pageIndex * limit)
  }

  const getSandboxCardList = (path: string, sandboxItems: SandboxItem[]) => {
    const no_content = (
      <div className="flex w-screen items-center justify-center">
        <div className="text-2xl text-center font-mplus1p">
          お探しの Sandbox はありません
        </div>
      </div>
    );
    const contents = sandboxItems.map((sandboxItem: SandboxItem) => {
        return (
          <Card
            key={sandboxItem.sandboxId}
            path={path}
            title={sandboxItem.title}
            date={sandboxItem.date.replace(/-/g, '/')}
            link={sandboxItem.link}
            tags={sandboxItem.tags}
          />
        )
      }
    );
    return contents.length > 0 ? contents : no_content
  }

  validateMaster()
  const sandboxItems = filterByPageNation(sandboxMaster, pageIndex, limit, tag)
  const tagedLength = tag === undefined ? sandboxMaster.length : sandboxMaster.filter((item: SandboxItem) => item.tags.includes(tag)).length

  return (
    <div className="bg-teal-50">
      <div className="bg-top-image bg-cover bg-left-top bg-no-repeat w-screen flex items-center justify-center">
        <h1 className="py-5 text-4xl text-slate-200 text-center font-mplus1p">
          - Sandbox -
        </h1>
      </div>
      <div className="py-5 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {getSandboxCardList(SANDBOX_PATH, sandboxItems)}
        </div>
      </div>
      <PageNationButton path={SANDBOX_PATH} pageIndex={pageIndex} limit={limit} itemMax={tagedLength} />
    </div>
  )
}

export const Route = createFileRoute(SANDBOX_PATH)({
  component: Sandbox,
  validateSearch: validatePageNationSearch,
})
