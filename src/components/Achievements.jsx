import { Code2, Medal, Users } from 'lucide-react'
import { Reveal, SectionTitle, Spot } from './ui'

const ITEMS = [
  { icon: Medal, title: 'Rank 333', text: 'CodeClash 2025 CodeQuest, ranked among competitive programming participants for accurate, efficient solutions.' },
  { icon: Users, title: 'EY Techathon 5.0', text: 'Led Team Hackpro1 through problem analysis, solution design and a detailed presentation submission in Round 2.' },
  { icon: Code2, title: '100+ problems', text: 'Solved 100+ data structures and algorithms problems on LeetCode.' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Competitions and practice." />
        <div className="grid gap-4 md:grid-cols-3">
          {ITEMS.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Spot className="surface h-full rounded-card p-7 transition hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/25 to-accent-violet/20 text-accent-blue"><I className="h-5 w-5" /></span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{text}</p>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
