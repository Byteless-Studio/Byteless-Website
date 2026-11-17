import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { CalButton } from '@/components/ui/CalButton'

const navItems = [
  { name: 'Services', to: '/services' },
  { name: 'Case studies', to: '/portfolio' },
  { name: 'About', to: '/', hash: 'about' },
  { name: 'Contact', to: '/', hash: 'contact' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        scrolled || open ? 'shadow-[0_1px_0_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" aria-label="Byteless home" className="flex items-center gap-2.5">
          <Logo size="sm" variant="blue" />
          <span className="text-xl font-bold tracking-tight text-black">byteless</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              hash={'hash' in item ? item.hash : undefined}
              className="rounded px-3 py-2 text-sm text-black/70 hover:bg-cream/60 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <CalButton className="btn-primary ml-3 py-2">Book a call</CalButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden -mr-2 p-2 text-black"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white">
          <div className="wrap flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                hash={'hash' in item ? item.hash : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-2xl font-semibold tracking-tight"
              >
                {item.name}
              </Link>
            ))}
            <CalButton className="btn-primary mt-6 w-full py-3" onClick={() => setOpen(false)}>
              Book a call
            </CalButton>
          </div>
        </div>
      )}
    </header>
  )
}
