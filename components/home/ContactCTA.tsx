export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="border-b border-[#e4ddd4] bg-[#f2eee8] text-[#1a1917]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-10 lg:col-span-8">
            <div className="mb-10 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.2em] uppercase md:mb-12">
              <p className="text-[#8a8278]">Get in Touch</p>
              <span aria-hidden="true" className="text-[#d0c8be]">
                —
              </span>
              <p className="text-[#8a8278]">Chicago, Illinois</p>
              <span aria-hidden="true" className="text-[#d0c8be]">
                —
              </span>
              <p className="text-[#8a8278]">
                New projects &amp; collaborations
              </p>
            </div>

            <h2
              id="contact-cta-heading"
              className="mb-12 font-serif text-4xl leading-[1.05] font-normal italic md:mb-16 md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Have a project
              <br />
              in mind?
            </h2>

            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <a
                href="mailto:studio@northstararchitecture.com"
                className="inline-flex items-center gap-4 bg-[#1a1917] px-8 py-4 text-sm leading-[1.5] tracking-wide text-[#f2eee8] transition-colors duration-300 hover:bg-[#4a4540] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917]"
              >
                Start a Conversation
                <span aria-hidden="true" className="h-px w-5 bg-current" />
              </a>

              <a
                href="mailto:studio@northstararchitecture.com"
                className="text-sm leading-[1.5] tracking-wide text-[#8a8278] transition-colors duration-200 hover:text-[#1a1917] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                studio@northstararchitecture.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
