import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ContentLayout from "@/components/content-layout";
import {Toaster} from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
      <ContentLayout>
        {children}
      </ContentLayout>
      <Toaster />
      </body>
    </html>
  );
}
