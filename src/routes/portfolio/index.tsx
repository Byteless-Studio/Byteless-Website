import { createFileRoute, Link } from '@tanstack/react-router'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export const Route = createFileRoute('/portfolio/')({
  validateSearch: (search: Record<string, unknown>) => ({
    service: (search.service as string) ?? '',
  }),
  component: PortfolioPage,
})

const serviceLabels: Record<string, string> = {
  'ai-ml': 'Agentic AI & Machine Learning',
  'automations': 'Automations',
  'web-dev': 'Web Development',
  'mobile': 'Mobile App',
  'full-stack': 'Full Stack Engineering',
  'consulting': 'Consulting',
}

function PortfolioPage() {
  const { service } = Route.useSearch()
  const filtered = service
    ? projects.filter((p) => p.services?.includes(service))
    : projects

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 container-custom">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream leading-tight">
          Our Work
        </h1>
        <p className="mt-4 text-lg text-cream/50 max-w-xl">
          Projects we've designed, built, and shipped: from MVPs to full product systems.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-24 container-custom">
        {/* Active filter badge */}
        {service && serviceLabels[service] && (
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm text-cream/50">Filtered by</span>
            <span className="text-sm px-3 py-1 rounded-full bg-cream/10 text-cream border border-cream/20">
              {serviceLabels[service]}
            </span>
            <Link
              to="/portfolio"
              search={{}}
              className="text-sm text-cream/30 hover:text-cream/70 transition-colors"
            >
              Clear ×
            </Link>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-cream/30 text-sm">No projects found for this service.</p>
        )}
      </section>
    </main>
  )
}
