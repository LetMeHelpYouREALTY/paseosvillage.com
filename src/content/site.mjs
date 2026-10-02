/** Public facts about the business. Sources: Nevada license record, BHHS agent page, Calendly profile. */
export const agent = {
  name: "Dr. Jan Duffy",
  credential: "REALTOR®",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  languages: ["English", "Spanish", "German"],
  profile: "https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy",
  sameAs: [
    "https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy",
    "https://www.linkedin.com/in/drjanduffy/",
    "https://www.zillow.com/profile/DrJanDuffy",
    "https://www.instagram.com/drjanduffy/",
    "https://www.facebook.com/DrJanDuffy",
  ],
};

export const calendlyBase =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.replace(/\/$/, "") ||
  "https://calendly.com/drjanduffy";

/** Each booking link is a real event type on Dr. Duffy's Calendly. */
export const calendlyTypes = {
  general: calendlyBase,
  buyer: `${calendlyBase}/buyer-consultation-30-min`,
  listing: `${calendlyBase}/listing-consultation`,
  market: `${calendlyBase}/15min`,
  virtual: `${calendlyBase}/meet-on-zoom`,
  inperson: `${calendlyBase}/in-person-real-estate-consultation`,
  showing: `${calendlyBase}/showing`,
  transition: `${calendlyBase}/realtor_strategy_meeting`,
};

export const calendlyLabels = {
  general: "Book a time with Dr. Duffy",
  buyer: "Book a buyer consultation",
  listing: "Book a listing consultation",
  market: "Book a free market call",
  virtual: "Book a Zoom meeting",
  inperson: "Book an in-person meeting",
  showing: "Book a home showing",
  transition: "Book a private transition call",
};

/** RealScout: set the agent's encoded id to render the live widget. */
export const realscoutAgentId = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || "";
export const realscoutSearchUrl = "https://drjanduffy.realscout.com/homesearch/map";

export const nav = [
  ["Buy", "/buy-homes-in-the-paseos-summerlin"],
  ["Sell", "/sell-your-paseos-summerlin-home"],
  ["Relocate", "/relocate-to-the-paseos-summerlin"],
  ["Village Guide", "/the-paseos-village-guide"],
  ["FAQ", "/paseos-village-faq"],
  ["About", "/about-dr-jan-duffy"],
];

/** Shared geographic facts reused as structured data. */
export const place = {
  name: "The Paseos Village",
  locality: "Summerlin, Las Vegas",
  region: "NV",
  postalCode: "89138",
  country: "US",
};
