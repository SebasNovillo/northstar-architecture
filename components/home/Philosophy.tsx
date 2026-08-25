export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="bg-[#1a1917] text-[#f2eee8]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-10 lg:col-span-9">
            <h2
              id="philosophy-heading"
              className="mb-10 text-[11px] tracking-[0.2em] text-[#8a8278] uppercase md:mb-14"
            >
              Philosophy
            </h2>

            <blockquote className="font-serif text-3xl leading-[1.1] font-normal italic md:text-4xl lg:text-5xl xl:text-6xl">
              <p>
                “We create spaces that respond to their environment and the
                people who inhabit them.”
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
