"use client";
import { useEffect, useRef } from "react";

// Wraps content so it animates in the first time it scrolls into view. "anim" picks the style of entrance.
// The outer box is what we watch (it is never hidden); the inner box is what animates.
export default function Reveal({ anim = "rise", delay = 0, className = "", style = {}, children }) {
  const outer = useRef(null);
  useEffect(() => {
    const box = outer.current;
    const el = box && box.firstElementChild;
    if (!el) return;
    el.dataset.ready = "1";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    // Wait a frame so the hidden starting look is painted before we watch for visibility.
    const raf = requestAnimationFrame(() => io.observe(box));
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);
  return (
    <div ref={outer} className={className} style={style}>
      <div data-anim={anim} className="rv" style={{ "--d": `${delay}s`, "--sx": style["--sx"], "--sy": style["--sy"] }}>
        {children}
      </div>
    </div>
  );
}
