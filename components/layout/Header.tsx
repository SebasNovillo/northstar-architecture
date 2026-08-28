"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

const focusStyles =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

type HeaderProps = {
  activeItem?: "projects";
  variant?: "home" | "solid";
};

export function Header({
  activeItem,
  variant = "home",
}: HeaderProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const isHome = variant === "home";
  const solidHeader = !isHome || scrolled || menuOpen;

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[60] -translate-y-20 bg-[#f2eee8] px-4 py-3 text-sm text-[#1a1917] transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-[#1a1917]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          solidHeader
            ? "border-b border-[#e4ddd4] bg-[rgba(242,238,232,0.96)] text-[#1a1917] backdrop-blur-[14px]"
            : "text-[#f2eee8]"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8 md:h-[72px] md:px-12 lg:px-16">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`${focusStyles} font-serif tracking-[-0.01em] ${
              isHome ? "text-[15px]" : "text-base md:text-[17px]"
            } ${
              solidHeader
                ? "text-[#1a1917]"
                : "text-[#f2eee8] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            }`}
          >
            Northstar Architecture
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navigation.map((item) => {
                const isActive =
                  activeItem === "projects" && item.href === "/projects";

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch={item.href === "/projects" ? false : undefined}
                      aria-current={isActive ? "page" : undefined}
                      className={`${focusStyles} relative text-sm transition-opacity hover:opacity-55 ${
                        solidHeader
                          ? "text-[#1a1917]"
                          : "text-[#f2eee8] [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 -bottom-1 h-px bg-current"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className={`${focusStyles} -mr-3 flex size-11 flex-col items-center justify-center gap-[5px] md:hidden`}
          >
            <span aria-hidden="true" className="h-px w-5 bg-current" />
            <span aria-hidden="true" className="h-px w-5 bg-current" />
            <span aria-hidden="true" className="h-px w-5 bg-current" />
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-[#e4ddd4] bg-[rgba(242,238,232,0.97)] px-8 pb-5 text-[#1a1917] backdrop-blur-[14px] md:hidden"
          >
            <ul>
              {navigation.map((item) => {
                const isActive =
                  activeItem === "projects" && item.href === "/projects";

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch={item.href === "/projects" ? false : undefined}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`${focusStyles} block border-b border-[#e4ddd4] py-4 text-[15px] last:border-b-0 ${
                        isActive
                          ? "font-medium underline underline-offset-4"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
