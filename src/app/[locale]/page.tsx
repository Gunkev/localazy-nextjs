import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProfileCard from "@/components/ProfileCard";
import AgeCounter from "@/components/AgeCounter";
import StatusForm from "@/components/StatusForm";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("profileTitle"),
    description: t("profileDescription"),
  };
}

const user = {
  name: "Alex Rivera",
  role: "admin" as const,
};

export default function ProfilePage() {
  return (
    <main
      style={{
        padding: "2rem",
        minWidth: "960px",
        maxWidth: "460px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontSize: "0.75rem",
          background: "#f0f4f8",
          padding: "2px 8px",
          borderRadius: "4px",
          width: "fit-content",
        }}
      >
        server component
      </span>
      <ProfileCard name={user.name} role={user.role} />
      <span
        style={{
          fontSize: "0.75rem",
          background: "#fff8e1",
          padding: "2px 8px",
          borderRadius: "4px",
          width: "fit-content",
        }}
      >
        client component
      </span>
      <AgeCounter />
      <StatusForm />
    </main>
  );
}
