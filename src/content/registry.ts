import { aboutArticle, contactArticle, privacyArticle } from "./about";
import { buyArticle, homesArticle, sellArticle } from "./buy-sell";
import { comparisonArticles } from "./comparison-articles";
import { faqArticle } from "./faq";
import { homeArticle } from "./home";
import { livingArticle } from "./living";
import { marketArticle } from "./market";
import { neighborhoodArticles, neighborhoodIndex } from "./neighborhood-articles";
import { schoolsArticle } from "./schools";
import type { Article } from "./types";

export const articles: Article[] = [
  homeArticle,
  homesArticle,
  marketArticle,
  neighborhoodIndex,
  ...neighborhoodArticles,
  livingArticle,
  schoolsArticle,
  sellArticle,
  buyArticle,
  ...comparisonArticles,
  faqArticle,
  aboutArticle,
  contactArticle,
  privacyArticle,
];

export function articleByPath(path: string): Article | undefined {
  return articles.find((article) => article.path === path);
}

export const indexablePaths = articles.map((article) => article.path);
