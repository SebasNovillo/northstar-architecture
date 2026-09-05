import Image from "next/image";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto grid max-w-[1440px] md:min-h-screen md:grid-cols-12 md:gap-x-8 md:px-12 md:pt-[72px] lg:px-16">
        <div className="relative order-2 aspect-[4/3] overflow-hidden bg-[#d0c8be] md:order-1 md:col-span-7 md:aspect-auto md:min-h-[calc(100svh-72px)]">
          <Image
            src="/images/projects/west-loop-studio.jpg"
            alt="Curving concrete staircase in a Chicago architectural interior"
            fill
            preload
            sizes="(min-width: 1440px) 752px, (min-width: 768px) 58vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="order-1 flex flex-col px-8 pt-[120px] pb-8 md:order-2 md:col-span-5 md:justify-between md:px-0 md:py-10 md:pl-2 lg:py-14">
          <p className="mb-8 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:mb-0">
            Studio
          </p>

          <div>
            <h1
              id="about-heading"
              className="mb-8 font-serif text-[2.4rem] leading-[1.06] font-normal md:mb-10 md:text-4xl md:leading-[1.05] lg:mb-14 lg:text-5xl xl:text-[3.5rem]"
            >
              Architecture
              <br className="hidden md:block" /> grounded in
              <br className="hidden md:block" /> place, clarity,
              <br className="hidden md:block" /> and purpose.
            </h1>

            <p className="text-[11px] tracking-[0.15em] text-[#6b6660] uppercase">
              Chicago, Est. 2014
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
