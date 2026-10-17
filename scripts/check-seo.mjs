import assert from "node:assert/strict";

const base = (process.env.SEO_CHECK_URL || "http://localhost:3000").replace(/\/$/, "");
const pages = [
  "/",
  "/homes-for-sale",
  "/market-report",
  "/neighborhoods",
  "/neighborhoods/capistrano",
  "/living-in-the-paseos",
  "/schools",
  "/buy",
  "/sell",
  "/paseos-vs/stonebridge",
  "/faq",
  "/about",
  "/contact",
];
const decode = (value) =>
  value
    ?.replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"');
const attr = (tag, name) => decode(tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1]);
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "g")) || [];
const meta = (html, name) =>
  attr(
    tags(html, "meta").find((tag) => attr(tag, "name") === name || attr(tag, "property") === name) || "",
    "content",
  );
const canonical = (html) =>
  attr(tags(html, "link").find((tag) => attr(tag, "rel") === "canonical") || "", "href");

let count = 0;
const check = (condition, message) => {
  assert.ok(condition, message);
  count++;
};

const results = await Promise.all(
  pages.map(async (path) => {
    const response = await fetch(base + path);
    check(response.status === 200, `${path}: status ${response.status}`);
    return [path, await response.text()];
  }),
);
const origin = new URL(canonical(results[0][1])).origin;
const indexable = !meta(results[0][1], "robots")?.includes("noindex");

for (const [path, html] of results) {
  const expected = new URL(path, origin).href;
  check(new URL(canonical(html)).href === expected, `${path}: canonical`);
  check(new URL(meta(html, "og:url")).href === expected, `${path}: OG URL`);
  check((meta(html, "description") || "").length > 20, `${path}: description`);
  check((meta(html, "description") || "").length <= 155, `${path}: description length`);
  check(meta(html, "twitter:card") === "summary_large_image", `${path}: Twitter card`);
  check(meta(html, "robots")?.includes(indexable ? "index" : "noindex"), `${path}: indexing`);
  check(tags(html, "h1").length === 1, `${path}: one H1`);
  check(html.toLowerCase().includes("the paseos"), `${path}: The Paseos`);
  check(meta(html, "og:image")?.startsWith(`${origin}/api/og?title=`), `${path}: OG image`);
  check(html.includes("RealEstateAgent"), `${path}: agent schema`);
  check(html.includes("702-XXX-XXXX"), `${path}: site phone`);
  check(html.includes("Last updated"), `${path}: updated line`);
  check(!/\bfamily-friendly\b|\bexclusive\b|\bgood schools\b/i.test(html), `${path}: fair housing`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    JSON.parse(json);
    count++;
  }
}
check(results.find(([path]) => path === "/contact")?.[1].includes("<form"), "contact form");
check(results.find(([path]) => path === "/faq")?.[1].includes("FAQPage"), "faq schema");

const sitemap = await fetch(`${base}/sitemap.xml`);
check(sitemap.status === 200, "sitemap status");
const xml = await sitemap.text();
for (const path of pages) {
  check(xml.includes(`<loc>${new URL(path, origin).href}</loc>`) === indexable, `${path}: sitemap`);
}
const robots = await fetch(`${base}/robots.txt`);
check(robots.status === 200, "robots status");
const robotsText = await robots.text();
check(robotsText.includes("Allow: /"), "robots allow");
check(robotsText.includes("GPTBot"), "GPTBot");
check(robotsText.includes("PerplexityBot"), "PerplexityBot");
check(robotsText.includes("Sitemap:") === indexable, "robots sitemap policy");

const missing = await fetch(`${base}/paseos-missing`);
check(missing.status === 404, "real 404");
const legacy = await fetch(`${base}/docs`, { redirect: "manual" });
check([307, 308].includes(legacy.status), "legacy docs redirect");
const oldBuy = await fetch(`${base}/buy-homes-in-the-paseos-summerlin`, { redirect: "manual" });
check([307, 308].includes(oldBuy.status), "old buy redirect");

const llms = await fetch(`${base}/llms.txt`);
check(llms.status === 200, "llms.txt");
check((await llms.text()).includes("The Paseos"), "llms body");

const og = await fetch(`${base}/api/og?title=The%20Paseos%20Summerlin`);
check(og.headers.get("content-type")?.includes("image/png"), "og png type");
const bytes = new Uint8Array(await og.arrayBuffer());
check(bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71, "og png bytes");

const badLead = await fetch(`${base}/api/lead`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "A" }),
});
check(badLead.status === 400, "lead validation");
const spam = await fetch(`${base}/api/lead`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Test Person",
    email: "test@example.com",
    phone: "7025550100",
    message: "Looking at Capistrano.",
    company_website: "http://spam.example",
    intent: "buy",
  }),
});
check(spam.status === 200, "honeypot accepted quietly");

const headers = await fetch(base + "/");
check(headers.headers.get("x-content-type-options") === "nosniff", "nosniff");
check(headers.headers.get("content-security-policy")?.includes("em.realscout.com"), "csp realscout");

console.log(`Passed ${count} SEO checks against ${base}; indexable=${indexable}.`);
