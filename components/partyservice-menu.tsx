import { partyserviceMenu } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";
import { Reveal } from "./ui/reveal";

const ROMAN = ["I", "II", "III", "IV"];

export function PartyserviceMenu() {
  return (
    <div className="space-y-28">
      {partyserviceMenu.map((section, sIdx) => (
        <section key={section.id} id={section.id} className="relative">
          {/* Ornamental section header */}
          <Reveal className="mb-12">
            <div className="flex items-center gap-6">
              <span className="font-display-tall text-7xl sm:text-9xl text-brand-red leading-none">
                {ROMAN[sIdx]}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 text-brand-red font-mono text-[10px] uppercase tracking-[0.3em]">
                  <span className="h-px flex-1 bg-brand-red/40" />
                  Menü {ROMAN[sIdx]}
                  <span className="h-px flex-1 bg-brand-red/40" />
                </div>
                <h3 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
                  {section.title}
                </h3>
                <p className="mt-3 italic font-serif text-ink-soft text-[15px] text-pretty">
                  {section.subtitle}
                </p>
                {section.note && (
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                    {section.note}
                  </p>
                )}
              </div>
            </div>
            <div className="rule-double mt-8" />
          </Reveal>

          {/* Menu items as printed menu — dotted leaders */}
          <div className="space-y-2">
            {section.items.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i % 5}
                className="group grid grid-cols-[2rem_1fr] sm:grid-cols-[2.5rem_1fr] gap-x-4 py-4 border-b border-line-soft last:border-b-0 transition-colors duration-200"
              >
                <span className="font-mono text-xs tabular-nums uppercase tracking-wider text-ink-mute pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-baseline gap-3 min-w-0">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif text-lg sm:text-xl text-ink leading-snug group-hover:text-brand-red transition-colors duration-200">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="mt-1 text-sm text-ink-soft italic font-serif leading-relaxed text-pretty">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span aria-hidden className="dotted-leader hidden sm:block" />
                  <span className="font-mono text-base tabular-nums text-ink shrink-0 pt-1 whitespace-nowrap">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-mute mr-1.5 align-middle">
                      CHF
                    </span>
                    {formatPrice(item.price)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* Footer note */}
      <div className="text-center">
        <div className="inline-flex items-center gap-4 text-brand-red font-mono text-[10px] uppercase tracking-[0.3em]">
          <span className="h-px w-12 bg-brand-red/40" />
          <span>* Preise je nach Saison & Verfügbarkeit</span>
          <span className="h-px w-12 bg-brand-red/40" />
        </div>
      </div>
    </div>
  );
}
