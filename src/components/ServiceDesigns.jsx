"use client";
import { useState } from "react";
import useRotator from "./useRotator";
import { Icon } from "./Icons";
import { services, serviceExtras } from "@/data/content";

// Each service joined with its photo and bullet points.
const items = services.map((s, i) => ({ ...s, ...serviceExtras[i], n: String(i + 1).padStart(2, "0") }));
const tints = ["var(--svc1)", "var(--svc2)", "var(--svc3)", "var(--svc4)", "var(--svc5)", "var(--svc6)"];
const eyebrow = "text-xs font-semibold uppercase tracking-[0.3em] text-red";

// Design 1, "Stamps": six perforated postage stamps with a photo and the service name, each with a round postmark.
export function StampServices() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center"><p className={eyebrow}>Special delivery</p><h2 className="mt-3 text-4xl sm:text-6xl text-red">Our stamp collection</h2><p className="mt-3">Six services. Collect them all.</p></div>
      <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {items.map((s, i) => (
          <li key={s.key} className={`group ${i % 2 ? "rotate-2" : "-rotate-2"} hover:rotate-0 transition-transform duration-300`}>
            <article className="stamp !p-4 sm:!p-6 shadow-[5px_6px_0_rgba(106,58,51,0.28)]" style={{ "--c": tints[i] }}>
              <div className="relative">
                <div role="img" aria-label={`${s.name}`} className="aspect-[4/5] bg-cover bg-center rounded-[2px]" style={{ backgroundImage: `url(${s.photo})` }} />
                <span className="absolute -top-1 -right-1 bg-paper text-ink display text-sm px-2 py-0.5 rounded-full">{s.n}</span>
                <div className="absolute inset-0 bg-ink/80 text-butter p-3 sm:p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs sm:text-sm">{s.line}</p>
                  <ul className="mt-2 text-[11px] sm:text-xs space-y-0.5">{s.points.map((p) => <li key={p}>✓ {p}</li>)}</ul>
                </div>
              </div>
              <div className="mt-3 flex items-end justify-between gap-2 text-ink">
                <h3 className="display text-base sm:text-xl leading-tight">{s.name}</h3>
                <Icon name={s.icon} className="w-7 h-7 shrink-0" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] mt-1 text-ink/70">Sathvika · Service</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Design 2, "Book": an open book. The contents are on the left page, and the right page turns to each service in turn.
export function BookServices() {
  const { active, setActive, ref, hoverProps } = useRotator(items.length, 6000);
  const s = items[active];
  return (
    <div ref={ref} {...hoverProps} className="mx-auto max-w-5xl">
      <div className="text-center"><p className={eyebrow}>The services book</p><h2 className="mt-3 text-4xl sm:text-6xl text-red">What we do</h2></div>
      <div className="relative mt-12 grid md:grid-cols-2 bg-[#fffaf0] rounded-2xl border-[3px] border-ink shadow-[0_22px_44px_rgba(106,58,51,0.3),12px_12px_0_rgba(106,58,51,0.25)]">
        <span className="hidden md:block absolute left-1/2 top-0 bottom-0 w-10 -translate-x-1/2 pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(106,58,51,0.2) 48%, rgba(106,58,51,0.35) 50%, rgba(106,58,51,0.2) 52%, transparent)" }} aria-hidden="true" />
        <div className="p-6 sm:p-10 md:border-r border-ink/10">
          <p className="display text-red text-2xl">Contents</p>
          <ol className="mt-5 space-y-1" role="tablist" aria-label="Services">
            {items.map((it, i) => (
              <li key={it.key}>
                <button role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`w-full flex items-baseline gap-2 py-2 text-left transition ${active === i ? "text-red" : "hover:text-red"}`}>
                  <span className="display text-lg w-8 shrink-0">{it.n}</span>
                  <span className={`font-semibold ${active === i ? "underline underline-offset-4 decoration-2" : ""}`}>{it.name}</span>
                  <span className="flex-1 border-b-2 border-dotted border-ink/30 translate-y-[-4px]" aria-hidden="true" />
                  <span className="text-sm">p.{i + 1}</span>
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-8 inline-block rotate-[-3deg] bg-yellow border-2 border-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">★ Turn the page ★</p>
        </div>
        <div key={active} className="page-in p-6 sm:p-10">
          <div className="flex items-start justify-between gap-3">
            <div><p className="text-xs uppercase tracking-[0.3em] text-ink/60">Chapter {s.n}</p><h3 className="mt-1 display text-3xl sm:text-4xl text-red">{s.name}</h3></div>
            <span className="w-12 h-12 shrink-0 rounded-full grid place-items-center" style={{ background: tints[active] }}><Icon name={s.icon} className="w-7 h-7 text-ink" /></span>
          </div>
          <div role="img" aria-label={s.name} className="mt-5 aspect-[16/10] rounded-md border-[3px] border-ink bg-cover bg-center" style={{ backgroundImage: `url(${s.photo})` }} />
          <p className="mt-5 text-lg">{s.line}</p>
          <ul className="mt-3 space-y-1 text-sm">{s.points.map((p) => <li key={p} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{p}</li>)}</ul>
          <p className="mt-6 text-right text-sm text-ink/60">— {active + 1} —</p>
        </div>
      </div>
    </div>
  );
}

// Design 3, "Basket": product cards with an "add to basket" button. The red basket on the right fills up with the photos you pick.
export function BasketServices() {
  const [picked, setPicked] = useState(["branding", "website"]);
  const toggle = (k) => setPicked(picked.includes(k) ? picked.filter((x) => x !== k) : [...picked, k]);
  const inBasket = items.filter((s) => picked.includes(s.key));
  const mesh = "repeating-linear-gradient(90deg, rgba(60,10,5,0.28) 0 3px, transparent 3px 24px), repeating-linear-gradient(0deg, rgba(60,10,5,0.28) 0 3px, transparent 3px 22px)";
  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center"><p className={eyebrow}>Shop the services</p><h2 className="mt-3 text-4xl sm:text-6xl text-red">Fill your basket</h2><p className="mt-3">Pick what your brand needs, then send us the basket.</p></div>
      <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <ul className="grid sm:grid-cols-2 gap-4">
          {items.map((s, i) => {
            const on = picked.includes(s.key);
            return (
              <li key={s.key} className={`bg-[#fffaf0] rounded-2xl border-[3px] p-3 transition ${on ? "border-red shadow-[0_8px_0_var(--red)]" : "border-ink/30 hover:border-ink"}`}>
                <div role="img" aria-label={s.name} className="aspect-[16/10] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${s.photo})` }} />
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div><h3 className="display text-lg leading-tight">{s.name}</h3><p className="text-sm mt-1">{s.line}</p></div>
                  <span className="w-9 h-9 shrink-0 rounded-full grid place-items-center" style={{ background: tints[i] }}><Icon name={s.icon} className="w-5 h-5 text-ink" /></span>
                </div>
                <button onClick={() => toggle(s.key)} aria-pressed={on} className={`mt-3 w-full rounded-full border-2 border-ink py-2 text-sm font-bold transition ${on ? "bg-red text-paper" : "bg-yellow hover:bg-orange"}`}>{on ? "✓ In your basket" : "+ Add to basket"}</button>
              </li>
            );
          })}
        </ul>
        <div className="lg:sticky lg:top-6">
          <div className="relative h-80 sm:h-96 mx-auto max-w-md" aria-live="polite">
            <span className="absolute top-2 left-0 -rotate-6 bg-red text-paper display text-lg px-3 py-1 border-2 border-ink z-20">News!</span>
            <span className="absolute top-14 right-0 rotate-6 bg-yellow text-ink display text-sm px-3 py-2 border-2 border-ink z-20 text-center leading-tight">Simple<br />but delightful</span>
            {inBasket.map((s, i) => (
              <div key={s.key} role="img" aria-label={s.name} className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-lg border-[3px] border-ink bg-cover bg-center shadow-md transition-all duration-500 z-10" style={{ backgroundImage: `url(${s.photo})`, left: `${6 + (i % 3) * 29}%`, bottom: `${8.5 + Math.floor(i / 3) * 3.5}rem`, transform: `rotate(${[-8, 6, -3, 9, -6, 4][i]}deg)` }} />
            ))}
            {inBasket.length === 0 && <p className="absolute inset-x-0 top-1/3 text-center display text-ink/50 text-xl z-10">Your basket is empty</p>}
            <div className="absolute inset-x-3 bottom-0 h-32 sm:h-36 z-20" style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 12% 100%)", background: `${mesh}, var(--red)` }} />
            <div className="absolute inset-x-0 bottom-[7.5rem] sm:bottom-[8.5rem] h-5 rounded-full bg-[#a82d22] border-2 border-ink z-20" />
          </div>
          <div className="mt-4 bg-ink text-butter rounded-2xl p-5 text-center">
            <p className="display text-xl">Basket ({inBasket.length})</p>
            <p className="mt-1 text-sm min-h-[2.5rem]">{inBasket.length ? inBasket.map((s) => s.name).join(" · ") : "Add a service to start."}</p>
            <a href="#contact" className={`btn bg-yellow text-ink mt-3 text-sm ${inBasket.length ? "" : "pointer-events-none opacity-50"}`}>Send my basket</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Design 4, "Coupons": a vintage newspaper page. Each service is a cut-out coupon with a price-style badge; clip one to mark it.
export function CouponServices() {
  const [clipped, setClipped] = useState([]);
  const toggle = (k) => setClipped(clipped.includes(k) ? clipped.filter((x) => x !== k) : [...clipped, k]);
  const serif = { fontFamily: "Georgia, 'Times New Roman', serif" };
  const badge = ["bg-red", "bg-blue", "bg-orange", "bg-butter", "bg-yellow", "bg-sky"];
  return (
    <div className="mx-auto max-w-6xl bg-[#efe5cb] border-[3px] border-ink p-4 sm:p-8 shadow-[0_16px_40px_rgba(106,58,51,0.3)]" style={{ backgroundImage: "radial-gradient(rgba(106,58,51,0.08) 1px, transparent 1.4px)", backgroundSize: "6px 6px" }}>
      <div className="border-y-[5px] border-double border-ink py-3 text-center" style={serif}>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] flex justify-between"><span>Vol. 1 · No. 6</span><span>Services edition</span><span>Price: one coffee</span></p>
        <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-ink" style={{ ...serif, fontFamily: "Georgia, serif" }}>The Sathvika Times</h2>
        <p className="italic text-sm">&ldquo;Crimes against boring since day one&rdquo;</p>
      </div>
      <p className="mt-6 text-center text-xs sm:text-sm uppercase tracking-[0.3em] font-bold">★ Clip these coupons and bring them to your next brief ★</p>
      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s, i) => {
          const on = clipped.includes(s.key);
          return (
            <li key={s.key} className={`relative bg-[#fff6dc] border-[3px] border-dashed border-ink p-3 ${on ? "clip-pop" : ""}`} style={{ outline: "3px solid #fff6dc", outlineOffset: "-9px", transform: on ? "rotate(-1.5deg)" : undefined }}>
              <span className="absolute -top-3 left-4 bg-[#efe5cb] px-1 text-lg" aria-hidden="true">✂</span>
              <span className={`absolute -top-4 -right-4 w-14 h-14 rounded-full ${badge[i]} text-ink border-[3px] border-ink grid place-items-center display text-lg rotate-12 z-10`}>{s.n}</span>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-red">This coupon is good for</p>
              <div className="mt-2 flex gap-3">
                <div role="img" aria-label={s.name} className="w-24 sm:w-28 aspect-square shrink-0 border-2 border-ink bg-cover bg-center sepia-[.25]" style={{ backgroundImage: `url(${s.photo})` }} />
                <div className="min-w-0">
                  <h3 className="display text-xl sm:text-2xl leading-[1.05] text-red">{s.name}</h3>
                  <p className="text-sm mt-1" style={serif}><em>{s.line}</em></p>
                </div>
              </div>
              <ul className="mt-3 text-xs flex flex-wrap gap-x-4 gap-y-0.5 font-semibold uppercase tracking-wide">{s.points.map((p) => <li key={p}>• {p}</li>)}</ul>
              <button onClick={() => toggle(s.key)} aria-pressed={on} className={`mt-3 w-full border-2 border-ink py-1.5 text-xs font-bold uppercase tracking-[0.2em] transition ${on ? "bg-red text-paper" : "bg-yellow hover:bg-orange"}`}>{on ? "✓ Clipped" : "✂ Clip this coupon"}</button>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-center text-sm font-semibold" style={serif}>{clipped.length ? `${clipped.length} coupon${clipped.length > 1 ? "s" : ""} clipped. ` : "No coupons clipped yet. "}<a href="#contact" className="underline underline-offset-4">Redeem at the contact desk →</a></p>
    </div>
  );
}
