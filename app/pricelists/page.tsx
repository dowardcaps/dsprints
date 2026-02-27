import React from "react";
import { ChevronRight } from "lucide-react";

// Components
import GCashRates from "@/public/components/GCashRates";
import LaminateAndPhotoPrint from "@/public/components/LaminateAndPhotoPrint";
import RushIDPackage from "@/public/components/RushIDPackage";
import XeroxAndDocuPrinting from "@/public/components/XeroxAndDocuPrinting";

const PriceLists = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Header Section */}
      <div className="bg-blue-950 text-white pt-30 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          Service Price Lists
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto font-medium">
          Transparent pricing for all your digital, printing, and transaction.
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-24">
        
        {/* Photocopy/Xerox and Document Printing */}
        <section id="printing" className="scroll-mt-40">
          <SectionHeader title="Printing & Xerox" subtitle="Black & White to Full Color" />
          <XeroxAndDocuPrinting />
        </section>

        {/* RUSH ID Section */}
        <section id="rush-id" className="scroll-mt-40">
          <SectionHeader title="RUSH ID Packages" subtitle="High Print Quality" />
          <RushIDPackage />
        </section>

        {/* Laminate and Photo Print */}
        <section id="photo" className="scroll-mt-40">
          <SectionHeader title="Photo & Laminate" subtitle="Preserve your memories" />
          <LaminateAndPhotoPrint />
        </section>

        {/* GCash Rates */}
        <section id="gcash" className="scroll-mt-40">
          <SectionHeader title="GCash Rates" subtitle="Cash-in and Cash-out" />
          <GCashRates />
        </section>

      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mt-20 px-6">
        <div className="bg-blue-50 dark:bg-slate-900 p-6 rounded-2xl border border-blue-100 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            * Prices are subject to change without prior notice. For bulk orders and special layouts, please contact us directly for a custom quote.
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-10 flex flex-col items-center md:items-start">
    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">
      <ChevronRight size={16} />
      <span>{subtitle}</span>
    </div>
    <h2 className="text-3xl font-black text-blue-950 dark:text-white uppercase tracking-tight">
      {title}
    </h2>
    <div className="h-1.5 w-16 bg-blue-600 mt-2 rounded-full"></div>
  </div>
);

export default PriceLists;