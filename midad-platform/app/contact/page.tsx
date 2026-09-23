import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="تواصل معنا"
        title="سعداء بطرح أسئلتكم ومقترحاتكم"
        description="يمكنكم التواصل معنا مباشرة حول التعاون، التطوع، المبادرات، أو الاستفسارات العامة."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5 rounded-[2rem] bg-slate-900 p-8 text-white">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-emerald-300">معلومات التواصل</p>
            <h3 className="mt-3 text-2xl font-black">ابقوا على تواصل</h3>
          </div>
          <ul className="space-y-4 text-base text-slate-300">
            <li>الهاتف: 07837117092</li>
            <li>العنوان: جمهورية العراق</li>
          </ul>
        </div>

        <form className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>الاسم</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="الاسم الكامل" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>البريد الإلكتروني</span>
              <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="name@example.com" />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>الموضوع</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="موضوع الرسالة" />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>الرسالة</span>
            <textarea rows={6} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400" placeholder="اكتب رسالتك هنا" />
          </label>

          <button type="submit" className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
            إرسال الرسالة
          </button>
        </form>
      </div>
    </div>
  );
}
