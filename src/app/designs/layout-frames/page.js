import ScrollBar from "@/components/ScrollBar";
import { PillNav, FooterBar } from "@/components/SiteNav";
import { HeroSection, Ticker, FounderSection, IdeologySection, RemoteChapter, CriminalsSection, LicenceChapter, RulesSection, ServicesSection, ContactChapter } from "@/components/SiteSections";

export const metadata = { title: "Sathvika | Layout A: Framed panels" };

// Layout A: one cream frame on a blue backdrop, every chapter a rounded panel with the same gap, and a floating menu that follows you.
export default function LayoutFrames() {
  const panel = "rounded-[1.75rem] overflow-hidden";
  return (
    <main className="soft bg-sky p-3 sm:p-6 pt-20 sm:pt-24 overflow-x-clip">
      <ScrollBar /><PillNav />
      <div className="mx-auto max-w-7xl bg-paper border border-red/50 rounded-[2.25rem] p-3 sm:p-5 space-y-4 sm:space-y-6">
        <div className={`${panel} bg-yellow`}><HeroSection /><Ticker /></div>
        <div className={panel}><FounderSection /></div>
        <div className={panel}><IdeologySection /></div>
        <div className={panel}><RemoteChapter bg="bg-sky" /></div>
        <div className={panel}><CriminalsSection /></div>
        <div className={panel}><LicenceChapter /></div>
        <div className={`${panel} bg-butter`}><RulesSection /></div>
        <div className={panel}><ServicesSection bg="bg-sky" /></div>
        <div className={panel}><ContactChapter /></div>
        <FooterBar />
      </div>
    </main>
  );
}
