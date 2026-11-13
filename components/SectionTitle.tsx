
type SectionTitleProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
        {subtitle}
      </p>

      <h1 className="mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
        {title}
      </h1>

      <p className="max-w-2xl leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}
