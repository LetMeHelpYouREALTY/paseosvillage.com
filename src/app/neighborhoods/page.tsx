import Link from "next/link";
import { ArticlePage } from "@/components/ArticlePage";
import { neighborhoodIndex } from "@/content/neighborhood-articles";
import { neighborhoods } from "@/data/neighborhoods";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(neighborhoodIndex);

export default function Page() {
  return (
    <ArticlePage article={neighborhoodIndex}>
      <section className="section">
        <div className="shell">
          <h2>Neighborhood pages</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {neighborhoods.map((item) => (
              <li key={item.slug}>
                <Link href={`/neighborhoods/${item.slug}`}>
                  {item.name} in The Paseos, Summerlin
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ArticlePage>
  );
}
