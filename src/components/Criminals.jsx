"use client";
import { useState } from "react";
import Mascot from "./Mascot";

const moods = ["happy", "wink", "shock", "smug"];
const crimes = [
  "Stealing the spotlight (repeatedly)",
  "Breaking and entering boring briefs",
  "Armed with a pen and dangerous ideas",
  "Caught red-handed with extra coffee",
  "Resisting beige",
];

// Creative Criminals: a police-lineup mugshot of Penny. Click her to change her expression and read her rap sheet.
export default function Criminals() {
  const [i, setI] = useState(0);
  return (
    <section id="criminals" className="py-24 px-5 bg-ink text-paper">
      <div className="mx-auto max-w-5xl">
        <p className="display text-yellow">Case file #001</p>
        <h2 className="text-5xl sm:text-7xl">Creative <span className="text-red">Criminals</span></h2>
        <p className="mt-3 max-w-xl opacity-90">Meet our mascot and chief accomplice. Booked for crimes against boring. Tap her for a new mugshot.</p>
        <div className="mt-12 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <button onClick={() => setI((i + 1) % moods.length)} aria-label="Change Penny's expression" className="relative mx-auto w-72 cursor-pointer">
            <div className="relative bg-sky border-[5px] border-paper rounded-lg overflow-hidden pt-4 px-6 h-[26rem]">
              {/* height-chart lines */}
              {[...Array(8)].map((_, n) => (
                <div key={n} className="absolute left-0 right-0 border-t-[3px] border-ink/40" style={{ top: `${12 + n * 11}%` }}>
                  <span className="absolute left-1 -top-5 text-xs text-ink/70">{8 - n}ft</span>
                </div>
              ))}
              <Mascot mood={moods[i]} className="relative mx-auto h-full w-auto" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-2 bg-paper text-ink px-4 py-2 border-[3px] border-ink display whitespace-nowrap shadow-[4px_4px_0_#e5362b]">
              PENNY · ID 0001
            </div>
          </button>
          <div className="bg-paper text-ink rounded-2xl border-[4px] border-yellow p-6 sm:p-8 rotate-1">
            <h3 className="display text-3xl text-red">Wanted: for creativity</h3>
            <ul className="mt-4 space-y-3">
              {crimes.map((c, n) => (
                <li key={c} className="flex gap-3"><span className="display text-blue">{n + 1}.</span>{c}</li>
              ))}
            </ul>
            <p className="mt-5 display text-xl">Reward: <span className="text-orange">a brand nobody forgets.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
