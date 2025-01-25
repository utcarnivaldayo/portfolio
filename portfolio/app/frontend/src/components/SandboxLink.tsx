import { Link } from '@tanstack/react-router'
import { FiCodesandbox } from "react-icons/fi"
import { defaultPagenationSearch } from "../schema/pagenationSearch"

export const SandboxLink = () => {
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
        <Link to="/sandbox" className={positionConfig.join(' ')} search={defaultPagenationSearch}>
          <div className={cursorConfig.join(' ')}>
            <FiCodesandbox className="mx-4" size="1.5rem" />
            <div className="font-mplus1p cursor-pointer">
              Sandbox
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
