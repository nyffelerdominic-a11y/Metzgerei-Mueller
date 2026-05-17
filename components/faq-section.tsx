import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Ab wie vielen Personen lohnt sich der Partyservice?",
    answer:
      "Ab etwa 10 Personen. Nach oben hatten wir schon Anlässe mit 200 Gästen. Rufen Sie an, wir besprechen, was Sinn macht.",
  },
  {
    question: "Welche Menüs bietet ihr an?",
    answer:
      "Über 25 verschiedene: Grillplatten, Festtagsbraten, Wurst- und Käseplatten, vegetarische Varianten. Stellen wir gerne nach Ihren Vorgaben zusammen.",
  },
  {
    question: "Liefert ihr auch nach Zürich oder weiter weg?",
    answer:
      "Zürich, Glattal und Brüttisellen liefern wir regulär. Weiter weg geht meistens auch, fragen Sie einfach.",
  },
  {
    question: "Wie früh muss ich bestellen?",
    answer:
      "Bei kleineren Anlässen reichen ein paar Tage. Ab 50 Gästen oder rund um Festtage sind zwei bis drei Wochen Vorlauf empfehlenswert.",
  },
  {
    question: "Berücksichtigt ihr Allergien oder spezielle Wünsche?",
    answer:
      "Ja. Sagen Sie uns, was geht und was nicht. Wir finden meistens eine Lösung.",
  },
  {
    question: "Kommt Besteck und Geschirr mit?",
    answer:
      "Das Essen kommt in Transportbehältern. Besteck und Geschirr können Sie auf Wunsch dazubuchen.",
  },
  {
    question: "Wie bestelle ich?",
    answer:
      "Telefon 044 833 25 05, E-Mail an metzgmue@bluewin.ch oder über das Kontaktformular. Persönliches Gespräch ist am einfachsten.",
  },
  {
    question: "Was wird am häufigsten bestellt?",
    answer:
      "Die Grillplatte (gemischt mit Würsten und Fleisch) und das Festtagsbraten-Paket. Die Charcuterie-Platte läuft auch gut.",
  },
];

export function FAQSection() {
  return (
    <Section className="bg-cream py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionLabel>Häufig gefragt</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Fragen zum{" "}
            <em className="italic-display text-brand-red">Partyservice.</em>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6 max-w-3xl">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={Math.min(i, 3)}>
              <div className="rounded-xl border border-line bg-cream-light p-6">
                <h3 className="font-serif text-xl text-ink">{item.question}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3} className="mt-12">
          <div className="rounded-xl border-2 border-brand-red bg-brand-red/5 p-8 text-center">
            <p className="text-ink">
              Frage nicht dabei?{" "}
              <a
                href="/kontakt"
                className="font-medium text-brand-red hover:text-brand-red-dark transition-colors"
              >
                Schreiben Sie uns.
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
