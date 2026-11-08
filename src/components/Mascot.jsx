// Penny, the agency mascot: a pen with a coffee cup on its head. Pick a mood with the "mood" prop.
export default function Mascot({ mood = "happy", className = "", steam = true }) {
  const eyes = {
    happy: (<><circle cx="48" cy="112" r="6" fill="#3b1410" /><circle cx="72" cy="112" r="6" fill="#3b1410" /></>),
    wink: (<><circle cx="48" cy="112" r="6" fill="#3b1410" /><path d="M65 113 q7 -8 14 0" stroke="#3b1410" strokeWidth="4" fill="none" strokeLinecap="round" /></>),
    shock: (<><circle cx="48" cy="112" r="9" fill="#fff" stroke="#3b1410" strokeWidth="3" /><circle cx="72" cy="112" r="9" fill="#fff" stroke="#3b1410" strokeWidth="3" /><circle cx="48" cy="112" r="3" fill="#3b1410" /><circle cx="72" cy="112" r="3" fill="#3b1410" /></>),
    smug: (<><path d="M40 112 h16 M64 112 h16" stroke="#3b1410" strokeWidth="5" strokeLinecap="round" /></>),
  };
  const mouths = {
    happy: <path d="M48 128 q12 14 24 0" stroke="#3b1410" strokeWidth="4" fill="#e5362b" strokeLinecap="round" />,
    wink: <path d="M46 126 q14 18 28 0 z" stroke="#3b1410" strokeWidth="4" fill="#e5362b" strokeLinejoin="round" />,
    shock: <ellipse cx="60" cy="133" rx="7" ry="9" fill="#3b1410" />,
    smug: <path d="M48 130 q14 6 26 -6" stroke="#3b1410" strokeWidth="4" fill="none" strokeLinecap="round" />,
  };
  return (
    <svg viewBox="0 0 120 230" className={className} role="img" aria-label="Penny, the pen mascot with a coffee cup on her head">
      {steam && (
        <g stroke="#3b1410" strokeWidth="3" fill="none" strokeLinecap="round">
          <path className="steam" d="M44 18 q-6 -8 0 -14" />
          <path className="steam" style={{ animationDelay: "0.8s" }} d="M60 16 q-6 -8 0 -14" />
          <path className="steam" style={{ animationDelay: "1.6s" }} d="M76 18 q-6 -8 0 -14" />
        </g>
      )}
      {/* coffee cup on her head */}
      <path d="M32 28 h56 l-6 46 q-1 8 -9 8 h-26 q-8 0 -9 -8 z" fill="#fff8e1" stroke="#3b1410" strokeWidth="4" strokeLinejoin="round" />
      <path d="M88 38 q22 0 20 18 q-2 16 -22 14" stroke="#3b1410" strokeWidth="4" fill="none" />
      <rect x="30" y="22" width="60" height="12" rx="6" fill="#e5362b" stroke="#3b1410" strokeWidth="4" />
      <path d="M44 44 h32 l-2 20 h-28 z" fill="#f26b2d" opacity="0.9" />
      {/* pen clip + body */}
      <rect x="42" y="82" width="36" height="14" rx="4" fill="#ffe77e" stroke="#3b1410" strokeWidth="4" />
      <path d="M36 96 h48 v82 q0 8 -6 14 l-18 22 l-18 -22 q-6 -6 -6 -14 z" fill="#0ba0d6" stroke="#3b1410" strokeWidth="4" strokeLinejoin="round" />
      <path d="M78 98 v60" stroke="#fff" strokeWidth="5" opacity="0.35" strokeLinecap="round" />
      <path d="M48 200 l12 22 l12 -22 z" fill="#ffe77e" stroke="#3b1410" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="60" cy="222" r="3" fill="#3b1410" />
      {/* face */}
      {eyes[mood]}
      {mouths[mood]}
      <circle cx="38" cy="124" r="5" fill="#fc8da1" opacity="0.8" />
      <circle cx="82" cy="124" r="5" fill="#fc8da1" opacity="0.8" />
      {/* arms */}
      <path d="M36 150 q-18 6 -20 22" stroke="#3b1410" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M84 150 q18 6 20 22" stroke="#3b1410" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
