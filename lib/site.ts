export const site = {
  name: "Müller Metzgerei AG",
  fullName: "Müller Metzgerei AG zum Rössli",
  slogan: "Genuss, der verbindet.",
  description:
    "Seit 1984 Metzgerei in Brüttisellen. Eigene Wursterei, Fleisch von Höfen aus der Region, Partyservice für 10 bis 200 Personen.",
  url: "https://www.mueller-metzgerei-zum-roessli.ch",
  phone: "044 833 25 05",
  phoneTel: "+41448332505",
  email: "metzgmue@bluewin.ch",
  address: {
    street: "Zürichstrasse 35",
    postal: "8306",
    city: "Brüttisellen",
    country: "CH",
    region: "Zürich",
  },
  geo: { lat: 47.4254, lng: 8.6336 },
  postal: "80-61376-1",
  vat: "CHE-104.963.443",
  founded: "1984",
  yearsActive: 40,
} as const;

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/#sortiment", label: "Sortiment" },
  { href: "/partyservice", label: "Partyservice" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
