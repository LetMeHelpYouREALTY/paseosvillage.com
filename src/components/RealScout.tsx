/** Office listings carousel. Markup matches the RealScout body embed. The script loads once in the root layout. */
export default function RealScout({ agentId }: { agentId: string }) {
  return (
    <div
      className="realscout-office"
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="PRICE_LOW" listing-status="For Sale" property-types=",SFR,TC" price-min="600000" price-max="900000"></realscout-office-listings>`,
      }}
    />
  );
}
