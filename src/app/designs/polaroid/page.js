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

export const metadata = { title: "Sathvika | Design E: Polaroid Wall" };

const tints = ["bg-yellow", "bg-sky", "bg-butter", "bg-pink"];

// Design E: a cork-board feel. Founder photos are taped polaroids, ideology is sticky notes, services are polaroid cards.
export default function Polaroid() {
  const tape = <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow/80 border border-ink/20 rotate-2" aria-hidden="true" />;
  const ph = <g fill="#6a3a33" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>;
  return (
    <main className="soft bg-paper pt-24">
      <Nav />
      <section id="top" className="mx-auto max-w-6xl px-5 pt-10 pb-20 grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <p className="display text-red">Est. with a lot of coffee</p>
          <h1 className="text-6xl sm:text-8xl text-red leading-[0.95]">Hello,<br />we&apos;re Sathvika.</h1>
          <p className="mt-5 max-w-md">Pinned-up ideas, scribbled strategy and brands with a pulse. Come and have a look around the wall.</p>
          <a href="#contact" className="btn bg-red text-paper mt-6">Start a project</a>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {frames.map((f, i) => (
            <figure key={f.id} style={{ transform: `rotate(${f.rot}deg)` }} className="relative bg-white p-3 pb-10 shadow-[4px_6px_0_rgba(106,58,51,0.25)] border border-ink/20">
              {tape}
              <div className={`${tints[i]} p-2`}><WavyFrame id={`e-${f.id}`} color={f.color} src={f.src} label={f.label}>{ph}</WavyFrame></div>
              <figcaption className="absolute bottom-2 left-0 right-0 text-center text-sm italic">{["smiling", "laughing", "shocked", "winking"][i]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="founder" className="bg-sky py-16 px-5">
        <div className="mx-auto max-w-4xl bg-white p-8 sm:p-10 relative -rotate-1 shadow-[5px_7px_0_rgba(106,58,51,0.25)] grid sm:grid-cols-[1fr_auto] gap-6 items-center">
          {tape}
          <div><h2 className="text-4xl text-red">A note from the founder</h2>
            <p className="mt-3 text-lg">Hi, I&apos;m Sathvika. I mix strategy, design and a slightly unreasonable amount of coffee to build brands people remember.</p></div>
          <Mascot mood="wink" className="h-44 mx-auto" />
        </div>
      </section>

      <section id="ideology" className="py-20 px-5">
        <h2 className="text-4xl sm:text-6xl text-red text-center">Our ideology</h2>
        <div className="mt-10 mx-auto max-w-4xl grid sm:grid-cols-2 gap-8">
          {beliefs.map((b, i) => (
            <p key={b.text} className={`${tints[i]} display text-xl sm:text-2xl p-8 min-h-40 grid place-items-center text-center shadow-[4px_6px_0_rgba(106,58,51,0.25)] ${i % 2 ? "rotate-2" : "-rotate-2"}`}>{b.text}</p>
          ))}
        </div>
      </section>

      <Remote />
      <Criminals />
      <License />

      <section id="rules" className="py-20 px-5 bg-butter">
        <h2 className="text-4xl sm:text-6xl text-red text-center">Our very official, unofficial rules</h2>
        <ol className="mt-10 mx-auto max-w-2xl bg-white border border-ink/20 p-8 sm:p-10 shadow-[5px_7px_0_rgba(106,58,51,0.25)] space-y-4 list-decimal list-inside">
          {rules.map(([t, b]) => <li key={t}><strong className="display text-red">{t}</strong> {b}</li>)}
        </ol>
      </section>

      <section id="services" className="py-20 px-5">
        <h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2>
        <div className="mt-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, n) => (
            <figure key={s.key} className={`relative bg-white p-3 pb-6 border border-ink/20 shadow-[4px_6px_0_rgba(106,58,51,0.25)] ${n % 2 ? "rotate-2" : "-rotate-2"}`}>
              <div className="rounded-sm p-3" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
              <figcaption className="mt-3 text-center"><span className="display text-lg text-red block">{s.name}</span><span className="text-sm">{s.line}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Contact />
      <footer className="bg-red text-paper text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm">© 2026</p></footer>
    </main>
  );
}
