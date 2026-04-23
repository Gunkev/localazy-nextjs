import { useTranslations } from "next-intl";

type Role = "admin" | "member";

type Props = {
  name: string;
  role: Role;
};

export default function ProfileCard({ name, role }: Props) {
  const t = useTranslations("ProfileCard");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid #eee",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#c8e6c9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div>
        <div style={{ fontWeight: 600 }}>{t("greeting", { name })}</div>
        <div style={{ fontSize: "0.85rem", color: "#2e7d32" }}>
          {role === "admin" ? t("role_admin") : t("role_member")}
        </div>
      </div>
    </div>
  );
}
