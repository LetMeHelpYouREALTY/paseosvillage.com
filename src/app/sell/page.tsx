import { ArticlePage } from "@/components/ArticlePage";
import { sellArticle } from "@/content/buy-sell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(sellArticle);

export default function Page() {
  return <ArticlePage article={sellArticle} />;
}
