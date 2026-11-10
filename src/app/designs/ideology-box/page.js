import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import { beliefs } from "@/data/content";

export const metadata = { title: "Sathvika | Our ideology: split panel in a box" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

const small = "text-xs font-semibold uppercase tracking-[0.28em]";
const intro = "Four beliefs sit behind every campaign, website and brand we make. We'd love to share how they shape your next project.";
const boxOuter = "bg-[#fffaf0] rounded-[2rem] border-[3px] border-ink/70 p-2 shadow-[0_20px_46px_rgba(106,58,51,0.3)]";

// A numbered list of the four beliefs.
function List() {
  return (
    <ol className="divide-y divide-ink/25">
      {beliefs.map(([h, d], i) => (
        <Reveal key={h} anim="right" delay={0.1 * i}>
          <li className="py-4 flex gap-4"><span className="display text-3xl text-red/70 w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-semibold uppercase tracking-[0.1em]">{h}</h3><p className="mt-1 text-sm">{d}</p></div></li>
        </Reveal>
      ))}
    </ol>
  );
}

// The title as a slanted ribbon.
function Ribbon({ className = "", tilt = "-rotate-3" }) {
  return <h2 className={`display inline-block bg-red text-paper border-y-[3px] border-ink px-8 py-3 text-3xl sm:text-5xl shadow-[0_8px_0_rgba(106,58,51,0.25)] ${tilt} ${className}`}>Our ideology</h2>;
}

// Three designs: the split panel sits inside the rounded box, the box floats on thick checks, and the title is a slanted line.
export default function IdeologyBox() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* A: ribbon crossing the top-left corner of the box */}
      <Label>Ideology box · A · Ribbon on the corner</Label>
      <ComboSection start="blue">
        <section id="ideology" className="checks px-4 sm:px-10 py-20 sm:py-28">
          <Reveal anim="zoom">
            <div className={`relative mx-auto max-w-5xl ${boxOuter}`}>
              <div className="absolute -top-7 -left-4 sm:-left-8 z-10 w-[85%]"><Ribbon /></div>
              <div className="grid md:grid-cols-2 rounded-[1.6rem] overflow-hidden border border-ink/25">
                <div className="bg-sky px-7 sm:px-12 pt-20 pb-10 sm:py-20 sm:pt-24 flex items-end">
                  <div>
                    <h3 className="text-2xl sm:text-4xl leading-[1.2] uppercase tracking-[0.08em]" style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 }}>Ideas are in<br />the details.</h3>
                    <p className="mt-5 max-w-sm">{intro}</p>
                    <p className="mt-6 flex gap-8"><a href="#services" className={`${small} underline underline-offset-8`}>Services</a><a href="#contact" className={`${small} underline underline-offset-8`}>Contact</a></p>
                  </div>
                </div>
                <div className="bg-yellow px-7 sm:px-12 py-10 sm:py-20"><List /></div>
              </div>
            </div>
          </Reveal>
        </section>
      </ComboSection>

      {/* B: ribbon sits above the box, tilted the other way, with a wavy side bar */}
      <Label>Ideology box · B · Ribbon above, box below</Label>
      <ComboSection start="orange">
        <section className="checks px-4 sm:px-10 pt-16 pb-20 sm:pb-28">
          <Reveal anim="drop" className="text-center relative z-10 -mb-6 sm:-mb-8"><Ribbon tilt="rotate-2" className="shadow-[6px_8px_0_var(--ink)]" /></Reveal>
          <Reveal anim="rise">
            <div className={`mx-auto max-w-5xl ${boxOuter}`}>
              <div className="grid md:grid-cols-[1fr_1.15fr] rounded-[1.6rem] overflow-hidden border border-ink/25">
                <div className="bg-yellow px-7 sm:px-12 py-14 sm:py-20 flex items-center">
                  <div>
                    <h3 className="text-2xl sm:text-4xl leading-[1.2] uppercase tracking-[0.08em]" style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 }}>Ideas are in<br />the details.</h3>
                    <p className="mt-5 max-w-sm">{intro}</p>
                    <a href="#contact" className={`${small} inline-block mt-6 underline underline-offset-8`}>Work with us</a>
                  </div>
                </div>
                <div className="bg-sky px-7 sm:px-12 py-10 sm:py-20"><List /></div>
              </div>
            </div>
          </Reveal>
        </section>
      </ComboSection>

      {/* C: two slanted ribbon lines, split into a photo half and a list half, checks showing on all sides */}
      <Label>Ideology box · C · Photo half, double ribbon</Label>
      <ComboSection start="blue">
        <section className="checks px-4 sm:px-14 py-20 sm:py-28 overflow-hidden">
          <Reveal anim="flip">
            <div className={`relative mx-auto max-w-5xl ${boxOuter}`}>
              <div className="absolute -top-6 right-6 sm:right-14 z-10 w-[70%] text-right"><Ribbon tilt="rotate-3" className="!bg-orange !text-ink" /></div>
              <div className="absolute -bottom-6 left-6 sm:left-14 z-10"><span className="display inline-block bg-ink text-butter px-6 py-2 text-lg sm:text-2xl -rotate-2 border-y-[3px] border-ink">Ideas are in the details.</span></div>
              <div className="grid md:grid-cols-2 rounded-[1.6rem] overflow-hidden border border-ink/25">
                <div className="min-h-[16rem] bg-cover bg-center" role="img" aria-label="A creative team planning a campaign" style={{ backgroundImage: "url(/images/team.jpg)" }} />
                <div className="bg-yellow px-7 sm:px-12 pt-14 pb-14 sm:py-20">
                  <p className="mb-4 text-sm max-w-sm">{intro}</p>
                  <List />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </ComboSection>
    </main>
  );
}
