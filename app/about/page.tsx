import type { Metadata } from "next";

import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutHero } from "@/components/about/AboutHero";
import { StudioStory } from "@/components/about/StudioStory";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "About | Northstar Architecture",
  description:
    "Learn about Northstar Architecture, a Chicago studio grounded in place, clarity, and purpose.",
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" />

      <main id="main-content">
        <AboutHero />
        <AboutApproach />
        <StudioStory />
      </main>

      <Footer />
    </div>
  );
}
