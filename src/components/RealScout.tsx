import { createElement } from "react";

/** RealScout office-listings web component; its script is loaded once in the document head. */
export default function RealScout({ agentId }: { agentId: string }) {
  return createElement("realscout-office-listings", {
    "agent-encoded-id": agentId,
    "sort-order": "PRICE_LOW",
    "listing-status": "For Sale",
    "property-types": ",SFR,TC",
    "price-min": "600000",
    "price-max": "900000",
  });
}
