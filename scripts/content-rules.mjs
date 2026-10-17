export const bannedPhrases = [
  { label: "family-friendly", pattern: /family-friendly/i },
  { label: "family village", pattern: /family village/i },
  { label: "good schools", pattern: /good schools/i },
  { label: "great for kids", pattern: /great for kids/i },
  { label: "established community", pattern: /established community/i },
  { label: "exclusive", pattern: /\bexclusive\b/i },
  { label: "safe", pattern: /\bsafe\b/i },
  { label: "Zillow or Redfin estimate", pattern: /zillow|redfin|zestimate/i },
];

export const disputedFigures = [
  { label: "dollar amount", pattern: /\$\s?\d/ },
  { label: "conflicting acreage", pattern: /(?<![\d,])(?:500|750)[- ]acres?\b/i },
  { label: "home count 2800", pattern: /\b2,800\b/ },
  { label: "home count 3600", pattern: /\b3,600\b/ },
  { label: "fox hill acres", pattern: /\b14[- ]acres?\b/i },
];

const phoneSource = String.raw`(?:\+1[\s.-]?)?(?:\(\s*\d{3}\s*\)|\d{3})[\s.-]\d{3}[\s.-]\d{4}`;

export const allowedPhone = "702-XXX-XXXX";

export function contentIssues(text, { disputed = true } = {}) {
  const issues = [];
  for (const rule of bannedPhrases) {
    if (rule.pattern.test(text)) issues.push(`banned phrase “${rule.label}”`);
  }
  if (disputed) {
    for (const rule of disputedFigures) {
      if (rule.pattern.test(text)) issues.push(`disputed figure “${rule.label}”`);
    }
  }
  const phones = text.match(new RegExp(phoneSource, "g")) ?? [];
  for (const found of phones) {
    if (found !== allowedPhone) issues.push(`phone ${found} is not SITE_PHONE`);
  }
  return issues;
}
