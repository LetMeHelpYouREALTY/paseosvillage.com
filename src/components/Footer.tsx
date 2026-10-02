import Link from "next/link";
import { agent, nav, place } from "@/content/site.mjs";
import { siteName } from "@/config";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <strong>{siteName}</strong>
          <p>
            {agent.name}, {agent.credential} · {agent.brokerage}
            <br />
            Nevada license {agent.license} · Serving The Paseos Village,
            Summerlin, Las Vegas, NV {place.postalCode}
          </p>
        </div>
        <div className="footer-links">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link href="/book-a-consultation">Book a consultation</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {agent.name}</span>
        <span>
          Illustrations are original artwork, not photos of specific homes.
          Information is deemed reliable but not guaranteed.
        </span>
      </div>
    </footer>
  );
}
