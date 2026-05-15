import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Phone } from "lucide-react";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { PartyserviceMenu } from "@/components/partyservice-menu";
import { ContactForm } from "@/components/contact-form";
import { partyserviceValues } from "@/lib/menu-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partyservice",
  description:
    "Partyservice der Müller Metzgerei in Brüttisellen: über 25 hausgemachte Gerichte für Geburtstage, Firmenfeiern und Familienfeste. Beratung, Lieferung, persönlich.",
};

export default function PartyservicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-cream-light">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=2400&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        <Container className="relative py-32 sm:py-40 lg:py-48">
          <div className="max-w-3xl">
            <SectionLabel>
              <span className="!text-gold">Partyservice</span>
            </SectionLabel>
            <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[96px] tracking-tight leading-[0.95] text-balance">
              Genuss, der{" "}
              <em className="italic font-light text-gold">verbindet.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg sm:text-xl text-cream-light/85 leading-relaxed text-pretty">
              Über 25 Gerichte aus unserer hauseigenen Wursterei und Küche.
              Frisch zubereitet, individuell zusammengestellt — für jeden Anlass.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#anfrage" variant="primary" size="lg">
                Anfrage starten
              </ButtonLink>
              <ButtonLink
                href={`tel:${site.phoneTel}`}
                external
                variant="ghost"
                size="lg"
                className="!text-cream-light hover:!bg-cream-light/10"
              >
                <Phone className="size-4" />
                {site.phone}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Werte */}
      <Section className="bg-cream-light">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel>Warum wir</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05] text-balance">
              Vier Gründe, warum unser Partyservice{" "}
              <em className="italic font-light text-brand-red">funktioniert.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {partyserviceValues.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i}
                className="bg-cream-light p-8 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <Sparkles className="size-5 text-brand-red" />
                  <span className="font-mono text-[11px] text-ink-mute">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed text-pretty">
                  {v.body}
                </p>
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
            <ul className="space-y-2 text-[15px] text-ink-soft leading-relaxed">
              <li>
                <strong className="text-ink font-medium">Bestellung:</strong>{" "}
                mindestens 1 Woche vor dem gewünschten Termin.
              </li>
              <li>
                <strong className="text-ink font-medium">Menüs:</strong> Alle
                Vorschläge können individuell angepasst werden — sprechen Sie uns an.
              </li>
              <li>
                <strong className="text-ink font-medium">Service:</strong> Auf
                Wunsch liefern wir oder Sie holen bei uns ab.
              </li>
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* Menü */}
      <Section className="bg-cream-light">
        <Container>
          <Reveal className="mb-16 max-w-3xl">
            <SectionLabel>Menüs</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Unsere{" "}
              <em className="italic font-light text-brand-red">Speisekarte</em>{" "}
              für Ihren Anlass.
            </h2>
          </Reveal>
          <PartyserviceMenu />
        </Container>
      </Section>

      {/* Anfrage */}
      <Section id="anfrage" className="bg-ink text-cream-light relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionLabel>
                <span className="!text-gold">Anfrage</span>
              </SectionLabel>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
                Erzählen Sie uns von Ihrem{" "}
                <em className="italic font-light text-gold">Anlass.</em>
              </h2>
              <p className="mt-6 text-cream-light/75 max-w-md leading-relaxed text-pretty">
                Wir melden uns innerhalb eines Werktags mit einer persönlichen
                Empfehlung. Oder rufen Sie uns direkt an — wir freuen uns auf
                Ihren Anruf.
              </p>
              <div className="mt-10 space-y-1 text-cream-light/85">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="block font-serif text-3xl hover:text-gold transition-colors"
                >
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block text-cream-light/75 hover:text-cream-light transition-colors"
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
    </>
  );
}
