import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import WavyFrame from "@/components/WavyFrame";
import { beliefs } from "@/data/content";

export const metadata = { title: "Sathvika | Our ideology designs" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

const ribbonColors = ["bg-red text-paper", "bg-yellow text-ink", "bg-blue text-ink", "bg-orange text-ink"];

// Four designs for the Ideology section, each following one format from the client's brief, with thick checks in two colour combos.
export default function IdeologyDesigns() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* Design 1: slanted ribbons across thick checks, with a bold side bar (the slanted line format) */}
      <Label>Ideology · Design 1 · Slanted lines on checks</Label>
      <ComboSection start="orange">
        <section id="ideology" className="checks relative px-5 pl-14 sm:pl-24 py-24 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-ink" aria-hidden="true" />
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-7 sm:w-12 bg-red" aria-hidden="true" />
          <div className="mx-auto max-w-4xl">
            <Reveal anim="drop">
              <h2 className="inline-block bg-paper border-[3px] border-ink px-6 py-2 text-4xl sm:text-6xl -rotate-2 shadow-[6px_6px_0_var(--ink)]">Our ideology</h2>
            </Reveal>
            <div className="mt-14 space-y-8">
              {beliefs.map(([h, d], i) => (
                <Reveal key={h} anim={i % 2 ? "right" : "left"} delay={0.1 * i}>
                  <div className={`${ribbonColors[i]} w-[106%] -ml-[3%] border-y-[3px] border-ink px-6 sm:px-10 py-4 shadow-[0_8px_0_rgba(106,58,51,0.25)] ${i % 2 ? "rotate-[1.8deg]" : "-rotate-[2.2deg]"}`}>
                    <h3 className="display text-2xl sm:text-4xl">{h}</h3>
                    <p className="mt-1 text-sm sm:text-base font-medium">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </ComboSection>

      {/* Design 2: two-tone split panel with a thick checks strip and side bars (the Love is in the details format) */}
      <Label>Ideology · Design 2 · Split panel with checks strip</Label>
      <ComboSection start="blue">
        <section className="relative bg-paper">
          <div className="checks h-14 sm:h-20" aria-hidden="true" />
          <div className="grid md:grid-cols-2">
            <div className="bg-sky px-6 sm:px-14 py-16 sm:py-24 flex items-center">
              <Reveal anim="left">
                <h2 className="text-3xl sm:text-5xl leading-[1.15] uppercase tracking-[0.1em] text-ink" style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 }}>Our ideology.<br />Ideas are in<br />the details.</h2>
                <p className="mt-6 max-w-sm">Four beliefs sit behind every campaign, website and brand we make. We&apos;d love to share how they shape your next project.</p>
                <p className="mt-6 flex gap-8"><a href="#services" className="text-xs font-semibold uppercase tracking-[0.28em] underline underline-offset-8">Services</a><a href="#contact" className="text-xs font-semibold uppercase tracking-[0.28em] underline underline-offset-8">Contact</a></p>
              </Reveal>
            </div>
            <div className="bg-yellow px-6 sm:px-14 py-16 sm:py-24 relative">
              <ol className="divide-y divide-ink/25">
                {beliefs.map(([h, d], i) => (
                  <Reveal key={h} anim="right" delay={0.1 * i}>
                    <li className="py-5 flex gap-4"><span className="display text-3xl text-red/70 w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-semibold uppercase tracking-[0.1em]">{h}</h3><p className="mt-1 text-sm">{d}</p></div></li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
          <div className="checks h-14 sm:h-20" aria-hidden="true" />
          <div className="absolute left-0 top-14 sm:top-20 bottom-14 sm:bottom-20 w-3 sm:w-5 bg-ink/80" aria-hidden="true" />
          <div className="absolute right-0 top-14 sm:top-20 bottom-14 sm:bottom-20 w-3 sm:w-5 bg-ink/80" aria-hidden="true" />
        </section>
      </ComboSection>

      {/* Design 3: a rounded text box floating over thick checks (the box shape with the checks background) */}
      <Label>Ideology · Design 3 · Box on checks</Label>
      <ComboSection start="blue">
        <section className="checks px-4 sm:px-8 py-20 sm:py-28">
          <Reveal anim="zoom">
            <div className="mx-auto max-w-4xl bg-[#fffaf0] rounded-[2rem] border-[3px] border-ink/70 p-2 shadow-[0_18px_44px_rgba(106,58,51,0.28)]">
              <div className="rounded-[1.6rem] border border-ink/25 px-6 sm:px-12 py-10 sm:py-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">What we believe</p>
                <h2 className="mt-3 text-4xl sm:text-6xl text-red">Our ideology</h2>
                <p className="mt-4 max-w-xl mx-auto">Four beliefs behind every campaign, website and brand we make.</p>
                <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8 text-left">
                  {beliefs.map(([h, d], i) => (
                    <Reveal key={h} anim="rise" delay={0.1 * i}>
                      <li className="border-t-2 border-ink/20 pt-4"><h3 className="display text-xl">{h}</h3><p className="mt-1 text-sm">{d}</p></li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>
      </ComboSection>

      {/* Design 4: thick checks down both sides with a dark text box in between, and a wavy-framed photo (the checks on the side format) */}
      <Label>Ideology · Design 4 · Checks on the side</Label>
      <ComboSection start="orange">
        <section className="relative bg-[#2a1613] flex">
          <div className="checks w-12 sm:w-28 shrink-0" aria-hidden="true" />
          <div className="flex-1 min-w-0 px-5 sm:px-12 py-16 sm:py-24 text-[#f8efdc]"><div className="mx-auto max-w-3xl">
            <Reveal anim="flip">
              <div className="w-44 sm:w-56 mx-auto"><WavyFrame id="ideo-photo" color="#d3e6ee" src="/images/team.jpg" bumps={11} label="A creative team planning a campaign" className="drop-shadow-[0_10px_18px_rgba(0,0,0,0.4)]" /></div>
            </Reveal>
            <Reveal anim="rise" className="text-center">
              <h2 className="mt-8 text-4xl sm:text-5xl text-[#fff1c9]">Our ideology</h2>
              <p className="mt-3 text-[#f8efdc]/85">Four beliefs behind every campaign, website and brand we make.</p>
            </Reveal>
            <ul className="mt-10 space-y-6">
              {beliefs.map(([h, d], i) => (
                <Reveal key={h} anim={i % 2 ? "right" : "left"} delay={0.08 * i}>
                  <li className="border-l-4 border-yellow pl-5"><h3 className="display text-xl text-[#fff1c9]">{h}</h3><p className="mt-1 text-sm text-[#f8efdc]/90">{d}</p></li>
                </Reveal>
              ))}
            </ul>
          </div></div>
          <div className="checks w-12 sm:w-28 shrink-0" aria-hidden="true" />
        </section>
      </ComboSection>
    </main>
  );
}
