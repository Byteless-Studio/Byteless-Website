# Byteless - Software Studio

The official website for **Byteless**, a product studio that designs and builds fast, modern digital experiences — from MVPs to full product systems.

**Live Site**: [byteless.io](https://byteless.io)

## About Byteless

Byteless is a software studio run by founders, for founders. We turn ideas into real, usable products through clear guidance, strong engineering, and a partner-first approach. Services include:

- **Web Development**: Full-stack applications, SPAs, APIs
- **Mobile Development**: Cross-platform mobile apps
- **AI & Agentic Systems**: LLM integrations, automation pipelines
- **UI / UX Design**: Branding, interfaces, and visual systems
- **Consulting**: Product strategy and technical architecture

## Features

- **Responsive Layout**: Optimized for all devices and screen sizes
- **Single-page scrolling**: About and Services integrated into the home page
- **Portfolio**: Showcase of selected client work with detail pages
- **Blog**: Articles and updates
- **Contact**: Integrated Cal.com booking for scheduling calls
- **SEO Optimized**: Meta tags and structured data
- **Deployment**: Cloudflare Workers with built-in email API

## Tech Stack

- **Framework**: Vite + React 18
- **Routing**: TanStack Router (file-based routing)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons + Lucide React
- **Booking**: Cal.com embed
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Deployment**: Cloudflare Workers + Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Byteless-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## Project Structure

```
src/
├── routes/                 # TanStack Router pages
│   ├── __root.tsx         # Root layout (Header, Footer, ContactSection)
│   ├── index.tsx          # Home page (Hero, About, Services, Portfolio)
│   ├── blog.tsx           # Blog page
│   └── portfolio/         # Portfolio pages
│       ├── index.tsx      # Portfolio grid
│       └── $projectId.tsx # Individual project detail
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, MobileDrawer, Logo
│   ├── sections/         # Page sections (Hero, About, Services, etc.)
│   ├── portfolio/        # Portfolio-specific components
│   └── ui/               # Shared UI primitives
├── data/                 # Static data
│   └── projects.ts       # Portfolio project data
└── globals.css           # Global styles
```

## Deployment

The site is deployed on **Cloudflare Workers** and accessible at [byteless.io](https://byteless.io).

- Build Command: `npm run build`
- Build Output Directory: `dist`
- Node Version: 18+

## License

This project is private and proprietary to Byteless.

## Contact

Visit [byteless.io](https://byteless.io) or email [hello@byteless.dev](mailto:hello@byteless.dev).
