// Clean line icons for digital marketing. Big ones (48 grid) are used on service cards, small ones (24 grid) in the strip.
const big = {
  branding: (<><path d="M24 4 L33 18 L24 44 L15 18 Z" /><circle cx="24" cy="21" r="3.2" /><path d="M24 24 V36" /></>),
  performance: (<><path d="M6 6 V42 H42" /><path d="M12 33 L21 23 L28 29 L40 15" /><path d="M32 15 H40 V23" /><circle cx="21" cy="23" r="1.6" fill="currentColor" /><circle cx="28" cy="29" r="1.6" fill="currentColor" /></>),
  website: (<><rect x="5" y="8" width="38" height="32" rx="4" /><path d="M5 17 H43" /><circle cx="10" cy="12.5" r="1.1" fill="currentColor" /><circle cx="14.5" cy="12.5" r="1.1" fill="currentColor" /><rect x="10" y="22" width="12" height="12" rx="1.5" /><path d="M27 23 H38 M27 29 H38 M27 35 H33" /></>),
  strategy: (<><circle cx="22" cy="26" r="16" /><circle cx="22" cy="26" r="9" /><circle cx="22" cy="26" r="2" fill="currentColor" /><path d="M23.5 24.5 L40 8 M33 8 H40 V15" /></>),
  creative: (<><path d="M7 38 C13 8, 35 8, 41 38" /><rect x="4.5" y="35.5" width="5" height="5" rx="1" /><rect x="38.5" y="35.5" width="5" height="5" rx="1" /><circle cx="24" cy="15" r="2.4" fill="currentColor" /><path d="M7 38 L12 24 M41 38 L36 24" strokeDasharray="2 3" /></>),
  content: (<><rect x="6" y="9" width="36" height="25" rx="4" /><path d="M20 15.5 L30 21.5 L20 27.5 Z" fill="currentColor" /><path d="M10 40 H26 M32 40 H38" /></>),
};

const small = {
  seo: (<><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 L21 21" /><path d="M8 12 L10 9.5 L11.5 11 L13 8.5" /></>),
  social: (<><circle cx="6" cy="12" r="2.6" /><circle cx="18" cy="6" r="2.6" /><circle cx="18" cy="18" r="2.6" /><path d="M8.3 10.8 L15.7 7.2 M8.3 13.2 L15.7 16.8" /></>),
  ads: (<><path d="M3 10 V14 H7 L15 19 V5 L7 10 Z" /><path d="M18.5 9 Q21 12 18.5 15" /></>),
  email: (<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7 L12 13 L20.5 7" /></>),
  analytics: (<><path d="M4 20 V4" /><path d="M4 20 H21" /><rect x="8" y="12" width="3" height="6" /><rect x="13" y="8" width="3" height="10" /><rect x="18" y="5" width="2.5" height="13" /></>),
};

// Draws one of the icons. Use size="big" for service cards and size="small" for the little strip.
export function Icon({ name, size = "big", className = "" }) {
  const set = size === "big" ? big : small;
  const box = size === "big" ? 48 : 24;
  return (
    <svg viewBox={`0 0 ${box} ${box}`} fill="none" stroke="currentColor" strokeWidth={size === "big" ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {set[name]}
    </svg>
  );
}
