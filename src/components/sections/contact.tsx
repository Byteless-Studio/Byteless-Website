import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const darkField =
  'w-full rounded border border-cream/20 bg-white/5 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-cream/60 focus:outline-none transition'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setStatus('sending')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-black py-12 text-cream sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="h-display text-[2.25rem] text-cream sm:text-5xl">Start with a free consult.</h2>
          <p className="mt-6 max-w-md leading-relaxed text-cream/70">
            Tell us what you are trying to do. We reply within one working day to set up a free thirty-minute
            consult with a founder. No pitch and no obligation.
          </p>
          <a
            href="mailto:hello@byteless.io"
            className="mt-8 inline-block text-sm text-cream underline underline-offset-4"
          >
            hello@byteless.io
          </a>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              <span className="text-cream/80">Name</span>
              <input name="name" required maxLength={120} autoComplete="name" className={darkField} />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="text-cream/80">Email</span>
              <input name="email" type="email" required maxLength={200} autoComplete="email" className={darkField} />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm">
            <span className="text-cream/80">What are you trying to do?</span>
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={4000}
              rows={5}
              className={`${darkField} resize-y`}
              placeholder="A sentence or two is plenty. What is the problem, and what have you tried?"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-white w-full py-3 sm:w-auto sm:py-2.5" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Request a free consult'}
            </button>
            {status === 'sent' && <p className="text-sm text-cream/80">Sent. We reply within one working day.</p>}
            {status === 'error' && (
              <p className="text-sm text-cream/80">
                That did not send. Email us at{' '}
                <a href="mailto:hello@byteless.io" className="underline underline-offset-4">
                  hello@byteless.io
                </a>{' '}
                instead.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
