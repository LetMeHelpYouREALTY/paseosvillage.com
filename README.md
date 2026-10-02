# The Paseo Village | Dr. Jan Duffy

Hyper-local real estate website for The Paseos Village in Summerlin, Las Vegas (89138), for REALTOR® Dr. Jan Duffy (Berkshire Hathaway HomeServices Nevada Properties).

- Next.js app with eight SEO/GEO/AEO-structured pages (copy in `src/content/pages.mjs`).
- RealScout listings directly under every hero (`NEXT_PUBLIC_REALSCOUT_AGENT_ID`; falls back to a link to the RealScout search until set).
- Calendly scheduling everywhere (popup buttons plus an inline scheduler); no forms.
- Original SVG illustrations for every H1/H2/H3, generated with `node scripts/generate-images.mjs`.
- Run `pnpm check`, then start a production server and run `pnpm test:seo`.

Starter-template routes (`/docs`, `/examples`, `/about`) now redirect; their source files remain and can be deleted.
