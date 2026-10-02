import PageView from "@/components/PageView";
import { pageByKey } from "@/content/pages.mjs";
import { pageMetadata } from "@/lib/seo";

const page = pageByKey.home;
export const metadata = pageMetadata(page.title, page.path, page.description);
export default function Home() {
  return <PageView page={page} />;
}
