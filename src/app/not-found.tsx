import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="shell section">
      <p className="eyebrow">404</p>
      <h1>This page is not in The Paseos Summerlin site.</h1>
      <p className="mt-6 max-w-xl">The address may have changed, or the page does not exist.</p>
      <Link className="btn mt-8" href="/">
        Back to The Paseos in Summerlin
      </Link>
    </main>
  );
}
