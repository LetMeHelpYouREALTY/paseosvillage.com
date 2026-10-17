import { ArticlePage } from "@/components/ArticlePage";
import { schoolsArticle } from "@/content/schools";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(schoolsArticle);

export default function Page() {
  return <ArticlePage article={schoolsArticle} />;
}
