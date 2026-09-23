export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-600 text-2xl font-black text-white">
            م
          </div>
          <h1 className="mt-5 text-3xl font-black text-slate-900">تسجيل الدخول</h1>
        </div>

        <form className="space-y-5">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>البريد الإلكتروني</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="name@example.com" />
          </label>

          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>كلمة المرور</span>
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="********" />
          </label>

          <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}
