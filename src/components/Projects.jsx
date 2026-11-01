import { ArrowUpRight, Check, Link2Off } from 'lucide-react'
import { PROJECTS } from '../data/content'
import { AnalyzerMock, BrowserFrame, ChatMock, LedgerMock } from './Mockups'
import { GithubIcon, Reveal, SectionTitle, Spot, btn, cn } from './ui'

function Actions({ p }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {p.repo ? (
        <a href={p.repo} target="_blank" rel="noreferrer" className={btn.primary}><GithubIcon className="h-4 w-4" /> View on GitHub</a>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-amber-300/40 px-5 py-3 text-sm text-amber-200/80"><Link2Off className="h-4 w-4" /> GitHub link: to be added</span>
      )}
      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={btn.ghost}>Live demo <ArrowUpRight className="h-4 w-4" /></a>}
    </div>
  )
}

function Project({ p, index }) {
  const flip = index % 2 === 1
  const Mock = { 'resume-analyzer': AnalyzerMock, 'loan-chatbot': ChatMock, 'bank-ledger': LedgerMock }[p.id]
  return (
    <Reveal>
      <article className={cn('group relative grid items-center gap-10 lg:gap-14', p.featured ? 'lg:grid-cols-[1.25fr_1fr]' : 'lg:grid-cols-[1fr_1.1fr]')}>
        <div className={cn('relative', flip && 'lg:order-2')}>
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-violet/10 opacity-60 blur-3xl transition group-hover:opacity-100" />
          <BrowserFrame label={p.title} image={p.image} alt={`${p.title} screenshot`}><Mock /></BrowserFrame>
          {!p.image && <p className="mt-3 text-center text-xs text-slate-600">Interface preview</p>}
        </div>
        <div className={cn(flip && 'lg:order-1')}>
          {p.featured && <span className="mb-4 inline-block rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue ring-1 ring-accent-blue/30">Featured project</span>}
          <h3 className={cn('font-semibold tracking-tight text-white', p.featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl')}>{p.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{p.problem}</p>
          <p className="mt-3 leading-relaxed text-slate-400">{p.built}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-1">
            {p.features.map((f) => <li key={f} className="flex gap-3 text-[15px] text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-cyan" />{f}</li>)}
          </ul>
          <ul className="mt-7 flex flex-wrap gap-2">
            {p.tech.map((t) => <li key={t} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 font-mono text-xs text-slate-300 transition hover:border-accent-blue/50 hover:text-white">{t}</li>)}
          </ul>
          <Actions p={p} />
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Projects I've built." sub="Three projects across fintech and lending, from ledger-grade backends to the interfaces on top." />
        <div className="space-y-32">{PROJECTS.map((p, i) => <Project key={p.id} p={p} index={i} />)}</div>
      </div>
    </section>
  )
}
