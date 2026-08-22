import Link from "next/link";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const linkStyles =
  "text-[#d8d5cf] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

export function Header() {
  return (
    <header className="bg-[#0a0a09] px-6 py-7 text-white md:px-16 md:py-9">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        <Link
          href="/"
          className={`${linkStyles} w-fit font-serif text-[15px] font-medium tracking-[-0.01em]`}
        >
          Northstar Architecture
        </Link>

        <nav aria-label="Primary navigation">
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
