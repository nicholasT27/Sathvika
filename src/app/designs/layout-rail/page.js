import ScrollBar from "@/components/ScrollBar";
import { ChapterRail, ChapterChips, FooterBar } from "@/components/SiteNav";
import { HeroSection, Ticker, FounderSection, IdeologySection, RemoteChapter, CriminalsSection, LicenceChapter, RulesSection, ServicesSection, ContactChapter } from "@/components/SiteSections";

export const metadata = { title: "Sathvika | Layout B: Chapter rail" };

// Layout B: a numbered chapter rail stays on the left while you read, so you always know where you are. Phones get a chapter strip instead.
export default function LayoutRail() {
  return (
    <main className="soft bg-paper overflow-x-clip">
      <ScrollBar />
      <ChapterChips />
      <div className="lg:grid lg:grid-cols-[15rem_1fr]">
        <ChapterRail />
        <div className="min-w-0">
          <div className="bg-yellow pt-8"><HeroSection /><Ticker /></div>
          <FounderSection />
          <IdeologySection />
          <RemoteChapter bg="bg-sky" />
          <CriminalsSection />
          <LicenceChapter />
          <RulesSection bg="bg-butter" />
          <ServicesSection bg="bg-sky" />
          <ContactChapter />
          <FooterBar className="bg-butter" />
        </div>
      </div>
    </main>
  );
}
