export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-600 text-2xl font-black text-white">
            م
          </div>
          <h1 className="mt-5 text-3xl font-black text-slate-900">إنشاء حساب جديد</h1>
        </div>

        <form className="grid gap-5 sm:grid-cols-2">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>الاسم الأول</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="الاسم الأول" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>اسم العائلة</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="اسم العائلة" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
            <span>البريد الإلكتروني</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="name@example.com" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
            <span>كلمة المرور</span>
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="********" />
          </label>
          <button type="submit" className="sm:col-span-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
            إنشاء الحساب
          </button>
        </form>
      </div>
    </div>
  );
}
