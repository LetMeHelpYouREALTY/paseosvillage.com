"use client";
import { useEffect, useRef } from "react";

type CalendlyApi = {
  initPopupWidget: (o: { url: string }) => void;
  initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void;
};
const CSS = "https://assets.calendly.com/assets/external/widget.css";
const JS = "https://assets.calendly.com/assets/external/widget.js";
const api = () => (window as unknown as { Calendly?: CalendlyApi }).Calendly;

/** Loads Calendly's stylesheet and script once, only when a visitor is likely to need them. */
export function loadCalendly() {
  if (!document.querySelector(`link[href="${CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${JS}"]`)) {
    const script = document.createElement("script");
    script.src = JS;
    script.async = true;
    document.head.appendChild(script);
  }
}

/** Warms Calendly after the page is idle so the first popup click is instant. */
export function CalendlyIdleLoader() {
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 3000));
    const id = idle(loadCalendly, { timeout: 5000 });
    return () => (window.cancelIdleCallback ?? clearTimeout)(id as number);
  }, []);
  return null;
}

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
      onPointerEnter={loadCalendly}
      onFocus={loadCalendly}
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

/** Inline scheduler; loads only when scrolled near. The link beside it works without JavaScript. */
export function CalendlyInline({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      loadCalendly();
      let tries = 0;
      timer = setInterval(() => {
        const calendly = api();
        if (calendly) {
          if (!node.querySelector("iframe"))
            calendly.initInlineWidget({ url, parentElement: node });
          clearInterval(timer);
        } else if (++tries > 80) clearInterval(timer);
      }, 250);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          start();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [url]);
  return <div ref={ref} className="calendly-inline-widget" data-url={url} />;
}
