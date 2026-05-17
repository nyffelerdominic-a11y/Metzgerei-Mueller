import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  occasion?: string;
}

const featured: Testimonial = {
  quote:
    "Ich komme extra von Dürnten in diese Metzgerei. Der Weg ist es mir wert, da die Bedienung immer freundlich ist und das allerbeste Fleisch gegeben wird. Einfach Qualität wie von «früher» gewohnt.",
  author: "Jacqueline Kern",
  occasion: "Google-Bewertung · Local Guide",
};

const sideTestimonials: Testimonial[] = [
  {
    quote:
      "Mit der Bestellung vom wunderbaren Rindsfilet im Teig & den Beilagen (feine Spätzli & saftiges Rotkraut) konnte ich einen entspannten Abend mit meinen Gästen geniessen.",
    author: "Sita Looser",
    occasion: "Partyservice",
  },
  {
    quote:
      "Äusserst freundlich und immer top Qualität. Der Metzger meines Vertrauens. Das Bison-Entrecote war ein Traum.",
    author: "Markus Stapfer",
    occasion: "Google-Bewertung",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((j) => (
        <Star
          key={j}
          className="size-4 fill-brand-red text-brand-red"
          aria-hidden
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section className="bg-paper-deep py-24 sm:py-32 border-y border-line-soft">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end mb-14">
          <Reveal className="lg:col-span-7">
            <SectionLabel>Kundenstimmen</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Stimmen aus der{" "}
              <em className="italic-display text-brand-red">Kundschaft.</em>
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
              Auswahl aus 50+ Google-Bewertungen · 4.9 Sterne
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured quote — taller, left */}
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <article className="relative h-full rounded-2xl border border-line bg-white p-10 lg:p-14 flex flex-col overflow-hidden">
              <Quote
                aria-hidden
                className="absolute top-8 right-8 size-16 text-brand-red/10"
                strokeWidth={1}
              />
              <Stars />
              <p className="mt-8 font-serif text-2xl sm:text-3xl lg:text-[2.1rem] leading-[1.25] text-ink text-pretty flex-1">
                {featured.quote}
              </p>
              <div className="mt-10 pt-6 border-t border-line/60">
                <p className="font-serif text-lg text-ink">{featured.author}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                  {featured.occasion}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Two stacked side quotes — right */}
          {sideTestimonials.map((t, i) => (
            <Reveal key={t.author} delay={i + 1} className="lg:col-span-5">
              <article className="h-full rounded-2xl border border-line bg-white p-8 flex flex-col">
                <Stars />
                <p className="mt-5 text-ink-soft leading-relaxed flex-1 text-pretty">
                  «{t.quote}»
                </p>
                <div className="mt-6">
                  <p className="font-serif text-base text-ink">{t.author}</p>
                  {t.occasion && (
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                      {t.occasion}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
