"use client";
import { useEffect, useState } from "react";

const zones = [
  ["Mumbai", "Asia/Kolkata", "var(--yellow)"],
  ["London", "Europe/London", "var(--sky)"],
  ["New York", "America/New_York", "var(--orange)"],
  ["Sydney", "Australia/Sydney", "var(--butter)"],
];

// Four small arch windows showing the local time in cities where the team could be, and who is online right now.
export default function ZoneClocks() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    // Update right after the page loads, then every 30 seconds.
    const first = setTimeout(() => setNow(new Date()), 0);
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);
  return (
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {zones.map(([city, tz, color]) => {
        let time = "--:--";
        let online = false;
        if (now) {
          const parts = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(now);
          time = parts;
          const h = parseInt(parts.slice(0, 2), 10);
          online = h >= 9 && h < 18;
        }
        return (
          <li key={city} className="w-24 sm:w-28 text-center">
            <div className="rounded-t-[999px] border-[3px] border-ink/70 pt-8 pb-3 px-2" style={{ background: color }}>
              <p className="display text-xl text-ink">{time}</p>
              <p className="text-xs font-semibold text-ink mt-1 flex items-center justify-center gap-1"><span className={`inline-block w-2 h-2 rounded-full ${online ? "bg-[#3b8f5c]" : "bg-ink/30"}`} />{online ? "Online" : "Offline"}</p>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-paper">{city}</p>
          </li>
        );
      })}
    </ul>
  );
}
