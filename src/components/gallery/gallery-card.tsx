"use client";

import { ArrowRight } from "lucide-react";
import { BookTrigger } from "@/components/booking-dialog";
import { ImageCarousel } from "@/components/site/image-carousel";

export type GalleryItem = {
  name: string;
  category: string;
  description: string;
  /** One photo = a plain card. Two or more = swipe / hover carousel with a counter. */
  images: string[];
};

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="flex flex-col">
      <div className="group relative aspect-[3/4] overflow-hidden border border-border">
        <ImageCarousel
          images={item.images}
          alt={item.name}
          // Photos slide up and zoom slightly on hover (same as DBS)
          layerClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-24 group-hover:scale-105"
        >
          {/* Revealed description panel */}
          <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-[var(--surface-2)] p-6 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
            <p className="mt-2 font-sans text-[15px] font-light leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </ImageCarousel>

        {/* Category chip */}
        <span className="pointer-events-none absolute left-4 top-4 z-20 border border-coral/60 bg-black/30 px-3 py-1 font-accent text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* Always-visible name + book CTA under the image */}
      <div className="mt-5">
        <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
      </div>
      <BookTrigger
        service={item.name}
        className="group/btn mt-4 inline-flex items-center justify-between border border-border px-5 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
      >
        Book this Style
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </BookTrigger>
    </article>
  );
}
