export interface Download {
  platform: string
  filename: string
  url: string
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
  technologies?: string[]
  websiteUrl?: string
  appUrl?: string
  githubUrl?: string
  downloads?: Download[]
}

export const projects: Project[] = [
  {
    id: 'aea',
    name: 'AEA',
    tagline: 'Automated Executive Assistant',
    thumbnail: '/project_logos/AEA_Logo1.png', // tight crop — swap with logo below to try the splash screen
    logo: '/project_logos/AEA_Logo2.png',
    status: 'in-progress',
    tags: ["Full Stack", "AI/ML","DevOps"],
    description: 'AI Accountable Executive Assistant (AEA) is a local PC session monitoring and accountability platform. It tracks your active applications, browser domains, and facial expressions in real time during focus sessions, enforces configurable policies, and gives you AI-powered insights into your productivity habits.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: 'Stricter enforcement, smarter automation, and a richer UI experience.',
    technologies: ['Electron', 'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB'],
    downloads: [
      { platform: 'Windows', filename: 'AEA-Setup-1.0.0.exe', url: 'https://aea-downloads.pages.dev/#windows' },
      { platform: 'Linux',   filename: 'AEA-1.0.0.AppImage',  url: 'https://aea-downloads.pages.dev/#linux' },
    ],
    images: [
      '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230014.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
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
