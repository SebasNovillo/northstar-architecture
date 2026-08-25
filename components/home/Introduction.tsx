export function Introduction() {
  return (
    <section
      aria-labelledby="introduction-heading"
      className="border-b border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
        <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-8 lg:col-span-7">
            <h2
              id="introduction-heading"
              className="font-serif text-3xl leading-[1.1] font-normal md:text-4xl lg:text-5xl"
            >
              Architecture shaped by context, material and human experience.
            </h2>
          </div>

          <div className="flex flex-col justify-end md:col-span-4 lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-[1.625] text-[#6b6660]">
              Northstar is a contemporary Chicago architecture studio. We
              create thoughtful spaces that respond to their environment and
              the people who inhabit them — from intimate residences to civic
              landmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
