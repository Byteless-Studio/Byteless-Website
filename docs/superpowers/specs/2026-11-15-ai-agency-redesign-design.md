# Byteless site redesign: AI consulting & implementation agency

Date: 2026-11-15. Status: approved by delegation ("you're the expert, you decide"); every call below is the builder's and can be overridden.

## Intent
The current site reads as a generic software studio with six undifferentiated services and no direction. The business is an AI agency. The site must say that in the first screen, push visitors toward one of two engagement types, prove it with case studies, and make reaching out effortless.

## Goals
- Two primary offers, visible everywhere: **AI consulting** and **AI services & implementation**.
- Two secondary offers, visible but subordinate: **Infrastructure management & support** and **Security audits**.
- Case-study-driven proof (challenge / approach / outcome), using the existing project screenshots.
- Sleek, modern black-and-white design using the existing brand: the original logo, the cream, and the blue as the only accent.
- One clear reach-out path: book a call (Cal.com, already wired) and a contact form (worker endpoint, already deployed).

## Non-goals / anti-goals
- No blog (the "coming soon" page is removed).
- No new dependencies, no CMS, no new hosting. Same Vite + React + TanStack Router + Tailwind + Cloudflare Worker.
- No invented metrics in case studies. Outcomes are qualitative until the owners add real numbers.
- Not a six-service menu again. Anything that isn't one of the four offers is folded into them.

## Approaches considered
1. **Restyle in place**: keep sections, swap colors. Cheapest, but leaves the six-service structure and the "software studio" positioning. Rejected.
2. **Rebuild pages on the existing stack** (chosen): new information architecture, new design tokens, new sections, keep router/worker/data shape where it works. Highest leverage for the effort.
3. **Migrate to a new framework/template**: no benefit over 2, adds risk and churn. Rejected.

## Information architecture
- `/` Home: hero (statement headline, one-line intro, one primary action, and three real AI work screenshots linking to case studies), a short positioning statement, the two primary services, secondary services, how an engagement runs, founders, contact.
- `/services`: both systems in depth plus the two secondary services, with anchors.
- `/portfolio`: case study index (URL kept for existing inbound links; labelled "Case studies"). No filter: five case studies do not need one.
- `/portfolio/$id`: case study detail (challenge / approach / outcome, then screenshots and stack).
- Contact section lives in the root layout so it appears on every page.

## Design tokens (revised 2026-11-16 after owner feedback)
The first dark pass was rejected. The owner asked for a black-and-white site, Notion style, with the blue only as an accent, the cream kept, and the original logo kept.
- Surfaces: white page, cream `#f0ebe2` bands for alternate sections and screenshot frames, one black band for contact.
- Text: black, with black at reduced opacity for secondary text. Cream text on the black band.
- Accent: Byteless blue `#164baa` for primary buttons, icons, links and service tags only.
- Shape: rectangular buttons with 4px corners and a light shadow; white cards with a hairline ring and soft shadow. No glows, gradients or filters.
- Type: Inter for everything; JetBrains Mono only for the original `[ ]` logo mark.
- Logo: the original `[ ]` mark in Byteless blue with the name "byteless" beside it in the header; the original `[byte]less` wordmark in the footer.
- Hero (third revision, after reviewing Distyl, Fractional AI, Tribe AI, Metalab, Invisible and Anthropic): one confident statement, one primary action with a text link as the secondary, and real proof in the first screen. Proof is screenshots of shipped AI work rather than a mock interface, because agencies sell work, not a product.
- Motion: one short fade-up on the hero at load. `prefers-reduced-motion` respected.

## Data
- `src/data/services.ts` is the single source for the four offers (id, name, short, summary, deliverables, forWho). Home, services page, footer and portfolio filters all read it.
- `Project` gains `client`, `industry`, `challenge`, `approach`, `outcomes`, `year`; `services` now uses the four offer ids. Existing `features`/`gallery`/`images` keep working.

## Left to the builder
Exact copy, spacing, and the contact form error states. Worker input validation and HTML escaping are added because the endpoint is a trust boundary.
