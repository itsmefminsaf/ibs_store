import { footerItems } from "@/libs/variables";
import "./globals.css";
import Loading from "./loading";
import type { Metadata } from "next";
import { Suspense } from "react";

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
        <Suspense fallback={<Loading />}>
          {children}
          <footer className="bg-black text-white p-3">
            <div className="flex justify-between">
              <div>
                <h1 className="text-lg">
                  <u>Explore Categories</u>
                </h1>
                <ul>
                  {footerItems.categories.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="text-right">
                <h1 className="text-lg">
                  <u>Contact Us</u>
                </h1>
                <ul>
                  {footerItems.contact.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <h5 className="text-center font-bold">
              <a href={footerItems.contactDeveloper} target="_blank">
                Developer info
              </a>
            </h5>
          </footer>
        </Suspense>
      </body>
    </html>
  );
}
