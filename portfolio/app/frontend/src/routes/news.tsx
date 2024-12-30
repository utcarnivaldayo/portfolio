import { createFileRoute } from '@tanstack/react-router'
import { Card } from '../components/Card'
import newsMaster from '../assets/masterdata/newsMaster.json'
import { AjvSingleton } from '../util/ajv'
import { newsItemSchema, NewsItem } from '../schema/newsItem.ts'
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
  const tagedLength = tag === undefined ? newsMaster.length : newsMaster.filter((item: NewsItem) => item.tags.includes(tag)).length
  return isVaildPageAndLimit(pageIndex, limit, tagedLength) ? query as PagenationSearch : defaultPagenationSearch
}

const NEWS_PATH='/news'

const News = () => {
  const { pageIndex, limit, tag } = Route.useSearch()

  const validateMaster = () => {
    const ajv = AjvSingleton.getInstance()
    const validateNewsItem = ajv.compile(newsItemSchema)
    newsMaster.forEach((newsItem: NewsItem) => {
      if (!validateNewsItem(newsItem)) {
        console.log(newsItem)
        console.log(validateNewsItem.errors)
      }
    })
  }

  const filterByPageNation = (newsItems: NewsItem[], pageIndex: number, limit: number, tag: string | undefined) => {
    return [...newsItems]
      .filter((news: NewsItem) => tag === undefined || news.tags.includes(tag))
      .sort((a: NewsItem, b: NewsItem) => b.newsId - a.newsId)
      .slice((pageIndex - 1) * limit, pageIndex * limit)
  }

  const getNewsCardList = (path: string, newsItems: NewsItem[]) => {
    const no_content = (
      <div className="flex w-screen items-center justify-center">
        <div className="text-2xl text-center font-mplus1p">
          お探しの News はありません
        </div>
      </div>
    )
    const contents = newsItems.map((news: NewsItem) => {
      return (
        <Card
          key={news.newsId}
          path={path}
          title={news.title}
          date={news.date.replace(/-/g, '/')}
          link={news.link}
          tags={news.tags}
        />
      )
    })
    return contents.length > 0 ? contents : no_content
  }

  validateMaster()
  const newsItems = filterByPageNation(newsMaster, pageIndex, limit, tag)
  const tagedLength = tag === undefined ? newsMaster.length : newsMaster.filter((news: NewsItem) => news.tags.includes(tag)).length

  return (
    <div className="bg-teal-50">
      <div className="bg-top-image bg-cover bg-left-top bg-no-repeat w-screen flex items-center justify-center">
        <h1 className="py-5 text-4xl text-slate-200 text-center font-mplus1p">
          - News -
        </h1>
      </div>
      <div className="py-5 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {getNewsCardList(NEWS_PATH, newsItems)}
        </div>
      </div>
      <PageNationButton path={NEWS_PATH} pageIndex={pageIndex} limit={limit} itemMax={tagedLength} tag={tag} />
    </div>
  )
}

export const Route = createFileRoute(NEWS_PATH)({
  component: News,
  validateSearch: validatePageNationSearch,
})
