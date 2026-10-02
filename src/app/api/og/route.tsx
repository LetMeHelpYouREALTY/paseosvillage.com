import { ImageResponse } from "next/og";
import { siteName } from "@/config";
export async function GET(request: Request) {
  const pageTitle =
    new URL(request.url).searchParams.get("title")?.trim().slice(0, 100) ||
    "Paseos Village Realtor, Summerlin";
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f3f6ef",
        padding: "64px 72px",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#17291e",
        position: "relative",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 46,
            height: 46,
            borderRadius: 10,
            background: "#b8553a",
            color: "white",
            fontSize: 32,
          }}
        >
          P
        </div>
        {siteName.slice(0, 55)}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: pageTitle.length > 65 ? 57 : 76,
          fontWeight: 600,
          lineHeight: 1.06,
          letterSpacing: "-3px",
          maxWidth: 1030,
        }}
      >
        {pageTitle}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 20,
          color: "#617266",
          borderTop: "1px solid #c9d4c4",
          paddingTop: 25,
        }}
      >
        <span>The Paseos · Summerlin · Las Vegas, NV 89138</span>
        <span>Dr. Jan Duffy, REALTOR®</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
    },
  );
}
