"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Stamp } from "./stamp";
import { Marquee } from "./marquee";
import { OpeningStatusBadge } from "./opening-status";
import { site } from "@/lib/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1800&q=80&auto=format&fit=crop";

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
    <section className="relative bg-cream-paper text-ink overflow-hidden">
      {/* Decorative background numerals */}
      <div
        aria-hidden
        className="absolute -top-8 -right-12 sm:-right-20 select-none pointer-events-none font-display-tall text-[28vw] sm:text-[18vw] lg:text-[14vw] leading-[0.85] text-brand-red/[0.05] tracking-tighter"
      >
        1984
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Type column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative z-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 text-ink-soft">
              <div className="rule-double-red w-16" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-red">
                No. 01 · Brüttisellen
              </span>
            </div>

            {/* Mega-headline */}
            <h1 className="mt-6 sm:mt-8 leading-[0.85] text-balance">
              <span className="block font-display-tall text-[20vw] sm:text-[16vw] lg:text-[13rem] xl:text-[15rem] uppercase text-ink">
                Müller
              </span>
              <span className="mt-3 sm:mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[11px] sm:text-sm uppercase tracking-[0.3em] text-brand-red">
                <span className="inline-block h-px w-8 bg-brand-red translate-y-[-4px]" />
                <span>Metzgerei AG</span>
                <span className="text-ink-mute">·</span>
                <span className="text-ink-soft">zum Rössli</span>
              </span>
              <span className="mt-8 sm:mt-10 block font-serif italic font-light text-[12vw] sm:text-[9vw] lg:text-[7.5rem] leading-[0.95] text-brand-red">
                Handwerk,
              </span>
              <span className="mt-1 block font-serif italic font-light text-[12vw] sm:text-[9vw] lg:text-[7.5rem] leading-[0.95] text-ink">
                das man schmeckt.
              </span>
            </h1>

            {/* Sub + CTA */}
            <div className="mt-10 grid gap-8 sm:grid-cols-12 sm:items-end">
              <p className="sm:col-span-7 max-w-md text-[15px] sm:text-base leading-relaxed text-ink-soft text-pretty">
                Vier Jahrzehnte Schweizer Metzgerei-Handwerk. Hauseigene
                Wursterei, regionale Bauern, frisch jeden Tag. Wir freuen uns
                auf Ihren Besuch.
              </p>
              <div className="sm:col-span-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/partyservice"
                  className="group inline-flex items-center gap-3 bg-ink text-cream-light hover:bg-brand-red transition-colors duration-300 px-6 h-12 rounded-full font-medium"
                >
                  Partyservice
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2 text-ink hover:text-brand-red transition-colors text-sm font-medium"
                >
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image + Stamp column */}
          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink">
              <Image
                src={HERO_IMG}
                alt="Hochwertige Wurstwaren und Charcuterie aus der Müller Metzgerei"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover [filter:saturate(0.9)_contrast(1.1)]"
              />
              {/* Subtle inner border */}
              <div className="absolute inset-3 border border-cream-light/20 pointer-events-none" />
            </div>

            {/* Rotated stamp overlapping image */}
            <div
              className="absolute -bottom-8 -left-8 sm:-left-12 lg:bottom-auto lg:top-[-2rem] lg:-left-16 z-10"
              style={{
                animation: reduce ? undefined : "stamp-pulse 6s var(--ease-out-quart) infinite",
              }}
            >
              <Stamp size={140} tone="red" />
            </div>

            {/* Caption */}
            <div className="mt-5 flex items-start justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-ink-mute font-mono">
              <span>Fig. 01</span>
              <OpeningStatusBadge className="!text-[10px] !tracking-[0.2em]" />
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Marquee ticker — full bleed, sits at the bottom of hero */}
      <div className="relative mt-6 sm:mt-12 border-y-2 border-double border-ink bg-brand-red text-cream-light py-2">
        <Marquee items={TICKER_ITEMS} speed={50} />
      </div>
    </section>
  );
}
