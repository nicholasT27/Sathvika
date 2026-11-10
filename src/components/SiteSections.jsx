import Reveal from "./Reveal";
import RemoteSection from "./RemoteSection";
import License from "./License";
import Contact from "./Contact";
import ComboSection from "./ComboSection";
import { FounderOnly } from "./FlowLead";
import { RowHero } from "./HeroVariants";
import { NightStage } from "./IdeologyStages";
import { LineupCriminals } from "./CriminalsDesigns";
import { BookServices } from "./ServiceDesigns";
import { rules } from "./Rules";
import { tickerWords, chapters } from "@/data/content";

export { chapters };

// Extra classes that make a section fill one screen with its content centred (used by the "scenes" layout).
const scene = "min-h-screen flex flex-col justify-center [&>*]:w-full";
const small = "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em]";

// Chapter 1: the headline and the four founder photos.
export function HeroSection() { return <RowHero t={{ photo: "rounded-3xl", head: "display text-red" }} />; }

// The slow banner of service names.
export function Ticker() {
  return <div className="bg-ink text-butter overflow-hidden"><div className="marquee py-3">{[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => <span key={i} className={`${small} mx-6`}>{w} <span className="text-yellow">·</span></span>)}</div></div>;
}

// Chapter 2: the founder introduction.
export function FounderSection({ full = false }) { return <FounderOnly bold className={full ? scene : ""} />; }

// Chapter 3: our ideology on the rotating stage. "tone" sets the band colour.
export function IdeologySection({ full = false, tone = "bg-[#22344f]" }) {
  return (
    <ComboSection start="blue" switcher={false}>
      <section id="ideology" className={`${tone} relative ${full ? "min-h-screen flex flex-col justify-between [&>*]:w-full" : ""}`}>
        <div className="checks h-8 sm:h-12" aria-hidden="true" />
        <div className="px-5 sm:px-14 py-16 sm:py-24 overflow-hidden my-auto"><Reveal anim="rise"><NightStage /></Reveal></div>
        <div className="checks h-8 sm:h-12" aria-hidden="true" />
      </section>
    </ComboSection>
  );
}

// Chapter 4: the Remote door.
export function RemoteChapter({ full = false, bg = "bg-sky" }) { return <RemoteSection bg={bg} className={full ? scene : ""} />; }

// Chapter 5: Creative Criminals police lineup.
export function CriminalsSection({ full = false }) {
  return <section id="criminals" className={`bg-[#2a1613] px-5 py-20 sm:py-28 overflow-hidden ${full ? scene : ""}`}><Reveal anim="rise"><LineupCriminals /></Reveal></section>;
}

// Chapter 6: the creative licence.
export function LicenceChapter({ full = false }) { return <License className={full ? scene : ""} />; }

// Chapter 7: our very official, unofficial rules.
export function RulesSection({ full = false, bg = "" }) {
  return (
    <section id="rules" className={`relative px-5 py-24 ${bg} ${full ? scene : ""}`}>
      <div className="mx-auto max-w-5xl">
        <Reveal anim="wipe"><h2 className="text-3xl sm:text-5xl text-center display text-red">Our very official, unofficial rules</h2></Reveal>
        <ol className="mt-12 grid md:grid-cols-2 gap-x-14">
          {rules.map(([h, b], n) => (
            <Reveal key={h} anim="rise" delay={0.06 * n}>
              <li className="flex gap-5 py-5 border-b border-ink/25"><span className="display text-3xl text-red/70 w-10 shrink-0">{String(n + 1).padStart(2, "0")}</span><div><h3 className="display text-lg">{h}</h3><p className="mt-1 text-sm">{b}</p></div></li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Chapter 8: the services book.
export function ServicesSection({ full = false, bg = "bg-yellow" }) {
  return <section id="services" className={`${bg} px-5 py-24 sm:py-28 ${full ? scene : ""}`}><Reveal anim="rise"><BookServices /></Reveal></section>;
}

// Chapter 9: the postcard contact.
export function ContactChapter({ full = false }) { return <Contact className={full ? scene : ""} />; }
