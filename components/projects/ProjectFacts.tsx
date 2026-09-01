import type { Project } from "@/types/project";

type ProjectFactsProps = {
  project: Project;
};

export function ProjectFacts({ project }: ProjectFactsProps) {
  const facts = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Type", value: project.category },
    { label: "Area", value: project.area },
    { label: "Scope", value: project.scope },
    { label: "Status", value: project.status },
  ];

  return (
    <section
      aria-labelledby="project-facts-heading"
      className="border-y border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-8 py-14 md:grid-cols-12 md:gap-x-8 md:px-12 md:py-20 lg:px-16">
        <div className="mb-10 md:col-span-3 md:mb-0">
          <h2
            id="project-facts-heading"
            className="text-[11px] tracking-[0.15em] text-[#6b6660] uppercase"
          >
            Project Facts
          </h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 md:col-span-8 md:col-start-5 lg:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-t border-[#e4ddd4] py-5 pr-8"
            >
              <dt className="mb-2 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
                {fact.label}
              </dt>
              <dd className="text-[15px] leading-snug text-[#1a1917]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
