"use client";
import { useState } from "react";
import { services, icons } from "./Services";

const vibes = [["Loud", "#e5362b"], ["Playful", "#ffe77e"], ["Fresh", "#0ba0d6"], ["Warm", "#f26b2d"], ["Soft", "#fdf5b5"]];

// "Build your brief": pick services and a vibe, then see a mini plan. This is the services + contact twist for the constructor design.
export default function Builder() {
  const [picked, setPicked] = useState(["branding"]);
  const [vibe, setVibe] = useState(0);
  const [done, setDone] = useState(false);

  // Adds or removes a service from the chosen list.
  function toggle(key) {
    setDone(false);
    setPicked(picked.includes(key) ? picked.filter((k) => k !== key) : [...picked, key]);
  }

  const chosen = services.filter((s) => picked.includes(s.key));
  const card = "bg-[#fffaf0] border-2 border-red/70 rounded-3xl p-5 sm:p-7";
  return (
    <section id="services" className="px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-4">
        <h2 className="text-4xl sm:text-6xl text-red text-center">Create your campaign</h2>
        <div className={card}>
          <h3 className="display text-2xl text-red">Select your services</h3>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map((s) => {
              const on = picked.includes(s.key);
              return (
                <button key={s.key} onClick={() => toggle(s.key)} aria-pressed={on}
                  className={`rounded-2xl p-3 text-left border-2 transition ${on ? "bg-red text-paper border-red scale-[1.03]" : "bg-butter border-transparent hover:border-red/50"}`}>
                  <svg viewBox="0 0 100 100" className="w-full max-w-[7rem] mx-auto" aria-hidden="true">{icons[s.key]}</svg>
                  <span className="display block mt-2 text-sm sm:text-base">{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className={card}>
          <h3 className="display text-2xl text-red">Pick a vibe</h3>
          <div className="mt-5 flex flex-wrap gap-4">
            {vibes.map(([name, c], i) => (
              <button key={name} onClick={() => { setVibe(i); setDone(false); }} aria-label={name} aria-pressed={vibe === i}
                className={`w-14 h-14 rounded-full border-[3px] ${vibe === i ? "border-ink scale-110 ring-4 ring-red/40" : "border-transparent"} transition`} style={{ background: c }} />
            ))}
            <span className="self-center display text-red">{vibes[vibe][0]}</span>
          </div>
        </div>
        <div className="text-center">
          <button onClick={() => setDone(true)} disabled={!chosen.length} className="btn bg-red text-paper disabled:opacity-50">See your plan</button>
        </div>
        {done && (
          <div className="rounded-3xl border-2 border-red p-6 text-paper" style={{ background: vibes[vibe][1], color: vibe === 1 || vibe === 4 ? "#3b1410" : "#fff8e1" }}>
            <h3 className="display text-3xl">Your plan</h3>
            <p className="mt-2">A <strong>{vibes[vibe][0].toLowerCase()}</strong> campaign with: {chosen.map((s) => s.name).join(", ")}.</p>
            <a href="#contact" className="btn bg-paper text-ink mt-4">Send this to Penny</a>
          </div>
        )}
      </div>
    </section>
  );
}
