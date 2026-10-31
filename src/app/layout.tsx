import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { MotionRoot } from "@/components/MotionRoot";
import { TrackedCall } from "@/components/TrackedCall";
import { canIndex } from "@/lib/site-url.mjs";
import { siteGraphs } from "@/lib/schema";
import { SITE_NAME, SITE_PHONE, siteOrigin } from "@/lib/site";

import Script from "next/script";
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-cormorant",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

const origin = siteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: SITE_NAME,
  description:
    "The Paseos, a Summerlin village in Las Vegas, NV 89138, with Dr. Jan Duffy.",
  robots: { index: canIndex(process.env), follow: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="describedby" href={`${origin}/llms.txt`} />
      </head>
      <body className="pb-16 lg:pb-0">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {siteGraphs().map((graph) => (
          <JsonLd key={String(graph["@id"])} data={graph} />
        ))}
        <Header />
        {children}
        <Footer />
        <TrackedCall className="sticky-call">Call {SITE_PHONE}</TrackedCall>
        <MotionRoot />
        <Analytics />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        ) : null}
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");}
        `}</Script>
</body>
    </html>
  );
}
