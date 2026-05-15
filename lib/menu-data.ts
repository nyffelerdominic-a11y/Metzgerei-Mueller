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
    subtitle: "Herzhafte Klassiker für jede Tageszeit",
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
    subtitle: "Für besondere Anlässe — wahlweise vegetarisch erweiterbar",
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
    title: "Für jeden Anlass",
    body: "Ob Geburtstag, Firmenfeier oder Familienfest — wir machen Ihr Event besonders.",
  },
  {
    title: "Mit Liebe zubereitet",
    body: "Frische Zutaten, traditionelle Rezepte und höchste Qualität aus unserer Metzgerei.",
  },
  {
    title: "Kompletter Service",
    body: "Von der Beratung bis zur Lieferung — wir kümmern uns um alles.",
  },
  {
    title: "Regional & persönlich",
    body: "Persönlicher Service, regionale Produkte und echte Leidenschaft.",
  },
];

export const sortimentCategories = [
  {
    slug: "charcuterie",
    title: "Charcuterie",
    blurb:
      "Trockenfleisch, Salsiz, Rohwürste — sorgfältig gereift und in Handarbeit aufgeschnitten.",
  },
  {
    slug: "wurstwaren",
    title: "Wurstwaren",
    blurb:
      "Aus eigener Wursterei — Bratwurst, Cervelat, Schüblig, Lyoner und saisonale Spezialitäten.",
  },
  {
    slug: "grilladen",
    title: "Grilladen",
    blurb:
      "Mariniertes Fleisch, Spiesse, Steaks — vom Schweizer Bauern auf Ihren Rost.",
  },
  {
    slug: "fleischstuecke",
    title: "Saftige Fleischstücke",
    blurb:
      "Rind, Kalb, Schwein, Lamm — von regionalen Höfen, fachgerecht zerlegt und gereift.",
  },
  {
    slug: "saisonal",
    title: "Saisonale Spezialitäten",
    blurb:
      "Bärlauchwürste im Frühling, Wildgerichte im Herbst, Festtagsbraten und Chinoiseplatten.",
  },
  {
    slug: "znueni",
    title: "Z'Nüni",
    blurb:
      "Sandwiches, Wurstwaren-Snacks, hausgemachte Pasteten — frisch für die Pause.",
  },
];
