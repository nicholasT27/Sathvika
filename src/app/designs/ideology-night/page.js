import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import FlowLead from "@/components/FlowLead";
import { SpotlightNight, NeonNight, CinemaNight } from "@/components/IdeologyNights";

export const metadata = { title: "Sathvika | Ideology night designs" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// A dark band with thin checks strips top and bottom, used by all three night designs.
function Night({ children }) {
  return (
    <ComboSection start="blue" switcher={false}>
      <FlowLead />
      <section id="ideology" className="bg-[#2a1613] relative">
        <div className="checks h-8 sm:h-12 mt-8 sm:mt-10" aria-hidden="true" />
        <div className="px-5 sm:px-14 py-16 sm:py-24 overflow-hidden"><Reveal anim="rise">{children}</Reveal></div>
        <div className="checks h-8 sm:h-12" aria-hidden="true" />
      </section>
    </ComboSection>
  );
}

// Three variations of the Night stage: a spotlight, a neon sign, and a cinema screen.
export default function IdeologyNight() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <Label>Night · 1 · Spotlight</Label>
      <Night><SpotlightNight /></Night>
      <Label>Night · 2 · Neon</Label>
      <Night><NeonNight /></Night>
      <Label>Night · 3 · Cinema</Label>
      <Night><CinemaNight /></Night>
    </main>
  );
}
