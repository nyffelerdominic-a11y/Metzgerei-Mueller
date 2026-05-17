import type { Metadata } from "next";
import {
  Geist,
  Newsreader,
  JetBrains_Mono,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Metzgerei in Brüttisellen | Wurstwaren & Partyservice`,
    template: `%s — ${site.name} | Handwerk seit 1984`,
  },
  description: site.description,
  keywords: [
    "Metzgerei Brüttisellen",
    "Partyservice Zürich",
    "Wurstwaren hausgemacht",
    "Müller Metzgerei",
    "Rössli Brüttisellen",
    "Charcuterie Schweiz",
    "Festtagsbraten",
    "Catering Ostschweiz",
    "Handgemachte Wurst",
    "Partyservice Ostschweiz",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: site.url,
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
  },
  alternates: { canonical: site.url },
  authors: [{ name: site.fullName }],
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ButcherShop",
  name: site.fullName,
  description: site.description,
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  image: `${site.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postal,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:30",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de-CH"
      className={`${geist.variable} ${jetbrains.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand-red focus:text-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="hauptinhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
