import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "DS Prints & Supplies",
  description: "DS Prints & Supplies offers affordable, high-quality Rush ID packages, document printing, lamination, and photo printing in Amaya 1, Tanza. Your one-stop shop for school supplies and digital services.",
  keywords: ["Printing Services Cavite", "Rush ID Tanza", "Photo Printing", "Laminating Services", "School Supplies Tanza", "DS Prints"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
