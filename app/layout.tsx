import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PanelProvider } from "@/context/PanelContext";
import SlidePanel from "@/components/ui/SlidePanel";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultrawell Home",
  description: "Safe, Supported Living Where Every Resident Thrives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PanelProvider>
        <Navbar />
        {children}
        <SlidePanel />
        <Footer />
        </PanelProvider>
      </body>
    </html>
  );
}
