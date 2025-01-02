import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ContentLayout from "@/components/content-layout";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke Taylor - Software Engineer",
  description: "I'm a software engineer based in the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
      >
      <ContentLayout>
      <Navbar />
        {children}
      </ContentLayout>
      </body>
    </html>
  );
}
