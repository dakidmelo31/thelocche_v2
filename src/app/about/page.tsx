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
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-2xl border border-border bg-[var(--surface-2)]">
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
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-20 lg:py-32">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="flex flex-col gap-4 bg-surface-2 p-10 lg:p-12"
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
      {/* Video card: gold card like the CTA banner, text on the left and the
          video on the right fading out into the gold from the card's centre.
          The layout CSS lives in the <style> below so it never depends on
          Tailwind picking up new classes. */}
      <section className="bg-background px-6 py-20 lg:px-20 lg:py-28">
        <div className="about-card">
          <div className="about-card-copy">
            <p className="font-serif text-4xl font-light leading-snug text-foreground md:text-5xl md:leading-tight">
              &ldquo;Soft hands. Clean parts.{" "}
              <span className="italic">Styles that feel like you.</span>&rdquo;
            </p>
            <span className="font-accent text-[13px] uppercase tracking-[0.24em] text-foreground/70">
              — The LocChé Standard
            </span>
          </div>

          <div className="about-card-media">
            <video autoPlay muted loop playsInline aria-hidden>
              <source src={ABOUT_VIDEO} type="video/mp4" />
            </video>
          </div>
        </div>

        <style>{`
          .about-card {
            position: relative;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            max-width: 1600px;
            margin: 0 auto;
            border-radius: 2rem;
            background: linear-gradient(135deg, #f6e7b4, #efdba0 50%, #d1a93a);
          }
          .about-card-copy {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 3.5rem 2rem 1.5rem;
            text-align: center;
          }
          .about-card-media {
            position: relative;
            width: 100%;
            height: 20rem;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 55%);
            mask-image: linear-gradient(to bottom, transparent 0%, black 55%);
          }
          .about-card-media video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          @media (min-width: 1024px) {
            .about-card {
              flex-direction: row;
              align-items: center;
              min-height: 560px;
            }
            .about-card-copy {
              width: 50%;
              align-items: flex-start;
              text-align: left;
              padding: 4rem 5rem;
            }
            .about-card-media {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              width: 50%;
              height: auto;
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 60%);
              mask-image: linear-gradient(to right, transparent 0%, black 60%);
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary">
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
