"use client";
import { useEffect, useState } from "react";
import { chapters } from "@/data/content";

// Works out which chapter is on screen right now, so menus can highlight it.
function useActive() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const els = chapters.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

const small = "text-[11px] font-semibold uppercase tracking-[0.2em]";

// A floating pill menu that stays at the top of the screen with the current chapter highlighted.
export function PillNav() {
  const active = useActive();
  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3">
      <nav aria-label="Chapters" className="mx-auto max-w-5xl flex items-center justify-between gap-3 rounded-full border-[3px] border-ink bg-paper/95 backdrop-blur px-4 sm:px-5 py-2 shadow-[4px_4px_0_var(--ink)]">
        <a href="#top" className="display text-xl text-red">Sathvika<span className="text-blue">*</span></a>
        <ul className="hidden lg:flex gap-4">{chapters.slice(1, 8).map(([id, n]) => <li key={id}><a href={`#${id}`} className={`${small} ${active === id ? "text-red underline underline-offset-8" : "hover:text-red"}`}>{n}</a></li>)}</ul>
        <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
      </nav>
    </header>
  );
}

// A left-hand rail listing the nine chapters, numbered, with the current one marked.
export function ChapterRail() {
  const active = useActive();
  return (
    <aside className="hidden lg:flex flex-col sticky top-0 h-screen border-r border-ink/20 bg-butter px-6 py-8">
      <a href="#top" className="display text-3xl text-red">Sathvika<span className="text-blue">*</span><span className="block text-[10px] tracking-[0.35em] uppercase font-semibold text-ink/70 mt-1">Creative marketing</span></a>
      <ol className="mt-10 space-y-1 flex-1">
        {chapters.map(([id, n], i) => (
          <li key={id}><a href={`#${id}`} className={`flex items-baseline gap-3 py-1.5 border-l-4 pl-3 transition ${active === id ? "border-red text-red" : "border-transparent hover:border-ink/30"}`}>
            <span className="display text-sm opacity-70">{String(i + 1).padStart(2, "0")}</span><span className={`${small} ${active === id ? "font-bold" : ""}`}>{n}</span>
          </a></li>
        ))}
      </ol>
      <a href="#contact" className="btn bg-red text-paper text-sm text-center">Start a project</a>
    </aside>
  );
}

// The same chapter list as a swipeable strip, for phones and tablets.
export function ChapterChips() {
  const active = useActive();
  return (
    <nav aria-label="Chapters" className="lg:hidden sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink/20 overflow-x-auto">
      <ul className="flex gap-2 px-3 py-2 min-w-max">{chapters.map(([id, n], i) => <li key={id}><a href={`#${id}`} className={`inline-block rounded-full border-2 border-ink px-3 py-1 ${small} ${active === id ? "bg-red text-paper" : "bg-paper"}`}>{String(i + 1).padStart(2, "0")} {n}</a></li>)}</ul>
    </nav>
  );
}

// Dots down the right edge, one per chapter, that jump to it.
export function DotNav() {
  const active = useActive();
  return (
    <nav aria-label="Chapters" className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3">
      {chapters.map(([id, n]) => <a key={id} href={`#${id}`} aria-label={n} title={n} className={`block rounded-full border-2 border-ink transition-all ${active === id ? "h-6 w-3 bg-red" : "h-3 w-3 bg-paper hover:bg-yellow"}`} />)}
    </nav>
  );
}

// Makes the page settle neatly on each full-screen scene while this layout is shown.
export function SnapPage() {
  useEffect(() => {
    document.documentElement.style.scrollSnapType = "y proximity";
    return () => { document.documentElement.style.scrollSnapType = ""; };
  }, []);
  return null;
}

// A simple closing strip with the name and links.
export function FooterBar({ className = "" }) {
  return (
    <footer className={`px-5 py-10 text-center ${className}`}>
      <p className="display text-3xl text-ink">Sathvika<span className="text-red">*</span></p>
      <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">{chapters.slice(1).map(([id, n]) => <li key={id}><a href={`#${id}`} className={small}>{n}</a></li>)}</ul>
      <p className="mt-6 text-xs opacity-70">© 2026 Sathvika. All rights reserved.</p>
    </footer>
  );
}
