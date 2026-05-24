import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pb-24 pt-24 text-center">

      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-(--border) px-3.5 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-(--foreground)" />
        <span className="text-xs text-(--text-secondary)">AI-powered retail security</span>
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-(--foreground) sm:text-6xl lg:text-7xl">
        Investigate theft. Move fast.
      </h1>

      {/* Subheadline */}
      <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-(--text-secondary)">
        Log an incident and StoreProof automatically pulls relevant footage,
        filters for presence, and adds AI-generated notes — ready for review in minutes.
      </p>

      {/* CTAs */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/signup"
          className="rounded-md bg-(--accent) px-5 py-2.5 text-sm font-medium text-(--accent-foreground) transition-colors hover:bg-(--accent-hover)"
        >
          Request access
        </Link>
        <Link
          href="#how-it-works"
          className="rounded-md border border-(--border) px-5 py-2.5 text-sm font-medium text-(--foreground) transition-colors hover:bg-(--surface)"
        >
          See how it works
        </Link>
      </div>

    </section>
  );
}
