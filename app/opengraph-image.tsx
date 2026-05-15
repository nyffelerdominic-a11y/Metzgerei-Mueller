import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Müller Metzgerei zum Rössli — Brüttisellen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1a1612",
          color: "#f5f0e6",
          padding: 72,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(200,32,43,0.35), transparent 55%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "rgba(245,240,230,0.7)" }}>
          <div style={{ width: 56, height: 1, background: "rgba(245,240,230,0.5)" }} />
          Brüttisellen · seit 1984
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 110,
            lineHeight: 1,
            letterSpacing: -3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Müller</span>
          <span style={{ fontStyle: "italic", fontWeight: 300, color: "#c9a961" }}>
            Metzgerei.
          </span>
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "rgba(245,240,230,0.8)", display: "flex" }}>
          Genuss, der verbindet.
        </div>
      </div>
    ),
    { ...size }
  );
}
