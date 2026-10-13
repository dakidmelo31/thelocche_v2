import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="h-px w-8 brand-gradient" aria-hidden />
      <span className="font-accent text-[13px] uppercase tracking-[0.22em] text-gold">
        {children}
      </span>
    </div>
  );
}
