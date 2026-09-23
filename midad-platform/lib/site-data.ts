export type NavItem = {
  label: string;
  href: string;
};

export type Initiative = {
  id: number;
  title: string;
  category: string;
  status: string;
  date: string;
  location: string;
  volunteers: number;
  impact: string;
  description: string;
  image: string;
  gallery: string[];
};

export type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  seats: number;
  registered: number;
  status: string;
  description: string;
  image: string;
};

export type Article = {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  delta: string;
  tone: "sky" | "emerald" | "amber" | "rose";
};

export const navItems: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "المبادرات", href: "/initiatives" },
  { label: "التطوع", href: "/volunteer" },
  { label: "الفعاليات", href: "/events" },
  { label: "المحتوى", href: "/articles" },
  { label: "اتصل بنا", href: "/contact" },
];

export const homeStats = [
  { value: "24K+", label: "متطوع", delta: "+18%" },
  { value: "182", label: "مبادرة", delta: "+12%" },
  { value: "96%", label: "رضا المجتمع", delta: "+7%" },
  { value: "620K", label: "مستفيد", delta: "+22%" },
];

export const initiatives: Initiative[] = [
  {
    id: 1,
    title: "مكتبة الأحياء المجتمعية",
    category: "تعليم",
    status: "قيد التنفيذ",
    date: "2026-01-15",
    location: "الرياض",
    volunteers: 86,
    impact: "2,400 طالب مستفيد",
    description:
      "مشروع يربط الشباب بالمكتبات المحلية ويشجع القراءة والمهارات الرقمية في أحياء المدن المتنوعة.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 2,
    title: "حملة الأمانة الإنسانية",
    category: "إنسانية",
    status: "نشطة",
    date: "2026-02-12",
    location: "جدة",
    volunteers: 132,
    impact: "4,600 أسرة مستفيدة",
    description:
      "توفير الدعم الإنساني للأسرة في حالات الطوارئ وتنسيق التوزيع ورفع الوعي المجتمعي.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 3,
    title: "مراكز تواصل ثقافي",
    category: "ثقافة",
    status: "مجهز",
    date: "2026-03-04",
    location: "الدمام",
    volunteers: 68,
    impact: "12 فعالية ثقافية",
    description:
      "تنظيم جلسات منتظمة للتعريف بالتاريخ والثقافة والهوية الوطنية عبر فعاليات شبابية متنوعة.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 4,
    title: "مسارات شبابية خضراء",
    category: "بيئة",
    status: "مستهدف",
    date: "2026-04-20",
    location: "المجمعة",
    volunteers: 54,
    impact: "1700 شجرة مزروعة",
    description:
      "مشروع مجتمعي يدمج القيادة البيئية والتوعية وتصميم فعاليات الحفظ والاعتماد المجتمعي.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const events: EventItem[] = [
  {
    id: 1,
    title: "ملتقى القيم والهوية",
    date: "2026-10-05",
    location: "مركز الملك عبدالله الثقافي",
    seats: 250,
    registered: 182,
    status: "متاح",
    description: "ندوة تفاعلية حول القيم المجتمعية والهوية الثقافية وطرق بناء شراكات مجتمعية قوية.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "يوم التطوع الميداني",
    date: "2026-10-18",
    location: "المدينة المنورة",
    seats: 180,
    registered: 142,
    status: "قريب",
    description: "فعالية ميدانية تركز على العمل التطوعي المجتمعي في مناطق الخدمة والتنمية المحلية.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "ورشة صناعة المحتوى الرقمي",
    date: "2026-11-02",
    location: "الرياض",
    seats: 120,
    registered: 96,
    status: "تسجيل مبكر",
    description: "ورشة عملية لتعليم الشباب مهارات سرد القصص الرقمية ونشر رسائل مجتمعية فعالة.",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
  },
];

export const articles: Article[] = [
  {
    id: 1,
    title: "كيف نبني مجتمعات أكثر انتماءً؟",
    category: "ثقافة",
    date: "2026-09-12",
    excerpt: "رؤية عملية حول بناء شراكات مجتمعية قائمة على الثقة والاحتواء والإنجاز المشترك.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "التعليم المجتمعي في زمن التحديات",
    category: "تعليم",
    date: "2026-09-04",
    excerpt: "دراسة قصيرة عن دور المراكز التعليمية في دعم الجيل الجديد ومهارات المستقبل.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "الاستجابة الإنسانية تبدأ من القرب",
    category: "إنسانية",
    date: "2026-08-29",
    excerpt: "نظام الدعم المجتمعي الذي يركز على استجابة أسرع ومشاركة أوسع من المتطوعين.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "إجمالي المستخدمين", value: "31,420", delta: "+8.2%", tone: "sky" },
  { label: "المتطوعون النشطون", value: "8,760", delta: "+12.1%", tone: "emerald" },
  { label: "طلبات الانتظار", value: "214", delta: "-4.4%", tone: "amber" },
  { label: "الاستجابة السريعة", value: "98.7%", delta: "+0.6%", tone: "rose" },
];

export const adminActivity = [
  "تمت الموافقة على 14 طلب تطوع جديدًا",
  "تم تحديث حملة التعليم المجتمعي",
  "تم تسجيل 72 مشاركًا في فعالية الملتقى",
  "تم رفع فيديوهات جديدة للمبادرة الثقافية",
];
