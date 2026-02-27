import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/public/components/NavBar";
import { Mail, MapPin } from "lucide-react";

// Configure Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DS Prints & Supplies | Quality Printing Services in Tanza, Cavite",
  description:
    "DS Prints & Supplies offers affordable, high-quality Rush ID packages, document printing, lamination, and photo printing in Amaya 1, Tanza. Your one-stop shop for school supplies and digital services.",
  keywords: [
    "Printing Services Cavite",
    "Rush ID Tanza",
    "Photo Printing",
    "Laminating Services",
    "School Supplies Tanza",
    "DS Prints",
  ],
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
        <NavBar />
        
        {children}
        
        {/* Footer / Contact Section */}
      <footer id="contact" className="bg-blue-950 text-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-blue-900 pb-12">
          <div data-aos="fade-right">
            <h3 className="text-white text-xl font-bold mb-4">
              DS PRINTS & SUPPLIES
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing Amaya 1 with quality printing, design layouts, and
              essential school supplies. We make your digital needs a reality.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-500" />
                <span className="text-sm">Amaya 1, Tanza, Cavite</span>
              </li>
              <li>
                <a
                  href="mailto:dsprints27@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors text-sm"
                >
                  <Mail size={20} className="text-blue-500" />
                  <span className="hover:underline">dsprints27@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/18DXPJnLCa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook-icon lucide-facebook text-blue-500"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="hover:underline">
                    DS Prints and Supplies
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-white text-xl font-bold mb-4">
              Business Hours
            </h3>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="flex justify-between">
                <span>Mon - Sat:</span> <span>6:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span> <span>Closed</span>
              </p>
            </div>
            <p className="text-sm mt-6 text-blue-400 italic font-medium">
              "Quality prints for every purpose."
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs tracking-widest text-white">
          © {new Date().getFullYear()} DS Prints & Supplies. All Rights
          Reserved.
        </div>
      </footer>
      </body>
    </html>
  );
}
