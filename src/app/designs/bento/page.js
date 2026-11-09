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

export const metadata = { title: "Sathvika | Design F: Bento" };

// Design F: the top of the page is a "bento box" mosaic of tiles, one per section. Click a tile to jump to it.
export default function Bento() {
  const tile = "rounded-[1.75rem] p-5 sm:p-6 overflow-hidden transition hover:-translate-y-1";
  const ph = <g fill="#6a3a33" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>;
  return (
    <main className="soft pt-24 bg-pink/60">
      <Nav />
      <section id="top" className="mx-auto max-w-6xl px-3 sm:px-5 pt-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[11rem] gap-3 sm:gap-4">
          <div className={`${tile} col-span-2 row-span-2 bg-paper border border-red/40 flex flex-col justify-center`}>
            <h1 className="text-6xl sm:text-8xl text-red">Sathvika</h1>
            <p className="mt-3 max-w-xs">Creative agency for brands tired of beige.</p>
            <a href="#contact" className="btn bg-red text-paper mt-5 self-start">Start a project</a>
          </div>
          <a href="#founder" className={`${tile} col-span-1 row-span-2 bg-yellow grid grid-cols-1 content-between`}>
            <span className="display text-xl text-red">Founder</span>
            <WavyFrame id="f-a" color="var(--blue)" src="/founder/expression-1.svg" label="Founder">{ph}</WavyFrame>
          </a>
          <a href="#ideology" className={`${tile} checks checks-blue border border-red/40 grid place-items-center`}><span className="display text-2xl bg-paper rounded-full px-5 py-2 text-red">Ideology</span></a>
          <a href="#remote" className={`${tile} bg-blue grid place-items-center`}><span className="display text-2xl">Remote 🚪</span></a>
          <a href="#criminals" className={`${tile} bg-ink text-paper grid place-items-center`}><Mascot mood="smug" steam={false} className="h-28" /></a>
          <a href="#rules" className={`${tile} bg-butter border border-red/40`}><span className="display text-xl text-red">Rules</span><p className="text-sm mt-1">{rules.length} very official, unofficial ones.</p></a>
          <a href="#services" className={`${tile} col-span-2 bg-orange grid grid-cols-6 gap-2 content-center`}>
            {services.map((s) => <svg key={s.key} viewBox="0 0 100 100" className="w-full" aria-hidden="true">{icons[s.key]}</svg>)}
            <span className="display text-xl col-span-6">Services</span>
          </a>
          <a href="#contact" className={`${tile} bg-red text-paper grid place-items-center`}><span className="display text-2xl">Say hi ✉</span></a>
          {frames.slice(1).map((f) => (
            <div key={f.id} className={`${tile} bg-sky hidden md:grid place-items-center`}><div className="w-24"><WavyFrame id={`f-${f.id}`} color={f.color} src={f.src} label={f.label}>{ph}</WavyFrame></div></div>
          ))}
        </div>
      </section>

      <section id="founder" className="bg-butter py-16 px-5">
        <div className="mx-auto max-w-4xl grid sm:grid-cols-[1fr_auto] gap-8 items-center">
          <div><h2 className="text-4xl sm:text-5xl text-red">Hi, I&apos;m Sathvika.</h2>
            <p className="mt-3 text-lg">I mix strategy, design and a slightly unreasonable amount of coffee to build brands people remember. Small team, big ideas, zero boring decks.</p></div>
          <Mascot mood="wink" className="h-44 mx-auto" />
        </div>
      </section>

      <section id="ideology" className="checks checks-blue py-20 px-5">
        <div className="mx-auto max-w-3xl bg-paper rounded-3xl border border-red/40 p-8 sm:p-12 text-center">
          <h2 className="text-4xl sm:text-5xl text-red">Our ideology</h2>
          <p className="mt-4 text-xl">Boring is the only bad idea. Strategy first, sparkle second. Brands are people, so give them personality. Done is good, delightful is better.</p>
        </div>
      </section>

      <Remote />
      <Criminals />
      <License />

      <section id="rules" className="py-20 px-5">
        <h2 className="text-4xl sm:text-6xl text-red text-center">Our very official, unofficial rules</h2>
        <div className="mt-10 mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rules.map(([t, b, bg], n) => <article key={t} className={`${bg.replace("bg-pink", "bg-yellow")} rounded-3xl p-6 border border-red/30`}><span className="display text-red">0{n + 1}</span><h3 className="display text-2xl">{t}</h3><p className="text-sm mt-1">{b}</p></article>)}
        </div>
      </section>

      <section id="services" className="bg-sky py-20 px-5">
        <h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2>
        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <article key={s.key} className="rounded-3xl p-4 bg-paper border border-red/30">
              <div className="rounded-2xl p-3" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
              <h3 className="display text-xl text-red mt-3">{s.name}</h3><p className="text-sm">{s.line}</p>
            </article>
          ))}
        </div>
      </section>

      <Contact />
      <footer className="bg-red text-paper text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm">© 2026</p></footer>
    </main>
  );
}
