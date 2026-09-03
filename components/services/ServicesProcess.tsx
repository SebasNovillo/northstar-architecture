type ProcessStep = {
  number: `0${number}`;
  title: string;
  description: string;
};

const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding the site, goals, constraints, and opportunities through conversation, observation, and research.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Developing the architectural concept, spatial strategy, and material direction in close collaboration with the client.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Resolving technical systems, documentation, coordination, and regulatory approvals to build confidence in the design.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Supporting construction administration and protecting the design intent from groundbreaking through completion.",
  },
];

export function ServicesProcess() {
  return (
    <section
      aria-labelledby="services-process-heading"
      className="border-y border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="mb-16 grid gap-y-6 md:mb-20 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5 lg:col-span-4">
            <p className="mb-8 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:mb-10">
              Process
            </p>
            <h2
              id="services-process-heading"
              className="font-serif text-3xl leading-[1.1] font-normal md:text-4xl"
            >
              From first conversation
              <br />
              to finished space.
            </h2>
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className={`border-t border-[#e4ddd4] py-8 lg:py-0 ${
                index < processSteps.length - 1 ? "pr-8" : ""
              }`}
            >
              <div className="lg:pt-8 lg:pb-10">
                <p
                  aria-hidden="true"
                  className="mb-6 text-[11px] tracking-[0.12em] text-[#6b6660]"
                >
                  {step.number}
                </p>
                <h3 className="mb-4 font-serif text-xl leading-snug font-normal md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6660]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div aria-hidden="true" className="mt-10 border-t border-[#e4ddd4]" />
      </div>
    </section>
  );
}
