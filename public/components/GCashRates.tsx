import { Smartphone, Zap } from 'lucide-react';
import React from 'react'

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

const networks = [
  "Globe", "TM", "GOMO!", "Smart", "TNT", "DITO"
];

const GCashRates = () => {
  return (
    <section id="gcash" className="py-20 px-6 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-200">
              <Smartphone size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-black text-blue-950 dark:text-white uppercase tracking-tight">
            GCash Services
          </h2>
          <p className="mt-2 italic font-medium text-slate-500 dark:text-slate-400">
            Cash-In, Cash-Out & E-Load Transactions
          </p>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* E-Load Section */}
          <div 
            className="bg-blue-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-blue-100 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap className="text-blue-600" size={24} />
              <h3 className="text-xl font-black text-blue-950 dark:text-white uppercase tracking-wider">
                Load Available Here
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {networks.map((network) => (
                <div 
                  key={network}
                  className="bg-white dark:bg-slate-800 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center shadow-sm hover:border-blue-500 transition-all cursor-default"
                >
                  <span className="font-black text-blue-900 dark:text-blue-400 text-lg italic tracking-tighter">
                    {network}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Table */}
          <div 
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 md:p-10 border border-slate-100 dark:border-slate-800 shadow-md"
          >
            <h3 className="text-xl font-black text-blue-950 dark:text-white uppercase tracking-wider mb-6">
                Cash In or Cash Out
              </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              <div className="hidden md:flex justify-between px-6 py-3 bg-blue-950 text-white rounded-t-2xl font-bold uppercase tracking-widest text-sm">
                <span>Amount</span>
                <span>Charge</span>
              </div>
              <div className="hidden md:flex justify-between px-6 py-3 bg-blue-950 text-white rounded-t-2xl font-bold uppercase tracking-widest text-sm">
                <span>Amount</span>
                <span>Charge</span>
              </div>

              {gcashRates.map((rate, idx) => (
                <div key={idx} className="flex justify-between items-center px-6 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="text-slate-700 dark:text-slate-300 font-bold text-lg">₱{rate.amount}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-black text-lg">₱{rate.charge}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <span className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-blue-200">
                Rates apply to both Cash-in and Cash-out
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GCashRates