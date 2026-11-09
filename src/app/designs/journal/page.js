import Nav from "@/components/Nav";
import WavyFrame from "@/components/WavyFrame";
import Mascot from "@/components/Mascot";
import Remote from "@/components/Remote";
import Criminals from "@/components/Criminals";
import License from "@/components/License";
import Contact from "@/components/Contact";
import { frames } from "@/components/Hero";
import { beliefs } from "@/components/Ideology";
import { rules } from "@/components/Rules";
import { services, icons } from "@/components/Services";

export const metadata = { title: "Sathvika | Design D: Journal" };

// Design D: an editorial "journal" page on soft pink. Big words, tidy tiles, right-aligned lists.
export default function Journal() {
  const panel = "rounded-[1.75rem] overflow-hidden";
  const ph = <g fill="#6a3a33" opacity="0.18"><circle cx="50" cy="40" r="14" /><path d="M22 85 q28 -38 56 0 z" /></g>;
  return (
    <main className="soft bg-pink pt-24 p-3 sm:p-6">
      <Nav />
      <div className="mx-auto max-w-5xl bg-paper border border-red/60 rounded-[2rem] p-3 sm:p-5 space-y-10">
        <section id="top" className={`${panel} bg-butter text-center px-6 pt-14 pb-8`}>
          <p className="inline-block border border-red/60 text-red rounded-full px-4 py-1 text-sm italic">Homepage</p>
          <h1 className="mt-6 text-7xl sm:text-9xl text-red">Sathvika</h1>
          <p className="mt-5 max-w-md mx-auto">A creative agency for brands tired of beige. Choose from our services, or build something entirely your own.</p>
          <a href="#contact" className="btn bg-red text-paper mt-6">Start a project</a>
          <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
            {frames.map((f) => <WavyFrame key={f.id} id={`d-${f.id}`} color={f.color} src={f.src} label={f.label}>{ph}</WavyFrame>)}
          </div>
        </section>

        <section id="founder" className={`${panel} bg-yellow p-5 sm:p-8`}>
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-3xl sm:text-5xl text-red">Create your own<br />creative story</h2>
            <a href="#contact" className="btn bg-red text-paper !py-2 !px-5 text-sm shrink-0">Start creating</a>
          </div>
          <p className="mt-3 max-w-xs text-sm">Hi, I&apos;m Sathvika. I started this agency to make brands that people actually remember.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-paper rounded-3xl p-6 grid place-items-center"><Mascot mood="happy" className="h-52" /></div>
            <div className="rounded-3xl overflow-hidden bg-sky p-6"><WavyFrame id="d-big" color="var(--red)" src="/founder/expression-2.svg" label="Founder">{ph}</WavyFrame></div>
          </div>
        </section>

        <section id="ideology" className="grid md:grid-cols-2 gap-6 items-center">
          <div className={`${panel} bg-sky p-4`}>
            <div className="bg-paper rounded-[1.5rem] p-3 relative">
              <div className="checks checks-blue rounded-2xl h-72" />
              <span className="absolute inset-0 grid place-items-center"><span className="display text-4xl bg-yellow text-red rounded-full px-8 py-3">Ideology</span></span>
            </div>
          </div>
          <ul className="text-right space-y-5">
            {beliefs.map((b, i) => <li key={b.text} className={`text-2xl sm:text-3xl text-red italic font-semibold ${i === beliefs.length - 1 ? "underline underline-offset-8" : ""}`}>{b.text}</li>)}
          </ul>
        </section>

        <div className={panel}><Remote /></div>
        <div className={panel}><Criminals /></div>
        <div className={panel}><License /></div>

        <section id="rules">
          <h2 className="text-3xl sm:text-5xl text-red text-center">Our very official, unofficial rules</h2>
          <ul className="mt-6 space-y-3 text-right">
            {rules.map(([t, b]) => <li key={t}><span className="text-2xl sm:text-3xl text-red italic font-semibold">{t}</span> <span className="block text-sm">{b}</span></li>)}
          </ul>
        </section>

        <section id="services" className={`${panel} bg-butter p-5 sm:p-8`}>
          <h2 className="text-3xl sm:text-5xl text-red">What we do</h2>
          <div className="mt-6 space-y-3">
            {services.map((s) => (
              <article key={s.key} className="bg-paper rounded-3xl p-3 flex items-center gap-4">
                <div className="w-24 shrink-0 rounded-2xl p-2" style={{ background: s.color }}><svg viewBox="0 0 100 100" role="img" aria-label={s.name}>{icons[s.key]}</svg></div>
                <div><h3 className="display text-xl text-red">{s.name}</h3><p className="text-sm">{s.line}</p></div>
              </article>
            ))}
          </div>
        </section>

        <div className={panel}><Contact /></div>
        <footer className={`${panel} bg-red text-paper p-8 flex flex-wrap justify-between gap-6`}>
          <p className="display text-6xl">Sathvika</p><p className="text-sm self-end">More ideas. More Sathvika. © 2026</p>
        </footer>
      </div>
    </main>
  );
}
