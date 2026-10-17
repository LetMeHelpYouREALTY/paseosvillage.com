import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { neighborhoodArticle } from "@/content/neighborhood-articles";
import { neighborhoodBySlug, neighborhoods } from "@/data/neighborhoods";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return neighborhoods.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = neighborhoodBySlug(slug);
  if (!neighborhood) return {};
  return pageMetadata(neighborhoodArticle(neighborhood));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoodBySlug(slug);
  if (!neighborhood) notFound();
  const article = neighborhoodArticle(neighborhood);
  return (
    <ArticlePage article={article}>
      <section className="section">
        <div className="shell max-w-3xl">
          <h2>At a glance: {neighborhood.name}</h2>
          <dl className="mt-6">
            <div className="grid grid-cols-[9rem_1fr] gap-3 border-b border-stone py-3">
              <dt>Builder</dt>
              <dd>{neighborhood.builder}</dd>
            </div>
            <div className="grid grid-cols-[9rem_1fr] gap-3 border-b border-stone py-3">
              <dt>Homes</dt>
              <dd>{neighborhood.product}</dd>
            </div>
            <div className="grid grid-cols-[9rem_1fr] gap-3 border-b border-stone py-3">
              <dt>Published sizes</dt>
              <dd>{neighborhood.sqft ?? "Full range not printed in the source"}</dd>
            </div>
            <div className="grid grid-cols-[9rem_1fr] gap-3 border-b border-stone py-3">
              <dt>Source date</dt>
              <dd>{neighborhood.asOf}</dd>
            </div>
          </dl>
        </div>
      </section>
    </ArticlePage>
  );
}
