import type { Project } from "@/types/project";

type ProjectDetailOverviewProps = {
  project: Project;
};

export function ProjectDetailOverview({
  project,
}: ProjectDetailOverviewProps) {
  return (
    <section
      aria-labelledby="project-overview-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-10 px-8 py-20 md:grid-cols-12 md:gap-x-8 md:px-12 md:py-28 lg:px-16 lg:py-36">
        <div className="md:col-span-5 lg:col-span-4">
          <p className="mb-8 text-[11px] tracking-[0.15em] text-[#6b6660] uppercase md:mb-10">
            Project Overview
          </p>
          <h2
            id="project-overview-heading"
            className="font-serif text-2xl leading-[1.15] text-[#1a1917] md:text-3xl"
          >
            {project.statement}
          </h2>
        </div>

        <div className="flex flex-col justify-end md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
          {project.description.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-5 text-[15px] leading-relaxed text-[#5c5550] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
