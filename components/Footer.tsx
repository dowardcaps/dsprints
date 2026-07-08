import Image from "next/image";

const EXPLORE_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
];

export default function Footer() {
  return (
    <footer className="bg-fb-ink text-white/90">
      <div className="section-shell py-14 grid sm:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/assets/icon.png" alt="logo" height={70} width={70}/>
            <span className="font-display font-extrabold">
              DS Prints &amp; Supplies
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            Providing quality printing, design layouts, and essential school
            supplies. We make your digital needs a reality.
          </p>
          <p className="mt-4 text-sm italic text-fb-blue/80">
            &ldquo;Quality prints for every purpose.&rdquo;
          </p>
        </div>

        <div className="sm:justify-self-end">
          <h3 className="font-display font-bold text-sm">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="section-shell text-center text-xs text-white/50">
          &copy; 2026 DS Prints &amp; Supplies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
