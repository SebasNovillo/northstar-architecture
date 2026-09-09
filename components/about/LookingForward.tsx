import Image from "next/image";

export function LookingForward() {
  return (
    <section
      aria-labelledby="looking-forward-heading"
      className="bg-[#1a1917] text-[#f2eee8]"
    >
      <div className="mx-auto max-w-[1440px] px-8 pt-20 md:px-12 md:pt-28 lg:px-16 lg:pt-36">
        <div className="grid gap-y-10 pb-14 md:grid-cols-12 md:gap-x-8 md:pb-20">
          <div className="md:col-span-6">
            <p className="mb-10 text-[11px] tracking-[0.2em] text-[#9a928a] uppercase md:mb-14">
              Looking Forward
            </p>

            <h2
              id="looking-forward-heading"
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-normal"
            >
              Building with the
              <br />
              future in mind.
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-5 md:col-span-5 md:col-start-8">
            <p className="text-[15px] leading-relaxed text-[#9a928a]">
              Northstar aims to build a practice recognized for clear,
              responsible, and enduring architecture that improves how people
              experience the built environment.
            </p>

            <p className="text-[15px] leading-relaxed text-[#b0a79f]">
              Our goal is not simply to create buildings for today, but to
              design places that can adapt, age with character, and continue to
              serve the people and communities around them.
            </p>
          </div>
        </div>

        <figure className="relative aspect-[3/1] overflow-hidden bg-[#2a2520]">
          <Image
            src="/images/northstar-hero-chicago.jpg"
            alt="Chicago skyline centered on the John Hancock Center"
            fill
            sizes="(min-width: 1440px) 1312px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 4rem)"
            className="object-cover object-center opacity-75"
          />
        </figure>
      </div>

      <div className="mx-auto max-w-[1440px] px-8 py-10 md:px-12 md:py-14 lg:px-16">
        <div aria-hidden="true" className="border-t border-[#2a2520]" />
      </div>
    </section>
  );
}
