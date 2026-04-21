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
  logo?: string
  logoBg?: string
  heroImage?: string
  thumbnail?: string
  status?: 'completed' | 'in-progress' | 'planned'
  tags: string[]
  description: string
  whatWeLearned: string[]
  howWeBuiltIt: string
  images: string[]
  gallery?: GalleryItem[]
  features?: Feature[]
  technologies?: string[]
  services?: string[]
  whereWeAre?: string
  whereWeAreGoing?: string
  websiteUrl?: string
  appUrl?: string
  githubUrl?: string
  downloadUrl?: string
}

export const projects: Project[] = [
  {
    id: 'yaas',
    name: 'YAAS',
    tagline: 'Your All-in-one Analytics & Sales System',
    logo: '/project_logos/yaas/yaas-transparent.png',
    logoBg: 'bg-cream',
    heroImage: '/project_snaps/yaas/hero.png',
    //status: 'in-progress',
    tags: ['E-Commerce', 'Analytics', 'Inventory', 'AI/ML'],
    services: ['ai-ml', 'automations', 'web-dev', 'full-stack'],
    description: 'YAAS is an all-in-one analytics and sales platform built for e-commerce businesses that need real clarity across their entire operation. Managing a business today means juggling data spread across multiple platforms — sales channels, cost tools, customer systems, inventory software — with no single place to see it all. YAAS solves that. It pulls everything together into one unified system, giving you strong centralised control over your data no matter where it lives. From real-time analytics and smart inventory tracking to accounting visibility and AI-driven insights, YAAS makes managing your business straightforward — so you spend less time chasing numbers across platforms and more time acting on them.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    technologies: ['React', 'TanStack', 'TypeScript', 'MongoDB', 'Grok / Ollama', 'Tailwind CSS'],
    websiteUrl: 'https://yaas.byteless.io/',
    features: [
      {
        title: 'Onboarding & Secure Auth',
        description: 'A fully secure authentication flow — register, log in, and get into your dashboard fast. Built with robust auth at the core so your business data stays protected from the first interaction.',
        images: [
          '/project_snaps/yaas/login1.png',
          '/project_snaps/yaas/login2.png',
          '/project_snaps/yaas/registring.png',
        ],
      },
      {
        title: 'Seamless Multi-Platform Data Upload',
        description: 'Bring in sales, customer, cost, and product data from any platform — no matter the source or format. YAAS accepts uploads from all kinds of e-commerce and business tools, consolidating everything into one unified system without any manual re-entry.',
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
        title: 'Generic Data Mapping',
        description: 'Every upload is first analysed and automatically mapped to your own private database schema. YAAS normalises incoming data from any source, then gives you full control to review and adjust the mapping before anything is committed — keeping your data structured exactly how you need it, personalised, secure, and never shared.',
        images: [
          '/project_snaps/yaas/dataAnalyzer1.png',
          '/project_snaps/yaas/dataAnalyzer2.png',
          '/project_snaps/yaas/productFileAnalyzer.png',
        ],
      },
      {
        title: 'Smart Inventory Management',
        description: 'A full view of your product catalogue with live stock levels, status tracking, and alerts built in. Manage your inventory confidently — YAAS keeps everything organised and flags what needs your attention before it becomes a problem.',
        images: [
          '/project_snaps/yaas/productsDisplay1.png',
          '/project_snaps/yaas/productsDisplay2.png',
          '/project_snaps/yaas/productAnalytics1.png',
          '/project_snaps/yaas/productAnalytics2.png',
        ],
      },
      {
        title: 'Business Data Analytics',
        description: 'Dashboards built around the numbers that matter most to your business — revenue, sales trends, product performance, and customer behaviour. Everything surfaced in context so you can act on it, not just look at it.',
        images: [
          '/project_snaps/yaas/analytics1.png',
          '/project_snaps/yaas/analytics2.png',
        ],
      },
      {
        title: 'Smart Querying & Insights',
        description: 'Ask questions about your own data in plain language and get precise, grounded answers. YAAS\'s AI query engine lets you dig into your business without needing to write a single line of SQL — fast, accurate, and scoped entirely to your data.',
        images: [
          '/project_snaps/yaas/queryAnalytics1.png',
          '/project_snaps/yaas/queryAnalytics2.png',
          '/project_snaps/yaas/queryAnalytics3.png',
        ],
      },
    ],
    images: [
      '/project_snaps/yaas/hero.png',
      '/project_snaps/yaas/login1.png',
      '/project_snaps/yaas/platformDataUpload1.png',
      '/project_snaps/yaas/productsDisplay1.png',
      '/project_snaps/yaas/analytics1.png',
      '/project_snaps/yaas/queryAnalytics1.png',
    ],
  },
  {
    id: 'aea',
    name: 'AEA',
    tagline: 'Automated Executive Assistant',
    logo: '/project_logos/aea/AEA_logo_transparent.png',
    logoBg: 'bg-cream',
    //status: 'completed',
    tags: ['Productivity', 'Focus Tracking', 'AI/ML', 'Desktop'],
    services: ['ai-ml', 'automations', 'web-dev', 'full-stack'],
    description:
      'AEA is a desktop application that lets you configure and run structured focus sessions, then monitors your PC activity across apps, browsers, and visual presence throughout. It tracks your habits across different phases of work over time, building a picture of how you actually spend your attention. At the end of each session, AEA analyses your behaviour and delivers AI-powered insights and actionable suggestions to help you sharpen your focus and get more from every working hour.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    technologies: ['Python', 'Node.js', 'React', 'TypeScript','MongoDB','Electron'],
    features: [
      {
        title: 'Onboarding and Setup',
        description:
          'Get started with a clean onboarding flow, then let AEA do the heavy lifting; end-of-session reports surface patterns, highlight deep-work streaks, and flag chronic distractions.',
        images: [
          '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
          '/project_snaps/AEA/Screenshot 2026-03-11 230014.png',
        ],
      },
      {
        title: 'Session Configuration & Policies',
        description:
          'Define your focus rules for specific purpose based sessions: set allowed apps, blocked sites, time limits, and enforcement behaviour. Full control over how strict or flexible your session runs.',
        images: [
          '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
          '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
        ],
      },
      {
        title: 'App & Web Blocking',
        description:
          'On a lenient policy, AEA notifies you the moment a blacklisted app or site is detected, nudging you to stay on track. Switch to strict mode and access is blocked outright, keeping distractions out for the duration of your session.',
        images: ['/project_snaps/AEA/Screenshot 2026-03-19 231337.png'],
      },
      {
        title: 'AI Analytics & Insights',
        description:
          'Review your full session history at a glance: past and recent sessions broken down by focus time, app usage, distraction events, and productivity trends. Dig deeper with a RAG-powered AI engine that knows your data: ask why your focus dropped, what your strongest sessions had in common, or what to do differently, and get answers grounded in your own history, not generic advice.',
        images: [
          '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
          '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
          '/project_snaps/AEA/Screenshot 2026-03-19 170722.png',
        ],
      },
    ],
    downloadUrl: 'https://aea-downloads.pages.dev/',
    images: [
      '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230014.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
    ],
    gallery: [
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
        label: 'Welcome & Profile Setup',
        description:
          'Get started by entering your name and setting up your profile. A clean welcome screen that gets you into your first session in seconds.',
      },
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
        label: 'Session Configuration & Policies',
        description:
          'Define your focus rules before every session: set allowed apps, blocked sites, time limits, and enforcement behaviour. Full control over how strict or flexible your session runs.',
      },
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
        label: 'Session Configuration',
        description:
          'Define allowed applications and websites per session type (work, study, creative) with granular policy controls.',
      },
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
        label: 'Live Session',
        description:
          'Real-time monitoring view showing active app, elapsed focus time, facial presence status, and live policy enforcement.',
      },
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
        label: 'Activity Tracking',
        description:
          'A full timeline of every app and browser domain visited during the session, with time-on-task breakdowns.',
      },
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
        label: 'Session Analytics',
        description:
          'Post-session AI report highlighting deep-work streaks, distraction hotspots, and week-over-week trends.',
      },
    ],
  },
  {
    id: 'deeds',
    name: 'Deeds',
    tagline: 'The app that helps you get what you need done, with the help of what you\'ve always had.',
    //status: 'completed',
    logo: '/project_logos/deeds/deeds-logo-with-text and ball.png',
    logoBg: 'bg-cream',
    tags: ['Productivity', 'Accountability', 'Social', 'Web', 'iOS', 'Android'],
    description: 'Deeds keeps you accountable by making your friends verify a deed (a task that you\'ve wanted to do) and by setting deadlines on what you want to accomplish. Compete with your friends on who can complete the most deeds between you, and DON\'T MISS A DEED, OTHERWISE YOU\'LL LOSE POINTS!!! The methodology of Deeds: You create a deed (in single mode or dual mode; in single mode, only you send a deed and the friend has no corresponding deed). In single mode, you add what you want to complete and send your deed to a friend who acts as a verifier. The friend can choose to approve your deed based on their own factors. Once a friend approves, YOUR DEED IS ACTIVE! It\'s up to you to complete it now. Reminder: A DEED CAN NOT BE CANCELED: you either fail or complete. Send the deed to your friend, who can choose to approve your deed\'s completion, in which case you get the points you assigned to your deed!!!! This also works for you, where friends can send deeds to you to verify.',
    services: ['mobile', 'full-stack'],
    whatWeLearned: [],
    howWeBuiltIt: '',
    features: [
      {
        title: 'Install',
        description:
          'Deeds is a Progressive Web App — add it to your home screen on any device for a native app feel, without the App Store. Fast, installable, and always up to date.',
        images: [
          '/project_snaps/deeds/install-deeds-snap-1.png',
          '/project_snaps/deeds/install-deeds-snap-2.png',
          '/project_snaps/deeds/install-deeds-snap-3.png',
        ],
      },
      {
        title: 'Main Page',
        description:
          'Track everything in one place — active deeds, pending verifications, completed wins, and failed attempts. Your accountability dashboard at a glance.',
        images: [
          '/project_snaps/deeds/main-page-deeds-snap.png',
        ],
      },
      {
        title: 'Social Auth',
        description:
          'Jump in quickly with Google sign-in. A clean authentication flow gets you set up in seconds — no friction, no fuss.',
        images: [
          '/project_snaps/deeds/deeds-snap-7-social-auth.png',
        ],
      },
      {
        title: 'Deed Flow',
        description:
          'Set your task, assign a deadline, pick a point value, and send it off to a friend as your verifier. Once they approve — your deed is live and on the clock. You either complete it or fail it, no canceling.',
        images: [
          '/project_snaps/deeds/deeds-snap-1-deed-flow.png',
          '/project_snaps/deeds/deeds-snap-2-deed-flow.png',
          '/project_snaps/deeds/deeds-snap-3-deed-flow.png',
        ],
      },
      {
        title: 'Social',
        description:
          'Search for friends, build your circle, and compete on who can complete the most deeds. The more friends you have, the more accountability — and competition — you get.',
        images: [
          '/project_snaps/deeds/social-deeds-snap-9.png',
        ],
      },
      {
        title: 'Notifications',
        description:
          'Get notified the moment a friend sends you a deed to verify, approves yours, or when a deadline is closing in. Stay in the loop without having to check constantly.',
        images: [
          '/project_snaps/deeds/notification-deeds-snap-1.png',
          '/project_snaps/deeds/notification-deeds-snap-2.png',
        ],
      },
    ],
    images: [
      '/project_snaps/deeds/deeds-snap-1-deed-flow.png',
      '/project_snaps/deeds/deeds-snap-2-deed-flow.png',
      '/project_snaps/deeds/deeds-snap-7-social-auth.png',
      '/project_snaps/deeds/install-deeds-snap-2.png',
      '/project_snaps/deeds/main-page-deeds-snap.png',
      '/project_snaps/deeds/notification-deeds-snap-2.png',
      '/project_snaps/deeds/deeds-snap-3-deed-flow.png',
      '/project_snaps/deeds/install-deeds-snap-1.png',
      '/project_snaps/deeds/install-deeds-snap-3.png',
      '/project_snaps/deeds/notification-deeds-snap-1.png',
      '/project_snaps/deeds/social-deeds-snap-9.png',
    ],
    technologies: ['AWS', 'Python', 'Angular', 'TypeScript', 'MongoDB', 'Docker'],
    websiteUrl: 'https://deeds.you',

  },

  {
    id: 'alamra',
    name: 'Alamra Website',
    tagline: 'Bringing a traditional embroidery business to the modern digital ecosystem',
    logo: '/project_logos/alamra_project_logos/logo-gold-512.webp',
    logoBg: 'bg-cream',
    //status: 'completed',
    tags: ['E-Commerce', 'Craftsmanship', 'Web'],
    services: ['web-dev'],
    description: 'The official website for Alamra Importers, a leading provider of premium ceremonial insignia, bullion crests, badges, and traditional military craftsmanship. Built with modern web technologies for a professional and elegant showcase of our products.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    technologies: ['React', 'TypeScript', 'TanStack Router', 'Cloudflare Pages'],
    websiteUrl: 'https://alamraimporters.com/',
    images: ['/project_snaps/Alamra/Screenshot 2026-03-21 152905.png'],
  },

  {
    id: 'N8N Workflows',
    name: 'N8N Workflows',
    tagline: 'Automated Workflows',
    logo: '/project_logos/n8n/n8n-color-white.png',
    logoBg: 'bg-cream',
    tags: ['Automation', 'Workflow', 'AI/ML'],
    services: ['automations', 'web-dev'],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    features: [],
    gallery: [
      {
        src: '/project_snaps/n8n/Screenshot 2025-12-29 145223.png',
        label: 'Cal.com Booking to Airtable & Deck',
        description: 'Triggered by a Cal.com booking, this workflow automatically creates an Airtable client record, provisions a Google Drive folder, and produces a personalised presentation by copying a master deck and injecting the booking details directly into the slides. Zero manual work.',
      },
      {
        src: '/project_snaps/n8n/Screenshot 2025-12-29 145257.png',
        label: 'Fathom Transcript to Email Draft',
        description: 'Receives a Fathom meeting transcript via webhook, uses AI to validate whether it qualifies as a sales meeting, and automatically generates a polished follow-up email draft, ready to review and send.',
      },
    ],
    images: [],
  },
]
