import Reveal from "@/components/Reveal";
import { StampServices, BookServices, BasketServices, CouponServices } from "@/components/ServiceDesigns";

export const metadata = { title: "Sathvika | Services designs" };

function Label({ children }) {
  return <p className="bg-ink text-butter text-xs font-semibold uppercase tracking-[0.25em] text-center py-2">{children}</p>;
}

// Four designs for the Services section, one for each idea in the client's brief.
export default function ServicesDesigns() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <Label>Services · 1 · Postage stamps</Label>
      <section id="services" className="bg-sky px-5 py-20 sm:py-28"><Reveal anim="rise"><StampServices /></Reveal></section>
      <Label>Services · 2 · Book with Penny</Label>
      <section className="bg-butter px-5 py-20 sm:py-28"><Reveal anim="rise"><BookServices /></Reveal></section>
      <Label>Services · 3 · Shopping basket</Label>
      <section className="bg-yellow px-5 py-20 sm:py-28"><Reveal anim="rise"><BasketServices /></Reveal></section>
      <Label>Services · 4 · Vintage newspaper coupons</Label>
      <section className="bg-paper px-4 sm:px-8 py-20 sm:py-28"><Reveal anim="rise"><CouponServices /></Reveal></section>
    </main>
  );
}
