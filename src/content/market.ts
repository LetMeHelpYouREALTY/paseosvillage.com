import type { Article } from "./types";

export const marketArticle: Article = {
  path: "/market-report",
  title: "The Paseos Market Report | Summerlin 89138",
  description:
    "Monthly method for The Paseos in Summerlin, Las Vegas, NV 89138. Median price stays blank until a dated MLS pull is verified.",
  h1: "The Paseos market report, Summerlin",
  eyebrow: "Monthly notes · MLS figures withheld",
  answer:
    "This market report covers The Paseos in Summerlin, Las Vegas, NV 89138. It does not print a median price yet. Quoted 2026 figures conflict, so both values are blank. Dr. Jan will add a median only from a fresh MLS pull, with the month named in the sentence. Older builder prices stay off the table.",
  factIds: ["zip", "west-of-215", "park-acres", "downtown-distance"],
  measured: true,
  longform: true,
  cta: "form",
  sections: [
    {
      id: "median",
      heading: "How much do homes cost in The Paseos?",
      answer:
        "The median closed price is unpublished until an MLS extract for the village is checked.",
      paragraphs: [
        "A median is the middle sale, not the average and not a list price. It moves when the window moves. A 90-day median and a 12-month median answer different questions. That is why two 2026 quotes can both be “real” and still disagree. This page refuses to blend them.",
        "The data file stores the conflict and sets each value to null. The public table skips nulls. You will not see a guessed midpoint. You will see the place facts that do have a source, such as the park acreage wording and the one-mile note to Downtown Summerlin.",
        "When a figure is added, the sentence will look like this shape: “The median closed price in The Paseos was X, per Las Vegas REALTORS® data, MONTH YEAR.” The source and the month stay in the sentence. A chart without that line will not ship.",
        "Village medians and Summerlin-wide medians are not substitutes. A Summerlin number includes other villages. Stonebridge and Summerlin Centre are compared only on place facts, not on price, until their own extracts exist. A useful monthly note also separates new-home closings, if any remain, from resale closings. Mixing them makes a small village look more expensive or cheaper than the houses a buyer can actually tour. The first published table will say which side of that split it used. Until then, the homes page is the live list, and this page is the method. Dr. Jan will also note the source organization in the same sentence as the figure, for example a Las Vegas REALTORS® release and the month of the closings. A chart without that sentence will not replace the table. Readers should be able to audit one row without opening a second website. That is the bar for the first monthly update, and it is why this draft is long on method and short on digits. Digits arrive with the extract.",
      ],
    },
    {
      id: "read",
      heading: "How should you read a Paseos market report?",
      answer:
        "Read the geography first, then the window, then the count of sales behind the median.",
      paragraphs: [
        "Geography means The Paseos, not all of 89138 and not all of Summerlin. A ZIP can hold more than one village. If the extract is ZIP-level, the report must say so. This draft is village-level in intent and empty of stats until the extract matches that intent.",
        "The window is the closed-sale dates. A report that says September 2026 should not hide August closings inside the median without saying the range. Date range and “as of” date are different. Both belong on the row.",
        "The count is how many closings support the median. A median of three sales is a thin story. The future table will show the count beside the median. If the count is too small to be stable, the prose will say that in the first sentence under the heading.",
        "List-to-sale ratio, days on market, and months of supply are the next rows to add. They are not invented for this launch draft. Each stays null until the same MLS pull provides it. Active listings belong to the RealScout search, which is live inventory, not a closed-sale stat.",
      ],
    },
    {
      id: "history",
      heading: "Why are older builder prices left out?",
      answer:
        "Pre-2019 asking prices describe new-home releases, not the resale market in 2026.",
      paragraphs: [
        "Summerlin.com articles from the close-out period printed asking ranges for Capistrano, Sarasota, Estrella, and Belmonte. A move-in article printed asking prices for specific Los Altos and Altura houses. Those numbers are omitted on the neighborhood pages and omitted here.",
        "Using them would look precise and be misleading. Product mixes change. Condition changes. Rates change. A 2018 new-home price is not a comp adjustment you can do in your head.",
        "Square footage from those articles is kept, because the plans did not resize when the calendar turned. The pages label that footage as the new-home range in the article, not as the size of every resale.",
        "Energy equipment listed for Estrella new homes is treated the same way. It was a builder standard then. It is an inspection item now.",
      ],
    },
    {
      id: "use",
      heading: "How do buyers and sellers use this report?",
      answer:
        "Buyers use it to see the village trend. Sellers use it before they pick a list price from street-level comps.",
      paragraphs: [
        "A buyer should not set an offer from a village median alone. The median ignores your lot, your roof, and your view. It is the backdrop. The comp set is the decision.",
        "A seller should expect the consult to start with closed sales on similar plans, then active competition. The form on this page asks for a valuation conversation. It does not return an automated number. This site does not run estimate widgets.",
        "Relocations can use the place facts now: west of the 215, about a mile to Downtown Summerlin, two named parks. They should not use this page for a payment quote. Lender terms are outside the report.",
        "Dr. Jan updates the narrative on a monthly cadence once the MLS rows exist. The page is set to revalidate daily in the app router sense of a one-day ISR window so a new stat file can appear without a full redeploy story. The words still change only when the data file changes.",
      ],
    },
    {
      id: "limits",
      heading: "What will this report refuse to claim?",
      answer:
        "It will not rank the village, predict next year’s price, or borrow a number from another brokerage’s blog.",
      paragraphs: [
        "No heat ranking, no school-score language, and no claim that a median proves demand from any group of people. Demand shows up as sales count, days on market, and the list-to-sale ratio, once those rows are sourced.",
        "No photo of a sold house is used unless Dr. Jan has the right to publish it. The frames on this site are empty until her shoot or a licensed frame is added.",
        "No competitor’s market paragraph is copied. If a number cannot be tied to a source URL and a date in the data file, it does not render.",
        "Conflicting acreage and home-count claims stay in the data file with publishing turned off. They are listed in the launch checklist so she can choose or discard them.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the median home price in The Paseos?",
      answer:
        "Not published. Two 2026 windows disagreed. The next figure will cite Las Vegas REALTORS® or the MLS extract and the month.",
    },
    {
      question: "Does this page use automated home-value tools?",
      answer:
        "No. Pricing talk uses MLS comparables after Dr. Jan reviews them. Third-party value tools are not cited.",
    },
    {
      question: "How often will the report change?",
      answer:
        "The page is built to refresh on a one-day cycle. The sentences change when the data file changes, with a visible last-updated date.",
    },
    {
      question: "Can I get a value for my house from this report?",
      answer:
        "Not from the page. Use the form for a valuation consult. The report is village context. Your house needs its own comps.",
    },
  ],
};
