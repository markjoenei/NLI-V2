"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Is Next Layer Intelligence free?",
    a: "Yes — our free plan lets you create AI videos in 140+ languages with no credit card required. You can upgrade any time as your needs grow.",
  },
  {
    q: "Can I customize AI videos to add brand identity?",
    a: "Absolutely. Upload your fonts, colors, logos, and templates into the Brand Kit and every video will stay perfectly on-brand.",
  },
  {
    q: "Does AI video creation integrate with existing LMSs?",
    a: "Export your videos in SCORM and xAPI formats to plug into Cornerstone, Workday, Docebo, and any other modern LMS.",
  },
  {
    q: "How does AI video creation improve employee productivity?",
    a: "Teams replace recording, editing, and re-shoots with a single editor. Most customers cut production time by 70–90%.",
  },
  {
    q: "Is it safe for businesses to create AI videos in Next Layer Intelligence?",
    a: "We're SOC2, GDPR, and ISO 42001 certified. SSO, audit logs, and strict content moderation keep enterprise teams covered.",
  },
  {
    q: "What can you do with Next Layer Intelligence's AI video tool?",
    a: "Train employees, market products, drive sales enablement, localize content for global audiences — anything you'd hire a video team for.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 className="display-text text-[36px] sm:text-[44px] md:text-[56px] font-semibold text-[#08080d] max-w-[14ch] tracking-tight">
            You&apos;ve likely got{" "}
            <span className="editorial text-[#989898]">a few questions</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-[#5a5a6a] max-w-[36ch] leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Our team is one click away.
          </p>
          <Link
            href="#"
            className="reveal-on-hover mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#08080d]"
          >
            Talk to sales
            <span className="reveal-arrow inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#08080d] text-white">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`border-b border-black/[0.08] transition-colors ${
                  isOpen ? "" : "hover:border-black/15"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[16px] md:text-[18px] font-semibold leading-snug tracking-tight transition-colors ${
                      isOpen ? "text-[#08080d]" : "text-[#08080d] group-hover:text-[#5b4ef7]"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#5b4ef7] text-white rotate-180"
                        : "bg-[#f4f4f8] text-[#08080d] group-hover:bg-[#eeebff] group-hover:text-[#5b4ef7]"
                    }`}
                  >
                    {isOpen ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7H11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 3V11M3 7H11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-[15px] md:text-[16px] text-[#3a3a4a] max-w-[60ch] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
