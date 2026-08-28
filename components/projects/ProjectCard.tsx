import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  aspectRatio: string;
  sizes: string;
  eager?: boolean;
};

export function ProjectCard({
  project,
  aspectRatio,
  sizes,
  eager = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={false}
      aria-label={`View ${project.title} project`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917]"
    >
      <div
        className="relative overflow-hidden bg-[#d0c8be]"
        style={{ aspectRatio }}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#1a1917]/0 transition-colors duration-500 group-hover:bg-[#1a1917]/12 group-focus-visible:bg-[#1a1917]/12 motion-reduce:transition-none"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 px-5 py-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
          <span className="inline-flex items-center gap-2 text-[13px] tracking-wide text-[#f2eee8]">
            View Project
            <span className="block h-px w-5 bg-current" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] items-start gap-x-6 pt-5">
        <div>
          <h3 className="mb-1.5 font-serif text-lg leading-tight text-[#1a1917]">
            {project.title}
          </h3>
          <p className="text-[13px] leading-none text-[#6b6660]">
            {project.location}
          </p>
        </div>

        <div className="shrink-0 pt-0.5 text-right">
          <p className="mb-1 text-[11px] leading-none tracking-[0.1em] text-[#1a1917] uppercase">
            {project.category}
          </p>
          <p className="text-xs leading-none text-[#6b6660]">{project.year}</p>
        </div>
      </div>
    </Link>
  );
}
