import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Links */}
        <nav
          aria-label="Footer navigation"
          className="flex items-center justify-center gap-6 pb-6"
        >
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-(--text-muted) transition-colors hover:text-(--foreground)"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-(--border-subtle)" />

        {/* Copyright */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <span className="text-sm font-semibold tracking-tight text-(--foreground)">
            StoreProof
          </span>
          <span className="text-(--border) text-sm">·</span>
          <span className="text-sm text-(--text-muted)">
            © {new Date().getFullYear()}
          </span>
        </div>

      </div>
    </footer>
  );
}
