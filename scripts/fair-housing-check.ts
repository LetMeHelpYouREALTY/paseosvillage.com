import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { contentIssues } from "./content-rules.mjs";

const phraseRoots = ["app", "content", "data", "src/app", "src/content", "src/data", "src/lib", "src/components"].filter(
  (dir) => {
    try {
      return statSync(dir).isDirectory();
    } catch {
      return false;
    }
  },
);

const disputedRoots = ["src/app", "src/content", "src/components", "src/lib"];

const failures: string[] = [];

function walk(dir: string, disputed: boolean) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path, disputed);
      continue;
    }
    if (!/\.(ts|tsx|js|mjs|md|mdx|json|css)$/.test(entry)) continue;
    const issues = contentIssues(readFileSync(path, "utf8"), { disputed });
    for (const issue of issues) failures.push(`${path}: ${issue}`);
  }
}

for (const root of phraseRoots) walk(root, disputedRoots.includes(root));

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Fair-housing check passed for ${phraseRoots.join(", ")}.`);
