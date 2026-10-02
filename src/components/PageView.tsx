import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import RealScout from "@/components/RealScout";
import { CalendlyButton, CalendlyInline } from "@/components/Calendly";
import { baseURL, siteName } from "@/config";
import { breadcrumbs } from "@/lib/seo";
import {
  calendlyLabels,
  calendlyTypes,
  place,
  realscoutAgentId,
  realscoutSearchUrl,
} from "@/content/site.mjs";
import { sharedImages } from "@/content/pages.mjs";
import type { pages } from "@/content/pages.mjs";

type Page = (typeof pages)[number];
type Img = { src: string };
type CtaKey = keyof typeof calendlyTypes;

const abs = (path: string) => new URL(path, baseURL).href;
const placeNode = {
  "@type": "Place",
  name: `${place.name}, Summerlin`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: place.region,
    postalCode: place.postalCode,
    addressCountry: place.country,
  },
  containedInPlace: { "@type": "Place", name: "Summerlin, Las Vegas, Nevada" },
};

function Picture({
  image,
  alt,
  priority = false,
}: {
  image: Img;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={image.src}
      alt={alt}
      width={1200}
      height={750}
      unoptimized
      priority={priority}
    />
  );
}

export default function PageView({ page }: { page: Page }) {
  const url = abs(page.path);
  const faqs = page.faqFromCards
    ? page.sections.flatMap((s) =>
        s.cards.map((c) => ({ q: c.h3, a: c.text })),
      )
    : page.faqs.map((f) => ({ q: f.q, a: f.a }));
  const crumbs = [{ name: "Home", path: "/" }];
  if (page.path !== "/") crumbs.push({ name: page.navTitle, path: page.path });
  const cta = page.cta as CtaKey;
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": page.key === "about" ? "AboutPage" : "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: page.title,
          description: page.description,
          inLanguage: "en-US",
          isPartOf: { "@id": `${abs("/")}#website` },
          about: [{ "@id": `${abs("/")}#agent` }, placeNode],
          spatialCoverage: placeNode,
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: abs(page.hero.src),
            caption: page.heroAlt,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".page-answer", ".answer"],
          },
          hasPart: page.sections.map((s) => ({
            "@type": "WebPageElement",
            name: s.h2,
            url: `${url}#${s.id}`,
            abstract: s.answer,
          })),
        }}
      />
      <JsonLd data={breadcrumbs(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="hero" aria-labelledby="page-title">
        <div className="shell hero-grid">
          <div>
            <span className="eyebrow">
              THE PASEOS VILLAGE · SUMMERLIN · LAS VEGAS, NV {place.postalCode}
            </span>
            <h1 id="page-title">{page.h1}</h1>
            <p className="lede">{page.lede}</p>
            <p className="page-answer">{page.answer}</p>
            <div className="hero-buttons">
              <CalendlyButton url={calendlyTypes[cta]}>
                {calendlyLabels[cta]}
              </CalendlyButton>
              <a className="button button-outline" href="#listings">
                See Paseos homes
              </a>
            </div>
          </div>
          <figure className="hero-art">
            <Picture image={page.hero} alt={page.heroAlt} priority />
          </figure>
        </div>
      </section>

      <section id="listings" className="listings" aria-labelledby="listings-h2">
        <div className="shell">
          <div className="listings-head">
            <figure className="thumb">
              <Picture
                image={sharedImages[0]}
                alt="Illustration of Paseos Village homes with a for-sale sign and map pin in Summerlin"
              />
            </figure>
            <div>
              <h2 id="listings-h2">Search Paseos Village homes for sale</h2>
              <p className="answer">
                Live Summerlin MLS listings from Dr. Jan Duffy&apos;s RealScout
                search, including The Paseos (ZIP {place.postalCode}).
              </p>
            </div>
          </div>
          {realscoutAgentId ? (
            <RealScout agentId={realscoutAgentId} />
          ) : (
            <div className="realscout-fallback">
              <p className="answer">Browse live listings on RealScout</p>
              <p>
                Open Dr. Duffy&apos;s RealScout home search to filter by price,
                beds and neighborhood, then book a time to tour.
              </p>
              <a
                className="button button-primary"
                href={realscoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the RealScout map search
              </a>
            </div>
          )}
        </div>
      </section>

      {page.sections.map((s, i) => {
        const scta = s.cta as CtaKey;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`section${i % 2 ? " alt" : ""}`}
            aria-labelledby={`${s.id}-h2`}
          >
            <div className="shell">
              <div className="split">
                <div>
                  <h2 id={`${s.id}-h2`}>{s.h2}</h2>
                  <p className="answer">{s.answer}</p>
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <div className="hero-buttons">
                    <CalendlyButton url={calendlyTypes[scta]}>
                      {calendlyLabels[scta]}
                    </CalendlyButton>
                  </div>
                </div>
                <figure className="section-art">
                  <Picture image={s.image} alt={s.alt} />
                </figure>
              </div>
              <div className="cards">
                {s.cards.map((c) => {
                  const ckey = (c.cta || "") as CtaKey | "";
                  return (
                    <article key={c.h3} className="card">
                      <Picture
                        image={c.image}
                        alt={`${c.h3}: illustration for The Paseos Village, Summerlin`}
                      />
                      <h3>{c.h3}</h3>
                      <p>{c.text}</p>
                      {ckey && (
                        <CalendlyButton
                          url={calendlyTypes[ckey]}
                          variant="outline"
                        >
                          {calendlyLabels[ckey]}
                        </CalendlyButton>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section id="faq" className="section" aria-labelledby="faq-h2">
        <div className="shell">
          <div className="listings-head">
            <figure className="thumb">
              <Picture
                image={sharedImages[2]}
                alt="Illustration of a map pin and desk answering questions about The Paseos Village in Summerlin"
              />
            </figure>
            <h2 id="faq-h2">Quick answers about The Paseos and Dr. Duffy</h2>
          </div>
          <div className="faq-list">
            {page.faqs.map((f) => (
              <article key={f.q} className="faq-item">
                <Picture
                  image={f.image}
                  alt={`${f.q}: illustration for The Paseos Village, Summerlin`}
                />
                <div>
                  <h3>{f.q}</h3>
                  <p className="answer">{f.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="section alt" aria-labelledby="book-h2">
        <div className="shell">
          <div className="listings-head">
            <figure className="thumb">
              <Picture
                image={sharedImages[1]}
                alt="Illustration of a booking calendar over Paseos homes and Red Rock mountains"
              />
            </figure>
            <div>
              <h2 id="book-h2">Schedule time with Dr. Jan Duffy</h2>
              <p className="answer">
                Pick a time that works for you on Dr. Duffy&apos;s calendar. No
                forms. {siteName}.
              </p>
            </div>
          </div>
          <CalendlyInline url={calendlyTypes[cta]} />
          <p className="small-note">
            Calendly not loading?{" "}
            <a href={calendlyTypes[cta]} target="_blank" rel="noopener noreferrer">
              Open the booking page
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
