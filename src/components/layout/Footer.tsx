import { Link } from '@tanstack/react-router'
import { services } from '@/data/services'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" aria-label="Byteless home" className="inline-block">
            <img src="/byteless_logos/byteless-wordmark.png" alt="Byteless" className="h-9 w-auto" />
          </Link>
          <p className="muted mt-5 max-w-sm text-sm leading-relaxed">
            An AI agency. We advise on where AI pays off, then build and run the systems.
          </p>
          <a href="mailto:byteless.company@gmail.com" className="link mt-3 inline-block text-sm">
            byteless.company@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" hash={s.id} className="muted text-sm hover:text-black transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/portfolio" className="muted text-sm hover:text-black transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link to="/" hash="about" className="muted text-sm hover:text-black transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="muted text-sm hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-black/50 sm:flex-row sm:justify-between">
          <span>© {year} Byteless. All rights reserved.</span>
          <span>Built and hosted by Byteless.</span>
        </div>
      </div>
    </footer>
  )
}
