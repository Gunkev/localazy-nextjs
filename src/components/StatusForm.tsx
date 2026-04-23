"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "available" | "busy" | "away";

export default function StatusForm() {
  const t = useTranslations("StatusForm");
  const [status, setStatus] = useState<Status>("available");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const statuses: Status[] = ["available", "busy", "away"];

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
        STATUS
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value as Status);
            setSaved(false);
          }}
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {t(`status_${s}`)}
            </option>
          ))}
        </select>
        <button
          onClick={handleSave}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          {t("save_button")}
        </button>
      </div>
      {saved && (
        <p
          style={{ marginTop: "0.75rem", fontSize: "0.9rem", color: "#2e7d32" }}
        >
          {t("save_confirm")}
        </p>
      )}
    </div>
  );
}
