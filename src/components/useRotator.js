"use client";
import { useEffect, useRef, useState } from "react";

// Steps through "count" items by itself once the element is on screen, and pauses while it is hovered.
// Returns the active item, a way to pick one, a ref to attach to the section, and whether it is running.
export default function useRotator(count, duration = 4500) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!inView || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % count), duration);
    return () => clearTimeout(t);
  }, [inView, hovered, active, count, duration]);
  const hoverProps = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };
  return { active, setActive, ref, inView, running: inView && !hovered, hoverProps };
}
