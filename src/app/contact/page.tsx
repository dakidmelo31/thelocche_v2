import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { BookButton } from "@/components/book-button";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialStrip } from "@/components/contact/social-strip";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | LocChé Minnesota",
  description:
    "Contact LocChé in Andover, Minnesota or book your next loc care and protective styling appointment.",
  openGraph: {
    title: "Contact LocChé",
    description: "Questions, consultations, and appointments with LocChé.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <>
      <header className="editorial-fade mx-auto max-w-[1600px] px-6 pb-28 pt-36 lg:px-20 lg:pt-44">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <SectionLabel className="mb-8">Get in Touch</SectionLabel>
            <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Let&rsquo;s care for
              <br />
              <span className="italic text-brand-gradient">your crown.</span>
            </h1>
            <p className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-muted-foreground">
              Questions about a style, a service, or your visit? Send us a
              message, or call or email us. Ready to book? Reserve your
              appointment online.
            </p>

            <ul className="mt-12 space-y-4 font-sans text-[13px] font-semibold uppercase tracking-[0.22em]">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-gold transition-opacity hover:opacity-70"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="text-gold transition-opacity hover:opacity-70"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{CONTACT.city}</li>
            </ul>

            <BookButton className="mt-12" />
          </div>

          <ContactForm />
        </div>
      </header>

      <SocialStrip />
    </>
  );
}
