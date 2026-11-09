import Nav from "@/components/Nav";
import ScrollBar from "@/components/ScrollBar";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import CriminalsLine from "@/components/CriminalsLine";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { beliefs } from "@/components/Ideology";
import { rules } from "@/components/Rules";
import { services, icons } from "@/components/Services";
import { ticker } from "@/components/Hero";

export const metadata = { title: "Sathvika | Style 1: Sticker Pop" };

const FOUNDER_PHOTO = "/founder/founder.svg";
const box = "border-[3px] border-ink rounded-3xl shadow-[7px_7px_0_var(--ink)] overflow-hidden";
const ribbons = ["bg-red text-paper -rotate-2", "bg-yellow rotate-1", "bg-blue -rotate-1", "bg-orange rotate-2"];

// Style 1, Sticker Pop: thick outlines, hard shadows, slanted ribbons and round stickers. Loud but in soft colours.
export default function Pop() {
  return (
    <main className="soft bg-butter p-3 pt-24 sm:p-6 sm:pt-28 overflow-x-clip">
      <Nav /><ScrollBar />
      <div className="mx-auto max-w-5xl space-y-16">
        <HeroLayout
          className={`${box} bg-yellow p-5 sm:p-8 !overflow-visible`}
          heading={<h1 className="text-4xl sm:text-6xl leading-[1.05] md:pr-44">Meet <span className="inline-block bg-paper border-[3px] border-ink px-3 -rotate-2 text-red">Sathvika,</span> the face behind the <span className="text-red">chaos</span></h1>}
          button={<a href="#contact" className="btn bg-red text-paper text-sm !py-2">Start a project</a>}
          intro={<p className="max-w-sm font-semibold">A creative agency for brands tired of beige. Bold ideas, real strategy and zero boring decks.</p>}
          photo={
            <div className="relative h-full">
              <div role="img" aria-label="Sathvika, founder of the agency" className="h-80 md:h-full md:min-h-[26rem] rounded-3xl border-[3px] border-ink shadow-[5px_5px_0_var(--ink)] bg-sky bg-cover bg-center" style={{ backgroundImage: `url(${FOUNDER_PHOTO})` }} />
              <span className="absolute -top-5 -right-3 w-24 h-24 rounded-full bg-red text-paper border-[3px] border-ink display grid place-items-center rotate-12 text-xl">Hello!</span>
              <span className="absolute -bottom-4 left-4 bg-paper border-[3px] border-ink px-4 py-1 display -rotate-3">Founder</span>
            </div>
          }
          tile={<div className="h-64 md:h-full md:min-h-[14rem] rounded-3xl border-[3px] border-ink bg-paper grid place-items-center shadow-[5px_5px_0_var(--ink)]"><Mascot mood="happy" className="h-44 md:h-52 bob" /></div>}
        />

        <section id="founder">
          <Reveal anim="flip">
            <div className={`${box} bg-sky p-6 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-8 items-center`}>
              <div className="w-44 h-44 rounded-full bg-paper border-[3px] border-ink grid place-items-center mx-auto -rotate-6"><Mascot mood="wink" steam={false} className="h-32" /></div>
              <div><h2 className="text-3xl sm:text-5xl">Hi, I&apos;m <span className="text-red">Sathvika!</span></h2>
                <p className="mt-3 text-lg">I started this agency because brands deserve better than copy-paste creativity. Strategy, design and a slightly unreasonable amount of coffee. Small team, big ideas.</p>
                <p className="mt-3 flex flex-wrap gap-2">{["Caffeinated", "Idea wrangler", "Font nerd"].map((t) => <span key={t} className="bg-yellow border-2 border-ink rounded-full px-3 py-1 text-sm font-bold">{t}</span>)}</p></div>
            </div>
          </Reveal>
        </section>

        <section id="ideology" className="checks checks-orange border-[3px] border-ink rounded-3xl py-12 px-4 overflow-hidden">
          <Reveal anim="zoom"><h2 className="text-center"><span className="inline-block bg-paper border-[3px] border-ink rounded-2xl px-6 py-2 text-4xl sm:text-6xl shadow-[5px_5px_0_var(--ink)]">Our ideology</span></h2></Reveal>
          <div className="mt-10 space-y-5">
            {beliefs.map((b, i) => (
              <Reveal key={b.text} anim={i % 2 ? "right" : "left"} delay={0.1 * i}>
                <p className={`${ribbons[i]} display text-xl sm:text-3xl border-[3px] border-ink px-6 py-3 shadow-[5px_5px_0_var(--ink)] w-[104%] -ml-[2%]`}>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal anim="pop"><div className={box}><Remote /></div></Reveal>
        <Reveal anim="flipx"><div className={box}><CriminalsLine /></div></Reveal>
        <Reveal anim="rise"><div className={box}><License /></div></Reveal>

        <section id="rules">
          <Reveal anim="wipe"><h2 className="text-3xl sm:text-6xl text-center">Our very <span className="text-red">official,</span> unofficial rules</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map(([t, b], n) => (
              <Reveal key={t} anim="pop" delay={0.08 * n}>
                <article className={`${["bg-sky", "bg-yellow", "bg-orange", "bg-paper", "bg-blue", "bg-butter"][n]} border-[3px] border-ink rounded-3xl p-5 shadow-[5px_5px_0_var(--ink)] relative ${n % 2 ? "rotate-2" : "-rotate-2"}`}>
                  <span className="absolute -top-4 -left-3 w-11 h-11 rounded-full bg-red text-paper border-[3px] border-ink display grid place-items-center">{n + 1}</span>
                  <h3 className="display text-xl mt-2">{t}</h3><p className="text-sm mt-1">{b}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="services">
          <Reveal anim="drop"><h2 className="text-4xl sm:text-6xl text-center">What we <span className="text-blue">do</span></h2></Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((s, n) => (
              <Reveal key={s.key} anim="rise" delay={0.08 * n}>
                <div className="text-center">
                  <div className={`mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full border-[3px] border-ink grid place-items-center shadow-[5px_5px_0_var(--ink)] ${n % 2 ? "rotate-6" : "-rotate-6"}`} style={{ background: s.color }}>
                    <svg viewBox="0 0 100 100" className="w-24 sm:w-28" role="img" aria-label={s.name}>{icons[s.key]}</svg>
                  </div>
                  <h3 className="display text-xl mt-4">{s.name}</h3><p className="text-sm">{s.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal anim="wipe"><div className={box}><Contact /></div></Reveal>
      </div>
      <footer className="mt-16 -mx-3 sm:-mx-6 -mb-3 sm:-mb-6 bg-ink text-butter border-t-[3px] border-ink overflow-hidden">
        <div className="marquee py-4 display text-2xl">{[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => <span key={i} className="mx-5">{t} <span className="text-yellow">✺</span></span>)}</div>
        <p className="text-center pb-6 text-sm">Sathvika © 2026 · crimes against boring</p>
      </footer>
    </main>
  );
}
