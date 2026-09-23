import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { articles, events, homeStats, initiatives } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold tracking-[0.2em] text-emerald-700">
            COMMUNITY IMPACT
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              نُحدث أثرًا إيجابيًّا <span className="text-emerald-700">معًا</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              مِداد هي منصة شبابية عربية تُمكّن المتطوعين، المؤسسات، والمجتمعات من بناء مبادرات إنسانية وتعليمية وثقافية
              ذات أثر مستدام.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/volunteer"
              className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              ابدأ التطوع
            </Link>
            <Link
              href="/initiatives"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
            >
              استكشف المبادرات
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 pt-4 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> فاعليات أسبوعية</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky-500" /> فرق تطوعية متنوعة</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> أثر فعلي في المجتمع</div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="مجموعة شبابية تساعد في مبادرة مجتمعية"
              width={1200}
              height={520}
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 w-60 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl">
            <p className="text-xs font-bold tracking-[0.18em] text-slate-500">أكبر مبادرة هذا الشهر</p>
            <p className="mt-2 text-2xl font-black text-slate-900">4,600</p>
            <p className="text-sm text-slate-600">أسرة مستفيدة عبر حملات المساندة</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-16 md:grid-cols-4">
        {homeStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-black text-slate-900">{stat.value}</div>
            <div className="mt-3 text-sm font-medium text-slate-600">{stat.label}</div>
            <div className="mt-2 text-sm font-bold text-emerald-700">{stat.delta}</div>
          </div>
        ))}
      </section>

      <section className="py-6">
        <SectionHeading
          eyebrow="مبادراتنا"
          title="مشاريع ذات أثر ملموس"
          description="نُشرك الشباب في مبادرات تعليمية، ثقافية، وإنسانية تهدف إلى بناء مجتمعات أكثر تماسكًا وقوة."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {initiatives.map((initiative) => (
            <article key={initiative.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Image src={initiative.image} alt={initiative.title} width={800} height={400} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{initiative.category}</span>
                  <span className="text-xs font-medium text-slate-500">{initiative.status}</span>
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-900">{initiative.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{initiative.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-600">
                  <span>{initiative.location}</span>
                  <span>{initiative.volunteers} متطوع</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-emerald-300">التطوع في مِداد</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">أنت جزء من التأثير المجتمعي</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                انضم إلى شبكة شباب مِداد، شارك في مشاريع تعليمية وإنسانية، وطور مهاراتك مع أثر ملموس في المجتمع.
              </p>
            </div>
            <div className="flex flex-wrap justify-end gap-3">
              <Link href="/volunteer" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900">تقديم طلب تطوع</Link>
              <Link href="/register" className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-white">إنشاء حساب</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <SectionHeading
          eyebrow="أحدث المقالات"
          title="تعرف على آخر الخبرات والمحتوى المجتمعي"
          description="نقرأ المحتوى الذي يفتح آفاقًا جديدة، ينمي الوعي، ويقوي فكر الشباب في خدمة المجتمع."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <Image src={article.image} alt={article.title} width={800} height={400} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs font-bold tracking-[0.18em] text-emerald-700">{article.category}</div>
                <h3 className="mt-3 text-xl font-black text-slate-900">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                <div className="mt-5 text-sm font-medium text-slate-500">{article.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <SectionHeading
          eyebrow="الفعاليات القادمة"
          title="شارك في فرص التعلم والتأثير"
          description="ندعو المتطوعين ورواد المجتمع إلى لقاءات، ورش، ومبادرات موجهة نحو بناء أثر مستدام."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <Image src={event.image} alt={event.title} width={800} height={400} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>{event.date}</span>
                  <span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700">{event.status}</span>
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-900">{event.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                  <span>{event.location}</span>
                  <span>{event.registered}/{event.seats} مسجل</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
