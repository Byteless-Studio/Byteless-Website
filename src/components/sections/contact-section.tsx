import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">

        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-xl text-cream/50 text-sm leading-relaxed">
            We design and build fast, modern digital experiences —
            from MVPs to full product systems. Send us a message and let's talk about your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-cream border border-cream text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition-shadow duration-200"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-cream border border-cream text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition-shadow duration-200"
            />
          </div>

          <textarea
            required
            placeholder="Tell us about your project..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-cream border border-cream text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition-shadow duration-200 resize-none"
          />

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary text-sm inline-block disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400">Thanks! We'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
            )}
          </div>
        </form>

      </div>
    </section>
  )
}
