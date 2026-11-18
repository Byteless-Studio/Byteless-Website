import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'

const takeaways = [
  'A plain answer on whether AI is worth it for the problem you describe.',
  'The two or three tasks in your business where it would save the most time.',
  'A short written summary of what we found, yours to keep whether or not you hire us.',
]

export function FreeConsult() {
  return (
    <section className="pb-12 sm:pb-24">
      <div className="wrap">
        <div className="grid overflow-hidden rounded-md shadow-card lg:grid-cols-[2fr_3fr]">
          <div className="bg-blue p-6 text-white sm:p-10">
            <p className="text-sm font-medium text-white/75">Free, thirty minutes, with a founder</p>
            <h2 className="h-section mt-3 text-3xl sm:text-4xl">Not sure where AI fits? Start with a free consult.</h2>
            <Link to="/" hash="contact" className="btn-white mt-8">
              Get a free consult
            </Link>
          </div>
          <div className="bg-white p-6 sm:p-10">
            <h3 className="text-sm font-semibold text-black/50">What you leave with</h3>
            <ul className="mt-3 divide-y divide-black/10">
              {takeaways.map((t) => (
                <li key={t} className="flex gap-3 py-3.5">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-blue" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
