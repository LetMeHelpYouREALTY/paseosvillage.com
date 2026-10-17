import type { Article } from "../content/types";

export function crumbsFor(article: Article): { name: string; path: string }[] {
  const crumbs = [{ name: "The Paseos Summerlin", path: "/" }];
  if (article.path.startsWith("/neighborhoods/") && article.path !== "/neighborhoods") {
    crumbs.push({ name: "Neighborhoods in The Paseos", path: "/neighborhoods" });
  }
  if (article.path !== "/") crumbs.push({ name: article.h1, path: article.path });
  return crumbs;
}
