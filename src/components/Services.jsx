import Mascot from "./Mascot";

// Simple drawn pictures for each service (swap for real photos any time).
export const icons = {
  branding: (<><circle cx="50" cy="50" r="26" fill="#ffe77e" stroke="#3b1410" strokeWidth="4" /><path d="M50 28 L56 44 L73 44 L59 54 L65 71 L50 61 L35 71 L41 54 L27 44 L44 44 Z" fill="#e5362b" stroke="#3b1410" strokeWidth="3" strokeLinejoin="round" /></>),
  performance: (<><rect x="20" y="58" width="14" height="22" fill="#ffe77e" stroke="#3b1410" strokeWidth="4" /><rect x="43" y="42" width="14" height="38" fill="#fff8e1" stroke="#3b1410" strokeWidth="4" /><rect x="66" y="22" width="14" height="58" fill="#e5362b" stroke="#3b1410" strokeWidth="4" /><path d="M20 38 L45 24 L60 30 L82 12" stroke="#3b1410" strokeWidth="4" fill="none" strokeLinecap="round" /></>),
  website: (<><rect x="14" y="22" width="72" height="54" rx="6" fill="#fff8e1" stroke="#3b1410" strokeWidth="4" /><path d="M14 36 h72" stroke="#3b1410" strokeWidth="4" /><circle cx="24" cy="29" r="3" fill="#e5362b" /><circle cx="34" cy="29" r="3" fill="#ffe77e" /><rect x="22" y="44" width="26" height="24" fill="#0ba0d6" stroke="#3b1410" strokeWidth="3" /><path d="M56 48 h22 M56 58 h22 M56 68 h14" stroke="#3b1410" strokeWidth="4" strokeLinecap="round" /></>),
  strategy: (<><circle cx="50" cy="50" r="32" fill="#fff8e1" stroke="#3b1410" strokeWidth="4" /><circle cx="50" cy="50" r="21" fill="#0ba0d6" stroke="#3b1410" strokeWidth="3" /><circle cx="50" cy="50" r="10" fill="#e5362b" stroke="#3b1410" strokeWidth="3" /><path d="M50 50 L82 18 M74 18 h10 v10" stroke="#3b1410" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>),
  creative: (<><path d="M30 78 L22 56 L62 16 L84 38 L44 78 Z" fill="#ffe77e" stroke="#3b1410" strokeWidth="4" strokeLinejoin="round" /><path d="M22 56 L16 84 L30 78 Z" fill="#e5362b" stroke="#3b1410" strokeWidth="4" strokeLinejoin="round" /><path d="M62 16 L84 38" stroke="#3b1410" strokeWidth="8" /></>),
  content: (<><rect x="24" y="18" width="52" height="64" rx="4" fill="#fff8e1" stroke="#3b1410" strokeWidth="4" /><path d="M34 32 h32 M34 44 h32 M34 56 h20" stroke="#3b1410" strokeWidth="4" strokeLinecap="round" /><path d="M62 82 l4 -12 l12 -6" stroke="#3b1410" strokeWidth="4" fill="none" /><circle cx="70" cy="66" r="8" fill="#e5362b" stroke="#3b1410" strokeWidth="3" /></>),
};

export const services = [
  { key: "branding", name: "Branding", line: "Logos, looks & a voice that sounds like you.", color: "#e5362b", price: "5¢" },
  { key: "performance", name: "Performance Marketing", line: "Ads that pay for themselves. Numbers go up.", color: "#0ba0d6", price: "8¢" },
  { key: "website", name: "Website Designing", line: "Sites that load fast and look unforgettable.", color: "#f26b2d", price: "10¢" },
  { key: "strategy", name: "Marketing Strategy", line: "A plan with a point of view.", color: "#3b8f5c", price: "5¢" },
  { key: "creative", name: "Creative", line: "Campaign ideas with attitude and a wink.", color: "#8a5cc2", price: "15¢" },
  { key: "content", name: "Content", line: "Posts, reels & words people actually read.", color: "#d6a300", price: "3¢" },
];

// Services: each one is a postage stamp with a picture and its name, with Penny cheering from the side.
export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-paper">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-6xl text-center">What we <span className="text-blue">post</span> to you</h2>
        <p className="text-center mt-3">Six stamps. Collect them all.</p>
        <div className="mt-12 grid lg:grid-cols-[1fr_9rem] gap-8 items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {services.map((s, n) => (
              <article key={s.key} style={{ "--c": s.color, transform: `rotate(${n % 2 ? 2 : -2}deg)` }} className="stamp group hover:rotate-0 hover:scale-105 transition-transform shadow-[4px_5px_0_rgba(59,20,16,0.35)]">
                <div className="bg-paper rounded-md p-1">
                  <svg viewBox="0 0 100 100" className="w-full" role="img" aria-label={`${s.name} illustration`}>
                    <rect width="100" height="100" fill={s.color} opacity="0.18" />
                    {icons[s.key]}
                  </svg>
                </div>
                <div className="mt-2 flex items-start justify-between gap-2 text-paper">
                  <h3 className="display text-base sm:text-lg leading-tight">{s.name}</h3>
                  <span className="display text-sm bg-paper text-ink rounded-full px-2">{s.price}</span>
                </div>
                <p className="text-paper/95 text-xs sm:text-sm mt-1">{s.line}</p>
              </article>
            ))}
          </div>
          <div className="hidden lg:block sticky top-28">
            <div className="relative bg-yellow border-[3px] border-ink rounded-2xl p-2 text-sm text-center rotate-3 mb-3 display">Pick a stamp!</div>
            <Mascot mood="shock" className="w-36 bob" />
          </div>
        </div>
      </div>
    </section>
  );
}
