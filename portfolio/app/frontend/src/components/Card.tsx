import zennLogo from '../assets/img/zenn.png'
import speakerLogo from '../assets/img/speaker.png'
import { Link } from '@tanstack/react-router'

interface CardProps {
  path: string
  title: string
  date: string
  link: string
  tags: string[]
}

export const Card = (props: CardProps) => {

  const getCoverImage = (tags: string[]) => {
    for (const tag of tags) {
      switch (tag) {
        case 'zenn':
          return (
            <div className="p-1 flex items-center justify-center">
              <img className="w-full" src={zennLogo} alt="zenn" />
            </div>
          )
      }
    }
    return (
      <div className="p-1 flex items-center justify-center">
        <img className="h-24" src={speakerLogo} alt="speaker" />
      </div>
    )
  }

  const { path, title, date, link, tags } = props
  const tagButtonConfig: string[] = [
    'inline-block',
    'bg-gray-200',
    'rounded-full',
    'px-3',
    'py-1',
    'text-sm',
    'font-semibold',
    'text-gray-700',
    'mr-2',
    'mb-2',
  ]

  return (
    <>
      <div className="p-1 max-w-xs lg:max-w-sm rounded overflow-hidden shadow-lg">
        <a href={link}>
          {getCoverImage(tags)}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {date}
            </p>
          </div>
        </a>
        <div className="px-6 pt-4 pb-2">
          {tags.map(tag => (
            <span key={tag} className={tagButtonConfig.join(' ')}>
              <Link to={path} search={{ pageIndex: 1, limit: 6, tag }}>#{tag}</Link>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
