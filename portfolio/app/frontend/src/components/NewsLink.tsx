import { Link } from '@tanstack/react-router'
import { FaRegNewspaper } from "react-icons/fa"
import { defaultPagenationSearch } from "../schema/pagenationSearch"

export const NewsLink = () => {

  const positionConfig: string[] = [
    'flex',
    'items-center',
    'justify-center',
    'bg-teal-400',
  ]

  const cursorConfig: string[] = [
    'p-1.5',
    'cursor-pointer',
    'hover:bg-teal-200',
    'duration-300',
    'rounded-full',
  ]

  return (
    <>
      <div>
        <Link to="/news" className={positionConfig.join(' ')} search={defaultPagenationSearch}>
          <div className={cursorConfig.join(' ')}>
            <FaRegNewspaper className="mx-1.5" size="1.5rem"/>
            <div className="font-mplus1p cursor-pointer">
              News
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
