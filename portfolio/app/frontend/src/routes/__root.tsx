import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { NotFound } from '../components/NotFound'

export const Route = createRootRoute({
    component: () => {
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="grow bg-teal-50">
            <Outlet />
          </div>
          <TanStackRouterDevtools />
          <Footer />
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
