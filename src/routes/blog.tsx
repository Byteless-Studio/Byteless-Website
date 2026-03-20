import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: () => (
    <main className="min-h-screen">
      <section className="py-20 container-custom">
        <h1 className="text-4xl font-playfair font-bold mb-6">Blog</h1>
        <p className="text-gray-600">A place for updates, tutorials or thoughts — coming soon.</p>
      </section>
    </main>
  )
})
