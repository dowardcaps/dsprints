import { Smartphone } from 'lucide-react';
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const gcashRates = [
  { amount: "1 - 500", charge: "5" },
  { amount: "501 - 1000", charge: "10" },
  { amount: "1001 - 1500", charge: "15" },
  { amount: "1501 - 2000", charge: "20" },
  { amount: "2001 - 2500", charge: "25" },
  { amount: "2501 - 3000", charge: "30" },
  { amount: "3001 - 3500", charge: "35" },
  { amount: "3501 - 4000", charge: "40" },
  { amount: "4001 - 4500", charge: "45" },
  { amount: "4501 - 5000", charge: "50" },
  { amount: "5001 - 5500", charge: "55" },
  { amount: "5501 - 6000", charge: "60" },
  { amount: "6001 - 6500", charge: "65" },
  { amount: "6501 - 7000", charge: "70" },
  { amount: "7001 - 7500", charge: "75" },
  { amount: "7501 - 8000", charge: "80" },
  { amount: "8001 - 8500", charge: "85" },
  { amount: "8501 - 9000", charge: "90" },
  { amount: "9001 - 9500", charge: "95" },
  { amount: "9501 - 10000", charge: "100" },
];

const GCashRates = () => {
  return (
    <section id="gcash" className="py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-200">
          <Smartphone size={32} />
        </div>
      </div>
      <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight">GCash Cash-In & Cash-Out</h2>
      <p className="mt-2 italic font-medium">Fast and reliable transaction service</p>
      <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Transaction Table */}
    <div className="bg-white text-xl rounded-4xl p-4 md:p-10 border border-slate-100 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {/* Header hidden on mobile, shown on desktop */}
        <div className="hidden md:flex justify-between px-4 py-2 bg-blue-950 text-white rounded-t-xl font-bold uppercase tracking-widest">
          <span>Amount</span>
          <span>Charge</span>
        </div>
        <div className="hidden md:flex justify-between px-4 py-2 bg-blue-950 text-white rounded-t-xl font-bold uppercase tracking-widest">
          <span>Amount</span>
          <span>Charge</span>
        </div>

        {gcashRates.map((rate, idx) => (
          <div key={idx} className="flex justify-between items-center px-4 py-3 border-b border-slate-200 hover:bg-blue-50 transition-colors">
            <span className="text-slate-700 font-semibold">₱{rate.amount}</span>
            <span className="text-blue-600 font-black">₱{rate.charge}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest">
          Rates apply to both Cash-in and Cash-out
        </span>
      </div>
    </div>
  </div>
</section>
  )
}

export default GCashRates