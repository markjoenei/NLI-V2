import Link from "next/link";
import Image from "next/image";

type CardKind =
  | "generative"
  | "automation"
  | "predictive"
  | "agents"
  | "revenue"
  | "executive";

type Card = {
  kind: CardKind;
  title: string;
  body: string;
  subhead?: string;
  bullets?: string[];
  image?: string;
};

const cards: Card[] = [
  {
    kind: "generative",
    title: "Generative Intelligence",
    subhead: "Your content, communications, and creation tasks — handled.",
    body: "Language models trained on your data, integrated into your workflows, producing output your team would be proud to put their name on. No generic templates. No hallucinations. No handholding required.",
    bullets: [
      "Custom LLM Integration",
      "AI Content Engines built on your brand voice",
      "Workflow-native generation — inside your tools, not alongside them",
    ],
    image: "/generated/generative-intelligence.jpg",
  },
  {
    kind: "automation",
    title: "Operational Automation",
    subhead: "If a human is doing it manually, a machine should be doing it better.",
    body: "We map your highest-friction processes and eliminate them — not with bots that break, but with intelligent automation that handles exceptions, escalates correctly, and learns over time.",
    bullets: [
      "End-to-end process automation",
      "Exception handling and intelligent escalation",
      "24/7 operation, zero handoff errors",
    ],
    image: "/generated/operational-automation.jpg",
  },
  {
    kind: "predictive",
    title: "Predictive Intelligence",
    subhead: "Your data knows what's coming. You just can't hear it yet.",
    body: "We build predictive systems that surface the signal inside your noise — demand shifts, revenue risk, operational bottlenecks — before they cost you. In real time. Without a data scientist in the room.",
    bullets: [
      "Demand and revenue forecasting",
      "Real-time anomaly detection and risk signals",
      "Decisions ready to act on, not just read",
    ],
    image: "/generated/predictive-intelligence.png",
  },
  {
    kind: "agents",
    title: "Vertical AI Agents",
    subhead: "Not chatbots. Not assistants. Agents that execute.",
    body: "Our vertical agents don't generate a suggestion and wait for a human to act on it. They handle the task — customer interactions, internal operations, order processing, support resolution — end to end. They escalate only when it genuinely requires a person.",
    bullets: [
      "Customer-facing agents: engage, resolve, convert",
      "Operations agents: process, route, complete",
      "Purpose-built per vertical — not repurposed generic models",
    ],
    image: "/generated/vertical-ai-agents.jpg",
  },
  {
    kind: "revenue",
    title: "Revenue Intelligence",
    subhead: "The revenue you're leaving on the table has a name. We find it.",
    body: "Weak follow-up. Slow response times. Pricing gaps. Drop-off points you don't know exist. We install AI systems that detect where your revenue is leaking — and fix it before the next quarter closes.",
    bullets: [
      "Revenue leak detection and root cause analysis",
      "Conversion and pipeline optimization",
      "Autonomous outreach and follow-up sequences",
    ],
  },
];

type Theme = "light" | "dark";

type HeadingProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  showCTA?: boolean;
  showCards?: boolean;
  theme?: Theme;
};

const FAILURE_ITEMS: { label: string; text: string; image: string }[] = [
  {
    label: "Broken foundation",
    text: "They're built on top of broken processes instead of redesigning them.",
    image: "/generated/broken-foundation.jpg",
  },
  {
    label: "Dead-end insights",
    text: "They produce insights nobody acts on.",
    image: "/generated/dead-end-insights.avif",
  },
  {
    label: "Vendor lock-in",
    text: "They're maintained by vendors, not owned by your team.",
    image: "/generated/vendor-lock-in.jpg",
  },
  {
    label: "Demo-grade, not prod-grade",
    text: "They impress in demos and disappear in production.",
    image: "/generated/demo-grade.jpg",
  },
];

export const FAILURE_LIST_BODY = (
  <div className="mt-10 md:mt-14 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
    {FAILURE_ITEMS.map((item) => (
      <div
        key={item.label}
        className="group relative flex flex-col rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.08] hover:ring-white/[0.16] hover:bg-white/[0.06] transition-colors overflow-hidden"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={item.image}
            alt={item.label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ filter: "saturate(0.7)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,8,13,0.25) 0%, rgba(8,8,13,0.55) 60%, rgba(8,8,13,0.85) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,122,89,0.45) 0%, transparent 55%, rgba(255,122,89,0.18) 100%)",
            }}
          />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#ffb59a] bg-black/45 backdrop-blur ring-1 ring-[#ff7a59]/30 rounded px-2 py-1">
              {item.label}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-7 min-w-0 flex-1">
          <p className="text-[15.5px] md:text-[16.5px] leading-[1.55] text-white/80 text-pretty">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default function LovedByUsers({
  eyebrow = "What NLI Builds",
  heading = (
    <>
      The Intelligence Stack.
      <br />
      <span className="editorial text-[#989898]">Built for Your Business.</span>
    </>
  ),
  body,
  showCTA = true,
  showCards = true,
  theme = "dark",
}: HeadingProps = {}) {
  const isLight = theme === "light";
  const defaultBody = (
    <p
      className={`mt-7 md:mt-8 mx-auto max-w-[640px] text-center text-[15px] md:text-[17px] leading-[1.6] text-pretty ${
        isLight ? "text-[#4a4a55]" : "text-white/70"
      }`}
    >
      Not a menu of services. A connected system of AI capabilities that operate as one layer across your operation.
    </p>
  );
  const renderedBody = body ?? defaultBody;
  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden ${isLight ? "text-[#08080d]" : "text-white"}`}
      style={{
        background: isLight
          ? "linear-gradient(180deg, #ffffff 0%, #f6f5fb 50%, #ffffff 100%)"
          : "linear-gradient(180deg, #08080d 0%, #0e0a24 50%, #08080d 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[1100px] blur-3xl opacity-50 breathe"
        style={{
          background: isLight
            ? "radial-gradient(closest-side, rgba(91,78,247,0.25), transparent 70%)"
            : "radial-gradient(closest-side, rgba(91,78,247,0.5), transparent 70%)",
        }}
      />
      <div className="relative container-x">
        <div className="max-w-[780px] mx-auto text-center">
          <p
            className={`text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 ${
              isLight ? "text-[#5a5a6a]" : "text-white/55"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`display-text text-[28px] sm:text-[36px] md:text-[44px] lg:text-[53px] font-semibold text-balance tracking-tight ${
              isLight ? "text-[#08080d]" : "text-white"
            }`}
          >
            {heading}
          </h2>
        </div>
        {renderedBody}
        {showCTA && (
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="#" className="btn-primary h-11 px-5 text-[14px] shine">
              Book a Strategy Call
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#"
              className={
                isLight
                  ? "relative inline-flex items-center justify-center gap-1.5 rounded-full h-11 px-5 text-[14px] font-semibold text-[#08080d] bg-black/[0.04] ring-1 ring-black/[0.08] transition-all duration-200 hover:bg-black/[0.08]"
                  : "btn-ghost-light h-11 px-5 text-[14px]"
              }
            >
              See plans
            </Link>
          </div>
        )}

      </div>

      {showCards && (
        <div className="group/marquee mt-16 md:mt-20 relative overflow-x-clip w-full py-4">
          <div
            className="flex w-max gap-4 md:gap-5 px-5 md:px-8 items-stretch group-hover/marquee:[animation-play-state:paused]"
            style={{ animation: "marqueeScroll 40s linear infinite" }}
          >
            {[...cards, ...cards].map((c, idx) => (
              <article
                key={`${c.title}-${idx}`}
                aria-hidden={idx >= cards.length}
                className="group relative rounded-3xl overflow-hidden flex flex-col card-hover w-[300px] md:w-[340px] lg:w-[360px] shrink-0 bg-[#0e0a24] ring-1 ring-white/[0.08] shadow-[0_12px_40px_-20px_rgba(8,8,13,0.45)]"
              >
                {c.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a14]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="360px"
                    />
                  </div>
                ) : (
                  <CardArt kind={c.kind} />
                )}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-[17px] md:text-[19px] font-semibold leading-[1.2] tracking-tight text-white">
                    {c.title}
                  </h3>
                  {c.subhead && (
                    <p className="mt-2.5 text-[13px] md:text-[13.5px] font-semibold tracking-tight text-[#a5b4ff]">
                      {c.subhead}
                    </p>
                  )}
                  <p className="mt-3 text-[13.5px] md:text-[14px] leading-relaxed text-white/65">
                    {c.body}
                  </p>
                  {c.bullets && c.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {c.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[12.5px] md:text-[13px] leading-snug text-white/70"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-[#a5b4ff]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

const PANEL_BG: Record<CardKind, string> = {
  generative: "linear-gradient(135deg, #1c0a2e 0%, #15082a 60%, #08081a 100%)",
  automation: "linear-gradient(135deg, #1f1228 0%, #2a1020 55%, #08081a 100%)",
  predictive: "linear-gradient(135deg, #0c1230 0%, #0e1c40 55%, #06081a 100%)",
  agents: "linear-gradient(135deg, #0a1c28 0%, #0e1d36 55%, #07091a 100%)",
  revenue: "linear-gradient(135deg, #0a1f1a 0%, #0e2030 55%, #07091a 100%)",
  executive: "linear-gradient(135deg, #160a2c 0%, #1c0e3a 55%, #08081a 100%)",
};

function CardArt({ kind }: { kind: CardKind }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden"
      style={{ background: PANEL_BG[kind] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[220px] w-[280px] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,78,247,0.4), transparent 70%)",
        }}
      />
      <div className="relative h-full px-6 py-6">
        {kind === "generative" && <GenerativePanel />}
        {kind === "automation" && <AutomationPanel />}
        {kind === "predictive" && <PredictivePanel />}
        {kind === "agents" && <AgentsPanel />}
        {kind === "revenue" && <RevenuePanel />}
        {kind === "executive" && <ExecutivePanel />}
      </div>
    </div>
  );
}

function PanelHeader({ label, status }: { label: string; status?: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] pulse-soft" />
        <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-white/80">{label}</span>
      </div>
      {status && (
        <span className="text-[10px] font-semibold text-white/55 tabular-nums">{status}</span>
      )}
    </div>
  );
}

function PanelFooter({ left, right, accent = "#34d399" }: { left: string; right: string; accent?: string }) {
  return (
    <div className="mt-4 flex items-center justify-between text-[10.5px] font-semibold">
      <span className="text-white/60">{left}</span>
      <span style={{ color: accent }}>{right}</span>
    </div>
  );
}

function GeneratedTile({ bg }: { bg: string }) {
  return (
    <div
      className="relative rounded-lg ring-1 ring-white/15 overflow-hidden"
      style={{ background: bg }}
    >
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(70% 60% at 30% 25%, rgba(255,255,255,0.5) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}

function GenerativePanel() {
  const tiles = [
    "linear-gradient(135deg, #f24e1e, #c026d3)",
    "linear-gradient(135deg, #5b4ef7, #22d3ee)",
    "linear-gradient(135deg, #ff7d6b, #5b4ef7)",
    "linear-gradient(135deg, #f59e0b, #c026d3)",
    "linear-gradient(135deg, #22c55e, #5b4ef7)",
    "linear-gradient(135deg, #c026d3, #ff7d6b)",
  ];
  return (
    <div className="h-full flex flex-col">
      <PanelHeader label="AI Studio" status="12 models" />
      <div className="grid grid-cols-3 grid-rows-2 gap-2 flex-1 min-h-0">
        {tiles.map((bg, i) => (
          <GeneratedTile key={i} bg={bg} />
        ))}
      </div>
      <PanelFooter left="text · image · video" right="multi-modal" accent="#c4b5fd" />
    </div>
  );
}

function AutomationPanel() {
  const steps = [
    { label: "Webhook", color: "#ff7d6b" },
    { label: "Enrich", color: "#c026d3" },
    { label: "Decide", color: "#5b4ef7" },
    { label: "Sync", color: "#34d399" },
  ];
  return (
    <div className="h-full flex flex-col">
      <PanelHeader label="Workflow · live" status="1,284 ops/min" />
      <div className="flex-1 flex items-center">
        <div className="relative w-full">
          <div
            className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-px"
            style={{
              background:
                "linear-gradient(90deg, #ff7d6b 0%, #c026d3 35%, #5b4ef7 70%, #34d399 100%)",
            }}
          />
          <div className="relative flex items-center justify-between">
            {steps.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg ring-1 ring-white/30 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]"
                  style={{ background: s.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="text-[9.5px] font-semibold text-white/80 tracking-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PanelFooter left="Avg 240ms" right="99.8% success" />
    </div>
  );
}

function PredictivePanel() {
  return (
    <div className="h-full flex flex-col">
      <PanelHeader label="Q3 Forecast" status="94% confidence" />
      <div className="flex-1 relative min-h-0">
        <svg viewBox="0 0 200 70" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pred-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(91,78,247,0.5)" />
              <stop offset="100%" stopColor="rgba(91,78,247,0)" />
            </linearGradient>
          </defs>
          <line x1="120" y1="4" x2="120" y2="66" stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" strokeDasharray="2.5 2.5" />
          <path d="M120 26 L 160 14 L 200 4 L 200 70 L 120 70 Z" fill="url(#pred-fill)" />
          <path
            d="M0 56 L 25 50 L 50 52 L 75 40 L 100 33 L 120 26"
            fill="none"
            stroke="#a5b4ff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120 26 L 160 14 L 200 4"
            fill="none"
            stroke="#a5b4ff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3.5 2.5"
          />
          <circle cx="120" cy="26" r="3.5" fill="#fff" />
          <circle cx="120" cy="26" r="6" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />
        </svg>
        <span className="absolute top-0 left-[60%] text-[9px] font-bold text-white/80 tracking-tight">
          now
        </span>
      </div>
      <PanelFooter left="Pipeline ARR" right="+22.4% Q/Q" />
    </div>
  );
}

function AgentsPanel() {
  const verticals = [
    { label: "Sales", color: "#5b4ef7" },
    { label: "Finance", color: "#22d3ee" },
    { label: "HR", color: "#c026d3" },
    { label: "Support", color: "#34d399" },
    { label: "Legal", color: "#f59e0b" },
    { label: "Ops", color: "#ff7d6b" },
  ];
  return (
    <div className="h-full flex flex-col">
      <PanelHeader label="Vertical Agents" status="12 active" />
      <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
        {verticals.map((v) => (
          <div
            key={v.label}
            className="flex items-center gap-2 rounded-lg bg-white/[0.06] ring-1 ring-white/10 px-2.5 py-1.5"
          >
            <span
              className="h-2 w-2 rounded-full shrink-0"
              style={{
                background: v.color,
                boxShadow: `0 0 0 3px ${v.color}26`,
              }}
            />
            <span className="text-[10px] font-semibold text-white/90 tracking-tight truncate">
              {v.label}
            </span>
          </div>
        ))}
      </div>
      <PanelFooter left="200+ verticals" right="● Online" />
    </div>
  );
}

function RevenuePanel() {
  const bars = [42, 58, 50, 72, 84, 95];
  return (
    <div className="h-full flex flex-col">
      <PanelHeader label="Pipeline · ARR" status="$1.24M" />
      <div className="flex-1 flex items-end gap-1.5 min-h-0">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{
              height: `${h}%`,
              background:
                i === bars.length - 1
                  ? "linear-gradient(180deg, #34d399 0%, #5b4ef7 100%)"
                  : "linear-gradient(180deg, rgba(165,180,255,0.55) 0%, rgba(91,78,247,0.18) 100%)",
              boxShadow:
                i === bars.length - 1
                  ? "0 -8px 20px -8px rgba(91,78,247,0.45)"
                  : undefined,
            }}
          />
        ))}
      </div>
      <PanelFooter left="Q1 → Q6 forecast" right="+18.4% YoY" />
    </div>
  );
}

function ExecutivePanel() {
  const kpis = [
    { label: "ROI", value: "3.4×", color: "#34d399" },
    { label: "Adoption", value: "82%", color: "#a5b4ff" },
    { label: "TTV", value: "11w", color: "#f5b86d" },
  ];
  return (
    <div className="h-full flex flex-col">
      <PanelHeader label="FY26 Roadmap" status="2 of 4 shipped" />
      <div className="grid grid-cols-3 gap-2 mb-3">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-lg bg-white/[0.06] ring-1 ring-white/10 px-2 py-2"
          >
            <div className="text-[8.5px] uppercase tracking-[0.12em] text-white/55 font-semibold leading-none">
              {k.label}
            </div>
            <div
              className="text-[15px] font-semibold tracking-tight tabular-nums leading-none mt-1.5"
              style={{ color: k.color }}
            >
              {k.value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 relative min-h-0">
        <svg viewBox="0 0 200 36" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <line x1="14" y1="14" x2="186" y2="14" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          {["Q1", "Q2", "Q3", "Q4"].map((q, i) => {
            const x = 22 + i * 52;
            const active = i <= 1;
            return (
              <g key={q}>
                {active && (
                  <circle cx={x} cy={14} r="8" fill="#a5b4ff" fillOpacity="0.18" />
                )}
                <circle
                  cx={x}
                  cy={14}
                  r="4"
                  fill={active ? "#a5b4ff" : "rgba(255,255,255,0.12)"}
                  stroke={active ? "#a5b4ff" : "rgba(255,255,255,0.3)"}
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={32}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill={active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)"}
                >
                  {q}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
