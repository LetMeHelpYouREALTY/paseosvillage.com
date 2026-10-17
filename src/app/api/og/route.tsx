import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const title = new URL(request.url).searchParams.get("title")?.slice(0, 80) || "The Paseos Summerlin";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4EFE6",
          color: "#1E1B18",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#6E3424" }}>
          THE PASEOS · SUMMERLIN
        </div>
        <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, maxWidth: 980 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 24, color: "#A8573A" }}>Las Vegas, NV 89138</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
