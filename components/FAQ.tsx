"use client";

import { useState } from "react";
import Link from "next/link";

type Theme = "light" | "dark";

export type FAQItem = { q: string; a: string };

type FAQProps = {
  theme?: Theme;
  headingTop?: string;
  headingBottom?: string;
  items?: FAQItem[];
};

export default function FAQ({
  theme = "light",
  headingTop = "Vertical Agents That Execute.",
  headingBottom = "Not Advise. Not Suggest. Execute.",
  items,
}: FAQProps = {}) {
  const isDark = theme === "dark";
  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden ${isDark ? "text-white" : "bg-white"}`}
      style={
        isDark
          ? {
              background:
                "linear-gradient(180deg, #08080d 0%, #0e0a24 50%, #08080d 100%)",
            }
          : undefined
      }
    >
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[1100px] blur-3xl opacity-50 breathe"
          style={{
            background:
              "radial-gradient(closest-side, rgba(91,78,247,0.5), transparent 70%)",
          }}
        />
      )}
      <div className="relative container-x grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            className={`display-text text-[28px] sm:text-[36px] md:text-[44px] lg:text-[53px] font-semibold tracking-tight leading-[1.05] ${
              isDark ? "text-white" : "text-[#08080d]"
            }`}
          >
            <span className="block">{headingTop}</span>
            <span
              className={`editorial block ${
                isDark ? "text-white/55" : "text-[#989898]"
              }`}
            >
              {headingBottom}
            </span>
          </h2>
          <p
            className={`mt-5 text-[15px] md:text-[16px] max-w-[36ch] leading-relaxed ${
              isDark ? "text-white/70" : "text-[#5a5a6a]"
            }`}
          >
            The industry built a generation of AI tools that give you better information and then leave you to do something with it.
          </p>
          <Link
            href="#"
            className={`reveal-on-hover mt-7 inline-flex items-center gap-2 text-[14px] font-semibold ${
              isDark ? "text-white" : "text-[#08080d]"
            }`}
          >
            Explore Vertical Agents
            <span
              className={`reveal-arrow inline-flex h-7 w-7 items-center justify-center rounded-full ${
                isDark ? "bg-white text-[#08080d]" : "bg-[#08080d] text-white"
              }`}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          {items ? (
            <Accordion items={items} isDark={isDark} />
          ) : (
            <ExecuteCard />
          )}
        </div>
      </div>
    </section>
  );
}

function Accordion({ items, isDark }: { items: FAQItem[]; isDark: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`border-b transition-colors ${
              isDark
                ? "border-white/10 hover:border-white/20"
                : "border-black/[0.08] hover:border-black/15"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className={`text-[16px] md:text-[18px] font-semibold leading-snug tracking-tight transition-colors ${
                  isDark
                    ? isOpen
                      ? "text-white"
                      : "text-white group-hover:text-[#a5b4ff]"
                    : isOpen
                      ? "text-[#08080d]"
                      : "text-[#08080d] group-hover:text-[#5b4ef7]"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-[#5b4ef7] text-white rotate-180"
                    : isDark
                      ? "bg-white/[0.06] text-white ring-1 ring-white/10 group-hover:bg-white/[0.12] group-hover:text-[#a5b4ff]"
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
                <p
                  className={`pb-7 pr-10 text-[15px] md:text-[16px] max-w-[60ch] leading-relaxed ${
                    isDark ? "text-white/70" : "text-[#3a3a4a]"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const DARK_PANEL_BG =
  "linear-gradient(180deg, #08080d 0%, #100c2e 55%, #08080d 100%)";
const DARK_PANEL_CLASS =
  "group/card relative rounded-3xl p-7 md:p-9 ring-1 ring-white/[0.08] overflow-hidden text-white shadow-[0_30px_80px_-20px_rgba(8,8,30,0.45),0_12px_32px_-12px_rgba(91,78,247,0.3)] transition-all duration-500 hover:ring-white/[0.16] hover:-translate-y-1 hover:shadow-[0_40px_100px_-20px_rgba(91,78,247,0.5),0_16px_40px_-12px_rgba(91,78,247,0.45)]";

function ExecuteCard() {
  return (
    <div className="flex flex-col gap-5">
      {/* Card 1 — The gap */}
      <div className={DARK_PANEL_CLASS} style={{ background: DARK_PANEL_BG }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[280px] w-[600px] blur-3xl opacity-45 breathe"
          style={{
            background:
              "radial-gradient(closest-side, rgba(91,78,247,0.45), transparent 70%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 right-7 font-semibold text-[110px] leading-none tracking-tighter select-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(165,180,255,0.18) 0%, rgba(165,180,255,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          01
        </span>
        <div className="relative flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.08] ring-1 ring-white/15 text-[#a5b4ff]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="1.5" fill="currentColor" />
              <path d="M8 2v2M8 12v2M2 8h2M12 8h2M3.6 3.6l1.4 1.4M11 11l1.4 1.4M3.6 12.4L5 11M11 5l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/65">
            The reality
          </p>
        </div>
        <h3 className="relative mt-5 text-[24px] md:text-[28px] font-semibold tracking-tight leading-[1.2] text-white text-balance">
          The gap between where your business is and where AI can take it.
        </h3>
        <p className="relative mt-4 text-[15px] md:text-[16px] leading-[1.65] text-white/75">
          Every leadership team can name the outcomes they want. Few can name the path. The distance between ambition and adoption is the single biggest reason AI investments stall.
        </p>
        <div className="relative mt-6 grid grid-cols-3 items-center gap-3">
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-[0.12em] font-bold text-white/55">Where you are</div>
          </div>
          <div className="flex items-center justify-center" aria-hidden>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] ring-1 ring-white/12 text-[10px] font-mono font-semibold text-white/75 tracking-tight">
              the gap
            </span>
          </div>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-[0.12em] font-bold text-[#a5b4ff]">Where AI takes you</div>
          </div>
          <div
            className="col-span-3 h-px"
            aria-hidden
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 35%, rgba(255,255,255,0.05) 65%, rgba(165,180,255,0.45) 100%)",
            }}
          />
        </div>
      </div>

      {/* Card 2 — The misdiagnosis */}
      <div className={DARK_PANEL_CLASS} style={{ background: DARK_PANEL_BG }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,125,107,0.4), transparent 70%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 right-7 font-semibold text-[110px] leading-none tracking-tighter select-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,181,154,0.2) 0%, rgba(255,181,154,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          02
        </span>
        <div className="relative flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff7d6b]/15 ring-1 ring-[#ff7d6b]/30 text-[#ffb59a]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5L14.5 13.5h-13L8 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M8 6v3M8 11v0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffb59a]">
            The misdiagnosis
          </p>
        </div>
        <h3 className="relative mt-5 text-[24px] md:text-[28px] font-semibold tracking-tight leading-[1.2] text-white text-balance">
          It isn&apos;t a technology problem.
        </h3>
        <p className="relative mt-4 text-[15px] md:text-[16px] leading-[1.65] text-white/75">
          The models exist. The compute exists. The data exists. Buying another platform won&apos;t close the gap — it just adds another tool sitting next to the last one.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-2">
          {["Models", "Compute", "Data", "Platforms"].map((t) => (
            <span
              key={t}
              className="relative inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] ring-1 ring-white/10 px-2.5 py-1.5 text-[12px] font-semibold text-white/75"
            >
              <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff7d6b]/20 text-[#ffb59a]">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card 3 — What we do */}
      <div className={DARK_PANEL_CLASS} style={{ background: DARK_PANEL_BG }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(91,78,247,0.5), transparent 70%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 right-7 font-semibold text-[110px] leading-none tracking-tighter select-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(165,180,255,0.3) 0%, rgba(165,180,255,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          03
        </span>
        <div className="relative flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#5b4ef7]/25 ring-1 ring-[#a5b4ff]/40 text-[#a5b4ff]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#a5b4ff]">
            What we do
          </p>
        </div>
        <h3 className="relative mt-5 text-[24px] md:text-[28px] font-semibold tracking-tight leading-[1.2] text-white text-balance">
          It&apos;s a deployment problem.{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #a5b4ff 0%, #c4b5fd 60%, #fdba74 100%)",
            }}
          >
            We solve it.
          </span>
        </h3>
        <p className="relative mt-4 text-[15px] md:text-[16px] leading-[1.65] text-white/75">
          We don&apos;t hand you a tool and walk away. We engineer the intelligence layer into your stack, train it on your operation, and stay accountable to the outcomes you measure.
        </p>
        <div className="relative mt-6 grid grid-cols-3 gap-2">
          {[
            { label: "Engineer", detail: "into your stack" },
            { label: "Train", detail: "on your data" },
            { label: "Operate", detail: "accountable to KPIs" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 px-3 py-2.5"
            >
              <div className="text-[9.5px] uppercase tracking-[0.16em] font-bold text-[#a5b4ff]">
                Step {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1.5 text-[13.5px] font-semibold text-white tracking-tight">
                {s.label}
              </div>
              <div className="mt-0.5 text-[10.5px] text-white/55 leading-snug">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
