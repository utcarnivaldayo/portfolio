import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { NotFound } from '../components/NotFound'


export const Route = createRootRoute({
  component: () => {
    const copyRight: string = 'ut'
    const githubUser: string = 'utcarnivaldayo'
    const zennUser: string = 'utcarnivaldayo'
    const gmailAddress: string = 'ut.numagotatu@gmail.com'
    const headerPrpos = { githubUser: githubUser, zennUser: zennUser, gmailAddress: gmailAddress }
    const footerProps = {
      copyRight: copyRight,
      githubUser: githubUser,
      zennUser: zennUser,
      gmailAddress: gmailAddress
    }

    return (
      <div className="flex flex-col min-h-screen">
        <Header {...headerPrpos} />
        <div className="grow bg-teal-50">
          <Outlet />
        </div>
        {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
        <Footer {...footerProps} />
      </div>
    )
  },
  notFoundComponent: () => {
    return (
      <>
        <NotFound />
      </>
    )
  },
})
