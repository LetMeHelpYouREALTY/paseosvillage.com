import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { comparisonArticles } from "@/content/comparison-articles";
import { comparisonBySlug, comparisons } from "@/data/comparisons";
import { formatAsOf } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return comparisons.map((item) => ({ compare: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ compare: string }>;
}) {
  const { compare } = await params;
  const article = comparisonArticles.find((item) => item.path === `/paseos-vs/${compare}`);
  if (!article) return {};
  return pageMetadata(article);
}

export default async function Page({ params }: { params: Promise<{ compare: string }> }) {
  const { compare } = await params;
  const article = comparisonArticles.find((item) => item.path === `/paseos-vs/${compare}`);
  const data = comparisonBySlug(compare);
  if (!article || !data) notFound();
  return (
    <ArticlePage article={article}>
      <section className="section">
        <div className="shell overflow-x-auto">
          <table>
            <caption className="pb-3 text-left font-display text-2xl">
              The Paseos and {data.name}
            </caption>
            <thead>
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">The Paseos</th>
                <th scope="col">{data.name}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.paseos}</td>
                  <td>{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm">
            Source: <a href={data.sourceUrl}>{data.sourceUrl}</a>. As of {formatAsOf(data.asOf)}.
          </p>
        </div>
      </section>
    </ArticlePage>
  );
}
