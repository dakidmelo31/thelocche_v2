import Image from "next/image";
import { BookButton } from "@/components/book-button";

// Swap for your own image (file lives in /public).
const CTA_IMAGE = "/images/CTA-Banner.png";

export function CtaBanner() {
  return (
    <section className="bg-background px-6 py-20 lg:px-20 lg:py-28">
      <div className="relative mx-auto flex max-w-[1600px] flex-col overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#F6E7B4,#EFDBA0_50%,#D1A93A)] lg:min-h-[520px] lg:flex-row lg:items-center">
        {/* Copy (left half) */}
        <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 px-8 pb-6 pt-14 text-center lg:w-1/2 lg:max-w-none lg:items-start lg:px-20 lg:py-16 lg:text-left">
          <span className="font-accent text-[13px] uppercase tracking-[0.28em] text-foreground">
            Appointments Open
          </span>
          <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Your crown, <span className="italic">refined.</span>
          </h2>
          <p className="max-w-md font-sans text-[13px] uppercase leading-relaxed tracking-[0.2em] text-foreground/70">
            Healthy locs. Clean parts. Your look starts here.
          </p>
          <BookButton variant="dark" className="mt-2" />
        </div>

        {/* Image (right half). The mask fades it out into the gold, starting
            from the centre of the banner. Below lg it fades in from the top. */}
        <div className="relative h-72 w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_55%)] sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_60%)]">
          <Image
            src={CTA_IMAGE}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
