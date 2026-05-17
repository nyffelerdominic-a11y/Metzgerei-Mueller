"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Stamp } from "./stamp";
import { Marquee } from "./marquee";
import { OpeningStatusBadge } from "./opening-status";
import { site } from "@/lib/site";

const HERO_BG = "/photos/theke-uebersicht.jpg";
const HERO_CARD = "/photos/hero-card.png";

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
    <section className="relative isolate overflow-hidden bg-brand-red-deep text-paper">
      {/* Full-bleed atmospheric background — counter shot from the shop, heavily
          desaturated and darkened so it reads as ambient backdrop, not as a
          documentary photo of vacuum-packed product. */}
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center [filter:saturate(0.4)_contrast(1.2)_brightness(0.65)]"
      />

      {/* Heavy dark wash + directional gradient for legibility */}
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-brand-red-deep/55" />
      {/* Bottom red wash → marquee */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-brand-red-deep via-brand-red-deep/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          {/* Type column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-brass" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
                No. 01 · Brüttisellen · seit 1984
              </span>
            </div>

            <h1 className="mt-7 sm:mt-9 leading-[0.92] text-balance">
              <span className="block font-display text-[clamp(3rem,8vw,7.5rem)] font-medium tracking-tight text-paper">
                Handwerk,
              </span>
              <span className="block italic-display text-[clamp(3rem,8vw,7.5rem)] text-brass mt-1">
                das man schmeckt.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-paper/85 text-pretty">
              Familienbetrieb in zweiter Generation. Hauseigene Wursterei,
              Fleisch von Höfen aus der Region, sechs Tage die Woche frisch
              in der Theke.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/partyservice"
                className="group inline-flex items-center gap-3 bg-paper text-ink [@media(hover:hover)]:hover:bg-brass px-7 h-12 rounded-full font-medium transition-[background-color,transform] duration-200 [transition-timing-function:var(--ease-out)] active:scale-[0.97] active:duration-100"
              >
                Partyservice entdecken
                <ArrowRight className="size-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] [@media(hover:hover)]:group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center gap-2 text-paper [@media(hover:hover)]:hover:text-brass transition-colors duration-150 text-sm font-medium"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
            </div>
          </motion.div>

          {/* Photo card with stamp in the corner */}
          <motion.aside
            initial={reduce ? false : { opacity: 0, transform: "translateY(30px) scale(0.97)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            transition={{
              duration: 1.0,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6),0_15px_30px_-15px_rgba(0,0,0,0.4)]">
                <Image
                  src={HERO_CARD}
                  alt="Bündnerfleisch und Trockenwurst aus eigener Produktion"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover [filter:saturate(0.95)_contrast(1.05)]"
                />
                {/* Inner hairline frame */}
                <div className="absolute inset-3 border border-paper/20 pointer-events-none" />

                {/* Caption strip — bottom right of the card */}
                <div className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-paper/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] font-mono text-ink">
                  Fig. 01 — Charcuterie
                </div>
              </div>

              {/* Stamp — on mobile sits inside the card's top-left;
                  on lg+ straddles outward across the card edge. */}
              <div
                className="absolute -top-5 left-3 sm:-top-7 sm:left-4 lg:-top-8 lg:-left-16 z-20"
                style={{
                  animation: reduce
                    ? undefined
                    : "stamp-pulse 6s var(--ease-out-quart) infinite",
                }}
              >
                <Stamp size={130} tone="brass" />
              </div>
            </div>

            {/* Caption below card — opening status only */}
            <div className="mt-5 flex justify-end text-[11px] uppercase tracking-[0.25em] text-paper/65 font-mono">
              <OpeningStatusBadge className="!text-[10px] !tracking-[0.2em] !text-paper/75" />
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Marquee ticker — full bleed at the bottom of hero */}
      <div className="relative bg-brand-red-deep text-paper py-2.5">
        <Marquee items={TICKER_ITEMS} speed={50} />
      </div>
    </section>
  );
}
