import Reveal from "@/components/Reveal";
import ArchDoor from "@/components/ArchDoor";

export const metadata = { title: "Sathvika | Remote section: door, side by side" };

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// The Remote section, side by side: words on the left, one arch door on the right that opens to a computer photo.
export default function RemotePortal() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <section id="remote" className="bg-butter px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-6 items-center">
          <Reveal anim="left" className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Remote, but never distant</p>
            <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05] text-red">Our door is always open.</h2>
            <p className="mt-5 max-w-md mx-auto md:mx-0">{blurb}</p>
            <ul className="mt-5 space-y-2 text-sm inline-block text-left">
              {points.map((p) => <li key={p} className="flex gap-2 bg-paper rounded-full px-4 py-1.5 shadow-sm font-medium w-fit"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}
            </ul>
            <p className="mt-6 text-sm font-semibold">Turn the knob to step inside →</p>
          </Reveal>
          <Reveal anim="right" delay={0.1} className="md:pb-16">
            <ArchDoor photo="/images/remote.jpg" alt="A laptop and monitor on a bright desk, ready for remote work" doorColor="var(--red)" caption="Welcome in!" className="w-full max-w-xs sm:max-w-sm mx-auto" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
