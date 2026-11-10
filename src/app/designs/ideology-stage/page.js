import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import FlowLead from "@/components/FlowLead";
import { NightStage, TripleStage, OutlineStage } from "@/components/IdeologyStages";

export const metadata = { title: "Sathvika | Ideology stage designs" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// Three takes on the Stage idea (giant type, arch photo, auto-rotate), each under the founder section and red ribbon.
export default function IdeologyStage() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <Label>Stage · A · Night</Label>
      <ComboSection start="blue" switcher={false}>
        <FlowLead />
        <section id="ideology" className="bg-[#2a1613] relative">
          <div className="checks h-8 sm:h-12 mt-8 sm:mt-10" aria-hidden="true" />
          <div className="px-5 sm:px-14 py-16 sm:py-24 overflow-hidden"><Reveal anim="rise"><NightStage /></Reveal></div>
          <div className="checks h-8 sm:h-12" aria-hidden="true" />
        </section>
      </ComboSection>

      <Label>Stage · B · Triple arch</Label>
      <ComboSection start="blue" switcher={false}>
        <FlowLead />
        <section id="ideology" className="bg-butter relative">
          <div className="checks h-8 sm:h-12 mt-8 sm:mt-10" aria-hidden="true" />
          <div className="px-5 sm:px-14 py-16 sm:py-24"><Reveal anim="rise"><TripleStage /></Reveal></div>
          <div className="checks h-8 sm:h-12" aria-hidden="true" />
        </section>
      </ComboSection>

      <Label>Stage · C · Outline list</Label>
      <ComboSection start="blue" switcher={false}>
        <FlowLead />
        <section id="ideology" className="bg-yellow relative">
          <div className="checks h-8 sm:h-12 mt-8 sm:mt-10" aria-hidden="true" />
          <div className="px-5 sm:px-14 py-16 sm:py-24"><Reveal anim="rise"><OutlineStage /></Reveal></div>
          <div className="checks h-8 sm:h-12" aria-hidden="true" />
        </section>
      </ComboSection>
    </main>
  );
}
