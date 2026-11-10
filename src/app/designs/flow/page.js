import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import IdeologyInteractive from "@/components/IdeologyInteractive";

export const metadata = { title: "Sathvika | Founder to ideology flow" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

const small = "text-xs font-semibold uppercase tracking-[0.28em]";
const heading = { fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 };

// The founder introduction text, shared by all three versions.
function FounderText() {
  return (
    <>
      <h2 style={heading} className="text-4xl sm:text-6xl text-red">Hi, I&apos;m Sathvika.</h2>
      <p className="mt-6 text-lg">Your newest brand partner and favourite part of the marketing process. I started this agency because brands deserve better than copy-paste creativity.</p>
      <p className="mt-3 text-lg">I combine strategy, design and performance thinking, with a slightly unreasonable amount of coffee. We&apos;re a small team on purpose, so when you work with us, you work with me.</p>
    </>
  );
}

const boxOuter = "bg-[#fffaf0] rounded-[2rem] border-[3px] border-ink/70 p-2 shadow-[0_20px_46px_rgba(106,58,51,0.3)]";

// Three ways to make the founder section and the ideology section feel like one story.
export default function Flow() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* A: same blue checks on the founder side bars, and the checks fade in underneath so there is no hard edge */}
      <Label>Flow · A · Checks fade in</Label>
      <ComboSection start="blue" switcher={false}>
        <section id="founder" className="relative px-5 pt-24 pb-10">
          <div className="checks absolute left-0 top-0 bottom-0 w-6 sm:w-12" aria-hidden="true" />
          <div className="checks absolute right-0 top-0 bottom-0 w-6 sm:w-12" aria-hidden="true" />
          <div className="mx-auto max-w-5xl grid md:grid-cols-[0.9fr_1.2fr] gap-10 items-center">
            <Reveal anim="flip"><div role="img" aria-label="A creative team planning a campaign" className="aspect-[4/5] rounded-t-[999px] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} /></Reveal>
            <Reveal anim="left"><FounderText /></Reveal>
          </div>
          <div className="checks absolute left-0 right-0 bottom-0 h-36 pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent, #000)", maskImage: "linear-gradient(to bottom, transparent, #000)" }} aria-hidden="true" />
        </section>
        <section id="ideology" className="checks px-4 sm:px-14 pt-10 pb-28 overflow-hidden"><Reveal anim="flip"><IdeologyInteractive /></Reveal></section>
      </ComboSection>

      {/* B: one continuous checks band holding two matching boxes, joined by a dashed path */}
      <Label>Flow · B · One band, two matching boxes</Label>
      <ComboSection start="blue" switcher={false}>
        <div className="checks px-4 sm:px-14 py-24 sm:py-28 overflow-hidden">
          <section id="founder">
            <Reveal anim="zoom">
              <div className={`mx-auto max-w-5xl ${boxOuter}`}>
                <div className="grid md:grid-cols-[0.85fr_1.2fr] rounded-[1.6rem] overflow-hidden border border-ink/25">
                  <div role="img" aria-label="A creative team planning a campaign" className="min-h-[18rem] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} />
                  <div className="bg-sky px-7 sm:px-12 py-12 sm:py-16"><FounderText /></div>
                </div>
              </div>
            </Reveal>
          </section>
          <div className="relative mx-auto h-24 sm:h-32 w-[3px] my-1" style={{ background: "repeating-linear-gradient(to bottom, var(--ink) 0 10px, transparent 10px 20px)" }} aria-hidden="true">
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-12 h-12 rounded-full bg-red text-paper grid place-items-center border-[3px] border-ink text-xl">↓</span>
          </div>
          <section id="ideology" className="pt-8"><Reveal anim="flip"><IdeologyInteractive /></Reveal></section>
        </div>
      </ComboSection>

      {/* C: a slanted ribbon strip hands over from the founder section to the ideology section, straddling the seam */}
      <Label>Flow · C · Ribbon handover</Label>
      <ComboSection start="blue" switcher={false}>
        <section id="founder" className="relative px-5 pt-24 pb-28 bg-butter">
          <div className="mx-auto max-w-5xl grid md:grid-cols-[1.2fr_0.9fr] gap-10 items-center">
            <Reveal anim="right" className="order-2 md:order-1"><FounderText /></Reveal>
            <Reveal anim="flip" className="order-1 md:order-2"><div role="img" aria-label="A creative team planning a campaign" className="aspect-[4/5] rounded-t-[999px] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} /></Reveal>
          </div>
        </section>
        <div className="relative z-10 -my-9 sm:-my-12 -rotate-2 bg-red text-paper border-y-[3px] border-ink overflow-hidden shadow-[0_10px_0_rgba(106,58,51,0.25)] w-[104%] -ml-[2%]">
          <div className="marquee py-3 sm:py-4 display text-xl sm:text-3xl">
            {Array.from({ length: 8 }).map((_, i) => <span key={i} className="mx-6">So here&apos;s what we believe <span className="text-yellow">✺</span></span>)}
          </div>
        </div>
        <section id="ideology" className="checks px-4 sm:px-14 pt-28 pb-28 overflow-hidden"><Reveal anim="flip"><IdeologyInteractive /></Reveal></section>
      </ComboSection>
    </main>
  );
}
