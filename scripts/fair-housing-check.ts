import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "content", "data", "src/app", "src/content", "src/data"].filter((dir) => {
  try {
    return statSync(dir).isDirectory();
  } catch {
    return false;
  }
});

const rules: { label: string; pattern: RegExp }[] = [
  { label: "family-friendly", pattern: /family-friendly/i },
  { label: "family village", pattern: /family village/i },
  { label: "good schools", pattern: /good schools/i },
  { label: "great for kids", pattern: /great for kids/i },
  { label: "established community", pattern: /established community/i },
  { label: "exclusive", pattern: /\bexclusive\b/i },
  { label: "safe", pattern: /\bsafe\b/i },
  { label: "Zillow or Redfin estimate", pattern: /zillow|redfin|zestimate/i },
];

const phone = /(?:\+1[\s.-]?)?(?:\(\s*\d{3}\s*\)|\d{3})[\s.-]\d{3}[\s.-]\d{4}/g;
const allowedPhone = "702-XXX-XXXX";

const failures: string[] = [];

function walk(dir: string) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    if (!/\.(ts|tsx|js|mjs|md|mdx|json|css)$/.test(entry)) continue;
    const text = readFileSync(path, "utf8");
    for (const rule of rules) {
      if (rule.pattern.test(text)) failures.push(`${path}: banned phrase “${rule.label}”`);
    }
    const phones = text.match(phone) ?? [];
    for (const found of phones) {
      if (found !== allowedPhone) failures.push(`${path}: phone ${found} is not SITE_PHONE`);
    }
  }
}

for (const root of roots) walk(root);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Fair-housing check passed for ${roots.join(", ")}.`);
