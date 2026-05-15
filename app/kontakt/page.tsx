import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";
import { OpeningStatusBadge } from "@/components/opening-status";
import { site } from "@/lib/site";
import { openingHours, orderedWeekdays, weekdayLabels } from "@/lib/opening-hours";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt, Öffnungszeiten und Anfahrt zur Müller Metzgerei zum Rössli, Zürichstrasse 35, 8306 Brüttisellen.",
};

export default function KontaktPage() {
  return (
    <>
      <Section className="pt-32 sm:pt-40 pb-16 bg-cream-light">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionLabel>Kontakt</SectionLabel>
            <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.95] text-balance">
              Sprechen wir{" "}
              <em className="italic font-light text-brand-red">miteinander.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed text-pretty">
              Da unser Büro nicht durchgehend besetzt ist, bitten wir Sie,
              dringende Anfragen telefonisch zu stellen. Selbstverständlich
              können Sie uns Ihre Wünsche auch direkt im Laden mitteilen.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-4 pb-24 bg-cream-light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5 space-y-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                  Direktkontakt
                </p>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="group flex items-start gap-4"
                    >
                      <Phone className="size-5 mt-1.5 text-brand-red shrink-0" />
                      <div>
                        <p className="font-serif text-2xl text-ink group-hover:text-brand-red transition-colors">
                          {site.phone}
                        </p>
                        <p className="text-sm text-ink-mute">Telefon</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="group flex items-start gap-4"
                    >
                      <Mail className="size-5 mt-1.5 text-brand-red shrink-0" />
                      <div>
                        <p className="text-lg text-ink group-hover:text-brand-red transition-colors break-all">
                          {site.email}
                        </p>
                        <p className="text-sm text-ink-mute">E-Mail</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="size-5 mt-1.5 text-brand-red shrink-0" />
                    <div>
                      <p className="text-lg text-ink">{site.address.street}</p>
                      <p className="text-ink-soft">
                        {site.address.postal} {site.address.city}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute mb-4">
                  Öffnungszeiten
                </p>
                <OpeningStatusBadge />
                <dl className="mt-6 space-y-2.5">
                  {orderedWeekdays.map((day) => {
                    const slots = openingHours[day];
                    return (
                      <div
                        key={day}
                        className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2 last:border-0"
                      >
                        <dt className="text-ink">{weekdayLabels[day]}</dt>
                        <dd className="font-mono text-sm text-ink-soft text-right">
                          {slots.length === 0
                            ? "Geschlossen"
                            : slots.map((s) => `${s.open}–${s.close}`).join("  ·  ")}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <ContactForm variant="general" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream pt-0 pb-24">
        <Container>
          <Reveal>
            <GoogleMap className="h-[480px]" />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
