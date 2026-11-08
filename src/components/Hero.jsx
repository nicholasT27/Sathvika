import WavyFrame from "./WavyFrame";

// Photo files go in public/founder/. Each frame uses a different expression and border colour.
const frames = [
  { id: "f1", color: "#0ba0d6", src: "/founder/expression-1.svg", rot: -6, label: "Founder, smiling" },
  { id: "f2", color: "#ffe77e", src: "/founder/expression-2.svg", rot: 4, label: "Founder, laughing" },
  { id: "f3", color: "#e5362b", src: "/founder/expression-3.svg", rot: -3, label: "Founder, surprised" },
  { id: "f4", color: "#f26b2d", src: "/founder/expression-4.svg", rot: 6, label: "Founder, thinking" },
];

const ticker = ["Branding", "Performance marketing", "Website design", "Marketing strategy", "Creative", "Content"];

// Opening screen: the founder's photos in coloured wavy frames, a big headline and a scrolling banner.
export default function Hero() {
  return (
    <section id="top" className="relative pt-28 overflow-hidden bg-butter">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1fr_1.15fr] gap-8 items-center">
        <div className="relative z-10">
          <p className="inline-block -rotate-2 bg-blue text-paper font-bold px-4 py-1 rounded-full border-[3px] border-ink">Hello, I&apos;m the founder 👋</p>
          <h1 className="mt-4 text-5xl sm:text-7xl leading-[0.95] text-ink">
            Meet the <span className="text-red">face</span> behind the{" "}
            <span className="inline-block bg-yellow px-3 -rotate-2 border-[3px] border-ink">chaos.</span>
          </h1>
          <p className="mt-5 text-lg max-w-md">
            Sathvika is a creative agency for brands that are tired of being polite and beige. Many moods. One mission:
            make you impossible to ignore.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#contact" className="btn bg-red text-paper">Start a project</a>
            <a href="#services" className="btn bg-paper">See services</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 py-6">
          {frames.map((f, i) => (
            <div key={f.id} style={{ transform: `rotate(${f.rot}deg)` }} className={`transition-transform hover:scale-105 hover:!rotate-0 ${i % 2 ? "translate-y-6" : ""}`}>
              <WavyFrame id={f.id} color={f.color} src={f.src} label={f.label}>
                <g fill="#3b1410" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>
                <text x="50" y="94" textAnchor="middle" fontSize="6" fill="#3b1410" opacity="0.6">photo goes here</text>
              </WavyFrame>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 bg-ink text-butter border-y-[3px] border-ink overflow-hidden rotate-[-1.2deg] scale-[1.03]">
        <div className="marquee py-3 display text-xl">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mx-5">{t} <span className="text-yellow">✺</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
