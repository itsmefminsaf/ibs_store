import { shopName } from "@/libs/variables";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard | ${shopName}`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
