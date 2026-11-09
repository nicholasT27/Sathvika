import Mascot from "./Mascot";

// Introduces the founder in a friendly card with a few quick facts.
export default function Founder() {
  const facts = [["Mood", "Caffeinated"], ["Superpower", "Turning vague briefs into bold ideas"], ["Weakness", "Good fonts & filter coffee"]];
  return (
    <section id="founder" className="relative py-24 px-5 bg-sky">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div className="bg-paper border-[3px] border-ink rounded-[2.5rem] p-8 sm:p-10 shadow-[8px_8px_0_var(--ink)] -rotate-1">
          <p className="display text-blue text-lg">Chapter one</p>
          <h2 className="text-4xl sm:text-5xl mt-1">Hi, I&apos;m Sathvika.</h2>
          <p className="mt-4 text-lg">
            I started this agency because I believed brands deserved better than copy-paste creativity. I mix strategy,
            design and a slightly unreasonable amount of coffee to build brands people actually remember.
          </p>
          <p className="mt-3 text-lg">
            Small team, big ideas, zero boring decks. When you work with me, you work with me.
          </p>
          <dl className="mt-6 grid gap-3">
            {facts.map(([k, v]) => (
              <div key={k} className="flex gap-3 items-baseline border-b-2 border-dashed border-ink/30 pb-2">
                <dt className="display text-red w-28 shrink-0">{k}</dt><dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center">
          <div className="bob w-44"><Mascot mood="wink" /></div>
        </div>
      </div>
    </section>
  );
}
