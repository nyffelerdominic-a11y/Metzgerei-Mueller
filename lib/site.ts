export const site = {
  name: "Müller Metzgerei AG",
  fullName: "Müller Metzgerei AG zum Rössli",
  slogan: "Genuss, der verbindet.",
  description:
    "Seit über 40 Jahren Metzgerei-Handwerk in Brüttisellen. Hauseigene Wursterei, regionale Lieferanten, Partyservice für jeden Anlass.",
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
  { href: "/metzgerei", label: "Metzgerei" },
  { href: "/sortiment", label: "Sortiment" },
  { href: "/partyservice", label: "Partyservice" },
  { href: "/team", label: "Team" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
