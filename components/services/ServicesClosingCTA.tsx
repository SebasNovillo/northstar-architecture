import Link from "next/link";

export function ServicesClosingCTA() {
  return (
    <section
      aria-labelledby="services-closing-cta-heading"
      className="bg-[#1a1917] text-[#f2eee8]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-9 lg:col-span-8">
            <p className="mb-10 text-[11px] tracking-[0.2em] text-[#9a928a] uppercase md:mb-14">
              Start a Project
            </p>

            <h2
              id="services-closing-cta-heading"
              className="mb-8 font-serif text-4xl leading-[1.05] font-normal italic md:mb-10 md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Have a project
              <br />
              in mind?
            </h2>

            <p className="mb-12 max-w-[420px] text-[15px] leading-relaxed text-[#b8afa6] md:mb-16">
              Tell us what you&apos;re planning, where you&apos;re building, and
              what matters most.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-[15px] tracking-wide transition-opacity duration-300 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2eee8] motion-reduce:transition-none"
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="h-px w-8 bg-current transition-[width] duration-300 group-hover:w-14 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
