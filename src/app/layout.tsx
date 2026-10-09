import "@/app/globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { baseURL, description, indexable, siteName } from "@/config";
import { agent, place } from "@/content/site.mjs";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  robots: { index: indexable, follow: true },
};

const agentNode = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${baseURL}/#agent`,
  name: `${agent.name}, ${agent.credential}`,
  url: baseURL,
  description,
  knowsLanguage: agent.languages,
  knowsAbout: [
    "The Paseos Village Summerlin real estate",
    "Summerlin homes for sale",
    "California to Nevada relocation",
  ],
  identifier: { "@type": "PropertyValue", name: "Nevada real estate license", value: agent.license },
  worksFor: { "@type": "Organization", name: agent.brokerage },
  employee: { "@id": `${baseURL}/#person` },
  areaServed: [
    {
      "@type": "Place",
      name: `${place.name}, Summerlin`,
      address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: place.region, postalCode: place.postalCode, addressCountry: place.country },
    },
    { "@type": "City", name: "Las Vegas, Nevada" },
  ],
  sameAs: agent.sameAs,
};
const personNode = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseURL}/#person`,
  name: agent.name,
  jobTitle: agent.credential,
  worksFor: { "@type": "Organization", name: agent.brokerage },
  knowsLanguage: agent.languages,
  sameAs: agent.sameAs,
};
const siteNode = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseURL}/#website`,
  name: siteName,
  url: baseURL,
  inLanguage: "en-US",
  publisher: { "@id": `${baseURL}/#agent` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={agentNode} />
        <JsonLd data={siteNode} />
        <JsonLd data={personNode} />
        <Header />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
