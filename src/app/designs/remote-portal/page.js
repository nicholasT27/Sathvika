import Reveal from "@/components/Reveal";
import ArchDoor from "@/components/ArchDoor";

export const metadata = { title: "Sathvika | Remote section: paper-cut portal, side by side" };

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// Colours for the stacked paper arches, outermost first.
const layers = ["#cd4437", "#eea06a", "#ffd987", "#d3e6ee", "#86b6cf"];

// The Remote section as a paper-cut portal, side by side: words on the left, layered arches with the door on the right.
export default function RemotePortal() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <section id="remote" className="bg-butter px-5 pt-16 sm:pt-24 overflow-hidden">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-6 items-end">
          <Reveal anim="left" className="md:pb-24 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Remote, but never distant</p>
            <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05] text-red">Our door is always open.</h2>
            <p className="mt-5 max-w-md mx-auto md:mx-0">{blurb}</p>
            <ul className="mt-5 space-y-2 text-sm inline-block text-left">
              {points.map((p) => <li key={p} className="flex gap-2 bg-paper rounded-full px-4 py-1.5 shadow-sm font-medium w-fit"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}
            </ul>
            <p className="mt-6 text-sm font-semibold">Turn the knob to step inside →</p>
          </Reveal>
          <Reveal anim="right" delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl aspect-[4/4.4]">
              {layers.map((c, i) => (
                <div key={c} className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-t-[999px] shadow-[0_-8px_16px_rgba(106,58,51,0.18),inset_0_6px_10px_rgba(255,255,255,0.25)]" style={{ width: `${100 - i * 11}%`, height: `${100 - i * 9.5}%`, background: c }} />
              ))}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[34%]">
                <ArchDoor photo="/images/window-desk.jpg" alt="A bright open-plan workspace with plants and a long window" doorColor="var(--red)" caption="Come on in" className="w-full" />
              </div>
              <p className="absolute left-1/2 -translate-x-1/2 top-[7%] text-xs font-semibold uppercase tracking-[0.25em] text-paper whitespace-nowrap">Come on in</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
