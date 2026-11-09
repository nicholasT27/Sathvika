import Nav from "@/components/Nav";
import ScrollBar from "@/components/ScrollBar";
import Reveal from "@/components/Reveal";
import Polaroid from "@/components/Polaroid";
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

export const metadata = { title: "Sathvika | Design E2: Clothesline" };

// A wavy washing line that polaroids hang from with pegs. Each polaroid sways gently.
function Line({ children, className = "" }) {
  return (
    <div className={`relative pt-10 ${className}`}>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="absolute top-3 left-0 w-full h-8" aria-hidden="true">
        <path d="M0 8 Q250 36 500 14 T1000 8" fill="none" stroke="#6a3a33" strokeWidth="3" />
      </svg>
      {children}
    </div>
  );
}

// Design E2: a clothesline across a soft sky. Photos and cards hang from the line and sway; each section enters differently as you scroll.
export default function Clothesline() {
  const ph = <g fill="#6a3a33" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>;
  return (
    <main className="soft bg-sky pt-24 overflow-x-clip">
      <Nav /><ScrollBar />
      <section id="top" className="mx-auto max-w-6xl px-5 pt-8 pb-16 text-center">
        <Reveal anim="zoom">
          <h1 className="text-6xl sm:text-9xl text-red">Sathvika</h1>
          <p className="mt-3 max-w-md mx-auto">Hung out to dry? Never. Ideas this fresh need air.</p>
        </Reveal>
        <Line className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frames.map((f, i) => (
              <Reveal key={f.id} anim="drop" delay={0.15 * i}>
                <Polaroid swing pin="peg" caption={["smiling", "laughing", "shocked", "winking"][i]} className="mx-auto max-w-[14rem]" >
                  <WavyFrame id={`l-${f.id}`} color={f.color} src={f.src} label={f.label}>{ph}</WavyFrame>
                </Polaroid>
              </Reveal>
            ))}
          </div>
        </Line>
        <a href="#contact" className="btn bg-red text-paper mt-12">Start a project</a>
      </section>

      <section id="founder" className="bg-butter py-20 px-5">
        <Reveal anim="left">
          <Line className="mx-auto max-w-4xl">
            <Polaroid swing pin="peg" className="!pb-8 !p-8 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
              <div><h2 className="text-4xl text-red">Meet the founder</h2><p className="mt-3 text-lg">Hi, I&apos;m Sathvika. Strategy, design and an unreasonable amount of coffee, all pegged up for you to see.</p></div>
              <Mascot mood="happy" className="h-44 mx-auto" />
            </Polaroid>
          </Line>
        </Reveal>
      </section>

      <section id="ideology" className="py-20 px-5">
        <Reveal anim="flipx"><h2 className="text-4xl sm:text-6xl text-red text-center">Our ideology</h2></Reveal>
        <Line className="mt-8 mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((b, i) => (
              <Reveal key={b.text} anim="rise" delay={0.12 * i}>
                <Polaroid swing pin="peg" className="!pb-3 h-full"><p className="display text-lg text-center py-6">{b.text}</p></Polaroid>
              </Reveal>
            ))}
          </div>
        </Line>
      </section>

      <Reveal anim="pop"><Remote /></Reveal>
      <Reveal anim="right"><Criminals /></Reveal>
      <Reveal anim="flip"><License /></Reveal>

      <section id="rules" className="py-20 px-5 bg-butter">
        <Reveal anim="wipe"><h2 className="text-4xl sm:text-6xl text-red text-center">Our very official, unofficial rules</h2></Reveal>
        <Line className="mt-8 mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map(([t, b], n) => (
              <Reveal key={t} anim="drop" delay={0.1 * n}>
                <Polaroid swing pin="peg" className="!pb-4 h-full"><span className="display text-blue">Rule {n + 1}</span><h3 className="display text-xl text-red">{t}</h3><p className="text-sm">{b}</p></Polaroid>
              </Reveal>
            ))}
          </div>
        </Line>
      </section>

      <section id="services" className="py-20 px-5">
        <Reveal anim="zoom"><h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2></Reveal>
        <Line className="mt-8 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s, n) => (
              <Reveal key={s.key} anim={n % 2 ? "right" : "left"} delay={0.08 * n}>
                <Polaroid swing pin="peg" className="!pb-4">
                  <div className="p-3" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                  <figcaption className="mt-3 text-center"><span className="display text-lg text-red block">{s.name}</span><span className="text-sm">{s.line}</span></figcaption>
                </Polaroid>
              </Reveal>
            ))}
          </div>
        </Line>
      </section>

      <Reveal anim="flipx"><Contact /></Reveal>
      <footer className="bg-red text-paper text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm">© 2026</p></footer>
    </main>
  );
}
