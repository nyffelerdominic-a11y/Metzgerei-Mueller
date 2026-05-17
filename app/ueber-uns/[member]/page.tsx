import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  experience: string;
  joined: string;
}

const teamMembers: TeamMember[] = [
  {
    slug: "christof-mueller",
    name: "Christof Müller",
    role: "Inhaber & Metzgermeister",
    bio: "Christof Müller hat den Betrieb von seinen Eltern übernommen und führt ihn heute in zweiter Generation. Er kennt die meisten Bauern, von denen das Fleisch kommt, persönlich. Beim Einkauf, beim Zerlegen und in der Wursterei steht er noch selbst am Tisch.",
    specialties: [
      "Wurstrezepturen",
      "Einkauf bei Bauern",
      "Betriebsführung",
      "Qualitätskontrolle",
    ],
    experience: "Über 30 Jahre im Beruf",
    joined: "1990er Jahre",
  },
  {
    slug: "urs-meier",
    name: "Urs Meier",
    role: "Metzger & Wurstmeister",
    bio: "Urs Meier ist seit 1999 dabei und verantwortet die Wursterei. Cervelat, Schüblig, Bratwurst, Saisonspezialitäten – das meiste geht durch seine Hände. Er hat schon ein paar Lehrlinge ausgebildet und gibt sein Wissen gerne weiter.",
    specialties: [
      "Wurstherstellung",
      "Saisonspezialitäten",
      "Rauchen & Pökeln",
      "Lehrlingsausbildung",
    ],
    experience: "25 Jahre Handwerk",
    joined: "1999",
  },
  {
    slug: "sandra-brandes",
    name: "Sandra Brandes",
    role: "Verkauf & Beratung",
    bio: "Sandra Brandes steht seit 2009 an unserer Theke. Sie kennt das Sortiment auswendig, weiss bei den Stammkunden meist schon, was sie wollen, und gibt gute Tipps, wenn jemand etwas Neues ausprobieren möchte.",
    specialties: [
      "Kundenberatung",
      "Theke & Verkauf",
      "Partyservice-Annahme",
      "Bestellungen",
    ],
    experience: "15 Jahre an der Theke",
    joined: "2009",
  },
  {
    slug: "marco-peronaci",
    name: "Marco Peronaci",
    role: "Partyservice",
    bio: "Marco Peronaci koordiniert den Partyservice. Von der ersten Anfrage über die Menüberatung bis zur Lieferung am Festtag läuft alles über ihn. Er rechnet vorausschauend, hat einen Plan B im Kopf und liefert pünktlich.",
    specialties: [
      "Menüplanung",
      "Eventberatung",
      "Lieferlogistik",
      "Buffet-Aufbau",
    ],
    experience: "12 Jahre in der Branche",
    joined: "2012",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ member: string }>;
}): Promise<Metadata> {
  const { member: slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return {};

  return {
    title: `${member.name} — ${member.role} | Müller Metzgerei`,
    description: `${member.name}, ${member.role} der Müller Metzgerei. ${member.experience}.`,
  };
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    member: member.slug,
  }));
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ member: string }>;
}) {
  const { member: slug } = await params;
  const teamMember = teamMembers.find((m) => m.slug === slug);

  if (!teamMember) {
    notFound();
  }

  return (
    <>
      <Section className="pt-32 sm:pt-40 pb-20 bg-cream-light">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <ButtonLink
                href="/ueber-uns"
                variant="ghost"
                size="sm"
                className="!text-ink-mute hover:!text-ink mb-6 inline-flex gap-2"
              >
                <ArrowLeft className="size-4" />
                Zurück
              </ButtonLink>
            </Reveal>
            <Reveal>
              <SectionLabel>Team</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.95] text-balance">
                {teamMember.name}
              </h1>
              <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.15em] text-brand-red">
                {teamMember.role}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel>
                Über {teamMember.name.split(" ")[0]}
              </SectionLabel>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty">
                {teamMember.bio}
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-12">
              <h2 className="font-serif text-2xl tracking-tight mb-4">
                Erfahrung & Schwerpunkte
              </h2>
              <dl className="space-y-6">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute mb-2">
                    Erfahrung
                  </dt>
                  <dd className="text-ink-soft">{teamMember.experience}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute mb-2">
                    Im Team seit
                  </dt>
                  <dd className="text-ink-soft">{teamMember.joined}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute mb-2">
                    Schwerpunkte
                  </dt>
                  <dd className="text-ink-soft">
                    <ul className="space-y-1">
                      {teamMember.specialties.map((specialty) => (
                        <li key={specialty}>• {specialty}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-light">
        <Container size="narrow">
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight mb-4">
              Fragen?
            </h2>
            <p className="text-ink-soft mb-6">
              Rufen Sie an oder kommen Sie vorbei.
            </p>
            <ButtonLink href="/kontakt" variant="primary">
              Kontakt
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
