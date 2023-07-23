import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Loading from "./components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kasim's World: Discovering Life's Marvels and Insights",
  description:
    "Welcome to Kasim's Blog - A place for insightful articles and blog posts.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <meta name="keywords" content="blog, articles, insights, Kasim" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://blog.kasimsaifi.tech" />
        </head>

        <body className={inter.className}>{children}</body>
      </html>
  );
}
