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

export const metadata = { title: "Sathvika | Design E1: Polaroid Wall" };

const tints = ["bg-yellow", "bg-sky", "bg-butter", "bg-pink"];
const moods = ["smiling", "laughing", "shocked", "winking"];

// Design E1: Polaroid Wall. Taped polaroids, sticky notes and photo cards, each section entering in its own way as you scroll.
export default function Polaroid1() {
  const ph = <g fill="#6a3a33" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>;
  const shadow = "shadow-[4px_6px_0_rgba(106,58,51,0.25)]";
  return (
    <main className="soft bg-paper pt-24 overflow-x-clip">
      <Nav /><ScrollBar />
      <section id="top" className="mx-auto max-w-6xl px-5 pt-10 pb-20 grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <Reveal anim="left">
          <p className="display text-red">Est. with a lot of coffee</p>
          <h1 className="text-6xl sm:text-8xl text-red leading-[0.95]">Hello,<br />we&apos;re Sathvika.</h1>
          <p className="mt-5 max-w-md">Pinned-up ideas, scribbled strategy and brands with a pulse. Come and have a look around the wall.</p>
          <a href="#contact" className="btn bg-red text-paper mt-6">Start a project</a>
        </Reveal>
        <div className="grid grid-cols-2 gap-6">
          {frames.map((f, i) => (
            <Reveal key={f.id} anim="drop" delay={0.15 * i}>
              <Polaroid rot={f.rot} caption={moods[i]}>
                <div className={`${tints[i]} p-2`}><WavyFrame id={`e1-${f.id}`} color={f.color} src={f.src} label={f.label}>{ph}</WavyFrame></div>
              </Polaroid>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="founder" className="bg-sky py-16 px-5">
        <Reveal anim="flipx">
          <Polaroid rot={-1} pin="tape" className="mx-auto max-w-4xl !p-8 sm:!p-10 !pb-8 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div><h2 className="text-4xl text-red">A note from the founder</h2>
              <p className="mt-3 text-lg">Hi, I&apos;m Sathvika. I mix strategy, design and a slightly unreasonable amount of coffee to build brands people remember.</p></div>
            <Mascot mood="wink" className="h-44 mx-auto" />
          </Polaroid>
        </Reveal>
      </section>

      <section id="ideology" className="py-20 px-5">
        <Reveal anim="zoom"><h2 className="text-4xl sm:text-6xl text-red text-center">Our ideology</h2></Reveal>
        <div className="mt-10 mx-auto max-w-4xl grid sm:grid-cols-2 gap-8">
          {beliefs.map((b, i) => (
            <Reveal key={b.text} anim="pop" delay={0.12 * i}>
              <p className={`${tints[i]} display text-xl sm:text-2xl p-8 min-h-40 grid place-items-center text-center ${shadow} ${i % 2 ? "rotate-2" : "-rotate-2"}`}>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal anim="right"><Remote /></Reveal>
      <Reveal anim="flip"><Criminals /></Reveal>
      <Reveal anim="zoom"><License /></Reveal>

      <section id="rules" className="py-20 px-5 bg-butter">
        <h2 className="text-4xl sm:text-6xl text-red text-center">Our very official, unofficial rules</h2>
        <div className="mt-10 mx-auto max-w-2xl bg-white border border-ink/20 p-8 sm:p-10 shadow-[5px_7px_0_rgba(106,58,51,0.25)] space-y-4">
          {rules.map(([t, b], n) => (
            <Reveal key={t} anim="wipe" delay={0.1 * n}><p><strong className="display text-red">{n + 1}. {t}</strong> {b}</p></Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 px-5">
        <Reveal anim="drop"><h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2></Reveal>
        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, n) => (
            <Reveal key={s.key} anim="rise" delay={0.1 * (n % 3)}>
              <Polaroid rot={n % 2 ? 2 : -2} className="!pb-6">
                <div className="p-3" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                <figcaption className="mt-3 text-center"><span className="display text-lg text-red block">{s.name}</span><span className="text-sm">{s.line}</span></figcaption>
              </Polaroid>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal anim="wipe"><Contact /></Reveal>
      <footer className="bg-red text-paper text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm">© 2026</p></footer>
    </main>
  );
}
