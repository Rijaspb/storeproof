"use client";

import { useState } from "react";
import Link from "next/link";

const AUTH_LINKS = [
  { label: "Sign in", href: "/signin", variant: "ghost" as const },
  { label: "Sign up", href: "/signup", variant: "primary" as const },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-(--border-subtle) bg-white/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-(--foreground)"
        >
          StoreProof
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-2 sm:flex">
          {AUTH_LINKS.map(({ label, href, variant }) => (
            <Link key={href} href={href} className={navLinkClass(variant)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md text-(--text-secondary) transition-colors hover:text-(--foreground) sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-(--border-subtle) bg-white px-6 py-4 sm:hidden"
        >
          <div className="flex flex-col gap-2">
            {AUTH_LINKS.map(({ label, href, variant }) => (
              <Link
                key={href}
                href={href}
                className={navLinkClass(variant, true)}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function navLinkClass(variant: "ghost" | "primary", fullWidth = false) {
  const base = `rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors${fullWidth ? " w-full text-center" : ""}`;
  if (variant === "primary") {
    return `${base} bg-(--accent) text-(--accent-foreground) hover:bg-(--accent-hover)`;
  }
  return `${base} text-(--text-secondary) hover:text-(--foreground)`;
}

function IconMenu() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
