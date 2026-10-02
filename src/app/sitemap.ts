import type { MetadataRoute } from "next";
import { baseURL, indexable } from "@/config";
import { pages } from "@/content/pages.mjs";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  return pages.map((page) => ({
    url: new URL(page.path, baseURL).href,
    images: [new URL(page.hero.src, baseURL).href],
  }));
}
