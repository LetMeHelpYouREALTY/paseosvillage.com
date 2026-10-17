import type { Article } from "./types";
import { CCSD_ZONING_URL } from "../lib/site";

export const schoolsArticle: Article = {
  path: "/schools",
  title: "Schools near The Paseos | Summerlin 89138",
  description:
    "School names tied to The Paseos in Summerlin, plus the Clark County School District address search. No ratings.",
  h1: "Schools and The Paseos in Summerlin",
  eyebrow: "Names and the zoning map",
  answer:
    "Billy and Rosemary Vassiliadis Elementary School is the school Summerlin.com named when it opened in The Paseos. Zoning is still by street address, not by village name. Use the Clark County School District zoning search for the house you are buying. This page does not rate schools or describe who should attend them.",
  factIds: ["vassiliadis", "zip"],
  measured: true,
  longform: false,
  cta: "call",
  sections: [
    {
      id: "named",
      heading: "Which school did Summerlin.com name in The Paseos?",
      answer:
        "Billy and Rosemary Vassiliadis Elementary School, described as opened in the village.",
      paragraphs: [
        "The Summerlin.com close-out article, written before Las Vegas Ballpark opened, says Vassiliadis Elementary opened in August in The Paseos. A later move-in article names the same school as a village amenity beside Fox Hill Park. The name is the fact. A rating is not.",
        "Opening in the village does not mean every Paseos address is zoned there. Articles about Stonebridge listed Vassiliadis as a nearby school while naming Doral Academy Red Rock inside Stonebridge. “Nearby” and “zoned” are different words. This site keeps them apart.",
        "The district’s zoning search is the tool: it takes a street address and returns the assigned schools. Run it for the specific house. Save the result with the date, because boundaries can change.",
      ],
    },
    {
      id: "lookup",
      heading: "How do you check zoning for a Paseos address?",
      answer: "Enter the street address in the Clark County School District zoning search.",
      paragraphs: [
        `The district’s map is at ${CCSD_ZONING_URL}. Search the full street address. Apartment addresses need a unit number. The district’s own note says to contact Demographics, Zoning, and GIS if the map is not enough.`,
        "Do this before you write an offer if the assigned schools are part of your decision. Do it again if the boundary year changes between contract and closing. A blog table is not the record.",
        "Magnet, charter, and open-enrollment seats are separate from the zoned school. Doral Academy Red Rock is a charter Summerlin.com placed in Stonebridge, not a zoned assignment for The Paseos. Charter admission rules are the school’s rules.",
      ],
    },
    {
      id: "language",
      heading: "What will this page not say about schools?",
      answer:
        "It will not score, rank, or describe a school as a reason a certain household belongs in the village.",
      paragraphs: [
        "Test scores and rating sites are omitted. They change, they measure different things, and they are often used as a stand-in for who lives nearby. This page sticks to names, the district tool, and the sentence Summerlin.com actually published.",
        "Drive time from a given porch to a campus is not published. Measure it from the address. The village is large enough that one porch is not the next porch.",
        "If Dr. Jan adds a campus photo, the alt text will name the school and The Paseos, Summerlin, Las Vegas 89138. No photo is in the library yet.",
      ],
    },
  ],
  faqs: [
    {
      question: "What elementary school is in The Paseos?",
      answer:
        "Summerlin.com named Billy and Rosemary Vassiliadis Elementary School as opened in the village. Confirm the assigned school for your address on the district zoning search.",
    },
    {
      question: "Are school ratings listed here?",
      answer:
        "No. This page lists names and the Clark County School District lookup. It does not score campuses.",
    },
    {
      question: "Does the ZIP code assign the school?",
      answer:
        "No. The district assigns schools by address. ZIP 89138 is only the postal code this site uses for the village, pending assessor confirmation.",
    },
    {
      question: "Where is the official zoning tool?",
      answer:
        "On the Clark County School District zoning search. The link is in the section above and in the facts table source line when a school fact is shown.",
    },
  ],
};
