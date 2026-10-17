import { ArticlePage } from "@/components/ArticlePage";
import { livingArticle } from "@/content/living";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(livingArticle);

export default function Page() {
  return <ArticlePage article={livingArticle} />;
}
