import type { ServiceId } from './services'

export interface GalleryItem {
  src: string
  label: string
  description?: string
}

export interface Feature {
  title: string
  description: string
  images?: string[]
}

export interface Project {
  id: string
  name: string
  tagline: string
  /** Who it was for. "Byteless" marks an in-house product. */
  client: string
  industry: string
  year: string
  services: ServiceId[]
  logo?: string
  logoBg?: string
  heroImage?: string
  /** Portrait (phone) screenshots read better letterboxed than cropped. */
  portrait?: boolean
  tags: string[]
  description: string
  challenge: string
  approach: string
  outcomes: string[]
  features?: Feature[]
  gallery?: GalleryItem[]
  images: string[]
  technologies?: string[]
  websiteUrl?: string
  downloadUrl?: string
}

export const projects: Project[] = [
  {
    id: 'yaas',
    name: 'YAAS',
    tagline: 'One analytics system for an e-commerce operation spread across six tools.',
    client: 'Byteless',
    industry: 'E-commerce',
    year: '2026',
    services: ['implementation', 'consulting'],
    logo: '/project_logos/yaas/yaas-transparent.png',
    logoBg: 'bg-cream',
    heroImage: '/project_snaps/yaas/hero.png',
    tags: ['AI querying', 'Data mapping', 'Analytics', 'Inventory'],
    description:
      "YAAS pulls sales, cost, customer and inventory data from every platform an e-commerce business uses into one private database, then lets the owner ask questions about it in plain language.",
    challenge:
      "E-commerce operators run sales channels, cost tools, customer systems and inventory software that never agree with each other. A weekly review means exporting spreadsheets from each, reconciling by hand, and still not trusting the number.",
    approach:
      "We built an ingestion layer that accepts exports from any platform, uses a model to propose a mapping into the client's own schema, and lets a human approve it before anything is written. On top of that sit live dashboards, inventory alerts, and a retrieval-grounded query engine that answers questions only from the client's data.",
    outcomes: [
      'One source of truth replacing manual reconciliation across platforms',
      'New data sources onboarded by upload and review, no engineering ticket needed',
      "Plain-language questions answered from the client's own numbers, with no SQL",
    ],
    technologies: ['React', 'TanStack', 'TypeScript', 'MongoDB', 'Grok / Ollama', 'Tailwind CSS'],
    websiteUrl: 'https://yaas.byteless.io/',
    features: [
      {
        title: 'Multi-platform data upload',
        description:
          'Sales, customer, cost and product exports from any tool are accepted as-is and consolidated into one system without manual re-entry.',
        images: [
          '/project_snaps/yaas/platformDataUpload1.png',
          '/project_snaps/yaas/dataUpload1.png',
          '/project_snaps/yaas/dataUpload2.png',
          '/project_snaps/yaas/dataUpload3.png',
          '/project_snaps/yaas/productUpload1.png',
          '/project_snaps/yaas/productUpload2.png',
        ],
      },
      {
        title: 'AI-assisted schema mapping',
        description:
          "Each upload is analysed and mapped to the client's private schema. The owner reviews and adjusts the mapping before anything is committed.",
        images: [
          '/project_snaps/yaas/dataAnalyzer1.png',
          '/project_snaps/yaas/dataAnalyzer2.png',
          '/project_snaps/yaas/productFileAnalyzer.png',
        ],
      },
      {
        title: 'Inventory with alerts',
        description:
          'Live stock levels and status tracking across the catalogue, with alerts raised before a shortage becomes a lost sale.',
        images: [
          '/project_snaps/yaas/productsDisplay1.png',
          '/project_snaps/yaas/productsDisplay2.png',
          '/project_snaps/yaas/productAnalytics1.png',
          '/project_snaps/yaas/productAnalytics2.png',
        ],
      },
      {
        title: 'Business analytics',
        description:
          'Revenue, trends, product performance and customer behaviour in dashboards built around the decisions the owner makes weekly.',
        images: ['/project_snaps/yaas/analytics1.png', '/project_snaps/yaas/analytics2.png'],
      },
      {
        title: 'Plain-language querying',
        description:
          "Questions about the business answered from the client's own data by a retrieval-grounded query engine. No SQL, no hallucinated figures.",
        images: [
          '/project_snaps/yaas/queryAnalytics1.png',
          '/project_snaps/yaas/queryAnalytics2.png',
          '/project_snaps/yaas/queryAnalytics3.png',
        ],
      },
      {
        title: 'Secure onboarding',
        description:
          'Registration and sign-in built with robust authentication so business data is protected from the first session.',
        images: ['/project_snaps/yaas/login1.png', '/project_snaps/yaas/login2.png', '/project_snaps/yaas/registring.png'],
      },
    ],
    images: [
      '/project_snaps/yaas/hero.png',
      '/project_snaps/yaas/platformDataUpload1.png',
      '/project_snaps/yaas/productsDisplay1.png',
      '/project_snaps/yaas/analytics1.png',
      '/project_snaps/yaas/queryAnalytics1.png',
    ],
  },
  {
    id: 'aea',
    name: 'AEA',
    tagline: 'A desktop assistant that watches how you work and tells you, with evidence, how to focus better.',
    client: 'Byteless',
    industry: 'Productivity software',
    year: '2026',
    services: ['implementation'],
    logo: '/project_logos/aea/AEA_logo_transparent.png',
    logoBg: 'bg-cream',
    tags: ['RAG analytics', 'Desktop app', 'Activity tracking'],
    description:
      "AEA runs structured focus sessions on a user's PC, monitors app, browser and presence activity throughout, and at the end explains what happened and what to change, grounded in that user's own history.",
    challenge:
      'Focus tools either block everything or only nag. None of them could answer the question people actually have: why did my attention drop this afternoon, and what did my good days have in common?',
    approach:
      "We built an Electron application with a Python monitoring layer for apps, browser domains and webcam presence, a policy engine for lenient and strict sessions, and a retrieval-augmented analytics assistant that answers questions over the user's own session history rather than generic advice.",
    outcomes: [
      'Session reports that name specific distraction patterns and deep-work streaks',
      'Per-session policies, from gentle nudges to hard blocking',
      "An assistant that answers why-questions from the user's real data",
    ],
    technologies: ['Python', 'Node.js', 'React', 'TypeScript', 'MongoDB', 'Electron'],
    downloadUrl: 'https://aea-downloads.pages.dev/',
    features: [
      {
        title: 'Onboarding and setup',
        description: 'A short onboarding flow gets a user into their first session in under a minute.',
        images: ['/project_snaps/AEA/Screenshot 2026-03-12 160427.png', '/project_snaps/AEA/Screenshot 2026-03-11 230014.png'],
      },
      {
        title: 'Session policies',
        description: 'Allowed apps, blocked sites, time limits and enforcement level, set per session type.',
        images: ['/project_snaps/AEA/Screenshot 2026-03-11 230059.png', '/project_snaps/AEA/Screenshot 2026-03-11 230028.png'],
      },
      {
        title: 'App and web blocking',
        description:
          'Lenient mode notifies the moment a blocked app or site appears. Strict mode blocks it outright for the session.',
        images: ['/project_snaps/AEA/Screenshot 2026-03-19 231337.png'],
      },
      {
        title: 'AI analytics and insights',
        description:
          'Full session history broken down by focus time, app usage and distraction events, with a retrieval-grounded assistant that explains the patterns.',
        images: [
          '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
          '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
          '/project_snaps/AEA/Screenshot 2026-03-19 170722.png',
        ],
      },
    ],
    images: [
      '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
    ],
  },
  {
    id: 'n8n-workflows',
    name: 'Sales operations automation',
    tagline: 'Booking-to-proposal and meeting-to-follow-up, with no one typing anything.',
    client: 'Internal and client deployments',
    industry: 'Sales operations',
    year: '2025',
    services: ['implementation', 'consulting'],
    logo: '/project_logos/n8n/n8n-color-white.png',
    logoBg: 'bg-cream',
    tags: ['Workflow automation', 'n8n', 'LLM classification'],
    description:
      'A set of n8n workflows that turn calendar bookings and meeting transcripts into CRM records, prepared documents and ready-to-send follow-ups.',
    challenge:
      'Every new sales call meant creating a CRM record, a shared folder and a personalised deck by hand, then writing the follow-up from memory. Small tasks, but they ate the hour after every meeting.',
    approach:
      'We mapped the post-booking and post-meeting steps, then automated them: a Cal.com booking creates the Airtable record, provisions the Drive folder and generates the deck from a master template; a Fathom transcript is classified by a model as a sales meeting or not, and if so a follow-up draft is written for review.',
    outcomes: [
      'Zero manual work between a booking and a prepared first call',
      'Follow-up drafts waiting in the inbox before the meeting notes are closed',
      'A model used only where judgement is needed, deterministic steps everywhere else',
    ],
    technologies: ['n8n', 'Cal.com', 'Airtable', 'Google Drive', 'Fathom', 'OpenAI API'],
    gallery: [
      {
        src: '/project_snaps/n8n/Screenshot 2025-12-29 145223.png',
        label: 'Booking to CRM record and deck',
        description:
          'Triggered by a Cal.com booking: creates the Airtable client record, provisions a Google Drive folder, and produces a personalised presentation by copying a master deck and injecting the booking details.',
      },
      {
        src: '/project_snaps/n8n/Screenshot 2025-12-29 145257.png',
        label: 'Transcript to follow-up draft',
        description:
          'Receives a Fathom transcript by webhook, asks a model whether it qualifies as a sales meeting, and generates a follow-up email draft ready to review and send.',
      },
    ],
    images: [],
  },
  {
    id: 'deeds',
    name: 'Deeds',
    tagline: 'Social accountability: goals your friends hold you to.',
    client: 'Byteless',
    industry: 'Consumer app',
    year: '2025',
    services: ['implementation', 'infrastructure'],
    portrait: true,
    logo: '/project_logos/deeds/deeds-logo-with-text and ball.png',
    logoBg: 'bg-cream',
    tags: ['PWA', 'Mobile', 'Notifications', 'AWS'],
    description:
      'Deeds turns a goal into a commitment: set a task, a deadline and a point value, nominate a friend to verify it, and once they accept there is no cancelling.',
    challenge:
      'To-do apps are easy to ignore because nobody is watching. The product needed a verifier loop, real-time notifications and installability on any phone without the cost of two native app store builds.',
    approach:
      'We shipped Deeds as a progressive web app on AWS with Google sign-in, push notifications, friend search and a deed lifecycle enforced server-side so a locked deed can only complete or fail.',
    outcomes: [
      'Installable on iOS and Android from one codebase',
      'Verifier loop and point system enforced in the backend, not the UI',
      'Infrastructure run by Byteless on AWS with Docker',
    ],
    technologies: ['AWS', 'Python', 'Angular', 'TypeScript', 'MongoDB', 'Docker'],
    websiteUrl: 'https://deeds.you',
    features: [
      {
        title: 'Install anywhere',
        description: 'A progressive web app added to the home screen on any device, no app store required.',
        images: [
          '/project_snaps/deeds/install-deeds-snap-1.png',
          '/project_snaps/deeds/install-deeds-snap-2.png',
          '/project_snaps/deeds/install-deeds-snap-3.png',
        ],
      },
      {
        title: 'Dashboard',
        description: 'Active deeds, pending verifications, wins and failures in one view.',
        images: ['/project_snaps/deeds/main-page-deeds-snap.png'],
      },
      {
        title: 'Deed flow',
        description: 'Task, deadline, points, verifier. Once approved the deed is live and can only complete or fail.',
        images: [
          '/project_snaps/deeds/deeds-snap-1-deed-flow.png',
          '/project_snaps/deeds/deeds-snap-2-deed-flow.png',
          '/project_snaps/deeds/deeds-snap-3-deed-flow.png',
        ],
      },
      {
        title: 'Friends and notifications',
        description: 'Friend search, verification requests and deadline reminders delivered as push notifications.',
        images: [
          '/project_snaps/deeds/social-deeds-snap-9.png',
          '/project_snaps/deeds/notification-deeds-snap-1.png',
          '/project_snaps/deeds/notification-deeds-snap-2.png',
        ],
      },
    ],
    images: [
      '/project_snaps/deeds/main-page-deeds-snap.png',
      '/project_snaps/deeds/deeds-snap-1-deed-flow.png',
      '/project_snaps/deeds/social-deeds-snap-9.png',
    ],
  },
  {
    id: 'alamra',
    name: 'Alamra Importers',
    tagline: 'A traditional embroidery business brought online.',
    client: 'Alamra Importers',
    industry: 'Manufacturing and retail',
    year: '2026',
    services: ['implementation', 'infrastructure'],
    logo: '/project_logos/alamra_project_logos/logo-gold-512.webp',
    logoBg: 'bg-cream',
    tags: ['Web', 'Catalogue', 'Cloudflare'],
    description:
      'The public website for a provider of ceremonial insignia, bullion crests and military craftsmanship, built as a fast, elegant catalogue.',
    challenge:
      'A traditional craft business needed a web presence that looked as considered as the work, loaded instantly, and cost almost nothing to run.',
    approach:
      'We designed and built a static-first React site on Cloudflare, with a product catalogue structured for future e-commerce and hosting managed by Byteless.',
    outcomes: [
      'A professional catalogue live on a global edge network',
      'Near-zero hosting cost and no servers to maintain',
      'Structure ready for ordering when the business wants it',
    ],
    technologies: ['React', 'TypeScript', 'TanStack Router', 'Cloudflare Pages'],
    websiteUrl: 'https://alamraimporters.com/',
    images: ['/project_snaps/Alamra/Screenshot 2026-03-21 152905.png'],
  },
]

export const projectById = (id: string) => projects.find((p) => p.id === id)
