import { Outfit, Titan_One } from "next/font/google";
import "./globals.css";

// Body font (friendly and clean) and headline font (chunky and loud).
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const titan = Titan_One({ variable: "--font-titan", subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Sathvika | Creative Criminals",
  description:
    "A creative agency that breaks the boring brief. Branding, performance marketing, websites, strategy and content.",
};

// Wraps every page with the fonts and the base page structure.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${titan.variable}`}>
      <body>{children}</body>
    </html>
  );
}
