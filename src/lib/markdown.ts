import type { Article } from "../content/types";
import { comparisonBySlug } from "../data/comparisons";
import { neighborhoodBySlug, neighborhoods } from "../data/neighborhoods";
import { publishedFacts } from "../data/paseos";
import { articleUpdated, formatDay } from "./dates";
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  BROKERAGE,
  LICENSE,
  OFFICE_ADDRESS,
  SITE_PHONE,
  siteOrigin,
} from "./site";

export function markdownPath(path: string): string {
  return path === "/" ? "/index.md" : `${path}.md`;
}

function sourceText(source: string, sourceUrl: string): string {
  return sourceUrl.startsWith("http") ? source : `${source} (${sourceUrl})`;
}

function factsBlock(ids: string[]): string[] {
  const rows = publishedFacts(ids);
  if (rows.length === 0) return [];
  const lines = ["## Key facts", ""];
  for (const row of rows) {
    lines.push(row.label, "", String(row.value), "", sourceText(row.source, row.sourceUrl), "", row.asOf, "");
  }
  return lines;
}

function pageBlock(article: Article): string[] {
  if (article.path === "/neighborhoods") {
    return ["## Neighborhood pages", "", ...neighborhoods.flatMap((item) => [`${item.name} in The Paseos, Summerlin`, ""])];
  }
  if (article.path.startsWith("/neighborhoods/")) {
    const neighborhood = neighborhoodBySlug(article.path.split("/").at(-1) ?? "");
    if (!neighborhood) return [];
    return [
      `## At a glance: ${neighborhood.name}`,
      "",
      "Builder",
      "",
      neighborhood.builder,
      "",
      "Homes",
      "",
      neighborhood.product,
      "",
      "Published sizes",
      "",
      neighborhood.sqft ?? "Full range not printed in the source",
      "",
      "Source date",
      "",
      neighborhood.asOf,
      "",
    ];
  }
  if (article.path.startsWith("/paseos-vs/")) {
    const data = comparisonBySlug(article.path.slice("/paseos-vs/".length));
    if (!data) return [];
    return [
      `## The Paseos and ${data.name}`,
      "",
      ...data.rows.flatMap((row) => [row.label, "", row.paseos, "", row.other, ""]),
      `Source: ${data.sourceUrl}. As of ${data.asOf}.`,
      "",
    ];
  }
  return [];
}

export function articleMarkdown(article: Article, origin = siteOrigin()): string {
  const updated = articleUpdated(article);
  const lines = [
    `# ${article.h1}`,
    "",
    `Canonical page: ${new URL(article.path, origin).href}`,
    "",
    article.answer,
    "",
    `Last updated ${formatDay(updated)}. By ${AGENT_NAME}.`,
    "",
    ...factsBlock(article.factIds),
    ...article.sections.flatMap((section) => [
      `## ${section.heading}`,
      "",
      section.answer,
      "",
      ...section.paragraphs.flatMap((paragraph) => [paragraph, ""]),
    ]),
    ...pageBlock(article),
    "## Questions about this page",
    "",
    ...article.faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
    `TODO-EXPERT: Dr. Jan Duffy will write a firsthand detail for ${article.h1} before launch. This block stays blank until she writes it.`,
    "",
    `${AGENT_NAME}, ${AGENT_CREDENTIAL} · Nevada License ${LICENSE} · ${BROKERAGE} · ${OFFICE_ADDRESS} · ${SITE_PHONE}`,
    "",
    "Equal Housing Opportunity",
    "",
  ];
  return lines.join("\n");
}
