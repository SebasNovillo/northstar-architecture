import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Northstar Architecture",
  description:
    "Explore selected residential, commercial, and civic architecture projects by Northstar Architecture.",
};

export default function ProjectsPage() {
  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" activeItem="projects" />

      <main id="main-content">
        <section
          aria-labelledby="projects-heading"
          className="bg-[#f2eee8] pt-[120px] text-[#1a1917]"
        >
          <div className="mx-auto max-w-[1440px] px-8 pt-10 md:px-12 md:pt-16 lg:px-16">
            <div className="grid gap-y-6 border-b border-[#e4ddd4] pb-14 md:grid-cols-12 md:gap-x-8 md:pb-20">
              <div className="md:col-span-7 lg:col-span-6">
                <p className="mb-6 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase">
                  Portfolio
                </p>
                <h1
                  id="projects-heading"
                  className="font-serif text-5xl leading-none font-normal md:text-6xl lg:text-7xl"
                >
                  Projects
                </h1>
              </div>

              <div className="flex flex-col justify-end md:col-span-4 md:col-start-9 lg:col-span-4">
                <p className="text-[15px] leading-relaxed text-[#6b6660]">
                  Selected work across residential, commercial, and civic
                  architecture — twelve years of practice in Chicago and the
                  greater midwest.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProjectsGrid projects={projects} />
      </main>

      <Footer />
    </div>
  );
}
