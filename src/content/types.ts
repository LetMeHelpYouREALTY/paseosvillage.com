export type Faq = { question: string; answer: string };

export type Section = {
  id: string;
  heading: string;
  answer: string;
  paragraphs: string[];
};

export type Cta = "call" | "form" | "search";

export type Article = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  answer: string;
  factIds: string[];
  sections: Section[];
  faqs: Faq[];
  cta: Cta;
  /** Content pages must carry a 40–60 word answer. Utility pages do not. */
  measured: boolean;
  /** When true, body copy must reach at least 1,200 words. */
  longform: boolean;
  related?: { href: string; label: string }[];
};
