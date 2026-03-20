import { Link } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigate: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Services', href: '/services' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'UI / UX Design', href: '/services' },
      { name: 'Consulting', href: '/services' },
    ],
  }

  return (
    <footer className="bg-navy text-cream">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo size="md" variant="light" />
            </Link>

            <p className="text-cream/70 mb-6 max-w-md leading-relaxed text-sm">
              We design and build fast, modern digital experiences — from MVPs to
              full product systems. Clear thinking, clean code, human touch.
            </p>

            <div className="flex items-center space-x-3 text-cream/60">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">hello@byteless.dev</span>
            </div>
          </div>

          {/* Navigate Links */}
          <div>
            <h3 className="text-cream text-xs font-semibold uppercase tracking-widest mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-cream text-xs font-semibold uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-cream/40 text-sm">
            © {currentYear} [byte]less. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-cream/40 hover:text-cream/70 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-cream/40 hover:text-cream/70 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
