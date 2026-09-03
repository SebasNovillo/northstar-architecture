import Link from "next/link";

type ServiceIndexItem = {
  id: `0${number}`;
  target: string;
  title: string;
};

const services: readonly ServiceIndexItem[] = [
  {
    id: "01",
    target: "residential-architecture",
    title: "Residential Architecture",
  },
  {
    id: "02",
    target: "commercial-architecture",
    title: "Commercial Architecture",
  },
  {
    id: "03",
    target: "interior-architecture",
    title: "Interior Architecture",
  },
  {
    id: "04",
    target: "renovation-adaptive-reuse",
    title: "Renovation & Adaptive Reuse",
  },
];

export function ServicesIndex() {
  return (
    <section
      aria-labelledby="services-index-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <h2 id="services-index-heading" className="sr-only">
        Services Index
      </h2>

      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-16">
        <ol>
          {services.map((service) => (
            <li
              key={service.target}
              className="border-t border-[#e4ddd4]"
            >
              <Link
                href={`/services#${service.target}`}
                className="group flex items-center justify-between gap-6 py-8 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1a1917] md:py-10"
              >
                <span className="w-7 shrink-0 text-[11px] tracking-[0.12em] text-[#8a8278] transition-colors duration-300 group-hover:text-[#1a1917] group-focus-visible:text-[#1a1917] motion-reduce:transition-none">
                  {service.id}
                </span>

                <h3 className="min-w-0 flex-1 font-serif text-[clamp(1.5rem,3.5vw,3rem)] leading-tight font-normal transition-opacity duration-300 group-hover:opacity-65 group-focus-visible:opacity-65 motion-reduce:transition-none">
                  {service.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg text-[#8a8278] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-[#1a1917] group-focus-visible:translate-x-1 group-focus-visible:text-[#1a1917] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div aria-hidden="true" className="border-t border-[#e4ddd4]" />
      </div>
    </section>
  );
}
