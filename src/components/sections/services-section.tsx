export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl font-playfair font-bold mb-6 text-cream">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-cream/10 rounded-xl p-6 hover:border-cream/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cream">Web Development</h3>
            <p className="text-cream/60">Full-stack applications, SPAs, APIs.</p>
          </div>
          <div className="border border-cream/10 rounded-xl p-6 hover:border-cream/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cream">Design</h3>
            <p className="text-cream/60">Branding, UI/UX, and visual systems.</p>
          </div>
          <div className="border border-cream/10 rounded-xl p-6 hover:border-cream/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cream">Consulting</h3>
            <p className="text-cream/60">Product strategy & technical architecture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
