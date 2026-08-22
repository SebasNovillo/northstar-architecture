import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-[#171716] text-[#eee9df] lg:grid lg:min-h-svh lg:grid-cols-[42%_58%]"
    >
      <div className="flex min-h-[760px] flex-col px-6 pb-12 pt-64 md:px-10 md:pb-14 lg:min-h-svh lg:px-12 lg:pb-12 lg:pt-36 xl:px-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b6660]">
          Est. Chicago, 2014
        </p>

        <h1
          id="hero-title"
          className="mt-14 font-serif text-5xl leading-[0.98] font-normal tracking-[-0.025em] italic sm:text-6xl lg:mt-16 lg:text-[clamp(3.5rem,5vw,5rem)]"
        >
          <span className="block">Designing</span>
          <span className="block">spaces for</span>
          <span className="block">modern life.</span>
        </h1>

        <p className="mt-10 max-w-[22rem] text-[15px] leading-6 text-[#9a928a] lg:mt-11">
          Northstar Architecture — a contemporary studio creating thoughtful
          environments across Chicago and the greater midwest.
        </p>

        <Link
          href="/projects"
          className="mt-auto inline-flex w-fit items-center gap-4 py-1 text-sm text-[#eee9df] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <span>View Projects</span>
          <span aria-hidden="true" className="h-px w-8 bg-current" />
        </Link>
      </div>

      <div className="relative min-h-[58svh] overflow-hidden bg-[#706a61] lg:min-h-svh">
        <Image
          src="/images/northstar-hero-chicago.jpg"
          alt="Chicago high-rise architecture at dusk"
          fill
          preload
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/10" />

        <div className="absolute right-7 bottom-8 text-right text-[#eee9df] md:right-10 md:bottom-10 lg:right-12 lg:bottom-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#d7cfc5]/70">
            Active Projects
          </p>
          <p className="mt-1 font-serif text-5xl leading-none italic">14</p>
        </div>
      </div>
    </section>
  );
}
