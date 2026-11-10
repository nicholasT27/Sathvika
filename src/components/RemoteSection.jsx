import Reveal from "./Reveal";
import ArchDoor from "./ArchDoor";

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// The Remote section: words on the left, one arch door on the right. Turn the knob and the door opens to a computer on a desk.
// "bg" sets the band colour, and "headClass" / "headStyle" let each page keep its own heading look.
export default function RemoteSection({ bg = "bg-sky", headClass = "text-red", headStyle, className = "" }) {
  return (
    <section id="remote" className={`${bg} px-5 py-20 sm:py-28 overflow-hidden ${className}`}>
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-6 items-center">
        <Reveal anim="left" className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red">Remote, but never distant</p>
          <h2 style={headStyle} className={`mt-3 text-4xl sm:text-6xl leading-[1.05] ${headClass}`}>Our door is always open.</h2>
          <p className="mt-5 max-w-md mx-auto md:mx-0">{blurb}</p>
          <ul className="mt-5 space-y-2 text-sm inline-block text-left">
            {points.map((p) => <li key={p} className="flex gap-2 bg-paper rounded-full px-4 py-1.5 shadow-sm font-medium w-fit"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}
          </ul>
          <p className="mt-6 text-sm font-semibold">Turn the knob to step inside →</p>
        </Reveal>
        <Reveal anim="right" delay={0.1}>
          <ArchDoor photo="/images/remote.jpg" alt="A laptop and monitor on a bright desk, ready for remote work" doorColor="var(--red)" caption="Welcome in!" className="w-full max-w-xs sm:max-w-sm mx-auto" />
        </Reveal>
      </div>
    </section>
  );
}
