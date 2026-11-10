"use client";
import useRotator from "./useRotator";
import { Letters } from "./IdeologyVariants";
import { ArchPhoto } from "./IdeologyStages";
import { beliefs, ideologyPhotos as photos } from "@/data/content";

const DURATION = 4500;
const bar = (key, cls = "bg-yellow") => <span key={key} className={`fill-bar absolute left-0 bottom-0 h-1 w-full ${cls}`} style={{ "--dur": `${DURATION}ms` }} aria-hidden="true" />;
const num = (i) => String(i + 1).padStart(2, "0");
const glowFrame = "border-[#f3d79a] shadow-[0_0_60px_rgba(255,217,135,0.35)]";

// Night 1, "Spotlight": a beam of light from above lands on a centred arch photo, with the giant statement underneath.
export function SpotlightNight() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  return (
    <div ref={ref} {...hoverProps} className={`relative mx-auto max-w-4xl text-center text-[#f8efdc] ${inView ? "in-view" : ""}`}>
      <span className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[130%] h-[38rem]" style={{ background: "conic-gradient(at 50% 0%, transparent 160deg, rgba(255,241,201,0.34) 172deg 188deg, transparent 202deg)" }} aria-hidden="true" />
      <span key={`n${active}`} className="display absolute top-4 left-1/2 -translate-x-1/2 text-[12rem] sm:text-[22rem] leading-none text-[#fff1c9]/[0.11] select-none z-0 slide-up-flat" aria-hidden="true">{num(active)}</span>
      <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-yellow">Our ideology</p>
      <ArchPhoto active={active} className="relative z-10 mx-auto mt-6 w-full max-w-[16rem]" frame={glowFrame} />
      <h2 key={active} aria-label={beliefs[active][0]} className="relative mt-10 display text-4xl sm:text-6xl leading-[1.05] text-[#fff1c9] in-view"><span aria-hidden="true"><Letters text={beliefs[active][0]} /></span></h2>
      <p key={`d${active}`} className="relative mt-4 text-lg max-w-md mx-auto text-[#f8efdc]/90 slide-up-flat">{beliefs[active][1]}</p>
      <div className="relative mt-8 flex justify-center gap-3" role="tablist" aria-label="Our beliefs">
        {beliefs.map(([h], i) => (
          <button key={h} role="tab" aria-selected={active === i} aria-label={h} onClick={() => setActive(i)} className={`relative overflow-hidden h-3 rounded-full border-2 border-yellow transition-all ${active === i ? "w-16 bg-yellow/20" : "w-3 bg-transparent"}`}>{active === i && running && bar(`s${active}`)}</button>
        ))}
      </div>
    </div>
  );
}

// Night 2, "Neon": the statement glows like a neon sign over huge outlined words drifting past behind it.
export function NeonNight() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  const words = [...beliefs, ...beliefs];
  const outline = { color: "transparent", WebkitTextStroke: "2px rgba(255,241,201,0.14)" };
  return (
    <div ref={ref} {...hoverProps} className={`relative mx-auto max-w-6xl text-[#f8efdc] ${inView ? "in-view" : ""}`}>
      {[0, 1].map((row) => (
        <div key={row} className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-screen overflow-hidden" style={{ top: `${row * 46}%` }} aria-hidden="true">
          <div className="marquee display text-7xl sm:text-[9rem] leading-none whitespace-nowrap" style={{ ...outline, animationDuration: row ? "70s" : "55s", animationDirection: row ? "reverse" : "normal" }}>
            {words.map(([h], i) => <span key={i} className="mx-8">{h}</span>)}
          </div>
        </div>
      ))}
      <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffb36b]">Our ideology · {num(active)}</p>
          <h2 key={active} aria-label={beliefs[active][0]} className="mt-5 display text-5xl sm:text-7xl leading-[1.02] text-[#fff1c9] in-view [text-shadow:0_0_8px_#ffb36b,0_0_26px_#ff8a3d,0_0_60px_#ff8a3d]"><span aria-hidden="true"><Letters text={beliefs[active][0]} /></span></h2>
          <p key={`d${active}`} className="mt-6 text-lg max-w-md slide-up-flat">{beliefs[active][1]}</p>
          <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Our beliefs">
            {beliefs.map(([h], i) => (
              <button key={h} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`relative overflow-hidden rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition ${active === i ? "border-[#ffb36b] text-[#fff1c9] shadow-[0_0_14px_rgba(255,138,61,0.7)]" : "border-[#f8efdc]/30 text-[#f8efdc]/60 hover:border-[#ffb36b]/70"}`}>{num(i)}{active === i && running && bar(`n${active}`, "bg-[#ffb36b]")}</button>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs rotate-3 aspect-[4/5] rounded-3xl overflow-hidden border-[4px] border-[#ffb36b] shadow-[0_0_30px_rgba(255,138,61,0.6),inset_0_0_30px_rgba(255,138,61,0.25)]">
          {photos.map((p, i) => <div key={p.src} role="img" aria-label={p.alt} aria-hidden={active !== i} className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}`} style={{ backgroundImage: `url(${p.src})` }} />)}
        </div>
      </div>
    </div>
  );
}

const perforations = "repeating-linear-gradient(to bottom, transparent 0 14px, rgba(255,241,201,0.85) 14px 30px, transparent 30px 44px)";

// Night 3, "Cinema": a widescreen photo between film-strip edges, with the belief shown as subtitles and chapter tabs below.
export function CinemaNight() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  return (
    <div ref={ref} {...hoverProps} className={`mx-auto max-w-5xl text-[#f8efdc] ${inView ? "in-view" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow mb-5">Our ideology · now showing</p>
      <div className="relative bg-[#120a08] rounded-2xl px-8 sm:px-12 py-4 border-2 border-[#f8efdc]/20">
        <span className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-3 sm:w-4 rounded-sm opacity-90" style={{ background: perforations }} aria-hidden="true" />
        <span className="absolute right-2.5 sm:right-4 top-3 bottom-3 w-3 sm:w-4 rounded-sm opacity-90" style={{ background: perforations }} aria-hidden="true" />
        <div className="relative aspect-[16/10] sm:aspect-[16/8] rounded-lg overflow-hidden bg-black">
          {photos.map((p, i) => <div key={p.src} role="img" aria-label={p.alt} aria-hidden={active !== i} className={`absolute inset-0 bg-cover bg-center transition-all duration-[1400ms] ${active === i ? "opacity-100 scale-105" : "opacity-0 scale-100"}`} style={{ backgroundImage: `url(${p.src})` }} />)}
          <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" aria-hidden="true" />
          <span className="absolute left-4 top-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em]"><span className="inline-block w-2.5 h-2.5 rounded-full bg-red animate-pulse" />Rec · 00:0{active + 1}</span>
          <span className="absolute right-4 top-3 text-[11px] font-semibold uppercase tracking-[0.25em]">{photos[active].note}</span>
          <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:pb-8 text-center">
            <h2 key={active} aria-label={beliefs[active][0]} className="display text-3xl sm:text-6xl leading-[1.05] text-[#fff1c9] in-view [text-shadow:0_3px_14px_rgba(0,0,0,0.9)]"><span aria-hidden="true"><Letters text={beliefs[active][0]} /></span></h2>
            <p key={`d${active}`} className="mt-2 text-sm sm:text-lg max-w-xl mx-auto slide-up-flat [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">{beliefs[active][1]}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3" role="tablist" aria-label="Our beliefs">
        {beliefs.map(([h], i) => (
          <button key={h} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`relative overflow-hidden text-left rounded-lg border px-3 py-2 transition ${active === i ? "border-yellow bg-yellow/15" : "border-[#f8efdc]/25 text-[#f8efdc]/65 hover:border-yellow/60"}`}>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-yellow">Chapter {num(i)}</span>
            <span className="block text-sm font-semibold leading-tight">{h}</span>
            {active === i && running && bar(`c${active}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
