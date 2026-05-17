export type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  items: MenuItem[];
};

export const partyserviceMenu: MenuSection[] = [
  {
    id: "znueni-zmittag-znacht",
    title: "Z'Nüni, Z'Mittag oder Z'Nacht",
    subtitle: "Klassiker für die Pause oder zwischendurch",
    note: "Preis pro Person · ab 6 Personen",
    items: [
      {
        name: "Schinken im Brotteig (220 g)",
        description: "Mit hausgemachtem Senf",
        price: 18.0,
      },
      {
        name: "Wurst- & Käseplatte",
        description: "Auswahl an hausgemachten Wurstwaren mit regionalem Käse",
        price: 17.5,
      },
      {
        name: "Heisser Fleischkäse",
        description: "Mit Kartoffelsalat",
        price: 14.5,
      },
      {
        name: "Wurstweggen im Blätterteig",
        description: "Frisch gebacken, mit Mischsalat",
        price: 9.5,
      },
      {
        name: "Schinken mit Kartoffelsalat",
        description: "Hausgemachter Schinken, Brot",
        price: 14.0,
      },
      {
        name: "Rassige Gulaschsuppe",
        description: "Mit knusprigem Brot",
        price: 12.0,
      },
      {
        name: "Heisse Fleischsuppe «Spatz»",
        description: "Klassiker mit Brot",
        price: 11.0,
      },
      {
        name: "Bündnerplatte (ab 4 Personen, 150 g)",
        description: "Bündnerfleisch, Salsiz, etwas Käse",
        price: 17.5,
      },
      {
        name: "Aufschnittplatte (ab 4 Personen, 150 g)",
        description: "Vielfältige Wurstauswahl, etwas Käse",
        price: 15.5,
      },
      {
        name: "Ghacktets und Hörnli",
        description: "Mit Apfelmus oder Mischsalat, Reibkäse",
        price: 13.0,
      },
    ],
  },
  {
    id: "feste",
    title: "Geburts-, Jubiläums- oder Festtafel",
    subtitle: "Für Anlässe mit warmem Essen, vegetarische Varianten möglich",
    note: "Preis pro Person · ab 6 Personen",
    items: [
      {
        name: "Geschnetzeltes Schweinefleisch",
        description: "Spätzli oder Reis, Rüebligemüse",
        price: 17.5,
      },
      {
        name: "Schweinsbraten vom Grill",
        description: "Kartoffelstock, Bohnen oder Rüebligemüse",
        price: 18.0,
      },
      {
        name: "Gefüllte Kalbsbrust & Schweinsbraten",
        description: "Kartoffelstock oder Kartoffelgratin, Bohnen",
        price: 19.0,
      },
      {
        name: "Wiener Rahmgulasch (Kalb)",
        description: "Spätzli, Rüebligemüse",
        price: 23.0,
      },
      {
        name: "Ungarisches Gulasch",
        description: "Kartoffelstock, Bohnen",
        price: 18.0,
      },
      {
        name: "Spaghetti Carbonara oder Bolognese",
        description: "Mischsalat, Reibkäse",
        price: 15.0,
      },
      {
        name: "Spaghetti Napoli",
        description: "Tomatensauce, Mischsalat, Reibkäse",
        price: 13.0,
      },
      {
        name: "Spaghetti mit 3 Saucen",
        description: "Carbonara, Bolognese, Napoli — Mischsalat, Reibkäse",
        price: 17.0,
      },
      {
        name: "Älplermagronen",
        description: "Mit Apfelmus oder Mischsalat",
        price: 13.5,
      },
      {
        name: "Münchner Weisswurst",
        description: "Kartoffelsalat, süsser Senf",
        price: 13.5,
      },
      {
        name: "Bami Goreng",
        description: "Indonesisches Nudelgericht mit Gemüse, Poulet, Mischsalat",
        price: 17.0,
      },
      {
        name: "Hausgemachter Fleischvogel",
        description: "Kartoffelstock, Gemüse",
        price: 16.0,
      },
      {
        name: "Hausgemachter Hackbraten",
        description: "Kartoffelgratin oder Kartoffelstock, Gemüse",
        price: 17.0,
      },
      {
        name: "Geschnetzeltes Rindfleisch «Stroganoff»",
        description: "Trockenreis, Rüebligemüse",
        price: 17.5,
      },
      {
        name: "Roastbeef (220 g) mit Sauce Béarnaise",
        description: "Kartoffelgratin, Bohnen und Rüebligemüse, Mischsalat",
        price: 40.5,
      },
      {
        name: "Schweinsfilet im Teig",
        description: "Edel belegt nach Wunsch · Reis +Fr. 4.–, Gemüse +Fr. 5.–",
        price: 32.5,
      },
      {
        name: "Bratenstücke vom Grill",
        description:
          "Kalbsmedaillon, Lammkrone (250 g/P.), Kartoffelgratin, 2 Gemüse zur Wahl",
        price: 24.0,
      },
      {
        name: "Schweinsbraten (180 g) mit Eierschwämmli",
        description: "Buttermushri, Kartoffeln mit Bohnen oder Reis",
        price: 22.95,
      },
    ],
  },
];

export const partyserviceValues = [
  {
    title: "10 bis 200 Personen",
    body: "Vom Familiengeburtstag bis zum Firmenanlass. Die Erfahrung haben wir.",
  },
  {
    title: "Aus eigener Küche",
    body: "Wurst aus unserer Wursterei, Fleisch von Bauern aus der Region.",
  },
  {
    title: "Liefern oder abholen",
    body: "Wir bringen es vorbei oder Sie holen es ab. Beides geht.",
  },
  {
    title: "Eine Ansprechperson",
    body: "Marco koordiniert, plant und liefert. Sie haben einen Kontakt für alles.",
  },
];

export const sortimentCategories = [
  {
    slug: "charcuterie",
    title: "Charcuterie",
    blurb:
      "Trockenfleisch, Salsiz, Rohwürste. Bei uns gereift, an der Theke aufgeschnitten.",
  },
  {
    slug: "wurstwaren",
    title: "Wurstwaren",
    blurb:
      "Bratwurst, Cervelat, Schüblig, Lyoner. Aus der Wursterei nebenan, plus Saisonales.",
  },
  {
    slug: "grilladen",
    title: "Grilladen",
    blurb:
      "Mariniertes Fleisch, Spiesse, Steaks. Vom Bauern direkt auf den Rost.",
  },
  {
    slug: "fleischstuecke",
    title: "Saftige Fleischstücke",
    blurb:
      "Rind, Kalb, Schwein, Lamm. Von Höfen aus der Region, im Haus zerlegt und gereift.",
  },
  {
    slug: "saisonal",
    title: "Saisonale Spezialitäten",
    blurb:
      "Bärlauchwurst im Frühling, Wild im Herbst, Chinoise- und Festtagsplatten zur Saison.",
  },
  {
    slug: "znueni",
    title: "Z'Nüni",
    blurb:
      "Sandwiches, Wurstwaren-Snacks, hausgemachte Pasteten. Etwas Schnelles für unterwegs.",
  },
];
