import { Binary, Boxes, Cpu, Database, Network, Code2, Webhook, Gauge, Layers } from 'lucide-react'
import { siJavascript, siOpenjdk, siSpringboot, siSpring, siSpringsecurity, siNodedotjs, siExpress, siJsonwebtokens, siReact, siRedux, siHtml5, siCss3, siVite, siTailwindcss, siAxios, siMysql, siMongodb, siGit, siGithub, siPostman } from 'simple-icons'
import { BrandIcon, Reveal, SectionTitle, Spot } from './ui'

const lum = (hex) => { const n = parseInt(hex, 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) }
const B = (name, icon) => ({ name, icon })
const L = (name, I) => ({ name, lucide: I })

const GROUPS = [
  { title: 'Languages', span: 'md:col-span-2', items: [B('Java', siOpenjdk), B('JavaScript', siJavascript)] },
  { title: 'Backend', span: 'md:col-span-4', items: [B('Spring Boot', siSpringboot), B('Spring Security', siSpringsecurity), B('Spring Data JPA', siSpring), B('Node.js', siNodedotjs), B('Express.js', siExpress), L('REST APIs', Webhook), B('JWT', siJsonwebtokens)] },
  { title: 'Frontend', span: 'md:col-span-3', items: [B('React.js', siReact), B('Redux Toolkit', siRedux), B('Tailwind CSS', siTailwindcss), B('Vite', siVite), B('Axios', siAxios), B('HTML', siHtml5), B('CSS', siCss3)] },
  { title: 'Databases & Tools', span: 'md:col-span-3', items: [B('MySQL', siMysql), B('MongoDB', siMongodb), L('SQL', Database), B('Git', siGit), B('GitHub', siGithub), B('Postman', siPostman), L('VS Code', Code2)] },
  { title: 'Core concepts', span: 'md:col-span-6', items: [L('Data Structures & Algorithms', Binary), L('Complexity Analysis', Gauge), L('Object-Oriented Design', Boxes), L('Operating Systems', Cpu), L('DBMS', Layers), L('System Design Fundamentals', Network)] },
]

function Chip({ item }) {
  const color = item.icon && lum(item.icon.hex) > 60 ? `#${item.icon.hex}` : '#cbd5f5'
  const Lu = item.lucide
  return (
    <li className="group/chip flex items-center gap-2.5 rounded-xl border border-white/[.07] bg-white/[.03] px-3.5 py-2.5 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[.07] hover:text-white">
      {item.icon ? <BrandIcon icon={item.icon} className="h-4 w-4 opacity-70 transition group-hover/chip:opacity-100" color={color} /> : <Lu className="h-4 w-4 text-accent-blue/80" />}
      {item.name}
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="The tools I build with." sub="Grouped by where they sit in a product, from the database up to the interface." />
        <div className="grid gap-4 md:grid-cols-6">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className={g.span}>
              <Spot className="surface h-full rounded-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">{g.title}</h3>
                <ul className="flex flex-wrap gap-2.5">{g.items.map((it) => <Chip key={it.name} item={it} />)}</ul>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
