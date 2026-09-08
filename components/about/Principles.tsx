const principles = [
  {
    number: "01",
    title: "Context",
    statement: "Every project begins with its place.",
    description:
      "We consider site, climate, neighborhood, history, light, and the patterns of daily life that shape each project.",
  },
  {
    number: "02",
    title: "Clarity",
    statement:
      "Complexity should lead to spaces that feel simple and intentional.",
    description:
      "We organize architecture so that movement, function, structure, and material feel clear and purposeful.",
  },
  {
    number: "03",
    title: "Collaboration",
    statement: "Architecture is shaped through dialogue.",
    description:
      "We work closely with clients, consultants, engineers, and builders throughout the design process.",
  },
  {
    number: "04",
    title: "Endurance",
    statement:
      "Good architecture should remain useful and meaningful over time.",
    description:
      "We design with materials, systems, and ideas intended to adapt, age well, and remain relevant.",
  },
] as const;

export function Principles() {
  return (
    <section
      aria-labelledby="principles-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 pt-20 md:px-12 md:pt-28 lg:px-16">
        <div className="grid gap-y-6 border-b border-[#e4ddd4] pb-14 md:grid-cols-12 md:gap-x-8 md:pb-[72px]">
          <p className="text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:col-span-3">
            Principles
          </p>

          <h2
            id="principles-heading"
            className="font-serif text-3xl leading-[1.1] font-normal md:col-span-6 md:col-start-5 md:text-4xl"
          >
            A clear framework
            <br />
            for every project.
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-8 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-t border-[#e4ddd4] pt-10 pr-8 pb-12 lg:pr-10"
            >
              <p className="mb-6 font-serif text-[clamp(2rem,2.75vw,2.75rem)] leading-none text-[#8a8278]">
                {principle.number}
              </p>

              <div
                aria-hidden="true"
                className="mb-6 border-t border-[#e4ddd4]"
              />

              <h3 className="mb-3 font-serif text-xl leading-snug font-normal md:text-2xl">
                {principle.title}
              </h3>

              <p className="mb-4 text-[13px] leading-snug italic">
                {principle.statement}
              </p>

              <p className="text-[13px] leading-relaxed text-[#6b6660]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        <div aria-hidden="true" className="border-t border-[#e4ddd4]" />
      </div>
    </section>
  );
}
