import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magica DaMa",
  description:
    "La storia di una villa grande e confortevole nel verde di Besano, nei pressi di Porto Ceresio",
};

export default function RootLayout({ children, className, customStyle }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon.svg" />
        <link href={inter.href} rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/uty0gas.css"
        ></link>
                    <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3185380127106627"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={className}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
