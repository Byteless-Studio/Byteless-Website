import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Contact } from '@/components/sections/contact'

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <main className="wrap flex min-h-[70vh] flex-col justify-center pt-24 pb-16">
      <p className="text-sm font-medium text-blue">404</p>
      <h1 className="h-display mt-3 text-5xl sm:text-6xl">That page is not here.</h1>
      <p className="muted mt-4 max-w-md">It may have moved, or the link was wrong.</p>
      <div className="mt-8 flex gap-3">
        <Link to="/" className="btn-primary">
          Go home
        </Link>
        <Link to="/portfolio" className="btn-secondary">
          Our work
        </Link>
      </div>
    </main>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Contact />
      <Footer />
    </>
  )
}
