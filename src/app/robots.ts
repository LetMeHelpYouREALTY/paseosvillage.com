import type { MetadataRoute } from "next";
import { canIndex } from "@/lib/site-url.mjs";
import { siteOrigin } from "@/lib/site";

const agents = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
  "*",
];

export default function robots(): MetadataRoute.Robots {
  const indexable = canIndex(process.env);
  return {
    rules: agents.map((userAgent) => ({ userAgent, allow: "/" })),
    ...(indexable ? { sitemap: `${siteOrigin()}/sitemap.xml` } : {}),
  };
}
