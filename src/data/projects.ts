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
  status: 'completed' | 'in-progress' | 'planned'
  tags: string[]
  description: string
  whatWeLearned: string[]
  howWeBuiltIt: string
  whereWeAre: string
  whereWeAreGoing: string
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
    thumbnail: '/project_logos/AEA_Logo1.png',
    logo: '/project_logos/AEA_Logo2.png',
    status: 'in-progress',
    tags: ['Full Stack', 'AI/ML', 'DevOps'],
    description:
      'AEA is a desktop application that lets you configure and run structured focus sessions, then monitors your PC activity across apps, browsers, and visual presence throughout. It tracks your habits across different phases of work over time — building a picture of how you actually spend your attention. At the end of each session, AEA analyses your behaviour and delivers AI-powered insights and actionable suggestions to help you sharpen your focus and get more from every working hour.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    technologies: ['Python', 'Node.js', 'React', 'TypeScript','MongoDB','Electron'],
    features: [
      {
        title: 'Onboarding and Setup',
        description:
          'Get started with a clean onboarding flow, then let AEA do the heavy lifting — end-of-session reports surface patterns, highlight deep-work streaks, and flag chronic distractions.',
        images: [
          '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
          '/project_snaps/AEA/Screenshot 2026-03-11 230014.png',
        ],
      },
      {
        title: 'Session Configuration & Policies',
        description:
          'Define your focus rules for specific purpose based sessions — set allowed apps, blocked sites, time limits, and enforcement behaviour. Full control over how strict or flexible your session runs.',
        images: [
          '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
          '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
        ],
      },
      {
        title: 'App & Web Blocking',
        description:
          'On a lenient policy, AEA notifies you the moment a blacklisted app or site is detected — a nudge to stay on track. Switch to strict mode and access is blocked outright, keeping distractions out for the duration of your session.',
        images: ['/project_snaps/AEA/Screenshot 2026-03-19 231337.png'],
      },
      {
        title: 'AI Analytics & Insights',
        description:
          'Review your full session history at a glance — past and recent sessions broken down by focus time, app usage, distraction events, and productivity trends. Dig deeper with a RAG-powered AI engine that knows your data: ask why your focus dropped, what your strongest sessions had in common, or what to do differently — and get answers grounded in your own history, not generic advice.',
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
          'Define your focus rules before every session — set allowed apps, blocked sites, time limits, and enforcement behaviour. Full control over how strict or flexible your session runs.',
      },
      {
        src: '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
        label: 'Session Configuration',
        description:
          'Define allowed applications and websites per session type — work, study, creative — with granular policy controls.',
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
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
  {
    id: 'deeds',
    name: 'Deeds',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
  {
    id: 'alamra',
    name: 'Alamra Website',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
  {
    id: 'kord',
    name: 'Kord Keyboard',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
]
