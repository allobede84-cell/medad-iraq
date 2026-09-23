import { AdminInitiativePanel } from "@/components/admin-initiative-panel";
import { adminActivity, dashboardMetrics } from "@/lib/site-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-emerald-700">لوحة الإدارة</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">نظرة عامة على المنصة</h1>
        </div>
        <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white">تصدير التقرير</button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-500">{metric.label}</div>
            <div className="mt-4 text-3xl font-black text-slate-900">{metric.value}</div>
            <div className="mt-3 text-sm font-bold text-emerald-700">{metric.delta}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">اتجاهات النشاط</h2>
          <div className="mt-6 grid grid-cols-12 items-end gap-3">
            {[35, 52, 48, 68, 72, 88, 95].map((height, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-500 to-sky-400"
                  style={{ height: `${height}px` }}
                />
                <span className="text-xs text-slate-500">{["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">النشاط الأخير</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            {adminActivity.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-50 p-3">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <AdminInitiativePanel />
    </div>
  );
}
