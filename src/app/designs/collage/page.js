import Nav from "@/components/Nav";
import ScrollBar from "@/components/ScrollBar";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import WavyFrame from "@/components/WavyFrame";
import RemoteSection from "@/components/RemoteSection";
import CriminalsLine from "@/components/CriminalsLine";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { Icon } from "@/components/Icons";
import { rules } from "@/components/Rules";

export const metadata = {
  title: "Sathvika | Wavy Collage (previous home page)",
  description: "Branding, performance marketing, website design, strategy and content for brands that want to be noticed.",
};

// The founder's photo. Replace this file (or change the path) with the real picture.
const FOUNDER_PHOTO = "/images/founder.jpg";

const channels = [["seo", "SEO"], ["social", "Social media"], ["ads", "Paid ads"], ["email", "Email"], ["analytics", "Analytics"]];

const beliefs = [
  ["Boring is the only bad idea.", "We push every brief until it has a clear point of view."],
  ["Strategy first, sparkle second.", "Every creative choice answers a business goal."],
  ["Brands are people.", "We give them a voice, values and a personality worth following."],
  ["Done is good. Delightful is better.", "We ship fast, then keep improving with what the data tells us."],
];

const services = [
  { icon: "branding", name: "Branding", tint: "var(--svc1)", line: "Identities that look sharp and sound like you.", points: ["Logo and visual identity", "Brand guidelines", "Tone of voice"] },
  { icon: "performance", name: "Performance Marketing", tint: "var(--svc2)", line: "Paid campaigns built around measurable growth.", points: ["Paid social and search", "Conversion tracking", "Monthly reporting"] },
  { icon: "website", name: "Website Designing", tint: "var(--svc3)", line: "Fast, clear websites designed to convert.", points: ["UX and UI design", "Landing pages", "Speed and SEO basics"] },
  { icon: "strategy", name: "Marketing Strategy", tint: "var(--svc4)", line: "A plan with a point of view and a path to results.", points: ["Audience research", "Positioning", "Channel planning"] },
  { icon: "creative", name: "Creative", tint: "var(--svc5)", line: "Campaign ideas and assets people stop scrolling for.", points: ["Campaign concepts", "Ad creative", "Social visuals"] },
  { icon: "content", name: "Content", tint: "var(--svc6)", line: "Content that earns attention and keeps it.", points: ["Social content", "Copywriting", "Video and reels"] },
];

const card = "bg-paper border border-ink/10 rounded-2xl shadow-[0_10px_30px_rgba(106,58,51,0.08)]";
const eyebrow = "text-sm font-semibold uppercase tracking-[0.18em] text-red";

// The Sathvika website: calm coloured bands with scalloped edges, clean cards and digital-marketing icons.
export default function WavyCollage() {
  return (
    <main className="soft bg-butter pt-24 overflow-x-clip">
      <Nav /><ScrollBar />

      {/* 1. Founder photo straight away */}
      <div className="bg-yellow px-5 pt-10 pb-16">
        <HeroLayout
          className="mx-auto max-w-6xl"
          heading={<h1 className="text-4xl sm:text-5xl text-red leading-[1.1] md:pr-52">Meet Sathvika, the creative mind<br />behind brands people remember</h1>}
          button={<a href="#contact" className="btn bg-red text-paper text-sm !py-2">Start a project</a>}
          intro={<p className="max-w-sm text-lg">Branding, performance marketing, websites and content for brands that want to be noticed.</p>}
          photo={
            <div className="h-full grid place-items-center">
              <div className="w-full max-w-md"><WavyFrame id="home-founder" color="var(--red)" src={FOUNDER_PHOTO} label="Sathvika, founder of the agency" bumps={12} focus="xMidYMin" className="drop-shadow-[0_14px_24px_rgba(106,58,51,0.3)]" /></div>
            </div>
          }
          tile={<div role="img" aria-label="A creative team planning a campaign on a whiteboard" className="rounded-3xl h-64 md:h-full md:min-h-[14rem] bg-cover bg-center" style={{ backgroundImage: "url(/images/team.jpg)" }} />}
        />
        <Reveal anim="rise" delay={0.2} className="mx-auto max-w-6xl mt-10">
          <ul className="flex flex-wrap items-center gap-3">
            <li className="text-sm font-semibold uppercase tracking-[0.18em] mr-2">Across every channel</li>
            {channels.map(([ic, label]) => (
              <li key={label} className="inline-flex items-center gap-2 bg-paper/80 rounded-full pl-3 pr-4 py-1.5 text-sm font-medium"><Icon name={ic} size="small" className="w-5 h-5 text-red" />{label}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* 2. Introduction of the founder */}
      <section id="founder" className="scallop-top bg-sky px-5 py-24" style={{ "--fill": "var(--sky)" }}>
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <Reveal anim="left">
            <p className={eyebrow}>About the founder</p>
            <h2 className="mt-3 text-4xl sm:text-5xl text-red">Hi, I&apos;m Sathvika.</h2>
            <p className="mt-5 text-lg max-w-xl">I started this agency because brands deserve better than copy-paste creativity. I combine strategy, design and performance thinking, with a slightly unreasonable amount of coffee, to build brands people remember.</p>
            <p className="mt-3 text-lg max-w-xl">We&apos;re a small team on purpose. When you work with us, you work with me.</p>
          </Reveal>
          <Reveal anim="right">
            <div role="img" aria-label="Marketing analytics dashboard on a laptop" className="h-56 rounded-2xl bg-cover bg-center mb-5" style={{ backgroundImage: "url(/images/analytics.jpg)" }} />
            <dl className={`${card} p-6 divide-y divide-ink/10`}>
              {[["Focus", "Brand and performance, together"], ["Approach", "Strategy first, then the creative"], ["Fuel", "Filter coffee, mostly"]].map(([k, v]) => (
                <div key={k} className="py-3 first:pt-0 last:pb-0"><dt className="text-xs font-semibold uppercase tracking-[0.18em] text-red">{k}</dt><dd className="mt-1 text-lg">{v}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 3. Our ideology */}
      <section id="ideology" className="scallop-top bg-paper px-5 py-24" style={{ "--fill": "var(--paper)" }}>
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <Reveal anim="left">
            <p className={eyebrow}>Our ideology</p>
            <h2 className="mt-3 text-4xl sm:text-5xl text-red">How we think</h2>
            <p className="mt-4 text-lg max-w-sm">Four beliefs behind every campaign, website and brand we make.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {beliefs.map(([t, d], i) => (
              <Reveal key={t} anim="rise" delay={0.1 * i}>
                <div className={`${card} p-6 h-full border-t-4`} style={{ borderTopColor: ["var(--red)", "var(--blue)", "var(--yellow)", "var(--orange)"][i] }}>
                  <h3 className="display text-xl">{t}</h3><p className="mt-2">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Remote */}
      <div className="scallop-top" style={{ "--fill": "var(--sky)" }}><RemoteSection bg="bg-sky" /></div>

      {/* 5. Creative criminals: the quirky lineup */}
      <div className="scallop-top" style={{ "--fill": "var(--ink)" }}><Reveal anim="flipx"><CriminalsLine /></Reveal></div>

      {/* 6. Creative licence */}
      <div className="scallop-top" style={{ "--fill": "var(--yellow)" }}><Reveal anim="zoom"><License /></Reveal></div>

      {/* 7. Our very official, unofficial rules */}
      <section id="rules" className="scallop-top bg-sky px-5 py-24" style={{ "--fill": "var(--sky)" }}>
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <Reveal anim="wipe">
            <p className={eyebrow}>The house rules</p>
            <h2 className="mt-3 text-3xl sm:text-5xl text-red">Our very official, unofficial rules</h2>
            <p className="mt-4 text-lg max-w-sm">Not legally binding. Taken very seriously.</p>
          </Reveal>
          <ol className="grid sm:grid-cols-2 gap-5">
            {rules.map(([t, b], n) => (
              <Reveal key={t} anim="rise" delay={0.08 * n}>
                <li className={`${card} p-5 flex gap-4 h-full`}>
                  <span className="shrink-0 w-9 h-9 rounded-full bg-red text-paper grid place-items-center font-bold">{n + 1}</span>
                  <div><h3 className="display text-lg">{t}</h3><p className="mt-1 text-sm">{b}</p></div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Services */}
      <section id="services" className="scallop-top bg-butter px-5 py-24" style={{ "--fill": "var(--butter)" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal anim="drop">
            <p className={eyebrow}>Services</p>
            <h2 className="mt-3 text-4xl sm:text-5xl text-red max-w-xl">Everything your brand needs to grow</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, n) => (
              <Reveal key={s.name} anim="rise" delay={0.08 * (n % 3)}>
                <article className={`${card} p-6 h-full flex flex-col transition hover:-translate-y-1`}>
                  <div className="w-16 h-16 rounded-2xl grid place-items-center text-ink" style={{ background: s.tint }}><Icon name={s.icon} className="w-9 h-9" /></div>
                  <h3 className="display text-xl mt-5">{s.name}</h3>
                  <p className="mt-2">{s.line}</p>
                  <ul className="mt-4 pt-4 border-t border-ink/10 space-y-1.5 text-sm">
                    {s.points.map((p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact */}
      <div className="scallop-top" style={{ "--fill": "var(--orange)" }}><Reveal anim="wipe"><Contact /></Reveal></div>

      <footer className="scallop-top bg-red text-paper px-5 py-14" style={{ "--fill": "var(--red)" }}>
        <div className="mx-auto max-w-6xl grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div><p className="display text-4xl">Sathvika</p><p className="mt-2 max-w-xs text-sm">A creative marketing agency for brands that want to be noticed.</p></div>
          <ul className="text-sm space-y-2"><li className="display">Services</li>{services.map((s) => <li key={s.name}><a href="#services">{s.name}</a></li>)}</ul>
          <ul className="text-sm space-y-2"><li className="display">Explore</li><li><a href="#founder">Founder</a></li><li><a href="#ideology">Ideology</a></li><li><a href="#remote">Remote</a></li><li><a href="#criminals">Creative Criminals</a></li><li><a href="#rules">Rules</a></li><li><a href="#contact">Contact</a></li></ul>
        </div>
        <p className="mx-auto max-w-6xl mt-10 pt-4 border-t border-paper/30 text-xs">© 2026 Sathvika. All rights reserved.</p>
      </footer>
    </main>
  );
}
