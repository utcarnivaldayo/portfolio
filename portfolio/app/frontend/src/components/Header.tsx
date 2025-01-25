import speakerLogo from '../assets/img/speaker.png'
import speakerLogoAnimation from '../assets/img/speaker.gif'
import { Link } from '@tanstack/react-router'
import { useState } from "react"
import { NewsLink } from "./NewsLink"
import { ProfileLink } from "./ProfileLink"
import { SandboxLink } from "./SandboxLink"
import { GithubLink } from "./GIthubLink"
import { ZennLink } from "./ZennLink"
import { GmailLink } from "./GmailLink"

interface HeaderProps {
  githubUser: string,
  zennUser: string,
  gmailAddress: string
}

export const Header = (props: HeaderProps) => {

  const [logo, setLogo] = useState(speakerLogo)

  return (
    <>
      <div className="py-1 grid grid-cols-4 md:grid-cols-12 bg-teal-400">
        <div className="p-1 md:inline-block col-start-1 col-end-1">
          <Link to="/">
            <img
              src={logo}
              alt="speaker"
              className="h-12 w-12"
              onMouseEnter={() => setLogo(speakerLogoAnimation)}
              onMouseLeave={() => setLogo(speakerLogo)}
            />
          </Link>
        </div>
        <div className="p-1.5 md:col-start-5 md:col-end-3">
          <NewsLink />
        </div>
        <div className="p-1.5 md:col-start-7 md:col-end-5">
          <ProfileLink />
        </div>
        <div className="p-1.5 md:col-start-9 md:col-end-7">
          <SandboxLink />
        </div>
        <div className="hidden md:block pt-6 col-start-1 col-end-1 md:col-start-10 md:col-end-10">
          <GithubLink user={props.githubUser} />
        </div>
        <div className="hidden md:block pt-6 col-start-2 col-end-2 md:col-start-11 md:col-end-11">
          <ZennLink user={props.zennUser} />
        </div>
        <div className="hidden md:block pt-6 col-start-3 col-end-3 md:col-start-12 md:col-end-12">
          <GmailLink address={props.gmailAddress} />
        </div>
      </div>
    </>
  )
}
