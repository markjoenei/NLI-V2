"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Stat = { value: string; label: string };

type Signal = {
  time: string;
  dot: string;
  label: string;
  detail: string;
  delta: string;
  deltaColor: string;
};

type Industry = {
  name: string;
  headline: string;
  body: string;
  stats: Stat[];
  ctaLabel: string;
  signalsHeader: string;
  signals: Signal[];
  chartLabel: string;
  chartSub: string;
  chartBars: number[];
};

const industries: Industry[] = [
  {
    name: "Retail",
    headline:
      "Your shelf data knows more than your buyers do. We make sure you can hear it.",
    body: "Every item, every location, every customer signal — your retail operation is generating more intelligence than any team can process manually. We build the layer that reads it all in real time and acts before a markdown, a stockout, or a missed upsell costs you another quarter.",
    stats: [
      { value: "50%", label: "reduction in operational overhead" },
      { value: "4%", label: "increase in inventory throughput" },
      { value: "200%", label: "improvement in demand response time" },
    ],
    ctaLabel: "See the Retail Intelligence Layer",
    signalsHeader: "Live shelf signals",
    signals: [
      {
        time: "10:24",
        dot: "#ff492c",
        label: "SKU 4521",
        detail: "markdown trigger · Aisle 3",
        delta: "−12%",
        deltaColor: "#ff492c",
      },
      {
        time: "10:21",
        dot: "#f5b86d",
        label: "Store 12",
        detail: "low stock · 2 SKUs",
        delta: "restock",
        deltaColor: "#a06414",
      },
      {
        time: "10:19",
        dot: "#22c55e",
        label: "Aisle 3",
        detail: "demand spike · weekend",
        delta: "+18%",
        deltaColor: "#0f6e3a",
      },
    ],
    chartLabel: "Sell-through by aisle",
    chartSub: "8 aisles · last 24h",
    chartBars: [38, 62, 84, 52, 71, 28, 90, 45],
  },
  {
    name: "Industrial & Manufacturing",
    headline:
      "The machine that's about to fail is already telling you. You just can't listen yet.",
    body: "Every production line, every sensor, every maintenance log is a data stream. We build industrial intelligence systems that read those streams, predict failures before they happen, and keep your operation running — because downtime doesn't just cost you time. It costs you trust.",
    stats: [
      { value: "50%", label: "reduction in unplanned downtime" },
      { value: "4%", label: "increase in production throughput" },
      { value: "200%", label: "improvement in maintenance response speed" },
    ],
    ctaLabel: "See the Industrial Intelligence Layer",
    signalsHeader: "Live machine signals",
    signals: [
      {
        time: "10:24",
        dot: "#ff492c",
        label: "Asset 047",
        detail: "bearing wear · Line B",
        delta: "−0.3mm",
        deltaColor: "#ff492c",
      },
      {
        time: "10:22",
        dot: "#f5b86d",
        label: "Line 3",
        detail: "service window · 06:00",
        delta: "scheduled",
        deltaColor: "#a06414",
      },
      {
        time: "10:18",
        dot: "#22c55e",
        label: "Pump 12",
        detail: "temp normalized · OK",
        delta: "−2°C",
        deltaColor: "#0f6e3a",
      },
    ],
    chartLabel: "Uptime by line",
    chartSub: "8 lines · last 24h",
    chartBars: [88, 96, 74, 92, 81, 99, 68, 94],
  },
];

const INTERVAL_MS = 3000;

export default function Fortune100() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % industries.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: stacked industry cards that crossfade */}
          <div className="relative w-full max-w-[560px] mx-auto lg:mx-0">
            <div className="relative grid">
              {industries.map((industry, idx) => {
                const isActive = active === idx;
                return (
                  <div
                    key={industry.name}
                    aria-hidden={!isActive}
                    className="col-start-1 row-start-1 transition-opacity duration-700 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <IndustryCard industry={industry} />
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {industries.map((industry, idx) => (
                <button
                  key={industry.name}
                  onClick={() => setActive(idx)}
                  aria-label={`Show ${industry.name}`}
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: active === idx ? 28 : 8,
                    background:
                      active === idx ? "#5b4ef7" : "rgba(8,8,13,0.18)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: text content */}
          <div>
            <p className="eyebrow mb-5">Enterprise foundations</p>
            <h2 className="display-text text-[28px] sm:text-[36px] md:text-[44px] lg:text-[60px] font-semibold text-[#08080d] tracking-tight leading-[1.05]">
              <span className="block">The Intelligence Layer</span>
              <span className="editorial text-[#989898] block">for Your Industry.</span>
            </h2>
            <p className="mt-8 max-w-[560px] text-[15px] md:text-[16px] leading-[1.6] text-[#4a4a55] text-pretty">
              We don&apos;t treat security, scale, or governance as future roadmap items. CRM, ERP, cloud infrastructure, data warehouses — the intelligence layer plugs into what you already own, scales from ten automations to ten thousand, and ships with the controls your CISO expects on day one. Your team sees what&apos;s running. Your leadership sees what it&apos;s producing. No black boxes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div
      className="relative w-full rounded-3xl ring-1 ring-white/[0.08] shadow-[0_30px_80px_-20px_rgba(8,8,30,0.55),0_12px_32px_-12px_rgba(91,78,247,0.35)] p-7 md:p-9 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #08080d 0%, #100c2e 55%, #08080d 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] blur-3xl opacity-60 breathe"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,78,247,0.5), transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 h-[520px] w-[520px] opacity-[0.18] mix-blend-screen"
      >
        <Image
          src="/generated/industry-card-bg.png"
          alt=""
          fill
          className="object-contain object-right"
          sizes="520px"
        />
      </div>

      <div className="relative flex items-center justify-between gap-3">
        <div className="text-[24px] md:text-[30px] font-semibold text-white tracking-tight leading-tight text-balance">
          {industry.name}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/15 ring-1 ring-[#22c55e]/35 text-[#86efac] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] font-bold shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] pulse-soft" />
          Live
        </span>
      </div>

      <p className="relative mt-7 text-[19px] md:text-[21px] leading-[1.3] font-semibold text-white tracking-tight text-balance">
        {industry.headline}
      </p>
      <p className="relative mt-4 text-[14px] md:text-[15px] leading-[1.6] text-white/70 text-pretty">
        {industry.body}
      </p>

      <div className="relative mt-6 rounded-2xl bg-white/[0.05] ring-1 ring-white/[0.08] p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.18em] font-bold text-white/65">
            <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#5b4ef7]/25 text-[#a5b4ff]">
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                <path d="M1.5 6.5L4 4l2.5 2.5L10.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {industry.signalsHeader}
          </div>
          <span className="text-[9.5px] font-mono text-white/40">live · 24/7</span>
        </div>
        <ul className="space-y-1.5">
          {industry.signals.map((s) => (
            <li
              key={s.time + s.label}
              className="flex items-center gap-2.5 text-[11.5px] leading-tight text-white"
            >
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0 pulse-soft"
                style={{ background: s.dot }}
              />
              <span className="font-mono text-[10.5px] text-white/55 tabular-nums">{s.time}</span>
              <span className="font-semibold tracking-tight">{s.label}</span>
              <span className="text-white/55 truncate">{s.detail}</span>
              <span
                className="ml-auto font-semibold tabular-nums shrink-0 text-[10.5px]"
                style={{ color: s.deltaColor }}
              >
                {s.delta}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-end justify-between gap-3">
          <div>
            <div className="text-[9.5px] uppercase tracking-[0.18em] font-bold text-white/65">
              {industry.chartLabel}
            </div>
            <div className="mt-1 text-[10.5px] text-white/40">{industry.chartSub}</div>
          </div>
          <div className="flex items-end gap-[3px] h-7">
            {industry.chartBars.map((h, i) => {
              const peak = industry.chartBars.indexOf(Math.max(...industry.chartBars));
              return (
                <span
                  key={i}
                  className="w-[5px] rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === peak ? "#a5b4ff" : "rgba(165,180,255,0.32)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-7 grid grid-cols-3 gap-3 md:gap-4 border-t border-white/[0.1] pt-5">
        {industry.stats.map((s) => (
          <div key={s.label}>
            <div className="text-[32px] md:text-[40px] font-semibold text-white tracking-tight tabular-nums leading-none">
              {s.value}
            </div>
            <div className="mt-2 text-[10.5px] md:text-[11px] leading-[1.4] text-white/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className="reveal-on-hover relative mt-7 inline-flex items-center gap-2 text-[13.5px] font-semibold text-white"
      >
        {industry.ctaLabel}
        <span className="reveal-arrow inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5b4ef7] text-white">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
