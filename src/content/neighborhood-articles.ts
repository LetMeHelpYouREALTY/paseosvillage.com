import { neighborhoods, type Neighborhood } from "../data/neighborhoods";
import type { Article, Section } from "./types";

function productLabel(product: Neighborhood["product"]): string {
  if (product === "single-family") return "single-family houses";
  if (product === "townhome") return "townhomes";
  if (product === "condominium") return "condominium flats";
  const never: never = product;
  return never;
}

function verifySection(n: Neighborhood): Section {
  const sizeLine = n.sqft
    ? `${n.name} was published at ${n.sqft}.`
    : `${n.name} does not have a full size range in the source used here.`;
  const productNote =
    n.product === "condominium"
      ? "In a condominium, the resale package should say what you own and what the association maintains. Balconies, roofs, and fitness rooms are the usual questions."
      : n.product === "townhome"
        ? "In a townhome, ask what the association maintains on the exterior and what you maintain inside the walls. A neighborhood pool is a shared cost, not a private yard."
        : "In a single-family house, the lot, the roof, and the yard are usually the owner’s. A shared entry monument can still come with a village or neighborhood association. Read the documents.";
  return {
    id: "verify",
    heading: `What should you verify before you buy in ${n.name}?`,
    answer: `Verify the living area, the options that were actually built, and the association papers for ${n.name}.`,
    paragraphs: [
      sizeLine,
      n.planNote,
      productNote,
      "Old asking prices from the marketing articles are not repeated on this page. A current price comes from the listing and from closed sales Dr. Jan pulls for that plan. Those sales are not printed here yet.",
      "Walk the house at the time of day you care about. East valley light and west sun are village-level descriptions. The courtyard, roof deck, or patio on this plan is the test that matters.",
    ],
  };
}

export function neighborhoodArticle(n: Neighborhood): Article {
  const siblings = neighborhoods.filter((item) => item.slug !== n.slug).slice(0, 2);
  const sizeFact = n.sqft
    ? `Published new-home sizes were ${n.sqft}.`
    : "A single size range for every plan was not printed in the source.";
  const sections: Section[] = [
    {
      id: "where",
      heading: `Where is ${n.name} in The Paseos?`,
      answer: `${n.name} is a ${n.builder} neighborhood in The Paseos, a Summerlin village in Las Vegas.`,
      paragraphs: [
        `${n.name} appears in Summerlin.com copy as a ${n.builder} neighborhood inside The Paseos. The village sits a short distance west of the 215 Beltway. Many homes in the village were described as having eastward valley views. Red Rock Canyon is the western backdrop in the February 28, 2019 village article.`,
        n.parkTie,
        "ZIP 89138 is the postal code this site uses for the village, pending assessor confirmation. A neighborhood page does not redraw the boundary. The listing’s subdivision name is the check.",
        "The Paseos Park was described on February 28, 2019 as more than 12 acres at the center of the village. Fox Hill Park serves the village and includes a 32-foot climbing tower and a zip line in that article. Distance from a specific ${n.name} porch to either park is not printed, so it is not invented here.".replace(
          "${n.name}",
          n.name,
        ),
      ],
    },
    {
      id: "homes",
      heading: `What homes were built in ${n.name}?`,
      answer: `${n.builder} built ${productLabel(n.product)} in ${n.name}. ${sizeFact}`,
      paragraphs: n.detail,
    },
    verifySection(n),
    {
      id: "parks",
      heading: `Which parks relate to ${n.name}?`,
      answer: `${n.name} uses the village parks named by Summerlin.com, with the tie described in its source article.`,
      paragraphs: [
        n.parkTie,
        "The February 28, 2019 article lists a splash pad and trails at The Paseos Park, connecting to the Summerlin trail system. More than 150 miles is the Summerlin-wide trail figure from that boilerplate, not a mileage inside this neighborhood.",
        "Fox Hill’s feature list from that date includes at least 20 play structures, the Orange Beast, disc golf, swings, and a climbing fort. If the listing says the park is adjacent, confirm it on a map from the front door. Adjacent in a village article can still be several blocks.",
        "The Vistas Community Center and pool were described as a short trip from Paseos neighborhoods. That amenity is not a private park for this neighborhood. Access rules need a current check.",
      ],
    },
    {
      id: "resale",
      heading: `How do you read a resale listing in ${n.name}?`,
      answer: `Read living area, lot notes, and included options, then compare only similar ${n.name} sales.`,
      paragraphs: [
        `${sizeFact} Treat that range as the new-home snapshot in the article dated ${n.asOf}. Additions and conversion of lofts can move a resale off the original range. The MLS living area is the number to discuss.`,
        "Photos can hide a road, a park light, or a neighboring roof deck. Tour the room the camera favored, then the room it skipped. Material notes that matter in this village are stone, wood, and how the light lands, which is also what the photo brief asks Dr. Jan to shoot.",
        "Association fees, rental rules, and architectural review are not in the Summerlin.com marketing lines used here. They belong in the resale package. Ask for it before you shorten a contingency.",
        "Downtown Summerlin is about one mile from the village in the February 28, 2019 article. That mile is not a walk score and not a drive time to the Strip. Measure the trip you actually take.",
      ],
    },
    {
      id: "next",
      heading: `How do you tour ${n.name} with Dr. Jan Duffy?`,
      answer: `Search 89138, confirm the listing says ${n.name}, and send the buy form if you want a consult.`,
      paragraphs: [
        "The homes page loads RealScout. Type the ZIP, then the neighborhood name. If the widget does not filter by subdivision, use the name inside the results. Dr. Jan’s license is S.0197614.LLC with Berkshire Hathaway HomeServices Nevada Properties.",
        "A consult covers comps for this product, not a village-wide median. The market report explains why the median is blank. Offer strategy waits for those comps.",
        "Seller questions about a house already in this neighborhood belong on the sell page. Pricing still starts from similar closed sales, not from the builder’s old asking range.",
        "The local expert note on this page is empty until Dr. Jan writes a firsthand detail. Nothing above is a personal anecdote.",
        `${n.name} buyers should also confirm parking, storage, and whether a roof deck or courtyard on the ${n.builder} plan was built on that lot. The marketing article is a starting map. The house and the resale package are the record. Ask which direction the main glass faces before you treat a view line as part of the price.`,
      ],
    },
  ];

  return {
    path: `/neighborhoods/${n.slug}`,
    title: `${n.name} | The Paseos Summerlin 89138`,
    description: `${n.name} by ${n.builder} in The Paseos, Summerlin, Las Vegas 89138. ${sizeFact}`.slice(0, 155),
    h1: `${n.name} in The Paseos, Summerlin`,
    eyebrow: `${n.builder} · ${productLabel(n.product)}`,
    answer: `${n.name} is a ${n.builder} neighborhood in The Paseos, Summerlin, Las Vegas, NV 89138. The homes are ${productLabel(n.product)}. ${sizeFact} The village sits west of the 215 Beltway. Fox Hill Park and The Paseos Park serve it.`,
    factIds: ["zip", "west-of-215", "park-acres", "fox-hill-role", "downtown-distance"],
    sections,
    faqs: [
      {
        question: `Who built ${n.name} in The Paseos?`,
        answer: `${n.builder}, according to Summerlin.com. The product is ${productLabel(n.product)}. ${sizeFact}`,
      },
      {
        question: `Is ${n.name} the same as the whole village?`,
        answer:
          "No. The Paseos is the village. This page is one neighborhood inside it. Other named neighborhoods have their own pages.",
      },
      {
        question: `What is the current median price in ${n.name}?`,
        answer:
          "Not published. Village-level medians already conflict, and a neighborhood median needs its own MLS pull.",
      },
      {
        question: `How do you see homes for sale in ${n.name}?`,
        answer:
          "Use the homes search, filter to 89138, and keep listings that name this neighborhood. Then use the buy form for a tour.",
      },
    ],
    cta: "search",
    measured: true,
    longform: true,
    related: siblings.map((item) => ({
      href: `/neighborhoods/${item.slug}`,
      label: `${item.name} in The Paseos`,
    })),
  };
}

export const neighborhoodArticles: Article[] = neighborhoods.map(neighborhoodArticle);

export const neighborhoodIndex: Article = {
  path: "/neighborhoods",
  title: "The Paseos Neighborhoods | Summerlin 89138",
  description:
    "Neighborhoods Summerlin.com named in The Paseos, Summerlin, Las Vegas, NV 89138, with builders and published sizes.",
  h1: "Neighborhoods in The Paseos, Summerlin",
  eyebrow: "Named by Summerlin.com",
  answer:
    "These pages cover neighborhoods Summerlin.com named inside The Paseos in Summerlin, Las Vegas, NV 89138. Builders in the articles include CalAtlantic, Pulte, Woodside, Edward Homes, and Toll Brothers. Sizes are the new-home figures those articles printed. Current prices and a village home count are not listed. Each page links back to the market report and the live search.",
  factIds: ["zip", "west-of-215", "entryways"],
  sections: [
    {
      id: "list",
      heading: "Which neighborhoods are documented in The Paseos?",
      answer:
        "Capistrano, Sarasota, Estrella, Belmonte, Santa Rosa, Coronado, Los Altos, and Altura are the names in the sources used here.",
      paragraphs: [
        "Four names come from a close-out article written before Las Vegas Ballpark opened: Capistrano and Sarasota by CalAtlantic, Estrella by Pulte, and Belmonte by Woodside. Santa Rosa and Coronado come from an attached-housing article. Los Altos and Altura come from a Toll Brothers move-in article.",
        "A missing name does not mean the street is outside the village. It means this file does not have a Summerlin.com sentence for it yet. Send the name through the contact form and Dr. Jan can add a page after she checks the source.",
        "Shared entryways were a village design point on February 28, 2019. Capistrano and Belmonte were captioned as sharing an entry. The pages say that once, and they do not treat the two builders as one product.",
      ],
    },
  ],
  faqs: [
    {
      question: "Are these all the neighborhoods in The Paseos?",
      answer:
        "They are the ones named in the Summerlin.com articles cited on each page. The list is not an assessor inventory.",
    },
    {
      question: "Why are builder prices missing?",
      answer: "Those asking prices are years old. Publishing them would look like a current market.",
    },
    {
      question: "Where are the photos?",
      answer:
        "Dr. Jan’s photo set is not in the library yet. Each page keeps an empty frame with a note for the shoot.",
    },
    {
      question: "How do the pages link together?",
      answer:
        "Each neighborhood links to the home page, the market report, homes for sale, and two other neighborhoods.",
    },
  ],
  cta: "search",
  measured: true,
  longform: false,
};
