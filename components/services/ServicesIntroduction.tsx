export function ServicesIntroduction() {
  return (
    <section
      aria-labelledby="services-introduction-heading"
      className="border-y border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-3">
            <h2
              id="services-introduction-heading"
              className="text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:pt-1"
            >
              What We Do
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-5">
            <p className="mb-5 text-base leading-relaxed text-[#1a1917]">
              Northstar is a full-service architecture studio working across
              residential, commercial, interior, and adaptive reuse projects.
            </p>
            <p className="text-[15px] leading-relaxed text-[#6b6660]">
              We approach each commission as a collaboration between people,
              place, and purpose—developing spaces that are thoughtful,
              enduring, and specific to their context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
