import { canIndex, resolveSiteUrl } from "@/lib/site-url.mjs";

export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "The Paseo Village | Dr. Jan Duffy";
export const title =
  process.env.NEXT_PUBLIC_TITLE || "Paseos Village Summerlin Realtor | Dr. Jan Duffy";
export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Dr. Jan Duffy is a Berkshire Hathaway HomeServices REALTOR® focused on The Paseos Village in Summerlin, Las Vegas (89138). Search homes and book a consultation.";
export const baseURL = resolveSiteUrl(process.env);
export const indexable = canIndex(process.env);
export const repository = "https://github.com/wangrunlin/seo-nextjs-starter";
export const templateURL =
  "https://github.com/new?template_name=seo-nextjs-starter&template_owner=wangrunlin";
export const deployURL = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(repository)}&project-name=seo-nextjs-starter&repository-name=seo-nextjs-starter&env=NEXT_PUBLIC_URL&envDescription=${encodeURIComponent("Your production website origin, e.g. https://example.com")}`;
