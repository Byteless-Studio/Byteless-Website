import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/sections/hero'
import { Statement } from '@/components/sections/statement'
import { PrimaryServices } from '@/components/sections/primary-services'
import { FreeConsult } from '@/components/sections/free-consult'
import { SecondaryServices } from '@/components/sections/secondary-services'
import { Process } from '@/components/sections/process'
import { About } from '@/components/sections/about'

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <Helmet>
        <title>Byteless | AI consulting and implementation</title>
      </Helmet>
      <Hero />
      <Statement />
      <PrimaryServices />
      <FreeConsult />
      <SecondaryServices />
      <Process />
      <About />
    </main>
  ),
})
