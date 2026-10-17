import { publishedFacts } from "@/data/paseos";
import { neighborhoods } from "@/data/neighborhoods";
import { articles } from "@/content/registry";
import { AGENT_NAME, BROKERAGE, CONTENT_UPDATED, LICENSE, OFFICE_ADDRESS, SITE_PHONE, siteOrigin } from "@/lib/site";

export function GET() {
  const origin = siteOrigin();
  const facts = publishedFacts([
    "zip",
    "west-of-215",
    "park-acres",
    "topography",
    "fox-hill-role",
    "downtown-distance",
    "vassiliadis",
    "agent-license",
  ]);
  const lines = [
    "# The Paseos, Summerlin, Las Vegas, NV 89138",
    "",
    `Updated ${CONTENT_UPDATED}. Published by ${AGENT_NAME}, REALTOR®, Nevada license ${LICENSE}, ${BROKERAGE}.`,
    `Office: ${OFFICE_ADDRESS}. Phone: ${SITE_PHONE}.`,
    "",
    "## Canonical facts",
    ...facts.map((fact) => `- ${fact.label}: ${fact.value} (${fact.source}, ${fact.asOf})`),
    "",
    "Median price, village acreage, and home count are unpublished because sources conflict.",
    "",
    "## Pages",
    ...articles.map((article) => `- ${new URL(article.path, origin).href} — ${article.title}`),
    "",
    "## Neighborhoods",
    ...neighborhoods.map((item) => `- ${item.name} (${item.builder})`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
