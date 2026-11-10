import ScrollBar from "@/components/ScrollBar";
import { DotNav, SnapPage, FooterBar } from "@/components/SiteNav";
import { HeroSection, Ticker, FounderSection, IdeologySection, RemoteChapter, CriminalsSection, LicenceChapter, RulesSection, ServicesSection, ContactChapter } from "@/components/SiteSections";

export const metadata = { title: "Sathvika | Layout C: Full-screen scenes" };

// Layout C: every chapter is one full screen with its content centred, the page settles on each one, and dots on the right jump between them.
export default function LayoutScenes() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ScrollBar /><SnapPage /><DotNav />
      <header className="fixed top-3 inset-x-0 z-40 px-3 pointer-events-none">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="#top" className="pointer-events-auto display text-xl text-red bg-paper/90 border-[3px] border-ink rounded-full px-4 py-1 shadow-[3px_3px_0_var(--ink)]">Sathvika<span className="text-blue">*</span></a>
          <a href="#contact" className="pointer-events-auto btn bg-red text-paper !py-1.5 !px-4 text-xs">Start a project</a>
        </div>
      </header>
      <div className="snap-start min-h-screen flex flex-col justify-between bg-yellow pt-20"><div className="my-auto"><HeroSection /></div><Ticker /></div>
      <div className="snap-start"><FounderSection full /></div>
      <div className="snap-start"><IdeologySection full /></div>
      <div className="snap-start"><RemoteChapter full bg="bg-sky" /></div>
      <div className="snap-start"><CriminalsSection full /></div>
      <div className="snap-start"><LicenceChapter full /></div>
      <div className="snap-start"><RulesSection full bg="bg-butter" /></div>
      <div className="snap-start"><ServicesSection full bg="bg-sky" /></div>
      <div className="snap-start"><ContactChapter full /></div>
      <FooterBar className="snap-start bg-butter" />
    </main>
  );
}
