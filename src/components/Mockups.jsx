import { Bot, FileText, Send, User, Briefcase, CheckCircle2, ArrowDownLeft, ArrowUpRight, ShieldCheck } from 'lucide-react'

export function BrowserFrame({ label, children, image, alt }) {
  return (
    <div className="glass overflow-hidden rounded-frame shadow-[0_40px_90px_-30px_rgba(0,0,0,.9)] transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_50px_100px_-30px_rgba(99,130,255,.35)]">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mx-auto rounded-md bg-white/5 px-10 py-1 font-mono text-[11px] text-slate-500">{label}</span>
      </div>
      <div className="aspect-[16/10] bg-ink-900">
        {image ? <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" /> : children}
      </div>
    </div>
  )
}

const Bar = ({ w, c = 'bg-white/10' }) => <div className={`h-2 rounded-full ${c}`} style={{ width: w }} />

export function AnalyzerMock() {
  return (
    <div className="grid h-full grid-cols-[1fr_1.15fr] gap-4 p-5">
      <div className="space-y-3 rounded-xl border border-white/5 bg-white/[.03] p-4">
        <div className="flex items-center gap-2 text-xs text-slate-400"><FileText className="h-4 w-4 text-accent-blue" /> resume.pdf</div>
        <Bar w="60%" c="bg-white/25" /><Bar w="90%" /><Bar w="80%" /><Bar w="85%" /><div className="pt-2" /><Bar w="45%" c="bg-white/25" /><Bar w="92%" /><Bar w="70%" /><Bar w="88%" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[.03] p-4">
          <svg viewBox="0 0 48 48" className="h-14 w-14 -rotate-90"><circle cx="24" cy="24" r="19" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="5" /><circle cx="24" cy="24" r="19" fill="none" stroke="url(#ag)" strokeWidth="5" strokeLinecap="round" strokeDasharray="119" strokeDashoffset="34" /><defs><linearGradient id="ag"><stop stopColor="#6382ff" /><stop offset="1" stopColor="#4fd1e8" /></linearGradient></defs></svg>
          <div className="space-y-2 text-xs text-slate-400">ATS score<Bar w="90px" c="bg-accent-blue/40" /></div>
        </div>
        <div className="space-y-2.5 rounded-xl border border-white/5 bg-white/[.03] p-4 text-xs text-slate-400">
          <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Suggestions<span className="ml-auto" /></div>
          <Bar w="95%" /><Bar w="75%" />
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[.03] p-3 text-xs text-slate-400"><Briefcase className="h-4 w-4 text-accent-violet" /> Job matches<Bar w="30%" c="bg-accent-violet/40" /></div>
      </div>
    </div>
  )
}

export function ChatMock() {
  const Bubble = ({ me, children }) => (
    <div className={`flex items-end gap-2 ${me ? 'flex-row-reverse' : ''}`}>
      <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${me ? 'bg-accent-violet/30' : 'bg-accent-blue/30'}`}>{me ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}</span>
      <div className={`max-w-[70%] rounded-2xl px-3.5 py-2 text-xs ${me ? 'bg-accent-violet/20 text-slate-200' : 'bg-white/[.06] text-slate-300'}`}>{children}</div>
    </div>
  )
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex-1 space-y-3">
        <Bubble>Let's verify your details to get started.</Bubble>
        <Bubble me>Details submitted.</Bubble>
        <Bubble>Running your credit check…</Bubble>
        <Bubble>You may be eligible. Pick an amount and tenure to see your EMI.</Bubble>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-slate-500">Type a message<Send className="ml-auto h-4 w-4 text-accent-blue" /></div>
    </div>
  )
}

export function LedgerMock() {
  const rows = [['DEBIT', 'text-rose-300', ArrowUpRight, '55%'], ['CREDIT', 'text-emerald-300', ArrowDownLeft, '70%'], ['CREDIT', 'text-emerald-300', ArrowDownLeft, '40%'], ['DEBIT', 'text-rose-300', ArrowUpRight, '62%']]
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[.03] p-4 text-xs text-slate-400">
        <span>Balance = sum of ledger entries</span><span className="flex items-center gap-1.5 text-accent-cyan"><ShieldCheck className="h-4 w-4" /> Atomic transfer</span>
      </div>
      <div className="flex-1 space-y-2 rounded-xl border border-white/5 bg-white/[.03] p-3">
        {rows.map(([k, c, I, w], i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[.03] px-3 py-2.5 font-mono text-[11px]">
            <I className={`h-4 w-4 ${c}`} /><span className={`w-14 ${c}`}>{k}</span><div className="h-2 rounded-full bg-white/10" style={{ width: w }} />
          </div>
        ))}
      </div>
    </div>
  )
}
