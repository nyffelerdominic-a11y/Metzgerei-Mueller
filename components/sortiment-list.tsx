import { sortimentCategories } from "@/lib/menu-data";
import { Reveal } from "./ui/reveal";

/**
 * Printed-menu style list of categories — no photo cards. Each category gets
 * a number, a serif title, a short blurb, and a dotted leader. Reads like the
 * folded paper menu at a proper restaurant.
 */
export function SortimentList() {
  return (
    <div className="space-y-2">
      {sortimentCategories.map((cat, i) => (
        <Reveal key={cat.slug} delay={i}>
          <article className="group relative grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4rem_1fr] gap-x-6 sm:gap-x-8 py-7 sm:py-9 border-t border-line/70 first:border-t-0">
            <div className="pt-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-red">
                0{i + 1}
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-4">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-ink">
                  {cat.title}
                </h3>
                <span aria-hidden className="dotted-leader hidden sm:block" />
              </div>
              <p className="mt-3 max-w-2xl text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
                {cat.blurb}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
