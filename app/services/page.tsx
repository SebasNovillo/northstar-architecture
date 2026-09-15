import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ServicesClosingCTA } from "@/components/services/ServicesClosingCTA";
import { ServicesDetails } from "@/components/services/ServicesDetails";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIndex } from "@/components/services/ServicesIndex";
import { ServicesIntroduction } from "@/components/services/ServicesIntroduction";
import { ServicesProcess } from "@/components/services/ServicesProcess";

export const metadata: Metadata = {
  title: "Services | Northstar Architecture",
  description:
    "Architecture, interior architecture, adaptive reuse, and design services by Northstar Architecture in Chicago.",
};

export default function ServicesPage() {
  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" />

      <main id="main-content">
        <ServicesHero />
        <ServicesIntroduction />
        <ServicesIndex />
        <ServicesDetails />
        <ServicesProcess />
        <ServicesClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
