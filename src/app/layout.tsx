import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBS | Iyoob Book Shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto bg-background text-foreground overflow-hidden">
        {children}
      </body>
    </html>
  );
}
