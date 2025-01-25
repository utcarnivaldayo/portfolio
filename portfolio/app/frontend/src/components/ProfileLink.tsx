import { Link } from '@tanstack/react-router'
import { FaUser } from "react-icons/fa"
import { defaultPagenationSearch } from "../schema/pagenationSearch"

export const ProfileLink = () => {

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
        <Link to="/profile" className={positionConfig.join(' ')} search={defaultPagenationSearch}>
          <div className={cursorConfig.join(' ')}>
            <FaUser className="mx-2.5" size="1.5rem" />
            <div className="font-mplus1p cursor-pointer">
              Profile
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
