"use client";
import { useState } from "react";

const lines = [
  { who: "us", text: "Knock, knock!" },
  { who: "in", text: "Who's there?" },
  { who: "us", text: "Your next big brand!" },
  { who: "in", text: "Come on in! The kettle's on." },
];

// A comic panel you play by knocking: each knock adds a speech bubble, and the last one swings the door open.
export default function KnockKnock({ photo, alt }) {
  const [step, setStep] = useState(0);
  const open = step >= 3;
  // Moves the joke on by one line, or starts again after the door is open.
  function knock() { setStep(step >= 3 ? 0 : step + 1); }
  const bubble = "relative bg-white border-[4px] border-ink rounded-2xl px-4 py-2 display text-sm sm:text-base text-ink shadow-[4px_4px_0_var(--ink)]";
  return (
    <div className="relative border-[6px] border-ink bg-[#ffe9a8] overflow-hidden shadow-[10px_10px_0_var(--ink)]" style={{ backgroundImage: "radial-gradient(circle, rgba(238,160,106,.6) 2.2px, transparent 2.8px)", backgroundSize: "15px 15px" }}>
      <div className="grid sm:grid-cols-[1fr_auto_1fr] items-end gap-4 px-4 pt-8 pb-6 min-h-[26rem]">
        <div className="space-y-3 sm:self-start order-2 sm:order-1">
          {lines.slice(0, step + 1).filter((l) => l.who === "us").map((l) => <p key={l.text} className={`${bubble} -rotate-2`}>{l.text}<span className="absolute -right-3 bottom-3 w-5 h-5 bg-white border-r-[4px] border-b-[4px] border-ink rotate-[-35deg] skew-x-12" aria-hidden="true" /></p>)}
        </div>
        <div className="order-1 sm:order-2 [perspective:1200px] w-44 sm:w-52 mx-auto">
          <div className="relative aspect-[3/4] rounded-t-[999px] overflow-hidden border-[5px] border-ink bg-cover bg-center" role="img" aria-label={alt} style={{ backgroundImage: `url(${photo})` }}>
            <button onClick={knock} aria-label="Knock on the door" style={{ background: "var(--red)", transformOrigin: "left center", transform: open ? "rotateY(-108deg)" : step > 0 ? `rotate(${step % 2 ? -1.5 : 1.5}deg)` : "none" }} className="absolute inset-0 rounded-t-[999px] border-r-[5px] border-ink transition-transform duration-700 cursor-pointer [backface-visibility:hidden]">
              <span className="absolute left-[14%] right-[14%] top-[10%] h-[34%] rounded-t-[999px] border-[4px] border-ink/40" />
              <span className="absolute left-[14%] right-[14%] top-[50%] bottom-[10%] rounded-md border-[4px] border-ink/40" />
              <span className="absolute right-[12%] top-[52%] w-[13%] aspect-square rounded-full bg-yellow border-[4px] border-ink" />
            </button>
          </div>
        </div>
        <div className="space-y-3 sm:self-start sm:pt-14 order-3 flex flex-col items-start sm:items-end">
          {lines.slice(0, step + 1).filter((l) => l.who === "in").map((l) => <p key={l.text} className={`${bubble} rotate-2 !bg-sky`}>{l.text}<span className="absolute -left-3 bottom-3 w-5 h-5 bg-sky border-l-[4px] border-b-[4px] border-ink rotate-[35deg] -skew-x-12" aria-hidden="true" /></p>)}
        </div>
      </div>
      <div className="px-4 pb-6 text-center">
        <button onClick={knock} className="btn bg-red text-paper text-sm">{step === 0 ? "Knock, knock" : step >= 3 ? "Knock again" : "Keep going"}</button>
      </div>
    </div>
  );
}
