import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Car } from "lucide-react";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";
import { OpeningStatusBadge } from "@/components/opening-status";
import { site } from "@/lib/site";
import { openingHours, orderedWeekdays, weekdayLabels } from "@/lib/opening-hours";

export const metadata: Metadata = {
  title: "Kontakt & Öffnungszeiten — Brüttisellen",
  description:
    "Kontakt, Öffnungszeiten und Anfahrt zur Müller Metzgerei zum Rössli, Zürichstrasse 35, 8306 Brüttisellen.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-red-deep text-paper">
        <Image
          src="/photos/laden-vorne.jpg"
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
            <SectionLabel><span className="!text-brass">Kontakt</span></SectionLabel>
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-[96px] tracking-tight leading-[0.95] text-balance">
              Wie wir{" "}
              <em className="italic-display text-brass">erreichbar sind.</em>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl text-paper/85 leading-relaxed text-pretty">
              Das Büro ist nicht immer besetzt. Bei dringenden Anfragen am
              besten anrufen oder kurz im Laden vorbeikommen. Nicht so
              dringend? Das Formular reicht.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="py-24 bg-paper">
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

      <Section className="bg-cream-light pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <SectionLabel>Parkplätze</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance">
                Direkt unterhalb{" "}
                <em className="italic-display text-brand-red">des Ladens.</em>
              </h2>
              <div className="mt-8 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Die Kundenparkplätze finden Sie unterhalb des Geschäfts an der
                  Zürichstrasse — auf dem Plan rot markiert.
                </p>
                <p className="flex items-start gap-3">
                  <Car className="size-5 mt-1 text-brand-red shrink-0" aria-hidden />
                  <span>
                    Bitte ausschliesslich diese Parkplätze benützen. Die
                    angrenzenden Flächen gehören zu anderen Liegenschaften.
                  </span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src="/photos/parkplatz.png"
                  alt="Lageplan mit den rot markierten Kundenparkplätzen der Müller Metzgerei"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
