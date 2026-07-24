"use client";

import { useState } from "react";
import { LogoMark, MenuIcon, CloseIcon } from "./icons/BrandIcons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why us", href: "#why-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#040C14] via-[#1F1C8A] to-[#A94DFF] shadow-[0_4px_20px_rgba(4,12,20,0.15)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 lg:px-12">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <img src="/logo.png" alt="" />
          <span className="font-display text-lg bg-gradient-to-r from-[var(--color-light)] to-[var(--color-accent)] bg-clip-text text-transparent sm:text-xl">
            UXaura Studio
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative font-display text-sm tracking-wide text-white/90 transition-colors hover:text-white ${
                active === link.label ? "text-white" : ""
              }`}
            >
              {link.label}
              {active === link.label && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[var(--color-secondary)]" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden shrink-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-2.5 font-display text-sm text-white shadow-lg shadow-[var(--color-primary)]/30 transition-transform hover:scale-[1.03] lg:inline-block"
        >
          Contact us
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`overflow-hidden bg-[var(--color-dark)]/95 backdrop-blur transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setIsOpen(false);
              }}
              className={`rounded-lg px-3 py-3 font-display text-sm text-white/90 transition-colors hover:bg-white/5 hover:text-white ${
                active === link.label ? "text-[var(--color-secondary)]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 text-center font-display text-sm text-white"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
