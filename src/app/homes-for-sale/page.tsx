import { ArticlePage } from "@/components/ArticlePage";
import { RealScoutSearch } from "@/components/RealScoutSearch";
import { homesArticle } from "@/content/buy-sell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(homesArticle);

export default function Page() {
  return <ArticlePage article={homesArticle} insert={<RealScoutSearch />} />;
}
