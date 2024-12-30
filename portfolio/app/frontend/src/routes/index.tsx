import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
  return (
    <>
      <div className="bg-top-image bg-cover bg-left-top bg-no-repeat w-screen min-h-screen">
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
}

export const Route = createFileRoute('/')({
  component: Index,
})
