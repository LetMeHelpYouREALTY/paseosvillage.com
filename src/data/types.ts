export type Fact = {
  id: string;
  label: string;
  value: string | null;
  source: string;
  sourceUrl: string;
  asOf: string;
  verified: boolean;
  /** Unpublished claims stay in the file for review and are omitted from pages. */
  publish: boolean;
  note?: string;
};
