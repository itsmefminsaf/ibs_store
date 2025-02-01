import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iyoob Book Shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
