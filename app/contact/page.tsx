import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Contact | Northstar Architecture",
  description:
    "Contact Northstar Architecture about residential, commercial, and civic architecture projects.",
};

const emailLinkClassName =
  "break-words underline-offset-4 transition-colors duration-200 hover:text-[#6b6660] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1917] motion-reduce:transition-none";

export default function ContactPage() {
  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" />

      <main id="main-content">
        <section
          aria-labelledby="contact-heading"
          className="bg-[#f2eee8] pt-[120px] text-[#1a1917]"
        >
          <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-16">
            <p className="pt-10 pb-10 text-[11px] tracking-[0.2em] text-[#6b6660] uppercase md:pt-16 md:pb-14">
              Contact
            </p>

            <div className="grid gap-y-8 border-b border-[#e4ddd4] pb-16 md:grid-cols-12 md:gap-x-8 md:pb-24">
              <div className="md:col-span-9 lg:col-span-8">
                <h1
                  id="contact-heading"
                  className="font-serif text-4xl leading-[1.04] font-normal italic sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Tell us about
                  <br />
                  your project.
                </h1>
              </div>

              <div className="flex flex-col justify-end md:col-span-3 md:items-end lg:col-span-4">
                <p className="max-w-[220px] text-sm leading-relaxed text-[#6b6660] md:text-right">
                  We read every message and reply within two business days.
                </p>
              </div>
            </div>

            <div className="grid py-16 md:grid-cols-12 md:gap-x-8 md:py-20">
              <div className="mb-12 md:col-span-4 md:mb-0">
                <p className="max-w-[340px] text-[15px] leading-relaxed text-[#5c5550]">
                  Northstar Architecture is a studio based in Chicago&apos;s West
                  Loop, working across residential, commercial, and civic
                  projects throughout the Midwest and beyond.
                </p>
              </div>

              <address className="min-w-0 not-italic md:col-span-8 md:col-start-5">
                <dl className="grid border-b border-[#e4ddd4] sm:grid-cols-2 xl:grid-cols-[1.05fr_1.15fr_1.15fr_1fr]">
                  <div className="border-t border-[#e4ddd4] py-6 pr-6">
                    <dt className="mb-3 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
                      Studio
                    </dt>
                    <dd className="text-sm leading-snug">
                      221 N. Canal Street
                      <br />
                      Chicago, Illinois 60606
                    </dd>
                  </div>

                  <div className="border-t border-[#e4ddd4] py-6 pr-6">
                    <dt className="mb-3 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
                      New Business
                    </dt>
                    <dd className="text-sm leading-snug">
                      <a
                        href="mailto:hello@northstarch.com"
                        className={emailLinkClassName}
                      >
                        hello@northstarch.com
                      </a>
                    </dd>
                  </div>

                  <div className="border-t border-[#e4ddd4] py-6 pr-6">
                    <dt className="mb-3 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
                      Press &amp; Media
                    </dt>
                    <dd className="text-sm leading-snug">
                      <a
                        href="mailto:press@northstarch.com"
                        className={emailLinkClassName}
                      >
                        press@northstarch.com
                      </a>
                    </dd>
                  </div>

                  <div className="border-t border-[#e4ddd4] py-6 pr-6">
                    <dt className="mb-3 text-[10px] tracking-[0.15em] text-[#6b6660] uppercase">
                      Hours
                    </dt>
                    <dd className="text-sm leading-snug">
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM CT
                    </dd>
                  </div>
                </dl>
              </address>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
