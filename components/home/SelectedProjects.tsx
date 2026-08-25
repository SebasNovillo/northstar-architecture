import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function SelectedProjects() {
  return (
    <section
      aria-labelledby="selected-projects-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-8 pb-6 md:mb-14">
          <div>
            <p className="mb-2 text-[11px] tracking-[0.2em] text-[#8a8278] uppercase">
              Work
            </p>
            <h2
              id="selected-projects-heading"
              className="font-serif text-2xl font-normal md:text-3xl"
            >
              Selected Projects
            </h2>
          </div>

          <Link
            href="/projects"
            prefetch={false}
            className="group inline-flex shrink-0 items-center gap-2.5 text-sm tracking-wide transition-opacity duration-200 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917]"
          >
            View All Projects
            <span className="block h-px w-5 bg-current transition-all duration-300 group-hover:w-9 group-focus-visible:w-9" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            {featuredProjects.slice(0, 1).map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspectRatio="4 / 5"
                sizes="(max-width: 767px) calc(100vw - 4rem), 40vw"
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 md:col-span-7 md:gap-8">
            {featuredProjects.slice(1, 2).map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspectRatio="8 / 5"
                sizes="(max-width: 767px) calc(100vw - 4rem), 58vw"
              />
            ))}

            <div className="md:w-[78%]">
              {featuredProjects.slice(2, 3).map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  aspectRatio="4 / 3"
                  sizes="(max-width: 767px) calc(100vw - 4rem), 45vw"
                />
              ))}
            </div>
          </div>

          <div className="mt-2 md:col-span-12 md:mt-4">
            {featuredProjects.slice(3, 4).map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspectRatio="21 / 8"
                sizes="(max-width: 767px) calc(100vw - 4rem), 100vw"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
