import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Die Metzgerei",
  description:
    "Seit über 40 Jahren steht die Müller Metzgerei AG zum Rössli in Brüttisellen für ehrliches Handwerk, regionale Lieferanten und hauseigene Wursterei.",
};

export default function MetzgereiPage() {
  return (
    <>
      <Section className="pt-32 sm:pt-40 pb-16 bg-cream-light">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionLabel>Die Metzgerei</SectionLabel>
              <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.95] text-balance">
                Vier Jahrzehnte{" "}
                <em className="italic font-light text-brand-red">Handwerk.</em>
              </h1>
              <p className="mt-8 text-lg text-ink-soft leading-relaxed text-pretty">
                Mitten in Brüttisellen, direkt an der Zürichstrasse, steht
                unsere Metzgerei seit über 40 Jahren für ehrliches Handwerk und
                kompromisslose Qualität. Was als kleiner Familienbetrieb begann,
                ist heute eine feste Adresse für Geniesserinnen und Geniesser
                aus der ganzen Region.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1400&q=80&auto=format&fit=crop"
                  alt="Theke der Müller Metzgerei"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6 lg:order-2">
              <SectionLabel>01 — Herkunft</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance">
                Fleisch von Bauern, die wir{" "}
                <em className="italic font-light text-brand-red">kennen.</em>
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty">
                Unser Fleisch stammt grösstenteils von Landwirtschafts­betrieben
                aus unserer Region. Kurze Wege, faire Preise, transparente
                Haltung. Wir wissen, woher unsere Produkte kommen — und das
                schmecken Sie in jedem Stück.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:order-1">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1400&q=80&auto=format&fit=crop"
                  alt="Regionale Bauernschaft"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-light">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <SectionLabel>02 — Wursterei</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance">
                Hauseigene Produktion —{" "}
                <em className="italic font-light text-brand-red">täglich frisch.</em>
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty">
                Sämtliche Wurstwaren und Spezialitäten werden in unserem eigenen
                Wurstereibetrieb hergestellt. Nach traditionellen Rezepten,
                aber mit modernen Standards. Vom Cervelat bis zur Saisonwurst —
                alles aus eigener Hand.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=1400&q=80&auto=format&fit=crop"
                  alt="Wurstwaren aus eigener Herstellung"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-cream-light">
        <Container size="narrow">
          <Reveal className="text-center">
            <SectionLabel>
              <span className="!text-gold mx-auto">Versprechen</span>
            </SectionLabel>
            <p className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-balance">
              «Verarbeitung von erstklassigen Produkten und Zufriedenheit unserer
              Kundinnen und Kunden stehen bei uns an erster Stelle.»
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-cream-light/60">
              — Müller Metzgerei
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
