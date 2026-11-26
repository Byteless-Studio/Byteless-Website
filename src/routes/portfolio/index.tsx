import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export const Route = createFileRoute('/portfolio/')({
  component: PortfolioPage,
})

const aiWork = projects.filter((p) => !p.alsoBuilt)

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

      <section className="wrap pb-20">
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

    </main>
  )
}
