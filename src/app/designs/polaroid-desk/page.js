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

export const metadata = { title: "Sathvika | Design E3: Photo Desk" };

const spreads = [["120px", "80px"], ["-120px", "80px"], ["120px", "-80px"], ["-120px", "-80px"]];

// Design E3: a pink photo desk. Photos spill out of a pile, ideas are torn paper strips, and service cards flip over on hover.
export default function Desk() {
  const ph = <g fill="#6a3a33" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>;
  return (
    <main className="soft bg-pink pt-24 overflow-x-clip">
      <Nav /><ScrollBar />
      <section id="top" className="mx-auto max-w-6xl px-5 pt-8 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[28rem] sm:h-[32rem]">
          {frames.map((f, i) => (
            <Reveal key={f.id} anim="spread" delay={0.12 * i} className="absolute w-[46%]"
              style={{ left: `${[0, 50, 4, 52][i]}%`, top: `${[0, 6, 48, 50][i]}%`, "--sx": spreads[i][0], "--sy": spreads[i][1] }}>
              <Polaroid rot={[-8, 6, 5, -5][i]} caption={["smiling", "laughing", "shocked", "winking"][i]}>
                <WavyFrame id={`k-${f.id}`} color={f.color} src={f.src} label={f.label}>{ph}</WavyFrame>
              </Polaroid>
            </Reveal>
          ))}
        </div>
        <Reveal anim="right">
          <h1 className="text-6xl sm:text-8xl text-red leading-[0.95]">Sathvika,<br />spread out.</h1>
          <p className="mt-5 max-w-md">Photos, notes and half-finished coffee. Dig through the desk and see how we think.</p>
          <a href="#contact" className="btn bg-red text-paper mt-6">Start a project</a>
        </Reveal>
      </section>

      <section id="founder" className="bg-paper py-20 px-5">
        <Reveal anim="flip">
          <div className="mx-auto max-w-4xl bg-yellow border border-ink/20 rounded-3xl p-8 sm:p-10 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div><h2 className="text-4xl text-red">Hi, I&apos;m Sathvika.</h2><p className="mt-3 text-lg">Founder, caffeine enthusiast, and the person who will tell you your logo needs more personality.</p></div>
            <Mascot mood="smug" className="h-44 mx-auto" />
          </div>
        </Reveal>
      </section>

      <section id="ideology" className="py-20 px-5">
        <Reveal anim="left"><h2 className="text-4xl sm:text-6xl text-red text-center">Our ideology</h2></Reveal>
        <div className="mt-10 mx-auto max-w-3xl space-y-4">
          {beliefs.map((b, i) => (
            <Reveal key={b.text} anim="wipe" delay={0.1 * i}>
              <p className={`${["bg-paper", "bg-yellow", "bg-sky", "bg-butter"][i]} display text-xl sm:text-3xl px-6 py-5 border border-ink/20 shadow-[3px_4px_0_rgba(106,58,51,0.2)] ${i % 2 ? "rotate-1 ml-6" : "-rotate-1 mr-6"}`}>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal anim="zoom"><Remote /></Reveal>
      <Reveal anim="rise"><Criminals /></Reveal>
      <Reveal anim="pop"><License /></Reveal>

      <section id="rules" className="py-20 px-5">
        <Reveal anim="flipx"><h2 className="text-4xl sm:text-6xl text-red text-center">Our very official, unofficial rules</h2></Reveal>
        <div className="mt-10 mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map(([t, b], n) => (
            <Reveal key={t} anim={["drop", "rise", "pop"][n % 3]} delay={0.08 * n}>
              <article className="bg-paper border border-ink/20 p-5 h-full shadow-[3px_4px_0_rgba(106,58,51,0.2)]" style={{ backgroundImage: "repeating-linear-gradient(transparent 0 27px, #86b6cf55 27px 28px)" }}>
                <span className="display text-red">Rule {n + 1}</span><h3 className="display text-xl">{t}</h3><p className="text-sm mt-1">{b}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 px-5 bg-butter">
        <Reveal anim="drop"><h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2></Reveal>
        <p className="text-center mt-2 text-sm">Hover (or tap) a card to flip it.</p>
        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, n) => (
            <Reveal key={s.key} anim="flip" delay={0.1 * n}>
              <div className="group h-64 [perspective:900px]" tabIndex={0}>
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 bg-white border border-ink/20 p-3 [backface-visibility:hidden] shadow-[3px_4px_0_rgba(106,58,51,0.2)]">
                    <div className="p-3" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                    <p className="display text-lg text-red text-center mt-2">{s.name}</p>
                  </div>
                  <div className="absolute inset-0 border border-ink/20 p-5 grid place-items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]" style={{ background: s.color }}>
                    <div><h3 className="display text-xl">{s.name}</h3><p className="mt-2 text-sm">{s.line}</p></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal anim="wipe"><Contact /></Reveal>
      <footer className="bg-red text-paper text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm">© 2026</p></footer>
    </main>
  );
}
