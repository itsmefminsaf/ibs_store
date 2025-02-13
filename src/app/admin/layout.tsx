import type { Metadata } from "next";
import { shopName } from "@/libs/variables";

export const metadata: Metadata = {
  title: `Dashboard | ${shopName}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
