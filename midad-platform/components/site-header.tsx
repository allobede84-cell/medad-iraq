import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="مِداد الصفحة الرئيسية">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-md shadow-emerald-100">
            <Image src="/logo.svg" alt="شعار مِداد" width={56} height={56} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900">مِداد</div>
            <div className="text-[10px] font-medium tracking-[0.22em] text-slate-500">YOUTH IMPACT</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 sm:inline-flex"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-emerald-700"
          >
            انضم إلينا
          </Link>
        </div>
      </div>
    </header>
  );
}
