import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid items-start gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#d8d0c4]">
              <Image
                src="/images/about/studio-interior.avif"
                alt="Refined architectural studio workspace interior"
                fill
                sizes="(min-width: 1440px) 528px, (min-width: 1024px) calc(41.667vw - 72px), (min-width: 768px) calc(41.667vw - 59px), calc(100vw - 4rem)"
                className="object-cover"
              />
            </div>

            <dl className="mt-6 grid grid-cols-2 border-t border-[#e4ddd4] pt-5">
              <div className="flex flex-col border-r border-[#e4ddd4] pr-5">
                <dt className="text-xs text-[#6b6660]">Years in practice</dt>
                <dd className="order-first mb-1 font-serif text-2xl italic md:text-3xl">
                  12
                </dd>
              </div>

              <div className="flex flex-col pl-5">
                <dt className="text-xs text-[#6b6660]">
                  Completed projects
                </dt>
                <dd className="order-first mb-1 font-serif text-2xl italic md:text-3xl">
                  80+
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-2">
            <p className="mb-8 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase">
              Studio
            </p>

            <h2
              id="about-heading"
              className="mb-6 font-serif text-2xl leading-[1.15] font-normal md:text-3xl lg:text-4xl"
            >
              An independent studio with deep Chicago roots.
            </h2>

            <div aria-hidden="true" className="mb-7 h-px w-8 bg-[#c8bfb5]" />

            <p className="mb-6 text-[15px] leading-relaxed text-[#5c5550]">
              Northstar is an independent architecture studio based in
              Chicago, working across residential, commercial, and civic
              architecture. We bring an exacting attention to material, light,
              and the human scale — crafting spaces that earn their place in
              the built environment.
            </p>

            <p className="mb-10 text-[15px] leading-relaxed text-[#6b6660]">
              Our work begins with careful listening — to the site, the brief,
              and the people for whom we build. Every project is a
              collaboration shaped by context, constraint, and craft.
            </p>

            <Link
              href="/#about"
              className="group inline-flex items-center gap-3 text-sm tracking-wide transition-opacity duration-200 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              About the Studio
              <span
                aria-hidden="true"
                className="h-px w-6 bg-current transition-[width] duration-300 group-hover:w-10 group-focus-visible:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
