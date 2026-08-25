type Service = {
  id: `0${number}`;
  title: string;
  description: string;
};

const services: readonly Service[] = [
  {
    id: "01",
    title: "Architecture",
    description:
      "Full-service design from concept development through construction administration.",
  },
  {
    id: "02",
    title: "Interior Design",
    description:
      "Material selection, spatial refinement, and the thoughtful composition of light.",
  },
  {
    id: "03",
    title: "Renovation & Adaptive Reuse",
    description:
      "Considered transformation of existing structures into enduring, purposeful spaces.",
  },
  {
    id: "04",
    title: "Planning & Consultation",
    description:
      "Site analysis, feasibility studies, and strategic guidance for complex programs.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-y border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-4">
            <p className="mb-4 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase">
              Capabilities
            </p>
            <h2
              id="services-heading"
              className="font-serif text-2xl font-normal md:text-3xl"
            >
              Services
            </h2>
          </div>

          <ol className="border-b border-[#e4ddd4] md:col-span-7 md:col-start-6">
            {services.map((service) => (
              <li
                key={service.id}
                className="group/service border-t border-[#e4ddd4] first:border-t-0"
              >
                <div className="flex items-start justify-between gap-6 py-6 md:py-7">
                  <div className="flex min-w-0 flex-1 items-start gap-6 md:gap-10">
                    <span className="min-w-5 shrink-0 pt-[3px] text-[11px] tracking-[0.1em] text-[#6b6660]">
                      {service.id}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-serif text-[1.2rem] leading-snug font-normal transition-opacity duration-200">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-h-24 overflow-hidden text-sm leading-relaxed text-[#6b6660] opacity-100 transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover/service:max-h-16 md:group-hover/service:opacity-100">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 pt-[3px] text-[15px] text-[#c8bfb5] transition-all duration-200 md:group-hover/service:translate-x-1 md:group-hover/service:text-[#1a1917]"
                  >
                    →
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
