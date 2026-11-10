import Reveal from "@/components/Reveal";
import { LineupCriminals, CatchCriminals, BoardCriminals } from "@/components/CriminalsDesigns";

export const metadata = { title: "Sathvika | Creative Criminals designs" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// Three fun ways to present the Creative Criminals section, each starring the pen-with-a-coffee-cup mascot.
export default function CriminalsDesigns() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <Label>Creative Criminals · 1 · Police lineup</Label>
      <section id="criminals" className="bg-[#2a1613] px-5 py-20 sm:py-28 overflow-hidden"><Reveal anim="rise"><LineupCriminals /></Reveal></section>
      <Label>Creative Criminals · 2 · Catch Penny (game)</Label>
      <section className="bg-butter px-5 py-20 sm:py-28"><Reveal anim="rise"><CatchCriminals /></Reveal></section>
      <Label>Creative Criminals · 3 · Detective corkboard</Label>
      <section className="bg-sky px-5 py-20 sm:py-28"><Reveal anim="rise"><BoardCriminals /></Reveal></section>
    </main>
  );
}
