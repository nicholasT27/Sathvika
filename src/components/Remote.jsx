"use client";
import { useState } from "react";

// Remote section: a big arched door with a knob. Click the knob to open it and see how we work remotely.
export default function Remote() {
  const [open, setOpen] = useState(false);
  return (
    <section id="remote" className="py-24 px-5 bg-blue text-paper overflow-hidden">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="display text-yellow text-lg">Remote, but never distant</p>
          <h2 className="text-5xl sm:text-6xl mt-2">Our door is <span className="text-yellow">always open.</span></h2>
          <p className="mt-5 text-lg">
            We work fully remote, so your brand gets the best minds, not just the closest ones. Weekly calls, shared
            boards and quick replies make it feel like we sit next to you.
          </p>
          <p className="mt-3 text-sm opacity-90">👉 Go on, turn the knob.</p>
        </div>
        <div className="flex justify-center [perspective:1200px]">
          <div className="relative w-64 sm:w-72 h-[26rem] rounded-t-[999px] border-[5px] border-ink bg-yellow shadow-[8px_8px_0_#3b1410] overflow-hidden">
            {/* What you see behind the door */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-ink text-center p-6 gap-2">
              <span className="text-5xl">🌍</span>
              <p className="display text-xl">Welcome in!</p>
              <p className="text-sm">Team across time zones. Coffee on your own couch. Deadlines on time.</p>
            </div>
            {/* The door itself */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close the door" : "Open the door"}
              style={{ transformOrigin: "left center", transform: open ? "rotateY(-105deg)" : "rotateY(0)" }}
              className="absolute inset-0 rounded-t-[999px] bg-red border-r-[5px] border-ink transition-transform duration-700 cursor-pointer"
            >
              <span className="absolute left-1/2 -translate-x-1/2 top-16 w-28 h-44 rounded-t-[999px] border-[4px] border-ink/60" />
              <span className="absolute right-6 top-1/2 w-9 h-9 rounded-full bg-yellow border-[4px] border-ink shadow-[2px_3px_0_#3b1410] hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
