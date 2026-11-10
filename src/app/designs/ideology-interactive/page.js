import Reveal from "@/components/Reveal";
import ComboSection from "@/components/ComboSection";
import IdeologyInteractive from "@/components/IdeologyInteractive";

export const metadata = { title: "Sathvika | Our ideology: interactive" };

// Design C made interactive: choose a belief and the photo changes.
export default function Page() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ComboSection start="blue">
        <section id="ideology" className="checks px-4 sm:px-14 py-24 sm:py-32 overflow-hidden">
          <Reveal anim="flip"><IdeologyInteractive /></Reveal>
        </section>
      </ComboSection>
    </main>
  );
}
