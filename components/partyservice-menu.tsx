import { partyserviceMenu } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";
import { Reveal } from "./ui/reveal";

export function PartyserviceMenu() {
  return (
    <div className="space-y-24">
      {partyserviceMenu.map((section, sIdx) => (
        <section key={section.id} id={section.id}>
          <Reveal className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b border-line pb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-red">
                Menü 0{sIdx + 1}
              </span>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
                {section.title}
              </h3>
              <p className="mt-2 text-ink-soft max-w-2xl text-pretty">
                {section.subtitle}
              </p>
            </div>
            {section.note && (
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-mute whitespace-nowrap">
                {section.note}
              </span>
            )}
          </Reveal>

          <ul className="divide-y divide-line/70">
            {section.items.map((item, i) => (
              <Reveal
                key={item.name}
                as="li"
                delay={i % 4}
                className="group flex items-baseline justify-between gap-6 py-5"
              >
                <div className="min-w-0">
                  <p className="font-serif text-lg sm:text-xl text-ink leading-snug group-hover:text-brand-red transition-colors duration-200">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed text-pretty">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="flex items-baseline gap-1 font-mono shrink-0 tabular-nums">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-ink-mute">
                    CHF
                  </span>
                  <span className="text-lg text-ink">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      ))}

      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-mute text-center pt-4">
        * Preise je nach Saison und Verfügbarkeit
      </p>
    </div>
  );
}
