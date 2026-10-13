"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/site";

type Status = "idle" | "sent";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
] as const;

const INPUT =
  "mt-3 w-full border-b border-border bg-transparent pb-3 font-sans text-base text-foreground outline-none transition-colors focus:border-gold";

/**
 * No server needed: submitting opens the visitor's email app with the message
 * already written and addressed to the studio.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const subject = `Inquiry from ${name}`;
    const body = [
      details,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
    ]
      .filter((line, i, all) => line !== "" || all[i - 1] !== "")
      .join("\n");

    setStatus("sent");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 md:pt-6">
      {FIELDS.map((field) => (
        <div key={field.name} className="relative">
          <label
            htmlFor={field.name}
            className="block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            className={INPUT}
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="details"
          className="block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Your Message
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          className={cn(INPUT, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className="w-full brand-gradient px-10 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:scale-[1.01]"
      >
        Send message →
      </button>

      {status === "sent" && (
        <p
          role="status"
          className="font-sans text-[13px] leading-relaxed text-muted-foreground"
        >
          Your email app should open with your message ready to send. If nothing
          opened, write to us at{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-gold underline-offset-4 hover:underline"
          >
            {CONTACT.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
