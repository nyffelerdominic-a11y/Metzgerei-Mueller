import type { Metadata } from "next";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team der Müller Metzgerei zum Rössli — engagierte Handwerker, die jeden Tag dafür sorgen, dass unsere Spezialitäten schmecken.",
};

const team = [
  {
    initials: "CM",
    name: "Christof Müller",
    role: "Inhaber & Metzgermeister",
    note: "Führt den Betrieb in zweiter Generation.",
  },
  {
    initials: "MM",
    name: "Im Verkauf",
    role: "Beratung & Theke",
    note: "Kennt jedes Stück und jede Geschichte dahinter.",
  },
  {
    initials: "WM",
    name: "Wursterei",
    role: "Produktion",
    note: "Frische Wurstwaren, jeden Morgen aus eigener Hand.",
  },
  {
    initials: "PS",
    name: "Partyservice",
    role: "Beratung & Lieferung",
    note: "Macht aus Ihrem Anlass ein Erlebnis.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Section className="pt-32 sm:pt-40 pb-20 bg-cream-light">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionLabel>Unser Team</SectionLabel>
            <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.95] text-balance">
              Die Menschen{" "}
              <em className="italic font-light text-brand-red">hinter der Theke.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed text-pretty">
              Unser Team motiviert sich jeden Tag aufs Neue, damit Ihnen unsere
              hausgemachten Köstlichkeiten schmecken. Kommen Sie vorbei — wir
              freuen uns auf Ihren Besuch.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-px bg-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i}
                className="bg-cream-light p-8 lg:p-10 flex flex-col"
              >
                <div
                  aria-hidden
                  className="size-20 rounded-full bg-brand-red text-cream-light flex items-center justify-center font-serif text-2xl tracking-tight"
                >
                  {m.initials}
                </div>
                <p className="mt-6 font-serif text-2xl tracking-tight">
                  {m.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-red">
                  {m.role}
                </p>
                <p className="mt-4 text-[15px] text-ink-soft leading-relaxed text-pretty">
                  {m.note}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-mute">
              Team-Fotos folgen
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-cream-light">
        <Container size="narrow">
          <Reveal className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-[1.15] text-balance">
              Werden Sie Teil unseres Teams?
            </h2>
            <p className="mt-4 text-ink-soft text-pretty">
              Wir freuen uns über Initiativbewerbungen — egal ob Metzgerei,
              Verkauf oder Partyservice.
            </p>
            <div className="mt-8">
              <ButtonLink href="/kontakt" variant="primary" size="lg">
                Kontakt aufnehmen
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
