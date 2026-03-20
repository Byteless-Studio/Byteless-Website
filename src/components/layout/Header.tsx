import { useState, useEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Link, useLocation } from '@tanstack/react-router'
import { MobileDrawer } from './MobileDrawer'
import { Logo } from './Logo'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()
  const contactLink = location.pathname + '#contact'

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About',     href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services',  href: '/services' },
    { name: 'Blog',      href: '/blog' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-sm shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4 md:h-16 md:py-0">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo size="md" variant="light" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-cream font-medium text-sm tracking-wide hover:opacity-60 transition-opacity duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to={contactLink}
                className="bg-cream text-navy px-6 py-2 rounded-lg font-medium text-sm hover:bg-cream/80 transition-colors duration-200"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-cream hover:opacity-60 transition-opacity"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        contactLink={contactLink}
      />
    </header>
  )
}
