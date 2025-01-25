import { GithubLink } from "./GIthubLink"
import { ZennLink } from "./ZennLink"
import { GmailLink } from "./GmailLink"

interface FooterProps {
  copyRight: string,
  githubUser: string,
  zennUser: string,
  gmailAddress: string
}

export const Footer = (props: FooterProps) => {

  const copyRightConfig: string[] = [
    "m-1",
    "col-span-full",
    "md:col-start-6",
    "md:col-end-8",
    "font-mplus1p",
    "lg:text-base",
    "md:text-sm",
    "text-center"
  ]

  return (
    <>
      <div className="py-3 grid grid-cols-3 md:grid-cols-12 bg-teal-400">
        <div className={copyRightConfig.join(' ')}>
          &copy; {props.copyRight}
        </div>
        <div className="m-1 col-start-1 col-end-1 md:col-start-10 md:col-end-10">
          <GithubLink user={props.githubUser} />
        </div>
        <div className="m-1 col-start-2 col-end-2 md:col-start-11 md:col-end-11">
          <ZennLink user={props.zennUser} />
        </div>
        <div className="m-1 col-start-3 col-end-3 md:col-start-12 md:col-end-12">
          <GmailLink address={props.gmailAddress} />
        </div>
      </div>
    </>
  )
}
