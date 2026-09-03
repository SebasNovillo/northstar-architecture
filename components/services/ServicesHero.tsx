export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[#f2eee8] pt-[120px] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 pt-10 pb-20 md:px-12 md:pt-16 md:pb-28 lg:px-16 lg:pb-36">
        <p className="mb-10 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:mb-14">
          Services
        </p>

        <div className="grid md:grid-cols-12">
          <div className="md:col-span-10 lg:col-span-9">
            <h1
              id="services-heading"
              className="font-serif text-4xl leading-[1.05] font-normal sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Architecture shaped
              <br className="hidden sm:block" /> around place, purpose,
              <br className="hidden sm:block" /> and the way people live.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
