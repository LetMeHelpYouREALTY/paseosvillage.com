export type Comparison = {
  slug: string;
  name: string;
  summary: string;
  sourceUrl: string;
  asOf: string;
  rows: { label: string; paseos: string; other: string }[];
  paragraphs: string[];
};

const VILLAGES = "https://summerlin.com/live/villages/";
const STONE = "https://summerlin.com/summerlin-stonebridge-village-offers-range-of-new-homes-in-stunning-location/";
const CLOSEOUT = "https://summerlin.com/six-neighborhoods-in-summerlin-nearing-close-out/";
const POOLS = "https://summerlin.com/community-centers-pools-parks-add-to-summertime-fun-in-summerlin/";
const TOP5 = "https://summerlin.com/the-top-five-reasons-to-live-in-the-paseos-village/";

export const comparisons: Comparison[] = [
  {
    slug: "the-vistas",
    name: "The Vistas",
    summary:
      "Summerlin.com describes The Vistas Community Center and pool as resident amenities a short trip from The Paseos. This page does not treat The Vistas as a second name for the village.",
    sourceUrl: CLOSEOUT,
    asOf: "before April 2019",
    rows: [
      {
        label: "What it is in the source",
        paseos: "A Summerlin village west of the 215",
        other: "A resident community center and pool",
      },
      {
        label: "Parks named for The Paseos",
        paseos: "The Paseos Park and Fox Hill Park",
        other: "Not described as the home of those two parks",
      },
      {
        label: "Distance note",
        paseos: "About one mile to Downtown Summerlin",
        other: "Described as minutes from The Paseos neighborhoods",
      },
    ],
    paragraphs: [
      "The close-out article on Summerlin.com says the Vistas Community Center and pool are Summerlin resident amenities located just minutes from The Paseos neighborhoods. A later parks article lists The Vistas with The Trails and The Willows as resident-only centers with pools.",
      "That is a different kind of place from The Paseos. The Paseos is the village. The Vistas, in these articles, is a center and pool. Do not swap the names in a listing or a search.",
      "The pool article describes a large pool, a water slide, and a lagoon at The Vistas. Access rules for resident centers were not quoted in full. Confirm current access with Summerlin before you treat the pool as part of a purchase.",
      "No acreage, home count, or price comparison is printed here. Those figures are either conflicting or unpublished. See the market report for what this site will and will not state.",
    ],
  },
  {
    slug: "stonebridge",
    name: "Stonebridge",
    summary:
      "Stonebridge is a separate Summerlin village. Summerlin.com placed it on elevated ground along the western edge and named Stonebridge Park, with The Paseos and Fox Hill listed as other nearby parks.",
    sourceUrl: STONE,
    asOf: "UNKNOWN",
    rows: [
      {
        label: "Place type",
        paseos: "Village west of the 215",
        other: "Separate village on the western edge",
      },
      {
        label: "Park named in the article",
        paseos: "The Paseos Park, more than 12 acres",
        other: "Stonebridge Park, described then as a 12-acre park under development",
      },
      {
        label: "School named in the article",
        paseos: "Vassiliadis Elementary is named for The Paseos",
        other: "Doral Academy Red Rock is named for Stonebridge",
      },
    ],
    paragraphs: [
      "Summerlin.com called Stonebridge a village on elevated topography along the western edge of Summerlin. The Paseos is also west of the 215 and also described as elevated. They are still two villages. A buyer should search the village name that is on the listing.",
      "The Stonebridge article said a 12-acre village park was under development, with lighted soccer fields, basketball, an exercise area, pickleball, and picnic ramadas. “Under development” is not a statement that the park still matches that plan. Current park details need a fresh check.",
      "The same article listed nearby parks as The Vistas, The Paseos, and Fox Hill, and named Doral Academy Red Rock as a charter school in Stonebridge. It also named Givens and Vassiliadis Elementary, Rogich Middle School, Palo Verde High School, and West Career and Technical Academy as other nearby schools. Nearby is not the same as zoned. Use the Clark County School District address search.",
      "Home prices and plan counts from that construction-era article are omitted. They are not a 2026 market comparison.",
    ],
  },
  {
    slug: "summerlin-centre",
    name: "Summerlin Centre",
    summary:
      "On the Summerlin villages page retrieved October 17, 2026, Summerlin Centre is an actively selling area just west of the 215 on Charleston Boulevard, with lock-and-leave homes and a link to Downtown Summerlin.",
    sourceUrl: VILLAGES,
    asOf: "2026-10-17",
    rows: [
      {
        label: "How Summerlin.com lists it now",
        paseos: "Not in the actively selling village list on that page",
        other: "Listed among actively selling villages",
      },
      {
        label: "Product note",
        paseos: "A mix of single-family, townhome, and condominium neighborhoods from earlier articles",
        other: "Lock-and-leave homes, per the villages page",
      },
      {
        label: "Road note",
        paseos: "Short distance west of the 215",
        other: "Off Charleston Boulevard, just west of the 215",
      },
    ],
    paragraphs: [
      "The villages page on Summerlin.com, retrieved October 17, 2026, lists Summerlin Centre among areas that are actively selling. The short description says lock-and-leave homes and connectivity to Downtown Summerlin, off Charleston Boulevard just west of the 215.",
      "The Paseos does not appear in that actively selling list. Older Summerlin.com articles already treated The Paseos as a built village with named neighborhoods. Active builder sales and resale housing are different searches.",
      "Both places are described near the west side of the 215, and both are tied to Downtown Summerlin in the sources above. The Paseos distance in the February 28, 2019 article is about one mile. A drive time between Summerlin Centre and The Paseos is not published here.",
      "Use Homes for Sale to see live listings, and use the market report for village-level stats once an MLS pull is verified. This comparison does not rank the two places.",
    ],
  },
];

export function comparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((item) => item.slug === slug);
}

export const comparisonSources = { VILLAGES, STONE, CLOSEOUT, POOLS, TOP5 };
