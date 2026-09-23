import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="من نحن"
        title="منصة شبابية تهدف إلى بناء مجتمعات أكثر تماسكًا"
        description="مِداد تجمع بين العمل المجتمعي، التعليم، والهوية الثقافية لتقديم تجربة فاعلة للشباب والطرف المعني في التنمية المجتمعية."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-lg leading-8 text-slate-700">
          <p>
            نحن مؤسسة شبابية تنطلق من مبدأ أن المشاركة المجتمعية ليست مجرد فعل، بل منظومة متكاملة من القيم والمهارات
            والفرص التي تساهم في بناء مجتمعات قوية وشاملة.
          </p>
          <p>
            في مِداد نركز على خدمة الشباب عبر تمكينهم من تنظيم المشاريع، دعم المبادرات المحلية، وتنظيم الفعاليات والورش
            التعليمية التي تعزز الوعي والمهارة والتأثير الاجتماعي.
          </p>
          <p>
            نؤمن أن التغيير الحقيقي يبدأ من القيم والمهارات والثقة، لذلك نعمل على بناء منظومة تربط المتطوعين، المنظمات،
            والجهات المجتمعية ضمن رؤية واضحة ومشاريع قابلة للتنفيذ.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="فريق مِداد في جلسة تشاورية"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "رؤيتنا",
            text: "بناء مجتمع أكثر وعيًا، تفاعلًا، واستدامة من خلال شراكات فاعلة بين الشباب والجهات المجتمعية.",
          },
          {
            title: "رسالتنا",
            text: "تمكين الأفراد من المشاركة الفعالة في المبادرات الاجتماعية والثقافية والتعليمية ضمن منظومة إنسانية محترفة.",
          },
          {
            title: "قيمنا",
            text: "المسؤولية، التعاون، الشفافية، والاحترام، مع التزام دائم بتقديم أثر إيجابي ومؤثر في المجتمع.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
