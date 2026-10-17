import { comparisons } from "../data/comparisons";
import { formatAsOf } from "../lib/dates";
import type { Article } from "./types";

const answers: Record<string, string> = {
  "the-vistas":
    "The Paseos is a Summerlin village in Las Vegas. The Vistas, in the Summerlin.com pages used here, is a resident community center and pool a short trip from that village. The names are not interchangeable. Park facts for The Paseos stay on the village pages. No price comparison is printed.",
  stonebridge:
    "The Paseos and Stonebridge are separate Summerlin villages on the west side of Las Vegas. Summerlin.com described both as elevated. It named The Paseos Park for this village and a Stonebridge park that was then under development. School names in that article are nearby, not zoning. Prices are omitted.",
  "summerlin-centre":
    "The Paseos is a village of named neighborhoods west of the 215 in Summerlin, Las Vegas. Summerlin Centre, on the villages page retrieved October 17, 2026, is an actively selling lock-and-leave area off Charleston. This page compares place facts only. It does not rank the two or print prices.",
};

export const comparisonArticles: Article[] = comparisons.map((item) => ({
  path: `/paseos-vs/${item.slug}`,
  title: `The Paseos vs ${item.name} | Summerlin`,
  description: `How The Paseos in Summerlin, Las Vegas 89138 differs from ${item.name}, using Summerlin.com place facts only.`,
  h1: `The Paseos vs ${item.name} in Summerlin`,
  eyebrow: item.asOf === "UNKNOWN" ? "Source date not printed on the page" : `Sources as of ${formatAsOf(item.asOf)}`,
  answer: answers[item.slug] ?? item.summary,
  factIds: ["west-of-215", "downtown-distance", "park-acres"],
  sections: [
    {
      id: "difference",
      heading: `How is The Paseos different from ${item.name}?`,
      answer: item.paragraphs[0] ?? item.summary,
      paragraphs: item.paragraphs.slice(1),
    },
    {
      id: "table",
      heading: `What can you compare without guessing?`,
      answer: "Only the rows in the table, each tied to a Summerlin.com page.",
      paragraphs: [
        "Price, appreciation, and a drive time between the two places are omitted. They are not in the sourced sentences. The market report explains how a real stat will be added later.",
        "School names that appear in a Stonebridge-era article are nearby names, not assignments. Use the district zoning search for the address you are buying.",
        "Both pages should send you back to homes for sale in The Paseos if the village is the search. A comparison is context, not a ranking.",
      ],
    },
  ],
  faqs: [
    {
      question: `Is ${item.name} inside The Paseos?`,
      answer: item.summary,
    },
    {
      question: "Why is there no price comparison?",
      answer: "Current medians are unpublished even for The Paseos. A comparison without those figures would be a guess.",
    },
    {
      question: "Where is the source?",
      answer:
        item.asOf === "UNKNOWN"
          ? `The primary page is ${item.sourceUrl}. That page did not print a publication date.`
          : `The primary page is ${item.sourceUrl}. The as-of note is ${formatAsOf(item.asOf)}.`,
    },
    {
      question: "How do you search The Paseos instead?",
      answer: "Open homes for sale, filter to 89138, and confirm the listing names The Paseos or one of its neighborhoods.",
    },
  ],
  cta: "search",
  measured: true,
  longform: false,
}));

export function comparisonTable(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
