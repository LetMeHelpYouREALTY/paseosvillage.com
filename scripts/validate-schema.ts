import { articles } from "../src/content/registry";
import { faqCount } from "../src/content/faq";
import { allGraphs, articleWordCount } from "../src/lib/schema";
import { wordCount } from "../src/lib/words";

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
    need(Boolean(parent && typeof parent.name === "string"), `${path} parent organization`);
  }

  if (types.includes("WebSite")) {
    const action = asRecord(node.potentialAction, `${path} search`);
    need(action?.["@type"] === "SearchAction", `${path} SearchAction`);
  }

  if (types.includes("Place") && node.name === "The Paseos") {
    need(Boolean(node.containedInPlace), `${path} containedInPlace`);
  }

  if (types.includes("Article")) {
    need(typeof node.headline === "string", `${path} headline`);
    need(typeof node.datePublished === "string", `${path} datePublished`);
    need(typeof node.dateModified === "string", `${path} dateModified`);
    const author = asRecord(node.author, `${path} author`);
    need(Boolean(author && typeof author.name === "string"), `${path} author name`);
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
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Schema OK for ${articles.length} pages.`);
