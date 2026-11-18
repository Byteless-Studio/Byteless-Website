import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { secondaryServices } from '@/data/services'

export function SecondaryServices() {
  return (
    <section className="bg-cream py-12 sm:py-20">
      <div className="wrap grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
        <div>
          <h2 className="h-section text-3xl">Also on hand</h2>
          <p className="mt-3 leading-relaxed text-black/65">
            What every AI system needs after launch. Offered on its own or alongside a build.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {secondaryServices.map((s) => (
            <Link
              key={s.id}
              to="/services"
              hash={s.id}
              className="card group flex flex-col p-6 transition-shadow hover:shadow-lift"
            >
              <s.icon className="h-5 w-5 text-blue" />
              <h3 className="mt-4 font-semibold tracking-tight">{s.name}</h3>
              <p className="muted mt-1.5 text-sm leading-relaxed">{s.short}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-blue">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
