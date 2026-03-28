const tags = [
  'Full Stack', 'Cloud', 'AI & Agentic Systems', 'Mobile',
  'Data Pipelines', 'ETL', 'Analytics', 'Workflow Automations',
  'Security', 'API Design',
]

const values = [
  {
    title: 'Simplicity',
    description: 'We use whatever works best for you — the right tool for the right job, not the trendiest one.',
  },
  {
    title: 'Honesty',
    description: 'We say what we mean. Straight feedback, realistic timelines, and full transparency — always.',
  },
  {
    title: 'Professionalism',
    description: 'Every project gets our full attention. We show up prepared, communicate clearly, and deliver on what we promise.',
  },
  {
    title: 'Commitment',
    description: "We treat your vision as our own. We don't stop until the work is done right.",
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Project Planning',
    description:
      'We start by deeply understanding your goals, constraints, and vision. Together we define scope, milestones, and success criteria — so every decision that follows is intentional.',
    gradient: 'from-blue-900/60 to-indigo-900/40',
    icon: (
      <svg className="w-8 h-8 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Development Architecture',
    description:
      'Before a single line of code, we design the system. Tech stack selection, data flows, infrastructure patterns — built for scalability from the start, not patched in later.',
    gradient: 'from-indigo-900/60 to-violet-900/40',
    icon: (
      <svg className="w-8 h-8 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'UI Design',
    description:
      'Great products feel effortless to use. We craft interfaces that are clean, purposeful, and on-brand — wireframes and prototypes iterated with your feedback until it feels right.',
    gradient: 'from-violet-900/60 to-purple-900/40',
    icon: (
      <svg className="w-8 h-8 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Backend & QA',
    description:
      'Robust APIs, secure data handling, and thorough testing across the stack. We don\'t ship until it\'s solid — automated tests, edge case coverage, and performance benchmarks included.',
    gradient: 'from-blue-900/50 to-cyan-900/40',
    icon: (
      <svg className="w-8 h-8 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Deployment',
    description:
      'We handle the full release pipeline — CI/CD, cloud infrastructure, environment configuration, and go-live. Your product reaches users reliably and without drama.',
    gradient: 'from-cyan-900/50 to-teal-900/40',
    icon: (
      <svg className="w-8 h-8 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Support & Maintenance',
    description:
      'Shipping is the beginning, not the end. We provide ongoing monitoring, updates, and iterative improvements — so your product stays healthy and keeps getting better.',
    gradient: 'from-teal-900/50 to-blue-900/40',
    icon: (
      <svg className="w-8 h-8 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container-custom">

        {/* ── Section label ── */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cream/25 text-xs tracking-[0.3em] uppercase font-mono">01</span>
          <div className="h-px w-10 bg-cream/20" />
          <span className="text-cream/25 text-xs tracking-[0.3em] uppercase">About</span>
        </div>

        {/* ── Headline + body ── */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 mb-20">
          <h2
            className="font-playfair font-bold text-cream leading-[0.92] flex-1"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 7rem)' }}
          >
            Built to bridge{' '}
            <span className="text-cream">creators</span>
            <br />and their concepts.
          </h2>

          <p className="text-cream/55 leading-relaxed max-w-sm md:text-right md:self-end">
            Byteless is a product studio. We turn ideas into real, usable products
            through clear guidance, strong engineering, and a partner‑first approach.
            Our plan is to constantly learn and grow as a group, providing the best
            services and most optimal solutions to our customers.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-cream/10 mb-16" />

        {/* ── Why Us + What We've Done ── */}
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-cream/25 text-xs tracking-[0.3em] uppercase mb-6">Why Us</p>
            <p className="text-cream/75 leading-relaxed text-lg mb-6">
              We're ideators who understand creators. Byteless removes hurdles through
              industry experience and professionalism — pairing technical skill with
              founder empathy to act as strategic partners dedicated to bringing ideas
              to life.
            </p>
            <p className="text-cream/55 leading-relaxed italic">
              You handle the thinking part — we handle the building for you,
              taking care of yours as our own.
            </p>
          </div>

          <div>
            <p className="text-cream/25 text-xs tracking-[0.3em] uppercase mb-6">What We've Done</p>
            <p className="text-cream/75 leading-relaxed mb-8">
              End‑to‑end development across the full SDLC — from architecture and
              security to testing and deployment. Agentic AI systems, full‑stack
              applications, and data‑driven solutions with analytics and ETL.
            </p>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs text-cream/50 border border-cream/15 rounded-full px-3 py-1 hover:border-cream/40 hover:text-cream/80 transition-colors duration-200 cursor-default"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Values ── */}
        <div className="mt-16 pt-16 border-t border-cream/10">
          <p className="text-cream/25 text-xs tracking-[0.3em] uppercase mb-8">Our Values</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex flex-col gap-3 p-5 rounded-xl bg-cream hover:bg-cream/90 transition-all duration-200"
              >
                <span className="font-mono text-xs text-navy/30 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="font-playfair font-bold text-navy text-lg">{v.title}</h4>
                <p className="text-navy/55 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-cream/10 my-24" />

        {/* ── Our Process ── */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cream/25 text-xs tracking-[0.3em] uppercase font-mono">02</span>
          <div className="h-px w-10 bg-cream/20" />
          <span className="text-cream/25 text-xs tracking-[0.3em] uppercase">Our Process</span>
        </div>

        <div className="mb-12">
          <h2
            className="font-playfair font-bold text-cream leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
          >
            Journey from{' '}
            <span style={{ WebkitTextStroke: '1.5px #f0ebe2', color: 'transparent', fontStyle: 'italic' }}>
              concept to{' '}
            </span>
            creation.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl overflow-hidden border border-cream/10 hover:border-cream/25 transition-all duration-300"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-60`} />

              {/* Content */}
              <div className="relative p-6 flex flex-col gap-6 h-full min-h-[260px]">
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-cream/30 tracking-[0.2em]">{step.number}</span>
                  {step.icon}
                </div>

                {/* Title + description */}
                <div className="mt-auto">
                  <h3 className="font-playfair font-bold text-cream text-xl mb-3 group-hover:text-cream/90 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed group-hover:text-cream/65 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="container-custom">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-cream/25 text-xs tracking-[0.3em] uppercase font-mono">03</span>
          <div className="h-px w-10 bg-cream/20" />
          <span className="text-cream/25 text-xs tracking-[0.3em] uppercase">Team</span>
        </div>

        <div className="text-center mb-16">
          <h3
            className="font-playfair font-bold text-cream leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Led by{' '}
            <span style={{ WebkitTextStroke: '1.5px #f0ebe2', color: 'transparent', fontStyle: 'italic' }}>
              Entrepreneurs,
            </span>{' '}
            Not Account Executives
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-16">
          {[
            {
              img: '/team/raheem.jpg',
              name: 'Raheem Ahmed',
              title: 'Co-Founder',
              focus: 'Product Strategy, Client Relations',
              position: 'object-top',
              linkedin: 'https://www.linkedin.com/in/raheemwarriach/',
            },
            {
              img: '/team/usaid.jpg',
              name: 'Usaid Malik',
              title: 'Co-Founder',
              focus: 'Engineering, AI Leadership',
              position: 'object-[50%_40%]',
              linkedin: 'https://www.linkedin.com/in/usaidhmalik/',
            },
          ].map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center gap-4">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="relative w-40 h-40 group/photo">
                <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-cream/15 group-hover/photo:ring-cream/50 transition-all duration-300">
                  <img
                    src={person.img}
                    alt={person.name}
                    className={`w-full h-full object-cover ${person.position}`}
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-[#0A66C2] flex items-center justify-center ring-2 ring-navy shadow-md">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
              </a>
              <div>
                <p className="text-cream font-semibold text-lg">{person.name}</p>
                <p className="text-cream/50 text-sm mt-1">{person.title}</p>
                <p className="text-cream/35 text-xs mt-2 max-w-[180px]">{person.focus}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
