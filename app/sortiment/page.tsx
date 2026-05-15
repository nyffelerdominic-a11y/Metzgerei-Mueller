import type { Metadata } from "next";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SortimentGrid } from "@/components/sortiment-grid";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sortiment",
  description:
    "Charcuterie, Wurstwaren, Grilladen, Saisonales: Das Sortiment der Müller Metzgerei zum Rössli — handwerklich gefertigt, regional bezogen.",
};

export default function SortimentPage() {
  return (
    <>
      <Section className="pt-32 sm:pt-40 pb-12 bg-cream-light">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionLabel>Sortiment</SectionLabel>
            <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.98] text-balance">
              Aus eigener{" "}
              <em className="italic font-light text-brand-red">Wursterei.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed text-pretty">
              Das tägliche Angebot wechselt mit der Saison. Hier ein Überblick
              über die Kategorien, die Sie bei uns finden — viele Spezialitäten
              entstehen direkt nebenan in unserer Wursterei.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-4 pb-24 bg-cream-light">
        <Container size="wide">
          <SortimentGrid />
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container size="narrow">
          <Reveal className="text-center">
            <SectionLabel>
              <span className="mx-auto">Persönlich</span>
            </SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05] text-balance">
              Etwas Bestimmtes im Sinn?
            </h2>
            <p className="mt-6 text-lg text-ink-soft text-pretty">
              Auf Wunsch besorgen wir fast alles. Fragen Sie uns nach
              Sonderwünschen, speziellen Stücken oder grösseren Mengen — wir
              kümmern uns darum.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href={`tel:${site.phoneTel}`} external variant="primary" size="lg">
                {site.phone}
              </ButtonLink>
              <ButtonLink href="/kontakt" variant="outline" size="lg">
                Nachricht schreiben
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
