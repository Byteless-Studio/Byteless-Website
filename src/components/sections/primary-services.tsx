import { Link } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import { primaryServices } from '@/data/services'

export function PrimaryServices() {
  return (
    <section className="py-12 sm:py-24">
      <div className="wrap">
        <h2 className="h-section text-3xl sm:text-4xl">How we help</h2>
        <p className="muted mt-3 max-w-lg leading-relaxed">
          Start with advice on where AI fits, or go straight to a build.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {primaryServices.map((s, i) => (
            <Link
              key={s.id}
              to="/services"
              hash={s.id}
              className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-lift"
            >
              <div className={`h-1.5 ${i === 0 ? 'bg-black' : 'bg-blue'}`} />
              <div className="flex flex-1 flex-col p-5 sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded bg-blue-light text-blue">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="h-section mt-5 text-2xl">{s.name}</h3>
                <p className="muted mt-2 leading-relaxed">{s.short}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-black/75">
                  {s.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-blue" />
                      {d}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-blue sm:pt-8">
                  What's included
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
