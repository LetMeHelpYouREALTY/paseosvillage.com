import { ArticlePage } from "@/components/ArticlePage";
import { aboutArticle } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(aboutArticle);

export default function Page() {
  return <ArticlePage article={aboutArticle} />;
}
