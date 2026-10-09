import { baseURL, siteName } from "@/config";
import { pages } from "@/content/pages.mjs";
import { agent, place } from "@/content/site.mjs";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${siteName}`,
    "",
    `> Hyper-local real estate guidance for The Paseos Village in Summerlin, Las Vegas, NV ${place.postalCode}, from ${agent.name}, ${agent.credential} with ${agent.brokerage} (Nevada license ${agent.license}).`,
    "",
    "## Pages",
    ...pages.map((p) => `- [${p.title}](${new URL(p.path, baseURL).href}): ${p.answer}`),
  ];
  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
