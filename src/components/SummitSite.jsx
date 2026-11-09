import ScrollBar from "./ScrollBar";
import Reveal from "./Reveal";
import RemoteSection from "./RemoteSection";
import CriminalsLine from "./CriminalsLine";
import License from "./License";
import Contact from "./Contact";
import { Icon } from "./Icons";
import { rules } from "./Rules";
import { FanHero, CascadeHero, QuadHero, RowHero } from "./HeroVariants";
import { beliefs, services, tickerWords } from "@/data/content";

// Two looks for the same layout. "calm" is quiet and elegant; "bold" is louder and more playful.
const themes = {
  calm: {
    page: "bg-paper", bar: "bg-yellow text-ink", head: "font-semibold uppercase tracking-[0.14em] text-red",
    bandL: "bg-blue", bandR: "bg-butter", ticker: "bg-paper border-y border-ink/30", photo: "rounded-sm",
    pat: { "--c1": "var(--yellow)", "--c2": "var(--paper)", "--size": "36px" }, logo: "font-semibold tracking-[0.3em] uppercase",
  },
  bold: {
    page: "bg-butter", bar: "bg-red text-paper", head: "display text-red",
    bandL: "bg-yellow", bandR: "bg-sky", ticker: "bg-ink text-butter", photo: "rounded-3xl",
    pat: { "--c1": "var(--orange)", "--c2": "var(--paper)", "--size": "44px" }, logo: "display",
  },
};

const nav = [["About", "#founder"], ["Ideology", "#ideology"], ["Remote", "#remote"], ["Criminals", "#criminals"], ["Rules", "#rules"], ["Services", "#services"], ["Contact", "#contact"]];
const small = "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em]";

// A round stamp with curved text, like the little circular seal on the reference.
function Seal({ text, className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={`w-28 h-28 ${className}`} aria-hidden="true">
      <path id="seal" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" fill="none" />
      <text fontSize="11.5" fontWeight="700" letterSpacing="3" fill="currentColor" fontFamily="sans-serif"><textPath href="#seal">{text}</textPath></text>
      <Icon name="ads" size="big" />
    </svg>
  );
}

// The whole Summit-style page. Pass theme="calm" or "bold", and hero="fan", "cascade", "quad" or "row".
export default function SummitSite({ theme = "calm", hero = "fan" }) {
  const t = themes[theme];
  const photo = `${t.photo} bg-cover bg-center`;
  // The calm look uses the lighter body font for headings; the bold look keeps the chunky heading font.
  const hs = theme === "calm" ? { fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 } : undefined;
  return (
    <main className={`soft ${t.page} overflow-x-clip`}>
      <ScrollBar />

      {/* Top announcement bar */}
      <a href="#contact" className={`${t.bar} ${small} block text-center py-2`}>Now booking projects for 2026 · Start yours →</a>

      {/* Centred logo with a thin second row of links */}
      <header className="px-5">
        <div className="mx-auto max-w-6xl grid grid-cols-[1fr_auto_1fr] items-center py-6 gap-4">
          <span className={`${small} hidden sm:block`}>Remote · Worldwide</span>
          <a href="#top" className={`text-center text-3xl sm:text-4xl text-ink ${t.logo}`}>Sathvika<span className="text-red">*</span><span className="block text-[10px] tracking-[0.4em] uppercase font-semibold mt-1 opacity-70">Creative marketing agency</span></a>
          <a href="#contact" className={`${small} justify-self-end inline-flex items-center gap-2 underline underline-offset-4`}><Icon name="email" size="small" className="w-5 h-5" />Start a project</a>
        </div>
        <nav className="border-y border-ink/30 -mx-5 px-5 overflow-x-auto" aria-label="Sections">
          <ul className="mx-auto max-w-6xl flex gap-8 sm:justify-between py-3 min-w-max sm:min-w-0">
            {nav.map(([n, h]) => <li key={n}><a href={h} className={`${small} hover:text-red`}>{n}</a></li>)}
          </ul>
        </nav>
      </header>

      {/* 1. Hero with the founder photos (design chosen by the "hero" prop) */}
      {hero === "cascade" ? <CascadeHero t={{ ...t, hs }} /> : hero === "quad" ? <QuadHero /> : hero === "row" ? <RowHero t={{ ...t, hs }} /> : <FanHero t={{ ...t, hs }} />}

      {/* Ticker */}
      <div className={`${t.ticker} overflow-hidden`}>
        <div className="marquee py-3">{[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => <span key={i} className={`${small} mx-6`}>{w} <span className="text-red">·</span></span>)}</div>
      </div>

      {/* 2. Introduction of the founder: arch photo, heading overlapping it, pattern borders */}
      <section id="founder" className="relative px-5 py-24">
        <div className="checks absolute left-0 top-0 bottom-0 w-6 sm:w-12" style={t.pat} aria-hidden="true" />
        <div className="checks absolute right-0 top-0 bottom-0 w-6 sm:w-12" style={t.pat} aria-hidden="true" />
        <div className="mx-auto max-w-5xl grid md:grid-cols-[0.9fr_1.2fr] gap-10 items-center">
          <Reveal anim="flip">
            <div role="img" aria-label="A creative team planning a campaign" className="aspect-[4/5] rounded-t-[999px] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} />
          </Reveal>
          <Reveal anim="left">
            <h2 style={hs} className={`text-4xl sm:text-6xl md:-ml-28 relative ${t.head}`}>Hi, I&apos;m Sathvika.</h2>
            <p className="mt-6 text-lg">Your newest brand partner and favourite part of the marketing process. I started this agency because brands deserve better than copy-paste creativity.</p>
            <p className="mt-3 text-lg">I combine strategy, design and performance thinking, with a slightly unreasonable amount of coffee. We&apos;re a small team on purpose, so when you work with us, you work with me.</p>
            <a href="#contact" className={`${small} inline-block mt-6 underline underline-offset-8`}>Work with us</a>
          </Reveal>
        </div>
      </section>

      {/* 3. Our ideology: two-tone split panel */}
      <section id="ideology" className="grid md:grid-cols-2">
        <div className={`${t.bandL} px-6 sm:px-14 py-20 flex items-center`}>
          <Reveal anim="left">
            <h2 style={hs} className={`text-3xl sm:text-5xl leading-[1.2] ${t.head} ${theme === "bold" ? "!text-ink" : "!text-ink"}`}>Our ideology.<br />Ideas are in<br />the details.</h2>
            <p className="mt-6 max-w-sm">Four beliefs sit behind every campaign, website and brand we make. We&apos;d love to share how they shape your next project.</p>
            <p className="mt-6 flex gap-8"><a href="#services" className={`${small} underline underline-offset-8`}>Services</a><a href="#rules" className={`${small} underline underline-offset-8`}>Rules</a></p>
          </Reveal>
        </div>
        <div className={`${t.bandR} relative px-6 sm:px-14 py-20`}>
          <Seal text="MADE WITH COFFEE · CREATIVE MARKETING · EST 2026 ·" className="absolute right-6 top-6 text-red hidden sm:block rotate-12" />
          <ol className="divide-y divide-ink/20 mt-4 sm:mt-14">
            {beliefs.map(([h, d], i) => (
              <Reveal key={h} anim="right" delay={0.1 * i}>
                <li className="py-5"><h3 style={hs} className={`${theme === "bold" ? "display text-xl" : "font-semibold uppercase tracking-[0.1em]"} text-ink`}>{h}</h3><p className="mt-1 text-sm">{d}</p></li>
              </Reveal>
            ))}
          </ol>
        </div>
        <span className="hidden md:grid absolute left-1/2 -translate-x-1/2 mt-24 w-20 h-20 rounded-full bg-paper place-items-center text-red shadow-md"><Icon name="ads" className="w-11 h-11" /></span>
      </section>

      {/* 4. Remote */}
      <RemoteSection bg={theme === "calm" ? "bg-sky" : "bg-blue"} headStyle={hs} headClass={t.head} />

      {/* 5 and 6. Creative criminals and the creative licence */}
      <Reveal anim="flipx"><CriminalsLine /></Reveal>
      <Reveal anim="rise"><License /></Reveal>

      {/* 7. Our very official, unofficial rules */}
      <section id="rules" className="relative px-5 py-24">
        <div className="checks absolute left-0 right-0 top-0 h-5" style={t.pat} aria-hidden="true" />
        <div className="mx-auto max-w-5xl pt-4">
          <Reveal anim="wipe"><h2 style={hs} className={`text-3xl sm:text-5xl text-center ${t.head}`}>Our very official, unofficial rules</h2></Reveal>
          <ol className="mt-12 grid md:grid-cols-2 gap-x-14">
            {rules.map(([h, b], n) => (
              <Reveal key={h} anim="rise" delay={0.06 * n}>
                <li className="flex gap-5 py-5 border-b border-ink/25"><span className="display text-3xl text-red/70 w-10 shrink-0">{String(n + 1).padStart(2, "0")}</span><div><h3 style={hs} className={`${theme === "bold" ? "display text-lg" : "font-semibold uppercase tracking-[0.1em]"}`}>{h}</h3><p className="mt-1 text-sm">{b}</p></div></li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Services: editorial list with a photo */}
      <section id="services" className={`${t.bandL} px-5 py-24`}>
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[0.9fr_1.3fr] gap-12">
          <Reveal anim="left">
            <h2 style={hs} className={`text-3xl sm:text-5xl !text-ink ${t.head}`}>Services</h2>
            <p className="mt-4 max-w-sm">Everything your brand needs to grow, from the first logo to the last conversion.</p>
            <div role="img" aria-label="A bright open-plan workspace with plants and a long window" className={`${photo} mt-8 aspect-[3/2]`} style={{ backgroundImage: "url(/images/window-desk.jpg)" }} />
          </Reveal>
          <ul className="divide-y divide-ink/25">
            {services.map((s, n) => (
              <Reveal key={s.name} anim="right" delay={0.07 * n}>
                <li className="py-5 flex items-center gap-5 group">
                  <span className="w-14 h-14 shrink-0 rounded-full bg-paper grid place-items-center text-red"><Icon name={s.icon} className="w-8 h-8" /></span>
                  <div className="flex-1"><h3 style={hs} className={`${theme === "bold" ? "display text-xl" : "font-semibold uppercase tracking-[0.12em]"} text-ink`}>{s.name}</h3><p className="text-sm mt-0.5">{s.line}</p></div>
                  <a href="#contact" className="text-xl group-hover:translate-x-1 transition" aria-label={`Ask about ${s.name}`}>→</a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Contact */}
      <Reveal anim="wipe"><Contact /></Reveal>

      <footer className="relative px-5 pt-16 pb-10 text-center">
        <div className="checks absolute left-0 right-0 top-0 h-5" style={t.pat} aria-hidden="true" />
        <p className={`text-3xl text-ink ${t.logo}`}>Sathvika<span className="text-red">*</span></p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2">{nav.map(([n, h]) => <li key={n}><a href={h} className={small}>{n}</a></li>)}</ul>
        <p className="mt-8 text-xs opacity-70">© 2026 Sathvika. All rights reserved.</p>
      </footer>
    </main>
  );
}
