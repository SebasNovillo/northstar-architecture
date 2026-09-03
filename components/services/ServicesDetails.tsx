import Image from "next/image";

import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";

type ServiceDetail = {
  id: string;
  number: `0${number}`;
  title: string;
  description: string;
  capabilities: readonly string[];
};

const serviceDetails = {
  residential: {
    id: "residential-architecture",
    number: "01",
    title: "Residential Architecture",
    description:
      "We design homes around the rhythms of daily life, responding carefully to site, light, material, and the individual needs of each client.",
    capabilities: [
      "New residences",
      "Renovations and additions",
      "Interior architecture",
      "Site and feasibility studies",
    ],
  },
  commercial: {
    id: "commercial-architecture",
    number: "02",
    title: "Commercial Architecture",
    description:
      "We create purposeful commercial environments that balance identity, performance, flexibility, and long-term value.",
    capabilities: [
      "Workplace",
      "Hospitality",
      "Retail",
      "Mixed-use",
      "Tenant improvements",
    ],
  },
  interior: {
    id: "interior-architecture",
    number: "03",
    title: "Interior Architecture",
    description:
      "We approach interiors as an extension of architecture, shaping atmosphere through proportion, material, light, and detail.",
    capabilities: [
      "Space planning",
      "Material and finish strategy",
      "Custom millwork",
      "Lighting coordination",
      "Furniture integration",
    ],
  },
  renovation: {
    id: "renovation-adaptive-reuse",
    number: "04",
    title: "Renovation & Adaptive Reuse",
    description:
      "We transform existing structures through careful intervention, preserving what matters while introducing new life and function.",
    capabilities: [
      "Building renovation",
      "Historic adaptation",
      "Existing-condition studies",
      "Reprogramming",
      "Strategic additions",
    ],
  },
} as const satisfies Record<string, ServiceDetail>;

const commercialImageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(100vw - 6rem), (max-width: 1439px) calc(100vw - 8rem), 1312px";

export function ServicesDetails() {
  const { residential, commercial, interior, renovation } = serviceDetails;

  return (
    <>
      <section
        id={residential.id}
        aria-labelledby={`${residential.id}-heading`}
        className="border-t border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
      >
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-7 lg:col-span-7">
              <p className="mb-6 text-[11px] tracking-[0.12em] text-[#6b6660] md:mb-8">
                {residential.number}
              </p>
              <h2
                id={`${residential.id}-heading`}
                className="mb-7 font-serif text-3xl leading-[1.1] font-normal md:text-4xl"
              >
                {residential.title}
              </h2>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-[#5c5550]">
                {residential.description}
              </p>
            </div>

            <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
              <ServiceCapabilities capabilities={residential.capabilities} />
            </div>
          </div>
        </div>
      </section>

      <section
        id={commercial.id}
        aria-labelledby={`${commercial.id}-heading`}
        className="border-t border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
      >
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-12 grid gap-y-4 border-b border-[#e4ddd4] pb-12 md:mb-16 md:grid-cols-12 md:gap-x-8 md:pb-16">
            <div className="flex items-start pt-1 md:col-span-1 md:pt-2">
              <p className="text-[11px] tracking-[0.12em] text-[#6b6660]">
                {commercial.number}
              </p>
            </div>
            <div className="md:col-span-10">
              <h2
                id={`${commercial.id}-heading`}
                className="font-serif text-3xl leading-[1.08] font-normal md:text-4xl lg:text-5xl"
              >
                {commercial.title}
              </h2>
            </div>
          </div>

          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-5 lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-[#5c5550]">
                {commercial.description}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-8 lg:col-start-8">
              <ServiceCapabilities capabilities={commercial.capabilities} />
            </div>
          </div>

          <div className="relative mt-14 aspect-[4/3] overflow-hidden bg-[#d8d0c4] sm:aspect-[16/7] md:mt-20 md:aspect-[21/7]">
            <Image
              src="/images/projects/fulton-workspace.jpg"
              alt="Brick and glass exterior of a contemporary commercial building"
              fill
              sizes={commercialImageSizes}
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      <section
        id={interior.id}
        aria-labelledby={`${interior.id}-heading`}
        className="bg-[#1a1917] text-[#f2eee8]"
      >
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-7 lg:col-span-7">
              <p className="mb-6 text-[11px] tracking-[0.12em] text-[#9a928a] md:mb-8">
                {interior.number}
              </p>
              <h2
                id={`${interior.id}-heading`}
                className="mb-7 font-serif text-3xl leading-[1.1] font-normal md:text-4xl"
              >
                {interior.title}
              </h2>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-[#b8afa6]">
                {interior.description}
              </p>
            </div>

            <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
              <ServiceCapabilities
                capabilities={interior.capabilities}
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id={renovation.id}
        aria-labelledby={`${renovation.id}-heading`}
        className="border-t border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
      >
        <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-12 flex items-start gap-6 md:mb-16 md:gap-10">
            <p className="shrink-0 pt-1 text-[11px] tracking-[0.12em] text-[#6b6660] md:pt-2">
              {renovation.number}
            </p>
            <h2
              id={`${renovation.id}-heading`}
              className="min-w-0 font-serif text-3xl leading-[1.05] font-normal md:text-4xl lg:text-5xl xl:text-6xl"
            >
              {renovation.title}
            </h2>
          </div>

          <div aria-hidden="true" className="mb-12 border-t border-[#e4ddd4] md:mb-16" />

          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-5">
              <p className="text-[15px] leading-relaxed text-[#5c5550]">
                {renovation.description}
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-8">
              <ServiceCapabilities capabilities={renovation.capabilities} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
