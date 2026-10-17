import { articles } from "../src/content/registry";
import { faqCount } from "../src/content/faq";
import { crumbsFor } from "../src/lib/breadcrumbs";
import { articleUpdated, SITE_PUBLISHED } from "../src/lib/dates";
import { llmsText } from "../src/lib/llms";
import { articleMarkdown } from "../src/lib/markdown";
import { allGraphs, articleWordCount, pageGraphs, siteGraphs } from "../src/lib/schema";
import { BROKERAGE } from "../src/lib/site";
import { wordCount } from "../src/lib/words";
import { neighborhoods } from "../src/data/neighborhoods";
import { contentIssues } from "./content-rules.mjs";

const failures: string[] = [];

function need(condition: boolean, message: string) {
  if (!condition) failures.push(message);
}

function asRecord(value: unknown, label: string): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    failures.push(`${label} is not an object`);
    return null;
  }
  return value as Record<string, unknown>;
}

function checkGraph(path: string, graph: unknown) {
  const json = JSON.stringify(graph);
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    failures.push(`${path} JSON-LD did not parse`);
    return;
  }
  const node = asRecord(parsed, path);
  if (!node) return;
  need(node["@context"] === "https://schema.org", `${path} missing @context`);
  const type = node["@type"];
  const types = Array.isArray(type) ? type.map(String) : [String(type)];
  need(types.every((item) => item && item !== "undefined"), `${path} missing @type`);

  if (types.includes("FAQPage")) {
    const main = node.mainEntity;
    need(Array.isArray(main) && main.length > 0, `${path} FAQPage needs mainEntity`);
    if (Array.isArray(main)) {
      for (const question of main) {
        const q = asRecord(question, `${path} question`);
        if (!q) continue;
        need(typeof q.name === "string" && q.name.length > 0, `${path} question name`);
        const answer = asRecord(q.acceptedAnswer, `${path} answer`);
        need(Boolean(answer && typeof answer.text === "string" && answer.text.length > 0), `${path} answer text`);
      }
    }
  }

  if (types.includes("BreadcrumbList")) {
    const items = node.itemListElement;
    need(Array.isArray(items) && items.length > 0, `${path} breadcrumbs`);
  }

  if (types.includes("RealEstateAgent")) {
    need(typeof node.name === "string", `${path} agent name`);
    need(typeof node.telephone === "string" && node.telephone.length > 0, `${path} agent telephone`);
    const address = asRecord(node.address, `${path} address`);
    need(Boolean(address && typeof address.streetAddress === "string"), `${path} street`);
    const parent = asRecord(node.parentOrganization, `${path} parent`);
    need(Boolean(parent && typeof parent["@id"] === "string"), `${path} parent organization`);
  }

  if (types.includes("Place") && node.name === "The Paseos") {
    need(Boolean(node.containedInPlace), `${path} containedInPlace`);
  }

  if (types.includes("Article")) {
    need(typeof node.headline === "string", `${path} headline`);
    need(typeof node.datePublished === "string", `${path} datePublished`);
    need(typeof node.dateModified === "string", `${path} dateModified`);
    const author = asRecord(node.author, `${path} author`);
    need(Boolean(author && typeof author["@id"] === "string"), `${path} author id`);
    const page = asRecord(node.mainEntityOfPage, `${path} mainEntityOfPage`);
    need(Boolean(page && typeof page["@id"] === "string" && String(page["@id"]).endsWith("#webpage")), `${path} article page`);
  }

  if (types.includes("Dataset")) {
    need(typeof node.name === "string" && typeof node.description === "string", `${path} dataset`);
  }

  if (types.includes("Person")) {
    need(Boolean(node.hasCredential), `${path} hasCredential`);
    need(Boolean(node.worksFor), `${path} worksFor`);
    need(Array.isArray(node.knowsAbout) && node.knowsAbout.length > 0, `${path} knowsAbout`);
  }
}

for (const entry of allGraphs("https://paseosvillage.example")) {
  for (const graph of entry.graphs) checkGraph(entry.path, graph);
}

need(faqCount >= 30, `FAQ hub has ${faqCount} questions`);

for (const article of articles) {
  need(article.title.length <= 60, `${article.path} title ${article.title.length}: ${article.title}`);
  need(
    article.description.length <= 155,
    `${article.path} description ${article.description.length}`,
  );
  const h1 = article.h1.toLowerCase();
  need(h1.includes("the paseos"), `${article.path} H1 missing The Paseos`);
  need(
    h1.includes("summerlin") || h1.includes("las vegas"),
    `${article.path} H1 missing place`,
  );
  if (article.measured) {
    const count = wordCount(article.answer);
    need(count >= 40 && count <= 60, `${article.path} answer has ${count} words`);
  }
  if (article.longform) {
    const count = articleWordCount(article);
    need(count >= 1200 && count <= 2200, `${article.path} body has ${count} words`);
  }
  if (article.updated) {
    need(/^\d{4}-\d{2}-\d{2}$/.test(article.updated), `${article.path} updated is not YYYY-MM-DD`);
    need(article.updated >= SITE_PUBLISHED, `${article.path} updated precedes publication`);
    need(article.updated <= new Date().toISOString().slice(0, 10), `${article.path} updated is in the future`);
  }
}

const origin = "https://paseosvillage.example";
const bannedKeys = new Set([
  "aggregateRating",
  "review",
  "geo",
  "openingHours",
  "openingHoursSpecification",
  "priceRange",
  "numberOfItems",
]);

function walkKeys(value: unknown, label: string) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    for (const item of value) walkKeys(item, label);
    return;
  }
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (bannedKeys.has(key)) failures.push(`${label} has ${key}`);
    walkKeys(child, label);
  }
}

function definedIds(nodes: unknown[]): Set<string> {
  const ids = new Set<string>();
  const visit = (value: unknown) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record).filter((key) => key !== "@id" && key !== "@context");
    if (typeof record["@id"] === "string" && keys.length > 0) ids.add(record["@id"]);
    for (const child of Object.values(record)) visit(child);
  };
  for (const node of nodes) visit(node);
  return ids;
}

function referencedIds(nodes: unknown[]): string[] {
  const refs: string[] = [];
  const visit = (value: unknown) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record).filter((key) => key !== "@id" && key !== "@context");
    if (typeof record["@id"] === "string" && keys.length === 0) refs.push(record["@id"]);
    for (const child of Object.values(record)) visit(child);
  };
  for (const node of nodes) visit(node);
  return refs;
}

const site = siteGraphs(origin);
const brokerage = site.find((node) => node["@id"] === `${origin}/#brokerage`);
need(brokerage?.["@type"] === "Organization" && brokerage.name === BROKERAGE, "brokerage node");
const person = site.find((node) => node["@id"] === `${origin}/#person`);
const worksFor = asRecord(person?.worksFor, "person worksFor");
need(worksFor?.["@id"] === `${origin}/#brokerage`, "person worksFor brokerage");

for (const article of articles) {
  const graphs = [...site, ...pageGraphs(article, origin)];
  const ids = definedIds(graphs);
  for (const ref of referencedIds(graphs)) {
    need(ids.has(ref), `${article.path} unresolved ${ref}`);
    need(!ref.endsWith("#org") && !ref.endsWith("#business") && !ref.endsWith("/about#person"), `${article.path} stale id ${ref}`);
  }
  const serialized = JSON.stringify(graphs);
  need(!serialized.includes("/about#person") && !serialized.includes("#org") && !serialized.includes("#business"), `${article.path} stale anchor`);
  walkKeys(graphs, article.path);
  for (const issue of contentIssues(serialized)) failures.push(`${article.path} schema: ${issue}`);

  const pages = graphs.filter((node) => String(node["@id"]).endsWith("#webpage"));
  need(pages.length === 1, `${article.path} webpage count ${pages.length}`);
  const page = pages[0];
  const partOf = asRecord(page?.isPartOf, `${article.path} isPartOf`);
  need(partOf?.["@id"] === `${origin}/#website`, `${article.path} isPartOf`);
  need(page?.datePublished === SITE_PUBLISHED, `${article.path} datePublished`);
  need(page?.dateModified === articleUpdated(article), `${article.path} dateModified`);
  const speakable = asRecord(page?.speakable, `${article.path} speakable`);
  const selectors = speakable?.cssSelector;
  need(Array.isArray(selectors) && selectors.includes("h1") && selectors.includes("#direct-answer"), `${article.path} speakable`);

  const crumbs = crumbsFor(article);
  const breadcrumb = graphs.find((node) => node["@type"] === "BreadcrumbList");
  const items = breadcrumb?.itemListElement;
  need(Array.isArray(items) && items.length === crumbs.length, `${article.path} crumb count`);
  if (article.path.startsWith("/neighborhoods/") && article.path !== "/neighborhoods") {
    need(crumbs.length === 3 && crumbs[1]?.path === "/neighborhoods", `${article.path} neighborhood crumb`);
  }
  if (article.path.startsWith("/paseos-vs/")) need(crumbs.length === 2, `${article.path} comparison crumb`);

  const markdown = articleMarkdown(article, origin);
  need(markdown.startsWith(`# ${article.h1}\n`), `${article.path} markdown heading`);
  need(markdown.includes(article.answer), `${article.path} markdown answer`);
  for (const issue of contentIssues(markdown)) failures.push(`${article.path} markdown: ${issue}`);
}

const list = pageGraphs(articles.find((article) => article.path === "/neighborhoods")!, origin).find(
  (node) => node["@type"] === "ItemList",
);
const listed = list?.itemListElement;
need(Array.isArray(listed) && listed.length === neighborhoods.length, "neighborhood list length");
if (Array.isArray(listed)) {
  neighborhoods.forEach((item, index) => {
    const row = listed[index] as { url?: string; name?: string };
    need(row?.name === item.name && row.url === `${origin}/neighborhoods/${item.slug}`, `list ${item.slug}`);
  });
}

const llms = llmsText(origin);
const llmsLines = llms.split("\n");
need(llmsLines[0]?.startsWith("# "), "llms title");
const nextText = llmsLines.map((line) => line.trim()).filter(Boolean)[1] ?? "";
need(nextText.startsWith("> "), "llms blockquote");
const headings = llmsLines.filter((line) => line.startsWith("#"));
need(
  headings.length === 3 && headings[1] === "## Pages" && headings[2] === "## Optional",
  `llms headings ${headings.join(" | ")}`,
);
need(!llmsLines.some((line) => line.startsWith("###")), "llms has no H3");
const link = /^- \[[^\]]+\]\(https?:\/\/[^)\s]+\)(: .+)?$/;
let section = "";
for (const line of llmsLines) {
  if (line.startsWith("## ")) section = line;
  if (section && line.startsWith("- ")) need(link.test(line), `llms link ${line}`);
}
for (const issue of contentIssues(llms)) failures.push(`llms.txt: ${issue}`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Schema OK for ${articles.length} pages.`);
