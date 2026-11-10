const heading = { fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600 };

// The founder section and the red ribbon from flow design C, repeated above each ideology design so the match is easy to judge.
// The founder introduction on its own (no ribbon), so layouts can place it freely.
export function FounderOnly({ bold = false, className = "" }) {
  return (
      <section id="founder" className={`relative px-5 pt-20 pb-24 bg-butter ${className}`}>
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1.2fr_0.9fr] gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 style={bold ? undefined : heading} className="text-4xl sm:text-6xl text-red">Hi, I&apos;m Sathvika.</h2>
            <p className="mt-6 text-lg">Your newest brand partner and favourite part of the marketing process. I started this agency because brands deserve better than copy-paste creativity.</p>
            <p className="mt-3 text-lg">I combine strategy, design and performance thinking, with a slightly unreasonable amount of coffee. We&apos;re a small team on purpose, so when you work with us, you work with me.</p>
          </div>
          <div className="order-1 md:order-2"><div role="img" aria-label="A creative team planning a campaign" className="aspect-[4/5] rounded-t-[999px] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} /></div>
        </div>
      </section>
  );
}

// The founder introduction followed by the red ribbon handover.
export default function FlowLead({ bold = false }) {
  return (
    <>
      <FounderOnly bold={bold} />
      <div className="relative z-10 -my-9 sm:-my-12 -rotate-2 bg-red text-paper border-y-[3px] border-ink overflow-hidden shadow-[0_10px_0_rgba(106,58,51,0.25)] w-[104%] -ml-[2%]">
        <div className="marquee py-3 sm:py-4 display text-xl sm:text-3xl">
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className="mx-6">So here&apos;s what we believe <span className="text-yellow">✺</span></span>)}
        </div>
      </div>
    </>
  );
}

