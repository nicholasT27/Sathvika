"use client";
import useRotator from "./useRotator";
import { beliefs, ideologyPhotos as photos } from "@/data/content";

const DURATION = 4500;
const bar = (key, dur = DURATION) => <span key={key} className="fill-bar absolute left-0 bottom-0 h-1 w-full bg-red" style={{ "--dur": `${dur}ms` }} aria-hidden="true" />;

// Splits text into letters so each one can drop in. Letters stay grouped by word so a line never breaks inside a word.
export function Letters({ text }) {
  let n = 0;
  return <>{text.split(" ").map((word, w) => (
    <span key={w} className="inline-block whitespace-nowrap">
      {word.split("").map((ch) => <span key={n} className="letter" style={{ "--i": n++ }}>{ch}</span>)}
      {"\u00a0"}
    </span>
  ))}</>;
}

const tilts = ["-rotate-[2.4deg]", "rotate-[2deg]", "-rotate-[1.6deg]", "rotate-[2.6deg]"];
const ribbonBg = ["bg-red text-paper", "bg-yellow text-ink", "bg-blue text-ink", "bg-orange text-ink"];

// Design 1, "Ribbon stack": four slanted ribbons, one per belief. The active one straightens, grows and shows its photo.
export function RibbonStack() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  return (
    <div ref={ref} {...hoverProps} className={`mx-auto max-w-4xl ${inView ? "in-view" : ""}`}>
      <h2 aria-label="Our ideology" className="display text-4xl sm:text-6xl text-ink text-center"><span aria-hidden="true"><Letters text="Our ideology" /></span></h2>
      <div className="mt-12 space-y-3">
        {beliefs.map(([h, d], i) => {
          const on = active === i;
          return (
            <button key={h} onClick={() => setActive(i)} onFocus={() => setActive(i)} aria-expanded={on} className={`relative block w-[104%] -ml-[2%] text-left border-y-[3px] border-ink overflow-visible transition-all duration-500 shadow-[0_8px_0_rgba(106,58,51,0.25)] ${ribbonBg[i]} ${on ? "rotate-0 py-6 scale-[1.02]" : `${tilts[i]} py-3 opacity-90`}`}>
              <span className="flex items-center gap-4 px-6 sm:px-10">
                <span className="display text-3xl sm:text-5xl opacity-70 w-14 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className="display block text-xl sm:text-4xl">{h}</span>
                  <span className={`block text-sm sm:text-base font-medium overflow-hidden transition-all duration-500 ${on ? "max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>{d}</span>
                </span>
                <span className={`hidden sm:block shrink-0 w-32 h-24 rounded-xl border-[3px] border-ink bg-cover bg-center transition-all duration-500 ${on ? "opacity-100 rotate-3 scale-100" : "opacity-0 scale-50 w-0"}`} role="img" aria-label={photos[i].alt} style={{ backgroundImage: `url(${photos[i].src})` }} />
              </span>
              {on && running && bar(`b${active}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Design 2, "Stage": one giant statement at a time, re-typed letter by letter, beside an arch-shaped photo window.
export function Stage() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  return (
    <div ref={ref} {...hoverProps} className={`mx-auto max-w-6xl ${inView ? "in-view" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Our ideology · {String(active + 1).padStart(2, "0")} / {String(beliefs.length).padStart(2, "0")}</p>
      <div className="mt-6 grid md:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
        <div>
          <h2 key={active} aria-label={beliefs[active][0]} className="display text-5xl sm:text-7xl leading-[1.02] text-ink in-view"><span aria-hidden="true"><Letters text={beliefs[active][0]} /></span></h2>
          <p key={`d${active}`} className="mt-6 text-lg max-w-md slide-up-flat">{beliefs[active][1]}</p>
        </div>
        <div className="relative mx-auto w-full max-w-xs aspect-[3/4] rounded-[1.75rem] overflow-hidden border-[5px] border-ink shadow-[8px_8px_0_rgba(106,58,51,0.35)]">
          {photos.map((p, i) => <div key={p.src} role="img" aria-label={p.alt} aria-hidden={active !== i} className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}`} style={{ backgroundImage: `url(${p.src})` }} />)}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-paper text-ink text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full whitespace-nowrap">{photos[active].note}</span>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Our beliefs">
        {beliefs.map(([h], i) => (
          <button key={h} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`relative overflow-hidden rounded-full border-[3px] border-ink px-5 py-2 text-sm font-semibold transition ${active === i ? "bg-red text-paper" : "bg-paper hover:bg-yellow"}`}>
            {String(i + 1).padStart(2, "0")} · {h}
            {active === i && running && <span key={`t${active}`} className="fill-bar absolute left-0 bottom-0 h-1 w-full bg-ink/60" style={{ "--dur": `${DURATION}ms` }} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}

// Design 3, "Card deck": four photo cards fanned like a hand of cards. The active card comes to the front and the deck shuffles on.
export function Deck() {
  const { active, setActive, ref, inView, running, hoverProps } = useRotator(beliefs.length, DURATION);
  const n = beliefs.length;
  return (
    <div ref={ref} {...hoverProps} className={`mx-auto max-w-5xl text-center ${inView ? "in-view" : ""}`}>
      <h2 aria-label="Our ideology" className="display text-4xl sm:text-6xl text-ink"><span aria-hidden="true"><Letters text="Our ideology" /></span></h2>
      <div className="relative mx-auto mt-10 h-[19rem] sm:h-[21rem] w-full max-w-md" aria-label="Our beliefs">
        {beliefs.map(([h], i) => {
          const off = ((i - active + 2 + n) % n) - 2;
          const front = off === 0;
          return (
            <button key={h} onClick={() => setActive(i)} aria-label={h} aria-pressed={front} className="absolute left-1/2 top-0 w-[58%] sm:w-[52%] aspect-[3/4] text-left transition-all duration-700 ease-[cubic-bezier(0.3,0.9,0.3,1)]" style={{ transform: `translateX(calc(-50% + ${off * 62}%)) rotate(${off * 9}deg) scale(${front ? 1 : 0.86}) translateY(${front ? 0 : Math.abs(off) * 14}px)`, zIndex: 10 - Math.abs(off) * 2 - (off > 0 ? 1 : 0), opacity: Math.abs(off) > 1 ? 0.85 : 1 }}>
              <span className="block h-full rounded-[1.6rem] border-[3px] border-ink bg-[#fffaf0] p-2 shadow-[0_16px_34px_rgba(106,58,51,0.3)]">
                <span className="block h-[68%] rounded-[1.2rem] bg-cover bg-center" role="img" aria-label={photos[i].alt} style={{ backgroundImage: `url(${photos[i].src})` }} />
                <span className="block px-2 pt-2"><span className="display text-red text-xl">{String(i + 1).padStart(2, "0")}</span><span className="display block text-sm sm:text-base leading-tight text-ink">{h}</span></span>
              </span>
            </button>
          );
        })}
      </div>
      <div key={active} className="relative mx-auto mt-6 max-w-md bg-ink text-butter rounded-2xl px-6 py-4 slide-up-flat overflow-hidden">
        <p className="display text-xl">{beliefs[active][0]}</p>
        <p className="mt-1 text-sm opacity-90">{beliefs[active][1]}</p>
        {running && bar(`d${active}`)}
      </div>
    </div>
  );
}
