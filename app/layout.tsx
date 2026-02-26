import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Configure Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DS Prints & Supplies | Quality Printing Services in Tanza, Cavite",
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
      {/* Adding suppressHydrationWarning here tells React not to 
          panic if browser extensions add extra attributes 
      */}
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning={true} 
      >
        {children}
      </body>
    </html>
  );
}