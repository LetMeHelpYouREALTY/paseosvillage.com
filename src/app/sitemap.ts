import type { MetadataRoute } from "next";
import { articles } from "@/content/registry";
import { canIndex } from "@/lib/site-url.mjs";
import { CONTENT_UPDATED, siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex(process.env)) return [];
  const origin = siteOrigin();
  return articles.map((article) => ({
    url: new URL(article.path, origin).href,
    lastModified: CONTENT_UPDATED,
  }));
}
