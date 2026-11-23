import { Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

// Real screenshots of AI systems we built, each linking to its work page.
const work = [
  {
    id: 'n8n-workflows',
    name: 'Call to follow-up',
    line: 'An AI agent that turns sales call transcripts into follow-up emails.',
    img: '/project_snaps/n8n/Screenshot 2025-12-29 145257.png',
  },
  {
    id: 'talden',
    name: 'Talden',
    line: 'Recordings of gatherings turned into pages people can read and share.',
    img: '/project_snaps/talden/home.png',
  },
  {
    id: 'n8n-workflows',
    name: 'Booking to first call',
    line: 'A new booking creates the CRM record, shared folder and deck on its own.',
    img: '/project_snaps/n8n/Screenshot 2025-12-29 145223.png',
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
              Byteless is an AI studio for growing businesses. We build AI agents that save your team time,
              run them in the cloud, and keep them secure.
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
            <p className="mt-4 text-sm text-black/50">Thirty minutes with a founder. Free, no obligation.</p>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 animate-rise [animation-delay:240ms]">
          <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
            <h2 className="text-sm font-semibold">Recent AI work</h2>
            <Link to="/portfolio" className="text-sm text-black/55 hover:text-black">
              All work
            </Link>
          </div>

          {/* Swipe on phones, three columns from tablet up */}
          <ul className="-mx-5 mt-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
            {work.map((w) => (
              <li key={w.name} className="w-[82%] flex-none snap-start sm:w-auto">
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
