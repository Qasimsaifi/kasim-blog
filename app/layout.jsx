import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Loading from "./components/Loading";
import { HighlightInit } from "@highlight-run/next/highlight-init";
import Providers from "./Providers";
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="keywords" content="blog, articles, insights, Kasim" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://blog.kasimsaifi.tech" />
        </head>

        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
