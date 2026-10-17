import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { facts } from "../src/data/paseos";

const roots = ["src", "docs"];
const hits: { marker: string; path: string; line: number; text: string }[] = [];

function walk(dir: string) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walk(path);
      continue;
    }
    if (!/\.(ts|tsx|md|mjs|css)$/.test(entry)) continue;
    const lines = readFileSync(path, "utf8").split("\n");
    lines.forEach((text, index) => {
      for (const marker of ["TODO-PHOTO", "TODO-VERIFY", "TODO-EXPERT"]) {
        if (text.includes(marker)) hits.push({ marker, path, line: index + 1, text: text.trim().slice(0, 180) });
      }
    });
  }
}

for (const root of roots) walk(root);

const held = facts.filter((fact) => !fact.publish || fact.value === null || !fact.verified);
const lines = [
  "# Launch checklist — The Paseos Summerlin",
  "",
  "Generated from the source tree. Do not deploy until Dr. Jan clears this list.",
  "",
  "## Markers",
  "",
  ...hits.map((hit) => `- \`${hit.marker}\` ${hit.path}:${hit.line} — ${hit.text}`),
  "",
  "## Facts still unverified or unpublished",
  "",
  ...held.map(
    (fact) =>
      `- ${fact.id}: ${fact.label} = ${fact.value ?? "null"} (${fact.source}, ${fact.asOf}). ${fact.note ?? ""}`,
  ),
  "",
  "## Before launch",
  "",
  "- Replace SITE_PHONE in src/lib/phone.ts with this site’s tracking number.",
  "- Match the office NAP to the Google Business Profile, character for character, including hours.",
  "- Pull a fresh MLS median and put it in src/data/paseos.ts with source, URL, and month.",
  "- Choose or discard the conflicting acreage and home-count claims.",
  "- Paste the brokerage IDX disclaimer over the footer marker.",
  "- Add Dr. Jan’s photos from docs/photo-brief.md and her expert notes.",
  "",
];

writeFileSync("docs/launch-checklist.md", lines.join("\n"));
console.log(`Wrote docs/launch-checklist.md with ${hits.length} markers.`);
