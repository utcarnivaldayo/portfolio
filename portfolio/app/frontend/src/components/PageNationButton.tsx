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
  const nonTagPrevSearches = { pageIndex: getPrevPageIndex(pageIndex), limit: limit }
  const nonTagNextSearches = { pageIndex: getNextPageIndex(pageIndex, limit, itemMax), limit: limit }
  const tagPrevSearches = { pageIndex: getPrevPageIndex(pageIndex), limit: limit, tag: tag }
  const tagNextSearches = { pageIndex: getNextPageIndex(pageIndex, limit, itemMax), limit: limit, tag: tag }
  const prevSearches = tag === undefined ? nonTagPrevSearches : tagPrevSearches
  const nextSearches = tag === undefined ? nonTagNextSearches : tagNextSearches

  const prevButtonLinkConfig: string[] = [
    "rounded-md",
    "border",
    "border-slate-300",
    "py-2",
    "px-3",
    "text-center",
    "text-sm",
    "transition-all",
    "shadow-sm",
    "hover:shadow-lg",
    "text-slate-600",
    "hover:text-white",
    "hover:bg-slate-800",
    "hover:border-slate-800",
    "focus:text-white",
    "focus:bg-slate-800",
    "focus:border-slate-800",
    "active:border-slate-800",
    "active:text-white",
    "active:bg-slate-800",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "disabled:shadow-none",
    "ml-2"
  ]

  const pageIndexConfig: string[] = [
    "min-w-9",
    "rounded-md",
    "bg-slate-800",
    "py-2",
    "px-3.5",
    "border",
    "border-transparent",
    "text-center",
    "text-sm",
    "text-white",
    "shadow-md",
    "hover:shadow-lg",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "disabled:shadow-none",
    "ml-2"
  ]

  const nextButtonLinkConfig: string[] = [
    "rounded-md",
    "border",
    "border-slate-300",
    "py-2",
    "px-3",
    "text-center",
    "text-sm",
    "transition-all",
    "shadow-sm",
    "hover:shadow-lg",
    "text-slate-600",
    "hover:text-white",
    "hover:bg-slate-800",
    "hover:border-slate-800",
    "focus:text-white",
    "focus:bg-slate-800",
    "focus:border-slate-800",
    "active:border-slate-800",
    "active:text-white",
    "active:bg-slate-800",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "disabled:shadow-none",
    "ml-2"
  ]

  return (
    <div className="py-5 flex item-center justify-center">
      <Link className={prevButtonLinkConfig.join(' ')} to={path} search={prevSearches}>
        Prev
      </Link>
      <div className={pageIndexConfig.join(' ')}>
        {pageIndex}
      </div>
      <Link className={nextButtonLinkConfig.join(' ')} to={path} search={nextSearches}>
        Next
      </Link>
    </div>
  )
}
