import { createFileRoute } from '@tanstack/react-router'
// min-h-screen

const Index = () => {

  const titleTopLevelConfig: string[] = [
    "bg-top-image",
    "bg-cover",
    "bg-top",
    "bg-no-repeat",
    "bg-scroll",
    "w-screen",
    "min-h-screen",
    "items-center",
    "justify-evenly"
  ]

  return (
    <>
      <div className={titleTopLevelConfig.join(' ')}>
        <div className="pt-24"></div>
        <div className="p-5 w-screen text-center font-mplus1p bg-teal-500/70">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-slate-200">
            Optimizing Digital Experiences
          </h1>
        </div>
        <div className="p-3 w-screen text-center font-mplus1p bg-orange-500/70">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-200">
            - ut's portfolio website -
          </h2>
        </div>
      </div>
    </>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
