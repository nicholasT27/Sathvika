export const beliefs = [
  { text: "Boring is the only bad idea.", rot: -4, bg: "bg-red text-paper" },
  { text: "Strategy first, sparkle second.", rot: 3, bg: "bg-yellow text-ink" },
  { text: "Brands are people. Give them personality.", rot: -2, bg: "bg-blue text-paper" },
  { text: "Done is good. Delightful is better.", rot: 4, bg: "bg-orange text-paper" },
];

// Our ideology: statements on slanted ribbons over thick orange and white checks, plus boxes on a butter and blue checks panel.
export default function Ideology() {
  return (
    <section id="ideology" className="relative py-24 px-5 checks checks-orange overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="bg-paper border-[3px] border-ink rounded-3xl px-6 py-4 inline-block shadow-[6px_6px_0_var(--ink)] rotate-1">
          <h2 className="text-4xl sm:text-6xl">Our ideology</h2>
        </div>
        <div className="mt-14 space-y-6">
          {beliefs.map((b) => (
            <div key={b.text} style={{ transform: `rotate(${b.rot}deg)` }} className={`${b.bg} border-[3px] border-ink px-6 py-4 shadow-[6px_6px_0_var(--ink)] w-[108%] -ml-[4%] sm:w-full sm:ml-0 hover:scale-[1.02] transition-transform`}>
              <p className="display text-2xl sm:text-4xl">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 checks checks-blue border-[3px] border-ink rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0_var(--ink)]">
          <div className="bg-paper border-[3px] border-ink rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center">
            <p className="text-lg sm:text-xl">
              We believe good design is a conversation, not a lecture. We listen hard, play harder, and ship work that
              makes people stop scrolling and say <em className="display not-italic text-red">&ldquo;wait, who made that?&rdquo;</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
