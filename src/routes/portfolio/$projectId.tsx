import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { projects } from '@/data/projects'

export const Route = createFileRoute('/portfolio/$projectId')({
  component: ProjectDetailPage,
})

const statusLabel: Record<string, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
}

const statusColor: Record<string, string> = {
  completed: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'in-progress': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  planned: 'bg-cream/10 text-cream/50 border-cream/20',
}

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors text-3xl leading-none"
        onClick={onClose}
      >
        ×
      </button>

      {/* Counter */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-cream/40 text-sm font-mono">
        {index + 1} / {images.length}
      </span>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 text-cream/50 hover:text-cream transition-colors text-4xl px-2"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
        >
          ‹
        </button>
      )}

      {/* Image */}
      <img
        src={images[index]}
        alt={`Screenshot ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 text-cream/50 hover:text-cream transition-colors text-4xl px-2"
          onClick={(e) => { e.stopPropagation(); onNext() }}
        >
          ›
        </button>
      )}
    </div>
  )
}

function ProjectDetailPage() {
  const { projectId } = Route.useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === projectId)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!project) {
      navigate({ to: '/portfolio' })
    }
  }, [project, navigate])

  if (!project) return null

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + project.images.length) % project.images.length : 0))
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % project.images.length : 0))

  return (
    <main className="min-h-screen">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Hero */}
      <section className="py-20 container-custom">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-cream/40 hover:text-cream transition-colors mb-10"
        >
          <span>←</span> Back to Portfolio
        </Link>

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Logo */}
          {(project.logo || project.thumbnail) && (
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-navy/60 border border-cream/10 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={project.logo || project.thumbnail}
                alt={project.name}
                className="w-full h-full object-contain p-3"
              />
            </div>
          )}

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream">
                {project.name}
              </h1>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColor[project.status]}`}
              >
                {statusLabel[project.status]}
              </span>
            </div>

            <p className="text-lg text-cream/60 mb-4">{project.tagline}</p>

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-cream/5 text-cream/40 border border-cream/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* External links */}
            <div className="flex flex-wrap gap-3">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Visit Website →
                </a>
              )}
              {project.appUrl && (
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Download App →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-4 py-2"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-24 container-custom">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

          {/* Download sidebar — top on mobile, right on desktop */}
          {project.downloads && project.downloads.length > 0 && (
            <aside className="w-full md:w-64 flex-shrink-0 order-first md:order-last md:sticky md:top-24">
              <div className="bg-cream rounded-xl p-5">
                <h3 className="font-playfair text-lg font-bold text-navy">Download</h3>
                <p className="text-xs text-navy/50 mt-1 mb-5">
                  Click below to download the full executables.
                </p>
                <div className="space-y-3">
                  {project.downloads.map((dl) => (
                    <a
                      key={dl.platform}
                      href={dl.url}
                      download
                      className="flex items-center justify-between p-3 rounded-lg border border-navy/10 hover:border-navy/30 hover:bg-navy/5 transition-all duration-200 group"
                    >
                      <div>
                        <p className="text-sm font-medium text-navy">{dl.platform}</p>
                        <p className="text-xs text-navy/50 mt-0.5 font-mono">{dl.filename}</p>
                      </div>
                      <span className="text-navy/30 group-hover:text-navy group-hover:translate-y-0.5 transition-all duration-200 text-lg">
                        ↓
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          )}

          <div className="flex-1 max-w-3xl space-y-16">
          {project.description && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">Overview</h2>
              <p className="text-cream/60 leading-relaxed">{project.description}</p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 rounded-lg bg-cream/5 text-cream/70 border border-cream/15 hover:border-cream/40 hover:text-cream transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.howWeBuiltIt && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">How We Built It</h2>
              <p className="text-cream/60 leading-relaxed">{project.howWeBuiltIt}</p>
            </div>
          )}

          {project.whatWeLearned.length > 0 && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">What We Learned</h2>
              <ul className="space-y-2">
                {project.whatWeLearned.map((item, i) => (
                  <li key={i} className="flex gap-3 text-cream/60">
                    <span className="text-cream/30 mt-0.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.whereWeAre && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">Where We Are</h2>
              <p className="text-cream/60 leading-relaxed">{project.whereWeAre}</p>
            </div>
          )}

          {project.whereWeAreGoing && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">
                Future Goals
              </h2>
              <p className="text-cream/60 leading-relaxed">{project.whereWeAreGoing}</p>
            </div>
          )}

          {/* Gallery */}
          {project.images.length > 0 && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-6">Gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="rounded-xl overflow-hidden border border-cream/10 hover:border-cream/30 transition-all duration-200 cursor-zoom-in group"
                  >
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
          </div>

        </div>
      </section>
    </main>
  )
}
