import { CalButton } from '@/components/ui/CalButton'

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })
  
  const [status, setStatus] = useState<StatusState>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Byteless-Secret': import.meta.env.VITE_MAIL_SECRET
        },
        body: JSON.stringify(formState)
      })

      const data = await response.json()

      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' }
        })
        setFormState({
          name: '',
          email: '',
          message: ''
        })
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: 'Something went wrong. Please try again or email us directly at info@byteless.io' }
        })
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again or email us directly at info@byteless.io'  }
      })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">

        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-xl text-cream/50 text-sm leading-relaxed">
            We design and build fast, modern digital experiences —
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
