import type { Article, Faq } from "./types";

const faqs: Faq[] = [
  {
    question: "Where is The Paseos?",
    answer:
      "The Paseos is a village in Summerlin, Las Vegas, Nevada. This site uses ZIP 89138, pending assessor confirmation. Summerlin.com said it sits a short distance west of the 215 Beltway.",
  },
  {
    question: "Is The Paseos the same as Summerlin?",
    answer:
      "No. Summerlin is the master-planned area. The Paseos is one village inside it. Summerlin.com on February 28, 2019 called it one of more than two dozen villages.",
  },
  {
    question: "Who develops Summerlin?",
    answer:
      "The Howard Hughes Corporation. The February 28, 2019 Summerlin.com boilerplate says Summerlin began to take shape in 1990.",
  },
  {
    question: "How big is The Paseos Park?",
    answer:
      "More than 12 acres, per Summerlin.com on February 28, 2019. An earlier article said 12 acres. The dated wording is the one in the public table.",
  },
  {
    question: "What is Fox Hill Park?",
    answer:
      "A park that serves the village. The February 28, 2019 article lists a 32-foot climbing tower, a zip line, the Orange Beast, disc golf, and at least 20 play structures.",
  },
  {
    question: "How far is Downtown Summerlin?",
    answer:
      "About one mile, per Summerlin.com on February 28, 2019. That page named City National Arena and Las Vegas Ballpark. The 125-store count is a 2019 figure.",
  },
  {
    question: "Can you see the valley from The Paseos?",
    answer:
      "Summerlin.com said elevated ground gives many homes valley views to the east. It did not say every lot has that view. Confirm from the yard.",
  },
  {
    question: "What is west of the village?",
    answer:
      "Red Rock Canyon National Conservation Area, named in the February 28, 2019 Summerlin.com article as the western backdrop.",
  },
  {
    question: "What is the median home price?",
    answer:
      "Not published. Conflicting 2026 figures were left blank. The next median will cite the MLS month.",
  },
  {
    question: "How many homes are in The Paseos?",
    answer:
      "Not published. Two third-party home counts conflict. Neither is shown until a primary source confirms a count.",
  },
  {
    question: "How many acres is the village?",
    answer:
      "Not published. Two third-party acreage claims conflict. Summerlin’s 22,500 acres is the master plan, not this village.",
  },
  {
    question: "Which builders were named in The Paseos?",
    answer:
      "CalAtlantic, Pulte, Woodside, Edward Homes, and Toll Brothers appear in Summerlin.com articles about specific neighborhoods. See the neighborhood index.",
  },
  {
    question: "What is Capistrano?",
    answer:
      "A CalAtlantic single-family neighborhood. The close-out article listed four two-story plans from 2,557 to 3,020 square feet. Old asking prices are omitted.",
  },
  {
    question: "What is Sarasota?",
    answer:
      "A CalAtlantic neighborhood with six plans from 2,189 to 2,572 square feet, including two reverse-living plans, in that same close-out article.",
  },
  {
    question: "What is Estrella?",
    answer:
      "A Pulte neighborhood. Published new-home sizes ran from 2,058 to 2,455 square feet, in one-story and two-story plans.",
  },
  {
    question: "What is Belmonte?",
    answer:
      "A Woodside neighborhood. Published sizes ran from 3,202 to 3,934 square feet. A caption says it shares an entry with Capistrano.",
  },
  {
    question: "What is Santa Rosa?",
    answer:
      "A CalAtlantic townhome neighborhood next to Fox Hill Park, with published sizes from 1,488 to 1,845 square feet and a neighborhood pool in the article.",
  },
  {
    question: "What is Coronado?",
    answer:
      "An Edward Homes condominium neighborhood in The Paseos. Articles described flats roughly 1,300 to 1,800 square feet, plus a fitness room and pool.",
  },
  {
    question: "What are Los Altos and Altura?",
    answer:
      "Toll Brothers neighborhoods Summerlin.com placed in The Paseos. Only example home sizes from a move-in article are cited, not a full plan list.",
  },
  {
    question: "Do all streets have a gate?",
    answer:
      "No. Gated was used for Santa Rosa and Coronado in one article. A shared entry monument is not the same as a gate on every street.",
  },
  {
    question: "How do you look up schools?",
    answer:
      "Use the Clark County School District zoning search for the street address. Vassiliadis Elementary is the campus Summerlin.com named in the village. Zoning is still address-specific.",
  },
  {
    question: "Does this site rate schools?",
    answer:
      "No. It names campuses that appear in sourced copy and links to the district tool. It does not score them.",
  },
  {
    question: "How do you search homes for sale?",
    answer:
      "Open the homes page and use the RealScout search. Filter to 89138, then confirm the village or neighborhood name on the listing.",
  },
  {
    question: "How do you request a valuation?",
    answer:
      "Use the form on the sell page or the market report. It goes to Follow Up Boss when the API key is set. It does not return an automated estimate.",
  },
  {
    question: "Who is the agent?",
    answer:
      "Dr. Jan Duffy, REALTOR®, Nevada license S.0197614.LLC, with Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    question: "What is the office address?",
    answer:
      "8850 W Sunset Road Suite 200, Las Vegas, NV 89148, from the BHHS.com profile retrieved October 17, 2026. Confirm it against the Google Business Profile before you rely on the pin.",
  },
  {
    question: "What phone number should you call?",
    answer:
      "Use the number printed in the header. It is a tracking-line placeholder, 702-XXX-XXXX, until this site’s own number is assigned.",
  },
  {
    question: "Is The Vistas the same village?",
    answer:
      "No. In the sources used here, The Vistas is a resident community center and pool a short trip from The Paseos, not another name for the village.",
  },
  {
    question: "How is Stonebridge different?",
    answer:
      "Stonebridge is a separate Summerlin village on the western edge in a Summerlin.com article. It named Stonebridge Park and Doral Academy Red Rock. Price comparisons are omitted.",
  },
  {
    question: "What is Summerlin Centre?",
    answer:
      "An actively selling area on the Summerlin villages page retrieved October 17, 2026: lock-and-leave homes off Charleston, just west of the 215.",
  },
  {
    question: "Are trail miles inside the village published?",
    answer:
      "No. More than 150 miles is the Summerlin-wide figure from February 2019. A Paseos-only mileage is not stated.",
  },
  {
    question: "Will the site copy other agent pages?",
    answer:
      "No. Facts come from Summerlin.com, the BHHS profile, the district zoning tool, and the MLS once it is pulled. Competitor prose and photos are not used.",
  },
  {
    question: "When was this page updated?",
    answer:
      "The visible last-updated line is October 17, 2026. Each table row also shows the source date for that fact.",
  },
];

export const faqArticle: Article = {
  path: "/faq",
  title: "The Paseos FAQ | Summerlin Las Vegas",
  description:
    "Answers about The Paseos in Summerlin, Las Vegas, NV 89138: parks, villages, schools, and why prices stay blank.",
  h1: "FAQ: The Paseos in Summerlin",
  eyebrow: "Straight answers",
  answer:
    "These answers cover The Paseos, a Summerlin village in Las Vegas, NV 89138. They use Summerlin.com for place facts and leave price, acreage, and home-count conflicts blank. School zoning is by address through the Clark County School District tool. Dr. Jan Duffy, license S.0197614.LLC, reviews the file before launch.",
  factIds: ["zip", "park-acres", "downtown-distance", "vassiliadis", "agent-license"],
  sections: [
    {
      id: "how",
      heading: "How should you use these answers?",
      answer: "Use them for place facts, then check the row’s source and date before you repeat a number.",
      paragraphs: [
        "Each answer is short so a search engine or a chat tool can lift it. The table above the questions shows the same facts with sources. If a sentence and a row ever disagree, the data file wins and the page should be corrected.",
        "Questions about price point to the market report, which explains the blank median. Questions about a named neighborhood point to that neighborhood page.",
      ],
    },
  ],
  faqs,
  cta: "call",
  measured: true,
  longform: false,
};

export const faqCount = faqs.length;
