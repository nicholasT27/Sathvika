export const rules = [
  ["Be bold.", "If you wouldn't screenshot it, we redo it.", "bg-sky", -2],
  ["Be honest.", "We tell you when an idea is not it. Kindly. With snacks.", "bg-yellow", 2],
  ["Be on time.", "Deadlines are the only rules we treat as serious.", "bg-orange text-paper", -1],
  ["Have fun.", "If we are not laughing, the work is not done.", "bg-butter", 3],
  ["Coffee first.", "Meetings start after the first sip. Non-negotiable.", "bg-blue text-paper", -3],
  ["Feedback welcome.", "Tell us what you hate. We won't cry (much).", "bg-paper", 1],
];

// Our very official, unofficial rules, shown as tilted ticket cards.
export default function Rules() {
  return (
    <section id="rules" className="py-24 px-5 bg-paper">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-6xl text-center">Our very <span className="text-red">official,</span><br />unofficial rules</h2>
        <p className="text-center mt-3 text-sm uppercase tracking-widest">Rulebook · Page 1 of 1 · Not legally binding</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {rules.map(([title, body, bg, rot], n) => (
            <article key={title} style={{ transform: `rotate(${rot}deg)` }} className={`${bg} relative border-[3px] border-ink rounded-2xl p-6 shadow-[6px_6px_0_var(--ink)] hover:-translate-y-1 transition-transform`}>
              <span className="absolute -top-5 -left-3 w-12 h-12 rounded-full bg-red text-paper border-[3px] border-ink grid place-items-center display text-xl">{n + 1}</span>
              <h3 className="display text-2xl mt-2">{title}</h3>
              <p className="mt-2">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
