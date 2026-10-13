"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site";
import { BookingDialog } from "@/components/booking-dialog";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-500",
        scrolled || open
          ? "border-border bg-background/80 backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="LocChé home"
        >
          <Image
            src="/images/logo.png"
            alt="LocChé"
            width={200}
            height={46}
            unoptimized
            className="h-12 w-auto object-contain md:h-14"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors",
                  active
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <BookingDialog
            trigger={(openDialog) => (
              <button
                type="button"
                onClick={openDialog}
                className="group relative hidden overflow-hidden border border-gold px-7 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold md:inline-flex"
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 brand-gradient transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Book Now
                </span>
              </button>
            )}
          />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b border-border py-4 font-serif text-2xl transition-colors",
                    active ? "text-gold" : "text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <BookingDialog
              trigger={(openDialog) => (
                <button
                  type="button"
                  onClick={openDialog}
                  className="mt-6 inline-flex items-center justify-center brand-gradient px-7 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-white"
                >
                  Book an Appointment
                </button>
              )}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
