import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="rounded-3xl border border-slate-200 bg-white p-12 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.25em] text-emerald-700">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900">الصفحة غير موجودة</h1>
        <p className="mt-4 max-w-md text-slate-600">
          الصفحة التي تبحث عنها غير متاحة الآن، يمكنك العودة إلى الصفحة الرئيسية أو تصفح المبادرات والفعاليات.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </main>
  );
}
