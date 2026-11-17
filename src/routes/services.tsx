import { createFileRoute, Link } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { Check } from 'lucide-react'
import { CalButton } from '@/components/ui/CalButton'
import { primaryServices, secondaryServices, type Service } from '@/data/services'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function PrimaryService({ service, tinted }: { service: Service; tinted: boolean }) {
  return (
    <section id={service.id} className={`scroll-mt-16 py-12 sm:py-20 ${tinted ? 'bg-cream' : ''}`}>
      <div className="wrap grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-blue-light text-blue">
            <service.icon className="h-5 w-5" />
          </span>
          <h2 className="h-section mt-5 text-3xl sm:text-5xl">{service.name}</h2>
          <p className="mt-5 leading-relaxed text-black/70">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CalButton className="btn-primary">Book a call</CalButton>
            <Link to="/portfolio" className="btn-secondary">
              See case studies
            </Link>
          </div>
        </div>

        <div className="card grid gap-8 p-5 sm:p-9">
          <div>
            <h3 className="text-sm font-semibold text-black/50">Who this is for</h3>
            <p className="mt-2 text-lg leading-relaxed">{service.forWho}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black/50">What you get</h3>
            <ul className="mt-3 divide-y divide-black/10">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 py-3">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-blue" />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black/50">How long it takes</h3>
            <p className="mt-2 leading-relaxed text-black/75">{service.shape}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <main className="pt-24 sm:pt-36">
      <Helmet>
        <title>Services | Byteless</title>
        <meta
          name="description"
          content="AI consulting, AI services and implementation, infrastructure management and security audits from Byteless."
        />
      </Helmet>

      <header className="wrap pb-10 sm:pb-20">
        <h1 className="h-display text-[2.75rem] sm:text-6xl lg:text-7xl">What we do</h1>
        <p className="muted mt-4 max-w-2xl text-base leading-relaxed sm:mt-6 sm:text-lg">
          We help you decide where AI fits, build it, and keep it running safely. Most clients start with
          consulting or a build, and keep us on for support.
        </p>
        <nav aria-label="On this page" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {[...primaryServices, ...secondaryServices].map((s) => (
            <a key={s.id} href={`#${s.id}`} className="btn-secondary flex-none py-2">
              <s.icon className="h-4 w-4 text-blue" />
              {s.name}
            </a>
          ))}
        </nav>
      </header>

      {primaryServices.map((s, i) => (
        <PrimaryService key={s.id} service={s} tinted={i === 0} />
      ))}

      <section className="bg-cream py-12 sm:py-20">
        <div className="wrap">
          <h2 className="h-section text-3xl sm:text-4xl">After launch</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-black/65">
            Offered on their own or as part of a build. Most clients keep us on for at least one of them.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {secondaryServices.map((s) => (
              <article id={s.id} key={s.id} className="card scroll-mt-24 p-5 sm:p-8">
                <s.icon className="h-6 w-6 text-blue" />
                <h3 className="h-section mt-4 text-2xl">{s.name}</h3>
                <p className="mt-3 leading-relaxed text-black/70">{s.summary}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-black/75">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-blue" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-black/10 pt-4 text-sm text-black/55">{s.shape}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
