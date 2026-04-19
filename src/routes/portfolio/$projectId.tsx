import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
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

function FeatureCarousel({ images, startIndex, onLightbox }: {
  images: string[]
  startIndex: number
  onLightbox: (i: number) => void
}) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  const getSlideStyle = (index: number): React.CSSProperties => {
    let pos = index - current
    // wrap around for circular effect
    if (pos > images.length / 2) pos -= images.length
    if (pos < -images.length / 2) pos += images.length

    if (pos === 0) return {
      transform: 'translateX(0%) scale(1)',
      opacity: 1,
      filter: 'blur(0px)',
      zIndex: 3,
      pointerEvents: 'auto',
    }
    if (Math.abs(pos) === 1) return {
      transform: `translateX(${pos * 62}%) scale(0.82)`,
      opacity: 0.45,
      filter: 'blur(3px)',
      zIndex: 1,
      pointerEvents: 'auto',
    }
    return {
      transform: `translateX(${pos * 62}%) scale(0.7)`,
      opacity: 0,
      filter: 'blur(6px)',
      zIndex: 0,
      pointerEvents: 'none',
    }
  }

  return (
    <div
      className="relative w-full h-80 flex items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute w-[78%] rounded-lg overflow-hidden"
          style={{
            transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease, filter 0.45s ease',
            ...getSlideStyle(i),
          }}
        >
          <button
            onClick={() => i === current ? onLightbox(startIndex + i) : setCurrent(i)}
            className={`block w-full rounded-lg overflow-hidden shadow-2xl ${i === current ? 'cursor-zoom-in' : 'cursor-pointer'}`}
          >
            <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-64 object-contain bg-navy/30"
            />
          </button>
        </div>
      ))}

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-9 h-9 rounded-full bg-black/50 text-cream text-2xl flex items-center justify-center hover:bg-black/75 transition-colors"
          >‹</button>
          <button
            onClick={next}
            className="absolute right-0 z-10 w-9 h-9 rounded-full bg-black/50 text-cream text-2xl flex items-center justify-center hover:bg-black/75 transition-colors"
          >›</button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-cream/70' : 'w-1.5 h-1.5 bg-cream/20'}`}
            />
          ))}
        </div>
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

  const lightboxImages = project.features?.some((f) => f.images?.length)
    ? project.features.flatMap((f) => f.images ?? [])
    : project.gallery
      ? project.gallery.map((g) => g.src)
      : project.images
  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + lightboxImages.length) % lightboxImages.length : 0))
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % lightboxImages.length : 0))

  return (
    <main className="min-h-screen">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
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
            <div className={`w-32 h-32 md:w-44 md:h-44 rounded-2xl ${project.logoBg ?? 'bg-navy/60'} border border-cream/10 flex items-center justify-center overflow-hidden flex-shrink-0`}>
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
              {project.status && (
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColor[project.status]}`}
                >
                  {statusLabel[project.status]}
                </span>
              )}
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

      {/* Hero image */}
      {project.heroImage && (
        <section className="container-custom pb-14">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-cream/5">
            <img
              src={project.heroImage}
              alt={`${project.name} preview`}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>
      )}

      {/* Content sections */}
      <section className="pb-24 container-custom">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

          {/* Download sidebar — top on mobile, right on desktop */}
          {project.downloadUrl && (
            <aside className="w-full md:w-64 flex-shrink-0 order-first md:order-last md:sticky md:top-24">
              <div className="bg-cream rounded-xl p-5">
                <h3 className="font-playfair text-lg font-bold text-navy">Download</h3>
                <p className="text-xs text-navy/50 mt-1 mb-4">
                  Available for all major platforms.
                </p>

                {/* Platform badges */}
                <div className="flex flex-col gap-2 mb-5">
                  {[
                    { label: 'Windows', sub: '.exe installer' },
                    { label: 'macOS',   sub: '.dmg package' },
                    { label: 'Linux',   sub: '.AppImage' },
                  ].map(({ label, sub }) => (
                    <div key={label} className="flex items-center justify-between px-3 py-2 rounded-lg border border-navy/10 bg-navy/4">
                      <span className="text-sm font-medium text-navy">{label}</span>
                      <span className="text-xs text-navy/40 font-mono">{sub}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-navy text-cream font-medium text-sm hover:bg-navy/80 transition-all duration-200"
                >
                  <span>↓</span> Download for your system
                </a>
              </div>
            </aside>
          )}

          <div className="flex-1 max-w-3xl space-y-16">
          {project.description && (
            <div id="overview">
              <h2 className="text-2xl font-playfair font-bold text-cream mb-4">Overview</h2>
              <p className="text-cream/60 leading-relaxed">{project.description}</p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div id="technologies">
              <h2 className="text-2xl font-playfair font-bold text-cream mb-5">Technologies Used</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 hover:border-cream/30 hover:bg-cream/8 transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cream/30 group-hover:bg-cream/70 transition-colors duration-200 flex-shrink-0" />
                    <span className="text-sm font-medium text-cream/70 group-hover:text-cream transition-colors duration-200">{tech}</span>
                  </div>
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

          {/* Features — with screenshot when available, plain cards otherwise */}
          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-playfair font-bold text-cream mb-10">Features</h2>
              {project.features.some((f) => f.images?.length) ? (
                <div className="space-y-20">
                  {(() => {
                    let flatIndex = 0
                    return project.features!.map((feature, i) => {
                      const isEven = i % 2 === 0
                      const startIndex = flatIndex
                      flatIndex += feature.images?.length ?? 0
                      return (
                        <div
                          key={i}
                          id={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-14 items-center`}
                        >
                          {/* Screenshot(s) */}
                          {feature.images && feature.images.length > 0 && (
                            <div className="w-full md:w-1/2 flex-shrink-0 pb-8">
                              <FeatureCarousel
                                images={feature.images}
                                startIndex={startIndex}
                                onLightbox={openLightbox}
                              />
                            </div>
                          )}

                          {/* Feature text */}
                          <div className="w-full md:w-1/2">
                            <span className="text-xs font-mono text-cream/25 tracking-widest uppercase">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-2xl font-playfair font-bold text-cream mt-2 mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-cream/55 leading-relaxed text-sm">{feature.description}</p>
                          </div>
                        </div>
                      )
                    })
                  })()}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-cream/10 hover:border-cream/25 transition-all duration-200"
                    >
                      <h3 className="text-sm font-semibold text-cream mb-2">{feature.title}</h3>
                      <p className="text-sm text-cream/50 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Gallery — only shown when features don't already carry screenshots */}
          {!(project.features?.some((f) => f.images?.length)) && (
            project.gallery && project.gallery.length > 0 ? (
              <div>
                <h2 className="text-2xl font-playfair font-bold text-cream mb-10">Workflows</h2>
                <div className="space-y-14">
                  {project.gallery.map((item, i) => (
                    <div key={i}>
                      <button
                        onClick={() => openLightbox(i)}
                        className="w-full rounded-xl overflow-hidden border border-cream/10 hover:border-cream/30 transition-all duration-200 cursor-zoom-in group block"
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                        />
                      </button>
                      <div className="mt-5 flex gap-5 items-start">
                        <span className="text-xs font-mono text-cream/25 tracking-widest mt-1 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-lg font-playfair font-bold text-cream mb-1">{item.label}</h3>
                          {item.description && (
                            <p className="text-sm text-cream/50 leading-relaxed">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : project.images.length > 0 ? (
              <div>
                <h2 className="text-2xl font-playfair font-bold text-cream mb-8">Gallery</h2>
                <div className="grid grid-cols-3 gap-3">
                  {project.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="cursor-zoom-in block"
                    >
                      <img
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null
          )}
          </div>

        </div>
      </section>
    </main>
  )
}
