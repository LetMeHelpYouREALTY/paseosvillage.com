"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyApi = {
  initPopupWidget: (options: { url: string }) => void;
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
    inlineStyles?: boolean;
  }) => void;
};

const api = () =>
  (window as unknown as { Calendly?: CalendlyApi }).Calendly;

let resolveCalendlyReady: () => void = () => {};
const calendlyReady = new Promise<void>((resolve) => {
  resolveCalendlyReady = resolve;
});

let cssPromise: Promise<void> | null = null;

/** Loads the widget stylesheet once, after first paint, from a browser event. */
export function loadCalendlyCss(): Promise<void> {
  if (cssPromise) return cssPromise;
  cssPromise = new Promise<void>((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    link.onload = () => resolve();
    link.onerror = () => {
      link.remove();
      cssPromise = null;
      reject(new Error("Calendly stylesheet failed to load"));
    };
    document.head.appendChild(link);
  });
  return cssPromise;
}

function warmCalendlyCss() {
  if (api()) void loadCalendlyCss();
}

/** Idle Calendly loader. onLoad is client-only, so the server layout cannot own this script. */
export function CalendlyScript() {
  return (
    <Script
      src={CALENDLY_JS}
      strategy="lazyOnload"
      onLoad={() => {
        resolveCalendlyReady();
      }}
    />
  );
}

/** Opens Calendly in a popup; the link still works before the script loads. */
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
      onPointerDown={warmCalendlyCss}
      onFocus={warmCalendlyCss}
      onClick={(event) => {
        const calendly = api();
        if (!calendly) return;
        event.preventDefault();
        loadCalendlyCss().then(
          () => calendly.initPopupWidget({ url }),
          () => {
            window.open(url, "_blank", "noopener,noreferrer");
          },
        );
      }}
    >
      {children}
    </a>
  );
}

/** Inline scheduler. The shell is server-rendered; the iframe waits until the section is near. */
export function CalendlyInline({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        void (async () => {
          await loadCalendlyCss().catch(() => undefined);
          if (!api()) await calendlyReady;
          if (!active || !node.isConnected || node.querySelector("iframe")) {
            return;
          }
          api()?.initInlineWidget({
            url,
            parentElement: node,
            inlineStyles: true,
          });
        })();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => {
      active = false;
      observer.disconnect();
    };
  }, [url]);
  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url={url}
      data-auto-load="false"
    />
  );
}
