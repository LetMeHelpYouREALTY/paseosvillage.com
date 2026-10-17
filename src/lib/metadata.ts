import type { Metadata } from "next";
import type { Article } from "@/content/types";
import { markdownPath } from "@/lib/markdown";
import { canIndex } from "@/lib/site-url.mjs";
import { SITE_NAME, siteOrigin } from "@/lib/site";

export function pageMetadata(article: Article): Metadata {
  const origin = siteOrigin();
  const url = new URL(article.path, origin).href;
  const image = new URL(
    `/api/og?title=${encodeURIComponent(article.title)}`,
    origin,
  ).href;
  const indexable = canIndex(process.env);
  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: {
      canonical: url,
      types: {
        "text/markdown": new URL(markdownPath(article.path), origin).href,
      },
    },
    robots: { index: indexable, follow: true },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
    },
  };
}
