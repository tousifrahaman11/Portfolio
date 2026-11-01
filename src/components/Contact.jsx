import { useState } from 'react'
import { Mail, Send, Loader2 } from 'lucide-react'
import { LINKS } from '../data/content'
import { GithubIcon, LinkedinIcon, Reveal, Spot } from './ui'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const field = 'w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-accent-blue/60 focus:bg-white/[.06] focus:outline-none disabled:opacity-50'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault()
    if (!ENDPOINT) return
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(e.target) })
      if (!res.ok) throw new Error()
      setStatus('sent'); e.target.reset()
    } catch { setStatus('error') }
  }
  const cards = [
    { icon: Mail, label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'tousif-rahaman5', href: LINKS.linkedin },
    { icon: GithubIcon, label: 'GitHub', value: 'tousifrahaman11', href: LINKS.github },
  ]
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#10183a] via-ink-900 to-[#150f2e] p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-violet/25 blur-[100px]" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-grad sm:text-6xl">Let's build something together.</h2>
              <p className="mt-5 max-w-md text-lg text-slate-400">I'm looking for software engineering opportunities. Send a note about a role, a project or a question.</p>
              <div className="mt-8 space-y-3">
                {cards.map(({ icon: I, label, value, href }) => (
                  <Spot as="a" key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-white/20">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-accent-blue"><I className="h-5 w-5" /></span>
                    <span className="min-w-0"><span className="block text-xs text-slate-500">{label}</span><span className="block truncate text-white">{value}</span></span>
                  </Spot>
                ))}
              </div>
            </div>
            <form onSubmit={submit} className="glass space-y-4 rounded-3xl p-6 sm:p-8" aria-label="Contact form">
              <div><label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">Name</label><input id="name" name="name" required disabled={!ENDPOINT} className={field} placeholder="Your name" /></div>
              <div><label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">Email</label><input id="email" name="email" type="email" required disabled={!ENDPOINT} className={field} placeholder="you@company.com" /></div>
              <div><label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label><textarea id="message" name="message" rows="4" required disabled={!ENDPOINT} className={field} placeholder="How can I help?" /></div>
              <button type="submit" disabled={!ENDPOINT || status === 'sending'} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#7f9bff] to-[#6a5cff] px-5 py-3.5 font-medium text-white transition enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50">
                {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Send message
              </button>
              <p role="status" className="text-sm">
                {!ENDPOINT && <span className="text-amber-200/80">The form isn't connected yet. Please email <a className="underline" href={`mailto:${LINKS.email}`}>{LINKS.email}</a> directly.</span>}
                {status === 'sent' && <span className="text-emerald-300">Message sent. Thank you!</span>}
                {status === 'error' && <span className="text-rose-300">Couldn't send the message. Please email me directly instead.</span>}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
