import { publishedFacts } from "../data/paseos";
import { comparisonTable } from "../content/comparison-articles";
import { articles } from "../content/registry";
import type { Article, Faq } from "../content/types";
import { wordsOf } from "./words";
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  AGENT_PROFILE_URL,
  BROKERAGE,
  CONTENT_UPDATED,
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
  const crumbs = [
    { name: "The Paseos Summerlin", path: "/" },
    ...(article.path === "/"
      ? []
      : [{ name: article.h1, path: article.path }]),
  ];
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
    parentOrganization: { "@type": "Organization", name: BROKERAGE, url: AGENT_PROFILE_URL },
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

export function websiteNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: SITE_NAME,
    url: origin,
    inLanguage: "en-US",
    publisher: { "@id": `${origin}/#agent` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/homes-for-sale?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
      description: "Central park in The Paseos. Summerlin.com said it covers more than 12 acres on February 28, 2019.",
      containedInPlace: { "@id": `${origin}/#paseos` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Park",
      "@id": `${origin}/#fox-hill-park`,
      name: "Fox Hill Park",
      description: "Park serving The Paseos, with a climbing tower and zip line in the February 28, 2019 Summerlin.com article.",
      containedInPlace: { "@id": `${origin}/#paseos` },
    },
  ];
}

function personNode(origin: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${origin}/about#person`,
    name: AGENT_NAME,
    url: `${origin}/about`,
    jobTitle: AGENT_CREDENTIAL,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `Nevada real estate license ${LICENSE}`,
      identifier: LICENSE,
    },
    worksFor: { "@type": "Organization", name: BROKERAGE },
    knowsAbout: [
      "The Paseos, Summerlin",
      "Las Vegas, NV 89138",
      "Residential resale",
    ],
  };
}

function articleNode(origin: string, article: Article): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${origin}${article.path}#article`,
    headline: article.h1,
    datePublished: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
    author: { "@type": "Person", name: AGENT_NAME, url: `${origin}/about` },
    publisher: { "@id": `${origin}/#agent` },
    mainEntityOfPage: `${origin}${article.path}`,
    description: article.description,
  };
}

function datasetNode(origin: string): JsonLd {
  const rows = publishedFacts([
    "zip",
    "park-acres",
    "downtown-distance",
    "west-of-215",
  ]);
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${origin}/market-report#dataset`,
    name: "The Paseos Summerlin place facts used beside the market report",
    description:
      "Sourced place facts for The Paseos. Closed-sale statistics are withheld until an MLS extract is verified.",
    creator: { "@type": "Person", name: AGENT_NAME },
    dateModified: CONTENT_UPDATED,
    variableMeasured: rows.map((row) => row.label),
  };
}

export function pageGraphs(article: Article, origin = siteOrigin()): JsonLd[] {
  const graphs: JsonLd[] = [breadcrumbNode(origin, article)];
  if (article.faqs.length > 0) graphs.push(faqNode(origin, article.path, article.faqs));
  if (article.path === "/" || article.path === "/living-in-the-paseos") {
    graphs.push(placeNode(origin), ...parkNodes(origin));
  }
  if (article.path.startsWith("/neighborhoods/") && article.path !== "/neighborhoods") {
    graphs.push(placeNode(origin));
  }
  if (article.path === "/market-report") {
    graphs.push(articleNode(origin, article), datasetNode(origin));
  }
  if (article.path === "/about") graphs.push(personNode(origin));
  return graphs;
}

export function siteGraphs(origin = siteOrigin()): JsonLd[] {
  return [agentNode(origin), websiteNode(origin)];
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
