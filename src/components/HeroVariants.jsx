import Reveal from "./Reveal";
import WavyFrame from "./WavyFrame";
import { founderCards } from "@/data/founderCards";

const small = "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em]";

// Hero design 1, "Fan": photos on the left, text in the middle, four slanted framed founder photos fanned on the right.
export function FanHero({ t }) {
  const photo = `${t.photo} bg-cover bg-center`;
  return (
    <section id="top" className="px-5 pt-10 pb-12">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[0.65fr_1.1fr_1.25fr] gap-6 items-center">
        <Reveal anim="left" className="order-2 md:order-1">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div role="img" aria-label="Latte art on a cafe table with plants" className={`${photo} h-56 md:h-64 md:w-3/4`} style={{ backgroundImage: "url(/images/latte.jpg)" }} />
            <div role="img" aria-label="Social media apps on a phone" className={`${photo} h-56 md:h-48 md:-mr-6`} style={{ backgroundImage: "url(/images/social.jpg)" }} />
          </div>
        </Reveal>
        <Reveal anim="drop" className="order-1 md:order-2 text-center relative z-10 md:-mr-16">
          <p className={`${small} text-ink/70`}>Meet Sathvika · Founder · Many moods</p>
          <h1 style={t.hs} className={`mt-4 text-4xl sm:text-6xl leading-[1.15] ${t.head}`}>Thoughtfully<br />crafted<br />campaigns</h1>
          <p className="mt-5 max-w-sm mx-auto">Branding, performance marketing, websites and content for brands that want to be noticed.</p>
          <a href="#founder" className="btn bg-red text-paper mt-7 text-sm">Meet the founder</a>
        </Reveal>
        <div className="order-3 relative h-[31rem] sm:h-[35rem] md:h-[37rem]">
          {founderCards.map((c, i) => (
            <Reveal key={c.src} anim="drop" delay={0.14 * i} className="absolute w-[52%]" style={c.pos}>
              <figure className="relative" style={{ transform: `rotate(${c.rot}deg)` }}>
                {c.tape && <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-paper/80 border border-ink/10 z-10 rotate-3" aria-hidden="true" />}
                <div className="rounded-[1.5rem] p-2.5 shadow-[0_12px_28px_rgba(106,58,51,0.25)]" style={{ background: c.color }}>
                  <div role="img" aria-label={`Sathvika, founder of the agency (${c.label.toLowerCase()})`} className="aspect-[4/5] rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${c.src})` }} />
                  <figcaption className={`${small} text-center pt-2 pb-0.5 text-ink`}>{c.label}</figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hero design 2, "Cascade": the headline across the top, then four tall photos stepping down a staircase, overlapping and slanted.
export function CascadeHero({ t }) {
  const drop = ["md:mt-0", "md:mt-14", "md:mt-4", "md:mt-16"];
  return (
    <section id="top" className="px-5 pt-12 pb-16 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal anim="drop">
          <p className={`${small} text-ink/70`}>Meet Sathvika · Founder · Many moods</p>
          <h1 style={t.hs} className={`mt-4 text-4xl sm:text-6xl leading-[1.15] ${t.head}`}>Thoughtfully crafted<br />campaigns</h1>
          <p className="mt-4 max-w-md mx-auto">Branding, performance marketing, websites and content for brands that want to be noticed.</p>
        </Reveal>
      </div>
      <div className="mx-auto max-w-5xl mt-12 grid grid-cols-2 md:flex md:justify-center gap-5 md:gap-0">
        {founderCards.map((c, i) => (
          <Reveal key={c.src} anim={i % 2 ? "rise" : "drop"} delay={0.13 * i} className={`md:w-1/4 md:-ml-5 first:md:ml-0 ${drop[i]}`}>
            <figure className="relative" style={{ transform: `rotate(${[-6, 4, -3, 6][i]}deg)` }}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 z-10 rotate-2 opacity-90" style={{ background: c.color }} aria-hidden="true" />
              <div className="p-2.5 shadow-[0_14px_30px_rgba(106,58,51,0.28)]" style={{ background: c.color }}>
                <div role="img" aria-label={`Sathvika, founder of the agency (${c.label.toLowerCase()})`} className="aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: `url(${c.src})` }} />
              </div>
              <figcaption className={`${small} absolute -right-1 top-6 origin-top-left rotate-90 text-ink/80 hidden md:block`}>{c.label}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal anim="rise" delay={0.4} className="text-center mt-14"><a href="#founder" className="btn bg-red text-paper text-sm">Meet the founder</a></Reveal>
    </section>
  );
}

// Hero design 3, "Quad": the hero is four pastel squares (blue, mint, pink, yellow), each holding one founder photo in a flower-shaped frame, with a cream headline card in the middle.
export function QuadHero() {
  return (
    <section id="top" className="relative">
      <div className="grid grid-cols-2">
        {founderCards.map((c, i) => (
          <Reveal key={c.src} anim="zoom" delay={0.12 * i}>
            <div className="grid place-items-center py-8 sm:py-14 px-4 min-h-[14rem] sm:min-h-[22rem] md:min-h-[26rem]" style={{ background: c.color }}>
              <div className="relative w-[78%] max-w-[17rem]">
                <WavyFrame id={`quad-${i}`} color="#fff8e1" src={c.src} focus="xMidYMin" bumps={12} label={`Sathvika, founder of the agency (${c.label.toLowerCase()})`} className="drop-shadow-[0_10px_18px_rgba(106,58,51,0.22)]" />
                <span className={`${small} absolute -bottom-2 left-1/2 -translate-x-1/2 bg-paper px-3 py-1 rounded-full text-ink whitespace-nowrap`}>{c.label}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal anim="pop" className="px-5 py-10 md:py-0 md:absolute md:inset-0 md:pointer-events-none">
        <div className="md:h-full grid place-items-center">
        <div className="bg-paper rounded-3xl px-8 py-8 text-center max-w-md md:max-w-[22rem] mx-auto md:pointer-events-auto shadow-[0_18px_40px_rgba(106,58,51,0.25)]">
          <p className={`${small} text-ink/70`}>Meet Sathvika · Founder</p>
          <h1 className="mt-3 text-3xl sm:text-4xl leading-[1.15] text-red">Thoughtfully crafted campaigns</h1>
          <p className="mt-3 text-sm">Branding, performance marketing, websites and content for brands that want to be noticed.</p>
          <a href="#founder" className="btn bg-red text-paper mt-5 text-sm">Meet the founder</a>
        </div>
        </div>
      </Reveal>
    </section>
  );
}

// Hero design 4, "Row": headline top-left, button top-right, then four tall rounded cards in a row, each slightly tilted and lifting on hover.
export function RowHero({ t }) {
  return (
    <section id="top" className="px-5 pt-12 pb-14">
      <div className="mx-auto max-w-6xl">
        <Reveal anim="drop">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 style={t.hs} className={`text-4xl sm:text-6xl leading-[1.1] ${t.head}`}>Meet Sathvika,<br />the face behind<br />the chaos</h1>
            <a href="#contact" className="btn bg-red text-paper text-sm !py-2">Start a project</a>
          </div>
          <p className="mt-4 max-w-sm">Thoughtfully crafted campaigns, from branding to performance marketing, websites and content.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {founderCards.map((c, i) => (
            <Reveal key={c.src} anim="rise" delay={0.12 * i}>
              <figure className="group transition duration-300 hover:-translate-y-3 hover:!rotate-0" style={{ transform: `rotate(${[-2.5, 2, -1.5, 3][i]}deg)` }}>
                <div className="rounded-[1.75rem] p-3 shadow-[0_12px_26px_rgba(106,58,51,0.2)]" style={{ background: c.color }}>
                  <div role="img" aria-label={`Sathvika, founder of the agency (${c.label.toLowerCase()})`} className="aspect-[3/4] rounded-[1.25rem] bg-cover bg-center" style={{ backgroundImage: `url(${c.src})` }} />
                  <figcaption className={`${small} text-center pt-3 pb-1 text-ink`}>{c.label}</figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
