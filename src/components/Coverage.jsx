"use client";
import { useEffect, useState } from "react";

// Teams in four cities and their rough time-zone offsets from UTC in hours (updated for daylight saving after load).
const cities = [
  { name: "Mumbai", tz: "Asia/Kolkata", offset: 5.5, color: "var(--orange)" },
  { name: "London", tz: "Europe/London", offset: 0, color: "var(--blue)" },
  { name: "New York", tz: "America/New_York", offset: -5, color: "var(--svc5)" },
  { name: "Sydney", tz: "Australia/Sydney", offset: 11, color: "var(--svc4)" },
];

// How far a city's clock is ahead of UTC right now, in hours.
function offsetNow(tz, date) {
  const p = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(date);
  const local = parseInt(p.slice(0, 2), 10) * 60 + parseInt(p.slice(3), 10);
  let diff = local - (date.getUTCHours() * 60 + date.getUTCMinutes());
  if (diff > 720) diff -= 1440;
  if (diff < -720) diff += 1440;
  return diff / 60;
}

// A 24-hour chart: each row is a city's 9-to-6 working day, laid on one shared clock. Together the rows cover the whole day.
export default function Coverage() {
  const [offsets, setOffsets] = useState(cities.map((c) => c.offset));
  const [nowH, setNowH] = useState(null);
  useEffect(() => {
    // Read the real time zones once the page has loaded, and keep the "now" line moving.
    function tick() {
      const d = new Date();
      setOffsets(cities.map((c) => offsetNow(c.tz, d)));
      setNowH(d.getUTCHours() + d.getUTCMinutes() / 60);
    }
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 60000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="bg-paper rounded-3xl border border-ink/15 shadow-[0_14px_34px_rgba(106,58,51,0.15)] p-4 sm:p-6 overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-[6.5rem_1fr] items-end mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">UTC hour</span>
          <div className="grid grid-cols-24 text-[10px] text-center font-semibold" style={{ gridTemplateColumns: "repeat(24, 1fr)" }}>{hours.map((h) => <span key={h}>{h % 3 === 0 ? String(h).padStart(2, "0") : ""}</span>)}</div>
        </div>
        <div className="relative space-y-2">
          {cities.map((c, ci) => (
            <div key={c.name} className="grid grid-cols-[6.5rem_1fr] items-center">
              <span className="display text-sm">{c.name}</span>
              <div className="grid gap-px" style={{ gridTemplateColumns: "repeat(24, 1fr)" }}>
                {hours.map((h) => {
                  const local = (((h + offsets[ci]) % 24) + 24) % 24;
                  const work = local >= 9 && local < 18;
                  return <span key={h} className={`h-7 ${h === 0 ? "rounded-l-md" : ""} ${h === 23 ? "rounded-r-md" : ""}`} style={{ background: work ? c.color : "rgba(106,58,51,0.08)" }} />;
                })}
              </div>
            </div>
          ))}
          {nowH !== null && (
            <div className="absolute top-[-6px] bottom-[-6px] pointer-events-none" style={{ left: `calc(6.5rem + (100% - 6.5rem) * ${nowH / 24})` }}>
              <span className="absolute inset-y-0 w-0.5 bg-red -translate-x-1/2" />
              <span className="absolute -top-6 -translate-x-1/2 bg-red text-paper text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">Now</span>
            </div>
          )}
        </div>
        <p className="mt-5 text-sm font-semibold">Coloured blocks are each city&apos;s 9-to-6. Someone is always at their desk, so the door is always open.</p>
      </div>
    </div>
  );
}
