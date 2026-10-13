import { SectionLabel } from "@/components/section-label";
import { BookButton } from "@/components/book-button";

// Swap these for your own assets (files live in /public).
const EXPERIENCE_VIDEO = "/videos/exp1.mp4";
const EXPERIENCE_POSTER = "/images/locs.webp";

const STATS = [
  { value: "300+", label: "Transformations" },
  { value: "4.9★", label: "Client Rating" },
  { value: "5+", label: "Years Mastery" },
];

export function Experience() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--surface-2)]">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-0 lg:grid-cols-2">
        {/* Video */}
        <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[640px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={EXPERIENCE_POSTER}
          >
            <source src={EXPERIENCE_VIDEO} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 bg-black/45 mix-blend-multiply"
            aria-hidden
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-8 px-6 py-20 lg:px-20 lg:py-32">
          <SectionLabel>The LocChé Experience</SectionLabel>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            Quiet luxury, expressed through{" "}
            <span className="italic text-brand-gradient">
              intentional care.
            </span>
          </h2>
          <p className="max-w-md font-sans text-lg font-light leading-relaxed text-muted-foreground">
            Your style should express who you are. We listen first, then shape
            every detail with intention: soft hands, clean parts, and healthy
            locs that feel like you.
          </p>

          <dl className="grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 border-l-2 border-gold/40 pl-4"
              >
                <dt className="order-2 font-accent text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 font-serif text-4xl text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-2">
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
}
