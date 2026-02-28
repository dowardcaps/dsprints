import {
  Printer,
  Copy,
  Layers,
  Image as ImageIcon,
  Palette,
  Smartphone,
  Contact,
} from "lucide-react";
import SubmissionProcess from "@/public/components/SubmissionProcess";
import FAQSection from "@/public/components/FAQ";

export default function Home() {
  const services = [
    { title: "Document Print", icon: <Printer size={32} /> },
    { title: "Xerox & Scan", icon: <Copy size={32} /> },
    { title: "Laminate", icon: <Layers size={32} /> },
    { title: "Photo & Sticker", icon: <ImageIcon size={32} /> },
    { title: "Layout & Design", icon: <Palette size={32} /> },
    { title: "Load & GCash", icon: <Smartphone size={32} /> },
    { title: "RUSH ID", icon: <Contact size={32} /> },
  ];

  return (
    <main className="min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="mt-28 pb-20 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">
            Your One-Stop Print Shop
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            High-quality printing, digital services, and school supplies located
            in the heart of Tanza.
          </p>
          <div className="flex items-center justify-center gap-2 max-md:flex-col">
            <a href="#services" className="cursor-pointer">
            <button
              className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl
            cursor-pointer"
              aria-label="services button"
            >
              View Our Services
            </button>
          </a>
          <a href="/pricelists" className="cursor-pointer">
            <button
              className="mt-8 bg-white hover:bg-slate-50 px-8 py-3 text-black rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl
            cursor-pointer"
              aria-label="services button"
            >
              Price Lists
            </button>
          </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 uppercase">
            Our Services
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="text-blue-600 mb-4 bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Professional and quick service for all your personal or business
                needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SubmissionProcess */}
      <SubmissionProcess />

      {/* Frequently asked questions */}
      <FAQSection />
    </main>
  );
}
