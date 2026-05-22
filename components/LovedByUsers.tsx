import Link from "next/link";
import Image from "next/image";

type CardKind = "infra" | "automation" | "analytics" | "integration";

const cards: { kind: CardKind; title: string; body: string; image: string; role: string }[] = [
  {
    kind: "infra",
    title: "Generative Intelligence",
    body: "Built to support scalable enterprise deployments with advanced AI environments.",
    image: "/generated/team1.jpg",
    role: "Head of Platform Engineering",
  },
  {
    kind: "automation",
    title: "Automation at Scale",
    body: "Optimize workflows for large-scale operations while improving productivity.",
    image: "/generated/team2.jpg",
    role: "VP, Business Operations",
  },
  {
    kind: "analytics",
    title: "Predictive Intelligence",
    body: "Build smarter business intelligence strategies with predictive analytics.",
    image: "/generated/team3.jpg",
    role: "Chief Data Officer",
  },
  {
    kind: "integration",
    title: "Vertical AI Agents",
    body: "Integrate AI systems into existing operational infrastructure and business processes.",
    image: "/generated/team4.jpg",
    role: "Director of AI Strategy",
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

const FAILURE_ITEMS: { label: string; text: string; icon: React.ReactNode }[] = [
  {
    label: "Broken foundation",
    text: "They're built on top of broken processes instead of redesigning them.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 8h6l2-2h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 16h6l2 2h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 11l3 1-3 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M15 7v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "Dead-end insights",
    text: "They produce insights nobody acts on.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-4 4 3 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="9" r="1.6" fill="currentColor" />
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: "Vendor lock-in",
    text: "They're maintained by vendors, not owned by your team.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="10" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="14.5" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Demo-grade, not prod-grade",
    text: "They impress in demos and disappear in production.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6h16M4 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M9 21h6M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 11l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const FAILURE_LIST_BODY = (
  <div className="mt-10 md:mt-14 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
    {FAILURE_ITEMS.map((item) => (
      <div
        key={item.label}
        className="group relative flex flex-col gap-5 rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.08] hover:ring-white/[0.16] hover:bg-white/[0.06] transition-colors p-7 md:p-8 min-h-[220px]"
      >
        <span
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl shrink-0 text-[#ffb59a] ring-1 ring-[#ff7a59]/25"
          style={{
            background:
              "linear-gradient(140deg, rgba(255,122,89,0.22) 0%, rgba(255,122,89,0.06) 100%)",
          }}
        >
          {item.icon}
        </span>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#ffb59a]/85 mb-2">
            {item.label}
          </p>
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
            className={`display-text text-[36px] sm:text-[52px] md:text-[64px] font-semibold text-balance tracking-tight ${
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
              Book a demo
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

        {showCards && (
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`group relative rounded-3xl overflow-hidden flex flex-col card-hover h-full ${
                  isLight
                    ? "bg-white ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(8,8,13,0.18)]"
                    : "bg-white/[0.04] ring-1 ring-white/[0.08]"
                }`}
              >
                <CardVisual kind={c.kind} image={c.image} role={c.role} />
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3
                    className={`text-[17px] md:text-[19px] font-semibold leading-[1.2] tracking-tight ${
                      isLight ? "text-[#08080d]" : "text-white"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`mt-3 text-[13.5px] md:text-[14px] flex-1 leading-relaxed ${
                      isLight ? "text-[#4a4a55]" : "text-white/65"
                    }`}
                  >
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

function CardVisual({ kind, image, role }: { kind: CardKind; image: string; role: string }) {
  const objectPosition = kind === "infra" ? "50% 0%" : "50% 50%";
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a14]">
      <Image
        src={image}
        alt={role}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      {/* Top fade for floating tag legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,13,0.45) 0%, transparent 30%, transparent 55%, rgba(8,8,13,0.7) 100%)",
        }}
      />
      {/* Tinted overlay matching theme */}
      <ThemeTint kind={kind} />

      {/* Top-left role badge — humanizes the card */}
      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-2.5 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] pulse-soft" />
        <span className="text-[9.5px] font-semibold text-white tracking-tight">{role}</span>
      </div>

      {/* Bottom-right thematic indicator */}
      {kind === "infra" && <InfraOverlay />}
      {kind === "automation" && <AutomationOverlay />}
      {kind === "analytics" && <AnalyticsOverlay />}
      {kind === "integration" && <IntegrationOverlay />}
    </div>
  );
}

function ThemeTint({ kind }: { kind: CardKind }) {
  const tints: Record<CardKind, string> = {
    infra:
      "linear-gradient(135deg, rgba(91,78,247,0.32) 0%, transparent 50%, rgba(91,78,247,0.18) 100%)",
    automation:
      "linear-gradient(135deg, rgba(192,38,211,0.28) 0%, transparent 50%, rgba(109,0,204,0.2) 100%)",
    analytics:
      "linear-gradient(135deg, rgba(91,78,247,0.3) 0%, transparent 50%, rgba(34,197,94,0.18) 100%)",
    integration:
      "linear-gradient(135deg, rgba(91,78,247,0.3) 0%, transparent 50%, rgba(255,125,107,0.18) 100%)",
  };
  return <div aria-hidden className="absolute inset-0 mix-blend-overlay" style={{ background: tints[kind] }} />;
}

function InfraOverlay() {
  return (
    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5">
      <div className="inline-flex w-fit items-center gap-1.5 rounded-md bg-black/55 backdrop-blur ring-1 ring-white/15 px-2 py-1">
        <span className="h-1 w-1 rounded-full bg-[#22c55e] pulse-soft" />
        <span className="text-[8.5px] font-semibold text-white/95">12 regions · 99.99% uptime</span>
      </div>
      <div className="flex gap-1 max-w-full">
        {["us-east", "eu-west", "ap-south", "us-west"].map((r, i) => (
          <span
            key={r}
            className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/15 backdrop-blur ring-1 ring-white/15 text-white/85 truncate"
            style={{ opacity: 1 - i * 0.18 }}
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}

function AutomationOverlay() {
  return (
    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
      <div className="inline-flex items-center gap-1.5 rounded-md bg-black/55 backdrop-blur ring-1 ring-white/15 px-2 py-1">
        <span
          className="inline-flex h-3 w-3 items-center justify-center rounded text-white"
          style={{
            background:
              "linear-gradient(135deg, #f24e1e 0%, #c026d3 55%, #6d00cc 100%)",
          }}
        >
          <svg width="7" height="7" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v3M7 9v3M2 7h3M9 7h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-[8.5px] font-semibold text-white/95">1,284 ops/min</span>
      </div>
      <div className="flex -space-x-1">
        {["#ea4335", "#c026d3", "#36c5f0", "#10b981"].map((c, i) => (
          <span
            key={i}
            className="h-4 w-4 rounded-full ring-1 ring-white/30 shadow"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  );
}

function AnalyticsOverlay() {
  return (
    <div className="absolute bottom-3 left-3 right-3 rounded-md bg-black/55 backdrop-blur ring-1 ring-white/15 px-2.5 py-1.5 flex items-center justify-between gap-2">
      <div>
        <div className="text-[7.5px] uppercase tracking-wider text-white/55 font-semibold">Revenue</div>
        <div className="text-[11px] font-semibold text-white tracking-tight tabular-nums leading-none mt-0.5">$1.24M</div>
      </div>
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
        <path
          d="M0 18 L 10 14 L 18 16 L 26 8 L 38 10 L 50 4 L 60 2"
          stroke="#a5b4ff"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="2" r="2" fill="#a5b4ff" />
      </svg>
      <div className="text-[9px] font-semibold text-[#34d399]">+18.4%</div>
    </div>
  );
}

function IntegrationOverlay() {
  return (
    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
      <div className="inline-flex items-center gap-1.5 rounded-md bg-black/55 backdrop-blur ring-1 ring-white/15 px-2 py-1">
        <span className="h-1 w-1 rounded-full bg-[#22c55e] pulse-soft" />
        <span className="text-[8.5px] font-semibold text-white/95">200+ integrations</span>
      </div>
      <div className="flex -space-x-1.5">
        {[
          { bg: "#ea4335", letter: "G" },
          { bg: "#1a73e8", letter: "S" },
          { bg: "#7c3aed", letter: "N" },
          { bg: "#10b981", letter: "H" },
        ].map((a, i) => (
          <span
            key={i}
            className="h-5 w-5 rounded-md flex items-center justify-center text-white text-[8.5px] font-bold ring-1 ring-white/25 shadow"
            style={{ background: a.bg }}
          >
            {a.letter}
          </span>
        ))}
      </div>
    </div>
  );
}
