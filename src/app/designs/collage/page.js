import Nav from "@/components/Nav";
import ScrollBar from "@/components/ScrollBar";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import WavyFrame from "@/components/WavyFrame";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import CriminalsLine from "@/components/CriminalsLine";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { beliefs } from "@/components/Ideology";
import { rules } from "@/components/Rules";
import { services, icons } from "@/components/Services";

export const metadata = { title: "Sathvika | Style 3: Wavy Collage" };

const FOUNDER_PHOTO = "/founder/founder.svg";
const blobs = ["rounded-[60%_40%_55%_45%/50%_60%_40%_50%]", "rounded-[40%_60%_45%_55%/60%_40%_60%_40%]", "rounded-[55%_45%_60%_40%/45%_55%_45%_55%]", "rounded-[45%_55%_40%_60%/55%_45%_55%_45%]"];

// Style 3, Wavy Collage: full-width coloured bands with scalloped edges, cloud shapes and a wavy-framed photo. No boxes, no borders.
export default function Collage() {
  return (
    <main className="soft bg-butter pt-24 overflow-x-clip">
      <Nav /><ScrollBar />
      <div className="bg-yellow px-5 pt-10 pb-20" style={{ "--fill": "var(--butter)" }}>
        <HeroLayout
          className="mx-auto max-w-6xl"
          heading={<h1 className="text-4xl sm:text-6xl text-red leading-[1.05] md:pr-44">Meet Sathvika, the face<br />behind the chaos</h1>}
          button={<a href="#contact" className="btn bg-red text-paper text-sm !py-2">Start a project</a>}
          intro={<p className="max-w-sm">A creative agency for brands tired of beige. Bold ideas, real strategy, zero boring decks.</p>}
          photo={
            <div className="h-full grid place-items-center">
              <div className="w-full max-w-md"><WavyFrame id="c-founder" color="var(--red)" src={FOUNDER_PHOTO} label="Sathvika, founder of the agency" bumps={12} /></div>
            </div>
          }
          tile={<div className={`${blobs[0]} h-64 md:h-full md:min-h-[14rem] bg-paper grid place-items-center`}><Mascot mood="happy" className="h-44 md:h-52 bob" /></div>}
        />
      </div>

      <section id="founder" className="scallop-top bg-sky px-5 py-24" style={{ "--fill": "var(--sky)" }}>
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <Reveal anim="left">
            <h2 className="text-4xl sm:text-5xl text-red">Hi, I&apos;m Sathvika.</h2>
            <p className="mt-4 text-lg">I started this agency because brands deserve better than copy-paste creativity. I mix strategy, design and a slightly unreasonable amount of coffee. Small team, big ideas, and when you work with us, you work with me.</p>
          </Reveal>
          <Reveal anim="pop"><div className={`${blobs[1]} bg-yellow w-56 h-56 grid place-items-center mx-auto`}><Mascot mood="wink" steam={false} className="h-40" /></div></Reveal>
        </div>
      </section>

      <section id="ideology" className="scallop-top bg-paper px-5 py-24" style={{ "--fill": "var(--paper)" }}>
        <Reveal anim="zoom"><h2 className="text-4xl sm:text-6xl text-red text-center">Our ideology</h2></Reveal>
        <div className="mt-12 mx-auto max-w-4xl grid sm:grid-cols-2 gap-6">
          {beliefs.map((b, i) => (
            <Reveal key={b.text} anim="pop" delay={0.1 * i}>
              <p className={`${blobs[i]} ${["bg-yellow", "bg-sky", "bg-orange", "bg-blue"][i]} display text-xl sm:text-2xl p-10 min-h-44 grid place-items-center text-center`}>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="scallop-top" style={{ "--fill": "var(--blue)" }}><Reveal anim="right"><Remote /></Reveal></div>
      <div className="scallop-top" style={{ "--fill": "var(--ink)" }}><Reveal anim="flipx"><CriminalsLine /></Reveal></div>
      <div className="scallop-top" style={{ "--fill": "var(--yellow)" }}><Reveal anim="zoom"><License /></Reveal></div>

      <section id="rules" className="scallop-top bg-sky px-5 py-24" style={{ "--fill": "var(--sky)" }}>
        <Reveal anim="wipe"><h2 className="text-3xl sm:text-5xl text-red text-center">Our very official, unofficial rules</h2></Reveal>
        <div className="mt-12 mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {rules.map(([t, b], n) => (
            <Reveal key={t} anim="rise" delay={0.08 * n}>
              <div className="flex gap-4 items-start">
                <div className="w-20 shrink-0 -mt-1"><WavyFrame id={`r${n}`} color={["var(--red)", "var(--yellow)", "var(--orange)", "var(--blue)", "var(--red)", "var(--yellow)"][n]} bumps={9}><rect width="100" height="100" fill="#f8efdc" /><text x="50" y="66" textAnchor="middle" fontSize="44" fontWeight="700" fill="#cd4437" fontFamily="sans-serif">{n + 1}</text></WavyFrame></div>
                <div><h3 className="display text-xl">{t}</h3><p className="text-sm mt-1">{b}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="scallop-top bg-butter px-5 py-24" style={{ "--fill": "var(--butter)" }}>
        <Reveal anim="drop"><h2 className="text-4xl sm:text-6xl text-red text-center">What we do</h2></Reveal>
        <div className="mt-12 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, n) => (
            <Reveal key={s.key} anim="rise" delay={0.08 * n}>
              <article className={`${blobs[n % 4]} p-8 pb-10 text-center h-full`} style={{ background: s.color }}>
                <div className="bg-paper rounded-full w-24 h-24 mx-auto p-3"><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                <h3 className="display text-lg mt-4">{s.name}</h3><p className="text-sm">{s.line}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="scallop-top" style={{ "--fill": "var(--orange)" }}><Reveal anim="wipe"><Contact /></Reveal></div>
      <footer className="scallop-top bg-red text-paper text-center py-10" style={{ "--fill": "var(--red)" }}>
        <p className="display text-5xl">Sathvika</p><p className="mt-2 text-sm">More ideas. More Sathvika. © 2026</p>
      </footer>
    </main>
  );
}
