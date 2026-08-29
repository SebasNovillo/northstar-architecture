import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectDetailHeroProps = {
  project: Project;
};

const imageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(100vw - 6rem), (min-width: 1440px) 1312px, calc(100vw - 8rem)";

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section
      aria-labelledby="project-title"
      className="bg-[#f2eee8] pt-[120px] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 pt-10 md:px-12 md:pt-16 lg:px-16">
        <div className="mb-10 md:mb-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[13px] tracking-wide text-[#6b6660] transition-colors duration-200 hover:text-[#1a1917] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917]"
          >
            <span aria-hidden="true" className="block h-px w-4 bg-current" />
            All Projects
          </Link>
        </div>

        <div className="mb-14 grid gap-y-6 border-b border-[#e4ddd4] pb-14 md:mb-20 md:grid-cols-12 md:gap-x-8 md:pb-20">
          <div className="md:col-span-7 lg:col-span-6">
            <h1
              id="project-title"
              className="font-serif text-4xl leading-[1.05] font-normal md:text-5xl lg:text-6xl"
            >
              {project.title}
            </h1>
          </div>

          <dl className="flex flex-col justify-end gap-3 md:col-span-4 md:col-start-9">
            <div className="flex items-center justify-between gap-6">
              <dt className="text-[11px] tracking-[0.12em] text-[#6b6660] uppercase">
                Location
              </dt>
              <dd className="text-right text-sm">{project.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-6 border-t border-[#e4ddd4] pt-3">
              <dt className="text-[11px] tracking-[0.12em] text-[#6b6660] uppercase">
                Type
              </dt>
              <dd className="text-right text-sm">{project.category}</dd>
            </div>
            <div className="flex items-center justify-between gap-6 border-t border-[#e4ddd4] pt-3">
              <dt className="text-[11px] tracking-[0.12em] text-[#6b6660] uppercase">
                Year
              </dt>
              <dd className="text-right text-sm">{project.year}</dd>
            </div>
          </dl>
        </div>

        <div
          className="relative overflow-hidden bg-[#d0c8be]"
          style={{ aspectRatio: "16 / 9" }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={imageSizes}
            loading="eager"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
