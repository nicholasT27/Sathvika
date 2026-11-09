import Reveal from "@/components/Reveal";
import ArchDoor from "@/components/ArchDoor";
import ZoneClocks from "@/components/ZoneClocks";

export const metadata = { title: "Sathvika | Remote section: three distinct styles" };

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// Label strip so each design is easy to tell apart when comparing.
function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// A round-top arch window for the shopfront. "lit" gives it a warm glow.
function ArchWindow({ children, className = "" }) {
  return (
    <div className={`rounded-t-[999px] border-[5px] border-ink bg-[#fff1c9] relative overflow-hidden ${className}`}>
      <span className="absolute inset-x-0 top-1/2 h-[4px] bg-ink/70" aria-hidden="true" />
      <span className="absolute inset-y-0 left-1/2 w-[4px] -translate-x-1/2 bg-ink/70" aria-hidden="true" />
      {children}
    </div>
  );
}

// Three very different styles of the Remote section: a flat illustrated shopfront, a blueprint drawing and a night scene.
export default function RemoteStyles() {
  const scallopMask = { WebkitMaskImage: "radial-gradient(circle at 22px 0, #000 21px, transparent 22px)", maskImage: "radial-gradient(circle at 22px 0, #000 21px, transparent 22px)", WebkitMaskSize: "44px 100%", maskSize: "44px 100%", WebkitMaskRepeat: "repeat-x", maskRepeat: "repeat-x" };
  const stripes = "repeating-linear-gradient(90deg, var(--red) 0 44px, var(--paper) 44px 88px)";
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* Style 1: Shopfront. A flat illustrated street scene: striped awning, brick wall, glowing OPEN sign, chalkboard with the words */}
      <Label>Remote · Style 1 · Shopfront</Label>
      <section id="remote" className="bg-sky px-5 pt-16 sm:pt-24 overflow-hidden">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end">
          <Reveal anim="left" className="lg:mb-16">
            <div className="relative mx-auto max-w-sm -rotate-2 bg-[#33463f] text-paper rounded-md border-[10px] border-[#c79a5b] p-6 sm:p-8 shadow-[0_14px_30px_rgba(60,40,30,0.3)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow">Today&apos;s special</p>
              <h2 className="mt-2 text-4xl sm:text-5xl leading-[1.05] !text-paper">Our door is always open.</h2>
              <p className="mt-4 text-sm leading-relaxed opacity-95">{blurb}</p>
              <ul className="mt-4 space-y-1 text-sm">{points.map((p) => <li key={p} className="flex gap-2"><span className="text-yellow" aria-hidden="true">✓</span>{p}</li>)}</ul>
              <p className="mt-5 text-sm font-semibold text-yellow">Turn the knob to step inside →</p>
              <span className="absolute -bottom-12 left-6 w-3 h-12 bg-[#c79a5b] rotate-12" aria-hidden="true" />
              <span className="absolute -bottom-12 right-6 w-3 h-12 bg-[#c79a5b] -rotate-12" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal anim="right">
            <div className="relative">
              <div className="relative z-10 mx-auto w-2/3 -mb-4 text-center bg-butter border-[4px] border-ink rounded-md py-2 display text-red text-lg sm:text-2xl tracking-wide">SATHVIKA · REMOTE</div>
              <div className="relative z-10 h-14" style={{ background: stripes }} aria-hidden="true" />
              <div className="relative z-10 h-5 -mt-px" style={{ background: stripes, ...scallopMask }} aria-hidden="true" />
              <div className="relative -mt-4 px-4 sm:px-8 pt-10 pb-0 grid grid-cols-[1fr_1.35fr_1fr] gap-3 sm:gap-6 items-end border-x-[5px] border-ink" style={{ backgroundColor: "#d98a6c", backgroundImage: "linear-gradient(rgba(255,248,225,.4) 2px, transparent 2px), linear-gradient(90deg, rgba(255,248,225,.4) 2px, transparent 2px)", backgroundSize: "72px 28px" }}>
                <ArchWindow className="aspect-[3/4] mb-6">
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-8 rounded-b-xl bg-orange border-[3px] border-ink" aria-hidden="true" />
                  <span className="absolute bottom-9 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#9cc7a8] border-[3px] border-ink" aria-hidden="true" />
                </ArchWindow>
                <ArchDoor photo="/images/remote.jpg" alt="A bright desk with a laptop, ready for remote work" doorColor="var(--blue)" glass plaque="24/7" mat="Welcome" caption="Welcome in!" className="w-full" />
                <ArchWindow className="aspect-[3/4] mb-6">
                  <span className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 display text-2xl sm:text-3xl text-[#ffb3a6] bg-[#3a1f1a] px-3 py-1 rounded-md border-2 border-[#f3d79a] [text-shadow:0_0_8px_#ff6a5a,0_0_18px_#ff6a5a]">OPEN</span>
                </ArchWindow>
              </div>
              <div className="h-8 bg-[#bdb5a8] border-t-[5px] border-ink" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Style 2: Blueprint. White line art on a blue grid with measurements, call-outs and a title block */}
      <Label>Remote · Style 2 · Blueprint</Label>
      <section className="relative px-5 py-20 sm:py-28 text-white" style={{ backgroundColor: "#1e4f9a", backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)", backgroundSize: "96px 96px, 96px 96px, 24px 24px, 24px 24px" }}>
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <Reveal anim="left">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">Sheet 04 · Remote working</p>
            <h2 className="mt-4 text-4xl sm:text-6xl leading-[1.05] uppercase tracking-[0.04em] !text-white" style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 300 }}>Our door is <span className="font-semibold">always open.</span></h2>
            <p className="mt-6 max-w-md text-white/90">{blurb}</p>
            <ol className="mt-6 space-y-2 font-mono text-sm">{points.map((p, i) => <li key={p} className="flex gap-3 border-b border-dashed border-white/40 pb-2"><span className="text-white/70">N{i + 1}.</span>{p}</li>)}</ol>
            <div className="mt-8 grid grid-cols-2 border border-white/70 font-mono text-[11px] uppercase tracking-wider max-w-sm">
              <span className="p-2 border-r border-b border-white/70">Project</span><span className="p-2 border-b border-white/70">Remote work</span>
              <span className="p-2 border-r border-b border-white/70">Scale</span><span className="p-2 border-b border-white/70">1 : 1</span>
              <span className="p-2 border-r border-white/70">Drawn by</span><span className="p-2">Sathvika</span>
            </div>
          </Reveal>
          <Reveal anim="right">
            <div className="relative mx-auto max-w-xs sm:max-w-sm pr-14 pl-2">
              <ArchDoor variant="line" photo="/images/remote.jpg" alt="A bright desk with a laptop, ready for remote work" caption="Entry granted" className="w-full" />
              {/* height dimension line */}
              <span className="absolute right-4 top-0 bottom-0 w-px bg-white/80" aria-hidden="true" />
              <span className="absolute right-[13px] top-0 w-4 h-px bg-white/80" aria-hidden="true" />
              <span className="absolute right-[13px] bottom-0 w-4 h-px bg-white/80" aria-hidden="true" />
              <span className="absolute -right-10 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[11px] tracking-[0.25em] whitespace-nowrap">HEIGHT: ALWAYS OPEN</span>
              {/* call-outs */}
              <span className="absolute -left-2 sm:-left-14 top-[54%] -translate-y-1/2 font-mono text-[10px] uppercase tracking-wider bg-[#1e4f9a] px-1">Knob: turn me →</span>
              <span className="absolute left-3 -top-5 font-mono text-[10px] uppercase tracking-wider">Arch top: no ceiling on ideas</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Style 3: Night scene. Dark sky with stars, a glowing door and the team's local times */}
      <Label>Remote · Style 3 · Night light</Label>
      <section className="relative px-5 py-20 sm:py-28 overflow-hidden text-[#f8efdc]" style={{ backgroundColor: "#2a1613", backgroundImage: "radial-gradient(circle at 12% 18%, rgba(255,248,225,.9) 1.5px, transparent 2px), radial-gradient(circle at 78% 12%, rgba(255,248,225,.8) 1.5px, transparent 2px), radial-gradient(circle at 90% 55%, rgba(255,248,225,.7) 1.2px, transparent 2px), radial-gradient(circle at 30% 70%, rgba(255,248,225,.6) 1.2px, transparent 2px), radial-gradient(circle at 55% 25%, rgba(255,248,225,.7) 1.2px, transparent 2px), radial-gradient(circle at 5% 85%, rgba(255,248,225,.6) 1.2px, transparent 2px), linear-gradient(180deg, #2a1613, #4a2a22)" }}>
        <span className="pointer-events-none absolute right-[8%] top-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#fff1c9] shadow-[0_0_60px_rgba(255,241,201,0.6)]" aria-hidden="true"><span className="absolute -right-3 -top-1 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#2a1613]" /></span>
        <div className="relative mx-auto max-w-5xl grid md:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <Reveal anim="left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow">Remote, but never distant</p>
            <h2 className="mt-3 text-5xl sm:text-7xl leading-[1] !text-[#fff1c9]">Our door is <span className="text-transparent [-webkit-text-stroke:2px_#ffd987]">always open.</span></h2>
            <p className="mt-6 max-w-md text-[#f8efdc]/90">{blurb}</p>
            <ul className="mt-5 space-y-1.5 text-sm">{points.map((p) => <li key={p} className="flex gap-2"><span className="text-yellow" aria-hidden="true">✓</span>{p}</li>)}</ul>
            <p className="mt-6 text-sm font-semibold text-yellow">Turn the knob. The light&apos;s on →</p>
          </Reveal>
          <Reveal anim="right">
            <ArchDoor variant="glow" photo="/images/cheers.jpg" alt="Two coffee cups clinking over a cafe table" caption="Virtual coffee?" className="w-full max-w-xs mx-auto" />
          </Reveal>
        </div>
        <Reveal anim="rise" delay={0.1} className="relative mt-16"><ZoneClocks /></Reveal>
      </section>
    </main>
  );
}
