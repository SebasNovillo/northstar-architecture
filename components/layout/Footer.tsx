import Link from "next/link";

const navigationLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const connectionLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "mailto:studio@northstararchitecture.com", label: "Email" },
] as const;

const footerLinkClassName =
  "relative -my-1 inline-flex py-1 text-sm leading-[1.5] tracking-wide text-[#9a928a] transition-colors duration-200 hover:text-[#f2eee8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2eee8]";

export function Footer() {
  return (
    <footer className="border-t border-[#262220] bg-[#1a1917] text-[#f2eee8]">
      <div className="mx-auto max-w-[1440px] px-8 py-14 md:px-12 md:py-20 lg:px-16">
        <div className="mb-12 grid grid-cols-2 gap-y-10 md:mb-16 md:grid-cols-12 md:gap-x-8">
          <div className="col-span-2 md:col-span-4">
            <Link
              href="/"
              className="mb-1.5 block font-serif text-base transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2eee8]"
            >
              Northstar Architecture
            </Link>
            <p className="text-[13px] text-[#8a8278]">Chicago, Illinois</p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p
              id="footer-navigation-heading"
              className="mb-5 text-[11px] tracking-[0.15em] text-[#8a8278] uppercase"
            >
              Navigate
            </p>
            <nav
              aria-labelledby="footer-navigation-heading"
              className="flex flex-col gap-3"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={footerLinkClassName}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2 md:col-start-9">
            <p
              id="footer-connect-heading"
              className="mb-5 text-[11px] tracking-[0.15em] text-[#8a8278] uppercase"
            >
              Connect
            </p>
            <nav
              aria-labelledby="footer-connect-heading"
              className="flex flex-col gap-3"
            >
              {connectionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={footerLinkClassName}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#252220] pt-6 md:flex-row md:items-center">
          <p className="text-[13px] text-[#8a8278]">
            © 2026 Northstar Architecture. All rights reserved.
          </p>
          <p className="text-xs leading-[1.5] text-[#8a8278]">
            Chicago, Illinois — Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
