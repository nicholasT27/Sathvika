"use client";
import { useEffect, useState } from "react";
import ScrollBar from "./ScrollBar";
import { Icon } from "./Icons";
import { chapters } from "@/data/content";
import { HeroSection, Ticker, FounderSection, IdeologySection, RemoteChapter, CriminalsSection, LicenceChapter, RulesSection, ServicesSection, ContactChapter } from "./SiteSections";

const small = "text-[11px] font-semibold uppercase tracking-[0.2em]";
const blurbs = ["The face behind the chaos", "A quick hello from the founder", "Four beliefs behind every brief", "How we work, from anywhere", "Our mascot, brought in for questioning", "Fully (un)official paperwork", "House rules, not legally binding", "Everything your brand needs to grow", "Send us a postcard"];

// The chapters in order, ready to drop into a layout. Chapter 0 is the hero with the ticker.
function chapterElements(full = false, strips = true) {
  return [
    <div key="0" className="bg-yellow pt-6"><HeroSection /><Ticker /></div>,
    <FounderSection key="1" full={full} />, <IdeologySection key="2" full={full} strips={strips} />, <RemoteChapter key="3" bg="bg-sky" full={full} />, <CriminalsSection key="4" full={full} />,
    <LicenceChapter key="5" full={full} />, <RulesSection key="6" bg="bg-butter" full={full} />, <ServicesSection key="7" bg="bg-sky" full={full} />, <ContactChapter key="8" full={full} />,
  ];
}

// Tracks which chapter is on screen. "root" can be a scrolling box; leave empty for the whole page.
function useActiveChapter(root) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const els = chapters.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(chapters.findIndex(([id]) => id === e.target.id)); }), { root: root || null, rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [root]);
  return active;
}

const tiles = [
  ["bg-sky", "ads", "col-span-2 row-span-2"], ["bg-yellow", "email", ""], ["bg-butter", "strategy", ""], ["bg-orange", "social", "col-span-2"],
  ["bg-ink text-butter", "performance", ""], ["bg-red text-paper", "creative", ""], ["bg-blue", "website", ""], ["bg-yellow", "content", ""],
];

// Layout G: a launcher. The hero sits on top, then a grid of tiles; each tile opens its chapter as a full-screen page with a close button.
export function LauncherLayout() {
  const [open, setOpen] = useState(-1);
  const panels = chapterElements();
  useEffect(() => {
    document.body.style.overflow = open >= 0 ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    // Links like "#contact" open that chapter; Escape closes the open one.
    function onClick(e) {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const i = chapters.findIndex(([id]) => `#${id}` === a.getAttribute("href"));
      if (i > 0) { e.preventDefault(); setOpen(i); }
      else if (i === 0) { e.preventDefault(); setOpen(-1); window.scrollTo({ top: 0 }); }
    }
    function onKey(e) { if (e.key === "Escape") setOpen(-1); }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
  }, []);
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ScrollBar />
      <header className="px-5 py-3 flex items-center justify-between border-b-[3px] border-ink bg-paper">
        <span className="display text-xl text-red">Sathvika<span className="text-blue">*</span></span>
        <button onClick={() => setOpen(8)} className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</button>
      </header>
      <div id="top" className="bg-yellow pt-6"><HeroSection /><Ticker /></div>
      <section className="px-5 py-16 sm:py-24 bg-paper">
        <div className="mx-auto max-w-6xl">
          <p className={`${small} text-red`}>Explore</p>
          <h2 className="display text-4xl sm:text-6xl text-ink mt-2">Pick a chapter</h2>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[11.5rem] sm:auto-rows-[12.5rem] gap-3 sm:gap-4">
            {chapters.slice(1).map(([id, n], k) => {
              const [tone, icon, span] = tiles[k];
              return (
                <li key={id} className={`${span} ${k === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <button onClick={() => setOpen(k + 1)} className={`${tone} group relative w-full h-full text-left rounded-[1.5rem] border-[3px] border-ink p-4 sm:p-5 shadow-[4px_5px_0_var(--ink)] hover:-translate-y-1 hover:shadow-[4px_9px_0_var(--ink)] transition overflow-hidden`}>
                    <span className="display text-4xl sm:text-6xl opacity-25 absolute right-3 top-1 leading-none">{String(k + 2).padStart(2, "0")}</span>
                    <Icon name={icon} className="absolute left-4 top-4 sm:left-5 sm:top-5 w-9 h-9 sm:w-12 sm:h-12" />
                    <span className="absolute left-4 right-4 bottom-4 sm:left-5 sm:bottom-5">
                      <span className="display block text-xl sm:text-3xl leading-tight">{n}</span>
                      <span className="block text-xs sm:text-sm mt-1 opacity-90">{blurbs[k + 1]}</span>
                      <span className="mt-2 inline-block text-xs font-bold group-hover:translate-x-1 transition">Open →</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <footer className="bg-ink text-butter text-center py-8"><p className="display text-3xl">Sathvika<span className="text-yellow">*</span></p><p className="text-xs mt-2 opacity-70">© 2026 Sathvika. All rights reserved.</p></footer>
      {/* The chapters live here, hidden until opened, so they keep working like normal sections. */}
      <div className={open >= 0 ? "fixed inset-0 z-[70] bg-paper overflow-y-auto tab-in" : "hidden"} role="dialog" aria-label={open >= 0 ? chapters[open][1] : "Chapter"} aria-modal="true">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-2.5 bg-paper/95 backdrop-blur border-b-[3px] border-ink">
          <span className={`${small}`}>{open >= 0 ? `${String(open + 1).padStart(2, "0")} · ${chapters[open][1]}` : ""}</span>
          <div className="flex gap-2">
            <button onClick={() => setOpen(Math.max(1, open - 1))} aria-label="Previous chapter" className="w-9 h-9 rounded-full border-2 border-ink">←</button>
            <button onClick={() => setOpen(Math.min(8, open + 1))} aria-label="Next chapter" className="w-9 h-9 rounded-full border-2 border-ink">→</button>
            <button onClick={() => setOpen(-1)} className="btn bg-red text-paper !py-1.5 !px-4 text-xs">✕ Close</button>
          </div>
        </div>
        {panels.slice(1).map((p, k) => <div key={k} hidden={open !== k + 1}>{p}</div>)}
      </div>
    </main>
  );
}

const tones = ["bg-yellow", "bg-butter", "bg-[#22344f] text-butter", "bg-sky", "bg-[#2a1613] text-butter", "bg-yellow", "bg-butter", "bg-sky", "bg-orange"];

// Layout H: a split screen. The left half stays put and shows the current chapter's number, name and one-line description in its own colour. The right half scrolls.
export function SplitLayout() {
  const active = useActiveChapter(null);
  const els = chapterElements();
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ScrollBar />
      <div className="lg:grid lg:grid-cols-[22rem_1fr]">
        <aside className={`hidden lg:flex sticky top-0 h-screen flex-col justify-between p-8 transition-colors duration-700 ${tones[active]}`}>
          <a href="#top" className="display text-2xl">Sathvika<span className="text-red">*</span></a>
          <div>
            <span key={`n${active}`} className="display block text-[9rem] leading-none opacity-30 slide-up-flat">{String(active + 1).padStart(2, "0")}</span>
            <h2 key={`t${active}`} className="display text-4xl leading-tight slide-up-flat">{chapters[active][1]}</h2>
            <p key={`b${active}`} className="mt-3 text-sm opacity-90 slide-up-flat">{blurbs[active]}</p>
          </div>
          <div>
            <div className="h-1.5 rounded-full bg-current opacity-20 overflow-hidden"><span className="block h-full bg-current opacity-100" style={{ width: `${((active + 1) / chapters.length) * 100}%`, transition: "width .6s" }} /></div>
            <div className="mt-4 flex justify-between items-center">
              <p className={small}>{active + 1} of {chapters.length}</p>
              <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
            </div>
          </div>
        </aside>
        <nav aria-label="Chapters" className="lg:hidden sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink/20 overflow-x-auto no-scrollbar">
          <ul className="flex gap-2 px-3 py-2 min-w-max">{chapters.map(([id, n], i) => <li key={id}><a href={`#${id}`} className={`inline-block rounded-full border-2 border-ink px-3 py-1 ${small} ${active === i ? "bg-red text-paper" : "bg-paper"}`}>{String(i + 1).padStart(2, "0")} {n}</a></li>)}</ul>
        </nav>
        <div className="min-w-0">{els}</div>
      </div>
    </main>
  );
}

// A checks divider between two bands: two rows of squares in the colour of the band below, sitting on the colour of the band above, so one section steps into the next.
function Wave({ from, to }) {
  return (
    <div className="-mb-px" aria-hidden="true" style={{ height: "56px", backgroundColor: from, backgroundImage: `conic-gradient(${to} 25%, transparent 0 50%, ${to} 0 75%, transparent 0)`, backgroundSize: "56px 56px" }} />
  );
}

const waveColors = ["var(--yellow)", "var(--butter)", "#22344f", "var(--sky)", "#2a1613", "var(--yellow)", "var(--butter)", "var(--sky)", "var(--orange)"];

// Layout I: the colours step into each other through checks dividers, with a small progress ring that follows you.
export function WavesLayout() {
  const active = useActiveChapter(null);
  const [menu, setMenu] = useState(false);
  const els = chapterElements(false, false);
  const r = 18, c = 2 * Math.PI * r;
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ScrollBar />
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/15">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-3 px-5 py-2.5">
          <a href="#top" className="display text-xl text-red">Sathvika<span className="text-blue">*</span></a>
          <ul className="hidden lg:flex gap-4">{chapters.slice(1, 8).map(([id, n], i) => <li key={id}><a href={`#${id}`} className={`${small} ${active === i + 1 ? "text-red underline underline-offset-8" : "hover:text-red"}`}>{n}</a></li>)}</ul>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
            <button onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="site-menu" aria-label={menu ? "Close menu" : "Open menu"} className="lg:hidden w-10 h-10 rounded-full border-[3px] border-ink bg-paper grid place-items-center">
              <span className="relative block w-4 h-3" aria-hidden="true">
                <span className={`absolute left-0 right-0 h-[2px] bg-ink transition-all ${menu ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 right-0 top-1/2 h-[2px] bg-ink transition-opacity ${menu ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 right-0 h-[2px] bg-ink transition-all ${menu ? "top-1/2 -rotate-45" : "bottom-0"}`} />
              </span>
            </button>
          </div>
        </div>
        {menu && (
          <nav id="site-menu" aria-label="Chapters" className="lg:hidden border-t border-ink/15 bg-paper max-h-[75vh] overflow-y-auto">
            <ul className="mx-auto max-w-6xl px-5 py-3 grid sm:grid-cols-2 gap-x-8">
              {chapters.map(([id, n], i) => (
                <li key={id}><a href={`#${id}`} onClick={() => setMenu(false)} className={`flex items-baseline gap-3 py-3 border-b border-ink/10 ${active === i ? "text-red" : ""}`}>
                  <span className="display text-lg w-8">{String(i + 1).padStart(2, "0")}</span><span className={`${small} ${active === i ? "font-bold" : ""}`}>{n}</span>
                </a></li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      {els.map((e, i) => (
        <div key={i}>
          {i > 0 && <Wave from={waveColors[i - 1]} to={waveColors[i]} />}
          {e}
        </div>
      ))}
      <a href="#top" aria-label="Back to the top" className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-paper border-[3px] border-ink shadow-[3px_4px_0_var(--ink)] grid place-items-center">
        <svg viewBox="0 0 44 44" className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true"><circle cx="22" cy="22" r={r} fill="none" stroke="rgba(106,58,51,0.15)" strokeWidth="4" /><circle cx="22" cy="22" r={r} fill="none" stroke="var(--red)" strokeWidth="4" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - (active + 1) / chapters.length)} style={{ transition: "stroke-dashoffset .6s" }} /></svg>
        <span className="relative display text-sm">{String(active + 1).padStart(2, "0")}</span>
      </a>
      <footer className="bg-ink text-butter text-center py-8"><p className="display text-3xl">Sathvika<span className="text-yellow">*</span></p><p className="text-xs mt-2 opacity-70">© 2026 Sathvika. All rights reserved.</p></footer>
    </main>
  );
}
