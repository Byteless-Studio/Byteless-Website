import { CalButton } from '@/components/ui/CalButton'

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container-custom">

        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-xl text-cream/50 text-sm leading-relaxed">
            We design and build fast, modern digital experiences,
            from MVPs to full product systems. Pick a time and let's talk about your project.
          </p>
        </div>

        <div className="flex justify-center">
          <CalButton className="btn-primary text-sm inline-block">
            Book a Call
          </CalButton>
        </div>

      </div>
    </section>
  )
}
