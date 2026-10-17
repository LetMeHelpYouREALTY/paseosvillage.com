import { articles } from "../content/registry";
import type { Article } from "../content/types";
import { publishedFacts } from "../data/paseos";
import { articleUpdated } from "./dates";
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  BROKERAGE,
  LICENSE,
  OFFICE_ADDRESS,
  SITE_PHONE,
  siteOrigin,
} from "./site";

const FACT_IDS = [
  "zip",
  "west-of-215",
  "park-acres",
  "topography",
  "fox-hill-role",
  "downtown-distance",
  "agent-license",
];

function linkLine(article: Article, origin: string): string {
  return `- [${article.h1}](${new URL(article.path, origin).href}): ${article.answer}`;
}

export function llmsText(origin = siteOrigin()): string {
  const facts = publishedFacts(FACT_IDS);
  const latest = articles.map((article) => articleUpdated(article)).sort().at(-1);
  const pages = articles.filter(
    (article) => article.path !== "/privacy" && !article.path.startsWith("/neighborhoods/"),
  );
  const optional = [
    ...articles.filter((article) => article.path.startsWith("/neighborhoods/")),
    ...articles.filter((article) => article.path === "/privacy"),
  ];
  return [
    "# The Paseos, Summerlin, Las Vegas, NV 89138",
    "",
    `> A guide to The Paseos, a Summerlin village in Las Vegas, NV 89138, published by ${AGENT_NAME}, ${AGENT_CREDENTIAL}, Nevada license ${LICENSE}, ${BROKERAGE}. Each fact below lists its source and date.`,
    "",
    `Updated ${latest}. Office: ${OFFICE_ADDRESS}. Phone: ${SITE_PHONE}.`,
    "",
    "Sourced facts:",
    "",
    ...facts.map((fact) => `- ${fact.label}: ${fact.value} (${fact.source}, ${fact.asOf})`),
    "",
    "Median price, village acreage, and home count are unpublished because sources conflict. Office hours are not listed yet.",
    "",
    `Each page below has a Markdown version at the same URL with .md appended. The home page is ${origin}/index.md.`,
    "",
    "Equal Housing Opportunity.",
    "",
    "## Pages",
    "",
    ...pages.map((article) => linkLine(article, origin)),
    "",
    "## Optional",
    "",
    ...optional.map((article) => linkLine(article, origin)),
    "",
  ].join("\n");
}
