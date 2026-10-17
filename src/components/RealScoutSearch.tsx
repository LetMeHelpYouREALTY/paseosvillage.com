"use client";

import Script from "next/script";
import { REALSCOUT_AGENT_ID, REALSCOUT_SEARCH_URL } from "@/lib/site";

export function RealScoutSearch() {
  const id = /^[A-Za-z0-9_-]+$/.test(REALSCOUT_AGENT_ID) ? REALSCOUT_AGENT_ID : "";
  if (!id) {
    return (
      <p>
        <a href={REALSCOUT_SEARCH_URL}>Open the live home search</a>
      </p>
    );
  }
  const markup = `<realscout-office-listings agent-encoded-id="${id}" sort-order="PRICE_HIGH" listing-status="For Sale" property-types=",SFR,TC"></realscout-office-listings>`;
  return (
    <div>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="lazyOnload"
        type="module"
      />
      <p className="mb-4 max-w-2xl text-base">
        Filter the search to ZIP 89138, then confirm the listing names The Paseos or a neighborhood
        on this site.{" "}
        <a href={REALSCOUT_SEARCH_URL}>Open the map search</a>.
      </p>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}
