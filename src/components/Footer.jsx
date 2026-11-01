import { ArrowUp } from 'lucide-react'
import { LINKS } from '../data/content'
import { GithubIcon, LinkedinIcon } from './ui'
import { Mail } from 'lucide-react'

export default function Footer() {
  const link = 'grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition hover:-translate-y-0.5 hover:text-white'
  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-6 pb-10 pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-10 select-none text-center text-[17vw] font-bold leading-none tracking-tighter text-white/[.025]">TOUSIF</div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">Tousif Rahaman</p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Tousif Rahaman. Built with React, Tailwind CSS and Framer Motion.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={link}><LinkedinIcon className="h-4 w-4" /></a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={link}><GithubIcon className="h-4 w-4" /></a>
          <a href={`mailto:${LINKS.email}`} aria-label="Email" className={link}><Mail className="h-4 w-4" /></a>
          <a href="#home" aria-label="Back to top" className={link}><ArrowUp className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  )
}
