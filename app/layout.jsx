import Footer from "@/components/Footer";
import Providers from "./Providers";
import "./globals.css";
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
          <Providers>
            {children}
            <Footer/>
          </Providers>
        </body>
      </html>
    </>
  );
}
