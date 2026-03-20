import { createFileRoute } from '@tanstack/react-router'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export const Route = createFileRoute('/portfolio/')({
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 container-custom">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream leading-tight">
          Our Work
        </h1>
        <p className="mt-4 text-lg text-cream/50 max-w-xl">
          Projects we've designed, built, and shipped — from MVPs to full product systems.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-24 container-custom">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
