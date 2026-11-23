const steps = [
  {
    title: 'Free consult',
    body: 'Thirty minutes with a founder on what you are trying to do and where AI would help. You keep the written summary either way.',
  },
  {
    title: 'Audit and roadmap',
    body: 'We look at your workflows, data and tools, and come back with a prioritised plan with costs and risks.',
  },
  {
    title: 'Build and integrate',
    body: 'Scoped delivery with a working system at every milestone, integrated into the tools you already use.',
  },
  {
    title: 'Run and support',
    body: 'Monitoring, upkeep and improvements once it is live, for as long as you want us around.',
  },
]

export function Process() {
  return (
    <section className="bg-cream py-12 sm:py-24">
      <div className="wrap">
        <h2 className="h-section text-3xl sm:text-4xl">How an engagement runs</h2>
        <p className="mt-3 max-w-lg leading-relaxed text-black/65">
          Consulting stops after step two with a plan you can act on. A build carries on to a system in
          production.
        </p>

        <ol className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card flex gap-4 p-5 sm:block sm:p-6">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded bg-black text-xs font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="mt-0.5 font-semibold tracking-tight sm:mt-4">{s.title}</h3>
                <p className="muted mt-1.5 text-sm leading-relaxed sm:mt-2">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
