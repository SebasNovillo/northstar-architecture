import Link from "next/link";

const placeholderOverview =
  "The full project narrative, photography, and drawings will be available in a future update. This page is a routing placeholder.";

export function ProjectDetailOverview() {
  return (
    <section
      aria-labelledby="project-overview-heading"
      className="bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-8 pt-16 pb-24 md:grid-cols-12 md:px-12 md:pt-24 lg:px-16">
        <div className="md:col-span-6 lg:col-span-5">
          <h2 id="project-overview-heading" className="sr-only">
            Project overview
          </h2>
          <p className="mb-10 text-[15px] leading-relaxed text-[#6b6660]">
            {placeholderOverview}
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-[#1a1917] transition-opacity duration-200 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917]"
          >
            Back to Projects
            <span
              aria-hidden="true"
              className="block h-px w-6 bg-current transition-all duration-300 group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
