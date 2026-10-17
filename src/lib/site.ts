import { resolveSiteUrl } from "./site-url.mjs";
import { SITE_PHONE } from "./phone";

export { SITE_PHONE, SITE_PHONE_TEL } from "./phone";

export const SITE_NAME = "The Paseos Summerlin";
export const CONTENT_UPDATED = "2026-10-17";

export const AGENT_NAME = "Dr. Jan Duffy";
export const AGENT_CREDENTIAL = "REALTOR®";
export const LICENSE = "S.0197614.LLC";
export const BROKERAGE = "Berkshire Hathaway HomeServices Nevada Properties";

/**
 * Office line from the BHHS.com agent profile retrieved October 17, 2026.
 * TODO-VERIFY against the Google Business Profile before launch. Character match is required.
 * A shorter line on bhhsnv.com ("8850 W. Sunset, Suite 200") is stored only as a conflict note.
 */
export const OFFICE_STREET = "8850 W Sunset Road Suite 200";
export const OFFICE_CITY = "Las Vegas";
export const OFFICE_REGION = "NV";
export const OFFICE_POSTAL = "89148";
export const OFFICE_ADDRESS = `${OFFICE_STREET}, ${OFFICE_CITY}, ${OFFICE_REGION} ${OFFICE_POSTAL}`;

export const AGENT_PROFILE_URL =
  "https://www.bhhs.com/arizona-properties-california-properties-and-nevada-properties-nv301/las-vegas/dr-jan-duffy/cid-3042332";

export const SAME_AS = [
  AGENT_PROFILE_URL,
  "https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy",
  "https://www.linkedin.com/in/drjanduffy/",
  "https://www.instagram.com/drjanduffy/",
  "https://www.facebook.com/DrJanDuffy",
];

/** TODO-VERIFY: exact Google Business Profile URL. Null until Dr. Jan confirms it. */
export const GBP_URL: string | null = null;

export const GBP_SEARCH_URL = `https://www.google.com/search?q=${encodeURIComponent(
  `${AGENT_NAME} ${BROKERAGE} Las Vegas`,
)}`;

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  OFFICE_ADDRESS,
)}`;

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS,
)}&z=15&output=embed`;

/** TODO-VERIFY: brokerage email shown on the BHHS.com profile. */
export const AGENT_EMAIL = "drduffy@bhhsnv.com";

export const CCSD_ZONING_URL =
  "https://experience.arcgis.com/experience/a9d81ea131dc4e9991362c25396ec9d2";

export const REALSCOUT_AGENT_ID =
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || "QWdlbnQtMjI1MDUw";

export const REALSCOUT_SEARCH_URL = "https://drjanduffy.realscout.com/homesearch/map";

export function siteOrigin(): string {
  return resolveSiteUrl(process.env);
}

export const telephone = SITE_PHONE;
