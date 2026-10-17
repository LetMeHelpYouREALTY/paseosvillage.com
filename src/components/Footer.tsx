import Link from "next/link";
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  BROKERAGE,
  LICENSE,
  OFFICE_ADDRESS,
  SITE_PHONE,
} from "@/lib/site";

const links = [
  ["Homes for sale", "/homes-for-sale"],
  ["Neighborhoods", "/neighborhoods"],
  ["Living in The Paseos", "/living-in-the-paseos"],
  ["Market report", "/market-report"],
  ["Schools", "/schools"],
  ["Buy", "/buy"],
  ["Sell", "/sell"],
  ["FAQ", "/faq"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-dusk text-sand">
      <div className="shell section">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-4xl text-sand">The Paseos</p>
            <p className="mt-4 max-w-xl text-sand">
              {AGENT_NAME}, {AGENT_CREDENTIAL} · Nevada License {LICENSE} · {BROKERAGE} ·{" "}
              {OFFICE_ADDRESS} · {SITE_PHONE}
            </p>
            <dl className="mt-4 max-w-xl text-sm text-sand">
              <div className="grid grid-cols-[8rem_1fr] gap-2 py-1">
                <dt>Name</dt>
                <dd>{AGENT_NAME}</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-2 py-1">
                <dt>License</dt>
                <dd>{LICENSE}</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-2 py-1">
                <dt>Brokerage</dt>
                <dd>{BROKERAGE}</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-2 py-1">
                <dt>Address</dt>
                <dd>{OFFICE_ADDRESS}</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-2 py-1">
                <dt>Phone</dt>
                <dd>{SITE_PHONE}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sand">Hours: TODO-VERIFY against the Google Business Profile.</p>
            <div className="mt-6 flex items-center gap-3 text-sand">
              <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
                <rect x="4" y="4" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M12 30 L32 14 L52 30 V50 H12 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M28 38 H36 M32 34 V42" stroke="currentColor" strokeWidth="3" />
              </svg>
              <span>Equal Housing Opportunity</span>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-2" aria-label="Footer">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sand">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <hr className="rule my-8" />
        <p className="text-sm text-sand">
          IDX / MLS disclaimer: TODO-VERIFY brokerage listing disclaimer before launch. Listing
          information is not guaranteed. Confirm details with the listing brokerage.
        </p>
      </div>
    </footer>
  );
}
