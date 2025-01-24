import { FaGithub } from "react-icons/fa"
import { Link } from '@tanstack/react-router'

interface GithubLinkProps {
  user: string
}

export const GithubLink = (props: GithubLinkProps) => {

  const url: string = 'https://github.com/' + props.user

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
          <FaGithub />
        </div>
      </Link>
    </>
  )
}
