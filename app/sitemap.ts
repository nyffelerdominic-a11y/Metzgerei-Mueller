import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return navigation.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
