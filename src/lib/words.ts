export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function wordsOf(parts: Array<string | undefined>): number {
  return wordCount(parts.filter(Boolean).join(" "));
}
