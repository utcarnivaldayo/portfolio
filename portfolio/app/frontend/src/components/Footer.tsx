import { FaGithub } from "react-icons/fa"
import { SiZenn, SiGmail } from "react-icons/si"

export const Footer = () => {
  const githubName = 'utcarnivaldayo'
  const githubUrl = 'https://github.com/' + githubName
  const zennUrl = 'https://zenn.dev/' + githubName
  const gmailAddress = 'ut.numagotatu@gmail.com'

  return (
    <>
      <div className="h-12 flex flex-row bg-teal-400 items-center justify-between">
        <div>

        </div>
        <div className="font-mplus1p">
          &copy; {githubName}
        </div>
        <div className="flex flex-row">
          <div className="flex-auto p-1.5 mx-3 cursor-pointer bg-teal-400 hover:bg-teal-200 transition-colors duration-300 rounded-full">
            <a href={githubUrl}>
              <FaGithub />
            </a>
          </div>
          <div className="flex-auto p-1.5 mx-3 cursor-pointer bg-teal-400 hover:bg-teal-200 transition-colors duration-300 rounded-full">
            <a href={zennUrl}>
              <SiZenn />
            </a>
          </div>
          <div className="flex-auto p-1.5 mx-3 cursor-pointer bg-teal-400 hover:bg-teal-200 transition-colors duration-300 rounded-full">
            <a href={'mailto:' + gmailAddress}>
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
