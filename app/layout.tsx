import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DS Prints and Supplies | Amaya 1, Tanza, Cavite",
  description:
    "Quality prints for every purpose. Document printing, xerox & scan, laminate, rush ID photos, layout & design, and load & GCash — Amaya 1, Tanza, Cavite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
