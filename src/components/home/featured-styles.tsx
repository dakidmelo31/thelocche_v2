import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { BookTrigger } from "@/components/booking-dialog";

const STYLES = [
  {
    name: "Signature Locs",
    caption: "Healthy, well-maintained locs shaped with a refined hand, clean parts, and care for your scalp.",
    image: "/images/microlocs-retie-bundle1.webp",
  },
  {
    name: "Loc Installation",
    caption: "A clean, structured foundation for your loc journey.",
    image: "/images/installation2.webp",
  },
  {
    name: "Locs Retwist",
    caption: "Smooth, defined twists that keep your texture controlled and your style looking fresh.",
    image: "/images/braid3.webp",
  },
];

export function FeaturedStyles() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 lg:px-20 lg:py-40">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-5">
          <SectionLabel>Signature Care</SectionLabel>
          <h2 className="max-w-xl font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            The <span className="italic text-brand-gradient">look book.</span>
          </h2>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-deep"
        >
          View All Styles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {STYLES.map((style) => (
          <article key={style.name} className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              <Image
                src={style.image}
                alt={style.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-foreground transition-colors group-hover:text-gold">
              {style.name}
            </h3>
            <p className="mt-2 font-sans text-[15px] font-light text-muted-foreground">
              {style.caption}
            </p>

            {/* Book Now button: gradient fill sweeps in on hover and the
                booking dialog opens with this style pre-filled. */}
            <BookTrigger
              service={style.name}
              className="group/cta relative mt-4 inline-flex h-[52px] items-center overflow-hidden border border-border px-5 transition-colors duration-700 hover:border-gold"
            >
              <span
                className="absolute inset-0 origin-left scale-x-0 brand-gradient transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-x-100"
                aria-hidden
              />
              <span className="relative z-10 flex w-full items-center justify-between font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors duration-700 group-hover/cta:text-white">
                Book Now
                <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover/cta:translate-x-1" />
              </span>
            </BookTrigger>
          </article>
        ))}
      </div>
    </section>
  );
}
