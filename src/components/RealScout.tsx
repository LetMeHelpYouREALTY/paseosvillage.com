"use client";
import { useEffect, useRef, useState } from "react";
import { realscoutSearchUrl } from "@/content/site.mjs";

const SCRIPT = "https://em.realscout.com/widgets/realscout-web-components.umd.js";
const attrs = {
  "sort-order": "PRICE_LOW",
  "listing-status": "For Sale",
  "property-types": ",SFR,TC",
  "price-min": "600000",
  "price-max": "900000",
};

/**
 * RealScout office-listings widget. The element is created in the browser after
 * hydration so the RealScout script upgrades it; a visible link appears if
 * nothing renders, so visitors are never left with an empty section.
 */
export default function RealScout({ agentId }: { agentId: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    const node = host.current;
    if (!node) return;
    if (!document.querySelector(`script[src="${SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = SCRIPT;
      document.head.appendChild(script);
    }
    const widget = document.createElement("realscout-office-listings");
    widget.setAttribute("agent-encoded-id", agentId);
    for (const [key, value] of Object.entries(attrs)) widget.setAttribute(key, value);
    node.replaceChildren(widget);
    const timer = setTimeout(() => {
      const defined = Boolean(customElements.get("realscout-office-listings"));
      if (!defined || widget.getBoundingClientRect().height < 60) setEmpty(true);
    }, 8000);
    return () => {
      clearTimeout(timer);
      node.replaceChildren();
    };
  }, [agentId]);
  return (
    <>
      <div ref={host} className="realscout-host" />
      {empty && (
        <div className="realscout-fallback">
          <p className="answer">The listing feed is taking a moment.</p>
          <p>Open Dr. Duffy&apos;s RealScout search to browse current listings.</p>
          <a className="button button-primary" href={realscoutSearchUrl} target="_blank" rel="noopener noreferrer">
            Open the RealScout map search
          </a>
        </div>
      )}
    </>
  );
}
