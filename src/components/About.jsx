import { GraduationCap, MapPin, Briefcase, Code2 } from 'lucide-react'
import { Reveal, SectionTitle, Spot } from './ui'

const FACTS = [
  { icon: GraduationCap, label: 'B.Tech CSE, graduating 2027', sub: 'Institute of Engineering and Management, Kolkata' },
  { icon: Briefcase, label: 'Software Development Intern', sub: 'Bluestock Fintech, Jun–Jul 2025' },
  { icon: Code2, label: '100+ DSA problems solved', sub: 'on LeetCode' },
  { icon: MapPin, label: 'Kolkata, India', sub: 'Open to remote roles' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Engineering with a focus on how things work behind the screen." />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
            <p>I'm a Computer Science student at IEM Kolkata, graduating in 2027, with a strong interest in backend and full-stack development. I enjoy turning real requirements into working software, from designing REST APIs and securing them to building the interfaces people actually use.</p>
            <p>During my Software Development Internship at Bluestock Fintech, I turned Figma designs into production-ready React.js features for a live IPO platform and integrated them with backend APIs. Alongside it I've built three projects across fintech and lending with Java, Spring Boot, Node.js, React, MySQL and MongoDB.</p>
            <p>I like problem-solving, which is why I practise data structures and algorithms regularly, and I'm always keen to learn the next technology that makes software more reliable.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Spot className="surface rounded-card p-2">
              {FACTS.map(({ icon: I, label, sub }, i) => (
                <div key={label} className={`flex items-start gap-4 p-4 ${i ? 'border-t border-white/5' : ''}`}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-blue/10 text-accent-blue"><I className="h-5 w-5" /></span>
                  <div><p className="font-medium text-white">{label}</p><p className="text-sm text-slate-500">{sub}</p></div>
                </div>
              ))}
            </Spot>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
