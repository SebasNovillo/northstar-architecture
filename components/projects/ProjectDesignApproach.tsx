import type { Project } from "@/types/project";

type ProjectDesignApproachProps = {
  project: Project;
};

export function ProjectDesignApproach({
  project,
}: ProjectDesignApproachProps) {
  return (
    <section
      aria-labelledby="design-approach-heading"
      className="bg-[#1a1917] text-[#f2eee8]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-10 px-8 py-24 md:grid-cols-12 md:gap-x-8 md:px-12 md:py-36 lg:px-16">
        <div className="md:col-span-5 lg:col-span-4">
          <p className="mb-8 text-[11px] tracking-[0.2em] text-[#9a928a] uppercase md:mb-10">
            Design Approach
          </p>
          <h2
            id="design-approach-heading"
            className="font-serif text-2xl leading-[1.15] text-[#f2eee8] italic md:text-3xl"
          >
            {project.designApproach.statement}
          </h2>
        </div>

        <div className="flex flex-col justify-end md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
          {project.designApproach.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-5 text-[15px] leading-relaxed text-[#9a928a] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
