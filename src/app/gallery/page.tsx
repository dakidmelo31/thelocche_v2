import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import {
  GalleryCard,
  type GalleryItem,
} from "@/components/gallery/gallery-card";
import { BookButton } from "@/components/book-button";

export const metadata: Metadata = {
  title: "Gallery | LocChé Styles",
  description:
    "Explore LocChé braids, loc installations, retwists, twists, cornrows and micro loc extensions.",
  openGraph: {
    title: "The LocChé Look Book",
    description:
      "Clean parts, polished finishes and loc care crafted with intention.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Wide banner photo (about 3:1). Set this to the file path once the image is
 * ready, e.g. "/images/gallery-banner.webp". While it is null a placeholder
 * shows instead.
 */
const BANNER_IMAGE = "/images/gallery.png";

/*
 * To add photos to a style, drop the files in /public/images and add their
 * paths to that style's `images` array. Two or more photos turn the card into
 * a swipeable / hover-scrolling carousel with an "n / total" counter.
 */
const ITEMS: GalleryItem[] = [
  {
    name: "Signature Locs",
    category: "Locs",
    description:
      "Healthy, well-maintained locs shaped with a refined hand, clean parts, and care for your scalp.",
    images: [
      "/images/microlocs-retie-bundle1.webp",
      "/images/microlocs-retie-bundle.webp",
      "/images/microlocs-retie1.webp",
    ],
  },
  {
    name: "Loc Retwist",
    category: "Locs",
    description:
      "Fresh parts, cleaner roots, and a polished finish that keeps your locs neat between visits.",
    images: [
      "/images/locs-retwist1.webp",
      "/images/locs-retwist2.webp",
      "/images/locs-retwist3.webp",
    ],
  },
  {
    name: "Loc Installation",
    category: "Locs",
    description:
      "A clean, structured foundation for your loc journey, with even parts and comfortable tension from day one.",
    images: [
      "/images/installation2.webp",
      "/images/installation1.webp",
      "/images/installation3.webp",
    ],
  },
  {
    name: "Loc Extensions",
    category: "Locs",
    description:
      "Added length and fullness blended seamlessly into your own locs for a natural, balanced look.",
    images: ["/images/extension.webp"],
  },
  {
    name: "Loc Twist",
    category: "Twists",
    description:
      "Smooth, defined twists that keep your texture controlled and your style looking fresh.",
    images: [
      "/images/loc-twist.webp",
      "/images/braid3.webp",
      "/images/loc-twist3.webp",
      "/images/loc-twist2.webp",
    ],
  },
  {
    name: "Mini Twists",
    category: "Twists",
    description:
      "Detailed, long-lasting twists with a clean finish that stay light on the scalp and easy to wear.",
    images: ["/images/minitwists.webp"],
  },
  {
    name: "Braids",
    category: "Braids",
    description:
      "Clean parts, a polished finish, and a bold lightweight look that wears beautifully.",
    images: [
      "/images/braids3.webp",
      "/images/braids2.webp",
      "/images/braids1.webp",
    ],
  },
  {
    name: "Instant Locs",
    category: "Locs",
    description:
      "Locs from day one. Neatly sectioned and established at once, ready for you to grow into.",
    images: [
      "/images/instant-starter.webp",
      "/images/instant.webp",
      "/images/instant2.webp",
    ],
  },
  {
    name: "Micro Locs",
    category: "Micro Locs",
    description:
      "Fine, delicate locs with precise parting and a refined finish for versatile everyday styling.",
    images: [
      "/images/microlocs3.webp",
      "/images/microlocs2.webp",
      "/images/microlocs1.webp",
      "/images/microlocs4.webp",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="The Gallery"
        title="The look"
        accent="book."
        description="Healthy locs, clean twists, and polished braids. Your inspiration board before you book."
      />

      {/* Recent-work banner (placeholder until the photo arrives) */}
      <section className="mx-auto max-w-[1600px] px-6 pt-12 lg:px-20">
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-2xl border border-border bg-secondary">
          {BANNER_IMAGE ? (
            <Image
              src={BANNER_IMAGE}
              alt="Recent work by LocChé"
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
              <span className="absolute inset-0 flex items-center justify-center font-accent text-[12px] uppercase tracking-[0.28em] text-surface-dim">
                Banner image coming soon
              </span>
            </>
          )}
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 font-accent text-[12px] uppercase tracking-[0.2em] text-foreground">
            Recent Work — Fresh from the Chair
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <GalleryCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-[var(--background)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:py-32">
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Found your{" "}
            <span className="px-2 italic text-brand-gradient">look?</span>
          </h2>
          <p className="mt-5 max-w-md font-sans text-lg font-light text-muted-foreground">
            Bring your inspiration or your vision. We&rsquo;ll shape it to your
            hair, your lifestyle, and your crown.
          </p>
          <div className="mt-8">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
