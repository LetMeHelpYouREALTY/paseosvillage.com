import { NextResponse } from "next/server";
import { fubPayload, parseLead, rateLimit } from "@/lib/leads";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many messages. Try again later." }, { status: 429 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send the form as JSON." }, { status: 400 });
  }
  const parsed = parseLead(body);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
  if ("spam" in parsed) return NextResponse.json({ ok: true });
  const key = process.env.FUB_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "The lead service is not configured yet." },
      { status: 503 },
    );
  }
  const page =
    body && typeof body === "object" && "page" in body && typeof body.page === "string"
      ? body.page
      : "/contact";
  const response = await fetch("https://api.followupboss.com/v1/events", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${key}:`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fubPayload(parsed.lead, page)),
  });
  if (!response.ok) {
    return NextResponse.json({ error: "The lead service did not accept the note." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
