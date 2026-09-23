import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { readInitiatives } from "@/lib/initiative-store";

export const dynamic = "force-dynamic";

export default async function InitiativesPage() {
  const initiatives = await readInitiatives();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="المبادرات"
        title="كل مبادرة تمثل فرصة لتغيير ملموس"
        description="نصمم المشاريع وفق احتياج المجتمع، ونسعى إلى تحقيق أثر مستدام عبر شراكات مجتمعية فعالة."
      />

      <div className="grid gap-8">
        {initiatives.map((initiative) => (
          <article key={initiative.id} className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            <Image src={initiative.image} alt={initiative.title} width={1200} height={800} className="h-full min-h-[260px] w-full object-cover" />
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{initiative.category}</span>
                <span className="text-sm font-medium text-slate-500">{initiative.status}</span>
              </div>
              <h2 className="mt-5 text-3xl font-black text-slate-900">{initiative.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{initiative.description}</p>

              <div className="mt-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-3"><strong className="block text-slate-900">التاريخ</strong> {initiative.date}</div>
                <div className="rounded-2xl bg-slate-50 p-3"><strong className="block text-slate-900">الموقع</strong> {initiative.location}</div>
                <div className="rounded-2xl bg-slate-50 p-3"><strong className="block text-slate-900">المتطوعون</strong> {initiative.volunteers}</div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
                الأثر المتوقع: {initiative.impact}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
