import { ArticlePage } from "@/components/ArticlePage";
import { faqArticle } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(faqArticle);

export default function Page() {
  return <ArticlePage article={faqArticle} />;
}
