import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Über uns — 40 Jahre Metzgerei in Brüttisellen",
  description:
    "Die Müller Metzgerei AG zum Rössli: Familienbetrieb seit 1984, hauseigene Wursterei, Fleisch von Bauern aus der Region. Lernen Sie das Team kennen.",
};

const team = [
  {
    slug: "christof-mueller",
    initials: "CM",
    name: "Christof Müller",
    role: "Inhaber & Metzgermeister",
    note: "Führt den Betrieb in zweiter Generation. Spezialgebiet: Wurstrezepturen und Einkauf bei den Bauern.",
  },
  {
    slug: "urs-meier",
    initials: "UM",
    name: "Urs Meier",
    role: "Metzger & Wurstmeister",
    note: "25 Jahre in der Wursterei. Verantwortlich für Cervelat, Schüblig und die Saisonwürste.",
  },
  {
    slug: "sandra-brandes",
    initials: "SB",
    name: "Sandra Brandes",
    role: "Verkauf & Beratung",
    note: "An der Theke seit 2009. Weiss, was zum Sonntagsbraten passt und was Stammkunden mögen.",
  },
  {
    slug: "marco-peronaci",
    initials: "MP",
    name: "Marco Peronaci",
    role: "Partyservice",
    note: "Plant Anlässe von 10 bis 200 Gästen. Liefert pünktlich, auch wenn es kompliziert wird.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-red-deep text-paper">
        <Image
          src="/photos/theke-vitrine.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-brand-red-deep/40" />
        <Container className="relative py-24 sm:py-32 lg:py-48">
          <Reveal className="max-w-3xl">
            <SectionLabel><span className="!text-brass">Über uns</span></SectionLabel>
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-[96px] tracking-tight leading-[0.95] text-balance">
              Seit 1984 an der{" "}
              <em className="italic-display text-brass">Zürichstrasse.</em>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl text-paper/85 leading-relaxed text-pretty">
              Wir sind ein Familienbetrieb mitten in Brüttisellen. Vier
              Jahrzehnte, zwei Generationen, ein kleines Team. Was wir
              machen und wer hier arbeitet – auf einer Seite.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6 lg:order-2">
              <SectionLabel>01 — Herkunft</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance">
                Fleisch von Bauern, die wir{" "}
                <em className="italic-display text-brand-red">kennen.</em>
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty">
                Der grösste Teil unseres Fleisches kommt von Höfen aus der
                Region. Kurze Wege, faire Preise, klare Haltungsbedingungen.
                Wenn jemand fragt, woher das Schwein kommt, können wir es ihm
                sagen.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:order-1">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
                <Image
                  src="/photos/pexels-mohamed9380-36850023.jpg"
                  alt="Rohe Rindssteaks aus regionaler Aufzucht, angerichtet mit Rosmarin"
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
                Würste machen wir{" "}
                <em className="italic-display text-brand-red">selber.</em>
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty">
                Cervelat, Schüblig, Bratwurst, Bündnerfleisch, Bärlauchwurst zur
                Saison. Alles entsteht in unserer Wursterei nebenan. Die Rezepte
                stammen aus dem ersten Betriebsjahr, ein paar haben wir über
                die Jahre angepasst.
              </p>
              <p className="mt-4 text-lg text-ink-soft leading-relaxed text-pretty">
                Keine künstlichen Geschmacksverstärker, keine fertigen Würzmischungen.
                Wer dabei zuschauen will, darf gerne kurz hinter die Theke schauen,
                wenn es die Zeit erlaubt.
              </p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Image
                  src="/photos/kueche.jpg"
                  alt="Verarbeitungsküche der Müller Metzgerei"
                  fill
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
          <Reveal className="max-w-3xl">
            <SectionLabel>03 — Das Team</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Die Menschen{" "}
              <em className="italic-display text-brand-red">hinter der Theke.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed text-pretty">
              Vier Köpfe, zusammen rund 80 Jahre Erfahrung. Kurz vorgestellt:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px bg-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i}>
                <Link
                  href={`/ueber-uns/${m.slug}`}
                  className="bg-cream-light p-8 lg:p-10 flex flex-col h-full hover:bg-cream-paper transition-colors group"
                >
                  <div
                    aria-hidden
                    className="size-20 rounded-full bg-brand-red text-cream-light flex items-center justify-center font-serif text-2xl tracking-tight"
                  >
                    {m.initials}
                  </div>
                  <p className="mt-6 font-serif text-2xl tracking-tight group-hover:text-brand-red transition-colors">
                    {m.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-red">
                    {m.role}
                  </p>
                  <p className="mt-4 text-base text-ink-soft leading-relaxed text-pretty">
                    {m.note}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-red-deep text-paper">
        <Container size="narrow">
          <Reveal className="text-center">
            <SectionLabel>
              <span className="!text-brass mx-auto">Versprechen</span>
            </SectionLabel>
            <p className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-balance">
              «Gute Rohware, sauberes Handwerk, zufriedene Kundschaft. Mehr
              müssen wir nicht versprechen.»
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">
              — Christof Müller
            </p>
            <div className="mt-12">
              <ButtonLink href="/kontakt" variant="on-dark" size="lg">
                Vorbeikommen oder anrufen
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
