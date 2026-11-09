import Nav from "@/components/Nav";
import ScrollBar from "@/components/ScrollBar";
import Reveal from "@/components/Reveal";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import CriminalsLine from "@/components/CriminalsLine";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { beliefs } from "@/components/Ideology";
import { rules } from "@/components/Rules";
import { services, icons } from "@/components/Services";

export const metadata = {
  title: "Sathvika | Creative Criminals",
  description: "A creative agency that breaks the boring brief. Branding, performance marketing, websites, strategy and content.",
};

// The founder's photo. Replace this file (or change the path) with the real picture.
const FOUNDER_PHOTO = "/founder/founder.svg";

const facts = [["Mood", "Caffeinated"], ["Superpower", "Turning vague briefs into bold ideas"], ["Weakness", "Good fonts and filter coffee"]];
const listItem = "text-2xl sm:text-3xl text-red italic font-semibold";

// The Sathvika website: a pink page holding one cream card, filled with soft rounded panels, like the Rayo reference.
export default function Home() {
  const panel = "rounded-[1.75rem] overflow-hidden";
  return (
    <main className="soft bg-pink pt-24 p-3 sm:p-6 overflow-x-clip">
      <Nav /><ScrollBar />
      <div className="mx-auto max-w-5xl bg-paper border border-red/60 rounded-[2rem] p-3 sm:p-5 space-y-12 sm:space-y-16">

        {/* 1. Founder photo straight away */}
        <section id="top" className={`${panel} bg-yellow p-5 sm:p-8`}>
          <Reveal anim="drop">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h1 className="text-4xl sm:text-6xl text-red leading-[1.05]">Meet Sathvika,<br />the face behind<br />the chaos</h1>
              <a href="#contact" className="btn bg-red text-paper !py-2 !px-5 text-sm shrink-0">Start a project</a>
            </div>
            <p className="mt-4 max-w-sm text-sm">A creative agency for brands tired of beige. Bold ideas, real strategy and zero boring decks. Make it truly yours.</p>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Reveal anim="left">
              <div className="bg-paper rounded-3xl h-72 md:h-96 grid place-items-center"><Mascot mood="happy" className="h-56 md:h-72 bob" /></div>
            </Reveal>
            <Reveal anim="right">
              <div role="img" aria-label="Sathvika, founder of the agency" className="rounded-3xl h-72 md:h-96 bg-sky bg-cover bg-center" style={{ backgroundImage: `url(${FOUNDER_PHOTO})` }} />
            </Reveal>
          </div>
        </section>

        {/* 2. Introduction of the founder */}
        <section id="founder" className="grid md:grid-cols-2 gap-6 items-center">
          <Reveal anim="flip">
            <div className={`${panel} bg-sky p-4`}>
              <div className="relative bg-paper rounded-[1.5rem] p-3">
                <div className="rounded-2xl bg-butter h-72 grid place-items-center"><Mascot mood="wink" className="h-56" /></div>
                <span className="absolute inset-0 grid place-items-center pointer-events-none"><span className="display text-3xl bg-yellow text-red rounded-full px-6 py-2 shadow-sm">Hi, I&apos;m Sathvika</span></span>
              </div>
            </div>
          </Reveal>
          <Reveal anim="rise">
            <div className="text-right space-y-4">
              <p className="text-lg">I started this agency because brands deserve better than copy-paste creativity. I mix strategy, design and a slightly unreasonable amount of coffee. Small team, big ideas. When you work with us, you work with me.</p>
              <ul className="space-y-2">
                {facts.map(([k, v]) => <li key={k} className="text-lg"><span className="display text-red">{k}:</span> <span className="italic">{v}</span></li>)}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* 3. Our ideology */}
        <section id="ideology" className="grid md:grid-cols-2 gap-6 items-center">
          <Reveal anim="zoom">
            <div className={`${panel} bg-sky p-4`}>
              <div className="relative bg-paper rounded-[1.5rem] p-3">
                <div className="checks checks-blue rounded-2xl h-72" />
                <span className="absolute inset-0 grid place-items-center"><span className="display text-4xl bg-yellow text-red rounded-full px-8 py-3">Ideology</span></span>
              </div>
            </div>
          </Reveal>
          <ul className="text-right space-y-5 px-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.text} anim="right" delay={0.12 * i}>
                <li className={`${listItem} ${i === beliefs.length - 1 ? "underline underline-offset-8" : ""}`}>{b.text}</li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* 4. Remote */}
        <Reveal anim="pop"><div className={panel}><Remote /></div></Reveal>

        {/* 5. Creative criminals: the quirky lineup */}
        <Reveal anim="flipx"><div className={panel}><CriminalsLine /></div></Reveal>

        {/* 6. Creative licence */}
        <Reveal anim="rise"><div className={panel}><License /></div></Reveal>

        {/* 7. Our very official, unofficial rules */}
        <section id="rules" className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-center">
          <div className="space-y-5 px-2">
            <Reveal anim="wipe"><h2 className="text-3xl sm:text-5xl text-red">Our very official, unofficial rules</h2></Reveal>
            <ol className="space-y-3">
              {rules.map(([t, b], n) => (
                <Reveal key={t} anim="left" delay={0.1 * n}>
                  <li><span className={listItem}>{n + 1}. {t}</span> <span className="block text-sm">{b}</span></li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal anim="drop">
            <div className={`${panel} bg-blue p-4`}>
              <div className="bg-paper rounded-[1.5rem] p-3 relative">
                <div className="rounded-2xl bg-butter h-80 grid place-items-center"><Mascot mood="shock" className="h-64" /></div>
                <span className="absolute inset-0 grid place-items-center pointer-events-none"><span className="display text-3xl bg-yellow text-red rounded-full px-6 py-2 -rotate-3">Rules</span></span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 8. Services */}
        <section id="services" className={`${panel} bg-yellow p-5 sm:p-8`}>
          <Reveal anim="zoom">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h2 className="text-4xl sm:text-6xl text-red leading-[1.05]">What we can<br />create for you</h2>
              <a href="#contact" className="btn bg-red text-paper !py-2 !px-5 text-sm shrink-0">Start creating</a>
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s, n) => (
              <Reveal key={s.key} anim="rise" delay={0.08 * n}>
                <article className="bg-paper rounded-3xl p-3 h-full">
                  <div className="rounded-2xl p-3" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                  <h3 className="display text-lg text-red mt-3">{s.name}</h3>
                  <p className="text-sm">{s.line}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 9. Contact */}
        <Reveal anim="wipe"><div className={panel}><Contact /></div></Reveal>

        {/* Footer */}
        <footer className={`${panel} bg-red text-paper p-8 sm:p-10`}>
          <div className="grid sm:grid-cols-[1fr_auto_auto] gap-8">
            <p className="display text-6xl sm:text-7xl leading-none">Sathvika</p>
            <ul className="text-sm space-y-1"><li className="display">Menu</li><li><a href="#founder">Founder</a></li><li><a href="#ideology">Ideology</a></li><li><a href="#remote">Remote</a></li></ul>
            <ul className="text-sm space-y-1"><li className="display">More</li><li><a href="#criminals">Criminals</a></li><li><a href="#rules">Rules</a></li><li><a href="#services">Services</a></li><li><a href="#contact">Contact</a></li></ul>
          </div>
          <p className="mt-10 pt-4 border-t border-paper/40 text-xs flex flex-wrap justify-between gap-2"><span>More ideas. More Sathvika.</span><span>All rights reserved. Sathvika © 2026</span></p>
        </footer>
      </div>
    </main>
  );
}
