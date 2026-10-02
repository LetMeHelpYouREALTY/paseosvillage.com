import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell section">
      <span className="eyebrow">404 / NOT FOUND</span>
      <h1>
        This page is not part of
        <br />The Paseo Village site.
      </h1>
      <p style={{ marginTop: 22 }}>
        The address may have changed, or the page does not exist.
      </p>
      <div className="hero-buttons">
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
        <Link className="button button-outline" href="/book-a-consultation">
          Book with Dr. Duffy
        </Link>
      </div>
    </main>
  );
}
