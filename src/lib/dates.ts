import type { Article } from "../content/types";
import { CONTENT_UPDATED } from "./site";

/** First publication day. Later edits bump Article.updated, not this constant. */
export const SITE_PUBLISHED = "2026-10-17";

export function articleUpdated(article: Pick<Article, "updated">): string {
  return article.updated ?? CONTENT_UPDATED;
}

export function formatDay(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
