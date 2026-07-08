"use client";

import { useEffect, useState } from "react";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-card bg-white/95 backdrop-blur" : "bg-white/80 backdrop-blur"
      } border-b border-fb-line`}
    >
      <div className="section-shell flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-fb-blue text-white font-display font-extrabold text-sm">
            DS
          </span>
          <span className="font-display font-extrabold text-fb-ink text-[15px] sm:text-base leading-tight">
            DS Prints <span className="text-fb-blue">&amp; Supplies</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-fb-slate hover:text-fb-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-fb-blue text-white text-sm font-bold px-4 py-2 shadow-pop hover:bg-fb-bluedark transition-colors"
          >
            Message Us
          </a>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-fb-line text-fb-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-fb-blue"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-fb-line bg-white">
          <div className="section-shell py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-fb-slate hover:text-fb-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-fb-blue text-white text-sm font-bold px-4 py-2.5"
            >
              Message Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
