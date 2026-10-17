import { ArticlePage } from "@/components/ArticlePage";
import { privacyArticle } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(privacyArticle);

export default function Page() {
  return <ArticlePage article={privacyArticle} />;
}