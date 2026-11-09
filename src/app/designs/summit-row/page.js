import SummitSite from "@/components/SummitSite";

export const metadata = { title: "Sathvika | Summit layout: Row" };

// Bold look with the "Row" hero: headline and button on top, four tilted rounded cards in a row.
export default function Page() {
  return <SummitSite theme="bold" hero="row" />;
}
