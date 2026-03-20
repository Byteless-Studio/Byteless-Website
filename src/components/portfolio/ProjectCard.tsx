import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

const statusLabel: Record<Project['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
}

const statusColor: Record<Project['status'], string> = {
  completed: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'in-progress': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  planned: 'bg-cream/10 text-cream/50 border-cream/20',
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to="/portfolio/$projectId"
        params={{ projectId: project.id }}
        className="group flex flex-col h-full border border-cream/10 rounded-xl overflow-hidden hover:border-cream/30 transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image / Logo area */}
        <div className="relative aspect-video bg-navy/60 flex items-center justify-center overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-500"
            />
          ) : project.logo ? (
            <img
              src={project.logo}
              alt={project.name}
              className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-500"
            />
          ) : (
            <span className="font-playfair text-4xl font-bold text-cream/20 select-none group-hover:text-cream/30 transition-colors duration-300">
              {project.name.charAt(0)}
            </span>
          )}

          {/* Status badge */}
          <span
            className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border ${statusColor[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <div>
            <h3 className="font-playfair text-xl font-bold text-cream group-hover:text-cream/90 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-cream/50 mt-1 line-clamp-2">{project.tagline}</p>
          </div>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-md bg-cream/5 text-cream/40 border border-cream/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="pt-3 mt-auto border-t border-cream/10 flex items-center justify-between">
            <span className="text-sm text-cream/40 group-hover:text-cream/70 transition-colors duration-200">
              View Project
            </span>
            <span className="text-cream/30 group-hover:text-cream/70 group-hover:translate-x-1 transition-all duration-200">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
