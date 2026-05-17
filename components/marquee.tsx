"use client";

import { cn } from "@/lib/utils";

const SEPARATOR = "✦";

export function Marquee({
  items,
  className,
  speed = 40,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="marquee-track flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 font-display text-2xl sm:text-3xl uppercase tracking-tight"
          >
            <span>{label}</span>
            <span className="text-brand-red opacity-70 text-xl">
              {SEPARATOR}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
