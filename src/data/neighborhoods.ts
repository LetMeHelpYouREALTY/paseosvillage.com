import { moveInSource } from "./paseos";

const CLOSEOUT = "https://summerlin.com/six-neighborhoods-in-summerlin-nearing-close-out/";
const CONDO =
  "https://summerlin.com/new-condominium-neighborhoods-in-summerlin-add-to-growing-number-of-attached-housing-options/";

export type Neighborhood = {
  slug: string;
  name: string;
  builder: string;
  product: "single-family" | "townhome" | "condominium";
  sqft: string | null;
  planNote: string;
  sourceUrl: string;
  asOf: string;
  parkTie: string;
  detail: string[];
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "capistrano",
    name: "Capistrano",
    builder: "CalAtlantic Homes",
    product: "single-family",
    sqft: "2,557 to 3,020 square feet",
    planNote:
      "Four two-story floor plans. The article described optional front courtyard pools, hidden rooftop decks, accordion-style sliding glass doors, and options for a casita, deck, super loggia, and rooftop fireplace.",
    sourceUrl: CLOSEOUT,
    asOf: "before April 2019",
    parkTie:
      "Summerlin.com grouped Capistrano with other Paseos neighborhoods that share the village parks and trails. A photo caption says Capistrano and Belmonte share an entry.",
    detail: [
      "Capistrano was a CalAtlantic single-family neighborhood in The Paseos. The close-out article described four two-story plans. Sizes ran from 2,557 to 3,020 square feet. That range is a new-home snapshot from that article, not a resale inventory.",
      "The same article described indoor-outdoor doors, rooftop decks, and an optional front courtyard pool. On a resale tour, ask which options the specific house actually has. A rooftop deck on one plan does not mean the house next door has one.",
      "A Summerlin.com caption says Capistrano and Belmonte share an entry. The entry is a design feature. It does not make the two neighborhoods the same product. Belmonte was built by Woodside and was described with larger plans.",
      "Treat list prices in that article as history. They are not a pricing guide for a sale this year. Dr. Jan prices a Capistrano resale from current MLS comparables after she pulls them. Those figures are not on this page yet.",
    ],
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    builder: "CalAtlantic Homes",
    product: "single-family",
    sqft: "2,189 to 2,572 square feet",
    planNote:
      "Six floor plans, including two reverse-living plans with outdoor stairs and second-floor entries. Hidden rooftop decks and open first-floor living were part of the description. Optional first-floor primary suites, kitchen upgrades, a bonus room with a wet bar, and a covered patio were listed.",
    sourceUrl: CLOSEOUT,
    asOf: "before April 2019",
    parkTie:
      "Sarasota sits in The Paseos with the same village parks named by Summerlin.com: The Paseos Park at the center and Fox Hill Park.",
    detail: [
      "Sarasota was a CalAtlantic neighborhood in The Paseos with six floor plans. Published sizes ran from 2,189 to 2,572 square feet. Two plans were reverse-living designs with outdoor stairs and a second-floor entry.",
      "Reverse living changes the tour. The main living level may sit above the entry. Ask to see the stair, the roof deck, and how furniture moves in. A plan name in an old brochure is not proof of what was built on that lot.",
      "The article listed optional first-floor primary suites, kitchen upgrades, a bonus room with a wet bar, and covered patios. Options were choices, not a promise that every Sarasota house includes them.",
      "First-floor living that ties the great room, dining room, and kitchen was part of the new-home story. On a resale, look at whether later owners opened walls, added finishes, or closed a loft. The floor plan on the listing should be checked against the house.",
    ],
  },
  {
    slug: "estrella",
    name: "Estrella",
    builder: "Pulte Homes",
    product: "single-family",
    sqft: "2,058 to 2,455 square feet",
    planNote:
      "Single-story and two-story plans, up to four bedrooms and up to two and a half bathrooms. Larger models were described with ten-foot ceilings, a formal dining room, a courtyard, a covered loggia, and a three-car tandem garage. New homes then included listed energy features such as 15 SEER air conditioning, low-E windows, and a tankless water heater.",
    sourceUrl: CLOSEOUT,
    asOf: "before April 2019",
    parkTie:
      "Estrella is one of the Paseos neighborhoods named alongside the village parks and trails in the Summerlin.com close-out article.",
    detail: [
      "Estrella was a Pulte neighborhood in The Paseos. Plan sizes in the article ran from 2,058 to 2,455 square feet, in one-story and two-story layouts. Bedroom counts were listed up to four. Bathroom counts were listed up to two and a half.",
      "Larger models were described with ten-foot ceilings, a formal dining room, a courtyard, a covered loggia, and a tandem three-car garage. Those features were tied to larger models, not to every address.",
      "The article listed energy equipment that came standard on new Pulte homes at the time, including 15 SEER air conditioning, low-E dual-pane windows, and a tankless water heater. Equipment is replaced over the years. An inspection should identify what is in the house now.",
      "A tandem garage parks one car behind another. If the listing says three-car, confirm the layout on site. Garage depth and storage change how the room works day to day.",
    ],
  },
  {
    slug: "belmonte",
    name: "Belmonte",
    builder: "Woodside Homes",
    product: "single-family",
    sqft: "3,202 to 3,934 square feet",
    planNote:
      "Three floor plans with interior courtyards and large covered patios. The largest plan was described with a primary suite that could connect to an optional retreat, plus a first-floor junior suite.",
    sourceUrl: CLOSEOUT,
    asOf: "before April 2019",
    parkTie:
      "A Summerlin.com caption says Belmonte and Capistrano share an entry in The Paseos. Both use the village park and trail network.",
    detail: [
      "Belmonte was a Woodside neighborhood in The Paseos. The article listed three plans from 3,202 to 3,934 square feet. That is the largest new-home size range among the four neighborhoods in that close-out story.",
      "Interior courtyards and covered patios with multiple glass doors were the design point. Light and outdoor living depend on orientation. Two Belmonte houses on the same plan can feel different if one courtyard faces west toward the afternoon sun.",
      "The largest plan offered a primary suite connected to an optional retreat, and a first-floor junior suite. Optional means the room may be a retreat, a kitchenette, or absent. Read the listing and walk the room.",
      "The shared entry with Capistrano is a gate or monument, not a shared floor plan. Capistrano plans in the same article were smaller and built by CalAtlantic.",
    ],
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    builder: "CalAtlantic Homes",
    product: "townhome",
    sqft: "1,488 to 1,845 square feet",
    planNote:
      "Townhomes with up to four bedrooms and three bathrooms. Summerlin.com described a gated neighborhood, a community pool, and rooftop decks with valley views, adjacent to Fox Hill Park.",
    sourceUrl: CONDO,
    asOf: "UNKNOWN",
    parkTie:
      "Summerlin.com placed Santa Rosa adjacent to Fox Hill Park. The park’s climbing tower, zip line, and play structures are the village amenity next door, not a private yard.",
    detail: [
      "Santa Rosa was a CalAtlantic townhome neighborhood in The Paseos. Published sizes ran from 1,488 to 1,845 square feet, with up to four bedrooms and three bathrooms. The article’s new-home prices are historical and are not repeated here.",
      "The neighborhood was described as gated, with its own pool. A townhome pool is a shared amenity. Rules, hours, and guest policy live in the association documents, not in a village brochure.",
      "Rooftop decks were called out for valley views. A deck view is specific to the building and the direction it faces. Ask to stand on the deck in the afternoon if the view is a reason for the tour.",
      "Fox Hill Park is the public park next to this neighborhood in the Summerlin.com description. Park trails are public. The pool inside Santa Rosa is not the same thing as Fox Hill Park.",
    ],
  },
  {
    slug: "coronado",
    name: "Coronado",
    builder: "Edward Homes",
    product: "condominium",
    sqft: "about 1,300 to 1,800 square feet",
    planNote:
      "Condominium flats, two and three bedrooms, five floor plans in one article. Gated, with a fitness room and a pool. Homes were described with a balcony or patio and a laundry room or closet. A later move-in note cited individual flats at 1,475 and 1,305 square feet.",
    sourceUrl: CONDO,
    asOf: "UNKNOWN",
    parkTie:
      "Coronado is in The Paseos, so The Paseos Park and Fox Hill Park are the village parks. The fitness room and pool in the article are neighborhood amenities, separate from those parks.",
    detail: [
      "Coronado was an Edward Homes condominium neighborhood in The Paseos. One Summerlin.com article described five single-story flat plans from about 1,305 to nearly 1,800 square feet. Another note listed two specific flats at 1,475 and 1,305 square feet.",
      "Those sizes are examples from marketing articles. A resale listing may show a different measurement. Compare the MLS living area, the floor plan, and what you see in the unit.",
      "The articles described a gated setting, a fitness room, and a pool, plus a balcony or patio and a place for laundry. In a condominium, the patio, roof, and fitness room may be common elements. The resale package should say what the owner maintains.",
      "Parking, storage, and elevator or stair access were not quantified in the articles used here. Those are tour questions. Do not assume a garage from the village name.",
    ],
  },
  {
    slug: "los-altos",
    name: "Los Altos",
    builder: "Toll Brothers",
    product: "single-family",
    sqft: null,
    planNote:
      "Named as a Toll Brothers neighborhood in The Paseos. One move-in article gave three then-available homes: Malta at 3,309 square feet, Alava Mission at 3,094 square feet, and Verano Santa Barbara at 3,822 square feet. Those are examples, not a full plan list.",
    sourceUrl: moveInSource,
    asOf: "UNKNOWN",
    parkTie:
      "The move-in article ties Los Altos to The Paseos and names Vassiliadis Elementary and Fox Hill Park as village amenities.",
    detail: [
      "Los Altos is a Toll Brothers neighborhood that Summerlin.com placed in The Paseos. The source used here is a move-in story, not a full plan book. It names three homes that were available then.",
      "The Malta plan in that story was 3,309 square feet with four bedrooms and four and a half bathrooms, and a private front courtyard. The Alava Mission plan was 3,094 square feet. The Verano Santa Barbara plan was 3,822 square feet and was described as a former model with a wine room.",
      "A former model can include upgrades that a production house on the same plan does not have. The wine room is an example from that one house. Confirm finishes from the listing and the walk-through.",
      "Prices printed next to those three homes are old asking prices. They are omitted here on purpose. A current Los Altos price comes from the MLS, not from a builder move-in article.",
    ],
  },
  {
    slug: "altura",
    name: "Altura",
    builder: "Toll Brothers",
    product: "single-family",
    sqft: null,
    planNote:
      "Named as a Toll Brothers neighborhood in The Paseos. The same move-in article gave three examples: Sondrio at 3,464 square feet, Sorrento at 4,237 square feet, and Venosa at 4,037 square feet.",
    sourceUrl: moveInSource,
    asOf: "UNKNOWN",
    parkTie:
      "Altura is grouped with Los Altos and Coronado in The Paseos in that Summerlin.com move-in article, with Fox Hill Park and Vassiliadis Elementary named for the village.",
    detail: [
      "Altura is a Toll Brothers neighborhood Summerlin.com placed in The Paseos. The public size record used here is three examples, not a complete collection of plans.",
      "Sondrio was listed at 3,464 square feet with five bedrooms and three and a half bathrooms. Sorrento was 4,237 square feet with five bedrooms and five and a half bathrooms. Venosa was 4,037 square feet with four bedrooms and four and a half bathrooms.",
      "Those bedroom counts show how wide the product was. A five-bedroom plan and a four-bedroom plan do not share the same upkeep, furniture plan, or utility load. Match the count to the household’s space needs without guessing who lives nearby.",
      "Style names in the article included Mediterranean and Mission. Style is a facade and roof note. It does not set the lot size. Lot size was not printed for these three homes, so it stays off this page until a listing states it.",
    ],
  },
];

export function neighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((item) => item.slug === slug);
}
