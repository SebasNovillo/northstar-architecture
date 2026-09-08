import Image from "next/image";

const facts = [
  { label: "Founded", values: ["2014"] },
  { label: "Based", values: ["Chicago, Illinois"] },
  {
    label: "Practice",
    values: ["Residential", "Commercial", "Interior", "Civic"],
  },
  { label: "Work", values: ["Midwest and beyond"] },
  {
    label: "Approach",
    values: ["Architecture", "Interior Architecture", "Adaptive Reuse"],
  },
] as const;

export function StudioFacts() {
  return (
    <section
      aria-labelledby="studio-facts-heading"
      className="border-b border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-y-12 md:grid-cols-12 md:items-start md:gap-x-8">
          <figure className="order-2 md:order-1 md:col-span-5">
            <figcaption className="mb-4 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
              Studio · Chicago
            </figcaption>

            <div className="relative aspect-[3/4] overflow-hidden bg-[#d0c8be]">
              <Image
                src="/images/about/studio-interior.avif"
                alt="Architectural studio interior with built-in shelving and pendant lights"
                fill
                sizes="(min-width: 1440px) 528px, (min-width: 768px) 42vw, calc(100vw - 4rem)"
                className="object-cover object-center"
              />
            </div>
          </figure>

          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <h2
              id="studio-facts-heading"
              className="mb-10 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:mb-12"
            >
              Studio
            </h2>

            <dl>
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-2 border-t border-[#e4ddd4] py-5"
                >
                  <dt className="self-start pt-px text-[10px] tracking-[0.1em] text-[#6b6660] uppercase">
                    {fact.label}
                  </dt>

                  <dd className="flex flex-col gap-0.5 text-sm leading-snug">
                    {fact.values.map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div aria-hidden="true" className="border-t border-[#e4ddd4]" />
          </div>
        </div>
      </div>
    </section>
  );
}
