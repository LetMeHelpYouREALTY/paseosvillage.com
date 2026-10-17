import { TrackedCall } from "@/components/TrackedCall";
import {
  DIRECTIONS_URL,
  GBP_SEARCH_URL,
  GBP_URL,
  MAP_EMBED_URL,
  OFFICE_ADDRESS,
  SITE_PHONE,
} from "@/lib/site";

export function OfficeVisit() {
  const reviews = GBP_URL ?? GBP_SEARCH_URL;
  return (
    <section className="section" data-reveal>
      <div className="shell grid gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Office</p>
          <h2 className="mt-3">Visit or call</h2>
          <p className="mt-4">{OFFICE_ADDRESS}</p>
          <p>Hours: TODO-VERIFY against the Google Business Profile before launch.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedCall className="btn">Call {SITE_PHONE}</TrackedCall>
            <a className="btn btn-ghost" href={DIRECTIONS_URL}>
              Directions
            </a>
            <a className="btn btn-ghost" href={reviews}>
              View Google Reviews
            </a>
          </div>
        </div>
        <iframe
          title={`Map of ${OFFICE_ADDRESS}`}
          src={MAP_EMBED_URL}
          loading="lazy"
          className="min-h-80 w-full border border-gold"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
