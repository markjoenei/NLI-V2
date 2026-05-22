"use client";

import { useRef } from "react";
import Image from "next/image";

type Review = {
  image: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  result?: { value: string; label: string };
};

const reviews: Review[] = [
  {
    image: "/generated/pro1.jpg",
    rating: 5,
    quote:
      "Next Layer transformed our entire operations stack — what used to take a team of twelve now runs autonomously, overnight, with better outcomes.",
    name: "Priya Anand",
    role: "Head of Operations",
    company: "Atlas Group",
    result: { value: "−87%", label: "time saved" },
  },
  {
    image: "/generated/pro2.jpg",
    rating: 5,
    quote:
      "Enterprise-ready from day one. Their AI infrastructure handled our global scale without missing a beat — truly impressive engineering.",
    name: "David Chen",
    role: "VP Communications",
    company: "Halberd",
    result: { value: "$2.4M", label: "annual saving" },
  },
  {
    image: "/generated/pro3.jpg",
    rating: 5,
    quote:
      "What used to take 4 hours now takes 30 minutes. The ROI was immediate, and team adoption was the smoothest rollout we've ever seen.",
    name: "Helena Ostrowski",
    role: "Chief Data Officer",
    company: "Norwell",
    result: { value: "8×", label: "productivity" },
  },
  {
    image: "/generated/pro4.jpg",
    rating: 5,
    quote:
      "Capability, ease of use, and white-glove support — unmatched in the AI space today. We evaluated everyone. This was the obvious pick.",
    name: "Tomás Reyes",
    role: "VP Strategy",
    company: "Voltic",
    result: { value: "94%", label: "lead-fit score" },
  },
  {
    image: "/generated/pro5.jpg",
    rating: 5,
    quote:
      "Their predictive analytics caught a $1.2M revenue leak in week one. The platform paid for itself before we finished onboarding.",
    name: "Marcus Lindberg",
    role: "CFO",
    company: "Riverstone",
    result: { value: "$1.2M", label: "recovered" },
  },
];

export default function Fortune100() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article") as HTMLElement | null;
    const cardWidth = card?.clientWidth ?? 460;
    const gap = 24;
    el.scrollBy({
      left: (cardWidth + gap) * (dir === "next" ? 1 : -1),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#5a5a6a] mb-5">
            Client reviews
          </p>
          <h2 className="display-text text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-semibold text-[#08080d] tracking-tight leading-[1.05]">
            <span className="block whitespace-nowrap">Enterprise-Grade from Day One.</span>
            <span className="editorial text-[#989898] block whitespace-nowrap">Not After You&apos;ve Outgrown Us.</span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] text-[#5a5a6a] max-w-[52ch] mx-auto text-pretty">
            See how teams are putting Next Layer Intelligence to work — in their own words.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled />
              ))}
            </div>
            <span className="text-[14px] font-semibold text-[#08080d]">4.9 average rating</span>
            <span className="hidden sm:inline text-[13px] text-[#5a5a6a]">·</span>
            <span className="hidden sm:inline text-[13px] text-[#5a5a6a]">2,000+ reviews</span>
          </div>
        </div>
      </div>

      <div className="relative mt-14 md:mt-20">
        <button
          onClick={() => scroll("prev")}
          className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(8,8,13,0.18),0_2px_4px_-1px_rgba(8,8,13,0.08)] ring-1 ring-black/[0.06] items-center justify-center text-[#08080d] hover:-translate-x-0.5 transition-all"
          aria-label="Previous review"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-5 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-5 md:px-[max(2rem,calc((100vw-1800px)/2+2rem))] pb-6 scroll-smooth"
        >
          {reviews.map((r) => (
            <article
              key={r.name}
              className="group snap-center flex-shrink-0 w-[88vw] sm:w-[60vw] md:w-[440px] lg:w-[460px] relative rounded-3xl overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_24px_64px_-20px_rgba(20,18,80,0.2),0_4px_12px_-4px_rgba(20,18,80,0.06)] flex flex-col card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 88vw, 480px"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,8,13,0) 50%, rgba(8,8,13,0.55) 100%)",
                  }}
                />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-2.5 py-1 ring-1 ring-black/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#08080d]">{r.company}</span>
                </div>

                {r.result && (
                  <div className="absolute top-4 right-4 rounded-xl bg-white/95 backdrop-blur ring-1 ring-black/[0.06] px-3 py-2 text-right shadow-[0_8px_20px_-8px_rgba(8,8,13,0.25)]">
                    <div className="text-[14px] font-semibold text-[#08080d] leading-none tabular-nums tracking-tight">{r.result.value}</div>
                    <div className="text-[8.5px] uppercase tracking-wider text-[#5a5a6a] font-semibold mt-1">{r.result.label}</div>
                  </div>
                )}
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < r.rating} />
                  ))}
                </div>

                <blockquote className="relative text-[16.5px] md:text-[17.5px] leading-[1.5] font-medium text-[#08080d] flex-1">
                  <span
                    aria-hidden
                    className="absolute -top-3 -left-1 text-[44px] leading-none text-[#5b4ef7]/25 select-none"
                    style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
                  >
                    &ldquo;
                  </span>
                  <span className="relative">{r.quote}</span>
                </blockquote>

                <div className="mt-6 pt-5 border-t border-black/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[14px] font-semibold text-[#08080d] tracking-tight">{r.name}</div>
                    <div className="text-[12.5px] text-[#5a5a6a]">
                      {r.role} · {r.company}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5b4ef7]">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M7 0.5L8.94 4.51L13.36 5.15L10.18 8.25L10.93 12.65L7 10.57L3.07 12.65L3.82 8.25L0.64 5.15L5.06 4.51L7 0.5Z" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => scroll("next")}
          className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(8,8,13,0.18),0_2px_4px_-1px_rgba(8,8,13,0.08)] ring-1 ring-black/[0.06] items-center justify-center text-[#08080d] hover:translate-x-0.5 transition-all"
          aria-label="Next review"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent"
        />
      </div>

      <div className="container-x mt-10 md:hidden flex items-center justify-center gap-3">
        <button
          onClick={() => scroll("prev")}
          className="h-11 w-11 rounded-full bg-white shadow-card ring-1 ring-black/[0.06] flex items-center justify-center text-[#08080d]"
          aria-label="Previous review"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scroll("next")}
          className="h-11 w-11 rounded-full bg-white shadow-card ring-1 ring-black/[0.06] flex items-center justify-center text-[#08080d]"
          aria-label="Next review"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function Star({ filled = false }: { filled?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill={filled ? "#f5b86d" : "none"}
      stroke={filled ? "#f5b86d" : "#d4d4dc"}
      strokeWidth="1"
      aria-hidden="true"
    >
      <path
        d="M7 0.5L8.94 4.51L13.36 5.15L10.18 8.25L10.93 12.65L7 10.57L3.07 12.65L3.82 8.25L0.64 5.15L5.06 4.51L7 0.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
