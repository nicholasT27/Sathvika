"use client";
import { useEffect, useState } from "react";

// Builds the outline of a wobbly "cloud" frame. More bumps = more scalloped edge.
function wavyPath(bumps, depth) {
  const pts = [];
  for (let i = 0; i <= 120; i++) {
    const t = (i / 120) * Math.PI * 2;
    const r = 1 + depth * Math.cos(bumps * t);
    // Squarish circle so photos fill the frame well.
    const x = 50 + 46 * r * Math.sign(Math.cos(t)) * Math.abs(Math.cos(t)) ** 0.6;
    const y = 50 + 46 * r * Math.sign(Math.sin(t)) * Math.abs(Math.sin(t)) ** 0.6;
    pts.push(`${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(" ") + "Z";
}

// A photo inside a coloured wavy border. If the photo file is missing, Penny stands in until it is added.
export default function WavyFrame({ id, color, src, label, children, bumps = 10, className = "drop-shadow-[5px_6px_0_rgba(59,20,16,0.9)]" }) {
  const [loaded, setLoaded] = useState(false);
  // Only draw the photo once we know the file really exists.
  useEffect(() => {
    if (!src) return;
    const probe = new window.Image();
    probe.onload = () => setLoaded(true);
    probe.src = src;
  }, [src]);
  const outer = wavyPath(bumps, 0.045);
  const inner = wavyPath(bumps, 0.045);
  return (
    <svg viewBox="0 0 100 100" className={`w-full h-auto ${className}`} role="img" aria-label={label}>
      <defs>
        <clipPath id={`clip-${id}`}>
          <path d={inner} transform="translate(50 50) scale(0.8) translate(-50 -50)" />
        </clipPath>
      </defs>
      <path d={outer} style={{ fill: color, stroke: "var(--ink)" }} strokeWidth="1.6" />
      <g clipPath={`url(#clip-${id})`}>
        <rect width="100" height="100" fill="#fff8e1" />
        {children}
        {src && loaded && (
          <image href={src} x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" />
        )}
      </g>
    </svg>
  );
}
