import { Link } from '@tanstack/react-router'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'

export function PortfolioSection() {
  const preview = projects.slice(0, 3)

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-cream">Selected Work</h2>
            <p className="text-cream/50 mt-2">A look at some of what we've built and shipped.</p>
          </div>
          <Link
            to="/portfolio"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-cream/50 hover:text-cream transition-colors duration-200"
          >
            View all work <span>→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-cream transition-colors duration-200"
          >
            View all work <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
