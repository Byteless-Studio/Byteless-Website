import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { CalButton } from '@/components/ui/CalButton'

// Words from "vision" onwards all start outlined and fill in one by one
const animatedParts = ['vision', 'into', 'modern,', 'usable', 'products.']

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col pt-16 overflow-hidden">

      {/* ── Center tagline ── */}
      <div className="flex-1 flex items-center justify-center px-4 text-center">
        <h2 className="font-playfair font-bold text-cream leading-tight text-2xl sm:text-3xl md:text-4xl max-w-2xl">
          Your go‑to partner for turning{' '}
          {animatedParts.map((word, i) => {
            const fillLevels = [0, 0.25, 0.5, 0.5, 1]
            const fill = fillLevels[i]
            const isHollow = fill === 0
            return (
              <motion.span
                key={word}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.5, duration: 1.2, ease: 'easeOut' }}
                style={{
                  fontStyle: i === 0 ? 'italic' : 'normal',
                  color: isHollow ? 'transparent' : `rgba(240,235,226,${fill})`,
                  WebkitTextStroke: isHollow ? '1.5px #f0ebe2' : fill < 1 ? `1px rgba(240,235,226,${0.4})` : 'none',
                }}
              >
                {word}{i < animatedParts.length - 1 ? ' ' : ''}
              </motion.span>
            )
          })}
        </h2>
      </div>

      {/* ── Giant brand name + services ── */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Services list — right side, top-aligned with brand name */}
        <ul className="hidden sm:block absolute right-4 sm:right-6 lg:right-8 top-0 text-cream/60 text-sm space-y-1 text-right">
          <li className="text-cream/90 font-medium">Agentic AI & Machine Learning</li>
          <li>Automations</li>
          <li>Web Development</li>
          <li>Mobile App</li>
          <li>Full Stack Engineering</li>
          <li>Consulting</li>
        </ul>

        <p
          className="font-playfair leading-none text-cream whitespace-nowrap"
          style={{ fontSize: 'clamp(2rem, 8vw, 19rem)', fontWeight: 900 }}
        >
          BYTELESS
        </p>
        <p
          className="font-playfair leading-none whitespace-nowrap text-cream"
          style={{
            fontSize: 'clamp(2rem, 8vw, 19rem)',
            fontWeight: 600,
          }}
        >
          SOFTWARE STUDIO
        </p>
      </div>

      {/* ── Description + CTA ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-cream/50 text-sm leading-relaxed mb-4 max-w-xs">
          We design and build fast, modern digital experiences —
          from MVPs to full product systems.
        </p>
        <CalButton className="btn-primary text-sm inline-block">
          Book a Call
        </CalButton>
      </div>

    </section>
  )
}
