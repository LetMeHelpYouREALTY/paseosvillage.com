import { notFound } from "next/navigation";
import PageView from "@/components/PageView";
import { pages } from "@/content/pages.mjs";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
const inner = pages.filter((p) => p.path !== "/");
const find = (slug: string) => inner.find((p) => p.path === `/${slug}`);

export function generateStaticParams() {
  return inner.map((p) => ({ slug: p.path.slice(1) }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const page = find((await params).slug);
  return page ? pageMetadata(page.title, page.path, page.description) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const page = find((await params).slug);
  if (!page) notFound();
  return <PageView page={page} />;
}
