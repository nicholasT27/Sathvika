"use client";
import { useState } from "react";

// A round-top arch door with a knob. Press the knob (or the door) to swing it open and see the photo behind it.
// "variant" changes the whole look: "solid" (flat colour), "line" (blueprint drawing) or "glow" (night scene with light spilling out).
export default function ArchDoor({ photo, alt, doorColor = "var(--red)", caption = "Welcome in!", className = "", glass = false, plaque = "", mat = "", variant = "solid" }) {
  const [open, setOpen] = useState(false);
  const line = variant === "line";
  const glow = variant === "glow";
  const frame = line ? "border-[3px] border-white" : glow ? "border-[5px] border-[#f3d79a] shadow-[0_0_50px_rgba(255,217,135,0.35)]" : "border-[5px] border-ink shadow-[8px_8px_0_rgba(106,58,51,0.35)]";
  const panel = line ? "border-white/80 border-dashed" : glow ? "border-[#f3d79a]/40" : "border-ink/40";
  return (
    <div className={`relative [perspective:1400px] ${className}`}>
      {glow && <span aria-hidden="true" className={`pointer-events-none absolute -inset-12 transition-opacity duration-1000 ${open ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(ellipse at 50% 62%, rgba(255,217,135,0.8), rgba(255,217,135,0) 62%)" }} />}
      <div className={`relative aspect-[3/4] w-full rounded-t-[999px] overflow-hidden bg-butter ${frame}`} role="img" aria-label={alt}>
        <div className={`absolute inset-0 bg-cover bg-center ${line ? "grayscale" : ""}`} style={{ backgroundImage: `url(${photo})` }} />
        {line && <span className="absolute inset-0 bg-[#1e4f9a] mix-blend-multiply" aria-hidden="true" />}
        <span className={`absolute left-1/2 -translate-x-1/2 bottom-4 ${line ? "bg-white text-[#1e4f9a]" : "bg-paper text-ink"} display text-sm whitespace-nowrap px-4 py-1 rounded-full transition-opacity duration-700 ${open ? "opacity-100 delay-500" : "opacity-0"}`}>{caption}</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close the door" : "Open the door"}
          style={{ background: line ? "rgba(20,70,140,0.6)" : glow ? "#4a2a22" : doorColor, transformOrigin: "left center", transform: open ? "rotateY(-108deg)" : "rotateY(0)" }}
          className={`absolute inset-0 rounded-t-[999px] ${line ? "border-r-[3px] border-white" : glow ? "border-r-[5px] border-[#f3d79a]" : "border-r-[5px] border-ink"} transition-transform duration-[900ms] ease-[cubic-bezier(0.3,0.9,0.3,1)] cursor-pointer [backface-visibility:hidden]`}
        >
          <span className={`absolute left-[14%] right-[14%] top-[10%] h-[34%] rounded-t-[999px] border-[4px] ${panel} ${glass ? "bg-sky overflow-hidden" : ""}`}>
            {glass && <span className="absolute left-[18%] top-[38%] w-[46%] h-[22%] rounded-full bg-paper/90" />}
          </span>
          <span className={`absolute left-[14%] right-[14%] top-[50%] bottom-[10%] rounded-md border-[4px] ${panel} grid place-items-start justify-items-center pt-3`}>
            {plaque && <span className="display text-xs sm:text-sm bg-paper text-ink px-2 py-0.5 rounded-sm border-2 border-ink/50">{plaque}</span>}
          </span>
          <span className={`absolute right-[12%] top-[52%] w-[13%] aspect-square rounded-full hover:scale-110 transition-transform ${line ? "border-[3px] border-white bg-transparent" : glow ? "bg-yellow border-[4px] border-[#f3d79a] shadow-[0_0_14px_rgba(255,217,135,0.9)]" : "bg-yellow border-[4px] border-ink shadow-[2px_3px_0_var(--ink)]"}`}>
            {!line && <span className="absolute left-[22%] top-[18%] w-[24%] h-[24%] rounded-full bg-paper/80" />}
          </span>
        </button>
      </div>
      {mat && <div className="mx-auto mt-2 w-[82%] rounded-md border-[3px] border-ink/60 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-ink bg-[repeating-linear-gradient(90deg,var(--yellow)_0_14px,var(--paper)_14px_28px)]">{mat}</div>}
    </div>
  );
}
