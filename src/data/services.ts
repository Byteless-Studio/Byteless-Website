import { Compass, Cpu, Server, ShieldCheck, type LucideIcon } from 'lucide-react'

export type ServiceId = 'consulting' | 'implementation' | 'infrastructure' | 'security'

export interface Service {
  id: ServiceId
  name: string
  tier: 'primary' | 'secondary'
  icon: LucideIcon
  /** One line, used in nav, chips and filters. */
  short: string
  /** Two or three sentences for the home page. */
  summary: string
  /** Who this is for, in their words. */
  forWho: string
  /** Concrete things the client walks away with. */
  deliverables: string[]
  /** Typical shape of the engagement. */
  shape: string
}

export const services: Service[] = [
  {
    id: 'consulting',
    icon: Compass,
    name: 'AI consulting',
    tier: 'primary',
    short: 'Decide where AI pays off, and how to get there.',
    summary:
      'We look at how your business actually runs, find the places where AI saves real time or money, and hand you a plan you can execute with or without us. No slideware, no vendor pitch.',
    forWho:
      'Leaders who know AI matters but are not sure where to start, what it should cost, or which claims to believe.',
    deliverables: [
      'Opportunity audit of your workflows, data and tooling',
      'Prioritised roadmap with effort, cost and risk for each item',
      'Build-vs-buy and model or vendor recommendations',
      'Architecture and data-readiness review',
      'Team sessions so your people can run what gets built',
    ],
    shape: 'Two to six weeks. Fixed scope, written deliverables, a clear decision at the end.',
  },
  {
    id: 'implementation',
    icon: Cpu,
    name: 'AI agents & automation',
    tier: 'primary',
    short: 'AI agents that do real work in your tools, built and shipped.',
    summary:
      'We design, build and integrate AI systems into the way you already work: assistants that act on your data, automations that remove manual steps, and AI features inside your product. Delivered end to end, including the software around the model.',
    forWho:
      'Teams with a defined problem who want it solved properly, by people who ship production software, not prototypes.',
    deliverables: [
      'Custom AI agents and assistants with tool access and guardrails',
      'Retrieval over your documents and databases, grounded in your data',
      'Workflow automation across your existing tools',
      'LLM features integrated into existing products',
      'Full-stack delivery: web, mobile, APIs, data pipelines',
    ],
    shape: 'Scoped builds from a few weeks to a few months, with a working system at every milestone.',
  },
  {
    id: 'infrastructure',
    icon: Server,
    name: 'Cloud management & support',
    tier: 'secondary',
    short: 'Cloud setup, hosting, monitoring and upkeep, for what we build or what you already run.',
    summary:
      'Cloud setup, deployment pipelines, monitoring, cost control and an on-call team for the systems you depend on. Available for everything we build, and for systems you inherited.',
    forWho: 'Teams who want the system to keep running without hiring for it.',
    deliverables: [
      'Cloud and deployment setup',
      'Monitoring, alerting and incident response',
      'Cost and performance tuning',
      'Updates, patches and dependency upkeep',
    ],
    shape: 'Monthly retainer sized to the estate.',
  },
  {
    id: 'security',
    icon: ShieldCheck,
    name: 'Security audits',
    tier: 'secondary',
    short: 'Code, infrastructure and AI-specific risk reviewed and fixed.',
    summary:
      'A practical review of your application, infrastructure and AI integrations: access control, secrets, data handling, and the newer risks that come with language models such as prompt injection and data leakage. You get findings ranked by severity and a fix plan.',
    forWho: 'Teams shipping AI features who need to know what could go wrong before a customer finds out.',
    deliverables: [
      'Application and infrastructure review',
      'AI integration review: prompt injection, data exposure, tool misuse',
      'Severity-ranked findings with fixes',
      'Optional remediation by our team',
    ],
    shape: 'One to three weeks, with a written report and a walkthrough.',
  },
]

export const primaryServices = services.filter((s) => s.tier === 'primary')
export const secondaryServices = services.filter((s) => s.tier === 'secondary')
export const serviceById = (id: string) => services.find((s) => s.id === id)
