import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import { beliefs } from "@/data/content";

export const metadata = { title: "Sathvika | Our ideology: mixed designs" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

const small = "text-xs font-semibold uppercase tracking-[0.28em]";
const heading = { fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 };
const intro = "Four beliefs sit behind every campaign, website and brand we make. We'd love to share how they shape your next project.";

// Three ways to mix the split panel (design 2) with the box on thick checks (design 3).
export default function IdeologyMix() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* Mix A: the left half is thick checks carrying a rounded text box; the right half is a solid panel with the numbered beliefs */}
      <Label>Ideology mix · A · Checks half with a box, solid half with the list</Label>
      <ComboSection start="blue">
        <section id="ideology">
          <div className="checks h-10 sm:h-14" aria-hidden="true" />
          <div className="grid md:grid-cols-2">
            <div className="checks px-4 sm:px-10 py-14 sm:py-20 grid place-items-center">
              <Reveal anim="zoom">
                <div className="bg-[#fffaf0] rounded-[2rem] border-[3px] border-ink/70 p-2 shadow-[0_18px_40px_rgba(106,58,51,0.25)] max-w-md">
                  <div className="rounded-[1.6rem] border border-ink/25 px-7 py-9">
                    <p className={`${small} text-red`}>What we believe</p>
                    <h2 style={heading} className="mt-3 text-3xl sm:text-4xl leading-[1.15] uppercase tracking-[0.08em]">Our ideology.<br />Ideas are in<br />the details.</h2>
                    <p className="mt-5">{intro}</p>
                    <p className="mt-6 flex gap-8"><a href="#services" className={`${small} underline underline-offset-8`}>Services</a><a href="#contact" className={`${small} underline underline-offset-8`}>Contact</a></p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="bg-yellow px-6 sm:px-14 py-14 sm:py-20 flex items-center">
              <ol className="divide-y divide-ink/25 w-full">
                {beliefs.map(([h, d], i) => (
                  <Reveal key={h} anim="right" delay={0.1 * i}>
                    <li className="py-5 flex gap-4"><span className="display text-3xl text-red/70 w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-semibold uppercase tracking-[0.1em]">{h}</h3><p className="mt-1 text-sm">{d}</p></div></li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
          <div className="checks h-10 sm:h-14" aria-hidden="true" />
        </section>
      </ComboSection>

      {/* Mix B: a two-tone split panel with one big box on the seam, framed by a thick checks border */}
      <Label>Ideology mix · B · Checks-framed box on the seam</Label>
      <ComboSection start="orange">
        <section className="relative px-4 sm:px-8 py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 grid md:grid-cols-2" aria-hidden="true"><div className="bg-sky" /><div className="bg-yellow" /></div>
          <div className="checks absolute left-0 right-0 top-0 h-8 sm:h-12" aria-hidden="true" />
          <div className="checks absolute left-0 right-0 bottom-0 h-8 sm:h-12" aria-hidden="true" />
          <Reveal anim="zoom" className="relative z-10">
            <div className="checks mx-auto max-w-4xl p-3 sm:p-5 rounded-[2rem] shadow-[0_20px_46px_rgba(106,58,51,0.3)]" style={{ "--size": "56px" }}>
              <div className="bg-[#fffaf0] rounded-[1.5rem] px-6 sm:px-12 py-10 sm:py-12">
                <p className={`${small} text-red text-center`}>What we believe</p>
                <h2 className="mt-3 text-4xl sm:text-6xl text-red text-center">Our ideology</h2>
                <p className="mt-4 max-w-xl mx-auto text-center">{intro}</p>
                <ul className="mt-9 grid sm:grid-cols-2 gap-x-10 gap-y-7">
                  {beliefs.map(([h, d], i) => (
                    <li key={h} className="flex gap-4 border-t-2 border-ink/20 pt-4"><span className="display text-3xl text-red/70 w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span><div><h3 className="display text-lg">{h}</h3><p className="mt-1 text-sm">{d}</p></div></li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>
      </ComboSection>

      {/* Mix C: the split panel introduces the section on top, and each belief is its own box floating on a thick checks band below */}
      <Label>Ideology mix · C · Split intro, four boxes on a checks band</Label>
      <ComboSection start="blue">
        <section>
          <div className="grid md:grid-cols-2">
            <div className="bg-sky px-6 sm:px-14 py-14 sm:py-20 flex items-center">
              <Reveal anim="left">
                <h2 style={heading} className="text-3xl sm:text-5xl leading-[1.15] uppercase tracking-[0.1em]">Our ideology.<br />Ideas are in<br />the details.</h2>
              </Reveal>
            </div>
            <div className="bg-yellow px-6 sm:px-14 py-14 sm:py-20 flex items-center">
              <Reveal anim="right"><p className="max-w-sm text-lg">{intro}</p></Reveal>
            </div>
          </div>
          <div className="relative checks px-4 sm:px-10 py-14 sm:py-20">
            <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-5 bg-ink/80" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-5 bg-ink/80" aria-hidden="true" />
            <ul className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {beliefs.map(([h, d], i) => (
                <Reveal key={h} anim="rise" delay={0.1 * i}>
                  <li className="h-full bg-[#fffaf0] rounded-[1.5rem] border-[3px] border-ink/70 p-2 shadow-[0_14px_30px_rgba(106,58,51,0.25)]">
                    <div className="h-full rounded-[1.1rem] border border-ink/25 px-5 py-6">
                      <span className="display text-3xl text-red/70">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="display text-lg mt-1 leading-tight">{h}</h3>
                      <p className="mt-2 text-sm">{d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </ComboSection>
    </main>
  );
}
