import React from "react";
import { ChevronRight } from "lucide-react";

// Components
import GCashRates from "@/public/components/GCashRates";
import LaminateAndPhotoPrint from "@/public/components/LaminateAndPhotoPrint";
import RushIDPackage from "@/public/components/RushIDPackage";
import XeroxAndDocuPrinting from "@/public/components/XeroxAndDocuPrinting";

const PriceLists = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <div className="pt-20 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          Service Price Lists
        </h1>
        <p className="max-w-xl mx-auto font-medium">
          Transparent pricing for all your digital, printing, and transaction.
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto mt-12 space-y-24">
        
        {/* Photocopy/Xerox and Document Printing */}
        <section>
          <SectionHeader subtitle="Black & White to Full Color" />
          <XeroxAndDocuPrinting />
        </section>

        {/* RUSH ID Section */}
        <section>
          <SectionHeader subtitle="High Print Quality" />
          <RushIDPackage />
        </section>

        {/* Laminate and Photo Print */}
        <section>
          <SectionHeader subtitle="Preserve your memories" />
          <LaminateAndPhotoPrint />
        </section>

        {/* GCash Rates */}
        <section>
          <SectionHeader subtitle="Cash-in and Cash-out" />
          <GCashRates />
        </section>

      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mt-20 px-6">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
          <p className=" italic">
            * Prices are subject to change without prior notice. For bulk orders and special layouts, please contact us directly for a custom quote.
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Section Headers
const SectionHeader = ({ subtitle }: { subtitle: string }) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
      <ChevronRight size={16} />
      <span>{subtitle}</span>
    </div>
  </div>
);

export default PriceLists;