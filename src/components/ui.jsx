import { motion, useReducedMotion } from 'framer-motion'
import { siGithub, siLinkedin } from 'simple-icons'

export const cn = (...c) => c.filter(Boolean).join(' ')

export function Reveal({ children, delay = 0, className, y = 22 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export function Spot({ as: Tag = 'div', className, children, ...rest }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return <Tag onMouseMove={move} className={cn('spot', className)} {...rest}>{children}</Tag>
}

export function SectionTitle({ title, sub }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-4xl font-semibold tracking-tight text-grad sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-slate-400">{sub}</p>}
    </Reveal>
  )
}

export function BrandIcon({ icon, className = 'h-5 w-5', color }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color || 'currentColor'} aria-hidden="true"><path d={icon.path} /></svg>
  )
}
export const GithubIcon = (p) => <BrandIcon icon={siGithub} {...p} />
export const LinkedinIcon = (p) => <BrandIcon icon={siLinkedin} {...p} />

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline-offset-4'
export const btn = {
  primary: cn(base, 'bg-gradient-to-b from-[#7f9bff] to-[#6a5cff] text-white shadow-[0_8px_30px_-8px_rgba(99,130,255,.7)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgba(120,140,255,.85)]'),
  ghost: cn(base, 'glass text-slate-100 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10'),
}
