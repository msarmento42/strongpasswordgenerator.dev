import { ImageResponse } from "next/og";

export const alt = "Strong Password Generator security tools";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 48%, #e0e7ff 100%)",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #6366f1, #9333ea)",
            borderRadius: "36px",
            color: "white",
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            height: 132,
            justifyContent: "center",
            marginBottom: 44,
            width: 132,
          }}
        >
          🔐
        </div>
        <div style={{ fontSize: 70, fontWeight: 800, letterSpacing: 0, lineHeight: 1.05, textAlign: "center" }}>
          Strong Password Generator
        </div>
        <div style={{ color: "#475569", fontSize: 32, lineHeight: 1.35, marginTop: 28, textAlign: "center" }}>
          Free password tools, security guides, and practical account protection.
        </div>
      </div>
    ),
    size,
  );
}
