"use client";
import { useEffect, useState } from "react";
import ScrollBar from "./ScrollBar";
import { chapters } from "@/data/content";
import { HeroSection, Ticker, FounderSection, IdeologySection, RemoteChapter, CriminalsSection, LicenceChapter, RulesSection, ServicesSection, ContactChapter } from "./SiteSections";

const small = "text-[11px] font-semibold uppercase tracking-[0.2em]";
const blurbs = ["The face behind the chaos", "A quick hello from the founder", "Four beliefs behind every brief", "How we work, from anywhere", "Our mascot, brought in for questioning", "Fully (un)official paperwork", "House rules, not legally binding", "Everything your brand needs to grow", "Send us a postcard"];

// The numbered title band that opens a chapter.
function Band({ i, tone }) {
  return (
    <div className={`${tone} px-5 py-8 sm:py-10 border-y-[3px] border-ink`}>
      <div className="mx-auto max-w-6xl flex items-end justify-between gap-6">
        <div className="flex items-end gap-4 sm:gap-6">
          <span className="display text-6xl sm:text-8xl leading-none opacity-90">{String(i + 1).padStart(2, "0")}</span>
          <div className="pb-1"><p className={small}>Chapter</p><h2 className="display text-2xl sm:text-4xl leading-tight">{chapters[i][1]}</h2></div>
        </div>
        <p className="hidden md:block max-w-xs text-sm text-right italic">{blurbs[i]}</p>
      </div>
    </div>
  );
}

// Layout D: a big numbered title band introduces each chapter, so every section starts the same way.
export function ChaptersLayout() {
  const tones = ["bg-yellow text-ink", "bg-sky text-ink", "bg-red text-paper", "bg-butter text-ink"];
  const t = (i) => tones[i % tones.length];
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ScrollBar />
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b-[3px] border-ink">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-5 py-2.5">
          <a href="#top" className="display text-xl text-red">Sathvika<span className="text-blue">*</span></a>
          <ul className="hidden lg:flex gap-4">{chapters.slice(1, 8).map(([id, n]) => <li key={id}><a href={`#${id}`} className={`${small} hover:text-red`}>{n}</a></li>)}</ul>
          <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
        </div>
      </header>
      <div className="bg-yellow"><HeroSection /></div><Ticker />
      <Band i={1} tone={t(1)} /><FounderSection />
      <Band i={2} tone={t(2)} /><IdeologySection />
      <Band i={3} tone={t(3)} /><RemoteChapter bg="bg-sky" />
      <Band i={4} tone={t(0)} /><CriminalsSection />
      <Band i={5} tone={t(1)} /><LicenceChapter />
      <Band i={6} tone={t(2)} /><RulesSection bg="bg-butter" />
      <Band i={7} tone={t(3)} /><ServicesSection bg="bg-sky" />
      <Band i={8} tone={t(0)} /><ContactChapter />
      <footer className="bg-ink text-butter text-center py-8"><p className="display text-3xl">Sathvika<span className="text-yellow">*</span></p><p className="text-xs mt-2 opacity-70">© 2026 Sathvika. All rights reserved.</p></footer>
    </main>
  );
}

// Layout E: one chapter on screen at a time, like an app. A tab dock at the bottom switches chapters; arrow keys and links work too.
export function TabsLayout() {
  const [tab, setTab] = useState(0);
  const panels = [
    <div key="0" className="bg-yellow pt-6"><HeroSection /><Ticker /></div>,
    <FounderSection key="1" />, <IdeologySection key="2" />, <RemoteChapter key="3" bg="bg-sky" />, <CriminalsSection key="4" />,
    <LicenceChapter key="5" />, <RulesSection key="6" bg="bg-butter" />, <ServicesSection key="7" bg="bg-sky" />, <ContactChapter key="8" />,
  ];
  // Jump to a chapter and return to the top of the page.
  function go(i) { setTab(Math.max(0, Math.min(chapters.length - 1, i))); window.scrollTo({ top: 0 }); }
  useEffect(() => {
    // In-page links such as "#contact" open the matching chapter instead of scrolling.
    function onClick(e) {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const i = chapters.findIndex(([id]) => `#${id}` === a.getAttribute("href"));
      if (i >= 0) { e.preventDefault(); setTab(i); window.scrollTo({ top: 0 }); }
    }
    function onKey(e) {
      if (e.target.closest && e.target.closest("input, textarea")) return;
      if (e.key === "ArrowRight") setTab((t) => Math.min(chapters.length - 1, t + 1));
      if (e.key === "ArrowLeft") setTab((t) => Math.max(0, t - 1));
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
  }, []);
  return (
    <main className="soft bg-paper overflow-x-clip pb-28">
      <header className="px-5 py-3 flex items-center justify-between bg-paper border-b-[3px] border-ink">
        <span className="display text-xl text-red">Sathvika<span className="text-blue">*</span></span>
        <span className={`${small} hidden sm:block`}>{String(tab + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")} · {chapters[tab][1]}</span>
        <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
      </header>
      {panels.map((p, i) => <div key={i} hidden={tab !== i} className={tab === i ? "tab-in" : ""}>{p}</div>)}
      <nav aria-label="Chapters" className="fixed bottom-3 inset-x-0 z-50 px-3">
        <div className="mx-auto max-w-3xl flex items-center gap-1 rounded-full border-[3px] border-ink bg-paper/95 backdrop-blur p-1.5 shadow-[4px_4px_0_var(--ink)]">
          <button onClick={() => go(tab - 1)} aria-label="Previous chapter" disabled={tab === 0} className="w-9 h-9 shrink-0 rounded-full border-2 border-ink disabled:opacity-30">←</button>
          <ul className="flex-1 flex gap-1 overflow-x-auto no-scrollbar">
            {chapters.map(([id, n], i) => <li key={id} className="shrink-0"><button onClick={() => go(i)} aria-current={tab === i} className={`rounded-full px-3 py-1.5 ${small} ${tab === i ? "bg-red text-paper" : "hover:bg-yellow"}`}>{String(i + 1).padStart(2, "0")}<span className={tab === i ? "" : "hidden sm:inline"}> {n}</span></button></li>)}
          </ul>
          <button onClick={() => go(tab + 1)} aria-label="Next chapter" disabled={tab === chapters.length - 1} className="w-9 h-9 shrink-0 rounded-full border-2 border-ink disabled:opacity-30">→</button>
        </div>
      </nav>
    </main>
  );
}

// A numbered stop on the journey line, wrapping one chapter.
function Stop({ i, children }) {
  return (
    <div className="relative">
      <span className="absolute left-6 top-6 z-30 hidden xl:flex items-center gap-2">
        <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red text-paper border-[3px] border-ink grid place-items-center display text-sm sm:text-base shadow-[2px_3px_0_var(--ink)]">{String(i + 1).padStart(2, "0")}</span>
        <span className={`${small} bg-paper border-2 border-ink rounded-full px-3 py-1`}>{chapters[i][1]}</span>
      </span>
      {children}
    </div>
  );
}

// Layout F: a dashed journey line runs down the left edge with a numbered stop at the start of every chapter.
export function JourneyLayout() {
  return (
    <main className="soft bg-paper overflow-x-clip relative">
      <ScrollBar />
      <span className="absolute left-[2.9rem] top-0 bottom-0 w-[4px] z-20 pointer-events-none hidden xl:block" style={{ background: "repeating-linear-gradient(to bottom, var(--ink) 0 12px, transparent 12px 24px)" }} aria-hidden="true" />
      <header className="relative z-40 px-5 xl:pl-24 py-3 flex items-center justify-between bg-paper border-b-[3px] border-ink">
        <a href="#top" className="display text-xl text-red">Sathvika<span className="text-blue">*</span></a>
        <p className={`${small} hidden md:block`}>Follow the line · 9 stops</p>
        <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
      </header>
      <Stop i={0}><div className="bg-yellow"><HeroSection /><Ticker /></div></Stop>
      <Stop i={1}><FounderSection /></Stop>
      <Stop i={2}><IdeologySection /></Stop>
      <Stop i={3}><RemoteChapter bg="bg-sky" /></Stop>
      <Stop i={4}><CriminalsSection /></Stop>
      <Stop i={5}><LicenceChapter /></Stop>
      <Stop i={6}><RulesSection bg="bg-butter" /></Stop>
      <Stop i={7}><ServicesSection bg="bg-sky" /></Stop>
      <Stop i={8}><ContactChapter /></Stop>
      <footer className="relative z-30 bg-ink text-butter text-center py-8"><p className="display text-3xl">The end of the line<span className="text-yellow">*</span></p><p className="text-xs mt-2 opacity-70">© 2026 Sathvika. All rights reserved.</p></footer>
    </main>
  );
}
