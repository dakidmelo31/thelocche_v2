"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BookingDialog } from "@/components/booking-dialog";

type BookButtonProps = {
  children?: ReactNode;
  className?: string | undefined;
  variant?: "solid" | "outline";
  /** Optional service name, pre-filled into the text / email draft. */
  service?: string | undefined;
};

export function BookButton({
  children = "Book an Appointment",
  className,
  variant = "solid",
  service,
}: BookButtonProps) {
  return (
    <BookingDialog
      service={service}
      trigger={(open) => (
        <button
          type="button"
          onClick={open}
          className={cn(
            "group relative inline-flex items-center justify-center overflow-hidden px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500",
            variant === "solid"
              ? "border border-gold text-gold"
              : "border border-border text-foreground hover:border-gold",
            className,
          )}
        >
          <span
            className="absolute inset-0 origin-left scale-x-0 brand-gradient transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            aria-hidden
          />
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            {children}
          </span>
        </button>
      )}
    />
  );
}
