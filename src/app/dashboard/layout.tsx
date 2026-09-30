import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YARA Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
