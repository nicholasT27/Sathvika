"use client";
import { useEffect, useRef, useState } from "react";
import { beliefs } from "@/data/content";

// One photo per belief, shown when that belief is chosen.
const photos = [
  { src: "/images/social.jpg", alt: "Social media apps on a phone", note: "Standing out in the feed" },
  { src: "/images/analytics.jpg", alt: "A marketing analytics dashboard on a laptop", note: "Numbers behind every idea" },
  { src: "/images/cheers.jpg", alt: "Two coffee cups clinking over a cafe table", note: "People talking to people" },
  { src: "/images/latte.jpg", alt: "Latte art on a cafe table with plants", note: "Finishing touches matter" },
];

const DURATION = 4500;
const intro = "Four beliefs sit behind every campaign, website and brand we make. Pick one to see it in action.";

// Splits a word into letters so each one can animate in.
function Letters({ text }) {
  return <>{text.split("").map((ch, i) => <span key={i} className="letter" style={{ "--i": i }}>{ch === " " ? "\u00a0" : ch}</span>)}</>;
}

// Ideology section: a box on thick checks. It rotates through the beliefs by itself once scrolled into view
// (and pauses while you hover it). Choose a belief to jump to it. The title drops in letter by letter.
export default function IdeologyInteractive() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const box = useRef(null);

  // Notice when the section is on screen; it only starts rotating from then on.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    if (box.current) io.observe(box.current);
    return () => io.disconnect();
  }, []);

  // Move to the next belief every few seconds while visible and not hovered (skipped for people who prefer less motion).
  useEffect(() => {
    if (!inView || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % beliefs.length), DURATION);
    return () => clearTimeout(t);
  }, [inView, hovered, active]);

  const running = inView && !hovered;
  return (
    <div ref={box} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`relative mx-auto max-w-5xl bg-[#fffaf0] rounded-[2rem] border-[3px] border-ink/70 p-2 shadow-[0_20px_46px_rgba(106,58,51,0.3)] ${inView ? "in-view" : ""}`}>
      <h2 aria-label="Our ideology" className="absolute -top-6 right-6 sm:right-14 z-10 display bg-orange text-ink border-y-[3px] border-ink px-8 py-3 text-3xl sm:text-5xl rotate-3 wobble shadow-[0_8px_0_rgba(106,58,51,0.25)]"><span aria-hidden="true"><Letters text="Our ideology" /></span></h2>
      <p key={active} className="absolute -bottom-6 left-6 sm:left-14 z-10 display bg-ink text-butter px-6 py-2 text-lg sm:text-2xl max-w-[80%] slide-up">{beliefs[active][0]}</p>
      <div className="grid md:grid-cols-2 rounded-[1.6rem] overflow-hidden border border-ink/25">
        <div className="relative min-h-[18rem] md:min-h-[30rem] bg-sky">
          {photos.map((p, i) => (
            <div key={p.src} role="img" aria-label={p.alt} aria-hidden={active !== i} className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}`} style={{ backgroundImage: `url(${p.src})` }} />
          ))}
          <span className="absolute left-4 top-4 bg-paper text-ink text-[11px] font-semibold uppercase tracking-[0.22em] px-3 py-1 rounded-full">{photos[active].note}</span>
        </div>
        <div className="bg-yellow px-6 sm:px-10 pt-16 pb-14 sm:pt-20">
          <p className="mb-5 text-sm max-w-sm">{intro}</p>
          <ol className="space-y-2" role="tablist" aria-label="Our beliefs">
            {beliefs.map(([h, d], i) => {
              const on = active === i;
              return (
                <li key={h}>
                  <button role="tab" aria-selected={on} onClick={() => setActive(i)} onFocus={() => setActive(i)} className={`relative w-full text-left rounded-2xl px-4 py-3 flex gap-4 overflow-hidden transition ${on ? "bg-paper shadow-[0_6px_16px_rgba(106,58,51,0.2)] translate-x-1" : "hover:bg-paper/50"}`}>
                    <span className={`display text-3xl w-10 shrink-0 ${on ? "text-red" : "text-red/50"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span><span className="block font-semibold uppercase tracking-[0.1em]">{h}</span><span className={`block text-sm overflow-hidden transition-all duration-500 ${on ? "max-h-24 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>{d}</span></span>
                    {on && running && <span key={`bar-${active}`} className="fill-bar absolute left-0 bottom-0 h-1 w-full bg-red" style={{ "--dur": `${DURATION}ms` }} aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
