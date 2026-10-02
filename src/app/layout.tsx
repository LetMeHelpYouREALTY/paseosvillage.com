import "@/app/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
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
  "@type": ["RealEstateAgent", "LocalBusiness"],
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
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={agentNode} />
        <JsonLd data={siteNode} />
        <Header />
        {children}
        <Footer />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
