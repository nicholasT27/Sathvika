import Nav from "@/components/Nav";
import WavyFrame from "@/components/WavyFrame";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import Criminals from "@/components/Criminals";
import License from "@/components/License";
import Contact from "@/components/Contact";
import Builder from "@/components/Builder";
import { frames } from "@/components/Hero";
import { beliefs } from "@/components/Ideology";
import { rules } from "@/components/Rules";

export const metadata = { title: "Sathvika | Design C: Constructor" };

// Design C: a grid-paper page. Visitors "build" their own campaign, and the rest stacks as clean outlined cards.
export default function Constructor() {
  const card = "bg-[#fffaf0] border-2 border-red/70 rounded-3xl p-6 sm:p-8";
  return (
    <main className="pt-24 text-ink" style={{ backgroundColor: "#fff8e1", backgroundImage: "linear-gradient(#ffe77e55 1px, transparent 1px), linear-gradient(90deg, #ffe77e55 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
      <Nav />
      <div id="top" className="mx-auto max-w-4xl px-4 pt-8 text-center">
        <h1 className="text-5xl sm:text-7xl text-red">Create your own<br />creative agency vibe</h1>
        <div className="mt-8 rounded-3xl bg-sky border-2 border-red/70 p-6 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {frames.map((f) => (
              <WavyFrame key={f.id} id={`c-${f.id}`} color={f.color} src={f.src} label={f.label}>
                <g fill="#3b1410" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>
              </WavyFrame>
            ))}
          </div>
          <a href="#services" className="btn bg-red text-paper mt-8">Start building</a>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-14 space-y-4">
        <div id="founder" className={`${card} grid sm:grid-cols-[1fr_auto] gap-6 items-center`}>
          <div><h2 className="display text-3xl text-red">Hi, I&apos;m Sathvika</h2>
            <p className="mt-2">Founder, chief coffee drinker and professional idea wrangler. I build brands that are impossible to ignore.</p></div>
          <Mascot mood="happy" className="h-40 mx-auto" />
        </div>
        <div id="ideology" className={card}>
          <h2 className="display text-3xl text-red">Our ideology</h2>
          <ul className="mt-4 divide-y-2 divide-dashed divide-red/30">
            {beliefs.map((b) => <li key={b.text} className="py-3 display text-xl sm:text-2xl">{b.text}</li>)}
          </ul>
        </div>
      </div>

      <div className="mx-4 rounded-3xl overflow-hidden border-2 border-red/70 max-w-4xl sm:mx-auto"><Remote /></div>
      <div className="mx-4 mt-4 rounded-3xl overflow-hidden border-2 border-red/70 max-w-4xl sm:mx-auto"><Criminals /></div>
      <div className="mx-4 mt-4 rounded-3xl overflow-hidden border-2 border-red/70 max-w-4xl sm:mx-auto"><License /></div>

      <div id="rules" className="mx-auto max-w-4xl px-4 mt-4">
        <div className={card}>
          <h2 className="display text-3xl text-red">Our very official, unofficial rules</h2>
          <ol className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-3 list-decimal list-inside">
            {rules.map(([t, b]) => <li key={t}><strong className="display text-red">{t}</strong> {b}</li>)}
          </ol>
        </div>
      </div>

      <Builder />
      <div className="mx-4 rounded-3xl overflow-hidden border-2 border-red/70 max-w-4xl sm:mx-auto mb-10"><Contact /></div>
      <footer className="bg-red text-paper text-center py-8"><p className="display text-3xl">Sathvika</p><p className="text-sm">© 2026</p></footer>
    </main>
  );
}
