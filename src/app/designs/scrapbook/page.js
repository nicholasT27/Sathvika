import Nav from "@/components/Nav";
import WavyFrame from "@/components/WavyFrame";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import Criminals from "@/components/Criminals";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { frames } from "@/components/Hero";
import { rules } from "@/components/Rules";
import { services, icons } from "@/components/Services";

export const metadata = { title: "Sathvika | Design B: Scrapbook" };

const tags = [
  ["Branding", "bg-sky", "top-2 left-[8%] -rotate-6"], ["Strategy", "bg-yellow", "top-10 right-[10%] rotate-6"],
  ["Websites", "bg-butter", "top-40 left-[2%] rotate-3"], ["Content", "bg-orange text-paper", "top-44 right-[3%] -rotate-3"],
  ["Performance", "bg-sky", "bottom-2 left-[30%] -rotate-2"],
];

const clouds = [
  ["Boring is the only bad idea.", "bg-yellow text-ink"], ["Strategy first, sparkle second.", "bg-sky text-ink"],
  ["Brands are people. Give them personality.", "bg-red text-paper"], ["Done is good. Delightful is better.", "bg-pink text-ink"],
];

// Design B: a red scrapbook table with tilted paper cards, cloud shapes and floating tags.
export default function Scrapbook() {
  return (
    <main className="soft bg-pink text-ink pt-24 overflow-hidden">
      <Nav />
      {/* Hero */}
      <section id="top" className="relative mx-auto max-w-6xl px-5 pt-10 pb-20 text-center">
        {tags.map(([t, c, pos]) => (
          <span key={t} className={`hidden md:block absolute ${pos} ${c} ${c.includes("text-") ? "" : "text-ink"} px-4 py-1 rounded-full border-2 border-ink text-sm font-semibold`}>{t}</span>
        ))}
        <h1 className="text-[22vw] sm:text-[11rem] leading-none text-red">Sathvika</h1>
        <p className="mt-4 text-xl max-w-lg mx-auto">Our brand: your hobby turned into a business people can&apos;t stop talking about.</p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {frames.map((f, i) => (
            <div key={f.id} style={{ transform: `rotate(${f.rot}deg)` }} className={i % 2 ? "md:translate-y-8" : ""}>
              <WavyFrame id={`b-${f.id}`} color={f.color} src={f.src} label={f.label}>
                <g fill="#3b1410" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>
              </WavyFrame>
            </div>
          ))}
        </div>
      </section>

      {/* Two tilted cards */}
      <section id="founder" className="mx-auto max-w-5xl px-5 space-y-14 pb-24">
        <div className="bg-butter text-ink rounded-[2rem] border-[4px] border-paper p-8 sm:p-12 -rotate-2 grid sm:grid-cols-[1fr_auto] gap-6 items-center shadow-[10px_10px_0_rgba(59,20,16,0.5)]">
          <div>
            <h2 className="text-4xl sm:text-5xl">Hi, I&apos;m <span className="text-red">Sathvika.</span></h2>
            <p className="mt-3 text-lg">I mix strategy, design and a slightly unreasonable amount of coffee to build brands people remember. Small team, big ideas, zero boring decks.</p>
          </div>
          <Mascot mood="wink" className="h-48 mx-auto bob" />
        </div>
        <div id="ideology" className="bg-paper text-ink rounded-[2rem] border-[4px] border-butter p-6 sm:p-10 rotate-1 shadow-[10px_10px_0_rgba(59,20,16,0.5)]">
          <h2 className="text-4xl sm:text-5xl text-red">Our ideology</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {clouds.map(([t, c], i) => (
              <p key={t} className={`${c} display text-xl sm:text-2xl p-8 min-h-36 grid place-items-center text-center rounded-[60%_40%_55%_45%/50%_60%_40%_50%] ${i % 2 ? "rotate-2" : "-rotate-2"}`}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="rounded-[2.5rem] overflow-hidden mx-3 mb-6"><Remote /></div>
      <div className="rounded-[2.5rem] overflow-hidden mx-3 mb-6"><Criminals /></div>
      <div className="rounded-[2.5rem] overflow-hidden mx-3 mb-14"><License /></div>

      {/* Rules as stickers */}
      <section id="rules" className="mx-auto max-w-5xl px-5 pb-20 text-center">
        <h2 className="text-4xl sm:text-6xl text-red">Our very official, unofficial rules</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {rules.map(([t, b, bg], n) => (
            <div key={t} className={`${bg.replace("bg-pink", "bg-yellow")} text-ink w-64 rounded-3xl border-[3px] border-ink p-5 shadow-[5px_5px_0_var(--ink)] ${n % 2 ? "rotate-3" : "-rotate-3"}`}>
              <h3 className="display text-xl text-red">{t}</h3><p className="text-sm mt-1">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services as round stickers */}
      <section id="services" className="bg-butter text-ink py-20 px-5">
        <h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2>
        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, n) => (
            <div key={s.key} className={`text-center ${n % 2 ? "rotate-3" : "-rotate-3"}`}>
              <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full border-[5px] border-ink grid place-items-center shadow-[5px_5px_0_var(--ink)]" style={{ background: s.color }}>
                <svg viewBox="0 0 100 100" className="w-24 sm:w-28" role="img" aria-label={s.name}>{icons[s.key]}</svg>
              </div>
              <h3 className="display text-xl mt-4">{s.name}</h3><p className="text-sm">{s.line}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <footer className="bg-ink text-butter text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm mt-1">© 2026</p></footer>
    </main>
  );
}
