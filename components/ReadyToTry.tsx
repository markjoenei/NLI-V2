import Link from "next/link";
import Image from "next/image";

export default function ReadyToTry() {
  return (
    <section
      className="relative py-20 md:py-28 grain overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #08080d 0%, #0e0a24 50%, #08080d 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-[520px] w-[520px] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,78,247,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-32 h-[420px] w-[420px] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,125,107,0.35), transparent 70%)",
        }}
      />

      <div className="relative container-x">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 self-start rounded-full glass-dark px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/85 font-semibold mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5b4ef7]" />
              Vertical AI agents
            </span>
            <h2 className="display-text-lg text-[28px] sm:text-[36px] md:text-[44px] lg:text-[53px] font-semibold max-w-[18ch] tracking-tight text-balance">
              <span className="block">Your Operation Has a Next Layer.</span>
              <span className="editorial text-[#989898] block">Let&apos;s Build It.</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[18px] text-white/70 max-w-[46ch] text-pretty leading-relaxed">
              The gap between where your business is and where AI can take it isn&apos;t a technology problem. It&apos;s a deployment problem. We solve it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#" className="btn-primary h-12 px-7 text-[15px] shine glow-brand">
                Explore Agents
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <AgentsControlPanel />
        </div>
      </div>
    </section>
  );
}

const AGENTS: {
  avatar: string;
  name: string;
  vertical: string;
  task: string;
  status: "executing" | "complete" | "queued";
  progress: number;
  meta: string;
}[] = [
  {
    avatar: "/generated/gen2.jpg",
    name: "Helena",
    vertical: "Sales Ops",
    task: "Qualifying 142 inbound leads",
    status: "executing",
    progress: 78,
    meta: "GPT-4o",
  },
  {
    avatar: "/generated/gen4.jpg",
    name: "Marcus",
    vertical: "Customer Support",
    task: "Resolving 24 tier-1 tickets",
    status: "executing",
    progress: 45,
    meta: "Claude",
  },
  {
    avatar: "/generated/gen3.jpg",
    name: "Sofia",
    vertical: "Market Research",
    task: "Compiling Q4 industry brief",
    status: "executing",
    progress: 92,
    meta: "GPT-4o",
  },
  {
    avatar: "/generated/gen1.jpg",
    name: "Atlas",
    vertical: "Finance Ops",
    task: "Reconciled 1,284 invoices",
    status: "complete",
    progress: 100,
    meta: "Done · 2m ago",
  },
];

function AgentsControlPanel() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 -z-0 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(91,78,247,0.45), transparent 70%)",
        }}
      />
      <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/[0.08] shadow-cinematic bg-[#0a0a18]">
        {/* Browser chrome */}
        <div className="h-9 bg-[#16162a] flex items-center gap-2 px-3.5 border-b border-white/[0.06] relative z-10">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto inline-flex items-center gap-1.5 h-5 px-3 rounded-md bg-white/[0.06] text-[10.5px] text-white/55 font-medium">
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="text-[#4ade80]">
              <rect x="2.5" y="5.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <path d="M4 5.5V4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4V5.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            app.nextlayer.ai/agents
          </div>
        </div>

        {/* Header */}
        <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">Vertical agents</div>
            <div className="flex items-baseline gap-2 mt-1">
              <div className="text-[18px] font-semibold text-white tracking-tight tabular-nums">12 running</div>
              <div className="text-[11px] text-white/45">· 248 today</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[9px] font-bold tracking-wider"
            style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}
          >
            <span className="h-1 w-1 rounded-full bg-[#4ade80] pulse-soft" />
            ALL ACTIVE
          </span>
        </div>

        {/* Agent rows */}
        <div className="p-4 space-y-2">
          {AGENTS.map((a) => (
            <AgentRow key={a.name} agent={a} />
          ))}
        </div>

        {/* Footer stats */}
        <div className="px-5 py-3.5 border-t border-white/[0.06] grid grid-cols-3 gap-3 bg-white/[0.02]">
          {[
            { l: "Tasks executed", v: "12,840" },
            { l: "Success rate", v: "99.6%" },
            { l: "Hours saved", v: "1,420" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[9px] uppercase tracking-wider text-white/40 font-semibold">{s.l}</div>
              <div className="text-[13px] font-semibold text-white mt-0.5 tabular-nums">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating: just-executed event */}
      <div className="hidden md:flex absolute -bottom-6 -left-6 lg:-left-10 z-20 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] ring-1 ring-black/[0.05] float-slow">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#22c55e]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="text-left">
          <div className="text-[9.5px] uppercase tracking-wider text-[#5a5a6a] font-semibold">Atlas executed</div>
          <div className="text-[13px] font-semibold text-[#08080d] tracking-tight">1,284 reconciliations · 2.4s</div>
        </div>
      </div>

      {/* Floating: deploy button */}
      <div className="hidden md:flex absolute -top-5 -right-4 lg:-right-10 z-20 items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-[0_12px_32px_-12px_rgba(91,78,247,0.5)] ring-1 ring-black/[0.05] float-fast">
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-xl text-white"
          style={{
            background: "linear-gradient(135deg, #6f63ff 0%, #5b4ef7 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M9 2L4 9H8L7 14L12 7H8L9 2Z" fill="currentColor" />
          </svg>
        </span>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-[#5a5a6a] font-semibold">Avg. latency</div>
          <div className="text-[12.5px] font-semibold text-[#08080d] tracking-tight">240ms · live</div>
        </div>
      </div>
    </div>
  );
}

function AgentRow({ agent }: { agent: typeof AGENTS[number] }) {
  const isDone = agent.status === "complete";
  const statusColor = isDone ? "#a5b4ff" : "#4ade80";
  const statusBg = isDone ? "rgba(165,180,255,0.15)" : "rgba(74,222,128,0.15)";
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06] transition-colors hover:bg-white/[0.06]">
      <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-white/15 shrink-0">
        <Image
          src={agent.avatar}
          alt={agent.name}
          fill
          className="object-cover"
          sizes="40px"
        />
        <span
          className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-[#0a0a18]"
          style={{ background: statusColor }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[12px] font-semibold text-white tracking-tight">{agent.name}</span>
          <span className="text-[10px] text-white/35">·</span>
          <span className="text-[10.5px] text-white/55">{agent.vertical}</span>
        </div>
        <div className="text-[10.5px] text-white/50 truncate mt-0.5">{agent.task}</div>
      </div>
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        <span
          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-bold tracking-wider"
          style={{ background: statusBg, color: statusColor }}
        >
          {!isDone && <span className="h-1 w-1 rounded-full pulse-soft" style={{ background: statusColor }} />}
          {agent.status.toUpperCase()}
        </span>
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-16 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${agent.progress}%`,
                background: isDone
                  ? "linear-gradient(90deg, #a5b4ff, #c4b5fd)"
                  : "linear-gradient(90deg, #6f63ff, #5b4ef7)",
              }}
            />
          </div>
          <span className="text-[9px] text-white/45 font-medium tabular-nums w-7 text-right">{agent.progress}%</span>
        </div>
      </div>
    </div>
  );
}

