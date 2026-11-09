"use client";
import { useEffect, useRef } from "react";

// A thin line at the top of the page that fills up as you scroll down.
export default function ScrollBar() {
  const bar = useRef(null);
  useEffect(() => {
    // Updates the bar width to match how far down the page you are.
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div ref={bar} className="fixed top-0 left-0 h-1.5 bg-red z-[60]" style={{ width: 0 }} aria-hidden="true" />;
}
