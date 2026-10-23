import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/site";

type BookButtonProps = {
  children?: ReactNode;
  className?: string | undefined;
  /** solid = gold fill, outline = ink outline, dark = ink fill */
  variant?: "solid" | "outline" | "dark";
};

/** Pill button that sends visitors to the online booking site. */
export function BookButton({
  children = "Book an Appointment",
  className,
  variant = "solid",
}: BookButtonProps) {
  return (
    <a
      href={BOOKING_URL}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] transition-all duration-500",
        variant === "solid" &&
          "brand-gradient text-primary-foreground shadow-[0_10px_28px_rgba(209,169,58,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(209,169,58,0.4)] hover:brightness-105",
        variant === "outline" &&
          "border border-foreground text-foreground hover:bg-foreground hover:text-background",
        variant === "dark" &&
          "bg-foreground text-background hover:-translate-y-0.5 hover:bg-foreground/90",
        className,
      )}
    >
      {children}
    </a>
  );
}
