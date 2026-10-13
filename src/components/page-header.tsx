import { SectionLabel } from "@/components/section-label";

export function PageHeader({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <header className="editorial-fade mx-auto max-w-[1600px] px-6 pb-4 pt-36 lg:px-20 lg:pt-44">
      <SectionLabel className="mb-8 justify-center md:justify-start">
        {label}
      </SectionLabel>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h1 className="max-w-2xl font-serif text-5xl font-light leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          {title}{" "}
          {accent && (
            <span className="italic text-brand-gradient">{accent}</span>
          )}
        </h1>
        {description && (
          <p className="max-w-sm font-sans text-lg font-light leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
