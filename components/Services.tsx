type IconName =
  | "print"
  | "copy"
  | "layers"
  | "image"
  | "palette"
  | "phone"
  | "id";

const SERVICES: { title: string; desc: string; icon: IconName }[] = [
  {
    title: "Document Print",
    desc: "Reports, school projects, forms, and everyday printing needs, ready while you wait.",
    icon: "print",
  },
  {
    title: "Xerox & Scan",
    desc: "Clean, fast photocopies and digital scans for school, work, or government requirements.",
    icon: "copy",
  },
  {
    title: "Laminate",
    desc: "Protect IDs, certificates, and menus with durable lamination in various sizes.",
    icon: "layers",
  },
  {
    title: "Photo & Sticker",
    desc: "Photo prints, custom stickers, and nameplates &mdash; personalized just for you.",
    icon: "image",
  },
  {
    title: "Layout & Design",
    desc: "Tarpaulins, banners, invitations, and menus designed, printed, and delivered.",
    icon: "palette",
  },
  {
    title: "Load & GCash",
    desc: "Mobile load, GCash cash-in and cash-out &mdash; quick errands in one stop.",
    icon: "phone",
  },
  {
    title: "Rush ID Photos",
    desc: "Same-day ID photo packages in 1x1, 2x2, and passport size, print-ready in minutes.",
    icon: "id",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-fb-mist py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What We Offer"
          title="One stop para sa lahat ng prints"
          subtitle="Seven services under one roof &mdash; professional and quick, for personal or business needs."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-base p-6 hover:-translate-y-1 hover:shadow-pop transition-all duration-200"
            >
              <div className="h-11 w-11 rounded-xl bg-fb-blue/10 grid place-items-center text-fb-blue">
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-4 font-display font-bold text-fb-ink text-lg">
                {service.title}
              </h3>
              <p
                className="mt-1.5 text-sm text-fb-slate leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.desc }}
              />
            </div>
          ))}

          <a
            href="https://www.facebook.com/share/198kQvo639/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-dashed border-fb-blue/30 p-6 flex flex-col items-center justify-center text-center hover:bg-white hover:border-fb-blue transition-colors"
          >
            <p className="font-display font-bold text-fb-blue">Need something else?</p>
            <p className="mt-1 text-sm text-fb-slate">Message us on Facebook &mdash; mapapayagan din yan.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-fb-blue" />
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${
          light ? "text-white" : "text-fb-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed ${light ? "text-white/80" : "text-fb-slate"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  switch (name) {
    case "print":
      return (
        <svg {...props}>
          <path d="M6 9V3h12v6M6 18H4a1 1 0 01-1-1v-6a1 1 0 011-1h16a1 1 0 011 1v6a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6" y="14" width="12" height="7" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "copy":
      return (
        <svg {...props}>
          <rect x="8" y="8" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 16V5a1 1 0 011-1h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "image":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 18l5.5-5.5a2 2 0 012.8 0L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "palette":
      return (
        <svg {...props}>
          <path
            d="M12 3a9 8 0 100 16c1.1 0 2-.8 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 004-4c0-3.9-3.6-6-8-6z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="9.5" cy="7" r="1" fill="currentColor" />
          <circle cx="14.5" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path
            d="M6.5 3.5h2l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v2c0 1-.9 1.8-1.9 1.6-8-1.4-13.7-7-15-15C1.7 4.4 2.5 3.5 3.5 3.5h3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "id":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 16c.7-1.6 2-2.4 3-2.4s2.3.8 3 2.4M14 9.5h4M14 12.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
