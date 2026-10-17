import { ArticlePage } from "@/components/ArticlePage";
import { homeArticle } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(homeArticle);

export default function Page() {
  return <ArticlePage article={homeArticle} />;
}
