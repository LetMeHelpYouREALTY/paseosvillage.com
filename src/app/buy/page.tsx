import { ArticlePage } from "@/components/ArticlePage";
import { RealScoutSearch } from "@/components/RealScoutSearch";
import { buyArticle } from "@/content/buy-sell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(buyArticle);

export default function Page() {
  return <ArticlePage article={buyArticle} insert={<RealScoutSearch />} />;
}
