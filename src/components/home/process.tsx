import { SectionLabel } from "@/components/section-label";

const PILLARS = [
  {
    label: "Care",
    title: "Healthy Growth",
    body: "Care-led techniques protect your scalp and support the long-term strength of your hair.",
  },
  {
    label: "Precision",
    title: "Technical Precision",
    body: "Clean sections and thoughtful tension create lasting styles with a refined finish.",
  },
  {
    label: "Experience",
    title: "A Seamless Visit",
    body: "Easy scheduling by call, text, or email, a calm space, and focused attention from consultation to final look.",
  },
];

export function Process() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 lg:px-20 lg:py-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <SectionLabel className="mb-6">The LocChé Standard</SectionLabel>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            Soft hands. Clean parts.
          </h2>
          <p className="mt-6 max-w-sm font-sans text-lg font-light leading-relaxed text-muted-foreground">
            A calm, female-led studio dedicated to the architecture of your
            crown and the health of your natural hair.
          </p>
        </div>

        <div className="flex flex-col lg:col-span-8">
          {PILLARS.map((p, i) => (
            <div
              key={p.label}
              className="flex flex-col gap-4 border-t border-border py-12 first:border-t-0 first:pt-0 md:flex-row md:gap-12"
            >
              <span className="font-serif text-4xl italic text-gold/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3">
                <span className="font-accent text-[12px] uppercase tracking-[0.28em] text-gold">
                  {p.label}
                </span>
                <h3 className="font-serif text-3xl text-foreground md:text-4xl">
                  {p.title}
                </h3>
                <p className="max-w-xl font-sans text-lg font-light leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
