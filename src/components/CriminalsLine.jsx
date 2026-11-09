import { Icon } from "./Icons";
import Reveal from "./Reveal";
import Polaroid from "./Polaroid";

const lineup = [
  { icon: "ads", name: "THE MEGAPHONE", id: "0001", charge: "Stealing the spotlight", verdict: "Guilty of reach" },
  { icon: "performance", name: "THE DASHBOARD", id: "0002", charge: "Armed with data and dangerous ideas", verdict: "Guilty, by the numbers" },
  { icon: "social", name: "THE SHARE BUTTON", id: "0003", charge: "Caught red-handed going viral", verdict: "Guilty, trending" },
  { icon: "strategy", name: "THE BULLSEYE", id: "0004", charge: "Resisting beige, repeatedly", verdict: "Guilty, on target" },
];

// Creative Criminals: a police lineup of marketing tools hung on a washing line. Hover (or tap) a mugshot to get the verdict stamped on it.
export default function CriminalsLine() {
  return (
    <section id="criminals" className="bg-ink text-paper py-20 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal anim="flipx">
          <p className="display text-yellow">Case file #001 · Four suspects in custody</p>
          <h2 className="text-5xl sm:text-7xl">Creative <span className="text-red">Criminals</span></h2>
          <p className="mt-3 max-w-xl opacity-90">Our marketing tools have been brought in for questioning. Four mugshots, four charges, zero regrets. Hover a photo to see the verdict.</p>
        </Reveal>
        <div className="relative pt-10 mt-10">
          <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="absolute top-3 left-0 w-full h-8" aria-hidden="true">
            <path d="M0 8 Q250 36 500 14 T1000 8" fill="none" stroke="#fbf1da" strokeWidth="3" />
          </svg>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {lineup.map((s, i) => (
              <Reveal key={s.id} anim={i % 2 ? "rise" : "drop"} delay={0.12 * i}>
                <div tabIndex={0} className="group outline-none">
                  <Polaroid swing pin="peg" className="!pb-16 text-ink mx-auto max-w-[16rem]">
                    <div className="relative bg-sky overflow-hidden h-60 px-4 pt-2">
                      {[...Array(6)].map((_, n) => (
                        <div key={n} className="absolute left-0 right-0 border-t-2 border-ink/25" style={{ top: `${14 + n * 14}%` }}>
                          <span className="absolute left-1 -top-4 text-[10px] text-ink/60">{6 - n}ft</span>
                        </div>
                      ))}
                      <span className="relative h-full grid place-items-center"><span className="w-32 h-32 rounded-full bg-yellow grid place-items-center border-2 border-ink/30"><Icon name={s.icon} className="w-20 h-20 text-red" /></span></span>
                      <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition">
                        <span className="display text-red border-[4px] border-red rounded-lg px-3 py-1 -rotate-12 bg-butter/80 text-xl text-center">{s.verdict}</span>
                      </span>
                    </div>
                    <figcaption className="absolute bottom-2 left-3 right-3 text-center">
                      <span className="display block text-sm text-red">{s.name} · {s.id}</span>
                      <span className="block text-xs leading-tight">Charge: {s.charge}</span>
                    </figcaption>
                  </Polaroid>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal anim="pop" delay={0.2}>
          <p className="mt-14 text-center display text-xl text-yellow">Reward for their capture: a brand nobody forgets.</p>
        </Reveal>
      </div>
    </section>
  );
}
