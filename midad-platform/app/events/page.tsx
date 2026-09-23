import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { events } from "@/lib/site-data";

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="الفعاليات"
        title="فعالية تجمع المتعلمين، المتطوعين، والمجتمعات"
        description="كل فعالية من فعاليات مِداد تم تصميمها لتغذي الحوار، تنمي المهارات، وتوسع أثر التعاون المجتمعي."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm">
            <Image src={event.image} alt={event.title} width={800} height={400} className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-slate-500">{event.date}</span>
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">{event.status}</span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-slate-900">{event.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>الموقع: {event.location}</p>
                <p>المقاعد المتاحة: {event.seats - event.registered}</p>
                <p>التسجيلات الحالية: {event.registered}</p>
              </div>
              <button className="mt-6 inline-flex rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700">
                سجل الآن
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
