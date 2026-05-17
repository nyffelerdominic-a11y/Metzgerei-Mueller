import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SortimentList } from "@/components/sortiment-list";
import { GoogleMap } from "@/components/google-map";
import { OpeningStatusBadge } from "@/components/opening-status";
import { TestimonialsSection } from "@/components/testimonials-section";
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
      <Section id="tradition" className="bg-paper">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel>01 — Tradition</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                Vier Jahrzehnte an der{" "}
                <em className="italic-display text-brand-red">
                  Zürichstrasse.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7 space-y-6 text-[17px] leading-[1.7] text-ink-soft text-pretty">
              <p>
                Die <strong className="text-ink font-medium">Müller Metzgerei AG zum Rössli</strong> ist
                seit 1984 in Brüttisellen. Kleiner Betrieb, kurze Wege,
                feste Lieferanten.
              </p>
              <p>
                Das Fleisch kommt grösstenteils von Höfen aus der Region. Wurst,
                Aufschnitt und Spezialitäten machen wir in der eigenen Wursterei
                nebenan, nach Rezepten, die teilweise seit den Achtzigern gleich geblieben sind.
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

      {/* SORTIMENT — Theken-Tafel im Druckmenü-Stil */}
      <Section id="sortiment" className="bg-paper-deep py-24 sm:py-32 border-y border-line-soft">
        <Container size="default">
          <div className="grid gap-12 lg:grid-cols-12 mb-14">
            <div className="lg:col-span-7">
              <SectionLabel>02 — Aus der Theke</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
                Was bei uns in der{" "}
                <em className="italic-display text-brand-red">Auslage liegt.</em>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-8">
              <p className="text-base text-ink-soft leading-relaxed text-pretty">
                Sechs Kategorien, das ganze Jahr. Saisonales kommt dazu —
                Wild im Herbst, Bärlauch im Frühling, Chinoise zu Festen.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                Etwas Bestimmtes? <a href={`tel:${site.phoneTel}`} className="text-brand-red hover:underline">{site.phone}</a>
              </p>
            </div>
          </div>
          <SortimentList />
        </Container>
      </Section>

      {/* PARTYSERVICE TEASER */}
      <Section id="partyservice" className="bg-brand-red-deep text-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.18 30) 0%, transparent 70%)" }}
        />
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <SectionLabel>
                <span className="text-brass">03 — Partyservice</span>
              </SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.98] text-balance">
                Genuss, der{" "}
                <em className="italic-display text-brass">verbindet.</em>
              </h2>
              <p className="mt-8 max-w-xl text-lg text-paper/75 leading-relaxed text-pretty">
                Geburtstag, Firmenanlass, Hochzeit, einfach eine grössere Familienrunde:
                über 25 Gerichte aus eigener Produktion, nach Bedarf zusammengestellt
                und am Festtag frisch geliefert.
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 max-w-xl">
                {partyserviceValues.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-brass" />
                    <div>
                      <p className="font-medium text-paper">{v.title}</p>
                      <p className="text-sm text-paper/65 leading-relaxed mt-1">
                        {v.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-4">
                <ButtonLink href="/partyservice" variant="on-dark" size="lg">
                  Menü & Anfrage
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href={`tel:${site.phoneTel}`}
                  external
                  variant="ghost"
                  size="lg"
                  className="!text-paper hover:!bg-paper/10"
                >
                  {site.phone} anrufen
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/photos/hero-fleisch.jpg"
                  alt="Fleischspezialität auf Holzbrett für den Partyservice"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-paper/10 rounded-2xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* ÖFFNUNG + STANDORT */}
      <Section id="besuch" className="bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel>04 — Besuch</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                In{" "}
                <em className="italic-display text-brand-red">Brüttisellen.</em>
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

      <Script
        id="reviews-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.fullName,
          url: site.url,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "3",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Jacqueline Kern" },
              datePublished: "2025-04-20",
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Ich komme extra von Dürnten in diese Metzgerei. Der Weg ist es mir wert, da die Bedienung immer freundlich ist und das allerbeste Fleisch gegeben wird. Einfach Qualität wie von «früher» gewohnt.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Sita Looser" },
              datePublished: "2025-03-12",
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Mit der Bestellung vom wunderbaren Rindsfilet im Teig & den Beilagen (feine Spätzli & saftiges Rotkraut) konnte ich einen entspannten Abend mit meinen Gästen geniessen. Das Essen war unglaublich lecker.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Markus Stapfer" },
              datePublished: "2022-08-08",
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Äusserst freundlich und immer top Qualität. Der Metzger meines Vertrauens. Das Bison-Entrecote war ein Traum.",
            },
          ],
        })}
      </Script>
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
