import SummitSite from "@/components/SummitSite";

export const metadata = {
  title: "Sathvika | Creative Marketing Agency",
  description: "Branding, performance marketing, website design, strategy and content for brands that want to be noticed.",
};

// The main website. To change the look, switch theme between "calm" and "bold", and hero between "fan", "cascade", "quad" and "row".
export default function Home() {
  return <SummitSite theme="bold" hero="row" />;
}
