import Link from "next/link";

export default function DashboardNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border-subtle) bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/dashboard"
          className="text-sm font-semibold tracking-tight text-(--foreground)"
        >
          StoreProof
        </Link>
        {/* User avatar — auth wired up later */}
        <div className="h-7 w-7 rounded-full bg-(--border)" aria-label="User menu" />
      </div>
    </header>
  );
}
