"use client";
import { useState } from "react";

// A round-top arch door with a knob. Press the knob (or the door) to swing it open and see the photo behind it.
export default function ArchDoor({ photo, alt, doorColor = "var(--red)", caption = "Welcome in!", className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`[perspective:1400px] ${className}`}>
      <div className="relative aspect-[3/4] w-full rounded-t-[999px] overflow-hidden border-[5px] border-ink shadow-[8px_8px_0_rgba(106,58,51,0.35)] bg-butter bg-cover bg-center" role="img" aria-label={alt} style={{ backgroundImage: `url(${photo})` }}>
        <span className={`absolute left-1/2 -translate-x-1/2 bottom-4 bg-paper text-ink display text-sm whitespace-nowrap px-4 py-1 rounded-full transition-opacity duration-700 ${open ? "opacity-100 delay-500" : "opacity-0"}`}>{caption}</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close the door" : "Open the door"}
          style={{ background: doorColor, transformOrigin: "left center", transform: open ? "rotateY(-108deg)" : "rotateY(0)" }}
          className="absolute inset-0 rounded-t-[999px] border-r-[5px] border-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.3,0.9,0.3,1)] cursor-pointer [backface-visibility:hidden]"
        >
          <span className="absolute left-[14%] right-[14%] top-[10%] h-[34%] rounded-t-[999px] border-[4px] border-ink/40" />
          <span className="absolute left-[14%] right-[14%] top-[50%] bottom-[10%] rounded-md border-[4px] border-ink/40" />
          <span className="absolute right-[12%] top-[52%] w-[13%] aspect-square rounded-full bg-yellow border-[4px] border-ink shadow-[2px_3px_0_var(--ink)] hover:scale-110 transition-transform">
            <span className="absolute left-[22%] top-[18%] w-[24%] h-[24%] rounded-full bg-paper/80" />
          </span>
        </button>
      </div>
    </div>
  );
}
