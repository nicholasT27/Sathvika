import Nav from "@/components/Nav";
import WavyFrame from "@/components/WavyFrame";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import Criminals from "@/components/Criminals";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { frames } from "@/components/Hero";
import { beliefs } from "@/components/Ideology";
import { rules } from "@/components/Rules";
import { services, icons } from "@/components/Services";

export const metadata = { title: "Sathvika | Design A: Framed Panels" };

// Design A: everything sits in rounded panels inside one thin red frame, like the Rayo homepage.
export default function Framed() {
  const panel = "rounded-[1.75rem] overflow-hidden";
  return (
    <main className="bg-blue p-3 sm:p-6 pt-24">
      <Nav />
      <div className="mx-auto max-w-6xl bg-paper border-2 border-red rounded-[2.25rem] p-3 sm:p-5 space-y-4">
        {/* Hero: words on the left, founder photos on the right */}
        <div id="top" className="grid md:grid-cols-2 gap-4">
          <div className={`${panel} bg-butter p-8 sm:p-12 flex flex-col items-center justify-center text-center min-h-[26rem]`}>
            <h1 className="text-7xl sm:text-8xl text-red">Sathvika</h1>
            <p className="mt-6 max-w-sm">A creative agency for brands that are tired of being polite and beige. Bold ideas, real strategy, zero boring decks.</p>
            <a href="#contact" className="btn bg-red text-paper mt-8">Start a project</a>
          </div>
          <div className={`${panel} bg-red p-4 sm:p-6`}>
            <div className="bg-paper rounded-[1.5rem] p-4 grid grid-cols-2 gap-3">
              {frames.map((f) => (
                <WavyFrame key={f.id} id={`a-${f.id}`} color={f.color} src={f.src} label={f.label}>
                  <g fill="#3b1410" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>
                </WavyFrame>
              ))}
            </div>
          </div>
        </div>

        {/* Founder */}
        <div id="founder" className={`${panel} bg-yellow p-5 sm:p-8`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl sm:text-5xl text-red">Meet the founder</h2>
            <a href="#contact" className="btn bg-red text-paper !py-2 text-sm">Say hello</a>
          </div>
          <div className="mt-6 grid md:grid-cols-[1.3fr_1fr] gap-4">
            <div className="bg-paper rounded-3xl p-6 sm:p-8">
              <p className="text-lg">Hi, I&apos;m Sathvika. I started this agency because brands deserve better than copy-paste creativity. I mix strategy, design and a slightly unreasonable amount of coffee.</p>
              <p className="mt-3">Small team, big ideas. When you work with us, you work with me.</p>
            </div>
            <div className="bg-sky rounded-3xl p-4 grid place-items-center"><Mascot mood="wink" className="h-56" /></div>
          </div>
        </div>

        {/* Ideology */}
        <div id="ideology" className="grid md:grid-cols-[1fr_1.2fr] gap-4 items-center py-4">
          <div className={`${panel} bg-sky p-5`}>
            <div className="relative bg-paper rounded-[1.5rem] p-3">
              <div className="checks checks-orange rounded-2xl h-64 grid place-items-center">
                <span className="display text-3xl bg-yellow border-2 border-red rounded-full px-6 py-2 text-red -rotate-3">Ideology</span>
              </div>
            </div>
          </div>
          <ul className="text-right space-y-4 px-2">
            {beliefs.map((b, i) => (
              <li key={b.text} className={`display text-2xl sm:text-3xl text-red ${i === beliefs.length - 1 ? "underline underline-offset-8" : ""}`}>{b.text}</li>
            ))}
          </ul>
        </div>

        <div className={panel}><Remote /></div>
        <div className={panel}><Criminals /></div>
        <div className={panel}><License /></div>

        {/* Rules */}
        <div id="rules" className={`${panel} bg-butter p-5 sm:p-8`}>
          <h2 className="text-3xl sm:text-5xl text-red text-center">Our very official, unofficial rules</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rules.map(([t, b], n) => (
              <div key={t} className="bg-paper rounded-3xl border-2 border-red/60 p-5">
                <span className="display text-blue text-xl">Rule {n + 1}</span>
                <h3 className="display text-2xl text-red">{t}</h3>
                <p className="mt-1 text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div id="services" className="rounded-[1.75rem] bg-[#fffaf0] border-2 border-red/60 p-5 sm:p-8">
          <h2 className="text-3xl sm:text-5xl text-red">What we do</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <article key={s.key} className="rounded-3xl p-4 text-paper" style={{ background: s.color }}>
                <div className="bg-paper rounded-2xl p-2"><svg viewBox="0 0 100 100" className="w-full" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                <h3 className="display text-lg mt-3">{s.name}</h3>
                <p className="text-sm opacity-95">{s.line}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={panel}><Contact /></div>

        <footer className={`${panel} bg-red text-paper p-8 sm:p-10 grid sm:grid-cols-[1fr_auto] gap-6`}>
          <p className="display text-6xl sm:text-7xl">Sathvika</p>
          <ul className="text-sm space-y-1"><li>About</li><li>Services</li><li>Rules</li><li>Contact</li></ul>
          <p className="text-xs sm:col-span-2 border-t border-paper/40 pt-4">All rights reserved. Sathvika © 2026</p>
        </footer>
      </div>
    </main>
  );
}
