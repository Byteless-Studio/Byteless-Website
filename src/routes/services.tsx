import { createFileRoute } from '@tanstack/react-router'
import { ServicesSection } from '@/components/sections/services-section'

export const Route = createFileRoute('/services')({
  component: () => (
    <main className="min-h-screen">
      <ServicesSection />
      {/* you can list individual services here or reuse the same section with props */}
    </main>
  )
})
