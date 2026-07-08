"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { SectionHeading } from "./Services";

type WorkItem = {
  src: string;
  label: string;
  caption: string;
};

const WORK_ITEMS: WorkItem[] = [
  {
    src: "/assets/tarpaulin-signage.jpg",
    label: "Tarpaulin Signage",
    caption: "Business banners designed, printed, and ready to hang the same day.",
  },
  {
    src: "/assets/fruit-shake-menu.jpg",
    label: "Menu & Signage Design",
    caption: "Full color menu boards, laminated for daily use at food stalls.",
  },
  {
    src: "/assets/nameplates-notebook-labels.jpg",
    label: "Nameplates & Labels",
    caption: "Custom nameplates with ID lace and notebook sticker labels for school.",
  },
  {
    src: "/assets/instax-photo-prints.jpg",
    label: "Instax-Inspired Prints",
    caption: "Photo prints with the classic instant-camera border, various sizes.",
  },
  {
    src: "/assets/invitation-design.jpg",
    label: "Event Invitation Design",
    caption: "Layout, print, and finishing for formal event invitations and programs.",
  },
    {
    src: "/assets/rushid.jpg",
    label: "Rush ID Package",
    caption: "2by2, 1by1, and passport size IDs, printed in photo paper with a highest possible quality.",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + WORK_ITEMS.length) % WORK_ITEMS.length
      ),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % WORK_ITEMS.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="work" className="bg-fb-mist py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="From Our Print Counter"
          title="A peek at recent projects"
          subtitle="A sample of the layout, print, and lamination jobs we've completed for the community. Tap any photo for a closer look."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORK_ITEMS.map((item, index) => (
            <WorkCard
              key={item.src}
              {...item}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          item={WORK_ITEMS[activeIndex]}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}

function WorkCard({
  src,
  label,
  caption,
  onClick,
}: WorkItem & { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left card-base overflow-hidden hover:-translate-y-1 hover:shadow-pop transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fb-blue"
    >
      <div className="relative h-56 bg-fb-ink/5 overflow-hidden">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-fb-ink/0 group-hover:bg-fb-ink/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-white/90 p-2.5 shadow-card">
            <ZoomIcon />
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-fb-ink text-[15px]">{label}</h3>
        <p className="mt-1 text-xs text-fb-slate leading-relaxed">{caption}</p>
      </div>
    </button>
  );
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: WorkItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      className="fixed inset-0 z-[100] bg-fb-ink/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 grid place-items-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <CloseIcon />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronIcon direction="right" />
      </button>

      <div
        className="relative w-full max-w-3xl max-h-[80vh] aspect-[4/5] sm:aspect-[3/4]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.label}
          fill
          sizes="(min-width: 640px) 700px, 92vw"
          className="object-contain rounded-lg"
          priority
        />
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display font-bold text-white text-base">{item.label}</p>
        <p className="mt-1 text-sm text-white/70 max-w-md">{item.caption}</p>
      </div>
    </div>
  );
}

function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-fb-ink">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  const d = direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
