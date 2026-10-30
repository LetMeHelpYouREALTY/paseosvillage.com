import type { Article } from "./types";

export const homesArticle: Article = {
  path: "/homes-for-sale",
  title: "The Paseos Homes for Sale | Summerlin 89138",
  description:
    "Search homes for sale in The Paseos, Summerlin, Las Vegas, NV 89138. Filter the live search to ZIP 89138 and confirm the village.",
  h1: "Homes for sale in The Paseos, Summerlin",
  eyebrow: "Live search · ZIP 89138",
  answer:
    "Homes for sale in The Paseos, Summerlin, Las Vegas, NV 89138, load in the search on this page. Filter to 89138, then read the neighborhood name on the listing. A ZIP can include more than this village. Prices and medians are not copied into this page. Plan sizes live on the neighborhood pages.",
  factIds: ["zip", "west-of-215", "park-acres"],
  measured: true,
  longform: false,
  cta: "search",
  sections: [
    {
      id: "filter",
      heading: "How do you filter listings to The Paseos?",
      answer: "Search ZIP 89138, then keep only listings that name the village or a known neighborhood.",
      paragraphs: [
        "The widget is the live inventory. This page does not reprint listing photos or prices into our own cards, so it does not invent a RealEstateListing record for a house it does not host.",
        "Neighborhood names already documented on this site include Capistrano, Sarasota, Estrella, Belmonte, Santa Rosa, Coronado, Los Altos, and Altura. A listing may use a different marketing name. Trust the MLS name and the map together.",
        "The widget’s own filters cover status, type, and price. A ZIP attribute was not documented in the embed guide used for this build, so the ZIP step is one you type into the search. That limit is noted for Dr. Jan to confirm inside RealScout.",
      ],
    },
    {
      id: "read",
      heading: "What should you read before you tour?",
      answer: "Read the association, the lot, and the park distance, then book the tour.",
      paragraphs: [
        "Ask for the resale package early. Fees and architectural rules live there. A village brochure will not list the fee for one neighborhood.",
        "Views to the valley and to Red Rock were described for many homes, not all homes. Stand on the lot. A roof deck, where a plan has one, is part of that check.",
        "The buy page is the consult form if you want a person on the tour. This page’s next step is the search itself.",
      ],
    },
  ],
  faqs: [
    {
      question: "Are these listings hosted on this website?",
      answer:
        "No. RealScout renders them. This site does not copy listing photos or mark up a RealEstateListing for a widget result.",
    },
    {
      question: "Why filter 89138?",
      answer:
        "It is the ZIP this site uses for The Paseos, pending assessor confirmation. Still confirm the village name. ZIP lines and village lines are not the same line.",
    },
    {
      question: "Does the search include sold homes?",
      answer:
        "The embed asks for homes for sale. Closed sales belong in a comp conversation, not in this public widget setting.",
    },
    {
      question: "Who do you call about a listing?",
      answer:
        "Use the phone in the header to reach Dr. Jan Duffy. The tracking number is still a placeholder until it is assigned.",
    },
  ],
};

export const buyArticle: Article = {
  path: "/buy",
  title: "Buy a Home in The Paseos | Summerlin",
  description:
    "Buy in The Paseos, Summerlin, Las Vegas, NV 89138 with Dr. Jan Duffy. Search listings, then send a consult form.",
  h1: "Buy a home in The Paseos, Summerlin",
  eyebrow: "Search, then a consult",
  answer:
    "Buying in The Paseos means searching Summerlin listings in Las Vegas, NV 89138, then checking the neighborhood name, the association, and the lot. Dr. Jan Duffy walks that path with you. Start with the live search or send the form on this page. A median price is not part of the advice until the MLS figure is verified.",
  factIds: ["zip", "downtown-distance", "park-acres"],
  measured: true,
  longform: false,
  cta: "form",
  sections: [
    {
      id: "steps",
      heading: "How does a purchase in The Paseos work?",
      answer: "Get a lender letter, tour the village, write the offer, then finish inspections and escrow.",
      paragraphs: [
        "The first consult covers budget, timing, and which product fits: single-family plans such as Belmonte or Capistrano, townhomes such as Santa Rosa, or condominium flats such as Coronado. Those names come from Summerlin.com articles, not from a guess about your household.",
        "Nevada purchases typically use a purchase contract, an earnest deposit, an inspection period, and an escrow company. Deadlines in the contract control the process. This page is not legal advice. Your contract and, if you hire one, your lawyer control the legal questions.",
        "HOA documents are part of due diligence in neighborhoods that have an association. Ask for them before you waive a review period. A gate, a pool, or a shared entry is a clue to ask, not a finished answer.",
      ],
    },
    {
      id: "compare",
      heading: "What should you compare inside the village?",
      answer: "Compare plan size, orientation, park access, and the association, using sourced ranges as history.",
      paragraphs: [
        "New-home sizes in the articles are a map of product, not a list of what is for sale today. Capistrano’s published range was 2,557 to 3,020 square feet. Santa Rosa’s was 1,488 to 1,845. Read the listing’s living area for the house you tour.",
        "East valley views and west mountain views were described for the village as a whole. The street decides your version. Afternoon sun on a west courtyard is a comfort question you can test in person.",
        "Stonebridge and Summerlin Centre are nearby choices with their own pages. They are not backup names for a Paseos listing.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do I need a buyer’s agent in The Paseos?",
      answer:
        "You can hire Dr. Jan Duffy to represent you. Compensation is a term to discuss before you tour, not a number this page invents.",
    },
    {
      question: "Can I search without sending the form?",
      answer: "Yes. The homes page search works without the form. The form is for a consult.",
    },
    {
      question: "Will you tell me the payment?",
      answer: "No. A lender calculates payment. This site does not quote rates.",
    },
    {
      question: "Which park is closest?",
      answer:
        "It depends on the street. Santa Rosa was described as adjacent to Fox Hill Park. The Paseos Park is the central park. Measure the walk from the address.",
    },
  ],
};

export const sellArticle: Article = {
  path: "/sell",
  title: "Sell a Home in The Paseos | Summerlin",
  description:
    "Sell a home in The Paseos, Summerlin, Las Vegas, NV 89138. Dr. Jan Duffy prices from MLS comps, not from an online estimate.",
  h1: "Sell a home in The Paseos, Summerlin",
  eyebrow: "Comps before a list price",
  answer:
    "Selling in The Paseos starts with recent sales of similar homes in Summerlin’s village, not with a Las Vegas-wide average. Dr. Jan Duffy will recommend a list price after she reads those comps. Send the form for a valuation consult. This page does not print a median, because the 2026 figures on file conflict.",
  factIds: ["zip", "west-of-215"],
  measured: true,
  longform: false,
  cta: "form",
  sections: [
    {
      id: "price",
      heading: "How do you price a home in The Paseos?",
      answer: "Use closed sales of similar plans, then adjust for condition, lot, and view.",
      paragraphs: [
        "A Capistrano two-story and a Belmonte courtyard plan are not the same comp. Neighborhood pages record the builder ranges so you can see the product. The price still comes from the MLS, house by house.",
        "Online estimates are not part of the workflow and are not named here. If a buyer mentions one, the response is the comp set, not a debate with a website.",
        "Prep is practical: paint, light, and repairs that the comps say the market is paying for. The consult separates those items from projects that only please the owner.",
      ],
    },
    {
      id: "market",
      heading: "How is a Paseos listing marketed?",
      answer: "With accurate MLS data, photographs you have rights to, and showings that respect the house.",
      paragraphs: [
        "Photography should show the street, the park if it is actually nearby, and the interior materials. This website’s own photo slots are empty until Dr. Jan’s shoot. Your listing photos are a separate assignment.",
        "Syndication follows the MLS rules of the brokerage. The footer disclaimer waits for the brokerage’s IDX text.",
        "Offers get compared on price, timing, and contingencies. The form starts that conversation. It does not list your house by itself.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can you tell me what my Paseos home is worth from this page?",
      answer: "No. The form requests a consult. The page withholds a median until the MLS number is verified.",
    },
    {
      question: "Do you use the 2019 builder prices?",
      answer: "No. Those asking prices are historical and are omitted on purpose.",
    },
    {
      question: "Which neighborhoods can you list?",
      answer:
        "Any home in The Paseos. The named pages cover neighborhoods Summerlin.com already described. Other street names are welcome in the form.",
    },
    {
      question: "What happens after the form?",
      answer:
        "Follow Up Boss receives the inquiry when the API key is set, and the practice follows up. You can also call the site number.",
    },
  ],
};
