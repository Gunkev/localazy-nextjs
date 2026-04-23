"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function AgeCounter() {
  const t = useTranslations("AgeCounter");
  const [count, setCount] = useState(1);

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "#666",
          marginBottom: "0.75rem",
        }}
      >
        AGE COUNTER
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        <button
          onClick={() => setCount((c) => Math.max(1, c - 1))}
          style={{
            width: 32,
            height: 32,
            borderRadius: "4px",
            border: "1px solid #ccc",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          −
        </button>
        <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>{count}</span>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            width: 32,
            height: 32,
            borderRadius: "4px",
            border: "1px solid #ccc",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          +
        </button>
      </div>
      <p style={{ margin: 0 }}>{t("age_label", { count })}</p>
    </div>
  );
}
