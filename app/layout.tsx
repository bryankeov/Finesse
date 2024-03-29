import "./globals.css";
import Head from "next/head";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";

export const metadata = {
  title: "Finesse Tissue",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <body>
        <Header />
        <Menu />
        <div className="display">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
