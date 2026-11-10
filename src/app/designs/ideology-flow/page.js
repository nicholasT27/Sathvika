import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import { RibbonStack, Stage, Deck } from "@/components/IdeologyVariants";

export const metadata = { title: "Sathvika | Ideology designs after the ribbon handover" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

const heading = { fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 };

// The founder section and the red ribbon from flow design C, repeated above each ideology design so the match is easy to judge.
function Lead() {
  return (
    <>
      <section id="founder" className="relative px-5 pt-20 pb-24 bg-butter">
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1.2fr_0.9fr] gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 style={heading} className="text-4xl sm:text-6xl text-red">Hi, I&apos;m Sathvika.</h2>
            <p className="mt-6 text-lg">Your newest brand partner and favourite part of the marketing process. I started this agency because brands deserve better than copy-paste creativity.</p>
            <p className="mt-3 text-lg">I combine strategy, design and performance thinking, with a slightly unreasonable amount of coffee. We&apos;re a small team on purpose, so when you work with us, you work with me.</p>
          </div>
          <div className="order-1 md:order-2"><div role="img" aria-label="A creative team planning a campaign" className="aspect-[4/5] rounded-t-[999px] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} /></div>
        </div>
      </section>
      <div className="relative z-10 -my-9 sm:-my-12 -rotate-2 bg-red text-paper border-y-[3px] border-ink overflow-hidden shadow-[0_10px_0_rgba(106,58,51,0.25)] w-[104%] -ml-[2%]">
        <div className="marquee py-3 sm:py-4 display text-xl sm:text-3xl">
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className="mx-6">So here&apos;s what we believe <span className="text-yellow">✺</span></span>)}
        </div>
      </div>
    </>
  );
}

// Three distinctive ideology designs, each placed under the founder section and red ribbon.
export default function IdeologyFlow() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* 1: slanted ribbons on thick blue checks, the same visual language as the red ribbon above */}
      <Label>Ideology after ribbon · 1 · Ribbon stack</Label>
      <ComboSection start="blue" switcher={false}>
        <Lead />
        <section id="ideology" className="checks px-4 sm:px-14 pt-32 pb-28 overflow-hidden"><Reveal anim="rise"><RibbonStack /></Reveal></section>
      </ComboSection>

      {/* 2: calm solid sky stage with giant typography and an arch photo window, thin checks bands top and bottom */}
      <Label>Ideology after ribbon · 2 · Stage</Label>
      <ComboSection start="blue" switcher={false}>
        <Lead />
        <section id="ideology" className="bg-sky relative">
          <div className="checks h-8 sm:h-12 mt-8 sm:mt-10" aria-hidden="true" />
          <div className="px-5 sm:px-14 py-16 sm:py-24"><Reveal anim="rise"><Stage /></Reveal></div>
          <div className="checks h-8 sm:h-12" aria-hidden="true" />
        </section>
      </ComboSection>

      {/* 3: a deck of photo cards fanned on a butter background with checks side strips */}
      <Label>Ideology after ribbon · 3 · Card deck</Label>
      <ComboSection start="blue" switcher={false}>
        <Lead />
        <section id="ideology" className="relative bg-yellow px-5 pt-28 pb-24 overflow-hidden">
          <div className="checks absolute left-0 top-0 bottom-0 w-5 sm:w-14" aria-hidden="true" />
          <div className="checks absolute right-0 top-0 bottom-0 w-5 sm:w-14" aria-hidden="true" />
          <Reveal anim="rise"><Deck /></Reveal>
        </section>
      </ComboSection>
    </main>
  );
}
