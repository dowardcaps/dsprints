import { IdCard } from "lucide-react";

const idPackages = [
  { id: "1", price: "50", details: "9pcs. 1x1" },
  { id: "2", price: "50", details: "9pcs. 2x2" },
  { id: "3", price: "50", details: "6pcs. Passport size" },
  { id: "4", price: "60", details: "4pcs. 2x2 & 6pcs. 1x1" },
  { id: "5", price: "70", details: "3pcs. 2x2, Passport size, & 4pcs. 1x1" },
];

const RushIDPackage = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 uppercase tracking-tight">
            Rush ID Packages
          </h2>
          <p className="text-slate-500 mt-2">
            Get high-quality ID photos in minutes
          </p>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {idPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center hover:border-blue-500 transition-all group"
            >
              <span className="bg-blue-950 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                PACKAGE {pkg.id}
              </span>
              <div className="text-3xl font-black text-blue-600 mb-4">
                ₱{pkg.price}
              </div>
              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                {pkg.details}
              </p>
            </div>
          ))}
        </div>

        {/* Add-ons Box */}
        <div
          data-aos="fade-up"
          className="max-w-md mx-auto bg-blue-950 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
        >
          {/* Decorative SVG background element */}
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <IdCard size={150} />
          </div>

          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-400 rounded-full"></span>
            ADD ONS
          </h3>

          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-center border-b border-blue-900 pb-2">
              <span className="font-medium">Change Attire</span>
              <span className="text-blue-400 font-bold">₱10</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Get Soft Copy</span>
              <span className="text-blue-400 font-bold">₱15</span>
            </div>
          </div>

          <p className="text-[10px] text-blue-300 mt-6 text-center uppercase tracking-widest">
            Available for all ID packages
          </p>
        </div>
      </div>
    </section>
  );
};

export default RushIDPackage;
