export default function VisitUs() {
  return (
    <section id="visit" className="bg-fb-blue py-20 sm:py-24">
      <div className="section-shell grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Visit Us
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
            Drop by Amaya 1, Tanza, Cavite
          </h2>
          <p className="mt-3 text-white/85 text-base leading-relaxed max-w-md">
            Same-day printing, rush IDs, and design work &mdash; no
            appointment needed. Or send us a message and we&rsquo;ll walk you
            through it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-fb-blue font-bold px-6 py-3.5 hover:bg-white/90 transition-colors"
            >
              Message on Facebook
            </a>
            <a
              href="mailto:dsprints27@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white font-bold px-6 py-3.5 hover:bg-white/10 transition-colors"
            >
              dsprints27@gmail.com
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/20 p-6 sm:p-8 backdrop-blur-sm">
          <dl className="divide-y divide-white/15">
            <Row label="Address" value="Amaya 1, Tanza, Cavite" />
            <Row label="Hours (Mon–Sat)" value="6:00 AM – 8:00 PM" />
            <Row label="Sunday" value="Closed" />
            <Row label="Facebook" value="DS Prints and Supplies" />
            <Row label="Email" value="dsprints27@gmail.com" last />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between gap-4 py-3.5 ${last ? "" : ""}`}>
      <dt className="text-sm text-white/70 font-medium">{label}</dt>
      <dd className="text-sm text-white font-semibold text-right">{value}</dd>
    </div>
  );
}
