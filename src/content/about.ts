import type { Article } from "./types";

export const aboutArticle: Article = {
  path: "/about",
  title: "Dr. Jan Duffy | The Paseos Summerlin",
  description:
    "Dr. Jan Duffy, REALTOR®, for The Paseos in Summerlin.",
  h1: "Dr. Jan Duffy and The Paseos, Summerlin",
  eyebrow: "REALTOR® for The Paseos",
  answer:
    "Dr. Jan Duffy is a REALTOR®. Her license and brokerage are listed in the footer. This site is her guide to The Paseos, a Summerlin village in Las Vegas, NV 89138. The office line on her brokerage profile is 8850 W Sunset Road Suite 200, Las Vegas, NV 89148. Match it to the Google Business Profile before launch.",
  factIds: ["zip"],
  measured: true,
  longform: false,
  cta: "form",
  sections: [
    {
      id: "license",
      heading: "What credentials are on the record?",
      answer: "The public record used here is her license, her brokerage, and her brokerage profile, all named in the footer.",
      paragraphs: [
        "Her brokerage profile retrieved October 17, 2026 lists Dr. Jan Duffy as a sales associate at 8850 W Sunset Road Suite 200, Las Vegas, NV 89148. A second brokerage profile lists the same license at a Southwest office with a slightly shorter street line. One address is shown on this site. The other is a conflict to resolve against the Google Business Profile.",
        "Languages beyond English are not listed. A prior version of this website named additional languages. They come back only if the profile or Dr. Jan confirms them.",
        "Sales totals, years in the business, and awards are omitted. They are easy to overstate and they were not required to explain the license.",
      ],
    },
    {
      id: "work",
      heading: "What does she do for The Paseos?",
      answer: "She represents buyers and sellers in the village and publishes only sourced place facts on this site.",
      paragraphs: [
        "Buyer work is the search, the tour, the offer, and the path through escrow. Seller work is the comp set, the prep list, the MLS listing, and the negotiation. Both start with the form or a call. Neither starts with an automated estimate.",
        "The pages name neighborhoods Summerlin.com already named: Capistrano, Sarasota, Estrella, Belmonte, Santa Rosa, Coronado, Los Altos, and Altura. If a street uses a different neighborhood name, the listing wins and the page can be added.",
        "Firsthand notes are blank on purpose. A local expert block on each page is waiting for her sentences. This biography does not invent a favorite street or a client story.",
      ],
    },
    {
      id: "office",
      heading: "Where is the office, and when is it open?",
      answer: "The published office is 8850 W Sunset Road Suite 200, Las Vegas, NV 89148. Hours are not listed yet.",
      paragraphs: [
        "Hours stay off the page until the Google Business Profile hours are copied exactly. A guessed schedule would create a second, false NAP.",
        "The map on this page pins the brokerage-profile address. Treat the pin as provisional. Directions use that same string. The reviews button searches her name and brokerage until the profile URL is confirmed.",
        "The phone in the header is the tracking number for this website. It is still the placeholder 702-XXX-XXXX. Do not substitute the office line into the header without changing the constant in one file.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is Dr. Jan Duffy’s Nevada license number?",
      answer: "It is printed in the footer on every page and on the brokerage profiles linked from this site.",
    },
    {
      question: "Which brokerage is on the site?",
      answer: "The brokerage is named in the footer on every page. The schema marks that firm as the parent organization.",
    },
    {
      question: "Where do you meet her?",
      answer:
        "At 8850 W Sunset Road Suite 200, Las Vegas, NV 89148, once you confirm the pin, or at a Paseos listing she is showing. Use the contact form to set the time.",
    },
    {
      question: "Does she publish price estimates?",
      answer: "No. A value comes from MLS comparables in a consult, not from a widget on this website.",
    },
  ],
};

export const contactArticle: Article = {
  path: "/contact",
  title: "Contact | The Paseos Summerlin 89138",
  description:
    "Call or write Dr. Jan Duffy about The Paseos in Summerlin, Las Vegas, NV 89138. The form goes to Follow Up Boss.",
  h1: "Contact Dr. Jan Duffy in The Paseos, Summerlin",
  eyebrow: "One form, one number",
  answer:
    "Contact Dr. Jan Duffy about The Paseos in Summerlin, Las Vegas, NV 89138, by the phone in the header or the form on this page. She is a REALTOR®. The office address on file is 8850 W Sunset Road Suite 200, Las Vegas, NV 89148, pending a Google Business Profile match.",
  factIds: ["zip"],
  measured: true,
  longform: false,
  cta: "form",
  sections: [
    {
      id: "reach",
      heading: "How do you reach Dr. Jan about The Paseos?",
      answer: "Call the site number or send the form. Both are the same practice.",
      paragraphs: [
        "The form asks for your name, email, phone, and a short note. A hidden field traps automated posts. The server limits repeat posts from the same address. When the Follow Up Boss key is present, the note is sent as a General Inquiry with source PaseosSite.",
        "If the key is missing, the form returns an error instead of pretending the message was delivered. That is intentional for this pre-launch build.",
        "Do not send account numbers, loan documents, or a copy of an ID through the form. A consult can move to a secure channel after the first reply.",
      ],
    },
    {
      id: "visit",
      heading: "Can you visit the office?",
      answer: "The map shows the brokerage-profile address. Call before you drive until hours are confirmed.",
      paragraphs: [
        "Hours are unpublished. The directions link uses 8850 W Sunset Road Suite 200, Las Vegas, NV 89148. If the Google Business Profile uses a different suite, the map will be corrected before launch and the footer will change with it.",
        "Showings in The Paseos start from the listing appointment, not from a walk-in at the park. Tell the form which neighborhood you want to see.",
      ],
    },
  ],
  faqs: [
    {
      question: "Does the form create a Follow Up Boss lead?",
      answer:
        "Yes, when FUB_API_KEY is set on the server. The event source is PaseosSite. The form does not use a third-party form embed.",
    },
    {
      question: "What if the phone number still shows letters?",
      answer:
        "The tracking number is not assigned yet. The placeholder is 702-XXX-XXXX. It will be replaced in one constant.",
    },
    {
      question: "Which pages have the form?",
      answer: "Contact, buy, sell, and the market report. Other pages offer the phone number so the page has one clear next step.",
    },
    {
      question: "How fast will someone reply?",
      answer:
        "This page does not promise a minute count. The form is the handoff. The reply comes from the practice after Follow Up Boss receives it.",
    },
  ],
};

export const privacyArticle: Article = {
  path: "/privacy",
  title: "Privacy Policy | The Paseos Summerlin",
  description:
    "How The Paseos Summerlin site handles form notes, analytics, and the Follow Up Boss handoff.",
  h1: "Privacy policy for The Paseos Summerlin site",
  eyebrow: "Form notes and analytics",
  answer:
    "This policy covers the website about The Paseos in Summerlin, Las Vegas. The form collects the name, email, phone, and message you submit and forwards them to Follow Up Boss when the server key is set. Analytics measure page views and two events: form submits and call-button taps. The site does not sell that information.",
  factIds: [],
  measured: false,
  longform: false,
  cta: "call",
  sections: [
    {
      id: "collect",
      heading: "What does the form store?",
      answer: "The fields you type, plus the page path, so the inquiry has context.",
      paragraphs: [
        "Required fields are name, email, phone, and message. An intent field records buy, sell, or a general question. A honeypot field should stay empty. Filled honeypots are discarded.",
        "The server sends the inquiry to Follow Up Boss’s events API. Follow Up Boss then holds the contact under its own terms. This site does not keep a separate public directory of leads.",
        "Rate limits may reject repeated posts. Rejected posts are not described as delivered.",
      ],
    },
    {
      id: "measure",
      heading: "What do analytics record?",
      answer: "Vercel Analytics records page views. Call taps and successful form submits are custom events.",
      paragraphs: [
        "A Google Analytics ID is optional and off unless the environment variable is set. Search Console verification is a meta tag, also optional.",
        "The RealScout widget loads from RealScout’s domains and follows that product’s practices once it runs. It is deferred so it does not block the first paint.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you sell form submissions?",
      answer: "No. Submissions go to Follow Up Boss for Dr. Jan Duffy’s practice when the API key is configured.",
    },
    {
      question: "Can you ask for a deletion?",
      answer:
        "Yes. Use the contact form and say what you want removed. The practice has to delete it inside Follow Up Boss as well as anywhere it was copied.",
    },
  ],
};
