import { GraduationCap } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const COURSES = ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'System Design Fundamentals']

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Education." />
        <Reveal>
          <div className="surface flex flex-col gap-6 rounded-frame p-7 md:flex-row md:items-start md:p-9">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-blue/10 text-accent-blue"><GraduationCap className="h-6 w-6" /></span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold tracking-tight text-white">Institute of Engineering and Management, Kolkata</h3>
                <p className="font-mono text-sm text-slate-400">2023 – 2027</p>
              </div>
              <p className="mt-1 text-slate-300">B.Tech in Computer Science and Engineering</p>
              <ul className="mt-5 flex flex-wrap gap-2">{COURSES.map((c) => <li key={c} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-sm text-slate-300">{c}</li>)}</ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
