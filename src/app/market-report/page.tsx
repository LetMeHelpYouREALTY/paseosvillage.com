import { ArticlePage } from "@/components/ArticlePage";
import { marketArticle } from "@/content/market";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(marketArticle);
export const revalidate = 86400;

export default function Page() {
  return <ArticlePage article={marketArticle} />;
}
