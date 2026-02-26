"use client";

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
      onFocus={(e) => {
        Object.assign(e.currentTarget.style, {
          position: "fixed", left: "16px", top: "16px",
          width: "auto", height: "auto", zIndex: "9999",
          background: "#2196F3", color: "#fff",
          padding: "8px 16px", borderRadius: "4px",
          textDecoration: "none", fontWeight: "600",
        });
      }}
      onBlur={(e) => {
        Object.assign(e.currentTarget.style, {
          position: "absolute", left: "-9999px",
          width: "1px", height: "1px",
        });
      }}
    >
      Skip to main content
    </a>
  );
}
