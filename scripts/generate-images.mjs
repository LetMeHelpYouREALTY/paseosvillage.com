import fs from "node:fs";
import { renderScene } from "./scene.mjs";
import { allImages } from "../src/content/pages.mjs";
fs.mkdirSync("public/images", { recursive: true });
for (const { id, spec } of allImages) fs.writeFileSync(`public/images/${id}.svg`, renderScene(spec));
console.log(`Wrote ${allImages.length} illustrations.`);
