import { Linkedin } from 'lucide-react'

const founders = [
  {
    img: '/team/raheem.jpg',
    name: 'Raheem Ahmed',
    role: 'Co-founder',
    focus: 'Strategy, client work and the consulting practice.',
    position: 'object-top',
    linkedin: 'https://www.linkedin.com/in/raheemwarriach/',
  },
  {
    img: '/team/usaid.jpg',
    name: 'Usaid Malik',
    role: 'Co-founder',
    focus: 'Engineering and AI systems, from architecture to production.',
    position: 'object-[50%_40%]',
    linkedin: 'https://www.linkedin.com/in/usaidhmalik/',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-12 sm:py-24">
      <div className="wrap grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="h-section text-3xl sm:text-4xl">Two founders, hands&#8209;on in every engagement.</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-black/70">
            <p>
              Byteless was started by two engineers who kept watching businesses buy AI they could not use. We
              take a different route: understand the operation first, pick the smallest system that solves the
              problem, then build it properly and keep it running.
            </p>
            <p>
              You deal with the people doing the work. We say when AI is the wrong answer, give realistic
              timelines, and treat your product as our own once we are in.
            </p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {founders.map((f) => (
            <li key={f.name} className="card flex items-center gap-4 p-4 sm:gap-5 sm:p-5">
              <img
                src={f.img}
                alt={f.name}
                className={`h-16 w-16 flex-none rounded-full object-cover ${f.position}`}
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="font-semibold">{f.name}</p>
                <p className="text-sm text-black/50">{f.role}</p>
                <p className="muted mt-1 text-sm">{f.focus}</p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-2 inline-flex items-center gap-1.5 text-sm"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
