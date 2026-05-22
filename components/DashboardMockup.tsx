"use client";

import { useState } from "react";

const TABS = [
  { id: "discovery", label: "Discovery" },
  { id: "runs", label: "Runs" },
  { id: "builds", label: "My builds" },
  { id: "monitor", label: "Monitor" },
] as const;
type TabId = (typeof TABS)[number]["id"];

type AppIcon = "folder" | "bolt" | "globe" | "palette" | "gmail" | "chrome" | "drive";

type Automation = {
  title: string;
  desc: string;
  author: string;
  icons: AppIcon[];
  extra?: number;
};

const AUTOMATIONS: Automation[] = [
  {
    title: "Revenue Scope",
    desc: "Contract ingestion pipeline designed for the Finance team",
    author: "Jerald A",
    icons: ["folder", "bolt"],
  },
  {
    title: "Meeting Summarizer",
    desc: "Take meeting notes, include deep dives on topics, and generate action items",
    author: "Kate S",
    icons: ["globe", "palette"],
    extra: 2,
  },
  {
    title: "Contract Analysis",
    desc: "Provide complex contract review",
    author: "Cindy Y",
    icons: ["gmail", "folder"],
  },
  {
    title: "Customer Overview",
    desc: "Get a quick holistic view of our current customers",
    author: "Derek M",
    icons: ["chrome", "drive", "globe"],
  },
  {
    title: "Pipeline Health",
    desc: "Daily snapshot of opportunity stage shifts and at-risk deals",
    author: "Priya R",
    icons: ["bolt", "globe"],
  },
  {
    title: "Support Triage",
    desc: "Auto-classify tickets, route to the right pod, and draft first replies",
    author: "Marcus T",
    icons: ["gmail", "palette"],
    extra: 1,
  },
];

export default function DashboardMockup() {
  const [active, setActive] = useState<TabId>("discovery");

  return (
    <div className="relative mx-auto w-full max-w-[1120px] zoom-out-in">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-20 -z-10 blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 50%, rgba(91,78,247,0.25), transparent 70%)",
        }}
      />

      <div className="relative rounded-[20px] bg-[#0c0c12] shadow-cinematic ring-1 ring-white/[0.06] overflow-hidden">
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 sm:gap-3 px-3 sm:px-3.5 h-10 sm:h-11 border-b border-white/[0.06]"
          style={{ background: "linear-gradient(180deg, #16161f 0%, #0e0e15 100%)" }}
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #ff8a85 0%, #ff5f57 100%)",
                boxShadow: "inset 0 -0.5px 0 rgba(0,0,0,0.25)",
              }}
            />
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #ffd95a 0%, #febc2e 100%)",
                boxShadow: "inset 0 -0.5px 0 rgba(0,0,0,0.25)",
              }}
            />
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #5bdf6c 0%, #28c840 100%)",
                boxShadow: "inset 0 -0.5px 0 rgba(0,0,0,0.25)",
              }}
            />
          </div>

          <div className="flex-1 flex justify-center min-w-0 px-1 sm:px-2">
            <div className="inline-flex items-center gap-1.5 h-5 sm:h-6 px-2 sm:px-3 rounded-md bg-white/[0.05] ring-1 ring-white/[0.06] text-[10px] sm:text-[11px] text-white/55 max-w-[400px] w-full justify-center">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="text-[#22c55e] shrink-0">
                <rect x="2.5" y="5.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
                <path d="M4 5.5V4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4V5.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <span className="text-white/75 font-medium truncate">app.nextlayer.ai</span>
              <span className="text-white/35 hidden sm:inline">/studio</span>
            </div>
          </div>

          <div className="w-10 shrink-0" />
        </div>

        <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] items-stretch">
          <Sidebar />
          <Main
            active={active}
            onChange={setActive}
          />
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── SIDEBAR ──────────────────────────── */

function Sidebar() {
  return (
    <aside className="bg-[#0a0a10] border-r border-white/[0.04] flex flex-col items-center py-3 sm:py-4 gap-1.5">
      <div className="h-7 w-7 rounded-md bg-white/[0.04] flex items-center justify-center mb-2">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-white/70">
          <path d="M2 3.5h10M2 7h10M2 10.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      <SidebarBtn>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M3 8L9 3L15 8V14C15 14.5 14.5 15 14 15H4C3.5 15 3 14.5 3 14V8Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M7 15V10H11V15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </SidebarBtn>

      <SidebarBtn>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M5 13C3.3 13 2 11.7 2 10C2 8.5 3 7.3 4.4 7C4.5 4.8 6.5 3 9 3C11.2 3 13 4.5 13.4 6.5C14.9 6.7 16 8 16 9.5C16 11.4 14.4 13 12.5 13H5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </SidebarBtn>

      <SidebarBtn active>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 2L10.6 6.4L15 8L10.6 9.6L9 14L7.4 9.6L3 8L7.4 6.4L9 2Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path d="M14 13L14.6 14.4L16 15L14.6 15.6L14 17L13.4 15.6L12 15L13.4 14.4L14 13Z" fill="currentColor" />
        </svg>
      </SidebarBtn>

      <SidebarBtn>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M2.5 5.5C2.5 4.7 3.2 4 4 4H7L8.5 5.8H14C14.8 5.8 15.5 6.5 15.5 7.3V13C15.5 13.8 14.8 14.5 14 14.5H4C3.2 14.5 2.5 13.8 2.5 13V5.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </SidebarBtn>

      <SidebarBtn>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M2.5 5.5C2.5 4.7 3.2 4 4 4H7L8.5 5.8H14C14.8 5.8 15.5 6.5 15.5 7.3V13C15.5 13.8 14.8 14.5 14 14.5H4C3.2 14.5 2.5 13.8 2.5 13V5.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </SidebarBtn>

      <div className="mt-auto flex flex-col items-center gap-1.5 pb-1">
        <AvatarChip label="A" />
        <AvatarChip label="N" />
        <AvatarChip label="P" />
      </div>
    </aside>
  );
}

function SidebarBtn({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      aria-label="Sidebar item"
      className={`relative h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center transition-colors ${
        active
          ? "bg-white text-[#0a0a10] shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_6px_18px_-6px_rgba(91,78,247,0.6)]"
          : "text-white/55 hover:text-white hover:bg-white/[0.05]"
      }`}
    >
      {children}
    </button>
  );
}

function AvatarChip({ label }: { label: string }) {
  return (
    <span className="h-7 w-7 rounded-full bg-white/[0.06] ring-1 ring-white/[0.08] flex items-center justify-center text-[10px] font-semibold text-white/65">
      {label}
    </span>
  );
}

/* ──────────────────────────── MAIN ──────────────────────────── */

function Main({ active, onChange }: { active: TabId; onChange: (id: TabId) => void }) {
  return (
    <div className="bg-[#0f0f17] p-4 sm:p-5 md:p-7">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2 sm:gap-3">
          <h2 className="text-[20px] sm:text-[26px] md:text-[30px] font-semibold text-white tracking-tight leading-none">
            Intelligence
          </h2>
        </div>
        <button
          className="inline-flex items-center gap-1.5 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-lg text-[11px] sm:text-[12px] font-medium text-white whitespace-nowrap"
          style={{
            background: "linear-gradient(180deg, #1f1f2c 0%, #16161f 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="hidden sm:inline">New automation</span>
          <span className="sm:hidden">New</span>
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="ml-0.5 text-white/55">
            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="text-[11px] sm:text-[12.5px] text-white/45 leading-relaxed max-w-[44ch]">
        Browse automations that streamline repetitive tasks and complex workflows with ease.
      </p>

      {/* Tabs */}
      <div className="mt-4 sm:mt-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto hide-scrollbar">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onChange(t.id)}
                className={`relative pb-2.5 text-[11px] sm:text-[12.5px] font-medium transition-colors whitespace-nowrap ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/70"
                }`}
              >
                {t.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-px h-[1.5px] bg-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search */}
      <div className="mt-3.5 sm:mt-4">
        <div className="inline-flex items-center gap-2 h-8 sm:h-9 w-full px-3 rounded-lg bg-white/[0.03] ring-1 ring-white/[0.06] text-[11px] sm:text-[12px] text-white/40">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <circle cx="6.2" cy="6.2" r="3.8" stroke="currentColor" strokeWidth="1.4" />
            <path d="M9 9L12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>Search by automation or creator name</span>
        </div>
      </div>

      {/* Content per tab */}
      <div className="mt-3.5 sm:mt-4">
        {active === "discovery" && <DiscoveryGrid />}
        {active === "runs" && <RunsList />}
        {active === "builds" && <DiscoveryGrid mine />}
        {active === "monitor" && <MonitorView />}
      </div>
    </div>
  );
}

/* ──────────────────────────── PANES ──────────────────────────── */

function DiscoveryGrid({ mine = false }: { mine?: boolean }) {
  const items = mine ? AUTOMATIONS.slice(0, 4) : AUTOMATIONS;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
      {items.map((a, i) => (
        <div key={a.title} className={i >= 3 ? "hidden sm:block" : ""}>
          <AutomationCard a={a} />
        </div>
      ))}
    </div>
  );
}

function AutomationCard({ a }: { a: Automation }) {
  return (
    <button
      className="group w-full text-left rounded-xl bg-white/[0.025] ring-1 ring-white/[0.06] p-3 sm:p-3.5 hover:bg-white/[0.04] hover:ring-white/[0.1] transition-colors"
    >
      <div className="flex items-center gap-1.5 mb-2.5">
        {a.icons.map((kind, i) => (
          <AppIconChip key={i} kind={kind} />
        ))}
        {a.extra ? (
          <span className="ml-0.5 text-[10px] text-white/45 font-medium">+{a.extra}</span>
        ) : null}
      </div>
      <div className="text-[12.5px] sm:text-[13.5px] font-semibold text-white leading-tight">
        {a.title}
      </div>
      <p className="mt-1 text-[10.5px] sm:text-[11.5px] text-white/50 leading-snug line-clamp-2">
        {a.desc}
      </p>
      <div className="mt-2.5 text-[10px] sm:text-[10.5px] text-white/35">By {a.author}</div>
    </button>
  );
}

function RunsList() {
  const rows = [
    { time: "12:48", name: "Revenue Scope · ingest run", ok: true },
    { time: "12:31", name: "Meeting Summarizer · standup", ok: true },
    { time: "11:09", name: "Contract Analysis · MSA review", ok: false },
    { time: "10:42", name: "Customer Overview · weekly digest", ok: true },
    { time: "09:15", name: "Revenue Scope · ingest run", ok: true },
  ];
  return (
    <div className="rounded-xl bg-white/[0.025] ring-1 ring-white/[0.06] divide-y divide-white/[0.05]">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-3 px-3 py-2.5 text-[11px]">
          <span
            className={`h-1.5 w-1.5 rounded-full ${r.ok ? "bg-[#22c55e]" : "bg-[#f59e0b]"}`}
          />
          <span className="text-white/40 tabular-nums w-10">{r.time}</span>
          <span className="text-white/85 flex-1 truncate">{r.name}</span>
          <span className={`text-[10px] font-semibold ${r.ok ? "text-[#4ade80]" : "text-[#fbbf24]"}`}>
            {r.ok ? "OK" : "RETRY"}
          </span>
        </div>
      ))}
    </div>
  );
}

function MonitorView() {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
      {[
        { label: "Active", value: "12", trend: "+2 today" },
        { label: "Success rate", value: "99.4%", trend: "+0.3%" },
        { label: "Avg. duration", value: "1.8s", trend: "−12%" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl bg-white/[0.025] ring-1 ring-white/[0.06] p-3">
          <div className="text-[9px] uppercase tracking-wider text-white/40 font-semibold">
            {s.label}
          </div>
          <div className="text-[16px] font-semibold text-white tracking-tight mt-1">
            {s.value}
          </div>
          <div className="text-[10px] text-[#4ade80] mt-0.5 font-medium">{s.trend}</div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────── ICONS ──────────────────────────── */

function AppIconChip({ kind }: { kind: AppIcon }) {
  const base =
    "inline-flex h-5 w-5 sm:h-[22px] sm:w-[22px] items-center justify-center rounded-full ring-1 ring-white/[0.08]";

  switch (kind) {
    case "folder":
      return (
        <span
          className={base}
          style={{ background: "linear-gradient(135deg, #3d3d4a 0%, #25252e 100%)" }}
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 4.5C2 4 2.4 3.5 3 3.5H5.5L6.6 4.6H11C11.6 4.6 12 5 12 5.6V10C12 10.6 11.6 11 11 11H3C2.4 11 2 10.6 2 10V4.5Z"
              stroke="#e5e5eb"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );
    case "bolt":
      return (
        <span
          className={base}
          style={{
            background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          <svg width="9" height="9" viewBox="0 0 10 10" fill="white">
            <path d="M6 0.5L1.5 5.6H4.2L3.5 9.5L8.5 4H6L6 0.5Z" />
          </svg>
        </span>
      );
    case "globe":
      return (
        <span
          className={base}
          style={{
            background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="4.6" stroke="white" strokeWidth="1.1" />
            <path
              d="M2.4 7h9.2M7 2.4c1.6 2 1.6 7.2 0 9.2M7 2.4c-1.6 2-1.6 7.2 0 9.2"
              stroke="white"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
        </span>
      );
    case "palette":
      return (
        <span
          className={`${base} relative overflow-hidden`}
          style={{
            background:
              "conic-gradient(from 0deg, #ef4444, #f59e0b, #facc15, #4ade80, #22d3ee, #6366f1, #a855f7, #ec4899, #ef4444)",
          }}
        >
          <span
            className="absolute inset-[3px] rounded-full"
            style={{ background: "#0f0f17" }}
          />
        </span>
      );
    case "gmail":
      return (
        <span
          className={base}
          style={{ background: "white" }}
        >
          <svg width="11" height="9" viewBox="0 0 14 11" fill="none">
            <path d="M1 1.5v8h2.5V5L7 7.4 10.5 5v4.5H13v-8L7 5.6 1 1.5Z" fill="#ea4335" />
          </svg>
        </span>
      );
    case "chrome":
      return (
        <span
          className={`${base} relative overflow-hidden`}
          style={{ background: "white" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" fill="#fff" />
            <path d="M7 1a6 6 0 0 1 5.2 3H7a3 3 0 0 0-2.6 1.5L1.9 4A6 6 0 0 1 7 1Z" fill="#ea4335" />
            <path d="M12.2 4A6 6 0 0 1 13 7a6 6 0 0 1-3 5.2L7.6 8a3 3 0 0 0 .4-1c0-1.1-.5-2-1.4-2.6L12.2 4Z" fill="#fbbc05" />
            <path d="M1.9 4l2.5 1.5A3 3 0 0 0 4 7a3 3 0 0 0 4.6 2.5L6.3 12.9a6 6 0 0 1-4.4-8.9Z" fill="#34a853" />
            <circle cx="7" cy="7" r="2.2" fill="#4285f4" stroke="#fff" strokeWidth="0.5" />
          </svg>
        </span>
      );
    case "drive":
      return (
        <span
          className={base}
          style={{ background: "white" }}
        >
          <svg width="11" height="10" viewBox="0 0 14 12" fill="none">
            <path d="M4.6 0.6h4.8l3.6 6.4H8.2L4.6 0.6Z" fill="#fbbc05" />
            <path d="M0.4 9l2.4-4.2 3.6 6.4H2.8L0.4 9Z" fill="#34a853" />
            <path d="M13 7L10.6 11.2H4.4L7 7h6Z" fill="#4285f4" />
          </svg>
        </span>
      );
  }
}

