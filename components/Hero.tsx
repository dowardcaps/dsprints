export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* soft background wash, restrained */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-96 bg-gradient-to-b from-fb-blue/[0.07] to-transparent"
      />

      <div className="section-shell relative py-16 sm:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-fb-green" />
            Amaya 1, Tanza, Cavite &middot; Open Today
          </span>

          <h1 className="mt-5 font-display font-extrabold text-fb-ink text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight">
            Quality prints
            <br />
            <span className="text-fb-blue">for every purpose.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-fb-slate max-w-xl leading-relaxed">
            From rush ID photos to tarpaulin signage, DS Prints and Supplies
            is your neighborhood print shop &mdash; walang tagal, laging
            sulit. Dumaan lang, or message us and we&rsquo;ll take it from
            there.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-fb-blue text-white font-bold px-6 py-3.5 shadow-pop hover:bg-fb-bluedark transition-colors"
            >
              Message Us on Facebook
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-fb-mist text-fb-ink font-bold px-6 py-3.5 border border-fb-line hover:bg-white hover:border-fb-blue/40 transition-colors"
            >
              See Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-fb-slate">
            <div className="flex items-center gap-2">
              <StarRow />
              <span className="font-semibold text-fb-ink">Trusted by regulars</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span>Mon&ndash;Sat, 6:00 AM&ndash;8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Signature element: a Facebook-Page-style info card, since the shop's real front door is its FB Page */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="card-base overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-fb-blue to-fb-bluedeep" />
            <div className="px-6 pb-6">
              <div className="-mt-10 flex items-end gap-3">
                <div className="h-20 w-20 rounded-2xl bg-white p-1 shadow-card shrink-0">
                  <div className="h-full w-full rounded-xl bg-fb-blue grid place-items-center text-white font-display font-extrabold text-2xl">
                    DS
                  </div>
                </div>
                <div className="pb-1">
                  <p className="font-display font-extrabold text-fb-ink text-lg leading-tight">
                    DS Prints &amp; Supplies
                  </p>
                  <p className="text-xs text-fb-slate">@dsprintsandsupplies</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-fb-slate italic">
                &ldquo;Quality prints for every purpose.&rdquo;
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <PinIcon />
                  <dd className="text-fb-ink">Amaya 1, Tanza, Cavite</dd>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon />
                  <dd className="text-fb-ink">
                    Mon&ndash;Sat 6AM&ndash;8PM
                    <span className="block text-fb-slate">Sunday: Closed</span>
                  </dd>
                </div>
                <div className="flex items-start gap-3">
                  <MailIcon />
                  <dd className="text-fb-ink">dsprints27@gmail.com</dd>
                </div>
              </dl>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-fb-mist py-2.5 text-center">
                  <p className="font-display font-extrabold text-fb-ink">7</p>
                  <p className="text-[11px] text-fb-slate font-semibold">Services</p>
                </div>
                <div className="rounded-xl bg-fb-mist py-2.5 text-center">
                  <p className="font-display font-extrabold text-fb-ink">Same-Day</p>
                  <p className="text-[11px] text-fb-slate font-semibold">Rush Service</p>
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 rounded-full bg-fb-blue/10 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <span className="flex text-fb-amber" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </span>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-fb-blue shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-fb-blue shrink-0 mt-0.5">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-fb-blue shrink-0 mt-0.5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
