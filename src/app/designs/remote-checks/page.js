import Reveal from "@/components/Reveal";
import ArchDoor from "@/components/ArchDoor";

export const metadata = { title: "Sathvika | Remote section: checkered frame variations" };

const blurb = "We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared boards and quick replies make it feel like we sit next to you.";
const points = ["Weekly check-in calls", "Shared project boards", "Replies within one working day"];

// A spiky starburst sticker with text in the middle.
function Burst({ children, className = "" }) {
  const pts = Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 ? 38 : 49;
    return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return (
    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[3px_4px_0_rgba(106,58,51,0.3)]" aria-hidden="true"><polygon points={pts} fill="var(--yellow)" stroke="#6a3a33" strokeWidth="1.8" strokeLinejoin="round" /></svg>
      <span className="absolute inset-0 grid place-items-center text-center display text-red leading-tight text-base sm:text-lg -rotate-12">{children}</span>
    </div>
  );
}

// Label strip so each design is easy to tell apart when comparing.
function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

const kicker = "text-xs font-semibold uppercase tracking-[0.25em] text-red";
const tick = (p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{p}</li>;

// Three variations on the client's favourite Remote design: a checkered-frame card with an arch door and knob.
export default function RemoteChecks() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      {/* A: Sunny checks. Straight card, yellow checks, door with a glass window, number plaque and welcome mat */}
      <Label>Remote · Variation A · Sunny checks</Label>
      <section id="remote" className="bg-sky px-5 py-20 sm:py-28">
        <Reveal anim="zoom">
          <div className="mx-auto max-w-5xl checks p-4 sm:p-6 rounded-[2rem] shadow-[0_18px_40px_rgba(106,58,51,0.22)]" style={{ "--c1": "var(--yellow)", "--c2": "var(--paper)", "--size": "84px" }}>
            <div className="bg-[#fffaf0] rounded-[1.5rem] p-6 sm:p-10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
              <div>
                <p className={kicker}>Remote, but never distant</p>
                <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05]">Our door is always open.</h2>
                <p className="mt-5 max-w-md">{blurb}</p>
                <ul className="mt-5 space-y-1.5 text-sm">{points.map(tick)}</ul>
                <p className="mt-6 text-sm font-semibold">Turn the knob to step inside →</p>
              </div>
              <ArchDoor photo="/images/remote.jpg" alt="A bright desk with a laptop, ready for remote work" doorColor="var(--blue)" glass plaque="24/7" mat="Welcome" caption="Welcome in!" className="w-full max-w-xs mx-auto" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* B: Tilted burst. Dense red checks, the whole card tilted, a starburst sticker on the door */}
      <Label>Remote · Variation B · Tilted burst</Label>
      <section className="bg-butter px-5 py-24 sm:py-32 overflow-hidden">
        <Reveal anim="rise">
          <div className="relative mx-auto max-w-5xl -rotate-[4deg] checks p-3 sm:p-5 rounded-[1.75rem] shadow-[0_20px_44px_rgba(106,58,51,0.28)]" style={{ "--c1": "var(--red)", "--c2": "var(--paper)", "--size": "52px" }}>
            <div className="bg-[#fffaf0] rounded-[1.25rem] p-6 sm:p-10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
              <div className="rotate-[1.5deg]">
                <p className={kicker}>Remote, but never distant</p>
                <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05]">Our door is <span className="text-red">always open.</span></h2>
                <p className="mt-5 max-w-md">{blurb}</p>
                <ul className="mt-5 space-y-1.5 text-sm">{points.map(tick)}</ul>
                <a href="#remote" className="btn bg-red text-paper mt-6 text-sm">Say hello</a>
              </div>
              <div className="relative">
                <ArchDoor photo="/images/team.jpg" alt="A creative team planning a campaign around a table" doorColor="var(--orange)" caption="Pull up a chair" className="w-full max-w-xs mx-auto" />
                <Burst className="absolute -top-8 right-0 sm:-right-4 rotate-6">Open<br />24/7</Burst>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* C: Reverse blue checks. Door on the left, text on the right, welcome mat and cities */}
      <Label>Remote · Variation C · Blue and butter, reversed</Label>
      <section className="bg-blue px-5 py-20 sm:py-28">
        <Reveal anim="flip">
          <div className="mx-auto max-w-5xl checks p-4 sm:p-6 rounded-[2rem] shadow-[0_18px_40px_rgba(60,90,110,0.35)]" style={{ "--c1": "var(--sky)", "--c2": "var(--butter)", "--size": "72px" }}>
            <div className="bg-[#fffaf0] rounded-[1.5rem] p-6 sm:p-10 grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
              <ArchDoor photo="/images/window-desk.jpg" alt="A bright open-plan workspace with plants and a long window" doorColor="var(--svc4)" mat="Come on in" caption="Come on in" className="w-full max-w-xs mx-auto order-2 md:order-1" />
              <div className="order-1 md:order-2">
                <p className={kicker}>Remote, but never distant</p>
                <h2 className="mt-3 text-4xl sm:text-6xl leading-[1.05]">Our door is always open.</h2>
                <p className="mt-5 max-w-md">{blurb}</p>
                <p className="mt-5 flex flex-wrap gap-2">{["Mumbai", "London", "New York", "Sydney"].map((c) => <span key={c} className="bg-sky rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">{c}</span>)}</p>
                <ul className="mt-5 space-y-1.5 text-sm">{points.map(tick)}</ul>
                <p className="mt-6 text-sm font-semibold">← Turn the knob to step inside</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
