import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/site-data";

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="المحتوى"
        title="مقالات، تقارير، ونقاشات مجتمعية"
        description="نُشارك محتوى يفتح الحوار حول الثقافة، التعليم، العمل التطوعي، والهوية المجتمعية في زمن التغير."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm">
            <Image src={article.image} alt={article.title} width={800} height={400} className="h-56 w-full object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold tracking-[0.18em] text-emerald-700">{article.category}</span>
              <h2 className="mt-4 text-2xl font-black text-slate-900">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              <div className="mt-5 text-sm font-medium text-slate-500">{article.date}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
