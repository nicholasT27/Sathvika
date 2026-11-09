import Reveal from "@/components/Reveal";
import ArchDoor from "@/components/ArchDoor";
import Coverage from "@/components/Coverage";
import KnockKnock from "@/components/KnockKnock";

export const metadata = { title: "Sathvika | Remote section: three more styles" };

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// Label strip so each design is easy to tell apart when comparing.
function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// Colours for the stacked paper arches, outermost first.
const layers = ["#cd4437", "#eea06a", "#ffd987", "#d3e6ee", "#86b6cf"];

// Three more styles of the Remote section: a layered paper-cut portal, an always-on coverage chart and a knock-knock comic.
export default function RemoteMore() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* Style 4: Paper-cut portal. Layered paper arches like a tunnel, the door at the centre */}
      <Label>Remote · Style 4 · Paper-cut portal</Label>
      <section id="remote" className="bg-butter px-5 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal anim="drop">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Remote, but never distant</p>
            <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05] text-red">Our door is always open.</h2>
            <p className="mt-5 max-w-lg mx-auto">{blurb}</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 text-sm">{points.map((p) => <li key={p} className="bg-paper rounded-full px-4 py-1.5 shadow-sm font-medium">✓ {p}</li>)}</ul>
          </Reveal>
        </div>
        <Reveal anim="rise" delay={0.1}>
          <div className="relative mx-auto mt-12 w-full max-w-xl aspect-[4/4.2]">
            {layers.map((c, i) => (
              <div key={c} className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-t-[999px] shadow-[0_-8px_16px_rgba(106,58,51,0.18),inset_0_6px_10px_rgba(255,255,255,0.25)]" style={{ width: `${100 - i * 11}%`, height: `${100 - i * 9.5}%`, background: c }} />
            ))}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[34%]">
              <ArchDoor photo="/images/window-desk.jpg" alt="A bright open-plan workspace with plants and a long window" doorColor="var(--red)" caption="Come on in" className="w-full" />
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 top-[8%] text-xs font-semibold uppercase tracking-[0.25em] text-paper">Turn the knob ↓</p>
          </div>
        </Reveal>
      </section>

      {/* Style 5: Always-on coverage. A 24-hour chart shows the team's working days overlapping so someone is always there */}
      <Label>Remote · Style 5 · Always on</Label>
      <section className="bg-sky px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <Reveal anim="left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Remote, but never distant</p>
              <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05]">Our door is <span className="text-red">always open.</span></h2>
              <p className="mt-5 max-w-md">{blurb}</p>
              <ul className="mt-5 space-y-1.5 text-sm">{points.map((p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}</ul>
              <p className="mt-6 text-sm font-semibold">Turn the knob to step inside →</p>
            </Reveal>
            <Reveal anim="right"><ArchDoor photo="/images/remote.jpg" alt="A bright desk with a laptop, ready for remote work" doorColor="var(--orange)" glass plaque="24/7" caption="Welcome in!" className="w-full max-w-[15rem] mx-auto" /></Reveal>
          </div>
          <Reveal anim="rise" className="mt-14"><Coverage /></Reveal>
        </div>
      </section>

      {/* Style 6: Knock-knock comic. Halftone dots, thick outlines and speech bubbles, played by knocking */}
      <Label>Remote · Style 6 · Knock-knock comic</Label>
      <section className="bg-yellow px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal anim="left">
            <div className="bg-white border-[5px] border-ink p-6 sm:p-8 shadow-[8px_8px_0_var(--ink)] -rotate-1">
              <p className="inline-block bg-yellow border-[3px] border-ink px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">Meanwhile, in a remote-first agency…</p>
              <h2 className="mt-4 text-4xl sm:text-6xl leading-[1.02] uppercase [-webkit-text-stroke:2px_var(--ink)] text-red">Our door is always open!</h2>
              <p className="mt-4 text-sm sm:text-base">{blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm font-medium">{points.map((p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">★</span>{p}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal anim="right"><KnockKnock photo="/images/team.jpg" alt="A creative team planning a campaign around a table" /></Reveal>
        </div>
      </section>
    </main>
  );
}
