import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SortimentGrid } from "@/components/sortiment-grid";
import { GoogleMap } from "@/components/google-map";
import { OpeningStatusBadge } from "@/components/opening-status";
import { site } from "@/lib/site";
import { partyserviceValues } from "@/lib/menu-data";
import {
  openingHours,
  orderedWeekdays,
  weekdayLabels,
} from "@/lib/opening-hours";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* TRADITION */}
      <Section id="tradition" className="bg-cream-light">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel>01 — Tradition</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                Vier Jahrzehnte{" "}
                <em className="italic font-light text-brand-red">
                  Leidenschaft
                </em>{" "}
                aus Brüttisellen.
              </h2>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7 space-y-6 text-[17px] leading-[1.7] text-ink-soft text-pretty">
              <p>
                Seit über 40 Jahren steht die <strong className="text-ink font-medium">Müller Metzgerei AG zum Rössli</strong> für ehrliches Handwerk und höchste Qualität.
                Als Kleinbetrieb sind wir flexibel und können schnell auf Ihre Wünsche eingehen.
              </p>
              <p>
                Unser Fleisch stammt grösstenteils von Landwirtschaftsbetrieben aus der Region. Sämtliche
                Wurstwaren und Spezialitäten werden in unserer hauseigenen Wursterei frisch hergestellt
                — mit traditionellen Rezepten und ohne Kompromisse.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-line/70 mt-10">
                <Stat number="40+" label="Jahre Handwerk" />
                <Stat number="100%" label="Regional" />
                <Stat number="6×" label="pro Woche frisch" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* SORTIMENT */}
      <Section id="sortiment" className="bg-cream py-24 sm:py-32">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionLabel>02 — Sortiment</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
                Was unsere Theke{" "}
                <em className="italic font-light text-brand-red">erzählt.</em>
              </h2>
            </div>
            <Link
              href="/sortiment"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand-red transition-colors"
            >
              Komplettes Sortiment
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <SortimentGrid />
        </Container>
      </Section>

      {/* PARTYSERVICE TEASER */}
      <Section id="partyservice" className="bg-ink text-cream-light relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #c8202b 0%, transparent 70%)" }}
        />
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <SectionLabel>
                <span className="text-gold">03 — Partyservice</span>
              </SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.98] text-balance">
                Genuss, der{" "}
                <em className="italic font-light text-gold">verbindet.</em>
              </h2>
              <p className="mt-8 max-w-xl text-lg text-cream-light/75 leading-relaxed text-pretty">
                Ob Geburtstag, Firmenfeier oder Familienfest — wir bringen Ihre Tafel zum Strahlen.
                Über 25 Gerichte aus eigener Produktion, individuell zusammengestellt, frisch geliefert.
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 max-w-xl">
                {partyserviceValues.map((v) => (
                  <li key={v.title} className="flex gap-3">
                    <Sparkles className="size-4 mt-1 shrink-0 text-gold" />
                    <div>
                      <p className="font-medium text-cream-light">{v.title}</p>
                      <p className="text-sm text-cream-light/65 leading-relaxed mt-1">
                        {v.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-4">
                <ButtonLink href="/partyservice" variant="primary" size="lg">
                  Menü & Anfrage
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href={`tel:${site.phoneTel}`}
                  external
                  variant="ghost"
                  size="lg"
                  className="!text-cream-light hover:!bg-cream-light/10"
                >
                  {site.phone} anrufen
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80&auto=format&fit=crop"
                  alt="Hausgemachte Fleischspezialitäten für den Partyservice"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream-light/10 rounded-2xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ÖFFNUNG + STANDORT */}
      <Section id="besuch" className="bg-cream-light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel>04 — Besuch</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                Im Herzen von{" "}
                <em className="italic font-light text-brand-red">Brüttisellen.</em>
              </h2>
              <div className="mt-8">
                <OpeningStatusBadge />
              </div>
              <dl className="mt-8 space-y-3">
                {orderedWeekdays.map((day) => {
                  const slots = openingHours[day];
                  return (
                    <div
                      key={day}
                      className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2 last:border-0"
                    >
                      <dt className="text-ink">{weekdayLabels[day]}</dt>
                      <dd className="font-mono text-sm text-ink-soft">
                        {slots.length === 0
                          ? "Geschlossen"
                          : slots.map((s) => `${s.open}–${s.close}`).join("  ·  ")}
                      </dd>
                    </div>
                  );
                })}
              </dl>
              <div className="mt-8 space-y-1 text-ink-soft">
                <p className="text-ink font-medium">{site.fullName}</p>
                <p>{site.address.street}</p>
                <p>{site.address.postal} {site.address.city}</p>
                <p className="pt-2">
                  <a href={`tel:${site.phoneTel}`} className="hover:text-brand-red transition-colors">
                    {site.phone}
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <GoogleMap className="aspect-[4/5] lg:aspect-auto lg:h-full" />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl text-brand-red tracking-tight">
        {number}
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute">
        {label}
      </p>
    </div>
  );
}
