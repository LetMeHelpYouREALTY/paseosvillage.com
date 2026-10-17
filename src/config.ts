import { canIndex, resolveSiteUrl } from "@/lib/site-url.mjs";

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "The Paseos Summerlin";
export const title =
  process.env.NEXT_PUBLIC_TITLE || "The Paseos Summerlin | Las Vegas 89138";
export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "The Paseos is a Summerlin village in Las Vegas, NV 89138. Dr. Jan Duffy publishes sourced place facts and a live home search.";
export const baseURL = resolveSiteUrl(process.env);
export const indexable = canIndex(process.env);
export const repository = "https://github.com/LetMeHelpYouREALTY/paseosvillage.com";
