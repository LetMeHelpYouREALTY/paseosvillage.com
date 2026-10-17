# The Paseos Summerlin

Luxury village site for The Paseos in Summerlin, Las Vegas, NV 89138, published for Dr. Jan Duffy, REALTOR® (Nevada license S.0197614.LLC), Berkshire Hathaway HomeServices Nevada Properties.

Place facts live in `src/data/paseos.ts` with a source, URL, and date. Conflicting prices, acreage, and home counts stay unpublished. The phone number is the single constant `SITE_PHONE`.

## Scripts

- `pnpm check` runs lint, fair-housing, types, unit tests, schema validation, and the production build.
- For SEO changes, start `pnpm start` after the build and run `pnpm test:seo`.

Do not deploy until `docs/launch-checklist.md` is clear. Photos are specified in `docs/photo-brief.md`.

## Stack

Next.js 16 App Router, TypeScript, Tailwind CSS v4, RealScout (lazy), and a lead route that posts to Follow Up Boss when `FUB_API_KEY` is set.
