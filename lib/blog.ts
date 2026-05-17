export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  keywords: string[];
  content: string;
  readingTime: number;
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: "partyservice-planen-leitfaden",
    title: "Partyservice planen: Was wir vor der Anfrage gerne wissen",
    excerpt:
      "Wer einen Partyservice anfragt, kommt schneller zu einem guten Angebot, wenn ein paar Dinge schon klar sind. Marco aus dem Partyservice-Team über das, was zählt.",
    date: "2026-06-15",
    author: "Marco Peronaci",
    keywords: [
      "partyservice zürich",
      "catering planen",
      "hochzeitsmenü",
      "eventplanung",
    ],
    content: `# Partyservice planen: Was wir vor der Anfrage gerne wissen

Bei den meisten Anfragen läuft es so ab: Jemand ruft an und fragt nach einem Angebot. Bevor ich rechnen kann, muss ich nachfragen. Damit das schneller geht, hier die fünf Dinge, die fast immer den Unterschied machen.

## 1. Anzahl Personen, ehrlich geschätzt

Lieber zwei zu viel als zu wenig, aber bitte keine Phantasie­zahlen. Wenn jemand "ungefähr 60, vielleicht auch 80" sagt, plane ich tendenziell für 75 und das kostet unnötig. Wenn 60 die realistische Zahl ist, sagen Sie 60. Erfahrungsgemäss kommen am Festtag selten mehr Leute als zugesagt.

## 2. Was für ein Anlass

Ein Geburtstag im Garten ist nicht das gleiche wie ein Firmenanlass im Sitzungszimmer. Wenn ich weiss, ob die Gäste stehen oder sitzen, ob nebenher gegessen wird oder ob das Essen im Zentrum steht, kann ich Mengen und Konzept besser einschätzen.

## 3. Zeitfenster

Wann muss das Essen wo sein? Eine Stunde davor, zwei? Liefern wir oder holen Sie ab? Wer bei der Lieferung niemanden zum Übernehmen hat, sollte das vorher mit uns klären.

## 4. Allergien und Sonderwünsche

Vegetarisch, glutenfrei, Schweinefleisch nein, Lactose nein: das alles geht, wenn wir es früh wissen. Im Standard­paket lässt sich vieles ersetzen, im Zweifelsfall bauen wir einzelne Portionen separat.

## 5. Budget-Rahmen

Sie müssen mir keinen exakten Frankenbetrag nennen. Aber ob wir eher Richtung Grillplatte oder Richtung Festtagsbraten denken, hilft. Als grobe Orientierung: gemischte Platten liegen bei 25–45 Franken pro Person, Festtagsmenüs bei 45–65, Spezielles auf Anfrage.

## So kommen Sie zu einem konkreten Angebot

Telefon 044 833 25 05 oder E-Mail an metzgmue@bluewin.ch. Wenn die fünf Punkte oben grob klar sind, brauche ich meistens einen halben Tag, um zurück­zukommen. Bei kurzfristigen Anfragen lieber anrufen.

Ein letzter Hinweis: rund um Weihnachten, Silvester und 1. August sind wir früh ausgebucht. Wer dann etwas plant, fragt im Idealfall zwei Monate vorher an.

---

Marco Peronaci koordiniert seit 2012 unseren Partyservice.`,
    readingTime: 4,
  },
  {
    slug: "regionale-lieferanten-wichtigkeit",
    title: "Woher unser Fleisch kommt",
    excerpt:
      "Eine Frage, die wir an der Theke öfter hören. Christof Müller über die Höfe, von denen wir einkaufen, und warum das so geblieben ist.",
    date: "2026-06-08",
    author: "Christof Müller",
    keywords: [
      "regionale lieferanten",
      "regionales fleisch",
      "metzgerei brüttisellen",
      "lieferkette",
    ],
    content: `# Woher unser Fleisch kommt

An der Theke fragen das immer mehr Leute, und ich finde das gut. Hier die Antwort, ausführlicher als sie zwischen zwei Kunden passt.

## Die Höfe

Wir arbeiten mit einer Handvoll Betrieben aus der näheren Umgebung. Die meisten sitzen im Glattal und im Zürcher Unterland, ein paar im Tösstal. Schweine, Rinder, Kälber, Lämmer im Frühling. Geflügel kommt von einem Betrieb im Aargau, mit dem mein Vater schon gearbeitet hat.

Die Verträge sind nicht das, was man heute Verträge nennt. Ich rufe an, frage, was sie haben, und wir machen einen Preis. Wenn etwas nicht passt, sagen wir es uns gegenseitig.

## Warum nicht günstiger einkaufen

Könnte ich. Auf dem Grossmarkt gibt es Fleisch zu Preisen, mit denen ich nicht mithalten kann. Aber dann hätte ich Fleisch, von dem ich nicht weiss, wo es genau herkommt und wie das Tier gehalten wurde. Wenn jemand an der Theke fragt, könnte ich nur sagen "ich glaube, aus der Schweiz". Das reicht mir nicht, und der Kundschaft, die zu uns kommt, reicht es meistens auch nicht.

## Was Sie davon haben

Ehrlich gesagt: Sie schmecken den Unterschied vor allem dann, wenn Sie Stück für Stück vergleichen. Beim ersten Mal merken Sie es vielleicht nicht. Nach drei, vier Wochen mit unserem Fleisch in der Küche schon. Das Wasser, das beim Anbraten austritt, ist weniger. Das Fleisch zieht sich nicht zusammen. Es schmeckt nach dem, was es ist.

## Was sich verändert hat

Vor 40 Jahren war regional einkaufen normal. Heute ist es ein Verkaufs­argument geworden. Das sagt mehr über die Branche als über uns. Wir machen einfach weiter, wie wir es kennen.

---

Christof Müller führt die Müller Metzgerei in zweiter Generation.`,
    readingTime: 3,
  },
  {
    slug: "handwerkliche-wurst-vs-industriefleisch",
    title: "Was eine Wurst zu einer guten Wurst macht",
    excerpt:
      "Urs Meier, seit 25 Jahren in unserer Wursterei, über das, worauf es bei der Herstellung wirklich ankommt und woran man eine fragwürdige Wurst erkennt.",
    date: "2026-06-01",
    author: "Urs Meier",
    keywords: [
      "handwerkliche wurst",
      "wurstherstellung",
      "fleischqualität",
      "metzgerei",
    ],
    content: `# Was eine Wurst zu einer guten Wurst macht

Ich werde manchmal gefragt, was den Unterschied zwischen einer Wurst aus der Metzgerei und einer aus dem Grossverteiler ausmacht. Die ehrliche Antwort: vier oder fünf Dinge, die zusammen­wirken.

## Das Fleisch

Wir nehmen frisches Fleisch, nicht gefroren. Die Mischung aus magerem und fettem Anteil rechnen wir je nach Sorte aus. Bei der Bratwurst etwa 70 zu 30, bei einer Rohwurst anders. Die Industrie arbeitet oft mit eingefrorener Ware und Separator­fleisch. Das ist legal, aber schmeckbar.

## Die Gewürze

Wir mischen die Gewürze selber. Pfeffer, Muskat, Knoblauch, je nach Rezept Senfkörner, Kümmel, Majoran. Keine fertigen Mischungen aus dem Sack, keine Geschmacks­verstärker. Wenn das Etikett bei einer Wurst aussieht wie eine Chemie­liste, ist das ein Hinweis.

## Zeit

Eine Rohwurst, eine Salami, ein Bündner­fleisch brauchen Wochen. Bei uns hängen die Sachen im Klimaraum, bis sie soweit sind. Industrielle Schnellfermentation in 48 Stunden geht auch, schmeckt aber anders. Beim Reifen entstehen Aromen, die man nicht abkürzen kann.

## Räucherung

Wir räuchern mit Buchenholz, langsam, in einem alten Räucherschrank. Es gibt auch Flüssig­rauch in der Flasche, der ähnlich aussieht. Wer einmal beides nebeneinander probiert hat, kauft den nicht mehr.

## Woran Sie eine fragwürdige Wurst erkennen

Drei Hinweise:

Erstens die Schnittfläche. Sie sollte gleichmässig aussehen, mit erkennbaren Fett­einschlüssen. Wenn alles homogen und glatt ist, wurde stark zerkleinert und gebunden.

Zweitens das Wasser beim Braten. Eine gute Bratwurst gibt wenig Wasser ab. Wenn die Pfanne nach drei Minuten schwimmt, war viel Wasser drin.

Drittens die Zutaten­liste. Je länger, desto vorsichtiger. Eine Cervelat braucht Fleisch, Speck, Salz, Gewürze, Darm. Mehr nicht.

## Was wir machen

Cervelat, Schüblig, Bratwurst, Wienerli, Lyoner, Bündnerfleisch, dazu Saisonales wie Bärlauch­wurst im Frühling. Die Rezepte sind im Wesentlichen die, mit denen Christofs Vater angefangen hat. Ein paar haben wir über die Jahre angepasst, etwa weniger Salz als früher.

Wenn Sie unsicher sind, was zu was passt, fragen Sie an der Theke. Wir essen das, was wir verkaufen, also haben wir meistens eine Meinung.

---

Urs Meier ist seit 1999 in unserer Wursterei.`,
    readingTime: 4,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}
