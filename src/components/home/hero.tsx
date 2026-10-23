"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookButton } from "@/components/book-button";
import { cn } from "@/lib/utils";

const MARQUEE_WORDS = [
  "Culture",
  "Craft",
  "Care",
  "Precision",
  "Expression",
  "Crown",
];

// How often the photos change (milliseconds).
const ROTATE_MS = 3000;

// ─── Swap these for your own assets (files live in /public) ──────────────────
// The video that plays inside the tall arch.
const HERO_VIDEO = "/videos/hero.mp4";
// Shown until the video loads.
const HERO_POSTER = "/images/microlocs-retie-bundle1.webp";

// Photos for the small card in front of the arch. Add or remove entries
// freely: the card rotates through whatever is here.
const CARD_IMAGES = [
  { src: "/images/locs-retwist2.webp", alt: "Loc retwist detail" },
  { src: "/images/microlocs-retie1.webp", alt: "Micro loc retie" },
  { src: "/images/locs-retwist3.webp", alt: "Finished locs" },
  { src: "/images/microlocs-retie-bundle.webp", alt: "Loc bundle" },
  { src: "/images/installation2.webp", alt: "Regular Locs" },
  { src: "/images/minitwists.webp", alt: "Mini Twist" },
];

// Outline of the arch (viewBox 400 x 540): a semicircle on top, straight sides,
// slightly rounded bottom corners. Starts at the very top and runs clockwise.
const ARCH_PATH =
  "M200 0 A200 200 0 0 1 400 200 L400 516 A24 24 0 0 1 376 540 L24 540 A24 24 0 0 1 0 516 L0 200 A200 200 0 0 1 200 0 Z";
// ─────────────────────────────────────────────────────────────────────────────

export function Hero() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Respect visitors who ask their device for less motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const cardActive = tick % CARD_IMAGES.length;

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background pt-20">
      <div className="mx-auto grid w-full max-w-[1600px] flex-1 items-center gap-14 px-6 py-12 lg:grid-cols-[1fr_760px] lg:px-20">
        {/* Copy */}
        <div className="editorial-fade flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 brand-gradient" aria-hidden />
            <span className="font-accent text-[13px] uppercase tracking-[0.28em] text-foreground">
              LocChé Studio
            </span>
          </div>

          <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-foreground md:text-8xl lg:text-[7rem]">
            Refined loc care,
            <br />
            <span className="italic text-brand-gradient">timeless beauty.</span>
          </h1>

          <p className="max-w-md font-sans text-[13px] font-normal uppercase leading-relaxed tracking-[0.22em] text-muted-foreground">
            Healthy growth. Clean parts.
            <br />
            Styles that feel like you.
          </p>

          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <BookButton />
            <Link
              href="/gallery"
              className="border-b border-coral py-2 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-gold"
            >
              View the Gallery →
            </Link>
          </div>
        </div>

        {/* Rotating frames */}
        <div className="relative mx-auto h-[520px] w-full max-w-[460px] sm:h-155 sm:max-w-140 lg:h-[720px] lg:max-w-none">
          <div
            className="absolute right-4 top-2 aspect-square h-[52%] rounded-full bg-[linear-gradient(135deg,#F6E7B4,#EFDBA0_55%,#D1A93A)]"
            aria-hidden
          />

          {/* Tall arch: video inside, gold shooting star around the border */}
          <div className="absolute right-0 top-0 aspect-[400/540] h-[96%]">
            <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[6%/4.4%] bg-secondary shadow-[0_30px_60px_rgba(22,19,21,0.14)]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={HERO_POSTER}
              >
                <source src={HERO_VIDEO} type="video/mp4" />
              </video>
            </div>

            <svg
              viewBox="0 0 400 540"
              fill="none"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              aria-hidden
            >
              <defs>
                <filter
                  id="arch-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              {/* faint gold hairline along the whole border */}
              <path
                d={ARCH_PATH}
                pathLength={100}
                stroke="#D1A93A"
                strokeOpacity={1}
                strokeWidth={1.5}
              />
              {/* the star: soft glow, tail, bright head */}
              <path
                d={ARCH_PATH}
                pathLength={100}
                className="arch-star arch-star-glow"
                stroke="#F2D97A"
                strokeWidth={12}
                filter="url(#arch-glow)"
              />
              <path
                d={ARCH_PATH}
                pathLength={100}
                className="arch-star arch-star-tail"
                stroke="#D1A93A"
                strokeWidth={4}
              />
              <path
                d={ARCH_PATH}
                pathLength={100}
                className="arch-star arch-star-head"
                stroke="#FFF8DC"
                strokeWidth={5}
              />
            </svg>
          </div>

          {/* Small card: thin gold border, white gap, photo inside */}
          <div className="absolute bottom-[2%] left-0 h-[52%] w-[44%] rounded-[1.75rem] border border-coral bg-background p-2 shadow-[0_24px_50px_rgba(22,19,21,0.14)]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-secondary">
              {CARD_IMAGES.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={i === cardActive ? img.alt : ""}
                  aria-hidden={i !== cardActive}
                  fill
                  sizes="(max-width: 1024px) 40vw, 300px"
                  className={cn(
                    "object-cover transition-opacity duration-1000 ease-in-out",
                    i === cardActive ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip: white band, dark text, gold bullets */}
      <div className="w-full overflow-hidden border-t border-border bg-background py-4">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((block) => (
            <span
              key={block}
              className="flex shrink-0 items-center"
              aria-hidden={block === 1}
            >
              {Array.from({ length: 4 }).map((_, rep) =>
                MARQUEE_WORDS.map((word) => (
                  <span
                    key={`${rep}-${word}`}
                    className="flex items-center font-accent text-base uppercase tracking-[0.3em] text-foreground md:text-lg"
                  >
                    {word}
                    <span className="mx-6 text-coral md:mx-8">•</span>
                  </span>
                )),
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
