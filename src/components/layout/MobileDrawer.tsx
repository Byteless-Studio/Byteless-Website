import { AnimatePresence, motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
  contactLink: string
}

export function MobileDrawer({ isOpen, onClose, navItems, contactLink }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-navy shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cream/10">
                <Link to="/" onClick={onClose}>
                  <Logo size="sm" variant="light" />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-cream hover:opacity-60 transition-opacity"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={onClose}
                      className="block text-cream font-medium text-lg hover:opacity-60 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Link
                    to={contactLink}
                    onClick={onClose}
                    className="block bg-cream text-navy px-6 py-3 rounded-lg font-medium text-center hover:bg-cream/80 transition-colors mt-8"
                  >
                    Book a Call
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
