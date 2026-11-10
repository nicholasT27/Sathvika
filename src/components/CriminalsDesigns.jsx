"use client";
import { useState } from "react";
import Mascot from "./Mascot";

const crimes = [
  { mood: "happy", id: "0001", charge: "Stealing the spotlight", verdict: "Guilty of charm" },
  { mood: "wink", id: "0002", charge: "Armed with a pen and dangerous ideas", verdict: "Guilty as inked" },
  { mood: "shock", id: "0003", charge: "Caught red-handed with extra coffee", verdict: "Guilty, caffeinated" },
  { mood: "smug", id: "0004", charge: "Resisting beige", verdict: "Guilty, proudly" },
];
const eyebrow = "text-xs font-semibold uppercase tracking-[0.3em]";

// Design 1, "Police lineup": Penny in four mugshots against a height chart under flashing siren lights. Click a mugshot for the camera flash and the verdict.
export function LineupCriminals() {
  const [flash, setFlash] = useState(-1);
  const [verdict, setVerdict] = useState([]);
  // Flashes the camera on one mugshot and stamps its verdict.
  function snap(i) {
    setFlash(i);
    setVerdict((v) => (v.includes(i) ? v : [...v, i]));
    setTimeout(() => setFlash(-1), 260);
  }
  return (
    <div className="relative mx-auto max-w-6xl text-[#f8efdc]">
      <span className="siren-a pointer-events-none absolute -top-10 left-0 w-40 h-40 rounded-full bg-red blur-3xl" aria-hidden="true" />
      <span className="siren-b pointer-events-none absolute -top-10 right-0 w-40 h-40 rounded-full bg-blue blur-3xl" aria-hidden="true" />
      <div className="relative text-center">
        <p className={`${eyebrow} text-yellow`}>Case file #001 · Suspect: Penny the Pen</p>
        <h2 className="mt-3 text-5xl sm:text-7xl">Creative <span className="text-red">Criminals</span></h2>
        <p className="mt-3 max-w-xl mx-auto opacity-90">Our mascot has been brought in for questioning. Four mugshots, four charges, one very smug pen. Click a photo to take it.</p>
      </div>
      <ul className="relative mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {crimes.map((c, i) => (
          <li key={c.id} className="h-full">
            <button onClick={() => snap(i)} aria-label={`Take mugshot ${c.id}`} className="relative flex flex-col h-full w-full text-left bg-[#fffaf0] text-ink border-[4px] border-[#f8efdc] p-2 pb-3 shadow-[0_14px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition">
              <span className="relative block h-60 bg-sky overflow-hidden px-3 pt-1">
                {[...Array(6)].map((_, n) => <span key={n} className="absolute left-0 right-0 border-t-2 border-ink/25" style={{ top: `${14 + n * 14}%` }}><span className="absolute left-1 -top-4 text-[10px] text-ink/60">{6 - n}ft</span></span>)}
                <Mascot mood={c.mood} steam={false} className="relative h-full w-auto mx-auto" />
                {verdict.includes(i) && <span className="stamp-in absolute inset-0 grid place-items-center"><span className="display text-red border-[4px] border-red rounded-lg px-3 py-1 bg-butter/85 text-lg text-center -rotate-12">{c.verdict}</span></span>}
                <span className={`absolute inset-0 bg-white transition-opacity duration-200 ${flash === i ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
              </span>
              <span className="mt-2 mx-auto block w-[85%] bg-ink text-butter text-center display py-1 text-sm tracking-widest">PENNY · {c.id}</span>
              <span className="block text-center text-xs mt-1.5 leading-tight min-h-[2rem]">Charge: {c.charge}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="relative mt-10 text-center display text-xl text-yellow">Reward for her capture: a brand nobody forgets.</p>
    </div>
  );
}

const hideouts = [{ left: "8%", top: "38%" }, { left: "72%", top: "8%" }, { left: "40%", top: "36%" }, { left: "78%", top: "34%" }, { left: "14%", top: "8%" }, { left: "46%", top: "10%" }];
const taunts = ["Catch me if you can!", "Too slow!", "Nope, not me!", "Over here!", "Is that all you've got?"];

// Design 2, "Catch Penny": a small game. Penny hops around a street scene and you have to catch her three times to bust her.
export function CatchCriminals() {
  const [caught, setCaught] = useState(0);
  const [spot, setSpot] = useState(0);
  const busted = caught >= 3;
  // Each click catches her once, and she wriggles free to a new hiding place until the third time.
  function grab() {
    if (busted) return;
    setCaught(caught + 1);
    setSpot((spot + 1 + Math.floor(Math.random() * (hideouts.length - 1))) % hideouts.length);
  }
  function again() { setCaught(0); setSpot(0); }
  const mood = busted ? "smug" : ["wink", "shock", "happy"][caught % 3];
  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <p className={`${eyebrow} text-red`}>Most wanted</p>
        <h2 className="mt-3 text-4xl sm:text-6xl text-ink">Catch the <span className="text-red">Creative Criminal</span></h2>
        <p className="mt-3">Penny has escaped. Click her three times to make the arrest.</p>
      </div>
      <div className="relative mt-10 h-[22rem] sm:h-[26rem] rounded-3xl border-[4px] border-ink overflow-hidden bg-sky shadow-[8px_8px_0_rgba(106,58,51,0.35)]">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[#bdb5a8] border-t-[4px] border-ink" aria-hidden="true" />
        {[8, 38, 70].map((l, i) => <div key={l} className="absolute bottom-16 w-[22%] rounded-t-md border-[4px] border-ink bg-[#d98a6c]" style={{ left: `${l}%`, height: `${[52, 70, 58][i]}%` }} aria-hidden="true"><div className="grid grid-cols-3 gap-2 p-3">{[...Array(9)].map((_, n) => <span key={n} className="h-4 bg-[#fff1c9] border-2 border-ink/60" />)}</div></div>)}
        <button onClick={grab} disabled={busted} aria-label="Catch Penny" className="absolute w-20 sm:w-24 transition-all duration-500 ease-[cubic-bezier(0.3,1.4,0.5,1)] cursor-pointer disabled:cursor-default" style={busted ? { left: "50%", top: "30%", transform: "translateX(-50%)" } : { left: hideouts[spot].left, top: hideouts[spot].top }}>
          <span className="relative block"><Mascot mood={mood} steam={!busted} className="w-full" />
            {!busted && <span key={caught} className="slide-up-flat absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border-[3px] border-ink rounded-xl px-2 py-1 text-xs font-bold">{taunts[caught % taunts.length]}</span>}
            {busted && <span className="absolute left-1/2 top-[58%] -translate-x-1/2 text-4xl" aria-hidden="true">⛓</span>}
          </span>
        </button>
        {busted && <div className="stamp-in absolute inset-x-0 bottom-6 grid place-items-center"><span className="display text-4xl sm:text-6xl text-red border-[6px] border-red rounded-xl px-5 py-1 bg-butter/90 -rotate-6">BUSTED!</span></div>}
        <span className="absolute left-4 top-4 bg-paper border-[3px] border-ink rounded-full px-3 py-1 text-sm font-bold">Caught: {Math.min(caught, 3)} / 3</span>
      </div>
      <div className="mt-6 text-center min-h-[4.5rem]">
        {busted ? <><p className="display text-xl">Penny confesses: &ldquo;I only steal attention. Hire us and I&apos;ll steal it for you.&rdquo;</p><div className="mt-3 flex justify-center gap-3"><a href="#contact" className="btn bg-red text-paper text-sm">Hire the criminal</a><button onClick={again} className="btn bg-paper text-sm">Let her escape again</button></div></> : <p className="text-sm font-semibold">Hint: she gets cheekier every time.</p>}
      </div>
    </div>
  );
}

const evidence = [
  { t: "Exhibit A", h: "Stealing the spotlight", d: "Every campaign we touch ends up the star of the feed.", pos: "left-[3%] top-[6%]", pin: [17, 12], rot: "-rotate-3" },
  { t: "Exhibit B", h: "Armed with a pen", d: "Dangerous ideas, sharpened daily.", pos: "right-[3%] top-[6%]", pin: [83, 12], rot: "rotate-3" },
  { t: "Exhibit C", h: "Extra coffee on the scene", d: "Fuel found at every late-night brainstorm.", pos: "left-[5%] bottom-[6%]", pin: [19, 38], rot: "rotate-2" },
  { t: "Exhibit D", h: "Resisting beige", d: "Boring briefs never make it out alive.", pos: "right-[5%] bottom-[6%]", pin: [81, 38], rot: "-rotate-2" },
];

// Design 3, "Case board": a detective's corkboard. Penny's photo sits in the middle with red strings to four pieces of evidence. Click one to pull its string tight.
export function BoardCriminals() {
  const [on, setOn] = useState(0);
  const closed = on === 4;
  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <p className={`${eyebrow} text-red`}>Detective&apos;s corkboard</p>
        <h2 className="mt-3 text-4xl sm:text-6xl text-ink">Creative <span className="text-red">Criminals</span></h2>
        <p className="mt-3">Click the evidence to follow the strings. Every one leads to Penny.</p>
      </div>
      <div className="relative mt-10 rounded-3xl border-[10px] border-[#8a5a2b] shadow-[0_18px_40px_rgba(60,30,10,0.4)] overflow-hidden" style={{ backgroundColor: "#d2a066", backgroundImage: "radial-gradient(rgba(90,50,20,0.35) 1.2px, transparent 1.8px), radial-gradient(rgba(255,230,180,0.35) 1px, transparent 1.6px)", backgroundSize: "14px 14px, 23px 23px" }}>
        {/* Desktop board with strings */}
        <div className="relative hidden md:block aspect-[16/8.5]">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
            {evidence.map((e, i) => <line key={e.t} x1="50" y1="24" x2={e.pin[0]} y2={e.pin[1]} stroke="#cd4437" strokeWidth={on > i || closed ? 0.9 : 0.35} vectorEffect="non-scaling-stroke" style={{ strokeWidth: on > i ? 4 : 2, transition: "all .5s" }} />)}
          </svg>
          {evidence.map((e, i) => (
            <button key={e.t} onClick={() => setOn(Math.max(on, i + 1))} className={`absolute ${e.pos} w-[27%] text-left bg-[#fff6dc] p-4 shadow-[3px_5px_0_rgba(60,30,10,0.35)] ${e.rot} hover:rotate-0 hover:scale-105 transition ${on > i ? "ring-4 ring-red/60" : ""}`}>
              <span className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-red border-2 border-ink" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red">{e.t}</span>
              <span className="display block text-lg leading-tight">{e.h}</span>
              <span className="block text-sm mt-1">{e.d}</span>
            </button>
          ))}
          <div className="absolute left-1/2 top-[24%] -translate-x-1/2 -translate-y-[10%] w-[24%] bg-white p-3 pb-4 rotate-2 shadow-[4px_6px_0_rgba(60,30,10,0.4)]">
            <span className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-red border-2 border-ink" aria-hidden="true" />
            <div className="bg-sky h-44 px-6 pt-2"><Mascot mood={closed ? "smug" : "shock"} steam={false} className="h-full w-auto mx-auto" /></div>
            <p className="display text-center text-sm mt-2">PRIME SUSPECT: PENNY</p>
            {closed && <span className="stamp-in absolute inset-x-0 top-1/3 grid place-items-center"><span className="display text-3xl text-red border-[5px] border-red rounded-lg px-3 bg-butter/90 -rotate-12">CASE CLOSED</span></span>}
          </div>
        </div>
        {/* Phone layout: photo on top, evidence cards below */}
        <div className="md:hidden p-5 space-y-4">
          <div className="mx-auto w-48 bg-white p-3 rotate-2 shadow-[4px_6px_0_rgba(60,30,10,0.4)]"><div className="bg-sky h-40 px-6 pt-2"><Mascot mood="shock" steam={false} className="h-full w-auto mx-auto" /></div><p className="display text-center text-sm mt-2">PRIME SUSPECT: PENNY</p></div>
          {evidence.map((e) => <div key={e.t} className={`bg-[#fff6dc] p-4 shadow-[3px_5px_0_rgba(60,30,10,0.35)] ${e.rot}`}><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red">{e.t}</span><span className="display block text-lg">{e.h}</span><span className="block text-sm mt-1">{e.d}</span></div>)}
        </div>
      </div>
      <p className="mt-5 text-center text-sm font-semibold">{closed ? "All strings lead to Penny. Case closed. " : `Strings pulled: ${on} / 4. `}<a href="#contact" className="underline underline-offset-4">Hire the suspect →</a></p>
    </div>
  );
}
