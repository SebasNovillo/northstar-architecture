import Image from "next/image";

import type { Project } from "@/types/project";

type ProjectFeatureImageProps = {
  project: Project;
};

const featureImageSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(100vw - 6rem), (max-width: 1439px) calc(100vw - 8rem), 1312px";

export function ProjectFeatureImage({ project }: ProjectFeatureImageProps) {
  return (
    <section
      aria-label={`${project.title} feature image`}
      className="bg-[#f2eee8]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-14 md:px-12 md:py-20 lg:px-16">
        <div className="relative aspect-[16/8] overflow-hidden bg-[#d0c8be]">
          <Image
            src={project.featureImage.src}
            alt={project.featureImage.alt}
            fill
            sizes={featureImageSizes}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
