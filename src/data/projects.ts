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
  websiteUrl?: string
  appUrl?: string
  githubUrl?: string
  downloadUrl?: string
}

export const projects: Project[] = [
  {
    id: 'aea',
    name: 'AEA',
    tagline: 'Automated Executive Assistant',
    thumbnail: '/project_logos/aea/AEA_logo_transparent.png',
    //status: 'completed',
    tags: ['Full Stack', 'App Dev', 'AI/ML', 'DevOps'],
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
    id: 'iams',
    name: 'IAMS',
    tagline: 'Coming soon.',
    //status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    features: [],
    images: [],
  },
  {
    id: 'deeds',
    name: 'Deeds',
    tagline: 'The app that helps you get what you need done, with the help of what you\'ve always had.',
    //status: 'completed',
    logo: '/project_logos/deeds/deeds-logo-with-text and ball.png',
    tags: ['Productivity', 'Accountability', 'Social', 'Web', 'iOS', 'Android'],
    description: 'Deeds keeps you accountable by making your friends verify a deed (a task that you\'ve wanted to do) and by setting deadlines on what you want to accomplish. Compete with your friends on who can complete the most deeds between you, and DON\'T MISS A DEED, OTHERWISE YOU\'LL LOSE POINTS!!! The methodology of Deeds: You create a deed (in single mode or dual mode; in single mode, only you send a deed and the friend has no corresponding deed). In single mode, you add what you want to complete and send your deed to a friend who acts as a verifier. The friend can choose to approve your deed based on their own factors. Once a friend approves, YOUR DEED IS ACTIVE!!!! It\'s up to you to complete it now. Reminder: A DEED CAN NOT BE CANCELED: you either fail or complete. Send the deed to your friend, who can choose to approve your deed\'s completion, in which case you get the points you assigned to your deed!!!! This also works for you, where friends can send deeds to you to verify.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    features: [],
    images: [
    "/project_snaps/deeds/deeds-snap-1-deed-flow.png",
    "/project_snaps/deeds/deeds-snap-2-deed-flow.png",
    "/project_snaps/deeds/deeds-snap-7-social-auth.png",
    "/project_snaps/deeds/install-deeds-snap-2.png",
    "/project_snaps/deeds/main-page-deeds-snap.png",
    "/project_snaps/deeds/notification-deeds-snap-2.png",
    "/project_snaps/deeds/deeds-snap-1-deed-flow.png",
    "/project_snaps/deeds/deeds-snap-3-deed-flow.png",
    "/project_snaps/deeds/install-deeds-snap-1.png",
    "/project_snaps/deeds/install-deeds-snap-3.png",
    "/project_snaps/deeds/notification-deeds-snap-1.png",
    "/project_snaps/deeds/social-deeds-snap-9.png"
    ],
    technologies: ['AWS', 'Python', 'Angular', 'TypeScript', 'MongoDB', 'Docker'],
    websiteUrl: 'https://deeds.you',

  },

  {
    id: 'alamra',
    name: 'Alamra Website',
    tagline: 'Bringing a traditional embroidery business to the modern digital ecosystem',
    logo: '/project_logos/alamra_project_logos/logo-gold-512.webp',
    //status: 'completed',
    tags: ['UI/UX design', 'Web Dev'],
    description: 'The official website for Alamra Importers, a leading provider of premium ceremonial insignia, bullion crests, badges, and traditional military craftsmanship. Built with modern web technologies for a professional and elegant showcase of our products.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    technologies: ['React', 'TypeScript', 'TanStack Router', 'Cloudflare Pages'],
    websiteUrl: 'https://alamraimporters.com/',
    images: ['/project_snaps/Alamra/Screenshot 2026-03-21 152905.png'],
  },

  {
    id: 'n8n',
    name: 'n8n Projects',
    tagline: 'Automated Workflows',
    logo: '/project_logos/n8n/n8n-color-white.png',
    tags: ['Automations', 'AI/ML'],
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
