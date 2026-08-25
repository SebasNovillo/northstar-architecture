import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex h-svh min-h-[640px] overflow-hidden bg-[#1a1917] text-[#f2eee8]"
    >
      <div className="relative z-10 flex w-full flex-col px-8 pt-28 pb-10 md:w-[42%] md:px-12 md:pt-32 md:pb-14 lg:px-16">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#aaa29a] uppercase md:text-[#9a928a]">
          Est. Chicago, 2014
        </p>

        <h1
          id="hero-title"
          className="mt-12 font-serif text-[40px] leading-[1.07] font-normal tracking-[-0.025em] italic md:mt-14 md:text-5xl lg:text-[52px]"
        >
          <span className="block">Designing</span>
          <span className="block">spaces for</span>
          <span className="block">modern life.</span>
        </h1>

        <p className="mt-8 max-w-[22rem] text-[15px] leading-6 text-[#d0c8be] md:hidden">
          A contemporary studio creating thoughtful environments across
          Chicago.
        </p>
        <p className="mt-10 hidden max-w-[22rem] text-[15px] leading-6 text-[#9a928a] md:block">
          Northstar Architecture — a contemporary studio creating thoughtful
          environments across Chicago and the greater midwest.
        </p>

        <Link
          href="/projects"
          prefetch={false}
          className="group mt-auto inline-flex w-fit items-center gap-4 py-2 text-sm transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <span>View Projects</span>
          <span
            aria-hidden="true"
            className="h-px w-8 bg-current transition-[width] duration-300 group-hover:w-11 group-focus-visible:w-11 motion-reduce:transition-none"
          />
        </Link>
      </div>

      <div className="absolute inset-0 bg-[#706a61] md:inset-y-0 md:right-0 md:left-[42%]">
        <Image
          src="/images/northstar-hero-chicago.jpg"
          alt="Chicago high-rise architecture at dusk"
          fill
          preload
          sizes="(min-width: 1440px) 835px, (min-width: 768px) 58vw, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,25,23,0.72),rgba(26,25,23,0.5))] md:bg-black/10"
        />

        <div className="absolute right-12 bottom-12 hidden text-right text-[#f2eee8] md:block lg:right-16">
          <p className="text-[10px] font-medium tracking-[0.2em] text-[#d7cfc5]/70 uppercase">
            Active Projects
          </p>
          <p className="mt-1 font-serif text-5xl leading-none italic">14</p>
        </div>
      </div>
    </section>
  );
}
