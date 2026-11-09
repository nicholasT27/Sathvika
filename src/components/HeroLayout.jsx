import Reveal from "./Reveal";

// The hero arrangement the client wants: heading top-left, button top-right, short text under the heading,
// a tall photo on the right and a shorter tile bottom-left. Each style passes in its own look for every piece.
export default function HeroLayout({ id = "top", className = "", heading, button, intro, photo, tile }) {
  return (
    <section id={id} className={`grid md:grid-cols-2 md:grid-rows-[auto_auto_1fr] gap-x-4 gap-y-4 ${className}`}>
      <Reveal anim="drop" className="md:col-start-1 md:col-span-2 md:row-start-1">{heading}</Reveal>
      <Reveal anim="drop" delay={0.1} className="md:col-start-2 md:row-start-1 md:justify-self-end md:self-start relative z-10">{button}</Reveal>
      <Reveal anim="left" className="md:col-start-1 md:row-start-2">{intro}</Reveal>
      <Reveal anim="right" className="md:col-start-2 md:row-start-2 md:row-span-2">{photo}</Reveal>
      <Reveal anim="rise" delay={0.1} className="md:col-start-1 md:row-start-3">{tile}</Reveal>
    </section>
  );
}
