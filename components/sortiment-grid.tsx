import { sortimentCategories } from "@/lib/menu-data";
import { Reveal } from "./ui/reveal";
import Image from "next/image";

const IMAGES: Record<string, string> = {
  charcuterie:
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1600&q=80&auto=format&fit=crop",
  wurstwaren:
    "https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=1600&q=80&auto=format&fit=crop",
  grilladen:
    "https://images.unsplash.com/photo-1558030006-450675393462?w=1600&q=80&auto=format&fit=crop",
  fleischstuecke:
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1600&q=80&auto=format&fit=crop",
  saisonal:
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80&auto=format&fit=crop",
  znueni:
    "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1600&q=80&auto=format&fit=crop",
};

export function SortimentGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[280px]">
      {sortimentCategories.map((cat, i) => {
        const span =
          i === 0
            ? "lg:col-span-7 lg:row-span-2"
            : i === 1
              ? "lg:col-span-5 lg:row-span-1"
              : i === 2
                ? "lg:col-span-5 lg:row-span-1"
                : "lg:col-span-4 lg:row-span-1";

        return (
          <Reveal
            key={cat.slug}
            delay={i}
            className={`group relative overflow-hidden rounded-2xl bg-ink text-cream-light min-h-[260px] ${span}`}
          >
            <Image
              src={IMAGES[cat.slug]}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-55 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/30" />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream-light/10 rounded-2xl pointer-events-none" />
            <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-light/60">
                0{i + 1} / Sortiment
              </span>
              <h3
                className={`mt-3 font-serif tracking-tight text-cream-light ${
                  i === 0 ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
                }`}
              >
                {cat.title}
              </h3>
              <p className="mt-2 max-w-md text-sm sm:text-[15px] text-cream-light/75 text-pretty leading-relaxed">
                {cat.blurb}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
