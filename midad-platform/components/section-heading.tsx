type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "right" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-right";

  return (
    <div className={`mb-8 ${alignment}`}>
      <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
