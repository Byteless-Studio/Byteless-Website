import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { projectById } from '@/data/projects'
import { serviceById } from '@/data/services'

export const Route = createFileRoute('/portfolio/$projectId')({
  loader: ({ params }) => {
    const project = projectById(params.projectId)
    if (!project) throw notFound()
    return project
  },
  component: ProjectDetailPage,
})

function Lightbox({
  images,
  index,
  onClose,
  onStep,
}: {
  images: string[]
  index: number
  onClose: () => void
  onStep: (dir: 1 | -1) => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onStep(-1)
      if (e.key === 'ArrowRight') onStep(1)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onStep])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button className="absolute right-4 top-4 p-2 text-white/70 hover:text-white" onClick={onClose} aria-label="Close">
        <X className="h-6 w-6" />
      </button>
      <span className="absolute left-1/2 top-5 -translate-x-1/2 text-sm text-white/60">
        {index + 1} of {images.length}
      </span>
      {images.length > 1 && (
        <button
          className="absolute left-3 p-2 text-white/70 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            onStep(-1)
          }}
          aria-label="Previous"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}
      <img
        src={images[index]}
        alt={`Screenshot ${index + 1}`}
        className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      {images.length > 1 && (
        <button
          className="absolute right-3 p-2 text-white/70 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            onStep(1)
          }}
          aria-label="Next"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}
    </div>
  )
}

function FeatureCarousel({
  images,
  startIndex,
  onOpen,
}: {
  images: string[]
  startIndex: number
  onOpen: (i: number) => void
}) {
  const [current, setCurrent] = useState(0)
  const touchX = useRef<number | null>(null)
  const step = (dir: 1 | -1) => setCurrent((c) => (c + dir + images.length) % images.length)

  return (
    <div
      className="relative"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const diff = touchX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 40) step(diff > 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      <button
        onClick={() => onOpen(startIndex + current)}
        className="block w-full overflow-hidden rounded-md bg-cream shadow-card cursor-zoom-in"
        aria-label="Open screenshot"
      >
        <img src={images[current]} alt="" className="aspect-[16/10] w-full object-contain" loading="lazy" />
      </button>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === current ? 'w-5 bg-blue' : 'w-1.5 bg-black/20'}`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button onClick={() => step(-1)} className="rounded p-1.5 text-black/50 hover:bg-cream hover:text-black" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => step(1)} className="rounded p-1.5 text-black/50 hover:bg-cream hover:text-black" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectDetailPage() {
  const project = Route.useLoaderData()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const featureImages = project.features?.flatMap((f) => f.images ?? []) ?? []
  const allImages = featureImages.length
    ? featureImages
    : project.gallery?.length
      ? project.gallery.map((g) => g.src)
      : project.images
  const stepLightbox = (dir: 1 | -1) =>
    setLightbox((i) => (i === null ? 0 : (i + dir + allImages.length) % allImages.length))

  const cover = project.heroImage ?? project.images[0]
  let flat = 0

  return (
    <main className="pt-24 sm:pt-36">
      <Helmet>
        <title>{project.name} | Case study | Byteless</title>
        <meta name="description" content={project.tagline} />
      </Helmet>

      {lightbox !== null && (
        <Lightbox images={allImages} index={lightbox} onClose={() => setLightbox(null)} onStep={stepLightbox} />
      )}

      <header className="wrap">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-black/55 hover:text-black transition-colors">
          <ArrowLeft className="h-4 w-4" />
          All case studies
        </Link>

        <div className="mt-6 grid gap-8 sm:mt-8 lg:grid-cols-[3fr_2fr] lg:items-end">
          <div>
            <h1 className="h-display text-[2.75rem] sm:text-6xl">{project.name}</h1>
            <p className="muted mt-4 max-w-2xl text-lg leading-relaxed sm:mt-5 sm:text-xl">{project.tagline}</p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
            <div>
              <dt className="text-black/50">Client</dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
            <div>
              <dt className="text-black/50">Industry</dt>
              <dd className="mt-1">{project.industry}</dd>
            </div>
            <div>
              <dt className="text-black/50">Year</dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
            <div>
              <dt className="text-black/50">Services</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {project.services.map((id) => (
                  <Link
                    key={id}
                    to="/portfolio"
                    search={{ service: id }}
                    className="rounded bg-blue-light px-2 py-1 text-xs font-medium text-blue"
                  >
                    {serviceById(id)?.name}
                  </Link>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {cover && project.portrait ? (
          <div className="mt-12 flex justify-center gap-4 overflow-hidden rounded-md bg-cream px-6 pt-10 sm:gap-8">
            {project.images.slice(0, 3).map((src) => (
              <button
                key={src}
                onClick={() => {
                  const i = allImages.indexOf(src)
                  setLightbox(i >= 0 ? i : 0)
                }}
                className="cursor-zoom-in"
                aria-label="Open screenshot"
              >
                <img src={src} alt="" className="h-64 w-auto rounded-t-xl object-cover object-top shadow-lift sm:h-[420px]" />
              </button>
            ))}
          </div>
        ) : cover && (
          <button
            onClick={() => {
              const i = allImages.indexOf(cover)
              setLightbox(i >= 0 ? i : 0)
            }}
            className="mt-8 block w-full overflow-hidden rounded-md bg-cream p-3 sm:mt-12 sm:p-8 cursor-zoom-in"
            aria-label="Open screenshot"
          >
            <img src={cover} alt={`${project.name} screenshot`} className="w-full rounded shadow-lift object-cover" />
          </button>
        )}
      </header>

      <section className="wrap mt-12 grid gap-8 sm:mt-16 sm:gap-6 lg:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold text-blue">The problem</h2>
          <p className="mt-3 leading-relaxed text-black/75">{project.challenge}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-blue">What we built</h2>
          <p className="mt-3 leading-relaxed text-black/75">{project.approach}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-blue">What changed</h2>
          <ul className="mt-3 space-y-3">
            {project.outcomes.map((o) => (
              <li key={o} className="flex gap-3 leading-relaxed text-black/75">
                <Check className="mt-1 h-4 w-4 flex-none text-blue" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="wrap mt-14 sm:mt-20">
          <h2 className="h-section text-3xl">Inside the system</h2>
          <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-16">
            {project.features.map((f, i) => {
              const start = flat
              flat += f.images?.length ?? 0
              return (
                <div
                  key={f.title}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {f.images && f.images.length > 0 && (
                    <FeatureCarousel images={f.images} startIndex={start} onOpen={setLightbox} />
                  )}
                  <div>
                    <h3 className="h-section text-2xl">{f.title}</h3>
                    <p className="muted mt-3 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {!featureImages.length && project.gallery && project.gallery.length > 0 && (
        <section className="wrap mt-20">
          <h2 className="h-section text-3xl">The workflows</h2>
          <div className="mt-10 space-y-14">
            {project.gallery.map((g, i) => (
              <figure key={g.src}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full overflow-hidden rounded-md bg-cream shadow-card cursor-zoom-in"
                  aria-label={`Open ${g.label}`}
                >
                  <img src={g.src} alt={g.label} className="w-full rounded shadow-lift object-cover" loading="lazy" />
                </button>
                <figcaption className="mt-4 max-w-2xl">
                  <h3 className="h-section text-xl">{g.label}</h3>
                  {g.description && <p className="muted mt-2 leading-relaxed">{g.description}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="wrap mt-20 grid gap-10 border-t border-black/10 pt-12 md:grid-cols-2">
        {project.technologies && (
          <div>
            <h2 className="text-sm font-semibold text-black/50">Built with</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="rounded border border-black/10 bg-white px-2.5 py-1 text-sm text-black/75 shadow-btn">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          {project.websiteUrl && (
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Visit the site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.downloadUrl && (
            <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download the app
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      <section className="wrap mt-20 mb-16">
        <div className="rounded-md bg-cream p-6 sm:p-12">
        <h2 className="h-section text-3xl sm:text-4xl">Have a similar problem?</h2>
        <p className="mt-3 max-w-lg leading-relaxed text-black/70">
          Tell us about it on a short call. We will say plainly whether this kind of system would help you.
        </p>
        <div className="mt-6">
          <Link to="/" hash="contact" className="btn-primary">
            Get a free consult
          </Link>
        </div>
        </div>
      </section>
    </main>
  )
}
