"use client";

import { useState } from "react";

type StackId =
  | "generative"
  | "automation"
  | "predictive"
  | "agents"
  | "revenue"
  | "executive";

type Stack = {
  id: StackId;
  title: string;
  tagline: string;
  body: string;
  bullets: string[];
};

const STACKS: Stack[] = [
  {
    id: "generative",
    title: "Generative Intelligence",
    tagline: "Your words, your voice — at scale.",
    body: "AI content systems trained on your brand, so everything your team produces sounds like you — without the rework.",
    bullets: [
      "Custom LLM integration built on your data",
      "AI content engines that write in your brand voice",
      "Generation built into your existing tools — not alongside them",
    ],
  },
  {
    id: "automation",
    title: "Operational Automation",
    tagline: "Stop paying people to do what machines do better.",
    body: "We map the work that slows your team down and automate it — with systems that handle exceptions, escalate correctly, and improve over time.",
    bullets: [
      "End-to-end process automation",
      "Smart exception handling and escalation",
      "24/7 operations with zero handoff errors",
    ],
  },
  {
    id: "predictive",
    title: "Predictive Intelligence",
    tagline: "Your data already knows what's coming. We help you hear it.",
    body: "We surface demand shifts, revenue risk, and bottlenecks in real time — before they cost you.",
    bullets: [
      "Demand and revenue forecasting",
      "Real-time anomaly detection and risk signals",
      "Decisions you can act on — not just reports to read",
    ],
  },
  {
    id: "agents",
    title: "Vertical AI Agents",
    tagline: "Not chatbots. Agents that actually get things done.",
    body: "Our agents complete the task end to end — and only escalate when a situation genuinely requires a person.",
    bullets: [
      "Customer-facing agents that engage, resolve, and convert",
      "Operations agents that process, route, and complete",
      "Purpose-built for your industry — not repurposed generic models",
    ],
  },
  {
    id: "revenue",
    title: "Revenue Intelligence",
    tagline: "Find out where your revenue is leaking — before next quarter.",
    body: "We detect where deals and dollars are slipping away — and fix it automatically, before the damage compounds.",
    bullets: [
      "Revenue leak detection and root cause analysis",
      "Conversion and pipeline optimization",
      "Autonomous outreach and follow-up sequences",
    ],
  },
  {
    id: "executive",
    title: "Executive AI Strategy",
    tagline: "A roadmap you can actually execute — not another deck to file away.",
    body: "We work directly with leadership to find where AI creates real leverage — then build it, with clear milestones and measurable results.",
    bullets: [
      "AI opportunity assessment with ROI mapping",
      "An actionable executive roadmap — not a theoretical one",
      "Board-ready reporting at every milestone",
    ],
  },
];

export default function IntelligenceStack() {
  const [activeId, setActiveId] = useState<StackId>("generative");
  const active = STACKS.find((s) => s.id === activeId)!;

  return (
    <div className="mt-10 md:mt-14 w-full max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-16 lg:gap-24 items-start">
      {/* Preview panel */}
      <div className="relative aspect-[5/4] rounded-2xl bg-[#989898] overflow-hidden ring-1 ring-black/[0.08]">
        <DecorativeBg />
        <div className="relative h-full w-full flex items-center justify-center p-5 sm:p-7 md:p-9">
          <Preview kind={activeId} />
        </div>
      </div>

      {/* Accordion */}
      <ul className="w-full">
        {STACKS.map((s, i) => {
          const isActive = s.id === activeId;
          return (
            <li
              key={s.id}
              className={`border-t border-black/10 ${i === STACKS.length - 1 ? "border-b" : ""}`}
            >
              <button
                onClick={() => setActiveId(s.id)}
                aria-expanded={isActive}
                className="w-full text-left py-4 md:py-5 flex items-center justify-between gap-4"
              >
                <span className="text-[17px] md:text-[19px] font-medium text-[#0a0a14] tracking-tight">
                  {s.title}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 inline-flex h-5 w-5 items-center justify-center transition-transform ${
                    isActive ? "rotate-180 text-[#0a0a14]" : "text-[#0a0a14]/40"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isActive ? "grid-rows-[1fr] opacity-100 pb-5 md:pb-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {isActive && (
                    <>
                      <p className="text-[13.5px] md:text-[14.5px] leading-[1.55] text-[#3a3a4a]">
                        {s.body}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[13px] md:text-[13.5px] leading-snug text-[#2a2a35]"
                          >
                            <CheckIcon />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#"
                        className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0a0a14] hover:underline"
                      >
                        Learn more
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="mt-[3px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ring-1 ring-[#0a0a14]/30">
      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
        <path d="M2 5L4.2 7L8 3" stroke="#0a0a14" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ───────────────────────────── PREVIEW BG ───────────────────────────── */

function DecorativeBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.35]"
      aria-hidden="true"
      viewBox="0 0 600 480"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="diag" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="22" stroke="#ffffff" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill="url(#diag)" />
      <path d="M40 30 L 560 30 L 560 450 L 40 450 Z" fill="none" stroke="#ffffff" strokeWidth="0.5" />
    </svg>
  );
}

/* ───────────────────────────── PREVIEWS ───────────────────────────── */

function Preview({ kind }: { kind: StackId }) {
  switch (kind) {
    case "generative":
      return <GenerativePreview />;
    case "automation":
      return <AutomationPreview />;
    case "predictive":
      return <PredictivePreview />;
    case "agents":
      return <AgentsPreview />;
    case "revenue":
      return <RevenuePreview />;
    case "executive":
      return <ExecutivePreview />;
  }
}

function GenerativePreview() {
  return (
    <div className="w-full max-w-[400px] flex flex-col items-center gap-3">
      <div className="w-full bg-white rounded-xl shadow-[0_6px_20px_-8px_rgba(20,18,40,0.18)] p-3.5">
        <div className="flex items-start gap-2.5">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#7b6aff] to-[#5b4ef7] flex items-center justify-center text-[10px] font-semibold text-white shrink-0">
            A
          </div>
          <p className="text-[12px] text-[#0a0a14] leading-snug">
            Draft a concise product description for our new energy management platform. Here are the details:
          </p>
        </div>
        <div className="mt-2.5 inline-flex items-center gap-2 rounded-md bg-[#f4f4f8] ring-1 ring-black/[0.06] px-2.5 py-1.5">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M2 1.5C2 1 2.4 0.5 3 0.5H7L10 3.5V12.5C10 13 9.6 13.5 9 13.5H3C2.4 13.5 2 13 2 12.5V1.5Z" stroke="#5a5a6a" strokeWidth="1" fill="white" />
            <path d="M7 0.5V3.5H10" stroke="#5a5a6a" strokeWidth="1" />
          </svg>
          <span className="text-[10px] font-medium text-[#3a3a4a]">E-MANAGE-PLATFORM_3.5</span>
          <span className="text-[9px] text-[#8a8a95]">PDF · 122 KB</span>
        </div>
      </div>

      <button
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-white text-[11.5px] font-semibold shadow-[0_4px_12px_-4px_rgba(220,80,40,0.5)]"
        style={{ background: "linear-gradient(180deg, #ef5b3c 0%, #d94a2b 100%)" }}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M6 1L7.4 4.6L11 6L7.4 7.4L6 11L4.6 7.4L1 6L4.6 4.6L6 1Z" fill="white" />
        </svg>
        Generating…
      </button>

      <div className="w-full bg-white rounded-xl shadow-[0_6px_20px_-8px_rgba(20,18,40,0.18)] p-3.5">
        <div className="flex items-start gap-2.5">
          <div
            className="h-6 w-6 rounded-md flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(180deg, #ef5b3c 0%, #d94a2b 100%)" }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <rect x="1.5" y="1.5" width="3.5" height="3.5" rx="0.5" fill="white" />
              <rect x="7" y="1.5" width="3.5" height="3.5" rx="0.5" fill="white" opacity="0.6" />
              <rect x="1.5" y="7" width="3.5" height="3.5" rx="0.5" fill="white" opacity="0.6" />
              <rect x="7" y="7" width="3.5" height="3.5" rx="0.5" fill="white" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] text-[#0a0a14] leading-snug">
              Certainly! Here&apos;s an initial draft of a product description for your energy management platform.
            </p>
            <p className="mt-2 text-[11.5px] font-semibold text-[#0a0a14] leading-snug">
              Introducing the ultimate solution for efficient energy management:
              <span className="font-normal text-[#3a3a4a]"> our cutting-edge platform empowers businesses and organizations to take control of their energy consumption with razor sharp accuracy and data-driven insights…</span>
            </p>
            <div className="mt-2 flex items-center justify-end gap-2 text-[#8a8a95]">
              <button aria-label="Copy">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
                  <path d="M2.5 7.5V2.5C2.5 2 3 1.5 3.5 1.5H7.5" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
              <button aria-label="Refresh">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 5.5C2.5 3.5 4 2 6 2C7.4 2 8.6 2.8 9.2 4M9.5 1.5V4H7M9.5 6.5C9.5 8.5 8 10 6 10C4.6 10 3.4 9.2 2.8 8M2.5 10.5V8H5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-xl shadow-[0_8px_24px_-10px_rgba(20,18,40,0.22)] p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#22c55e] pulse-soft" />
          <span className="text-[11px] font-semibold text-[#0a0a14]">Lead routing</span>
        </div>
        <span className="text-[10px] font-medium text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded">ACTIVE</span>
      </div>
      <div className="relative h-[170px]">
        <svg viewBox="0 0 280 170" className="absolute inset-0 w-full h-full" fill="none">
          <path d="M30 85 C 80 85, 110 85, 140 85" stroke="#d94a2b" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M140 85 C 180 85, 200 35, 250 35" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M140 85 C 180 85, 200 135, 250 135" stroke="#ec4899" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <Node label="Watch" sub="email" left="30px" top="85px" color="#3b82f6" />
        <Node label="Classify" sub="GPT-4o" left="140px" top="85px" color="#d94a2b" pulse />
        <Node label="Sales" sub="#hot-leads" left="250px" top="35px" color="#10b981" />
        <Node label="CRM" sub="Notion" left="250px" top="135px" color="#ec4899" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[
          { l: "Ops", v: "1,284" },
          { l: "Success", v: "99.4%" },
          { l: "Saved", v: "240h" },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-[#f4f4f8] px-2 py-1.5">
            <div className="text-[9px] uppercase tracking-wider text-[#5a5a6a] font-semibold">{s.l}</div>
            <div className="text-[12px] font-semibold text-[#0a0a14] mt-0.5 tabular-nums">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Node({
  label,
  sub,
  left,
  top,
  color,
  pulse = false,
}: {
  label: string;
  sub: string;
  left: string;
  top: string;
  color: string;
  pulse?: boolean;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{ left, top }}
    >
      <div
        className="relative h-8 w-8 rounded-full ring-2 ring-white shadow"
        style={{ background: color }}
      >
        {pulse && (
          <span className="absolute -inset-1 rounded-full ring-2 ring-[#d94a2b]/60 animate-pulse" />
        )}
      </div>
      <div className="mt-1 text-[9.5px] font-semibold text-[#0a0a14] leading-tight">{label}</div>
      <div className="text-[8.5px] text-[#5a5a6a] leading-tight">{sub}</div>
    </div>
  );
}

function PredictivePreview() {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-xl shadow-[0_8px_24px_-10px_rgba(20,18,40,0.22)] p-5">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#5a5a6a] font-semibold">Revenue forecast</div>
          <div className="text-[20px] font-semibold text-[#0a0a14] tracking-tight mt-1">
            $1.24M
            <span className="ml-2 text-[11px] text-[#15803d] font-semibold">+18.4%</span>
          </div>
        </div>
        <span className="text-[10px] font-semibold bg-[#0a0a14] text-white px-2 py-0.5 rounded">30d</span>
      </div>
      <svg viewBox="0 0 280 110" className="w-full h-[110px]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pred-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#5b4ef7" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#5b4ef7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 75 C 30 70, 50 84, 80 60 C 110 38, 140 50, 160 32 L 160 110 L 0 110 Z" fill="url(#pred-fill)" />
        <path d="M0 75 C 30 70, 50 84, 80 60 C 110 38, 140 50, 160 32" stroke="#5b4ef7" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M160 32 C 190 22, 220 36, 250 14 C 265 6, 275 8, 280 5" stroke="#5b4ef7" strokeWidth="2" strokeDasharray="3 3" fill="none" strokeLinecap="round" opacity="0.55" />
        <circle cx="160" cy="32" r="4" fill="#5b4ef7" />
        <circle cx="160" cy="32" r="9" fill="#5b4ef7" opacity="0.15" />
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
        {[
          { l: "Churn", v: "3.2%", up: false },
          { l: "LTV", v: "$8.4k", up: true },
          { l: "Conv.", v: "24.6%", up: true },
        ].map((k) => (
          <div key={k.l} className="rounded-md bg-[#f4f4f8] px-2 py-1.5">
            <div className="text-[9px] uppercase tracking-wider text-[#5a5a6a] font-semibold">{k.l}</div>
            <div className="text-[12px] font-semibold text-[#0a0a14] mt-0.5 tabular-nums">{k.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentsPreview() {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-xl shadow-[0_8px_24px_-10px_rgba(20,18,40,0.22)] p-4">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="h-7 w-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
          style={{ background: "linear-gradient(135deg, #6f63ff, #5b4ef7)" }}
        >
          A
        </div>
        <div className="min-w-0">
          <div className="text-[12px] font-semibold text-[#0a0a14] leading-tight">Aria · Sales Agent</div>
          <div className="text-[9.5px] text-[#5a5a6a] flex items-center gap-1 mt-0.5">
            <span className="h-1 w-1 rounded-full bg-[#22c55e]" /> Online · 142 conversations today
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        <Bubble side="left">Hi — I&apos;ve flagged 3 enterprise leads from yesterday matching your ICP.</Bubble>
        <Bubble side="right">Show me the top one</Bubble>
        <Bubble side="left">
          Acme Inc · 12k employees · Fintech ·{" "}
          <span className="font-semibold text-[#5b4ef7]">94% fit</span>
        </Bubble>
        <div className="flex items-center gap-1 pt-0.5">
          <span className="h-1 w-1 rounded-full bg-[#5a5a6a]/40 pulse-soft" />
          <span className="h-1 w-1 rounded-full bg-[#5a5a6a]/40 pulse-soft" style={{ animationDelay: "0.2s" }} />
          <span className="h-1 w-1 rounded-full bg-[#5a5a6a]/40 pulse-soft" style={{ animationDelay: "0.4s" }} />
          <span className="text-[9.5px] text-[#5a5a6a] ml-1">typing…</span>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[11px] leading-snug ${
          side === "right"
            ? "bg-[#5b4ef7] text-white rounded-tr-sm"
            : "bg-[#f4f4f8] text-[#0a0a14] rounded-tl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function RevenuePreview() {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-xl shadow-[0_8px_24px_-10px_rgba(20,18,40,0.22)] p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[11px] font-semibold text-[#0a0a14]">Revenue leak detection</div>
        <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-[#a16207] bg-[#fef3c7] px-2 py-0.5 rounded">
          <span className="h-1 w-1 rounded-full bg-[#f59e0b]" />
          3 flagged
        </span>
      </div>
      <div className="space-y-1.5">
        {[
          { stage: "Discovery → Demo", drop: "−18%", value: "$142k", risk: "high" },
          { stage: "Demo → Proposal", drop: "−6%", value: "$48k", risk: "med" },
          { stage: "Proposal → Close", drop: "−11%", value: "$96k", risk: "high" },
        ].map((r) => (
          <div key={r.stage} className="flex items-center gap-2 rounded-md bg-[#f7f7fb] px-2.5 py-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                r.risk === "high" ? "bg-[#dc2626]" : "bg-[#f59e0b]"
              }`}
            />
            <span className="text-[11px] font-medium text-[#0a0a14] flex-1 truncate">{r.stage}</span>
            <span className="text-[10px] text-[#dc2626] font-semibold tabular-nums">{r.drop}</span>
            <span className="text-[10.5px] font-semibold text-[#0a0a14] tabular-nums">{r.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-md bg-[#0a0a14] text-white px-3 py-2">
        <span className="text-[10.5px] font-medium">Estimated recovery</span>
        <span className="text-[13px] font-semibold tabular-nums">+$286k / quarter</span>
      </div>
    </div>
  );
}

function ExecutivePreview() {
  const phases = [
    { label: "Assess", note: "ROI mapping", done: true },
    { label: "Design", note: "Roadmap", done: true },
    { label: "Build", note: "Pilot live", active: true },
    { label: "Scale", note: "Q4", done: false },
  ];
  return (
    <div className="w-full max-w-[400px] bg-white rounded-xl shadow-[0_8px_24px_-10px_rgba(20,18,40,0.22)] p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-[11px] font-semibold text-[#0a0a14]">AI Strategy Roadmap</div>
          <div className="text-[9.5px] text-[#5a5a6a] mt-0.5">Q1 → Q4 · Acme Inc</div>
        </div>
        <span className="text-[10px] font-semibold bg-[#dcfce7] text-[#15803d] px-2 py-0.5 rounded">On track</span>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-[14px] h-[2px] bg-[#e5e5ed]" />
        <div
          className="absolute left-0 top-[14px] h-[2px] bg-[#5b4ef7]"
          style={{ width: "62%" }}
        />
        <div className="relative grid grid-cols-4 gap-2">
          {phases.map((p) => (
            <div key={p.label} className="flex flex-col items-center">
              <span
                className={`h-7 w-7 rounded-full flex items-center justify-center ring-2 ring-white shadow-sm ${
                  p.done
                    ? "bg-[#5b4ef7] text-white"
                    : p.active
                    ? "bg-white ring-[#5b4ef7]"
                    : "bg-[#e5e5ed]"
                }`}
              >
                {p.done ? (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M3 6.5L5 8.5L9 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : p.active ? (
                  <span className="h-2 w-2 rounded-full bg-[#5b4ef7]" />
                ) : null}
              </span>
              <div className="mt-2 text-[10.5px] font-semibold text-[#0a0a14] leading-tight">{p.label}</div>
              <div className="text-[9px] text-[#5a5a6a] leading-tight">{p.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { l: "Milestones", v: "12 / 16" },
          { l: "Pilots", v: "3 live" },
          { l: "ROI", v: "4.2x" },
        ].map((m) => (
          <div key={m.l} className="rounded-md bg-[#f4f4f8] px-2 py-1.5 text-center">
            <div className="text-[9px] uppercase tracking-wider text-[#5a5a6a] font-semibold">{m.l}</div>
            <div className="text-[12px] font-semibold text-[#0a0a14] mt-0.5 tabular-nums">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
