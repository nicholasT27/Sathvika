import { WavesLayout } from "@/components/LayoutMore";

export const metadata = {
  title: "Sathvika | Creative Marketing Agency",
  description: "Branding, performance marketing, website design, strategy and content for brands that want to be noticed.",
};

// The main website: the "Checks flow" layout (colour bands step into each other through checks dividers, with a chapter progress badge).
// The previous home page (centred-logo menu) is still available at /designs/summit-row.
export default function Home() {
  return <WavesLayout />;
}
