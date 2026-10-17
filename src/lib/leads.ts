export type LeadIntent = "buy" | "sell" | "question";

export type Lead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  intent: LeadIntent;
};

const hits = new Map<string, { count: number; reset: number }>();

export function rateLimit(ip: string, now = Date.now()): boolean {
  const windowMs = 10 * 60 * 1000;
  const current = hits.get(ip);
  if (!current || current.reset < now) {
    hits.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (current.count >= 5) return false;
  current.count += 1;
  return true;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function parseLead(
  body: unknown,
): { ok: true; lead: Lead } | { ok: true; spam: true } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Missing form body." };
  const record = body as Record<string, unknown>;
  if (text(record.company_website, 200)) return { ok: true, spam: true };
  const name = text(record.name, 80);
  const email = text(record.email, 120);
  const phone = text(record.phone, 30);
  const message = text(record.message, 2000);
  const intentRaw = text(record.intent, 20);
  const intent: LeadIntent =
    intentRaw === "buy" || intentRaw === "sell" || intentRaw === "question" ? intentRaw : "question";
  if (name.length < 2) return { ok: false, error: "Add your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Add a valid email." };
  if (phone.replace(/\D/g, "").length < 10) return { ok: false, error: "Add a phone number." };
  if (message.length < 8) return { ok: false, error: "Add a short note." };
  const [firstName, ...rest] = name.split(/\s+/);
  return {
    ok: true,
    lead: {
      firstName: firstName || name,
      lastName: rest.join(" "),
      email,
      phone,
      message,
      intent,
    },
  };
}

export function fubPayload(lead: Lead, page: string) {
  return {
    source: "PaseosSite",
    system: "PaseosSite",
    type: "General Inquiry",
    message: lead.message,
    pageUrl: page,
    person: {
      firstName: lead.firstName,
      lastName: lead.lastName,
      emails: [{ value: lead.email }],
      phones: [{ value: lead.phone }],
      tags: ["PaseosSite", lead.intent],
    },
  };
}
