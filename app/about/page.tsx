import type { Metadata } from "next";

import { AboutClosingCTA } from "@/components/about/AboutClosingCTA";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutHero } from "@/components/about/AboutHero";
import { LookingForward } from "@/components/about/LookingForward";
import { Principles } from "@/components/about/Principles";
import { StudioFacts } from "@/components/about/StudioFacts";
import { StudioStory } from "@/components/about/StudioStory";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const title = "About | Northstar Architecture";
const description =
  "Learn about Northstar Architecture, a Chicago studio grounded in place, clarity, and purpose.";
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
    url: "/about",
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

export default function AboutPage() {
  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" />

      <main id="main-content">
        <AboutHero />
        <AboutApproach />
        <StudioStory />
        <Principles />
        <StudioFacts />
        <LookingForward />
        <AboutClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
