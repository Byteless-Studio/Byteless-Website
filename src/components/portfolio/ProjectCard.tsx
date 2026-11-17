import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import type { Project } from '@/data/projects'
import { serviceById } from '@/data/services'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'wide'
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const cover = project.heroImage ?? project.images[0] ?? project.gallery?.[0]?.src
  const wide = variant === 'wide'

  return (
    <Link
      to="/portfolio/$projectId"
      params={{ projectId: project.id }}
      className={`card group grid h-full overflow-hidden transition-shadow hover:shadow-lift ${
        wide ? 'lg:grid-cols-[3fr_2fr]' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-cream ${
          wide ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[360px]' : 'aspect-[16/10]'
        }`}
      >
        {cover && project.portrait ? (
          <div className="absolute inset-0 flex items-end justify-center gap-4 px-6 pt-8">
            {project.images.slice(0, 3).map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="h-[92%] w-auto rounded-t-xl object-cover object-top shadow-lift transition-transform duration-300 group-hover:-translate-y-1"
              />
            ))}
          </div>
        ) : cover ? (
          <img
            src={cover}
            alt=""
            loading="lazy"
            className="absolute inset-x-4 top-4 w-[calc(100%-2rem)] sm:inset-x-6 sm:top-6 sm:w-[calc(100%-3rem)] rounded-t shadow-lift object-cover object-top transition-transform duration-300 group-hover:-translate-y-1"
          />
        ) : null}
      </div>

      <div className={`flex flex-col border-t border-black/5 p-5 sm:p-6 ${wide ? 'lg:border-l lg:border-t-0 lg:p-9' : ''}`}>
        <p className="text-sm text-black/50">
          {project.client}
          <span className="mx-2 text-black/20">/</span>
          {project.industry}
        </p>
        <h3 className={`h-section mt-2 ${wide ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.name}</h3>
        <p className="muted mt-2 leading-relaxed">{project.tagline}</p>
        {wide && (
          <ul className="mt-6 hidden space-y-2.5 border-t border-black/10 pt-6 text-sm text-black/75 sm:block">
            {project.outcomes.map((o) => (
              <li key={o} className="flex gap-2.5 leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 flex-none text-blue" />
                {o}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.services.map((id) => (
            <li key={id} className="rounded bg-blue-light px-2 py-1 text-xs font-medium text-blue">
              {serviceById(id)?.name}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
