export default function Background() {
  return (
    <>
      <div className="grid-bg" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent-blue/20 blur-[140px]" />
        <div className="absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-accent-violet/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[620px] rounded-full bg-accent-cyan/[.07] blur-[150px]" />
      </div>
    </>
  )
}
