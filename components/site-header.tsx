"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { OpeningStatusBadge } from "./opening-status";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper/95 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "shadow-[0_1px_0_0_var(--color-line)]"
          : "shadow-[0_1px_0_0_transparent]"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={site.fullName}
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="size-11 rounded-full transition-transform duration-200 [transition-timing-function:var(--ease-out)] [@media(hover:hover)]:group-hover:scale-[1.03]"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.05rem] sm:text-[1.35rem] font-medium tracking-tight text-ink leading-none">
              Müller <span className="italic-display text-brand-red">Metzgerei</span>
            </span>
            <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute mt-1">
              zum Rössli · seit 1984
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors duration-200",
                  active ? "text-brand-red" : "text-ink hover:text-brand-red"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-brand-red" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand-red transition-colors"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-ink/10 hover:bg-ink/5 transition-colors"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-18 bottom-0 bg-paper/98 backdrop-blur-lg transition-[opacity,transform] duration-300 [transition-timing-function:var(--ease-drawer)]",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-6 pt-8 pb-12 h-full overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navigation.map((item, i) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "py-4 font-serif text-3xl tracking-tight border-b border-line",
                    "transition-[color,opacity,transform] duration-300 [transition-timing-function:var(--ease-out)]",
                    active ? "text-brand-red" : "text-ink hover:text-brand-red"
                  )}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(8px)",
                    transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-10 space-y-3">
            <OpeningStatusBadge />
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-3 text-lg font-medium text-ink"
            >
              <Phone className="size-5" />
              {site.phone}
            </a>
            <p className="text-sm text-ink-soft">
              {site.address.street}, {site.address.postal} {site.address.city}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
