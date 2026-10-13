import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-label";
import { BookButton } from "@/components/book-button";

export const metadata: Metadata = {
  title: "About | The LocChé Standard",
  description:
    "Discover LocChé, a female-led Minnesota studio rooted in culture, healthy loc care, and refined craft.",
  openGraph: {
    title: "About LocChé",
    description: "A sanctuary dedicated to the architecture of your crown.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Wide studio banner (about 3:1). Set this to the file path once the image is
 * ready, e.g. "/images/about-banner.webp". While it is null a placeholder
 * shows instead.
 */
const ABOUT_BANNER = "/images/about.png";

// Video behind the quote (file lives in /public).
const ABOUT_VIDEO = "/videos/braids.mp4";

const VALUES = [
  {
    label: "Care",
    body: "Healthy growth comes first. Every technique is chosen with your scalp, texture, and long-term loc journey in mind.",
  },
  {
    label: "Precision",
    body: "Clean foundations and measured tension create polished results that feel comfortable and wear beautifully.",
  },
  {
    label: "Expression",
    body: "Your style should express who you are. We listen first, then shape every detail with intention.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Philosophy"
        title="Rooted in culture."
        accent="Refined in craft."
        description="A female-led Minnesota studio dedicated to the architecture of your crown."
      />

      {/* Banner (placeholder until the photo arrives) + story */}
      <section className="mx-auto max-w-[1600px] px-6 pt-16 lg:px-20 lg:pt-24">
        <div className="relative aspect-[3/1] w-full overflow-hidden border border-border bg-[var(--surface-2)]">
          {ABOUT_BANNER ? (
            <Image
              src={ABOUT_BANNER}
              alt="Inside the LocChé studio"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : (
            <>
              <div
                className="absolute inset-0 brand-gradient opacity-10"
                aria-hidden
              />
              <span className="absolute inset-0 flex items-center justify-center font-accent text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
                Banner image coming soon
              </span>
            </>
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <SectionLabel className="mb-6">The LocChé Experience</SectionLabel>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
              Quiet luxury, expressed through{" "}
              <span className="italic text-brand-gradient">
                intentional care.
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="font-sans text-lg font-light leading-relaxed text-muted-foreground">
              LocChé is a female-led Minnesota studio dedicated to the
              architecture of your crown: a calm space where technical mastery,
              healthy hair, and personal expression meet.
            </p>
            <p className="font-sans text-lg font-light leading-relaxed text-muted-foreground">
              Healthy growth comes first. Every technique is chosen with your
              scalp, texture, and long-term loc journey in mind, whether you are
              starting locs, maintaining them, or choosing a protective style.
            </p>
            <p className="font-sans text-lg font-light leading-relaxed text-muted-foreground">
              Clean foundations and measured tension create polished results
              that feel comfortable and wear beautifully. Your style should
              express who you are, so we listen first, then shape every detail
              with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-[var(--surface-2)]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-20 lg:py-32">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="flex flex-col gap-4 bg-background p-10 lg:p-12"
              >
                <span className="font-accent text-[13px] uppercase tracking-[0.24em] text-gold">
                  {v.label}
                </span>
                <p className="font-serif text-2xl font-light leading-snug text-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Video + pull quote */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src={ABOUT_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-40">
          <p className="font-serif text-3xl font-light italic leading-snug text-white md:text-5xl md:leading-tight">
            &ldquo;Soft hands. Clean parts.{" "}
            <span className="italic text-brand-gradient">
              Styles that feel like you.
            </span>
            &rdquo;
          </p>
          <span className="mt-8 block font-accent text-[13px] uppercase tracking-[0.24em] text-white/70">
            — The LocChé Standard
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-[var(--surface-2)]">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:py-32">
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Begin your LocChé{" "}
            <span className="italic text-brand-gradient">journey.</span>
          </h2>
          <p className="mt-5 max-w-md font-sans text-lg font-light text-muted-foreground">
            Your next favorite style starts in our chair.
          </p>
          <div className="mt-8">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
