import type { MetadataRoute } from "next";
import { SEARCH_AGENTS, TRAINING_AGENTS } from "@/lib/crawlers.mjs";
import { canIndex } from "@/lib/site-url.mjs";
import { siteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const indexable = canIndex(process.env);
  return {
    rules: [
      ...SEARCH_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...TRAINING_AGENTS.map((userAgent) =>
        indexable ? { userAgent, allow: "/" } : { userAgent, disallow: "/" },
      ),
      { userAgent: "*", allow: "/" },
    ],
    ...(indexable ? { sitemap: `${siteOrigin()}/sitemap.xml` } : {}),
  };
}
