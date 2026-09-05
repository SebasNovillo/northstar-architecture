import Image from "next/image";

export function StudioStory() {
  return (
    <section
      aria-label="Studio story"
      className="border-b border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="flex flex-col gap-5 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-[#1a1917]">
              Northstar Architecture is a Chicago-based studio creating
              thoughtful residential, commercial, interior, and civic spaces.
            </p>

            <p className="text-[15px] leading-relaxed text-[#5c5550]">
              Our work begins with careful observation of place, light,
              material, and the people who will inhabit each project. We
              believe architecture should feel specific to its context while
              remaining clear, adaptable, and enduring.
            </p>

            <p className="text-[15px] leading-relaxed text-[#5c5550]">
              We approach every commission as a collaboration, balancing
              design ambition with technical rigor and practical realities.
            </p>
          </div>

          <figure className="flex flex-col justify-end md:col-span-4 md:col-start-9">
            <figcaption className="mb-4 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
              Material · Chicago
            </figcaption>

            <div className="relative aspect-[3/4] overflow-hidden bg-[#d0c8be]">
              <Image
                src="/images/projects/fulton-workspace.jpg"
                alt="Brick facade material detail in Chicago"
                fill
                sizes="(min-width: 1440px) 416px, (min-width: 768px) 33vw, calc(100vw - 4rem)"
                className="object-cover object-center"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
