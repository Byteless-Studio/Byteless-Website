import { Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

// Real screenshots of AI systems we shipped, each linking to its case study.
const work = [
  {
    id: 'yaas',
    name: 'YAAS',
    line: 'Ask questions about your sales data in plain English.',
    img: '/project_snaps/yaas/queryAnalytics3.png',
  },
  {
    id: 'aea',
    name: 'AEA',
    line: 'An assistant that explains your focus patterns from real activity.',
    img: '/project_snaps/AEA/Screenshot 2026-03-19 170722.png',
  },
  {
    id: 'n8n-workflows',
    name: 'Sales operations',
    line: 'An AI agent that turns call transcripts into follow-up emails.',
    img: '/project_snaps/n8n/Screenshot 2025-12-29 145257.png',
  },
]

export function Hero() {
  return (
    <section className="pt-28 pb-14 sm:pt-40 sm:pb-20">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-14">
          <h1 className="h-display animate-rise text-[3rem] sm:text-6xl md:text-7xl lg:text-[4.6rem]">
            Put AI to work <br className="hidden sm:block" />
            in your business.
          </h1>
          <div className="animate-rise [animation-delay:120ms] lg:pb-3">
            <p className="text-lg leading-relaxed text-black/70">
              Byteless is an AI consulting and implementation studio. We find where AI pays off for you, then
              build it and keep it running.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link to="/" hash="contact" className="btn-primary px-5 py-3">
                Get a free consult
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-blue"
              >
                See our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 animate-rise [animation-delay:240ms]">
          <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
            <h2 className="text-sm font-semibold">Recent AI work</h2>
            <Link to="/portfolio" className="text-sm text-black/55 hover:text-black">
              All case studies
            </Link>
          </div>

          {/* Swipe on phones, three columns from tablet up */}
          <ul className="-mx-5 mt-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
            {work.map((w) => (
              <li key={w.id} className="w-[82%] flex-none snap-start sm:w-auto">
                <Link to="/portfolio/$projectId" params={{ projectId: w.id }} className="group block">
                  <div className="overflow-hidden rounded-md bg-cream p-3 sm:p-4">
                    <img
                      src={w.img}
                      alt={`${w.name} screenshot`}
                      className="aspect-[16/10] w-full rounded object-cover object-left-top shadow-lift transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold tracking-tight">{w.name}</p>
                      <p className="muted mt-0.5 text-sm leading-relaxed">{w.line}</p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none text-black/40 transition-colors group-hover:text-blue" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
