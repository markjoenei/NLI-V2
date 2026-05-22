"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navItems = ["Solutions", "Industries", "Insights", "Company"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_0_rgba(8,8,13,0.02),0_8px_24px_-12px_rgba(8,8,13,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" aria-label="Next Layer Intelligence home" className="flex-shrink-0">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                className="group flex items-center gap-1 px-3 py-2 rounded-full text-[14px] font-medium text-[#1a1a2a] hover:bg-black/[0.04] transition-colors"
              >
                {item}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  className="opacity-50 transition-transform group-hover:rotate-180"
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="#" className="btn-dark h-9 px-4 text-[13px]">
            Book a Strategy Call
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur-md ring-1 ring-black/[0.06] text-[#08080d]"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <path d="M3 7H19M3 15H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-xl">
          <nav className="container-x py-3 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                className="flex items-center justify-between py-4 text-[16px] font-medium text-[#08080d] border-b border-black/[0.05]"
              >
                {item}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-5 pb-3">
              <Link href="#" className="btn-dark h-11 px-5 text-[14px]">
                Book a Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
