import { FaGithub, FaRegNewspaper, FaUser } from "react-icons/fa"
import { SiZenn, SiGmail } from "react-icons/si"
import { FiCodesandbox } from "react-icons/fi"
import speakerLogo from '../assets/img/speaker.png'
import speakerLogoAnimation from '../assets/img/speaker.gif'
import { Link } from '@tanstack/react-router'
import { useState } from "react"
import { defaultPagenationSearch } from "../schema/pagenationSearch"

export const Header = () => {

  const githubName = 'utcarnivaldayo'
  const githubUrl = 'https://github.com/' + githubName
  const zennUrl = 'https://zenn.dev/' + githubName
  const gmailAddress = 'ut.numagotatu@gmail.com'
  const [logo, setLogo] = useState(speakerLogo)

  return (
    <>
      <div className="h-16 flex flex-row bg-teal-400 items-center justify-between">
        <div className="p-3 m-1">
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
        <div className="p-1 items-center justify-items-center hover:bg-teal-200 text-slate-800 transition-colors duration-300 rounded">
          <Link to="/news" search={defaultPagenationSearch}>
            <FaRegNewspaper className="mx-1.5" size="1.5rem"/>
            <div className="font-mplus1p cursor-pointer">
              News
            </div>
          </Link>
        </div>
        <div className="p-1 items-center justify-items-center hover:bg-teal-200 text-slate-800 transition-colors duration-300 rounded">
          <Link to="/profile">
            <FaUser className="mx-2.5" size="1.5rem"/>
            <div className="font-mplus1p cursor-pointer">
              Profile
            </div>
          </Link>
        </div>
        <div className="p-1 items-center justify-items-center hover:bg-teal-200 text-slate-800 transition-colors duration-300 rounded">
          <Link to="/sandbox" search={defaultPagenationSearch}>
            <FiCodesandbox className="mx-4" size="1.5rem"/>
            <div className="font-mplus1p cursor-pointer">
              Sandbox
            </div>
          </Link>
        </div>
        <div className="flex flex-row">
          <div className="p-1.5 mx-3 items-center justify-items-center cursor-pointer bg-teal-400 hover:bg-teal-200 transition-colors duration-300 rounded-full">
            <a href={githubUrl}>
              <FaGithub />
            </a>
          </div>
          <div className="p-1.5 mx-3 items-center justify-items-center cursor-pointer bg-teal-400 hover:bg-teal-200 transition-colors duration-300 rounded-full">
            <a href={zennUrl}>
              <SiZenn />
            </a>
          </div>
          <div className="p-1.5 mx-3 items-center justify-items-center cursor-pointer bg-teal-400 hover:bg-teal-200 transition-colors duration-300 rounded-full">
            <a href={'mailto:' + gmailAddress}>
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
