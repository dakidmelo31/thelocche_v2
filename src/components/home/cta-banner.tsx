import Image from "next/image";
import { BookButton } from "@/components/book-button";

const CTA_IMAGE = "/images/CTA-Banner.png";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/80" aria-hidden />
      <div
        className="absolute inset-0 brand-gradient opacity-10 mix-blend-overlay"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center lg:py-48">
        <span className="mb-6 font-accent text-[13px] uppercase tracking-[0.28em] text-gold">
          Appointments Open
        </span>
        <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
          Your crown,{" "}
          <span className="italic text-brand-gradient">refined.</span>
        </h2>
        <p className="mt-6 max-w-md font-sans text-[13px] font-light uppercase leading-relaxed tracking-[0.2em] text-white/70">
          Healthy locs. Clean parts. Your look starts here.
        </p>
        <div className="mt-10">
          <BookButton className="border-gold text-white" />
        </div>
      </div>
    </section>
  );
}
