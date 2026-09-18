import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ServicesClosingCTA } from "@/components/services/ServicesClosingCTA";
import { ServicesDetails } from "@/components/services/ServicesDetails";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIndex } from "@/components/services/ServicesIndex";
import { ServicesIntroduction } from "@/components/services/ServicesIntroduction";
import { ServicesProcess } from "@/components/services/ServicesProcess";

const title = "Services | Northstar Architecture";
const description =
  "Architecture, interior architecture, adaptive reuse, and design services by Northstar Architecture in Chicago.";
const socialImage = {
  url: "/images/northstar-hero-chicago.jpg",
  width: 1600,
  height: 1200,
  alt: "Chicago high-rise architecture at dusk",
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/services",
    siteName: "Northstar Architecture",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
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
