import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import Ideology from "@/components/Ideology";
import Remote from "@/components/Remote";
import Criminals from "@/components/Criminals";
import License from "@/components/License";
import Rules from "@/components/Rules";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// The one and only page: every section stacked in the order the client asked for.
export default function Home() {
  return (
    <main className="soft">
      <Nav />
      <Hero />
      <Founder />
      <Ideology />
      <Remote />
      <Criminals />
      <License />
      <Rules />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
