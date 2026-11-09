import Reveal from "@/components/Reveal";
import ArchDoor from "@/components/ArchDoor";
import ZoneClocks from "@/components/ZoneClocks";

export const metadata = { title: "Sathvika | Remote section designs" };

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// A white-ish cloud shape used as decoration in design 2.
function Cloud({ className = "" }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true"><path d="M20 50 a16 16 0 0 1 2 -31 a22 22 0 0 1 42 -6 a18 18 0 0 1 30 12 a14 14 0 0 1 4 25 z" fill="#fff8e1" opacity="0.95" /></svg>
  );
}

// Label strip so each design is easy to tell apart when comparing.
function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// Three designs for the Remote section only, based on the client's arch-shaped reference. Each arch is a door with a knob.
export default function RemoteDesigns() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* Design 1: checkered frame card with the arch door on the right (the client's favourite reference) */}
      <Label>Remote · Design 1 · Checkered frame</Label>
      <section id="remote" className="bg-sky px-5 py-20 sm:py-28">
        <Reveal anim="zoom">
          <div className="mx-auto max-w-5xl -rotate-[1.5deg] checks checks-orange p-4 sm:p-6 rounded-[2rem] shadow-[0_18px_40px_rgba(106,58,51,0.25)]">
            <div className="bg-[#fffaf0] rounded-[1.5rem] p-6 sm:p-10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
              <div className="-rotate-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">Remote, but never distant</p>
                <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05]">Our door is always open.</h2>
                <p className="mt-5 max-w-md">{blurb}</p>
                <ul className="mt-5 space-y-1.5 text-sm">{points.map((p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}</ul>
                <p className="mt-6 text-sm font-semibold">Turn the knob to step inside →</p>
              </div>
              <ArchDoor photo="/images/remote.jpg" alt="A bright desk with a laptop, ready for remote work" doorColor="var(--red)" caption="Welcome in!" className="w-full max-w-xs mx-auto" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Design 2: sky with clouds, four small arch windows for time zones and one big cream arch door */}
      <Label>Remote · Design 2 · Sky arches</Label>
      <section className="relative bg-blue px-5 pt-16 pb-0 overflow-hidden">
        <Cloud className="absolute left-[4%] top-10 w-28 sm:w-40" />
        <Cloud className="absolute right-[6%] top-[28%] w-24 sm:w-36" />
        <Cloud className="absolute left-[12%] top-[52%] w-20 sm:w-28" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal anim="drop">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-paper">Remote, but never distant</p>
            <h2 className="mt-2 text-3xl sm:text-5xl text-paper">Our team, around the clock</h2>
          </Reveal>
          <Reveal anim="rise" delay={0.1} className="mt-8"><ZoneClocks /></Reveal>
        </div>
        <Reveal anim="rise" delay={0.15}>
          <div className="relative mx-auto max-w-3xl mt-14 bg-paper rounded-t-[999px] px-6 sm:px-16 pt-24 sm:pt-32 pb-16 text-center">
            <h2 className="text-3xl sm:text-5xl text-red">Our door is always open.</h2>
            <p className="mt-4 max-w-md mx-auto">{blurb}</p>
            <ArchDoor photo="/images/cheers.jpg" alt="Two coffee cups clinking over a cafe table" doorColor="var(--orange)" caption="Virtual coffee?" className="w-52 sm:w-64 mx-auto mt-8" />
            <p className="mt-5 text-sm font-semibold">Turn the knob. We&apos;ll put the kettle on.</p>
          </div>
        </Reveal>
      </section>

      {/* Design 3: butter and sky checks, arch door overlapped by a cream text box */}
      <Label>Remote · Design 3 · Checks wall</Label>
      <section className="checks checks-blue px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center">
          <Reveal anim="left" className="w-full max-w-[17rem] sm:max-w-[20rem] md:shrink-0">
            <ArchDoor photo="/images/window-desk.jpg" alt="A bright open-plan workspace with plants and a long window" doorColor="var(--blue)" caption="Come on in" className="w-full" />
          </Reveal>
          <Reveal anim="right" delay={0.1} className="md:-ml-6 mt-6 md:mt-8 relative z-10">
            <div className="bg-[#fffaf0] rounded-2xl shadow-[0_14px_30px_rgba(106,58,51,0.22)] p-7 sm:p-9 max-w-lg mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">Remote, but never distant</p>
              <h2 className="mt-3 text-3xl sm:text-5xl leading-[1.05]">Our door is always open.</h2>
              <p className="mt-4">{blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm">{points.map((p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}</ul>
              <a href="#remote" className="btn bg-red text-paper mt-6 text-sm">Say hello</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
