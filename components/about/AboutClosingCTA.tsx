import Link from "next/link";

export function AboutClosingCTA() {
  return (
    <section
      aria-labelledby="about-closing-cta-heading"
      className="border-t border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="mb-8 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:mb-10">
              Start a Conversation
            </p>

            <h2
              id="about-closing-cta-heading"
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-normal"
            >
              Have a project
              <br />
              in mind?
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-7 md:col-span-5 md:col-start-8">
            <p className="max-w-[460px] text-[15px] leading-relaxed text-[#5c5550]">
              We work with clients who value thoughtful design, clear
              collaboration, and places built to last.
            </p>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 text-[15px] transition-opacity duration-200 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917] motion-reduce:transition-none"
            >
              Tell us about your project
              <span
                aria-hidden="true"
                className="h-px w-7 shrink-0 bg-current transition-[width] duration-300 group-hover:w-12 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
