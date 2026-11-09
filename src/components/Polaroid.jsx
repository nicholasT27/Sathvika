// A polaroid-style photo card. "pin" decides how it is attached: tape, a clothes peg, or nothing.
export default function Polaroid({ children, caption, rot = 0, pin = "tape", className = "", swing = false }) {
  return (
    <figure style={{ transform: swing ? undefined : `rotate(${rot}deg)` }} className={`relative bg-white p-3 pb-10 border border-ink/20 shadow-[4px_6px_0_rgba(106,58,51,0.25)] ${swing ? "swing" : ""} ${className}`}>
      {pin === "tape" && <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow/80 border border-ink/20 rotate-2" aria-hidden="true" />}
      {pin === "peg" && <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-5 h-10 rounded-md bg-orange border-2 border-ink/50" aria-hidden="true" />}
      {children}
      {caption && <figcaption className="absolute bottom-2 left-0 right-0 text-center text-sm italic">{caption}</figcaption>}
    </figure>
  );
}
