"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type UIEvent,
} from "react";

const HOVER_INTERVAL_MS = 1500;

type ImageCarouselProps = {
  images: string[];
  alt: string;
  /** Extra classes for the photo layer (the gallery card uses it for the DBS hover lift). */
  layerClassName?: string;
  /** Overlay content (e.g. the description panel) rendered above the photos. */
  children?: ReactNode;
};

/**
 * Native scroll-snap carousel. Fills its parent (give the parent the aspect ratio).
 * - Touch: swipe (the browser's own horizontal scrolling).
 * - Mouse: auto-advances every HOVER_INTERVAL_MS while hovered, resets on leave.
 * - Shows an "n / total" counter (top right) when there is more than one image.
 *   The counter sits outside the photo layer, so it stays put when the photos lift.
 */
export function ImageCarousel({
  images,
  alt,
  layerClassName = "",
  children,
}: ImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);

  const total = images.length;
  const multiple = total > 1;

  const goTo = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => stop, [stop]);

  const handlePointerEnter = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Mouse only: touch devices use swipe instead.
    if (!multiple || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    timerRef.current = setInterval(() => {
      goTo((indexRef.current + 1) % total);
    }, HOVER_INTERVAL_MS);
  };

  const handlePointerLeave = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!multiple || e.pointerType !== "mouse") return;
    stop();
    goTo(0);
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el.clientWidth) return;
    const next = Math.min(
      total - 1,
      Math.max(0, Math.round(el.scrollLeft / el.clientWidth)),
    );
    if (next !== indexRef.current) {
      indexRef.current = next;
      setIndex(next);
    }
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-[var(--surface-2)]"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Photo layer */}
      <div className={`absolute inset-0 ${layerClassName}`}>
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          role={multiple ? "region" : undefined}
          aria-label={multiple ? `${alt} photos` : undefined}
          tabIndex={multiple ? 0 : undefined}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="h-full w-full shrink-0 snap-center"
            >
              <img
                src={src}
                alt={multiple ? `${alt} (photo ${i + 1} of ${total})` : alt}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
                className="h-full w-full select-none object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {multiple && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-coral/60 bg-white/85 px-3 py-1 font-accent text-[11px] tabular-nums tracking-[0.18em] text-foreground backdrop-blur-sm"
        >
          {index + 1} / {total}
        </span>
      )}

      {children}
    </div>
  );
}
