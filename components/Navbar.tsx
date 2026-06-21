"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { sections } from "@/config/site";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { href: "/", key: "home" },
  ...sections.map((s) => ({ href: `/${s}`, key: s })),
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/80 backdrop-blur-md">
      <nav className="container-editorial flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight md:text-2xl"
          onClick={() => setOpen(false)}
        >
          Triada
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-charcoal"
                  }`}
                >
                  {t(item.key)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button
            type="button"
            className="lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-6 bg-charcoal" />
            <span className="mt-1.5 block h-px w-6 bg-charcoal" />
            <span className="mt-1.5 block h-px w-6 bg-charcoal" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="container-editorial flex flex-col gap-1 pb-6 lg:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-base tracking-wide ${
                  pathname === item.href ? "text-accent" : "text-charcoal"
                }`}
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
