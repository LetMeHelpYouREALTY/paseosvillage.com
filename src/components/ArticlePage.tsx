import Link from "next/link";
import type { ReactNode } from "react";
import { ExpertNote } from "@/components/ExpertNote";
import { FactsTable } from "@/components/FactsTable";
import { FaqList } from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { OfficeVisit } from "@/components/OfficeVisit";
import { PhotoSlot } from "@/components/PhotoSlot";
import { TrackedCall } from "@/components/TrackedCall";
import type { Article } from "@/content/types";
import { pageGraphs } from "@/lib/schema";
import { AGENT_NAME, CONTENT_UPDATED_LABEL, SITE_PHONE } from "@/lib/site";

const sharedLinks = [
  { href: "/", label: "The Paseos in Summerlin" },
  { href: "/market-report", label: "The Paseos market report" },
  { href: "/homes-for-sale", label: "Homes for sale in The Paseos" },
];

function crumbsFor(article: Article): { name: string; path: string }[] {
  const crumbs = [{ name: "The Paseos Summerlin", path: "/" }];
  if (article.path.startsWith("/neighborhoods/") && article.path !== "/neighborhoods") {
    crumbs.push({ name: "Neighborhoods in The Paseos", path: "/neighborhoods" });
  }
  if (article.path.startsWith("/paseos-vs/")) {
    crumbs.push({ name: "The Paseos comparisons", path: "/neighborhoods" });
  }
  if (article.path !== "/") crumbs.push({ name: article.h1, path: article.path });
  return crumbs;
}

export function ArticlePage({
  article,
  insert,
  children,
}: {
  article: Article;
  insert?: ReactNode;
  children?: ReactNode;
}) {
  const crumbs = crumbsFor(article);
  const related = [...sharedLinks, ...(article.related ?? [])].filter(
    (link) => link.href !== article.path,
  );
  const showOffice = article.path === "/" || article.path === "/about" || article.path === "/contact";
  return (
    <main id="main">
      {pageGraphs(article).map((graph) => (
        <JsonLd key={String(graph["@id"])} data={graph} />
      ))}
      <article>
        <header className="section pb-8">
          <div className="shell">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm">
              <ol className="flex flex-wrap gap-2">
                {crumbs.map((crumb, index) => (
                  <li key={crumb.path} className="flex gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {index === crumbs.length - 1 ? (
                      <span>{crumb.name}</span>
                    ) : (
                      <Link href={crumb.path}>{crumb.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl">{article.h1}</h1>
            <p className="answer mt-6">{article.answer}</p>
            <p className="mt-6 text-sm">
              Last updated {CONTENT_UPDATED_LABEL}. By <Link href="/about">{AGENT_NAME}</Link>.
            </p>
          </div>
        </header>
        <div className="shell pb-8">
          <PhotoSlot
            label={`Streetscape in The Paseos, Summerlin, Las Vegas 89138, for ${article.h1}`}
          />
        </div>
        <section className="section pt-0" data-reveal>
          <div className="shell">
            <FactsTable ids={article.factIds} />
          </div>
        </section>
        {insert ? <div className="shell pb-16">{insert}</div> : null}
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="section" data-reveal>
            <div className="shell max-w-3xl">
              <h2>{section.heading}</h2>
              <p className="mt-5 font-medium">{section.answer}</p>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        {children}
        <div className="shell pb-4">
          <ExpertNote page={article.h1} />
        </div>
        <FaqList faqs={article.faqs} />
        <section className="section" data-reveal>
          <div className="shell">
            <hr className="rule mb-10" />
            {article.cta === "form" ? (
              <>
                <h2>Ask Dr. Jan about The Paseos</h2>
                <div className="mt-6">
                  <LeadForm
                    page={article.path}
                    intent={article.path === "/sell" ? "sell" : article.path === "/buy" ? "buy" : "question"}
                  />
                </div>
              </>
            ) : null}
            {article.cta === "call" && !showOffice ? (
              <>
                <h2>Talk with Dr. Jan</h2>
                <p className="mt-4 max-w-xl">One next step: call the tracking line for this site.</p>
                <TrackedCall className="btn mt-4">Call {SITE_PHONE}</TrackedCall>
              </>
            ) : null}
            {article.cta === "search" && article.path !== "/homes-for-sale" ? (
              <>
                <h2>Search homes in The Paseos</h2>
                <p className="mt-4 max-w-xl">
                  <Link href="/homes-for-sale">Open homes for sale in The Paseos, Summerlin</Link>.
                </p>
              </>
            ) : null}
            <nav aria-label="Related reading" className="mt-10 flex flex-col gap-2">
              {related.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
        {showOffice ? <OfficeVisit /> : null}
      </article>
    </main>
  );
}
