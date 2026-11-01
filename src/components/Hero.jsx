import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { LINKS } from '../data/content'
import { btn, GithubIcon, LinkedinIcon } from './ui'

const PHRASES = ['Backend & Full-Stack Development', 'Spring Boot & React', 'REST APIs & Databases', 'Real-World Problem Solving']

const CODE = [
  [['k', 'public class '], ['t', 'TousifRahaman '], ['k', 'implements '], ['t', 'Engineer '], ['p', '{']],
  [['k', '  String '], ['v', 'focus '], ['p', '= '], ['s', '"Backend & Full-Stack"'], ['p', ';']],
  [['k', '  String[] '], ['v', 'stack '], ['p', '= {']],
  [['s', '    "Java"'], ['p', ', '], ['s', '"Spring Boot"'], ['p', ',']],
  [['s', '    "React"'], ['p', ', '], ['s', '"MongoDB"'], ['p', ',']],
  [['s', '    "MySQL"'], ['p', '};']],
  [['k', '  String '], ['v', 'education '], ['p', '= '], ['s', '"B.Tech CSE \'27, IEM Kolkata"'], ['p', ';']],
  [['k', '  boolean '], ['v', 'openToOpportunities '], ['p', '= '], ['k', 'true'], ['p', ';']],
  [['p', '}']],
]
const COLORS = { k: 'text-[#b79cff]', t: 'text-[#7fd6ff]', v: 'text-[#e6e9f2]', s: 'text-[#8fe3b0]', p: 'text-slate-500' }

function RotatingText() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % PHRASES.length), 2800); return () => clearInterval(t) }, [])
  return (
    <span className="relative inline-block h-[1.25em] min-w-0 align-bottom" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.span key={i} initial={{ y: 18, opacity: 0, filter: 'blur(6px)' }} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ y: -18, opacity: 0, filter: 'blur(6px)' }} transition={{ duration: 0.45 }} className="text-grad-accent absolute left-0 whitespace-nowrap">
          {PHRASES[i]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap">{PHRASES[0]}</span>
    </span>
  )
}

function CodeCard() {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    if (shown >= CODE.length) return
    const t = setTimeout(() => setShown((n) => n + 1), 380)
    return () => clearTimeout(t)
  }, [shown])
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-accent-blue/25 via-accent-violet/15 to-transparent blur-3xl" />
      <div className="glass relative overflow-hidden rounded-frame shadow-[0_30px_80px_-20px_rgba(0,0,0,.8)]">
        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-xs text-slate-500">TousifRahaman.java</span>
        </div>
        <pre className="min-h-[300px] overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm" aria-label="Java class summarising Tousif's profile">
          {CODE.slice(0, shown).map((line, i) => (
            <div key={i}>{line.map(([c, txt], j) => <span key={j} className={COLORS[c]}>{txt}</span>)}{i === shown - 1 && shown < CODE.length && <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent-blue/80" />}</div>
          ))}
        </pre>
      </div>
      {[['Java', '-left-4 top-16', '0s'], ['React', '-right-3 top-1/3', '1.2s'], ['MongoDB', 'left-10 -bottom-5', '2.4s']].map(([t, pos, d]) => (
        <span key={t} style={{ animationDelay: d }} className={`float glass absolute ${pos} hidden rounded-full px-3.5 py-1.5 font-mono text-xs text-slate-200 sm:block`}>{t}</span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-24 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-sm text-slate-300">
            <span className="relative flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-emerald-400" style={{ animation: 'ping-soft 2s ease-out infinite' }} /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
            Open to software engineering roles
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-7xl xl:text-[5.5rem]">
            <span className="block text-3xl font-medium tracking-tight text-slate-400 sm:text-4xl">Hi, I'm</span>
            <span className="text-grad">Tousif Rahaman.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 text-xl font-medium text-white sm:text-2xl">
            Software Engineer <span className="text-slate-600">|</span> <RotatingText />
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
            I build practical software applications with a focus on backend engineering, full-stack development, and solving real-world problems.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className={btn.primary}>View projects <ArrowRight className="h-4 w-4" /></a>
            <a href={LINKS.resume} download="Tousif_Rahaman_Resume.pdf" className={btn.ghost}><Download className="h-4 w-4" /> Download resume</a>
            <a href="#contact" className={btn.ghost}><Mail className="h-4 w-4" /> Contact me</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex items-center gap-3">
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass group grid h-11 w-11 place-items-center rounded-full text-slate-300 transition hover:-translate-y-0.5 hover:text-white"><GithubIcon className="h-5 w-5" /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="glass group grid h-11 w-11 place-items-center rounded-full text-slate-300 transition hover:-translate-y-0.5 hover:text-[#6aa8ff]"><LinkedinIcon className="h-5 w-5" /></a>
            <span className="ml-1 text-sm text-slate-500">Kolkata, India</span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}><CodeCard /></motion.div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2"><span className="h-2 w-1 rounded-full bg-white/70" style={{ animation: 'scrollcue 1.8s ease-in-out infinite' }} /></span>
      </a>
    </section>
  )
}
