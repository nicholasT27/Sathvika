import SummitSite from "@/components/SummitSite";

export const metadata = { title: "Sathvika | Summit layout: Quad" };

// Bold look with the "Quad" hero: four pastel squares, each with one flower-framed founder photo.
export default function Page() {
  return <SummitSite theme="bold" hero="quad" />;
}
