import Image from "next/image";

import type { Project, ProjectImage } from "@/types/project";

type ProjectImageStoryProps = {
  project: Project;
};

type StoryImageProps = {
  image: ProjectImage;
  sizes: string;
  className: string;
};

const fullWidthSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(100vw - 6rem), (max-width: 1439px) calc(100vw - 8rem), 1312px";

const portraitSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 36vw, (max-width: 1439px) 38vw, 547px";

const landscapeSizes =
  "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 52vw, (max-width: 1439px) 52vw, 733px";

function StoryImage({ image, sizes, className }: StoryImageProps) {
  return (
    <div className={`relative overflow-hidden bg-[#d0c8be] ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function ProjectImageStory({ project }: ProjectImageStoryProps) {
  const [panorama, portrait, landscape, closing] = project.imageStory;

  return (
    <section
      aria-label={`${project.title} image story`}
      className="bg-[#f2eee8]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <StoryImage
          image={panorama}
          sizes={fullWidthSizes}
          className="mb-10 aspect-[21/9] md:mb-14"
        />

        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-14 md:grid-cols-12 md:gap-8">
          <StoryImage
            image={portrait}
            sizes={portraitSizes}
            className="aspect-[3/4] md:col-span-5"
          />
          <StoryImage
            image={landscape}
            sizes={landscapeSizes}
            className="aspect-[4/3] md:col-span-7 md:mt-16"
          />
        </div>

        <StoryImage
          image={closing}
          sizes={fullWidthSizes}
          className="aspect-[16/7]"
        />
      </div>
    </section>
  );
}
