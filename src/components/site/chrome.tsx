"use client";

import { CalendarDays } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/booking-dialog";

export { BookingDialog };

/**
 * TRANSITIONAL FILE. The header and footer now live in the root layout
 * (like DBS), so these two render nothing. That stops the old pages from
 * showing a second header / footer. Delete the <Nav /> / <Footer /> tags from
 * a page when you convert it, and delete this file once every page is done.
 */
export function Nav() {
  return null;
}

export function Footer() {
  return null;
}

/** Old-style button still used by the Contact and Gallery pages. */
export function BookButton({
  children,
  service,
  ...props
}: Omit<ComponentProps<typeof Button>, "asChild" | "onClick"> & {
  service?: string | undefined;
}) {
  return (
    <BookingDialog
      service={service}
      trigger={(open) => (
        <Button {...props} onClick={open}>
          {children}
        </Button>
      )}
    />
  );
}

/** Old-style CTA section still used by the About and Gallery pages. */
export function BookCta({
  title = "Your crown, refined.",
  copy = "Choose your service, reserve your time, and arrive ready for a seamless LocChé experience.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-primary px-6 py-24 text-center md:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
        Appointments open
      </p>
      <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-light text-primary-foreground md:text-7xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
        {copy}
      </p>
      <BookingDialog
        trigger={(open) => (
          <Button
            variant="secondary"
            onClick={open}
            className="mt-9 rounded-full px-9 uppercase tracking-[0.14em]"
          >
            <CalendarDays aria-hidden="true" /> Book appointment
          </Button>
        )}
      />
    </section>
  );
}
