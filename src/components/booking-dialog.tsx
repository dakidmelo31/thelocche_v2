"use client";

import { useRef, type ReactNode } from "react";
import { Mail, MessageSquare, Phone, X } from "lucide-react";
import { CONTACT } from "@/lib/site";

function buildMessage(service?: string) {
  return `Hi LocChé, I'd like to book an appointment.\n\nName:\nService: ${service ?? ""}\nPreferred date & time:\nFirst time with LocChé? (yes/no):`;
}

function getBookingOptions(service?: string) {
  const body = encodeURIComponent(buildMessage(service));
  const subject = encodeURIComponent(
    service ? `Appointment request: ${service}` : "Appointment request",
  );
  return [
    {
      icon: Phone,
      label: "Call",
      detail: CONTACT.phone,
      href: CONTACT.phoneHref,
    },
    {
      icon: MessageSquare,
      label: "Text",
      detail: CONTACT.phone,
      href: `sms:${CONTACT.phoneTel}?&body=${body}`,
    },
    {
      icon: Mail,
      label: "Email",
      detail: CONTACT.email,
      href: `mailto:${CONTACT.email}?subject=${subject}&body=${body}`,
    },
  ];
}

/**
 * Booking happens by call, text or email (no booking plugin). Every "Book"
 * button on the site opens this dialog. `service` pre-fills the text / email.
 */
export function BookingDialog({
  trigger,
  service,
}: {
  trigger: (open: () => void) => ReactNode;
  service?: string | undefined;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const options = getBookingOptions(service);

  return (
    <>
      {trigger(() => ref.current?.showModal())}
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-md border border-border bg-[var(--surface-2)] p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl font-light leading-tight">
                Book your appointment
              </h2>
              <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-muted-foreground">
                Reach us the way that suits you. Texts and emails open with a
                message ready to fill in.
              </p>
              {service && (
                <p className="mt-5 font-accent text-[13px] uppercase tracking-[0.22em] text-gold">
                  Booking: {service}
                </p>
              )}
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => ref.current?.close()}
              className="text-muted-foreground transition-colors hover:text-gold"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            {options.map(({ icon: Icon, label, detail, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 border border-border p-4 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon aria-hidden="true" className="size-5" />
                <span className="flex flex-col gap-0.5">
                  <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em]">
                    {label}
                  </span>
                  <span className="font-sans text-[15px] font-light text-muted-foreground">
                    {detail}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}

/**
 * Unstyled-by-default <button> that opens the booking dialog. Safe to use from
 * server components (only serialisable props: className, service, children).
 */
export function BookTrigger({
  service,
  className,
  children,
}: {
  service?: string | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  return (
    <BookingDialog
      service={service}
      trigger={(open) => (
        <button type="button" onClick={open} className={className}>
          {children}
        </button>
      )}
    />
  );
}
