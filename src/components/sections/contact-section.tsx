import { useEffect } from 'react'

export function ContactSection() {
  useEffect(() => {
    const cal = (window as any).Cal
    if (!cal) return
    cal('init', '30min', { origin: 'https://app.cal.com' })
    cal.ns['30min']('inline', {
      elementOrSelector: '#byteless-cal-inline',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: 'byteless-software-studio-ifafgq/30min',
    })
    cal.ns['30min']('ui', { hideEventTypeDetails: false, layout: 'month_view' })
  }, [])

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">

        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-xl text-cream/50 text-sm leading-relaxed">
            Book a call and let's talk about your project — pick a time that works for you.
          </p>
        </div>

        <div
          id="byteless-cal-inline"
          style={{ width: '100%', height: '700px', overflow: 'scroll' }}
          className="rounded-xl overflow-hidden border border-cream/10"
        />

      </div>
    </section>
  )
}
