import { createFileRoute } from '@tanstack/react-router'
// min-h-screen

const Index = () => {

  return (
    <>
      <div className="bg-top-image bg-cover bg-top bg-no-repeat bg-scroll w-screen min-h-screen items-center justify-evenly">
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
  /*
  return (
    <>
      <div className="bg-top-image bg-cover bg-left-top bg-no-repeat w-screen">
        <div className="py-24 items-center justify-center">
          <h1 className="p-5 text-8xl text-slate-200 text-center font-mplus1p bg-teal-500/70">
            Optimizing Digital Experiences
          </h1>
          <h2 className="p-3 text-4xl text-slate-200 text-center font-mplus1p bg-orange-500/70">
            - ut's portfolio website -
          </h2>
        </div>
      </div>
    </>
  )
  */
}

export const Route = createFileRoute('/')({
  component: Index,
})
