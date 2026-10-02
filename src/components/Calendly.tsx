"use client";
import { useEffect, useRef } from "react";

type CalendlyApi = {
  initPopupWidget: (o: { url: string }) => void;
  initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void;
};
const api = () =>
  (window as unknown as { Calendly?: CalendlyApi }).Calendly;

/** Opens Calendly in a popup; falls back to a normal link before the script loads. */
export function CalendlyButton({
  url,
  children,
  variant = "primary",
}: {
  url: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      className={`button button-${variant}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        const calendly = api();
        if (calendly) {
          event.preventDefault();
          calendly.initPopupWidget({ url });
        }
      }}
    >
      {children}
    </a>
  );
}

/** Inline Calendly scheduler; the visible link below it works without JavaScript. */
export function CalendlyInline({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let tries = 0;
    const timer = setInterval(() => {
      const calendly = api();
      const node = ref.current;
      if (calendly && node) {
        if (!node.querySelector("iframe"))
          calendly.initInlineWidget({ url, parentElement: node });
        clearInterval(timer);
      } else if (++tries > 40) clearInterval(timer);
    }, 250);
    return () => clearInterval(timer);
  }, [url]);
  return <div ref={ref} className="calendly-inline-widget" data-url={url} />;
}
