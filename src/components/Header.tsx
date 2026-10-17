"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TrackedCall } from "@/components/TrackedCall";
import { SITE_PHONE } from "@/lib/phone";

const links = [
  { href: "/homes-for-sale", label: "Homes" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/living-in-the-paseos", label: "Living" },
  { href: "/market-report", label: "Market" },
  { href: "/schools", label: "Schools" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-gold bg-sand/95 backdrop-blur">
      <div className="shell flex min-h-16 items-center gap-6">
        <Link href="/" className="text-ink no-underline">
          <span className="font-display text-2xl leading-none">The Paseos</span>
          <span className="mt-1 block text-xs tracking-[0.12em] uppercase text-muted">Summerlin</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <TrackedCall className="btn hidden lg:inline-flex">Call {SITE_PHONE}</TrackedCall>
        <button
          className="btn btn-ghost ml-auto lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="shell flex flex-col pb-4 lg:hidden" aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/buy" className="nav-link" onClick={() => setOpen(false)}>
            Buy
          </Link>
          <Link href="/sell" className="nav-link" onClick={() => setOpen(false)}>
            Sell
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
