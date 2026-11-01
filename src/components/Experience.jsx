import { Reveal, SectionTitle } from './ui'

const POINTS = [
  'Worked with product and design stakeholders across the development lifecycle, including requirements that changed along the way.',
  'Translated Figma designs into pixel-accurate, production-ready features for a live IPO platform.',
  'Built modular, reusable React.js components that improved maintainability and removed cross-device UI inconsistencies.',
  'Integrated the frontend with backend REST APIs using Axios, making sure financial data was retrieved and validated correctly.',
  'Refined spacing, alignment and cross-browser behaviour so responsive layouts matched the design specifications.',
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Where I've worked." sub="Real product work on a fintech platform, shipped as part of a remote team." />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute bottom-0 left-[9px] top-2 w-px bg-gradient-to-b from-accent-blue via-accent-violet/50 to-transparent md:left-[17px]" />
          <Reveal>
            <span className="absolute left-0 top-2 grid h-[19px] w-[19px] place-items-center rounded-full bg-ink-950 ring-1 ring-accent-blue/60 md:left-2"><span className="h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_14px_3px_rgba(99,130,255,.9)]" /></span>
            <div className="surface rounded-frame p-7 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">Software Development Intern</h3>
                  <p className="mt-1 text-lg text-accent-blue">Bluestock Fintech</p>
                </div>
                <div className="text-right text-sm text-slate-400"><p className="font-mono">Jun 2025 – Jul 2025</p><p>Remote</p></div>
              </div>
              <ul className="mt-6 space-y-3.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-slate-300"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet/80" />{p}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {['React.js', 'Axios', 'REST APIs', 'Figma to code', 'Responsive design'].map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">{t}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
