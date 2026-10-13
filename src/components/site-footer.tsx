import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import { CONTACT, NAV_LINKS, SOCIAL_LINKS } from "@/lib/site";
import { BookTrigger } from "@/components/booking-dialog";

const SOCIAL_ICONS = {
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  TikTok: FaTiktok,
  Pinterest: FaPinterest,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--surface-2)]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="LocChé"
              width={180}
              height={41}
              unoptimized
              className="mb-6 h-11 w-auto object-contain"
            />
            <p className="max-w-xs font-sans text-[15px] font-light leading-relaxed text-muted-foreground">
              Rooted in culture. Refined in craft. Premium loc care and
              protective styling in Andover, Minnesota.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-accent text-[13px] uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="space-y-4 font-sans text-[15px] font-light text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <BookTrigger className="transition-colors hover:text-foreground">
                  Book
                </BookTrigger>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-accent text-[13px] uppercase tracking-[0.2em] text-gold">
              Visit
            </h4>
            <address className="space-y-3 font-sans text-[15px] font-light not-italic text-muted-foreground">
              <p>{CONTACT.city}</p>
              <p>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-foreground"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="mb-6 font-accent text-[13px] uppercase tracking-[0.2em] text-gold">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} LocChé. All rights reserved.
          </p>
          <div className="flex gap-8 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
