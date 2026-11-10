"use client";
import useRotator from "./useRotator";
import { Letters } from "./IdeologyVariants";
import { beliefs, ideologyPhotos as photos } from "@/data/content";

const DURATION = 4500;
const bar = (key, cls = "bg-red") => <span key={key} className={`fill-bar absolute left-0 bottom-0 h-1 w-full ${cls}`} style={{ "--dur": `${DURATION}ms` }} aria-hidden="true" />;
const num = (i) => String(i + 1).padStart(2, "0");

// A photo in an arch-shaped window that cross-fades to the active belief's picture.
export function ArchPhoto({ active, className = "", frame = "border-ink shadow-[8px_8px_0_rgba(106,58,51,0.35)]" }) {
  return (
    <div className={`relative aspect-[3/4] rounded-[1.75rem] overflow-hidden border-[5px] ${frame} ${className}`}>
      {photos.map((p, i) => <div key={p.src} role="img" aria-label={p.alt} aria-hidden={active !== i} className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}`} style={{ backgroundImage: `url(${p.src})` }} />)}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-paper text-ink text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full whitespace-nowrap">{photos[active].note}</span>
    </div>
  );
}

// Stage A, "Night": a dark plum stage with a huge ghost number, cream type and a glowing arch photo.
export function NightStage() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  return (
    <div ref={ref} {...hoverProps} className={`relative mx-auto max-w-6xl text-[#f8efdc] ${inView ? "in-view" : ""}`}>
      <span key={`n${active}`} className="display absolute -top-10 -left-2 sm:left-0 text-[10rem] sm:text-[20rem] leading-none text-[#fff1c9]/10 select-none slide-up-flat" aria-hidden="true">{num(active)}</span>
      <div className="relative grid md:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow">Our ideology</p>
          <h2 key={active} aria-label={beliefs[active][0]} className="mt-5 display text-5xl sm:text-7xl leading-[1.02] text-[#fff1c9] in-view"><span aria-hidden="true"><Letters text={beliefs[active][0]} /></span></h2>
          <p key={`d${active}`} className="mt-6 text-lg max-w-md text-[#f8efdc]/90 slide-up-flat">{beliefs[active][1]}</p>
        </div>
        <ArchPhoto active={active} className="mx-auto w-full max-w-xs" frame="border-[#f3d79a] shadow-[0_0_60px_rgba(255,217,135,0.35)]" />
      </div>
      <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3" role="tablist" aria-label="Our beliefs">
        {beliefs.map(([h], i) => (
          <button key={h} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`relative overflow-hidden text-left rounded-xl border px-4 py-3 text-sm font-semibold transition ${active === i ? "border-yellow bg-yellow/15 text-[#fff1c9]" : "border-[#f8efdc]/25 text-[#f8efdc]/70 hover:border-yellow/60"}`}>
            <span className="display text-yellow mr-2">{num(i)}</span>{h}
            {active === i && running && bar(`t${active}`, "bg-yellow")}
          </button>
        ))}
      </div>
    </div>
  );
}

// Stage B, "Triple arch": centred giant statement over three arch windows (previous, current, next) that slide along.
export function TripleStage() {
  const n = beliefs.length;
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(n, DURATION);
  const slots = [(active + n - 1) % n, active, (active + 1) % n];
  return (
    <div ref={ref} {...hoverProps} className={`mx-auto max-w-5xl text-center ${inView ? "in-view" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Our ideology · {num(active)} / {num(n - 1)}</p>
      <h2 key={active} aria-label={beliefs[active][0]} className="mt-5 display text-5xl sm:text-7xl leading-[1.02] text-ink in-view"><span aria-hidden="true"><Letters text={beliefs[active][0]} /></span></h2>
      <p key={`d${active}`} className="mt-5 text-lg max-w-lg mx-auto slide-up-flat">{beliefs[active][1]}</p>
      <div className="mt-12 flex items-end justify-center gap-3 sm:gap-8">
        {slots.map((idx, s) => {
          const mid = s === 1;
          return (
            <button key={idx} onClick={() => setActive(idx)} aria-label={beliefs[idx][0]} className={`relative shrink-0 aspect-[3/4] rounded-[1.75rem] overflow-hidden border-[4px] border-ink transition-all duration-700 bg-cover bg-center ${mid ? "w-[44%] sm:w-64 shadow-[8px_8px_0_rgba(106,58,51,0.35)]" : "w-[24%] sm:w-36 opacity-60 hover:opacity-90"}`} style={{ backgroundImage: `url(${photos[idx].src})` }} role="img">
              <span className={`absolute inset-x-0 bottom-0 bg-ink/75 text-butter py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] ${mid ? "" : "hidden sm:block"}`}>{num(idx)}{mid ? ` · ${photos[idx].note}` : ""}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label="Our beliefs">
        {beliefs.map(([h], i) => (
          <button key={h} role="tab" aria-selected={active === i} aria-label={h} onClick={() => setActive(i)} className={`relative overflow-hidden h-3 rounded-full border-2 border-ink transition-all ${active === i ? "w-16 bg-paper" : "w-3 bg-ink/30"}`}>
            {active === i && running && bar(`p${active}`)}
          </button>
        ))}
      </div>
    </div>
  );
}

// Stage C, "Outline list": all four statements stand huge in a stack. The active one fills in solid; the others are outlined.
export function OutlineStage() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  return (
    <div ref={ref} {...hoverProps} className={`mx-auto max-w-6xl ${inView ? "in-view" : ""}`}>
      <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Our ideology</p>
          <ol className="mt-5 space-y-3">
            {beliefs.map(([h], i) => {
              const on = active === i;
              return (
                <li key={h}>
                  <button onClick={() => setActive(i)} aria-pressed={on} className="relative block w-full text-left pb-2 group">
                    <span className="display flex gap-3 items-baseline text-4xl sm:text-6xl leading-[1.05] transition-all duration-500" style={on ? { color: "var(--ink)" } : { color: "transparent", WebkitTextStroke: "2px var(--ink)" }}>
                      <span className="text-xl sm:text-2xl text-red" style={{ WebkitTextStroke: 0 }}>{num(i)}</span>{h}
                    </span>
                    <span className={`block text-base max-w-md overflow-hidden transition-all duration-500 ${on ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>{beliefs[i][1]}</span>
                    {on && running && bar(`o${active}`)}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
        <ArchPhoto active={active} className="mx-auto w-full max-w-xs" />
      </div>
    </div>
  );
}
