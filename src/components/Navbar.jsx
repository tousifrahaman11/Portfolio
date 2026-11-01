import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { LINKS, NAV } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'
import { cn } from './ui'

const ids = NAV.map((n) => n.toLowerCase())

export default function Navbar() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav aria-label="Primary" className={cn('glass flex w-full items-center justify-between rounded-full py-2 pl-5 pr-2 transition-all duration-500', scrolled ? 'max-w-4xl shadow-[0_10px_40px_-10px_rgba(0,0,0,.7)]' : 'max-w-6xl')}>
        <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight text-white">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet text-sm font-bold">T</span>
          Tousif Rahaman
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const id = n.toLowerCase()
            return (
              <li key={n}>
                <a href={`#${id}`} className={cn('relative rounded-full px-3.5 py-2 text-sm transition-colors', active === id ? 'text-white' : 'text-slate-400 hover:text-white')}>
                  {active === id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  <span className="relative">{n}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-2">
          <a href={LINKS.resume} download="Tousif_Rahaman_Resume.pdf" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition hover:bg-slate-200 sm:inline-flex">
            <Download className="h-4 w-4" /> Resume
          </a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"><Menu className="h-5 w-5" /></button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-ink-950/95 px-6 pt-5 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="flex justify-end"><button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><X className="h-5 w-5" /></button></div>
            <ul className="mt-8 space-y-1">
              {NAV.map((n, i) => (
                <motion.li key={n} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-4xl font-semibold tracking-tight text-white">{n}</a>
                </motion.li>
              ))}
            </ul>
            <a href={LINKS.resume} download="Tousif_Rahaman_Resume.pdf" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink-950"><Download className="h-4 w-4" /> Download resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
