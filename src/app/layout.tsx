import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "IBS | Iyoob Book Shop | Buy Stationeries and accessories online",
  description:
    "Iyoob Book Shop is the right choice for Kalpitiya people looking for stationeries and accessories. We provide a wide range of products at affordable prices.",
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
