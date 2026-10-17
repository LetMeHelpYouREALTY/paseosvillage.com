/** Search and user-requested fetchers. Allowed even on noindex previews. */
export const SEARCH_AGENTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Amzn-SearchBot",
  "Amzn-User",
  "meta-externalfetcher",
  "YouBot",
];

/**
 * Training crawlers. Allowed when the site is indexable, because this site
 * is meant to be cited, including Gemini grounding via Google-Extended.
 * Disallowed on preview and localhost so placeholder copy is not trained on.
 * anthropic-ai is a retired token kept so older clients still see an allow.
 */
export const TRAINING_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Amazonbot",
  "meta-externalagent",
  "Diffbot",
  "Bytespider",
];
