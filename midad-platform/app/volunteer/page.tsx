import { SectionHeading } from "@/components/section-heading";

export default function VolunteerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="التطوع"
        title="شارك في بناء مجتمعات أكثر عدلاً ومساندة"
        description="ابدأ رحلتك التطوعية من خلال تقديم طلبك، وتحديد مجالات اهتمامك، ومهاراتك، وتوافرك الزمني."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-5 rounded-[2rem] bg-slate-900 p-8 text-white">
          <h3 className="text-2xl font-black">لماذا التطوع مع مِداد؟</h3>
          <ul className="space-y-3 text-base leading-8 text-slate-300">
            <li>• فرصة للتعلم وفعالية في خدمة المجتمع.</li>
            <li>• حضور في مشاريع تعليمية وإنسانية وثقافية.</li>
            <li>• بناء شبكة من الشباب والمجتمعات المؤثرة.</li>
            <li>• أثر ملموس ومشاريع قابلة للقياس.</li>
          </ul>
        </div>

        <form className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>الاسم الكامل</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="ادخل الاسم الكامل" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>البريد الإلكتروني</span>
              <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="name@example.com" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>المدينة</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="الرياض" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>مجالات الاهتمام</span>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400">
                <option>التعليم</option>
                <option>الإنسانية</option>
                <option>الثقافة</option>
                <option>البيئة</option>
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>المهارات</span>
            <textarea rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="اكتب مهاراتك أو خبراتك في التطوع" />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>التوفر الزمني</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="أيام الأسبوع ووقت التفرغ" />
          </label>

          <button type="submit" className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
            إرسال طلب التطوع
          </button>
        </form>
      </div>
    </div>
  );
}
