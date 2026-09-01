import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectNextProjectProps = {
  currentProject: Project;
  projects: readonly Project[];
};

const nextProjectImageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(50vw - 4.25rem), (max-width: 1439px) calc(41.667vw - 4rem), 547px";

export function ProjectNextProject({
  currentProject,
  projects,
}: ProjectNextProjectProps) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentProject.slug,
  );

  if (currentIndex === -1 || projects.length === 0) {
    return null;
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="border-t border-[#e4ddd4] bg-[#f2eee8]">
      <Link
        href={`/projects/${nextProject.slug}`}
        aria-label={`Next project: ${nextProject.title}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1a1917]"
      >
        <div className="mx-auto max-w-[1440px] px-8 py-14 md:px-12 md:py-20 lg:px-16">
          <div className="mb-10 flex items-center justify-between md:mb-14">
            <p className="text-[11px] tracking-[0.15em] text-[#8a8278] uppercase">
              Next Project
            </p>
            <span
              aria-hidden="true"
              className="text-sm text-[#c8bfb5] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-[#1a1917] group-focus-visible:translate-x-1 group-focus-visible:text-[#1a1917] motion-reduce:transform-none motion-reduce:transition-none"
            >
              →
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#d0c8be] md:col-span-6 lg:col-span-5">
              <Image
                src={nextProject.image}
                alt={nextProject.imageAlt}
                fill
                sizes={nextProjectImageSizes}
                className="object-cover transition-[transform,opacity] duration-700 group-hover:scale-[1.03] group-hover:opacity-90 group-focus-visible:scale-[1.03] group-focus-visible:opacity-90 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>

            <div className="md:col-span-5 md:col-start-8 lg:col-span-5">
              <h2 className="mb-6 font-serif text-3xl leading-[1.1] text-[#1a1917] transition-opacity duration-300 group-hover:opacity-70 group-focus-visible:opacity-70 md:text-4xl lg:text-5xl motion-reduce:transition-none">
                {nextProject.title}
              </h2>

              <dl className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-6 border-t border-[#e4ddd4] py-3">
                  <dt className="text-[11px] tracking-[0.15em] text-[#8a8278] uppercase">
                    Location
                  </dt>
                  <dd className="text-right text-sm text-[#1a1917]">
                    {nextProject.location}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-[#e4ddd4] py-3">
                  <dt className="text-[11px] tracking-[0.15em] text-[#8a8278] uppercase">
                    Type
                  </dt>
                  <dd className="text-right text-sm text-[#1a1917]">
                    {nextProject.category}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-[#e4ddd4] py-3">
                  <dt className="text-[11px] tracking-[0.15em] text-[#8a8278] uppercase">
                    Year
                  </dt>
                  <dd className="text-right text-sm text-[#1a1917]">
                    {nextProject.year}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Link>

      <div className="mx-auto max-w-[1440px] border-t border-[#e4ddd4] px-8 pt-6 pb-14 md:px-12 md:pb-20 lg:px-16">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2.5 text-[13px] tracking-wide text-[#8a8278] transition-colors duration-200 hover:text-[#1a1917] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917] motion-reduce:transition-none"
        >
          <span aria-hidden="true" className="block h-px w-4 bg-current" />
          Back to All Projects
        </Link>
      </div>
    </section>
  );
}
