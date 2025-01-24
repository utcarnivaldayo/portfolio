import { Link } from '@tanstack/react-router'
import { SiZenn } from "react-icons/si"

interface ZennLinkProps {
  user: string
}

export const ZennLink = (props: ZennLinkProps) => {

  const url: string = 'https://zenn.dev/' + props.user

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
      <Link to={url} className={positionConfig.join(' ')}>
        <div className={cursorConfig.join(' ')}>
          <SiZenn />
        </div>
      </Link>
    </>
  )
}
