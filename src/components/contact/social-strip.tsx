import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/site";

const ICONS = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Facebook: FaFacebook,
  Pinterest: FaPinterest,
} as const;

// Reveal mechanics cycle per row: slide, hinge, iris, then repeat.
const VARIANTS = ["slide", "hinge", "iris"] as const;

const MARQUEE_REPEAT = 6;

export function SocialStrip() {
  return (
    <section className="w-full border-y border-border bg-background">
      {/* Shared gradient definition for the icon fill, matching .text-brand-gradient (gold -> gold-deep -> coral) */}
      <svg
        width="0"
        height="0"
        className="absolute"
        aria-hidden
        focusable="false"
      >
        <defs>
          <linearGradient
            id="social-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="var(--gold)" />
            <stop offset="55%" stopColor="var(--gold-deep)" />
            <stop offset="100%" stopColor="var(--coral)" />
          </linearGradient>
        </defs>
      </svg>

      {SOCIAL_LINKS.map((social, index) => {
        const Icon = ICONS[social.label];
        const variant = VARIANTS[index % VARIANTS.length];

        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-variant={variant}
            className="social-row relative flex h-24 w-full overflow-hidden border-b border-border last:border-b-0 md:h-28"
          >
            {/* Marquee layer — always present underneath, revealed on hover */}
            <div className="social-marquee pointer-events-none absolute inset-0 z-0 flex items-center px-6 lg:px-20">
              <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
                {[0, 1].map((block) => (
                  <span
                    key={block}
                    className="flex shrink-0 items-center gap-12"
                  >
                    {Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
                      <span key={i} className="flex items-center gap-4">
                        <Icon
                          className="h-8 w-8 shrink-0 md:h-10 md:w-10"
                          style={{ fill: "url(#social-icon-gradient)" }}
                        />
                        <span className="font-serif text-4xl font-light italic text-brand-gradient md:text-6xl">
                          {social.handle}
                        </span>
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>

            {/* Front panel — conceals the marquee, animates away on hover */}
            <div className="social-panel absolute inset-0 z-10 flex items-center justify-between bg-background px-6 lg:px-20">
              <span className="font-serif text-5xl font-light uppercase text-foreground md:text-7xl">
                {social.label}
              </span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Follow →
              </span>
            </div>
          </Link>
        );
      })}

      <style>{`
        .social-row {
          perspective: 1400px;
        }

        .social-marquee {
          opacity: 0;
          transition: opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .social-row:hover .social-marquee {
          opacity: 1;
        }

        .social-panel {
          transition:
            transform 1100ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1),
            clip-path 1100ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Variant 1 — marquee slides in from the right, panel fades back */
        .social-row[data-variant='slide'] .social-marquee {
          transform: translateX(8%);
          transition:
            opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 1100ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .social-row[data-variant='slide']:hover .social-marquee {
          transform: translateX(0);
        }
        .social-row[data-variant='slide']:hover .social-panel {
          transform: translateX(-6%);
          opacity: 0;
        }

        /* Variant 2 — lid hinges open from the top edge */
        .social-row[data-variant='hinge'] .social-panel {
          transform-origin: top center;
          transform: rotateX(0deg);
          backface-visibility: hidden;
        }
        .social-row[data-variant='hinge']:hover .social-panel {
          transform: rotateX(-100deg);
          opacity: 0;
        }

        /* Variant 3 — aperture/iris closes down from the right corner */
        .social-row[data-variant='iris'] .social-panel {
          clip-path: circle(150% at 100% 50%);
        }
        .social-row[data-variant='iris']:hover .social-panel {
          clip-path: circle(0% at 100% 50%);
        }

        @media (prefers-reduced-motion: reduce) {
          .social-row .marquee-track {
            animation: none;
          }
          .social-marquee,
          .social-panel {
            transition: opacity 300ms ease !important;
            transform: none !important;
            clip-path: none !important;
          }
          .social-row:hover .social-panel {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
