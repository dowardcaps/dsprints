import React from 'react'
import {
  Layers,
  Image as ImageIcon,

} from "lucide-react";

const photoPrintRates = [
  { size: "2R / Wallet", dim: '2.5" x 3.5"', price: "15" },
  { size: "3R", dim: '3.5" x 5"', price: "20" },
  { size: "4R", dim: '4" x 6"', price: "30" },
  { size: "5R", dim: '5" x 7"', price: "40" },
  { size: "6R", dim: '6" x 8"', price: "50" },
  { size: "8R", dim: '8" x 10"', price: "50" },
  { size: "S8R / A4", dim: '8.2" x 11.6"', price: "50" },
];

const laminateRates = [
  { size: "2R / Wallet", dim: '2.5" x 3.5"', price: "20" },
  { size: "3R", dim: '3.5" x 5"', price: "30" },
  { size: "4R", dim: '4" x 6"', price: "40" },
  { size: "5R", dim: '5" x 7"', price: "50" },
  { size: "6R", dim: '6" x 8"', price: "60" },
  { size: "8R", dim: '8" x 10"', price: "60" },
  { size: "S8R / A4", dim: '8.2" x 11.6"', price: "60" },
];
const LaminateAndPhotoPrint = () => {
  return (
    // Data extracted from your uploaded images


// Inside your return block:
<section className="py-20 px-6 bg-slate-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-950 uppercase">Printing & Lamination Rates</h2>
      <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Photo Print Section */}
      <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100" data-aos="fade-right">
        <div className="flex items-center gap-3 mb-8">
          <ImageIcon className="text-blue-600" size={28} />
          <h3 className="text-2xl font-black text-blue-950 tracking-tight">PHOTO PRINT</h3>
        </div>
        <div className="space-y-4">
          {photoPrintRates.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center group">
              <div>
                <p className="font-bold text-slate-800">{item.size}</p>
                <p className="text-xs text-slate-500 uppercase">{item.dim}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-slate-200 group-hover:w-20 transition-all duration-300"></div>
                <span className="text-xl font-black text-blue-600">₱{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Laminate Section */}
      <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100" data-aos="fade-left">
        <div className="flex items-center gap-3 mb-8">
          <Layers className="text-blue-600" size={28} />
          <h3 className="text-2xl font-black text-blue-950 tracking-tight">LAMINATE</h3>
        </div>
        <div className="space-y-4">
          {laminateRates.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center group">
              <div>
                <p className="font-bold text-slate-800">{item.size}</p>
                <p className="text-xs text-slate-500 uppercase">{item.dim}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-slate-200 group-hover:w-20 transition-all duration-300"></div>
                <span className="text-xl font-black text-blue-600">₱{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <p className="text-center text-slate-400 text-sm mt-12 italic">
      * Prices are subject to change without prior notice. High-quality waterproof ink used.
    </p>
  </div>
</section>
  )
}

export default LaminateAndPhotoPrint