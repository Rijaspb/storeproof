import Image from "next/image";
import Link from "next/link";

export default function DashboardNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border-subtle) bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/Storeproof_MainLogo.png"
            alt=""
            width={120}
            height={20}
            className="h-5 w-auto"
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-(--foreground)">StoreProof</span>
        </Link>
        {/* User avatar — auth wired up later */}
        <div className="h-7 w-7 rounded-full bg-(--border)" aria-label="User menu" />
      </div>
    </header>
  );
}
