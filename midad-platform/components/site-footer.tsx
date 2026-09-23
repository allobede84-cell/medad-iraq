import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-600 text-lg font-black text-white">
              م
            </div>
            <div>
              <div className="text-xl font-black text-white">مِداد</div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            منصة شاملة تجمع الشباب والجهات المجتمعية لتخطيط المبادرات، تنظيم الفعاليات، ورفع أثر 
            العمل التطوعي في المجتمع.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">روابط سريعة</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/initiatives">المبادرات</Link></li>
            <li><Link href="/events">الفعاليات</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">المحتوى</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/articles">مقالات</Link></li>
            <li><Link href="/volunteer">التطوع</Link></li>
            <li><Link href="/dashboard">لوحة التحكم</Link></li>
            <li><Link href="/register">إنشاء حساب</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>07837117092</li>
            <li>جمهورية العراق</li>
            <li>تم برمجة الموقع بواسطة فريق BCS</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-400">
        © 2026 مِداد. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
