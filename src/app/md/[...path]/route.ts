import { notFound } from "next/navigation";
import { articleByPath, articles } from "@/content/registry";
import { articleMarkdown, markdownPath } from "@/lib/markdown";
import { canIndex } from "@/lib/site-url.mjs";
import { siteOrigin } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({
    path: markdownPath(article.path).replace(/^\//, "").replace(/\.md$/, "").split("/"),
  }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  const { path } = await context.params;
  const joined = `/${path.join("/")}`;
  const article = articleByPath(joined === "/index" ? "/" : joined);
  if (!article) notFound();
  const origin = siteOrigin();
  const canonical = new URL(article.path, origin).href;
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    Link: `<${canonical}>; rel="canonical", <${origin}/llms.txt>; rel="describedby"`,
  });
  if (!canIndex(process.env)) headers.set("X-Robots-Tag", "noindex");
  return new Response(articleMarkdown(article, origin), { headers });
}
