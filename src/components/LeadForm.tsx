"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";

export function LeadForm({ page, intent = "question" }: { page: string; intent?: string }) {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? ""),
      intent: String(form.get("intent") ?? intent),
      company_website: String(form.get("company_website") ?? ""),
      page,
    };
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok) {
        setError(data.error || "The form did not send.");
        return;
      }
      setDone(true);
      track("form_submit", { page });
    } catch {
      setError("The form did not send.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return <p>Message received. Dr. Jan’s practice will follow up.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="grid max-w-xl gap-4" noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div>
        <label htmlFor="intent">I am asking about</label>
        <select id="intent" name="intent" defaultValue={intent}>
          <option value="buy">Buying in The Paseos</option>
          <option value="sell">Selling in The Paseos</option>
          <option value="question">A question</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Note</label>
        <textarea id="message" name="message" required />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? <p role="alert">{error}</p> : null}
      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send to Dr. Jan"}
      </button>
    </form>
  );
}
