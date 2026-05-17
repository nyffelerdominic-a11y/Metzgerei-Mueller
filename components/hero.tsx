"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Stamp } from "./stamp";
import { Marquee } from "./marquee";
import { OpeningStatusBadge } from "./opening-status";
import { site } from "@/lib/site";

const HERO_BG = "/photos/hero-handwerk.jpg";

const TICKER_ITEMS = [
  "Heute frisch",
  "Bratwurst",
  "Cervelat",
  "Schüblig",
  "Bündnerfleisch",
  "Bärlauchwürste",
  "Festtagsbraten",
  "Hauseigene Wursterei",
  "Partyservice",
  "Seit 1984",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-brand-red-deep text-paper min-h-[80vh] sm:min-h-[88vh] flex flex-col">
      {/* Full-bleed atmospheric background — butcher at the block */}
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center [filter:saturate(0.95)_contrast(1.08)_brightness(0.85)]"
      />

      {/* Soft dark wash on the left for type legibility. Right side stays
          mostly clear so the action in the photo reads through. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-brand-red-deep/50" />

      <div className="relative flex-1 flex items-center mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-brass" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
              No. 01 · Brüttisellen · seit 1984
            </span>
          </div>

          <h1 className="mt-6 sm:mt-9 leading-[0.95] sm:leading-[0.92] text-balance">
            <span className="block font-display text-[clamp(2.5rem,10vw,8.5rem)] font-medium tracking-tight text-paper">
              Handwerk,
            </span>
            <span className="block italic-display text-[clamp(2.5rem,10vw,8.5rem)] text-brass mt-1">
              das man schmeckt.
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl leading-relaxed text-paper/90 text-pretty">
            Familienbetrieb in zweiter Generation. Hauseigene Wursterei,
            Fleisch von Höfen aus der Region, sechs Tage die Woche frisch
            in der Theke.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="group inline-flex items-center justify-center gap-3 bg-paper text-ink [@media(hover:hover)]:hover:bg-brass px-7 h-12 rounded-full font-medium transition-[background-color,transform] duration-200 [transition-timing-function:var(--ease-out)] active:scale-[0.97] active:duration-100 w-full sm:w-auto"
            >
              <Phone className="size-4" />
              {site.phone} anrufen
            </a>
            <Link
              href="/partyservice"
              className="group inline-flex items-center justify-center gap-2 text-paper border border-paper/30 [@media(hover:hover)]:hover:bg-paper/10 transition-colors duration-150 text-sm font-medium h-12 px-6 rounded-full w-full sm:w-auto"
            >
              Partyservice entdecken
              <ArrowRight className="size-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] [@media(hover:hover)]:group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Stamp — top-right, anchored to the action area of the photo.
            Dark fill with brass text reads on both wash and bright spots. */}
        <motion.div
          initial={reduce ? false : { opacity: 0, transform: "scale(0.85) rotate(-8deg)" }}
          animate={{ opacity: 1, transform: "scale(1) rotate(0deg)" }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
          className="hidden sm:block absolute top-24 right-6 sm:right-10 lg:right-16 z-10"
          style={{
            animation: reduce
              ? undefined
              : "stamp-pulse 6s var(--ease-out-quart) infinite",
          }}
        >
          <Stamp size={130} tone="brass" />
        </motion.div>

        {/* Opening status — bottom right caption */}
        <div className="hidden lg:flex absolute right-12 bottom-28 items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-paper/75 font-mono">
          <OpeningStatusBadge className="!text-[10px] !tracking-[0.2em] !text-paper/85" />
        </div>
      </div>

      {/* Marquee ticker — full bleed at the bottom of hero */}
      <div className="relative bg-brand-red-deep text-paper py-2.5">
        <Marquee items={TICKER_ITEMS} speed={50} />
      </div>
    </section>
  );
}
