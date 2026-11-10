"use client";
import { useState } from "react";
import { beliefs } from "@/data/content";

// One photo per belief, shown when that belief is chosen.
const photos = [
  { src: "/images/social.jpg", alt: "Social media apps on a phone", note: "Standing out in the feed" },
  { src: "/images/analytics.jpg", alt: "A marketing analytics dashboard on a laptop", note: "Numbers behind every idea" },
  { src: "/images/cheers.jpg", alt: "Two coffee cups clinking over a cafe table", note: "People talking to people" },
  { src: "/images/latte.jpg", alt: "Latte art on a cafe table with plants", note: "Finishing touches matter" },
];

const intro = "Four beliefs sit behind every campaign, website and brand we make. Pick one to see it in action.";

// Ideology section: a box on thick checks. Choose a belief on the right and the photo on the left swaps; the ribbon keeps the title.
export default function IdeologyInteractive() {
  const [active, setActive] = useState(0);
  return (
    <div className="relative mx-auto max-w-5xl bg-[#fffaf0] rounded-[2rem] border-[3px] border-ink/70 p-2 shadow-[0_20px_46px_rgba(106,58,51,0.3)]">
      <h2 className="absolute -top-6 right-6 sm:right-14 z-10 display bg-orange text-ink border-y-[3px] border-ink px-8 py-3 text-3xl sm:text-5xl rotate-3 shadow-[0_8px_0_rgba(106,58,51,0.25)]">Our ideology</h2>
      <p className="absolute -bottom-6 left-6 sm:left-14 z-10 display bg-ink text-butter px-6 py-2 text-lg sm:text-2xl -rotate-2 max-w-[80%]">{beliefs[active][0]}</p>
      <div className="grid md:grid-cols-2 rounded-[1.6rem] overflow-hidden border border-ink/25">
        <div className="relative min-h-[18rem] md:min-h-[30rem] bg-sky">
          {photos.map((p, i) => (
            <div key={p.src} role="img" aria-label={p.alt} aria-hidden={active !== i} className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}`} style={{ backgroundImage: `url(${p.src})` }} />
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
                  <button role="tab" aria-selected={on} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className={`w-full text-left rounded-2xl px-4 py-3 flex gap-4 transition ${on ? "bg-paper shadow-[0_6px_16px_rgba(106,58,51,0.2)] translate-x-1" : "hover:bg-paper/50"}`}>
                    <span className={`display text-3xl w-10 shrink-0 ${on ? "text-red" : "text-red/50"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span><span className="block font-semibold uppercase tracking-[0.1em]">{h}</span><span className={`block text-sm overflow-hidden transition-all duration-500 ${on ? "max-h-24 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>{d}</span></span>
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
