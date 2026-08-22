import Link from "next/link";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const linkStyles =
  "text-[#eee9df] [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 px-6 py-7 md:px-10 lg:grid lg:grid-cols-[42%_58%] lg:gap-0 lg:p-0">
        <div className="lg:px-12 lg:py-9 xl:px-16">
          <Link
            href="/"
            className={`${linkStyles} w-fit font-serif text-[15px] font-medium tracking-[-0.01em]`}
          >
            Northstar Architecture
          </Link>
        </div>

        <nav
          aria-label="Primary navigation"
          className="lg:flex lg:items-start lg:justify-end lg:px-12 lg:py-9 xl:px-16"
        >
          <ul className="grid grid-cols-2 gap-x-10 gap-y-4 md:flex md:items-center md:gap-10 lg:gap-12">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${linkStyles} text-sm`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
