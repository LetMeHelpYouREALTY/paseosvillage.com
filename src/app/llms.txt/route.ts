import { llmsText } from "@/lib/llms";
import { canIndex } from "@/lib/site-url.mjs";

export function GET() {
  const headers = new Headers({ "Content-Type": "text/markdown; charset=utf-8" });
  if (!canIndex(process.env)) headers.set("X-Robots-Tag", "noindex");
  return new Response(llmsText(), { headers });
}
