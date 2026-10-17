"use client";

import { track } from "@vercel/analytics";
import { SITE_PHONE, SITE_PHONE_TEL } from "@/lib/phone";

export function TrackedCall({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={`tel:${SITE_PHONE_TEL}`}
      onClick={() => {
        track("call_tap", { location: "paseos" });
      }}
    >
      {children ?? `Call ${SITE_PHONE}`}
    </a>
  );
}
