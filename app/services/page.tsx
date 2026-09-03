import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ServicesDetails } from "@/components/services/ServicesDetails";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIndex } from "@/components/services/ServicesIndex";
import { ServicesIntroduction } from "@/components/services/ServicesIntroduction";

export default function ServicesPage() {
  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" />

      <main id="main-content">
        <ServicesHero />
        <ServicesIntroduction />
        <ServicesIndex />
        <ServicesDetails />
      </main>

      <Footer />
    </div>
  );
}
