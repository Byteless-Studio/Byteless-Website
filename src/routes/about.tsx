import { createFileRoute } from '@tanstack/react-router'
import { AboutSection } from '@/components/sections/about-section'

export const Route = createFileRoute('/about')({
  component: () => (
    <main className="min-h-screen">
      <AboutSection />
      {/* add more content, team, timeline, etc. */}
    </main>
  )
})
