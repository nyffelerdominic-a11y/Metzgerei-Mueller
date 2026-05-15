"use client";

import { useEffect, useState } from "react";
import { getOpeningStatus, type OpeningStatus } from "@/lib/opening-hours";
import { cn } from "@/lib/utils";

export function OpeningStatusBadge({ className }: { className?: string }) {
  const [status, setStatus] = useState<OpeningStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpeningStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-mute",
          className
        )}
        aria-hidden
      >
        <span className="size-2 rounded-full bg-ink-mute/40" />
        ··· ···
      </span>
    );
  }

  const dot =
    status.state === "open"
      ? "bg-emerald-500"
      : status.state === "closed-soon"
        ? "bg-amber-500"
        : "bg-ink-mute/60";

  const label =
    status.state === "open"
      ? `Jetzt geöffnet · bis ${status.closesAt}`
      : status.state === "closed-soon"
        ? `Schliesst um ${status.closesAt}`
        : `Geschlossen · öffnet ${status.opensLabel}`;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft",
        className
      )}
    >
      <span className="relative flex size-2">
        {status.state === "open" && (
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
        )}
        <span className={cn("relative size-2 rounded-full", dot)} />
      </span>
      {label}
    </span>
  );
}
