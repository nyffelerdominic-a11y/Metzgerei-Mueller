import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Award, Phone } from "lucide-react";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { PartyserviceMenu } from "@/components/partyservice-menu";
import { ContactForm } from "@/components/contact-form";
import { FAQSection } from "@/components/faq-section";
import { partyserviceValues } from "@/lib/menu-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partyservice Zürich — 25+ Menüs von der Metzgerei",
  description:
    "Partyservice & Catering der Müller Metzgerei in Brüttisellen: über 25 hausgemachte Menüs für Geburtstage, Hochzeiten und Firmenfeiern. Lieferung in Zürich & Ostschweiz. Persönliche Beratung.",
};

export default function PartyservicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-red-deep text-paper">
        <Image
          src="/photos/theke-wurst.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        <Container className="relative py-24 sm:py-32 lg:py-48">
          <div className="max-w-3xl">
            <SectionLabel>
              <span className="!text-brass">Partyservice</span>
            </SectionLabel>
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-[96px] tracking-tight leading-[0.95] text-balance">
              Genuss, der{" "}
              <em className="italic-display text-brass">verbindet.</em>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl text-paper/85 leading-relaxed text-pretty">
              Über 25 Gerichte aus eigener Wursterei und Küche. Nach Bedarf
              zusammengestellt, am Festtag frisch geliefert.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <ButtonLink href="#anfrage" variant="on-dark" size="lg" className="w-full sm:w-auto">
                Anfrage starten
              </ButtonLink>
              <ButtonLink
                href={`tel:${site.phoneTel}`}
                external
                variant="ghost"
                size="lg"
                className="!text-paper border border-paper/30 hover:!bg-paper/10 w-full sm:w-auto sm:border-0"
              >
                <Phone className="size-4" />
                {site.phone}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Menü — direkt nach Hero */}
      <Section className="bg-paper">
        <Container>
          <Reveal className="mb-16 max-w-3xl">
            <SectionLabel>Menüs</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Die{" "}
              <em className="italic-display text-brand-red">Speisekarte.</em>
            </h2>
          </Reveal>
          <PartyserviceMenu />
        </Container>
      </Section>

      {/* Werte */}
      <Section className="bg-paper-deep border-y border-line-soft">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel>Warum wir</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05] text-balance">
              Was Sie von uns erwarten{" "}
              <em className="italic-display text-brand-red">können.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {/* Feature card — tall, left */}
            <Reveal className="lg:col-span-7 lg:row-span-3 group relative rounded-2xl border border-line bg-white p-10 lg:p-14 flex flex-col">
              <div className="flex items-start justify-between">
                <Award className="size-7 text-brand-red" strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                  01
                </span>
              </div>
              <h3 className="mt-8 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-balance">
                {partyserviceValues[0].title}
              </h3>
              <p className="mt-6 max-w-md text-lg text-ink-soft leading-relaxed text-pretty flex-1">
                {partyserviceValues[0].body}
              </p>
              <div className="mt-10 pt-6 border-t border-line/60 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                Erfahrung aus 30+ Jahren Anlässe
              </div>
            </Reveal>

            {/* Three smaller cards — right stacked */}
            {partyserviceValues.slice(1).map((v, idx) => (
              <Reveal
                key={v.title}
                delay={idx + 1}
                className="lg:col-span-5 group relative rounded-2xl border border-line bg-white p-8 flex gap-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute pt-1 shrink-0">
                  0{idx + 2}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl tracking-tight leading-[1.1] text-balance">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-base text-ink-soft leading-relaxed text-pretty">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Allgemeines */}
      <Section className="bg-cream py-16 sm:py-20">
        <Container size="narrow">
          <Reveal className="rounded-2xl border border-brand-red/20 bg-brand-red/[0.04] p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-red mb-3">
              Gut zu wissen
            </p>
            <ul className="space-y-2 text-base text-ink-soft leading-relaxed">
              <li>
                <strong className="text-ink font-medium">Bestellung:</strong>{" "}
                mindestens eine Woche im Voraus.
              </li>
              <li>
                <strong className="text-ink font-medium">Menüs:</strong> Alle
                Vorschläge sind anpassbar. Sagen Sie, was Sie brauchen.
              </li>
              <li>
                <strong className="text-ink font-medium">Service:</strong>{" "}
                Lieferung oder Abholung, beides geht.
              </li>
              <li>
                <strong className="text-ink font-medium">Liefergebiet:</strong>{" "}
                Zürich, Glattal, Brüttisellen und Umgebung. Weiter weg auf Anfrage.
              </li>
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQSection />

      {/* Anfrage */}
      <Section id="anfrage" className="bg-brand-red-deep text-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionLabel>
                <span className="!text-brass">Anfrage</span>
              </SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
                Was ist der{" "}
                <em className="italic-display text-brass">Anlass?</em>
              </h2>
              <p className="mt-6 text-paper/75 max-w-md leading-relaxed text-pretty">
                Antwort meistens innerhalb eines Werktags. Wer es schneller will,
                ruft direkt an.
              </p>
              <div className="mt-10 space-y-1 text-paper/85">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="block font-serif text-3xl hover:text-brass transition-colors"
                >
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block text-paper/75 hover:text-paper transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
            <div className="lg:col-span-7 text-ink">
              <ContactForm variant="partyservice" />
            </div>
          </div>
        </Container>
      </Section>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Ab wie vielen Personen lohnt sich der Partyservice?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ab etwa 10 Personen. Nach oben hatten wir schon Anlässe mit 200 Gästen. Rufen Sie an, wir besprechen, was Sinn macht.",
              },
            },
            {
              "@type": "Question",
              name: "Welche Menüs bietet ihr an?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Über 25 verschiedene: Grillplatten, Festtagsbraten, Wurst- und Käseplatten, vegetarische Varianten. Stellen wir gerne nach Ihren Vorgaben zusammen.",
              },
            },
            {
              "@type": "Question",
              name: "Liefert ihr auch nach Zürich oder weiter weg?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zürich, Glattal und Brüttisellen liefern wir regulär. Weiter weg geht meistens auch, fragen Sie einfach.",
              },
            },
            {
              "@type": "Question",
              name: "Wie früh muss ich bestellen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bei kleineren Anlässen reichen ein paar Tage. Ab 50 Gästen oder rund um Festtage sind zwei bis drei Wochen Vorlauf empfehlenswert.",
              },
            },
            {
              "@type": "Question",
              name: "Berücksichtigt ihr Allergien oder spezielle Wünsche?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Sagen Sie uns, was geht und was nicht. Wir finden meistens eine Lösung.",
              },
            },
            {
              "@type": "Question",
              name: "Kommt Besteck und Geschirr mit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Das Essen kommt in Transportbehältern. Besteck und Geschirr können Sie auf Wunsch dazubuchen.",
              },
            },
            {
              "@type": "Question",
              name: "Wie bestelle ich?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Telefon 044 833 25 05, E-Mail an metzgmue@bluewin.ch oder über das Kontaktformular.",
              },
            },
            {
              "@type": "Question",
              name: "Was wird am häufigsten bestellt?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Die Grillplatte (gemischt mit Würsten und Fleisch) und das Festtagsbraten-Paket. Die Charcuterie-Platte läuft auch gut.",
              },
            },
          ],
        })}
      </Script>
    </>
  );
}
