import { createFileRoute } from '@tanstack/react-router'
import {
  FaRust,
  FaGithub,
  FaReact,
  FaPython,
  FaDocker,
  FaUnity,
  FaAws,
  FaUbuntu,
  FaInfinity,
  FaGit,
  FaJenkins
} from "react-icons/fa"
import {
  SiTypescript,
  SiDuckdb,
  SiSqlite,
  SiGnubash,
  SiOpentofu,
  SiGithubactions,
  SiKubernetes,
  SiTailwindcss
} from "react-icons/si"
import { TbTopologyStar3, TbMathMin, TbBrandCSharp } from "react-icons/tb"
import { DiRedis, DiMysql } from "react-icons/di"
import { PiWaveSineFill } from "react-icons/pi";
import { VscVscode, VscProject } from "react-icons/vsc"
import { biographyItemSchema, BiographyItem } from '../schema/biographyItem.ts'
import speakerLogoAnimation from '../assets/img/speaker.gif'
import { AjvSingleton } from '../util/ajv'
import biographyMaster from '../assets/masterdata/biographyMaster.json'
import { Link } from '@tanstack/react-router'

const Profile = () => {

  const validateMaster = () => {
    const ajv = AjvSingleton.getInstance()
    const validateNewsItem = ajv.compile(biographyItemSchema)
    biographyMaster.forEach((biographyItem: BiographyItem) => {
      if (!validateNewsItem(biographyItem)) {
        console.log(biographyItem)
        console.log(validateNewsItem.errors)
      }
    })
  }

  const getBiographyList = (biographyItems: BiographyItem[]) => {
    const no_content = (
      <div className="flex w-screen items-center justify-center">
        <div className="text-2xl text-center font-mplus1p">
          Biography はありません
        </div>
      </div>
    )
    const contents = biographyItems.map((biographyItem: BiographyItem) => {
      return (
        <tr>
          <td className="p-1 border border-gray-400">{biographyItem.yearMonth.replace(/-/g, '/')}</td>
          <td className="p-1 border border-gray-400">{
              biographyItem.link != null ? (
                <a className="no-underline hover:underline" href={biographyItem.link}>
                  {biographyItem.event}
                </a>
              ) : biographyItem.event
            }
          </td>
        </tr>
      )
    })
    return contents.length > 0 ? contents : no_content
  }

  validateMaster()
  return (
    <>
      <div className="bg-top-image bg-cover bg-left-top bg-no-repeat w-screen flex items-center justify-center">
        <h1 className="py-5 text-4xl text-slate-200 text-center font-mplus1p">
          - Profile -
        </h1>
      </div>
      <div className="py-3 flex items-center justify-center bg-teal-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 content-evenly">
          <div className="p-1 flex-col max-w-sm order-2 justify-items-center">
            <div>
              <h2 className="text-3xl text-slate-800 font-mplus1p text-center">
                Introduction
              </h2>
              <div className="py-3">
                <p className="p-3 ">はじめまして。ut と申します。</p>
                <p className="p-3">大学では電気電子工学を専攻し、信号処理・数理最適化に関する研究に従事し修士で修了。
                  某企業でモバイルオンラインゲームのサーバーサイドエンジニアとして、運用・改善を担当して3年です。</p>
                <p className="p-3">
                  業務では、shell・python・jenkins・mysql・redis を利用し、
                  プライベートでは、rust を好んで利用しています。
                </p>
                <p className="p-3">
                  最近は、現場のレガシーな技術スタックに起因する問題に不満を感じ、ドメイン駆動設計・
                  プラットフォームエンジニアリング・クラウド・コンテナなどの技術領域に興味をもち、
                  それらの技術を利用した解決策を日々模索中です。
                </p>
                <div className="p-3 border rounded-sm border-gray-400">
                  <a className="no-underline hover:underline" href="https://www.16personalities.com/ja/infj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC">INFJ-T</a>・
                  <a className="no-underline hover:underline" href="https://www.rust-lang.org/ja/learn/get-started">Rustacean</a>・
                  <a className="no-underline hover:underline" href="https://coten.co.jp/cotencrew/">Coten Crew</a>・
                  基本情報処理技術者・ITパスポート
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 flex-col max-w-sm order-1 lg:order-2 justify-items-center">
            <div className="my-24">
              <img src={speakerLogoAnimation} alt='The walking speaker is ut' className="p-3 h-36 w-36 border border-gray-400 rounded-full bg-white" />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                私
              </figcaption>
            </div>
          </div>
          <div className="p-1 flex-col max-w-sm order-3 justify-items-center">
            <div>
              <h2 className="text-3xl text-slate-800 font-mplus1p text-center">
                Biography
              </h2>
              <table className="my-3 px-3 border-collapse table-auto border border-gray-500 text-center">
                <thead>
                  <th className="p-1 border border-gray-400">Year/Month</th>
                  <th className="p-1 border border-gray-400">Event</th>
                </thead>
                <tbody>
                  {getBiographyList(biographyMaster)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 flex items-center justify-center bg-orange-50">
        <h2 className="text-3xl text-slate-800 font-mplus1p">
          Tech stack
        </h2>
      </div>
      <div className="py-3 flex items-center text-center justify-center bg-orange-50">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-3 content-evenly">
          <div className="py-1 flex-col max-w-xs justify-items-center shadow-md">
            <h3 className="text-2xl text-slate-800 font-mplus1p">
              IDE
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "vscode"}}>
                  <VscVscode className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    vscode
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="text-2xl text-slate-800 font-mplus1p">
                VCS
            </h3>
            <div className="py-1">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "git"}}>
                  <FaGit className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    git
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "github"}}>
                  <FaGithub className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    github
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p">
              Frontend
            </h3>
            <div className="p-3">
              <div className="p-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "typescript"}}>
                  <SiTypescript className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    typescript
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "react"}}>
                  <FaReact className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    react
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "tailwindcss"}}>
                  <SiTailwindcss className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    tailwindcss
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "unity"}}>
                  <FaUnity className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    unity
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "csharp"}}>
                  <TbBrandCSharp className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    c#
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p">
              Backend
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "rust"}}>
                  <FaRust className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    rust
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "python"}}>
                  <FaPython className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    python
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p">
                Infra
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "ubuntu"}}>
                  <FaUbuntu className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    ubuntu
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "bash"}}>
                  <SiGnubash className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    bash
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "docker"}}>
                  <FaDocker className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    docker
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "kubernetes"}}>
                  <SiKubernetes className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    kubernetes
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "aws"}}>
                  <FaAws className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    aws
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "opentofu"}}>
                  <SiOpentofu className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    opentofu
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p">
              Data
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "mysql"}}>
                  <DiMysql className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    mysql
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "redis"}}>
                  <DiRedis className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    redis
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "sqlite"}}>
                  <SiSqlite className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    sqlite
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "duckdb"}}>
                  <SiDuckdb className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    duckdb
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p">
              Secret
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "infisical"}}>
                  <FaInfinity className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    infisical
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p">
              CI/CD
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "jenkins"}}>
                  <FaJenkins className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    jenkins
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "githubactions"}}>
                  <SiGithubactions className="mx-10" size="3rem"/>
                  <div className="text-sm md:text-base">
                    github actions
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-1 flex-col max-w-2xs justify-items-center shadow-md">
            <h3 className="py-1 text-2xl text-slate-800 font-mplus1p" >
              Others
            </h3>
            <div className="py-3">
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "信号処理"}}>
                  <PiWaveSineFill className="mx-10" size="3rem" />
                  <div className="text-sm md:text-base">
                    信号処理
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "数理最適化"}}>
                  <TbMathMin className="mx-10" size="3rem" />
                  <div className="text-sm md:text-base">
                    数理最適化
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "teamtopology"}}>
                  <TbTopologyStar3 className="mx-10" size="3rem" />
                  <div className="text-sm md:text-base">
                    チームトポロジー
                  </div>
                </Link>
              </div>
              <div className="py-1">
                <Link to="/news" search={{pageIndex: 1, limit: 6, tag: "DDD"}}>
                  <VscProject className="mx-10" size="3rem" />
                  <div className="text-sm md:text-base">
                    ドメイン駆動設計
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Route = createFileRoute('/profile')({
  component: Profile,
})
