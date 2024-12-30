import { Link } from '@tanstack/react-router'

interface PageNationButtonProps {
  path: string,
  pageIndex: number,
  limit: number,
  itemMax: number,
  tag?: string
}

export const getPrevPageIndex = (pageIndex: number): number => pageIndex > 1 ? pageIndex - 1 : 1

export const getNextPageIndex = (pageIndex: number, limit: number, pageItemMax: number): number => {
  const pageItem: number = pageIndex * limit
  return pageItem < pageItemMax ? pageIndex + 1 : pageIndex
}

export const isVaildPageAndLimit = (pageIndex: number, limit: number, itemMax: number) => {
  return (pageIndex - 1) * limit <= itemMax && itemMax <= pageIndex * limit
}

export const PageNationButton = (props: PageNationButtonProps) => {

  const { path, pageIndex, limit, itemMax, tag } = props
  const prevSearches = tag === undefined ? {pageIndex: getPrevPageIndex(pageIndex), limit: limit} : {pageIndex: getPrevPageIndex(pageIndex), limit: limit, tag: tag}
  const nextSearches = tag === undefined ? {pageIndex: getNextPageIndex(pageIndex, limit, itemMax), limit: limit} : {pageIndex: getNextPageIndex(pageIndex, limit, itemMax), limit: limit, tag: tag}

  return (
    <div className="py-5 flex item-center justify-center">
      <Link className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" to={path} search={prevSearches}>
        Prev
      </Link>
      <div className="min-w-9 rounded-md bg-slate-800 py-2 px-3.5 border border-transparent text-center text-sm text-white shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        {pageIndex}
      </div>
      <Link className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" to=
      {path} search={nextSearches}>
        Next
      </Link>
    </div>
  )
}
