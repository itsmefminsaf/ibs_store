import "./globals.css";
import Loading from "./loading";
import { footerItems, metaData } from "@/libs/variables";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = metaData;

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
              <a href="https://insafportfolio.web.app" target="_blank">
                Developer info
              </a>
              <br />
              <a
                href="https://github.com/itsmefminsaf/ibs_store"
                target="_blank"
              >
                Source Code
              </a>
            </h5>
          </footer>
        </Suspense>
      </body>
    </html>
  );
}
