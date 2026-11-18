import { createFileRoute, Link } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export const Route = createFileRoute('/portfolio/')({
  component: PortfolioPage,
})

const aiWork = projects.filter((p) => !p.alsoBuilt)
const alsoBuilt = projects.filter((p) => p.alsoBuilt)

function PortfolioPage() {
  return (
    <main className="pt-24 sm:pt-36">
      <Helmet>
        <title>Work | Byteless</title>
      </Helmet>

      <header className="wrap pb-8 sm:pb-12">
        <h1 className="h-display text-[2.75rem] sm:text-6xl lg:text-7xl">Work</h1>
        <p className="muted mt-4 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg">
          AI systems we designed, built and run ourselves. Each one is a starting point for a version that fits
          your business.
        </p>
      </header>

      <section className="wrap pb-14 sm:pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {aiWork.map((p, i) => {
            // Odd count: lead with a full-width card so the grid has no orphan.
            const wide = i === 0 && aiWork.length % 2 === 1
            return (
              <div key={p.id} className={wide ? 'sm:col-span-2' : ''}>
                <ProjectCard project={p} variant={wide ? 'wide' : 'default'} />
              </div>
            )
          })}
        </div>
      </section>

      <section className="wrap pb-20">
        <h2 className="h-section border-t border-black/10 pt-10 text-2xl">Also built</h2>
        <p className="muted mt-2">Products and websites outside our AI work.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {alsoBuilt.map((p) => (
            <li key={p.id}>
              <Link
                to="/portfolio/$projectId"
                params={{ projectId: p.id }}
                className="card group flex h-full items-start justify-between gap-4 p-5 transition-shadow hover:shadow-lift"
              >
                <div>
                  <p className="font-semibold tracking-tight">{p.name}</p>
                  <p className="muted mt-1 text-sm leading-relaxed">{p.tagline}</p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none text-black/40 transition-colors group-hover:text-blue" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
