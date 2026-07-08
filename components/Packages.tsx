import { SectionHeading } from "./Services";

type Package = {
  id: number;
  price: number;
  desc: string;
  popular?: boolean;
};

const PACKAGES: Package[] = [
  { id: 1, price: 50, desc: "12 pcs \u2014 1x1" },
  { id: 2, price: 50, desc: "6 pcs \u2014 2x2" },
  { id: 3, price: 50, desc: "6 pcs \u2014 Passport size" },
  { id: 4, price: 60, desc: "8 pcs \u2014 1x1 / 4 pcs \u2014 2x2" },
  { id: 5, price: 70, desc: "4 pcs \u2014 1x1 / 3 pcs \u2014 2x2 / 3 pcs \u2014 Passport" },
  { id: 6, price: 40, desc: "4 pcs \u2014 1x1 / 2 pcs \u2014 2x2", popular: true },
];

export default function Packages() {
  return (
    <section id="rush-id" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Rush ID Photos"
            title="Same-day ID packages, priced simply"
            subtitle="Walk in for a quick shot or send your photo &mdash; print-ready sheets in minutes, mix and match sizes as needed."
          />
          <p className="text-sm text-fb-slate lg:text-right lg:max-w-xs">
            Prices in Philippine Peso (₱). Rush service available same day, subject to queue.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 border transition-all duration-200 ${
                pkg.popular
                  ? "bg-fb-blue text-white border-fb-blue shadow-pop scale-[1.02]"
                  : "bg-white text-fb-ink border-fb-line shadow-card hover:-translate-y-1 hover:shadow-pop"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-fb-amber text-fb-ink text-[11px] font-bold px-3 py-1 shadow-card">
                  Best Value
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3
                  className={`font-display font-bold text-lg ${
                    pkg.popular ? "text-white" : "text-fb-ink"
                  }`}
                >
                  Package {pkg.id}
                </h3>
                <p
                  className={`font-display font-extrabold text-2xl ${
                    pkg.popular ? "text-white" : "text-fb-blue"
                  }`}
                >
                  &#8369;{pkg.price}
                </p>
              </div>
              <p className={`mt-2 text-sm leading-relaxed ${pkg.popular ? "text-white/85" : "text-fb-slate"}`}>
                {pkg.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
