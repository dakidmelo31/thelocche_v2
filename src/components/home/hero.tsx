import Link from "next/link";
import { BookButton } from "@/components/book-button";

const MARQUEE = "CULTURE • CRAFT • CARE • PRECISION • EXPRESSION • CROWN • ";

// Swap these for your own assets (files live in /public).
const HERO_VIDEO = "/videos/hero.mp4";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        // poster="/images/locs.webp"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-background"
        aria-hidden
      />

      <div className="editorial-fade relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 brand-gradient" aria-hidden />
          <span className="font-accent text-[13px] uppercase tracking-[0.28em] text-gold">
            LocChé Studio
          </span>
          <span className="h-px w-10 brand-gradient" aria-hidden />
        </div>

        <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-white md:text-8xl lg:text-[7.5rem]">
          Refined loc care,
          <br />
          <span className="italic text-brand-gradient">timeless beauty.</span>
        </h1>

        <p className="mt-8 max-w-lg font-sans text-[13px] font-light uppercase leading-relaxed tracking-[0.22em] text-white/70">
          Healthy growth. Clean parts.
          <br />
          Styles that feel like you.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <BookButton />
          <Link
            href="/gallery"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-white/25 px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-500 hover:border-gold"
          >
            View the Gallery
          </Link>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden border-y border-gold/30 bg-background/80 py-4 backdrop-blur-sm">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-accent text-base uppercase tracking-[0.4em] text-gold md:text-md"
              aria-hidden={i === 1}
            >
              {MARQUEE.repeat(4)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
