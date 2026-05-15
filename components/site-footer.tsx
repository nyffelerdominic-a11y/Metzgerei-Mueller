import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { OpeningStatusBadge } from "./opening-status";
import { orderedWeekdays, openingHours, weekdayLabels } from "@/lib/opening-hours";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-brand-navy text-cream-light overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="bg-cream-light rounded-full p-1">
                <Image
                  src="/logo.png"
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 rounded-full"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-bold tracking-tight uppercase">
                  Müller Metzgerei
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
                  ★ zum Rössli · seit 1984
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-cream-light/75 leading-relaxed text-pretty">
              {site.description}
            </p>
            <div className="mt-6">
              <OpeningStatusBadge className="text-cream-light/70" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-light/50">
              Kontakt
            </p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-3 hover:text-cream-light/100 text-cream-light/85 transition-colors"
                >
                  <Phone className="size-4 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 hover:text-cream-light/100 text-cream-light/85 transition-colors break-all"
                >
                  <Mail className="size-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-cream-light/85">
                <MapPin className="size-4 shrink-0 mt-1" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postal} {site.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-light/50">
              Seiten
            </p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-light/85 hover:text-cream-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-light/50">
              Öffnungszeiten
            </p>
            <ul className="mt-4 space-y-1.5 text-[13px] font-mono">
              {orderedWeekdays.map((day) => {
                const slots = openingHours[day];
                return (
                  <li
                    key={day}
                    className="flex justify-between gap-3 text-cream-light/80"
                  >
                    <span>{weekdayLabels[day].slice(0, 2)}</span>
                    <span className="text-right">
                      {slots.length === 0
                        ? "geschlossen"
                        : slots
                            .map((s) => `${s.open}–${s.close}`)
                            .join(" · ")}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream-light/15 pt-8 text-xs text-cream-light/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName} · MWST {site.vat}
          </p>
          <p className="font-mono">Postkonto {site.postal}</p>
        </div>
      </div>
    </footer>
  );
}
