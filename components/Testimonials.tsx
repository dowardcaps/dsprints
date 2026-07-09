import { SectionHeading } from "./Services";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What our customers are saying"
          subtitle="Real feedback from our Facebook Page &mdash; DS Prints and Supplies."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Review 1 */}
          <div className="card-base p-6">
            <div className="flex items-center gap-3">
              <Avatar initials="HM" />
              <div>
                <p className="font-semibold text-fb-ink text-sm">
                  Handugan Michael
                </p>
                <p className="text-xs text-fb-slate">
                  recommends DS Prints and Supplies
                </p>
              </div>
            </div>
            <Stars className="mt-3" />
            <p className="mt-3 text-fb-ink text-[15px] leading-relaxed">
              &ldquo;Good service and affordable.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-2 text-fb-slate">
              <HeartIcon />
              <span className="text-xs">Liked on Facebook</span>
            </div>
          </div>

          {/* Review 2, with page reply */}
          <div className="card-base p-6">
            <div className="flex items-center gap-3">
              <Avatar initials="AP" />
              <div>
                <p className="font-semibold text-fb-ink text-sm">Arnie Pardo</p>
                <p className="text-xs text-fb-slate">5 weeks ago</p>
              </div>
            </div>
            <p className="mt-3 text-fb-ink text-[15px] leading-relaxed">
              &ldquo;Salamat sa DS, maayos ang serbisyo&hellip; more customers
              sa DS!&rdquo;
            </p>

            <div className="mt-4 pl-4 border-l-2 border-fb-line">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center h-7 w-7 rounded-full bg-fb-blue text-white text-[10px] font-bold shrink-0">
                  DS
                </span>
                <p className="text-sm font-semibold text-fb-ink">
                  DS Prints and Supplies
                </p>
              </div>
              <p className="mt-1.5 text-sm text-fb-slate leading-relaxed">
                &ldquo;Arnie Pardo, thank you so much sir! God bless po.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.facebook.com/share/198kQvo639/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-fb-line px-6 py-3 text-sm font-bold text-fb-blue hover:bg-fb-mist transition-colors"
          >
            See more reviews on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-fb-blue/10 text-fb-blue font-display font-bold text-sm">
      {initials}
    </span>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex text-fb-amber ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </span>
  );
}

function HeartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-6.7-4.3-9.3-8.2C1 10.2 1.7 6.7 4.7 5.2 7 4 9.6 4.7 12 7.3 14.4 4.7 17 4 19.3 5.2c3 1.5 3.7 5 2 7.6C18.7 16.7 12 21 12 21z" />
    </svg>
  );
}
