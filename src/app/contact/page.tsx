import { ArticlePage } from "@/components/ArticlePage";
import { contactArticle } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(contactArticle);

export default function Page() {
  return <ArticlePage article={contactArticle} />;
}
