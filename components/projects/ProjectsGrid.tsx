"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

const filters = ["All", "Residential", "Commercial", "Public"] as const;

type ProjectFilter = (typeof filters)[number];

type ProjectsGridProps = {
  projects: Project[];
};

type ProjectPairProps = {
  projects: Project[];
  rowIndex: number;
};

const smallImageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (min-width: 1440px) 530px, 42vw";
const largeImageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (min-width: 1440px) 742px, 58vw";
const fullImageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (min-width: 1440px) 1312px, calc(100vw - 8rem)";

function ProjectPair({ projects, rowIndex }: ProjectPairProps) {
  if (projects.length === 1) {
    return (
      <ProjectCard
        project={projects[0]}
        aspectRatio="21 / 8"
        sizes={fullImageSizes}
        eager={rowIndex === 0}
      />
    );
  }

  const alternateLayout = rowIndex % 2 === 1;
  const [firstProject, secondProject] = projects;

  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10">
      <div className={alternateLayout ? "md:col-span-7" : "md:col-span-5"}>
        <ProjectCard
          project={firstProject}
          aspectRatio={alternateLayout ? "16 / 11" : "3 / 4"}
          sizes={alternateLayout ? largeImageSizes : smallImageSizes}
          eager={rowIndex === 0}
        />
      </div>

      <div
        className={
          alternateLayout
            ? "md:col-span-5 md:pt-24"
            : "md:col-span-7 md:pt-16"
        }
      >
        <ProjectCard
          project={secondProject}
          aspectRatio={alternateLayout ? "3 / 4" : "4 / 3"}
          sizes={alternateLayout ? smallImageSizes : largeImageSizes}
        />
      </div>
    </div>
  );
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const projectRows = Array.from(
    { length: Math.ceil(filteredProjects.length / 2) },
    (_, index) => filteredProjects.slice(index * 2, index * 2 + 2),
  );

  const projectCountLabel = `${filteredProjects.length} ${
    filteredProjects.length === 1 ? "project" : "projects"
  }`;

  return (
    <section
      aria-labelledby="project-archive-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <h2 id="project-archive-heading" className="sr-only">
        Project archive
      </h2>

      <div className="sticky top-16 z-40 border-b border-[#e4ddd4] bg-[rgba(242,238,232,0.97)] backdrop-blur-[14px] md:top-[72px]">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-16">
          <div
            aria-label="Filter projects by category"
            className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? projects.length
                  : projects.filter(
                      (project) => project.category === filter,
                    ).length;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-label={`${filter}, ${count} ${
                    count === 1 ? "project" : "projects"
                  }`}
                  aria-controls="projects-grid"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative mr-10 shrink-0 cursor-pointer bg-transparent py-5 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#1a1917] ${
                    isActive
                      ? "font-medium text-[#1a1917]"
                      : "text-[#6b6660] hover:text-[#1a1917]"
                  }`}
                >
                  {filter}
                  <span
                    aria-hidden="true"
                    className="ml-1.5 align-top text-[10px] text-[#6b6660]"
                  >
                    {count}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#1a1917] transition-transform duration-300 motion-reduce:transition-none ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}

            <p
              aria-atomic="true"
              aria-live="polite"
              className="ml-auto shrink-0 pl-8 text-xs text-[#6b6660]"
            >
              {projectCountLabel}
            </p>
          </div>
        </div>
      </div>

      <div
        key={activeFilter}
        id="projects-grid"
        className="mx-auto max-w-[1440px] px-8 py-14 motion-reduce:animate-none md:px-12 md:py-20 lg:px-16 [animation:projects-grid-in_350ms_ease-out]"
      >
        <div className="flex flex-col gap-16 md:gap-24">
          {projectRows.map((row, rowIndex) => (
            <ProjectPair
              key={row[0].slug}
              projects={row}
              rowIndex={rowIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
