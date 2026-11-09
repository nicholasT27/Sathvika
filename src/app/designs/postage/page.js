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

export const metadata = { title: "Sathvika | Style 2: Postage Stamp" };

const FOUNDER_PHOTO = "/founder/founder.svg";
const airmail = "repeating-linear-gradient(135deg, #cd4437 0 16px, #f8efdc 16px 26px, #86b6cf 26px 42px, #f8efdc 42px 52px)";

// A round postmark that sits on top of things, like a stamp from the post office.
function Postmark({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={`w-28 h-28 ${className}`} aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="none" stroke="#cd4437" strokeWidth="3" opacity="0.75" />
      <circle cx="60" cy="60" r="38" fill="none" stroke="#cd4437" strokeWidth="2" opacity="0.75" />
      <path id="pm" d="M16 60 a44 44 0 0 1 88 0" fill="none" />
      <text fontSize="11" fill="#cd4437" opacity="0.85" fontFamily="sans-serif" fontWeight="700" letterSpacing="2"><textPath href="#pm" startOffset="50%" textAnchor="middle">SATHVIKA · POSTED</textPath></text>
      <text x="60" y="66" textAnchor="middle" fontSize="12" fill="#cd4437" opacity="0.85" fontFamily="sans-serif" fontWeight="700">2026</text>
      <path d="M20 84 q10 -8 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#cd4437" strokeWidth="2.5" opacity="0.75" />
    </svg>
  );
}

// Style 2, Postage Stamp: an airmail-striped envelope edge, perforated stamps, tickets and lined letter paper.
export default function Postage() {
  const ticket = "relative rounded-md p-6 pl-10 border-2 border-dashed border-ink/40";
  return (
    <main className="soft bg-sky p-3 pt-24 sm:p-6 sm:pt-28 overflow-x-clip">
      <Nav /><ScrollBar />
      <div className="mx-auto max-w-5xl p-3 sm:p-4 rounded-sm" style={{ backgroundImage: airmail }}>
        <div className="bg-paper p-4 sm:p-8 space-y-16">
          <HeroLayout
            className="stamp !p-6 sm:!p-9"
            heading={<h1 className="text-4xl sm:text-5xl leading-[1.1] text-red md:pr-44" style={{ "--c": "var(--yellow)" }}>Meet Sathvika, the face<br />behind the chaos</h1>}
            button={<a href="#contact" className="btn bg-red text-paper text-sm !py-2">Start a project</a>}
            intro={<p className="max-w-sm text-sm">Special delivery: a creative agency for brands tired of beige. Bold ideas, real strategy, zero boring decks.</p>}
            photo={
              <div className="relative h-full">
                <div role="img" aria-label="Sathvika, founder of the agency" className="h-80 md:h-full md:min-h-[26rem] bg-paper bg-cover bg-center border-[6px] border-paper outline outline-2 outline-red/60 outline-offset-[-14px]" style={{ backgroundImage: `url(${FOUNDER_PHOTO})` }} />
                <Postmark className="absolute -bottom-8 -left-8 -rotate-12" />
              </div>
            }
            tile={<div className="h-64 md:h-full md:min-h-[14rem] bg-paper grid place-items-center outline outline-2 outline-dashed outline-red/50 outline-offset-[-10px]"><Mascot mood="happy" className="h-44 md:h-52 bob" /></div>}
          />
          <style>{`#top{--c:var(--yellow)}`}</style>

          <section id="founder">
            <Reveal anim="flipx">
              <div className="relative p-6 sm:p-10 border border-ink/20 bg-white" style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, #86b6cf66 31px 32px)" }}>
                <div className="stamp absolute top-4 right-4 w-24 !p-2 hidden sm:block" style={{ "--c": "var(--blue)" }}><Mascot mood="wink" steam={false} className="h-20 mx-auto" /></div>
                <p className="display text-red text-2xl">Dear friend,</p>
                <p className="mt-3 text-lg max-w-xl leading-8">I&apos;m Sathvika. I started this agency because brands deserve better than copy-paste creativity. I mix strategy, design and a slightly unreasonable amount of coffee. Small team, big ideas, and when you work with us, you work with me.</p>
                <p className="mt-3 italic">Yours creatively, Sathvika</p>
                <p className="mt-3 text-sm">P.S. Ask me about my coffee order. I will talk for hours.</p>
              </div>
            </Reveal>
          </section>

          <section id="ideology">
            <Reveal anim="zoom"><h2 className="text-3xl sm:text-5xl text-center text-red">Our ideology</h2></Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {beliefs.map((b, i) => (
                <Reveal key={b.text} anim={i % 2 ? "right" : "left"} delay={0.1 * i}>
                  <div className={`${ticket} ${["bg-yellow", "bg-sky", "bg-butter", "bg-orange"][i]}`}>
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-paper" aria-hidden="true" />
                    <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-paper" aria-hidden="true" />
                    <p className="text-xs tracking-[0.25em] uppercase opacity-70">Admit one · No. 0{i + 1}</p>
                    <p className="display text-xl sm:text-2xl mt-1">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal anim="pop"><div className="stamp !p-4" style={{ "--c": "var(--blue)" }}><div className="overflow-hidden"><Remote /></div></div></Reveal>
          <Reveal anim="flipx"><div className="stamp !p-4" style={{ "--c": "var(--ink)" }}><div className="overflow-hidden"><CriminalsLine /></div></div></Reveal>
          <Reveal anim="rise"><div className="stamp !p-4" style={{ "--c": "var(--yellow)" }}><div className="overflow-hidden"><License /></div></div></Reveal>

          <section id="rules">
            <Reveal anim="wipe"><h2 className="text-3xl sm:text-5xl text-center text-red">Our very official, unofficial rules</h2></Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {rules.map(([t, b], n) => (
                <Reveal key={t} anim="rise" delay={0.08 * n}>
                  <div className="border-[3px] border-dashed border-red bg-butter p-4 flex gap-4 items-center h-full">
                    <span className="display text-5xl text-red/80">{String(n + 1).padStart(2, "0")}</span>
                    <div><h3 className="display text-lg">{t}</h3><p className="text-sm">{b}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="services">
            <Reveal anim="drop"><h2 className="text-3xl sm:text-5xl text-center text-red">Our stamp collection</h2></Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((s, n) => (
                <Reveal key={s.key} anim="flip" delay={0.08 * n}>
                  <article className={`stamp ${n % 2 ? "rotate-1" : "-rotate-1"}`} style={{ "--c": s.color }}>
                    <div className="bg-paper p-1"><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                    <h3 className="display text-lg mt-2">{s.name}</h3><p className="text-xs sm:text-sm">{s.line}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal anim="wipe"><div className="stamp !p-4" style={{ "--c": "var(--orange)" }}><div className="overflow-hidden"><Contact /></div></div></Reveal>

          <footer className="text-center text-sm border-t-2 border-dashed border-ink/40 pt-6">
            <p className="display text-3xl text-red">Sathvika</p>
            <p className="mt-1">Return address: wherever the coffee is. © 2026</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
