# Byteless - AI agency website

The official website for **Byteless**, an AI agency. We advise businesses on where AI pays off, then design, build and run the systems.

**Live Site**: [byteless.io](https://byteless.io)

## Services

Two primary offers:

- **AI consulting**: opportunity audit, roadmap, build-vs-buy and architecture review
- **AI services & implementation**: custom agents, retrieval over company data, workflow automation, AI features in products

Two secondary offers:

- **Infrastructure management & support**
- **Security audits**, including AI-specific risks such as prompt injection

Service copy lives in `src/data/services.ts`. Case studies live in `src/data/projects.ts`.

## Tech Stack

- Vite + React 18 + TypeScript
- TanStack Router (file-based routing)
- Tailwind CSS
- Lucide icons
- Cal.com embed for booking
- Cloudflare Worker for static assets and the contact form endpoint (`worker.js`, sends through Resend)

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
├── routes/
│   ├── __root.tsx            # Header, contact section, footer
│   ├── index.tsx             # Home
│   ├── services.tsx          # All four services in depth
│   └── portfolio/
│       ├── index.tsx         # Case study index, filterable by service
│       └── $projectId.tsx    # Case study detail
├── components/
│   ├── layout/               # Header, Footer, Logo
│   ├── sections/             # Home page and contact sections
│   ├── portfolio/            # ProjectCard
│   └── ui/                   # CalButton
├── data/
│   ├── services.ts           # The four offers
│   └── projects.ts           # Case studies
└── globals.css               # Design tokens and shared component classes
```

## Checks

```bash
npm run type-check
npm test          # contact endpoint validation and escaping
npm run build
```

## Deployment

The site is deployed on **Cloudflare Workers** and accessible at [byteless.io](https://byteless.io).

- Build Command: `npm run build`
- Build Output Directory: `dist`
- Node Version: 18+

## License

This project is private and proprietary to Byteless.

## Contact

Visit [byteless.io](https://byteless.io) or email [hello@byteless.io](mailto:hello@byteless.io).
