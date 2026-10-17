import { comparisonTable } from "../content/comparison-articles";
import { articles } from "../content/registry";
import type { Article, Faq } from "../content/types";
import { neighborhoods } from "../data/neighborhoods";
import { publishedFacts } from "../data/paseos";
import { crumbsFor } from "./breadcrumbs";
import { articleUpdated, SITE_PUBLISHED } from "./dates";
import { wordsOf } from "./words";
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  BROKERAGE,
  LICENSE,
  OFFICE_CITY,
  OFFICE_POSTAL,
  OFFICE_REGION,
  OFFICE_STREET,
  SAME_AS,
  SITE_NAME,
  SITE_PHONE,
  siteOrigin,
} from "./site";

export type JsonLd = Record<string, unknown>;

function faqNode(origin: string, path: string, faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${origin}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function breadcrumbNode(origin: string, article: Article): JsonLd {
  const crumbs = crumbsFor(article);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${origin}${article.path}#breadcrumbs`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${origin}${crumb.path}`,
    })),
  };
}

function pageType(path: string): string {
  if (path === "/about") return "ProfilePage";
  if (path === "/contact") return "ContactPage";
  return "WebPage";
}

function aboutRef(origin: string, path: string): JsonLd | undefined {
  if (path === "/about") return { "@id": `${origin}/#person` };
  if (path === "/contact") return { "@id": `${origin}/#agent` };
  if (path === "/privacy") return undefined;
  return { "@id": `${origin}/#paseos` };
}

function webPageNode(origin: string, article: Article): JsonLd {
  const about = aboutRef(origin, article.path);
  return {
    "@context": "https://schema.org",
    "@type": pageType(article.path),
    "@id": `${origin}${article.path}#webpage`,
    url: `${origin}${article.path}`,
    name: article.title,
    description: article.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${origin}/#website` },
    ...(about ? { about } : {}),
    ...(article.path === "/about" ? { mainEntity: { "@id": `${origin}/#person` } } : {}),
    author: { "@id": `${origin}/#person` },
    datePublished: SITE_PUBLISHED,
    dateModified: articleUpdated(article),
    breadcrumb: { "@id": `${origin}${article.path}#breadcrumbs` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#direct-answer"],
    },
  };
}

export function agentNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${origin}/#agent`,
    name: `${AGENT_NAME}, ${AGENT_CREDENTIAL}`,
    url: origin,
    telephone: SITE_PHONE,
    image: `${origin}/icon`,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_STREET,
      addressLocality: OFFICE_CITY,
      addressRegion: OFFICE_REGION,
      postalCode: OFFICE_POSTAL,
      addressCountry: "US",
    },
    parentOrganization: { "@id": `${origin}/#brokerage` },
    identifier: {
      "@type": "PropertyValue",
      name: "Nevada real estate license",
      value: LICENSE,
    },
    areaServed: [
      { "@type": "Place", name: "The Paseos, Summerlin, Las Vegas, NV 89138" },
      { "@type": "Place", name: "Summerlin" },
      { "@type": "City", name: "Las Vegas" },
    ],
    sameAs: SAME_AS,
  };
}

function brokerageNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${origin}/#brokerage`,
    name: BROKERAGE,
  };
}

export function websiteNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: SITE_NAME,
    url: origin,
    inLanguage: "en-US",
    publisher: { "@id": `${origin}/#agent` },
  };
}

function placeNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${origin}/#paseos`,
    name: "The Paseos",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89138",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "Place",
      name: "Summerlin",
      containedInPlace: {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
    },
  };
}

function parkNodes(origin: string): JsonLd[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Park",
      "@id": `${origin}/#paseos-park`,
      name: "The Paseos Park",
      description:
        "Central park in The Paseos. Summerlin.com said it covers more than 12 acres on February 28, 2019.",
      containedInPlace: { "@id": `${origin}/#paseos` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Park",
      "@id": `${origin}/#fox-hill-park`,
      name: "Fox Hill Park",
      description:
        "Park serving The Paseos, with a climbing tower and zip line in the February 28, 2019 Summerlin.com article.",
      containedInPlace: { "@id": `${origin}/#paseos` },
    },
  ];
}

function personNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${origin}/#person`,
    name: AGENT_NAME,
    url: `${origin}/about`,
    jobTitle: AGENT_CREDENTIAL,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `Nevada real estate license ${LICENSE}`,
      identifier: LICENSE,
    },
    worksFor: { "@id": `${origin}/#brokerage` },
    knowsAbout: ["The Paseos, Summerlin", "Las Vegas, NV 89138", "Residential resale"],
    sameAs: SAME_AS,
  };
}

function articleNode(origin: string, article: Article): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${origin}${article.path}#article`,
    headline: article.h1,
    datePublished: SITE_PUBLISHED,
    dateModified: articleUpdated(article),
    author: { "@id": `${origin}/#person` },
    publisher: { "@id": `${origin}/#agent` },
    mainEntityOfPage: { "@id": `${origin}${article.path}#webpage` },
    description: article.description,
  };
}

function datasetNode(origin: string, article: Article): JsonLd {
  const rows = publishedFacts(["zip", "park-acres", "downtown-distance", "west-of-215"]);
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${origin}/market-report#dataset`,
    name: "The Paseos Summerlin place facts used beside the market report",
    description:
      "Sourced place facts for The Paseos. Closed-sale statistics are withheld until an MLS extract is verified.",
    creator: { "@id": `${origin}/#person` },
    dateModified: articleUpdated(article),
    variableMeasured: rows.map((row) => row.label),
  };
}

function neighborhoodListNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${origin}/neighborhoods#list`,
    name: "Neighborhoods in The Paseos named by Summerlin.com",
    description:
      "Neighborhoods named in the Summerlin.com articles cited on each page. The list is not an assessor inventory.",
    itemListElement: neighborhoods.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${origin}/neighborhoods/${item.slug}`,
    })),
  };
}

export function pageGraphs(article: Article, origin = siteOrigin()): JsonLd[] {
  const graphs: JsonLd[] = [breadcrumbNode(origin, article), webPageNode(origin, article)];
  if (article.faqs.length > 0) graphs.push(faqNode(origin, article.path, article.faqs));
  if (article.path === "/" || article.path === "/living-in-the-paseos") {
    graphs.push(...parkNodes(origin));
  }
  if (article.path === "/market-report") {
    graphs.push(articleNode(origin, article), datasetNode(origin, article));
  }
  if (article.path === "/neighborhoods") graphs.push(neighborhoodListNode(origin));
  return graphs;
}

export function siteGraphs(origin = siteOrigin()): JsonLd[] {
  return [agentNode(origin), brokerageNode(origin), personNode(origin), websiteNode(origin), placeNode(origin)];
}

export function allGraphs(origin = siteOrigin()): { path: string; graphs: JsonLd[] }[] {
  return [
    { path: "*", graphs: siteGraphs(origin) },
    ...articles.map((article) => ({ path: article.path, graphs: pageGraphs(article, origin) })),
  ];
}

export function articleWordCount(article: Article): number {
  return wordsOf([
    article.answer,
    ...article.sections.flatMap((section) => [section.heading, section.answer, ...section.paragraphs]),
    ...article.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]);
}

export function comparisonRows(slug: string) {
  return comparisonTable(slug)?.rows ?? [];
}
