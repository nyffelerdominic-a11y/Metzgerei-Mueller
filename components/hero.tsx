"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { OpeningStatusBadge } from "./opening-status";

const HERO_IMG =
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=2400&q=80&auto=format&fit=crop";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream-light min-h-[88vh] flex items-end">
      <Image
        src={HERO_IMG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55 [filter:saturate(1.05)_contrast(1.1)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <div className="absolute inset-0 bg-noise opacity-[0.07]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pb-20 pt-32 sm:pt-40 lg:pt-48">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-cream-light/70">
            <span className="h-px w-10 bg-cream-light/70" />
            Brüttisellen · seit 1984
          </span>

          <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[88px] leading-[0.95] tracking-tight text-balance">
            Handwerk,
            <br />
            das man{" "}
            <em className="italic font-light text-gold" style={{ fontVariationSettings: '"SOFT" 100' }}>
              schmeckt.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl text-cream-light/85 leading-relaxed text-pretty">
            Über 40 Jahre Metzgerei-Tradition in Brüttisellen. Hauseigene
            Wursterei, regionale Bauern, ehrliches Handwerk —{" "}
            <span className="text-cream-light">jeden Tag frisch.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/partyservice" variant="primary" size="lg">
              Partyservice entdecken
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink
              href="/sortiment"
              variant="ghost"
              size="lg"
              className="!text-cream-light hover:!bg-cream-light/10"
            >
              Unser Sortiment
            </ButtonLink>
          </div>

          <div className="mt-12">
            <OpeningStatusBadge className="text-cream-light/70" />
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 right-6 sm:right-12 hidden sm:flex flex-col items-center gap-2 text-cream-light/50 font-mono text-[10px] uppercase tracking-[0.2em]"
      >
        <span>scroll</span>
        <span className="h-10 w-px bg-cream-light/40" />
      </motion.div>
    </section>
  );
}
