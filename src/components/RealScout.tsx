"use client";
import { createElement } from "react";
import Script from "next/script";

/** RealScout office-listings web component. Needs the agent's encoded id. */
export default function RealScout({ agentId }: { agentId: string }) {
  return (
    <>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="lazyOnload"
      />
      {createElement("realscout-office-listings", {
        "agent-encoded-id": agentId,
        "sort-order": "NEWEST",
        "listing-status": "For Sale",
        "property-types": "SFR,MF",
        "price-min": "300000",
      })}
    </>
  );
}
