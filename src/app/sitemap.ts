import type { MetadataRoute } from "next";
import { articles } from "@/content/registry";
import { canIndex } from "@/lib/site-url.mjs";
import { articleUpdated } from "@/lib/dates";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex(process.env)) return [];
  const origin = siteOrigin();
  return articles.map((article) => ({
    url: new URL(article.path, origin).href,
    lastModified: articleUpdated(article),
  }));
}
