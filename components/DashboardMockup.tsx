"use client";

import { useState } from "react";
import Image from "next/image";
import Placeholder from "./Placeholder";

const TABS = [
  { id: "generative", label: "Intelligence Layer" },
  { id: "automation", label: "AI Automation" },
  { id: "analytics", label: "People Layer" },
  { id: "assistants", label: "Data Layer" },
] as const;
type TabId = (typeof TABS)[number]["id"];

const ACTION_LABEL: Record<TabId, string> = {
  generative: "Generate",
  automation: "New workflow",
  analytics: "New report",
  assistants: "New agent",
};

export default function DashboardMockup() {
  const [active, setActive] = useState<TabId>("generative");

  return (
    <div className="relative mx-auto w-full max-w-[1120px]">
      <FloatingMetric
        className="hidden md:flex absolute -left-6 lg:-left-14 top-16 lg:top-24 z-30 float-slow"
        icon="globe"
        label="Languages"
        value="140+"
        trend="+12 this quarter"
      />
      <FloatingMetric
        className="hidden md:flex absolute -right-4 lg:-right-12 top-44 z-30 float-medium"
        icon="bolt"
        label="Avg. response"
        value="240ms"
        trend="−87% vs. baseline"
        accent
      />
      <FloatingMetric
        className="hidden lg:flex absolute -right-20 bottom-20 z-30 float-fast"
        icon="people"
        label="Active agents"
        value="200K+"
        trend="across Fortune 100"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -inset-20 -z-10 blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 50%, rgba(91,78,247,0.25), transparent 70%)",
        }}
      />

      <div className="relative rounded-[20px] bg-white shadow-cinematic ring-1 ring-black/[0.06] overflow-hidden">
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 sm:gap-3 px-3 sm:px-3.5 h-10 sm:h-11 border-b border-black/[0.06]"
          style={{ background: "linear-gradient(180deg, #f8f8fb 0%, #eeeef3 100%)" }}
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #ff8a85 0%, #ff5f57 100%)",
                boxShadow: "inset 0 -0.5px 0 rgba(0,0,0,0.18), 0 0.5px 0 rgba(255,255,255,0.4)",
              }}
            />
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #ffd95a 0%, #febc2e 100%)",
                boxShadow: "inset 0 -0.5px 0 rgba(0,0,0,0.18), 0 0.5px 0 rgba(255,255,255,0.4)",
              }}
            />
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #5bdf6c 0%, #28c840 100%)",
                boxShadow: "inset 0 -0.5px 0 rgba(0,0,0,0.18), 0 0.5px 0 rgba(255,255,255,0.4)",
              }}
            />
          </div>

          <div className="hidden sm:flex items-center gap-0.5 ml-1.5">
            <ChromeBtn>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ChromeBtn>
            <ChromeBtn dim>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ChromeBtn>
            <ChromeBtn>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.6 6.4C2.6 4 4.4 2.3 6.2 2.3C7.5 2.3 8.6 3 9.3 4M9.4 2V4.3H7.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.4 5.6C9.4 8 7.6 9.7 5.8 9.7C4.5 9.7 3.4 9 2.7 8M2.6 10V7.7H4.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ChromeBtn>
          </div>

          <div className="flex-1 flex justify-center min-w-0 px-1 sm:px-2">
            <div className="inline-flex items-center gap-1.5 h-5 sm:h-6 px-2 sm:px-3 rounded-md bg-white ring-1 ring-black/[0.06] text-[10px] sm:text-[11px] text-black/55 max-w-[400px] w-full justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="text-[#16a34a] shrink-0">
                <rect x="2.5" y="5.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
                <path d="M4 5.5V4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4V5.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <span className="text-black/65 font-medium truncate">app.nextlayer.ai</span>
              <span className="text-black/35 hidden sm:inline">/studio</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-0.5">
            <ChromeBtn>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 2V7.5M3.5 4.5L6 2L8.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 7.5V9.5C2.5 10 2.9 10.5 3.5 10.5H8.5C9.1 10.5 9.5 10 9.5 9.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </ChromeBtn>
            <ChromeBtn>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="3" cy="6" r="1" />
                <circle cx="6" cy="6" r="1" />
                <circle cx="9" cy="6" r="1" />
              </svg>
            </ChromeBtn>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-3 sm:px-4 h-10 sm:h-11 border-b border-black/[0.05] bg-white">
          <div className="flex items-center gap-1.5 text-[11px] min-w-0">
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex h-7 w-7 -ml-1 items-center justify-center rounded-md hover:bg-black/[0.04] text-black/55"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 4h10M2 7h10M2 10h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <span className="text-black/45 truncate hidden md:inline">Workspaces</span>
            <Chev className="hidden md:inline-flex" />
            <span className="text-black/45 truncate hidden lg:inline">Acme Inc</span>
            <Chev className="hidden lg:inline-flex" />
            <span className="text-[#08080d] font-semibold truncate">Project Atlas</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#dcfce7] text-[#15803d] text-[8.5px] font-bold tracking-wider ml-1.5 shrink-0">
              <span className="h-1 w-1 rounded-full bg-[#22c55e] pulse-soft" />
              LIVE
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <div className="hidden lg:inline-flex items-center gap-1.5 h-7 px-2.5 rounded-lg bg-[#f4f4f8] ring-1 ring-black/[0.04] text-[10.5px] text-black/40 w-[200px]">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 8L10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span>Search anything</span>
              <span className="ml-auto inline-flex h-[14px] items-center px-1 rounded bg-white ring-1 ring-black/[0.06] text-[8.5px] font-semibold text-black/45">⌘K</span>
            </div>
            <button className="relative h-7 w-7 rounded-md hover:bg-black/[0.04] flex items-center justify-center text-black/45 transition-colors">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 6C3.5 4 5 2.5 7 2.5C9 2.5 10.5 4 10.5 6V8.5L11.5 10H2.5L3.5 8.5V6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M5.5 10.5C5.7 11.3 6.3 11.8 7 11.8C7.7 11.8 8.3 11.3 8.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#5b4ef7] ring-2 ring-white" />
            </button>
            <button className="hidden md:inline-flex h-7 w-7 rounded-md hover:bg-black/[0.04] items-center justify-center text-black/45">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M7 2v1.5M7 10.5V12M2 7h1.5M10.5 7H12M3.5 3.5l1 1M9.5 9.5l1 1M3.5 10.5l1-1M9.5 4.5l1-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <button className="inline-flex h-7 px-1 rounded-md hover:bg-black/[0.04] items-center gap-1.5 transition-colors">
              <div
                className="h-5 w-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0"
                style={{
                  background: "linear-gradient(135deg, #6f63ff 0%, #5b4ef7 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                A
              </div>
              <span className="text-[10.5px] font-semibold text-[#08080d] hidden xl:inline">Arif M.</span>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="text-black/40 hidden md:inline">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] min-h-[360px] sm:min-h-[440px] md:min-h-[540px]">
          <aside className="bg-gradient-to-b from-[#f7f7fb] to-[#f0f0f6] border-r border-black/[0.04] p-3 md:p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div
                className="h-7 w-7 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #6f63ff 0%, #5b4ef7 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 10px -4px rgba(91,78,247,0.5)",
                }}
              />
              <div className="flex flex-col gap-1">
                <div className="h-2 w-16 rounded bg-black/20" />
                <div className="h-1.5 w-10 rounded bg-black/10" />
              </div>
            </div>

            <div className="h-8 rounded-lg bg-white ring-1 ring-black/[0.06] flex items-center px-2.5">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-black/30">
                <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 8L10 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <div className="ml-2 h-2 w-20 rounded bg-black/10" />
              <div className="ml-auto h-3.5 px-1.5 rounded bg-black/[0.05] text-[7px] font-medium text-black/40 flex items-center">⌘K</div>
            </div>

            <div className="flex flex-col gap-0.5">
              {[
                { label: "Workspaces", icon: "grid" },
                { label: "Studio", icon: "play", active: true },
                { label: "Models", icon: "palette", badge: "3" },
                { label: "Agents", icon: "user" },
                { label: "Insights", icon: "chart" },
                { label: "Team", icon: "users" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors ${
                    item.active
                      ? "bg-gradient-to-r from-[#eeebff] to-[#f4f2ff] ring-1 ring-[#5b4ef7]/15"
                      : "hover:bg-black/[0.04]"
                  }`}
                >
                  <SidebarIcon name={item.icon} active={item.active} />
                  <div
                    className={`h-2 rounded ${item.active ? "bg-[#5b4ef7]" : "bg-black/20"}`}
                    style={{ width: 48 + i * 6 }}
                  />
                  {item.active ? (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#5b4ef7]" />
                  ) : item.badge ? (
                    <span className="ml-auto inline-flex h-3.5 min-w-[14px] px-1 items-center justify-center rounded-full bg-[#5b4ef7]/10 text-[#5b4ef7] text-[8px] font-bold">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-3 px-2">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-black/35 mb-2">Pinned</div>
              <div className="space-y-0.5">
                {["Atlas onboarding", "Q3 forecast", "Aria assistant"].map((p) => (
                  <div key={p} className="flex items-center gap-2 px-1.5 py-1.5 rounded-md hover:bg-black/[0.04]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5b4ef7]/60" />
                    <span className="text-[10px] text-black/55 truncate">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-black/[0.05]">
              <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-black/[0.04]">
                <div
                  className="relative h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6f63ff 0%, #5b4ef7 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 6px -2px rgba(91,78,247,0.5)",
                  }}
                >
                  A
                  <span className="absolute -bottom-0 -right-0 h-2 w-2 rounded-full bg-[#22c55e] ring-2 ring-[#f0f0f6]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10.5px] font-semibold text-[#08080d] truncate leading-tight">Arif M.</div>
                  <div className="text-[9px] text-black/45 truncate leading-tight mt-0.5 inline-flex items-center gap-1">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor" className="text-[#f5b86d]">
                      <path d="M5 0.5L6.4 3.3L9.5 3.8L7.3 6L7.8 9L5 7.6L2.2 9L2.7 6L0.5 3.8L3.6 3.3L5 0.5Z" />
                    </svg>
                    Enterprise plan
                  </div>
                </div>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="text-black/30 shrink-0">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </aside>

          <div
            className="relative p-3 md:p-5"
            style={{
              background:
                "radial-gradient(120% 80% at 70% 0%, #f3effc 0%, #ebe7fa 60%, #e4dff5 100%)",
            }}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4 gap-2">
              <div className="flex gap-1 md:gap-1.5 overflow-x-auto hide-scrollbar">
                {TABS.map((t) => {
                  const isActive = active === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      className={`px-2.5 py-1.5 rounded-lg text-[10px] md:text-[11px] font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-white text-[#08080d] shadow-[0_1px_2px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]"
                          : "text-black/50 hover:text-black/70 hover:bg-white/40"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <button className="h-7 w-7 rounded-lg bg-white ring-1 ring-black/[0.06] flex items-center justify-center text-black/40">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 8L10 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  className="h-7 px-3 rounded-lg text-white text-[10px] font-semibold inline-flex items-center gap-1 whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #6f63ff 0%, #5b4ef7 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 12px -4px rgba(91,78,247,0.5)",
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  {ACTION_LABEL[active]}
                </button>
              </div>
            </div>

            <div className="mt-2">
              {active === "generative" && <GenerativePane />}
              {active === "automation" && <AutomationPane />}
              {active === "analytics" && <AnalyticsPane />}
              {active === "assistants" && <AssistantsPane />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  CHROME  ───────────────────────────── */

function ChromeBtn({ children, dim = false }: { children: React.ReactNode; dim?: boolean }) {
  return (
    <button
      className={`h-6 w-6 rounded-md hover:bg-black/[0.06] flex items-center justify-center transition-colors ${
        dim ? "text-black/25" : "text-black/45"
      }`}
    >
      {children}
    </button>
  );
}

function Chev({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      className={`text-black/25 shrink-0 ${className}`}
    >
      <path d="M4.5 2L7.5 6L4.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────  PANES  ───────────────────────────── */

type V = React.ComponentProps<typeof Placeholder>["variant"];

function GenerativePane() {
  const tiles: { src: string }[] = [
    { src: "/generated/il-tile-1.jpg" },
    { src: "/generated/il-tile-2.jpg" },
    { src: "/generated/il-tile-3.webp" },
    { src: "/generated/il-tile-4.jpg" },
    { src: "/generated/il-tile-5.jpg" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      {tiles.map((t, i) => (
        <div
          key={i}
          className="group relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/[0.05] shadow-[0_4px_16px_-8px_rgba(8,8,13,0.15)] bg-[#0a0a14]"
        >
          <Image
            src={t.src}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 33vw, 260px"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function AutomationPane() {
  return (
    <div className="space-y-2.5 md:space-y-3">
      <div className="rounded-xl bg-white ring-1 ring-black/[0.05] p-2.5 md:p-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #f24e1e 0%, #c026d3 55%, #6d00cc 100%)" }}
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v3M7 9v3M2 7h3M9 7h3M3.5 3.5l2 2M8.5 8.5l2 2M3.5 10.5l2-2M8.5 5.5l2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-[11px] md:text-[12px] font-semibold text-[#08080d] truncate">Lead routing scenario</span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#dcfce7] text-[#15803d] text-[8.5px] font-bold tracking-wider shrink-0">
            <span className="h-1 w-1 rounded-full bg-[#22c55e] pulse-soft" />
            ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <span className="hidden lg:inline text-[9px] text-black/40">Last run · 2 min ago</span>
          <button className="hidden sm:inline-flex h-6 items-center px-2 rounded bg-[#f4f4f8] text-[9px] font-semibold text-black/65 hover:bg-[#ececf2]">Run once</button>
          <button
            className="h-6 w-6 rounded text-white flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #c026d3 0%, #6d00cc 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 6px -2px rgba(109,0,204,0.5)",
            }}
            aria-label="Run scenario"
          >
            <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor">
              <path d="M2 1L9 5L2 9V1Z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="relative rounded-xl ring-1 ring-black/[0.05] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        style={{
          background: "linear-gradient(180deg, #fbfbfd 0%, #f3f3f7 100%)",
          aspectRatio: "16 / 7",
          minHeight: 200,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(8,8,13,0.13) 0.8px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="make-line-1" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#f24e1e" />
              <stop offset="60%" stopColor="#c026d3" />
              <stop offset="100%" stopColor="#6d00cc" />
            </linearGradient>
            <linearGradient id="make-line-2" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6d00cc" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="make-line-3" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6d00cc" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          <path d="M 110 160 C 180 160, 220 160, 290 160" stroke="url(#make-line-1)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 330 160 C 400 160, 440 160, 500 160" stroke="url(#make-line-1)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M 540 160 C 610 160, 650 80, 720 80" stroke="url(#make-line-2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 540 160 C 610 160, 650 240, 720 240" stroke="url(#make-line-3)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          <circle cx="200" cy="160" r="3" fill="#c026d3" />
          <circle cx="410" cy="160" r="3" fill="#c026d3" opacity="0.5" />
          <circle cx="640" cy="120" r="3" fill="#a855f7" />
          <circle cx="640" cy="200" r="3" fill="#ec4899" />
        </svg>

        <MakeNode brand="gmail" label="Watch emails" sub="New submission" step="1" top="50%" left="14%" status="ok" />
        <MakeNode brand="openai" label="Classify intent" sub="GPT-4o · score" step="2" top="50%" left="39%" status="processing" />
        <MakeNode brand="router" label="Router" sub="3 paths" step="3" top="50%" left="64%" status="ok" />
        <MakeNode brand="slack" label="Notify sales" sub="#hot-leads" step="4" top="25%" left="89%" status="ok" />
        <MakeNode brand="notion" label="Log to CRM" sub="Notion DB" step="5" top="75%" left="89%" status="ok" />

        <div className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-md bg-white/85 backdrop-blur ring-1 ring-black/[0.06] px-2 py-1 text-[8.5px] font-medium text-black/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] pulse-soft" />
          Live · 1,284 ops today
        </div>
        <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-white/85 backdrop-blur ring-1 ring-black/[0.06] px-1.5 py-1 text-[8.5px] font-semibold text-black/60">
          <span>50%</span>
          <span className="text-black/30">·</span>
          <button className="text-black/45 hover:text-black/80">−</button>
          <button className="text-black/45 hover:text-black/80">+</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        <StatCard label="Operations today" value="1,284" trend="−12% latency" up />
        <StatCard label="Success rate" value="99.4%" trend="+0.3%" up />
        <StatCard label="Data transferred" value="240MB" trend="last hour" />
      </div>
    </div>
  );
}

function MakeNode({
  brand,
  label,
  sub,
  step,
  top,
  left,
  status,
}: {
  brand: "gmail" | "openai" | "router" | "slack" | "notion";
  label: string;
  sub: string;
  step: string;
  top: string;
  left: string;
  status: "ok" | "processing";
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
      style={{ top, left }}
    >
      <div className="relative">
        {status === "processing" && (
          <span aria-hidden className="absolute -inset-1 rounded-full ring-2 ring-[#c026d3]/60 animate-pulse" />
        )}
        <span className="absolute -top-1 -right-1 z-10 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-1 ring-black/10 text-[7.5px] font-bold text-black/70 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
          {step}
        </span>
        <BrandNodeCircle brand={brand} />
      </div>
      <div className="text-center">
        <div className="text-[8.5px] md:text-[9.5px] font-semibold text-[#08080d] leading-tight whitespace-nowrap">{label}</div>
        <div className="text-[7.5px] md:text-[8.5px] text-black/45 leading-tight whitespace-nowrap mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function BrandNodeCircle({ brand }: { brand: "gmail" | "openai" | "router" | "slack" | "notion" }) {
  const base = "h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center shadow-[0_6px_16px_-6px_rgba(8,8,13,0.25),0_2px_4px_-2px_rgba(8,8,13,0.1)]";
  switch (brand) {
    case "gmail":
      return (
        <div className={`${base} bg-white ring-2 ring-[#ea4335]/20`}>
          <svg width="22" height="16" viewBox="0 0 24 18" fill="none">
            <path d="M2 2v14h4V8l6 4 6-4v8h4V2l-10 7L2 2Z" fill="#ea4335" />
          </svg>
        </div>
      );
    case "openai":
      return (
        <div className={`${base} bg-[#0d0d0d] ring-2 ring-[#10a37f]/40`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 9.8c.5-1.4.3-3-.6-4.3a4.8 4.8 0 0 0-5.2-2.2A4.8 4.8 0 0 0 8.1 4 4.8 4.8 0 0 0 4.7 6.5a4.8 4.8 0 0 0 .6 5.7c-.5 1.4-.3 3 .6 4.3a4.8 4.8 0 0 0 5.2 2.2 4.8 4.8 0 0 0 8.1-1.3 4.8 4.8 0 0 0 3.4-2.5 4.8 4.8 0 0 0-.6-5.7Z"
              stroke="#10a37f"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
        </div>
      );
    case "router":
      return (
        <div className={`${base} text-white`} style={{ background: "linear-gradient(135deg, #f24e1e 0%, #c026d3 55%, #6d00cc 100%)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="12" r="2" fill="currentColor" />
            <circle cx="18" cy="6" r="2" fill="currentColor" />
            <circle cx="18" cy="18" r="2" fill="currentColor" />
            <path d="M8 12C10 12, 12 9, 16 7M8 12C10 12, 12 15, 16 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "slack":
      return (
        <div className={`${base} bg-white ring-2 ring-black/5`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="6" height="2.5" rx="1.25" fill="#e01e5a" />
            <rect x="11" y="3" width="2.5" height="6" rx="1.25" fill="#36c5f0" />
            <rect x="15" y="11" width="6" height="2.5" rx="1.25" fill="#2eb67d" />
            <rect x="11" y="15" width="2.5" height="6" rx="1.25" fill="#ecb22e" />
          </svg>
        </div>
      );
    case "notion":
      return (
        <div className={`${base} bg-white ring-2 ring-black/10`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 4h4l8 14V4h2v16h-4L7 6v14H5V4Z" fill="#08080d" />
          </svg>
        </div>
      );
  }
}

function AnalyticsPane() {
  return (
    <div className="space-y-2.5 md:space-y-3">
      <div className="rounded-xl bg-white ring-1 ring-black/[0.05] p-3 md:p-4 shadow-[0_4px_16px_-8px_rgba(8,8,13,0.1)]">
        <div className="flex items-start justify-between mb-2.5">
          <div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-black/45 font-semibold">
              Revenue forecast · Next 30 days
            </div>
            <div className="text-[18px] md:text-[22px] font-semibold text-[#08080d] tracking-tight leading-tight mt-1">
              $1.24M
              <span className="ml-2 text-[10px] md:text-[11px] text-[#15803d] font-semibold">+18.4%</span>
            </div>
          </div>
          <div className="flex gap-1">
            {["7d", "30d", "90d"].map((p, i) => (
              <span
                key={p}
                className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${
                  i === 1 ? "bg-[#08080d] text-white" : "text-black/40 hover:text-black/70"
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 300 80" className="w-full h-16 md:h-20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fchart" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#5b4ef7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5b4ef7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 55 C 30 50, 50 62, 80 45 C 110 30, 140 38, 170 25 L 170 80 L 0 80 Z"
            fill="url(#fchart)"
          />
          <path
            d="M0 55 C 30 50, 50 62, 80 45 C 110 30, 140 38, 170 25"
            stroke="#5b4ef7"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M170 25 C 200 18, 230 28, 260 12 C 280 5, 290 8, 300 4"
            stroke="#5b4ef7"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3 3"
            opacity="0.55"
            strokeLinecap="round"
          />
          <circle cx="170" cy="25" r="3" fill="#5b4ef7" />
          <circle cx="170" cy="25" r="6" fill="#5b4ef7" opacity="0.2" />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        <KPICard label="Churn risk" value="3.2%" trend="−0.8%" trendUp dir="down" />
        <KPICard label="Customer LTV" value="$8,420" trend="+12%" trendUp dir="up" />
        <KPICard label="Conversion" value="24.6%" trend="+2.1%" trendUp dir="up" />
      </div>
    </div>
  );
}

function AssistantsPane() {
  return (
    <div className="space-y-2.5 md:space-y-3">
      <div className="rounded-xl bg-white ring-1 ring-black/[0.05] p-3 md:p-4 shadow-[0_4px_16px_-8px_rgba(8,8,13,0.1)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden ring-1 ring-black/[0.06]">
              <Placeholder variant="portrait-violet" />
            </div>
            <div>
              <div className="text-[11px] md:text-[12px] font-semibold text-[#08080d]">Aria · Sales Assistant</div>
              <div className="text-[9px] text-black/45 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-[#22c55e]" /> Online · GPT-4o · 142 conversations today
              </div>
            </div>
          </div>
          <span className="hidden sm:inline text-[9px] text-black/40">12 agents active</span>
        </div>
        <div className="space-y-1.5">
          <ChatBubble side="left">
            Hi — I&apos;ve flagged 3 enterprise leads from yesterday matching your ICP.
          </ChatBubble>
          <ChatBubble side="right">Show me the top one</ChatBubble>
          <ChatBubble side="left">
            Acme Inc · 12k employees · Fintech ·{" "}
            <span className="font-semibold text-[#5b4ef7]">94% fit</span>
          </ChatBubble>
          <div className="flex items-center gap-1.5 pt-1">
            <span className="inline-block w-1 h-1 rounded-full bg-black/30 pulse-soft" />
            <span className="inline-block w-1 h-1 rounded-full bg-black/30 pulse-soft" style={{ animationDelay: "0.2s" }} />
            <span className="inline-block w-1 h-1 rounded-full bg-black/30 pulse-soft" style={{ animationDelay: "0.4s" }} />
            <span className="text-[9px] text-black/35 ml-1">typing…</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        <AgentCard variant="portrait-warm" name="Helena" role="Onboarding" count="284" />
        <AgentCard variant="portrait-cool" name="Marcus" role="Support" count="1,402" />
        <AgentCard variant="portrait-rose" name="Sofia" role="Research" count="89" />
      </div>
    </div>
  );
}

/* ─────────────────────────────  HELPERS  ───────────────────────────── */

function FlowNode({
  icon,
  label,
  sub,
  tone,
  active = false,
}: {
  icon: "bolt" | "brain" | "branch" | "send";
  label: string;
  sub: string;
  tone: "amber" | "purple" | "blue" | "green";
  active?: boolean;
}) {
  const tones = {
    amber: { bg: "#fff4d6", color: "#a06a00" },
    purple: { bg: "#eeebff", color: "#5b4ef7" },
    blue: { bg: "#dceaff", color: "#1c3060" },
    green: { bg: "#dcfce7", color: "#15803d" },
  } as const;
  const t = tones[tone];
  return (
    <div
      className={`flex-1 min-w-[64px] rounded-lg bg-white ring-1 p-2 transition-all ${
        active ? "ring-[#5b4ef7]/40 shadow-[0_4px_12px_-6px_rgba(91,78,247,0.4)]" : "ring-black/[0.06]"
      }`}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span
          className="inline-flex h-4 w-4 items-center justify-center rounded text-[8px]"
          style={{ background: t.bg, color: t.color }}
        >
          <FlowIcon name={icon} />
        </span>
        <span className="text-[9px] font-semibold text-[#08080d] truncate">{label}</span>
      </div>
      <div className="text-[8.5px] text-black/45 truncate">{sub}</div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 w-3 text-black/25">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FlowIcon({ name }: { name: "bolt" | "brain" | "branch" | "send" }) {
  if (name === "bolt")
    return (
      <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
        <path d="M6 1L2 5.5h2.5L4 9l4-4.5H5.5L6 1Z" />
      </svg>
    );
  if (name === "brain")
    return (
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M3 2.5C2 2.5 1.5 3.5 1.5 4.5C1.5 5 1.8 5.5 2 5.7C1.7 6 1.5 6.5 1.5 7C1.5 7.8 2.2 8.5 3 8.5M7 2.5C8 2.5 8.5 3.5 8.5 4.5C8.5 5 8.2 5.5 8 5.7C8.3 6 8.5 6.5 8.5 7C8.5 7.8 7.8 8.5 7 8.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M5 2v6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    );
  if (name === "branch")
    return (
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M3 1.5V8.5M3 4.5C3 4.5 5 5 6.5 5C7 5 7.5 4.5 7.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="3" cy="1.5" r="0.8" fill="currentColor" />
        <circle cx="3" cy="8.5" r="0.8" fill="currentColor" />
        <circle cx="7.5" cy="3.5" r="0.8" fill="currentColor" />
      </svg>
    );
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
      <path d="M1 5L9 1L7 9L5 6L1 5Z" />
    </svg>
  );
}

function StatCard({ label, value, trend, up }: { label: string; value: string; trend: string; up?: boolean }) {
  return (
    <div className="rounded-xl bg-white ring-1 ring-black/[0.05] p-2.5 md:p-3">
      <div className="text-[9px] uppercase tracking-wider text-black/45 font-semibold">{label}</div>
      <div className="text-[14px] md:text-[16px] font-semibold text-[#08080d] tracking-tight mt-1">{value}</div>
      <div className={`text-[9px] mt-0.5 font-medium ${up === undefined ? "text-black/45" : up ? "text-[#15803d]" : "text-[#dc2626]"}`}>
        {trend}
      </div>
    </div>
  );
}

function RunRow({ time, name, status }: { time: string; name: string; status: "ok" | "warn" }) {
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <span
        className={`inline-flex h-1.5 w-1.5 rounded-full ${status === "ok" ? "bg-[#22c55e]" : "bg-[#f59e0b]"}`}
      />
      <span className="text-black/40 tabular-nums">{time}</span>
      <span className="text-[#08080d] truncate flex-1">{name}</span>
      <span className={`text-[9px] font-semibold ${status === "ok" ? "text-[#15803d]" : "text-[#a16207]"}`}>
        {status === "ok" ? "OK" : "RETRY"}
      </span>
    </div>
  );
}

function KPICard({
  label,
  value,
  trend,
  trendUp,
  dir,
}: {
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  dir: "up" | "down";
}) {
  return (
    <div className="rounded-xl bg-white ring-1 ring-black/[0.05] p-2.5 md:p-3">
      <div className="text-[9px] uppercase tracking-wider text-black/45 font-semibold">{label}</div>
      <div className="text-[14px] md:text-[16px] font-semibold text-[#08080d] tracking-tight mt-1">{value}</div>
      <div className="flex items-center justify-between mt-1.5">
        <span className={`text-[9px] font-semibold ${trendUp ? "text-[#15803d]" : "text-[#dc2626]"}`}>{trend}</span>
        <svg width="34" height="14" viewBox="0 0 50 20" preserveAspectRatio="none">
          <path
            d={
              dir === "up"
                ? "M0 16 L 10 12 L 18 14 L 28 8 L 38 6 L 50 2"
                : "M0 4 L 10 8 L 18 6 L 28 12 L 38 14 L 50 18"
            }
            stroke={dir === "up" ? "#15803d" : "#dc2626"}
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ChatBubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[10px] md:text-[11px] leading-relaxed ${
          side === "right"
            ? "bg-[#5b4ef7] text-white rounded-tr-sm"
            : "bg-[#f4f4f8] text-[#08080d] rounded-tl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function AgentCard({ variant, name, role, count }: { variant: V; name: string; role: string; count: string }) {
  return (
    <div className="rounded-xl bg-white ring-1 ring-black/[0.05] p-2.5 md:p-3">
      <div className="flex items-center gap-2">
        <div className="relative h-7 w-7 rounded-full overflow-hidden ring-1 ring-black/[0.06]">
          <Placeholder variant={variant} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10.5px] font-semibold text-[#08080d] truncate">{name}</div>
          <div className="text-[8.5px] text-black/45 truncate">{role}</div>
        </div>
        <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[9px] text-black/40">Convos</span>
        <span className="text-[11px] font-semibold text-[#08080d] tabular-nums">{count}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────  FLOATING METRICS  ───────────────────────── */

function FloatingMetric({
  className = "",
  icon,
  label,
  value,
  trend,
  accent = false,
}: {
  className?: string;
  icon: "globe" | "bolt" | "people";
  label: string;
  value: string;
  trend: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-[0_8px_24px_-8px_rgba(20,18,80,0.25),0_2px_8px_-2px_rgba(20,18,80,0.1)] ring-1 ring-black/[0.05] ${className}`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          accent
            ? "bg-gradient-to-br from-[#ff9d80] to-[#ff6f5b] text-white"
            : "bg-[#eeebff] text-[#5b4ef7]"
        }`}
      >
        <MetricIcon name={icon} />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-[#5a5a6a] font-medium">{label}</div>
        <div className="text-[18px] md:text-[20px] font-semibold text-[#08080d] leading-tight tracking-tight">{value}</div>
        <div className="text-[10px] text-[#5a5a6a] mt-0.5">{trend}</div>
      </div>
    </div>
  );
}

function MetricIcon({ name }: { name: "globe" | "bolt" | "people" }) {
  if (name === "globe")
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  if (name === "bolt")
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9 2L4 9H8L7 14L12 7H8L9 2Z" fill="currentColor" />
      </svg>
    );
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="5.5" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 13c0-2 1.5-3.5 3.5-3.5S9 11 9 13M9 13c0-1.5 1-2.8 2.5-2.8S14 11.5 14 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SidebarIcon({ name, active }: { name: string; active?: boolean }) {
  const color = active ? "#5b4ef7" : "rgba(0,0,0,0.35)";
  switch (name) {
    case "grid":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="1.5" y="1.5" width="3.5" height="3.5" rx="0.6" stroke={color} strokeWidth="1.2" />
          <rect x="7" y="1.5" width="3.5" height="3.5" rx="0.6" stroke={color} strokeWidth="1.2" />
          <rect x="1.5" y="7" width="3.5" height="3.5" rx="0.6" stroke={color} strokeWidth="1.2" />
          <rect x="7" y="7" width="3.5" height="3.5" rx="0.6" stroke={color} strokeWidth="1.2" />
        </svg>
      );
    case "play":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill={active ? color : "none"} stroke={color} strokeWidth="1.2">
          <path d="M3 2L10 6L3 10V2Z" strokeLinejoin="round" />
        </svg>
      );
    case "palette":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke={color} strokeWidth="1.2" />
          <circle cx="4" cy="5" r="0.8" fill={color} />
          <circle cx="7.5" cy="4" r="0.8" fill={color} />
          <circle cx="8.5" cy="7" r="0.8" fill={color} />
        </svg>
      );
    case "user":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="4" r="2" stroke={color} strokeWidth="1.2" />
          <path d="M2 11c0-2 2-3 4-3s4 1 4 3" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10V7M5 10V4M8 10V6M11 10V2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="4" cy="4.5" r="1.6" stroke={color} strokeWidth="1.2" />
          <circle cx="8.5" cy="5" r="1.3" stroke={color} strokeWidth="1.2" />
          <path d="M1.5 10c0-1.5 1.2-2.5 2.5-2.5s2.5 1 2.5 2.5M7 10c0-1.2 1-2.2 2-2.2s2 1 2 2.2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
}
