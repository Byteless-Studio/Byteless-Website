const services = [
  {
    title: 'Agentic AI & Machine Learning',
    description: 'Intelligent systems that act, decide, and learn: custom AI agents and end-to-end ML pipelines built for real-world use.',
  },
  {
    title: 'Automations',
    description: 'Eliminate repetitive work. We build workflows and integrations that connect your tools and run your processes hands-free.',
  },
  {
    title: 'Web Development',
    description: 'Fast, modern, and scalable web experiences: from marketing sites to complex data-driven applications.',
  },
  {
    title: 'Mobile App',
    description: 'Native and cross-platform mobile apps designed for performance, usability, and a polished feel on any device.',
  },
  {
    title: 'Full Stack Engineering',
    description: 'End-to-end product engineering across frontend, backend, APIs, databases, and infrastructure. All under one roof.',
  },
  {
    title: 'Consulting',
    description: 'Strategic guidance on product direction, architecture decisions, and technology choices, so you build the right thing, right.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container-custom">

        <h2 className="text-3xl font-playfair font-bold mb-12 text-cream">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 p-6 rounded-xl border border-cream/15 hover:border-cream/30 hover:bg-cream/3 transition-all duration-200"
              style={{ boxShadow: '2px 2px 0 rgba(240,235,226,0.18)' }}
            >
              <span className="font-mono text-xs text-cream/25 tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-playfair font-bold text-cream text-xl">{service.title}</h3>
              <p className="text-cream/45 text-sm leading-relaxed mt-auto">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
