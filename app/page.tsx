import { About } from "@/components/home/About";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { Philosophy } from "@/components/home/Philosophy";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Services } from "@/components/home/Services";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="relative bg-[#171716]">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <SelectedProjects />
        <Services />
        <Philosophy />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
