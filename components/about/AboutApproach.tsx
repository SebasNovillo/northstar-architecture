export function AboutApproach() {
  return (
    <section
      aria-labelledby="about-approach-heading"
      className="bg-[#1a1917] text-[#f2eee8]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-3">
            <h2
              id="about-approach-heading"
              className="text-[11px] tracking-[0.2em] text-[#9a928a] uppercase md:pt-2"
            >
              Our Approach
            </h2>
          </div>

          <div className="md:col-span-8 md:col-start-5 lg:col-span-7">
            <blockquote className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] font-normal italic">
              <p>“We design for how a place feels, works, and endures.”</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
