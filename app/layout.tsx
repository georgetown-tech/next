import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DotBackground } from "@/components/dot-background";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Georgetown Disruptive Tech",
  description:
    "Georgetown Disruptive Technology is the leading technology-oriented club at Georgetown University. Our goal is to provide students with the resources they need to succeed in the ever-changing world of technology. From programming to cyber security, we offer a wide range of workshops and events to help you stay ahead of the curve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={"bg-white"}>
        <DotBackground>
          <Header />
          {children}
          <Footer />
        </DotBackground>
        {/* <Navbar
          pages={[
            { name: "About", url: "" },
            { name: "Projects", url: "projects" },
            { name: "Experiences", url: "resume" },
            { name: "Contact", url: "contact" },
          ]}
        /> */}
      </body>
    </html>
  );
}
