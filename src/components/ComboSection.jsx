"use client";
import { useState } from "react";

const combos = {
  orange: { label: "Orange & white", vars: { "--c1": "var(--orange)", "--c2": "#ffffff", "--size": "96px" } },
  blue: { label: "Butter & blue", vars: { "--c1": "var(--sky)", "--c2": "var(--butter)", "--size": "96px" } },
};

// Wraps a design and lets you switch its thick checks between the two colour combos from the brief.
export default function ComboSection({ children, start = "orange", className = "" }) {
  const [key, setKey] = useState(start);
  return (
    <div style={combos[key].vars} className={`relative ${className}`}>
      <div className="absolute right-3 top-3 z-30 flex gap-1 rounded-full bg-paper/95 border border-ink/20 p-1 shadow-sm" role="group" aria-label="Checks colours">
        {Object.entries(combos).map(([k, c]) => (
          <button key={k} onClick={() => setKey(k)} aria-pressed={key === k} className={`text-[11px] font-semibold px-3 py-1 rounded-full transition ${key === k ? "bg-red text-paper" : "text-ink hover:bg-ink/10"}`}>{c.label}</button>
        ))}
      </div>
      {children}
    </div>
  );
}
