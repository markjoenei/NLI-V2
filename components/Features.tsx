import Image from "next/image";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

type V = React.ComponentProps<typeof Placeholder>["variant"];

export default function Features() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-14 md:mb-20">
          <div className="max-w-[900px]">
            <p className="eyebrow mb-5">The &ldquo;Layer&rdquo; Concept</p>
            <h2 className="display-text text-[28px] sm:text-[36px] md:text-[44px] lg:text-[60px] font-semibold text-[#08080d] tracking-tight leading-[1.05]">
              <span className="block">Your Business Already</span>
              <span className="block">Has the Infrastructure.</span>
              <span className="editorial text-[#989898] block">It&apos;s Missing the Next Layer.</span>
            </h2>
          </div>
          <div className="max-w-[680px]">
            <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#4a4a55] text-pretty">
              A custom intelligence layer that sits on top of your existing tech stack — connecting your data, systems, and processes to predict outcomes and execute action automatically.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <FeatureBig
            className="col-span-12"
            title="Intelligence Layer"
            body="A custom intelligence layer that sits on top of your existing tech stack — connecting your data, systems, and processes to predict outcomes and execute action automatically."
            variant="portrait-warm"
            badge=""
          />

          <FeatureSmall
            className="col-span-12 md:col-span-6 lg:col-span-4"
            title="AI Automation"
            body="Workflows that run without humans"
            variant="scene-purple"
            badge=""
            tone="purple"
          />
          <FeatureSmall
            className="col-span-12 md:col-span-6 lg:col-span-4"
            title="Data Layer"
            body="Your data, finally speaking to you"
            variant="scene-light"
            badge=""
            tone="photo"
            image="/generated/data-layer.avif"
          />
          <FeatureSmall
            className="col-span-12 md:col-span-6 lg:col-span-4"
            title="Systems Layer"
            body="ERP, CRM, cloud infrastructure"
            variant="scene-purple"
            badge=""
            tone="systems"
          />

          <FeatureWide
            className="col-span-12"
            title="People Layer"
            body="Your team, freed to do real work"
            variant="portrait-cool"
            badge=""
          />
        </div>
      </div>
    </section>
  );
}

type CardBase = {
  className?: string;
  title: string;
  body: string;
  variant: V;
  badge: string;
};

function FeatureBig({
  className = "",
  title,
  body,
  variant,
  badge,
  features,
}: CardBase & { features?: string[] }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f7f6fa] to-[#eeeef5] ring-1 ring-black/[0.04] card-hover ${className}`}
    >
      <div className="grid md:grid-cols-[1fr_1.05fr] items-stretch">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[460px] overflow-hidden bg-[#0a0a14]">
          <Image
            src="/generated/intelligence-layer.png"
            alt="Intelligence Layer — predicts, decides, executes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="relative p-7 md:p-12 lg:p-14 flex flex-col justify-center">
          <Badge>{badge}</Badge>
          <h3 className="mt-4 text-[34px] md:text-[44px] lg:text-[52px] font-semibold text-[#08080d] max-w-[18ch] tracking-tight leading-[1.05]">
            {title}
          </h3>
          <p className="mt-5 text-[18px] md:text-[20px] lg:text-[22px] text-[#3a3a4a] max-w-[42ch] leading-relaxed">{body}</p>
          {features && features.length > 0 && <FeaturesList items={features} />}
        </div>
      </div>
    </article>
  );
}

function FeaturesList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  return (
    <div className="mt-7">
      <p
        className={`text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 ${
          tone === "dark" ? "text-white/65" : "text-[#5a5a6a]"
        }`}
      >
        Features
      </p>
      <ul className="space-y-2.5">
        {items.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md shrink-0 ${
                tone === "dark"
                  ? "bg-white/15 text-white ring-1 ring-white/15"
                  : "bg-[#5b4ef7]/10 text-[#5b4ef7]"
              }`}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M3 6L5 8L9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span
              className={`text-[14px] md:text-[15px] font-medium leading-snug ${
                tone === "dark" ? "text-white" : "text-[#08080d]"
              }`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureWide({
  className = "",
  title,
  body,
  badge,
  features,
}: Omit<CardBase, "variant"> & { variant?: V; features?: string[] }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl ring-1 ring-black/[0.04] card-hover ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #ebecff 0%, #eee9ff 50%, #f6f3ff 100%)",
      }}
    >
      <div className="grid md:grid-cols-[1.25fr_1fr] items-stretch">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px] overflow-hidden bg-[#0a0a14]">
          <Image
            src="/generated/people-layer.avif"
            alt="People Layer — your team, freed to do real work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
        <div className="relative p-7 md:p-10 lg:p-12 flex flex-col justify-center">
          <Badge>{badge}</Badge>
          <h3 className="mt-4 text-[34px] md:text-[44px] lg:text-[52px] font-semibold text-[#08080d] max-w-[20ch] tracking-tight leading-[1.05]">{title}</h3>
          <p className="mt-5 text-[18px] md:text-[20px] lg:text-[22px] text-[#3a3a4a] max-w-[42ch] leading-relaxed">{body}</p>
          {features && features.length > 0 && <FeaturesList items={features} />}
        </div>
      </div>
    </article>
  );
}


type SmallProps = CardBase & {
  tone?: "light" | "purple" | "image" | "palette" | "systems" | "photo";
  features?: string[];
  image?: string;
};

function FeatureSmall({
  className = "",
  title,
  body,
  variant,
  badge,
  tone = "light",
  features,
  image,
}: SmallProps) {
  if (tone === "photo" && image) {
    return (
      <article className={`group relative overflow-hidden rounded-3xl bg-[#0a0a14] min-h-[460px] card-hover ${className}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: "50% 30%" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,13,0.15) 0%, rgba(8,8,13,0.4) 55%, rgba(8,8,13,0.92) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-70"
          style={{
            background:
              "linear-gradient(135deg, rgba(91,78,247,0.22) 0%, transparent 55%, rgba(91,78,247,0.12) 100%)",
          }}
        />
        <div className="relative p-7 md:p-8 flex flex-col h-full justify-end text-white">
          <Badge tone="dark">{badge}</Badge>
          <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold max-w-[20ch] tracking-tight leading-[1.1]">
            {title}
          </h3>
          <p className="mt-3 text-[14.5px] md:text-[15px] text-white/80 max-w-[42ch] leading-relaxed">
            {body}
          </p>
          {features && features.length > 0 && <FeaturesList items={features} tone="dark" />}
        </div>
      </article>
    );
  }

  if (tone === "purple") {
    return (
      <article
        className={`group relative overflow-hidden rounded-3xl text-white flex flex-col h-full min-h-[460px] card-hover ${className}`}
        style={{
          background:
            "linear-gradient(140deg, #6f63ff 0%, #5b4ef7 55%, #4031c4 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.15), 0 24px 48px -24px rgba(91,78,247,0.4)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.4), transparent 70%)" }}
        />
        <AutomationVisual />
        <div className="relative p-7 md:p-8 flex flex-col flex-1">
          <Badge tone="dark">{badge}</Badge>
          <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold max-w-[18ch] tracking-tight leading-[1.1]">{title}</h3>
          <p className="mt-3 text-[14.5px] md:text-[15px] text-white/80 max-w-[38ch] leading-relaxed">{body}</p>
          {features && features.length > 0 && <FeaturesList items={features} tone="dark" />}
        </div>
      </article>
    );
  }

  if (tone === "systems") {
    return (
      <article
        className={`group relative overflow-hidden rounded-3xl text-white flex flex-col h-full min-h-[460px] card-hover ${className}`}
        style={{
          background:
            "linear-gradient(140deg, #2a2350 0%, #1a1640 55%, #0e0b2a 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 48px -24px rgba(20,15,50,0.5)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, rgba(91,78,247,0.6), transparent 70%)" }}
        />
        <SystemsLayerVisual />
        <div className="relative p-7 md:p-8 flex flex-col flex-1">
          <Badge tone="dark">{badge}</Badge>
          <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold max-w-[18ch] tracking-tight leading-[1.1]">{title}</h3>
          <p className="mt-3 text-[14.5px] md:text-[15px] text-white/80 max-w-[38ch] leading-relaxed">{body}</p>
          {features && features.length > 0 && <FeaturesList items={features} tone="dark" />}
        </div>
      </article>
    );
  }

  if (tone === "image") {
    return (
      <article className={`group relative overflow-hidden rounded-3xl bg-[#1a1640] min-h-[340px] card-hover ${className}`}>
        <Placeholder variant={variant} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative p-7 md:p-9 flex flex-col h-full justify-end text-white">
          <Badge tone="dark">{badge}</Badge>
          <h3 className="mt-4 text-[22px] md:text-[26px] font-semibold max-w-[20ch] tracking-tight leading-[1.1]">{title}</h3>
          <p className="mt-3 text-[14.5px] text-white/80 max-w-[42ch] leading-relaxed">{body}</p>
        </div>
      </article>
    );
  }

  if (tone === "palette") {
    return (
      <article
        className={`group relative overflow-hidden rounded-3xl p-7 md:p-9 min-h-[340px] flex flex-col card-hover ${className}`}
        style={{
          background:
            "linear-gradient(140deg, #ffe7df 0%, #ffd0c0 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.5), 0 12px 32px -16px rgba(255,125,107,0.3)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#08080d]/60 font-bold">Acme Inc · Brand</span>
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-white/60 p-4 flex flex-col gap-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#08080d]/50">Type</span>
            <div className="flex flex-col gap-1">
              {[
                { c: "Aa", f: "var(--font-instrument-serif), Georgia, serif", style: "italic" },
                { c: "Aa", f: "var(--font-inter-tight), system-ui", style: "normal" },
                { c: "Aa", f: "ui-monospace, Menlo, monospace", style: "normal" },
              ].map((s, i) => (
                <span
                  key={i}
                  className="text-[24px] font-semibold text-[#08080d] leading-none"
                  style={{ fontFamily: s.f, fontStyle: s.style }}
                >
                  {s.c}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-white/60 p-4 flex flex-col gap-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#08080d]/50">Palette</span>
            <div className="grid grid-cols-3 gap-1.5">
              {["#5b4ef7", "#ff7a59", "#08080d", "#f5b86d", "#e7e3ff", "#ffffff"].map((c) => (
                <div
                  key={c}
                  className="aspect-square rounded-md ring-1 ring-black/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f7f6fa] to-[#efeff5] ring-1 ring-black/[0.04] min-h-[460px] card-hover ${className}`}
    >
      <div className="flex flex-col h-full">
        {features && features.length > 0 ? (
          <AssistantsVisual />
        ) : null}
        <div className="p-7 md:p-8">
          <Badge>{badge}</Badge>
          <h3 className="mt-3 text-[21px] md:text-[24px] font-semibold text-[#08080d] max-w-[20ch] tracking-tight leading-[1.15]">{title}</h3>
          <p className="mt-3 text-[14.5px] text-[#3a3a4a] max-w-[42ch] leading-relaxed">{body}</p>
          {features && features.length > 0 && <FeaturesList items={features} />}
        </div>
        {(!features || features.length === 0) && (
          <div className="relative flex-1 min-h-[160px] mx-5 md:mx-7 mb-5 md:mb-7 rounded-2xl overflow-hidden bg-white ring-1 ring-black/[0.05] shadow-[0_8px_24px_-12px_rgba(8,8,13,0.15)]">
            <Placeholder variant={variant} />
          </div>
        )}
      </div>
    </article>
  );
}

function AutomationVisual() {
  return (
    <div
      className="relative h-48 md:h-56 overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #1a1640 0%, #120c2e 55%, #0a0a18 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.13) 0.6px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 50%, rgba(192,38,211,0.32), transparent 70%)",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="auto-card-line-1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f24e1e" />
            <stop offset="60%" stopColor="#c026d3" />
            <stop offset="100%" stopColor="#6d00cc" />
          </linearGradient>
          <linearGradient id="auto-card-line-2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6d00cc" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="auto-card-line-3" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6d00cc" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        <path d="M 70 100 C 130 100, 150 100, 195 100" stroke="url(#auto-card-line-1)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 235 100 C 270 100, 290 55, 335 55" stroke="url(#auto-card-line-2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 235 100 C 270 100, 290 145, 335 145" stroke="url(#auto-card-line-3)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 4" />

        <circle cx="130" cy="100" r="3" fill="#c026d3" />
        <circle cx="280" cy="80" r="3" fill="#a855f7" />
        <circle cx="280" cy="120" r="3" fill="#ec4899" opacity="0.7" />
      </svg>

      <div className="absolute inset-0">
        <div className="absolute" style={{ top: "50%", left: "17%", transform: "translate(-50%, -50%)" }}>
          <MakeCardNode brand="gmail" step="1" />
        </div>
        <div className="absolute" style={{ top: "50%", left: "54%", transform: "translate(-50%, -50%)" }}>
          <MakeCardNode brand="ai" step="2" active />
        </div>
        <div className="absolute" style={{ top: "27%", left: "85%", transform: "translate(-50%, -50%)" }}>
          <MakeCardNode brand="slack" step="3" small />
        </div>
        <div className="absolute" style={{ top: "73%", left: "85%", transform: "translate(-50%, -50%)" }}>
          <MakeCardNode brand="notion" step="4" small />
        </div>
      </div>

      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 backdrop-blur ring-1 ring-white/15 px-2 py-1">
        <span className="h-1 w-1 rounded-full bg-[#4ade80] pulse-soft" />
        <span className="text-[9px] font-semibold text-white/90">Live · 1,284 ops/min</span>
      </div>
      <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur ring-1 ring-white/15 px-1.5 py-1 text-[8.5px] font-semibold text-white/80">
        <span className="text-white/55 hover:text-white">−</span>
        <span>50%</span>
        <span className="text-white/55 hover:text-white">+</span>
      </div>
      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 backdrop-blur ring-1 ring-white/15 px-2 py-1">
        <span
          className="inline-flex h-3.5 w-3.5 items-center justify-center rounded text-white"
          style={{
            background:
              "linear-gradient(135deg, #f24e1e 0%, #c026d3 55%, #6d00cc 100%)",
          }}
        >
          <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v3M7 9v3M2 7h3M9 7h3M3.5 3.5l2 2M8.5 8.5l2 2M3.5 10.5l2-2M8.5 5.5l2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-[9px] font-semibold text-white/90">Lead routing</span>
      </div>
    </div>
  );
}

function SystemsLayerVisual() {
  const systems = [
    {
      key: "erp",
      label: "SAP ERP",
      kind: "ERP",
      status: "Synced",
      records: "284,512",
      color: "#1cb5e0",
      icon: (
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
          <rect x="1.5" y="2" width="11" height="3" rx="0.5" fill="currentColor" />
          <rect x="1.5" y="5.8" width="11" height="3" rx="0.5" fill="currentColor" opacity="0.7" />
          <rect x="1.5" y="9.6" width="11" height="2.4" rx="0.5" fill="currentColor" opacity="0.4" />
        </svg>
      ),
    },
    {
      key: "crm",
      label: "Salesforce",
      kind: "CRM",
      status: "Live",
      records: "48,910",
      color: "#00a1e0",
      icon: (
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
          <path
            d="M5 4c-1.5 0-2.7 1.1-2.7 2.5 0 1.4 1.2 2.5 2.7 2.5h4.6c1.4 0 2.4-1 2.4-2.2 0-1-0.7-1.9-1.7-2.1 0-1.5-1.3-2.7-2.9-2.7-1 0-1.8 0.5-2.4 1.2-0.3-0.1-0.5-0.2-0.8-0.2"
            stroke="currentColor"
            strokeWidth="1.1"
            fill="none"
          />
        </svg>
      ),
    },
    {
      key: "cloud",
      label: "AWS · Azure",
      kind: "Cloud",
      status: "Healthy",
      records: "37 svcs",
      color: "#ff9d4d",
      icon: (
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
          <path
            d="M4 10.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.2 0.9-2.3 2.1-2.5 0.3-1.7 1.8-3 3.6-3 1.9 0 3.4 1.4 3.6 3.2 1.3 0.1 2.2 1.1 2.2 2.4 0 1.3-1.1 2.4-2.4 2.4H4Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative px-4 pt-4 pb-1 md:px-5 md:pt-5">
      {/* Browser chrome */}
      <div
        className="relative rounded-t-xl bg-[#13102e] ring-1 ring-white/10 overflow-hidden"
        style={{
          boxShadow:
            "0 18px 48px -18px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="h-6 px-2.5 flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0e0b2a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto h-3.5 px-2 rounded bg-white/[0.06] ring-1 ring-white/10 text-[8.5px] text-white/55 inline-flex items-center gap-1">
            <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
              <rect x="2" y="4.5" width="6" height="4" rx="0.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <path d="M3.5 4.5V3a1.5 1.5 0 0 1 3 0v1.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
            </svg>
            app.nextlayer.ai/systems
          </div>
        </div>

        {/* App body */}
        <div className="p-3">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-white/55">Connected systems</span>
              <span className="inline-flex items-center gap-1 rounded bg-[#22c55e]/15 ring-1 ring-[#22c55e]/30 px-1.5 py-[1px]">
                <span className="relative h-1 w-1">
                  <span className="absolute inset-0 rounded-full bg-[#22c55e] pulse-soft" />
                  <span className="relative h-1 w-1 rounded-full bg-[#22c55e]" />
                </span>
                <span className="text-[8px] font-semibold text-[#86efac]">All up</span>
              </span>
            </div>
            <span className="text-[8.5px] text-white/40 font-medium tabular-nums">3 of 3</span>
          </div>

          <div className="space-y-1.5">
            {systems.map((s) => (
              <div
                key={s.key}
                className="flex items-center gap-2 rounded-md bg-white/[0.04] ring-1 ring-white/[0.06] px-2 py-1.5"
              >
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded text-white shrink-0"
                  style={{ background: s.color }}
                >
                  {s.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold text-white truncate">{s.label}</span>
                    <span className="text-[7.5px] uppercase tracking-wider font-semibold text-white/40">{s.kind}</span>
                  </div>
                  <div className="text-[8.5px] text-white/45 tabular-nums">{s.records} records</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[8.5px] font-semibold text-[#86efac] shrink-0">
                  <span className="relative h-1 w-1">
                    <span className="absolute inset-0 rounded-full bg-[#22c55e] pulse-soft" />
                    <span className="relative h-1 w-1 rounded-full bg-[#22c55e]" />
                  </span>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MakeCardNode({
  brand,
  step,
  active = false,
  small = false,
}: {
  brand: "gmail" | "ai" | "slack" | "notion";
  step: string;
  active?: boolean;
  small?: boolean;
}) {
  const size = small ? "h-9 w-9 md:h-10 md:w-10" : "h-12 w-12 md:h-14 md:w-14";
  return (
    <div className="relative">
      {active && (
        <span aria-hidden className="absolute -inset-1.5 rounded-full ring-2 ring-[#c026d3]/60 animate-pulse" />
      )}
      <span className="absolute -top-1 -right-1 z-10 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[7.5px] font-bold text-black/70 shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
        {step}
      </span>
      {brand === "gmail" && (
        <div className={`${size} rounded-full flex items-center justify-center bg-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] ring-2 ring-[#ea4335]/30`}>
          <svg width="22" height="14" viewBox="0 0 24 18" fill="none">
            <path d="M2 2v14h4V8l6 4 6-4v8h4V2l-10 7L2 2Z" fill="#ea4335" />
          </svg>
        </div>
      )}
      {brand === "ai" && (
        <div
          className={`${size} rounded-full flex items-center justify-center text-white shadow-[0_10px_24px_-4px_rgba(192,38,211,0.55)] ring-2 ring-white/15`}
          style={{
            background:
              "linear-gradient(135deg, #f24e1e 0%, #c026d3 55%, #6d00cc 100%)",
          }}
        >
          <span className="text-[12px] md:text-[14px] font-bold tracking-tight">AI</span>
        </div>
      )}
      {brand === "slack" && (
        <div className={`${size} rounded-full flex items-center justify-center bg-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] ring-2 ring-white/10`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="6" height="2.5" rx="1.25" fill="#e01e5a" />
            <rect x="11" y="3" width="2.5" height="6" rx="1.25" fill="#36c5f0" />
            <rect x="15" y="11" width="6" height="2.5" rx="1.25" fill="#2eb67d" />
            <rect x="11" y="15" width="2.5" height="6" rx="1.25" fill="#ecb22e" />
          </svg>
        </div>
      )}
      {brand === "notion" && (
        <div className={`${size} rounded-full flex items-center justify-center bg-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] ring-2 ring-white/10`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 4h4l8 14V4h2v16h-4L7 6v14H5V4Z" fill="#08080d" />
          </svg>
        </div>
      )}
    </div>
  );
}

function AssistantsVisual() {
  return (
    <div
      className="relative h-44 md:h-48 overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #f0eefb 0%, #e8e2fc 60%, #ffe8e2 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(8,8,13,0.06) 0.7px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-5 py-4">
        {/* Avatar row */}
        <div className="flex -space-x-2.5 mb-1">
          {["/generated/gen2.jpg", "/generated/gen4.jpg", "/generated/gen3.jpg"].map((src, i) => (
            <div
              key={i}
              className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.15)]"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="36px" />
            </div>
          ))}
          <div className="relative h-9 w-9 rounded-full ring-2 ring-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.15)] flex items-center justify-center text-[10px] font-bold text-[#5b4ef7]" style={{ background: "#eeebff" }}>
            +9
          </div>
        </div>

        {/* Chat bubbles */}
        <div className="w-full max-w-[260px] space-y-1.5">
          <div className="self-start max-w-[80%] rounded-xl rounded-tl-sm bg-white ring-1 ring-black/[0.05] px-2.5 py-1.5 shadow-[0_2px_6px_-2px_rgba(8,8,13,0.1)]">
            <div className="text-[9.5px] font-semibold text-[#08080d] leading-snug">Hi! I&apos;ve flagged 3 enterprise leads.</div>
          </div>
          <div className="ml-auto max-w-[60%] rounded-xl rounded-tr-sm px-2.5 py-1.5 text-white text-[9.5px] font-medium shadow-[0_2px_6px_-2px_rgba(91,78,247,0.3)]"
            style={{ background: "linear-gradient(135deg, #6f63ff 0%, #5b4ef7 100%)" }}
          >
            Top one?
          </div>
          <div className="self-start max-w-[85%] rounded-xl rounded-tl-sm bg-white ring-1 ring-black/[0.05] px-2.5 py-1.5 shadow-[0_2px_6px_-2px_rgba(8,8,13,0.1)]">
            <div className="text-[9.5px] text-[#08080d] leading-snug">
              Acme Inc · <span className="font-semibold text-[#5b4ef7]">94% fit</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur ring-1 ring-black/[0.05] px-2 py-1 text-[9px] font-semibold text-[#08080d]">
        <span className="h-1 w-1 rounded-full bg-[#22c55e] pulse-soft" />
        12 agents online
      </div>
      <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md bg-white/95 backdrop-blur ring-1 ring-black/[0.05] px-2 py-1 text-[9px] font-semibold text-[#08080d]">
        <span className="text-[#5b4ef7]">GPT-4o</span>
      </div>
    </div>
  );
}

function FeatureBullet({
  className = "",
  title,
  body,
  cta,
  icon,
}: {
  className?: string;
  title: string;
  body: string;
  cta: string;
  icon: "refresh" | "export" | "chart";
}) {
  return (
    <article
      className={`group relative rounded-3xl bg-white ring-1 ring-black/[0.06] p-7 md:p-8 flex flex-col card-hover ${className}`}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eeebff] text-[#5b4ef7] mb-5 ring-1 ring-[#5b4ef7]/10">
        <BulletIcon name={icon} />
      </span>
      <h3 className="text-[19px] md:text-[21px] font-semibold text-[#08080d] leading-[1.2] max-w-[22ch] tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-[14.5px] text-[#3a3a4a] flex-1 leading-relaxed">{body}</p>
      <button className="reveal-on-hover mt-6 self-start inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#08080d]">
        {cta}
        <span className="reveal-arrow">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </article>
  );
}

function BulletIcon({ name }: { name: "refresh" | "export" | "chart" }) {
  if (name === "refresh")
    return (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M3.5 8.5C4.5 5.5 7 4 10 4C12.5 4 15 5.5 16 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16.5 11.5C15.5 14.5 13 16 10 16C7.5 16 5 14.5 4 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16 4V8H12M4 16V12H8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === "export")
    return (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 12V3M10 3L6.5 6.5M10 3L13.5 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12V15C3 16.1 3.9 17 5 17H15C16.1 17 17 16.1 17 15V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 16H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5 12L9 8L12 11L17 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5H17V9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Badge({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  if (!children) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
        tone === "dark"
          ? "bg-white/10 text-white backdrop-blur ring-1 ring-white/15"
          : "bg-white text-[#08080d] ring-1 ring-black/[0.06] shadow-[0_1px_2px_rgba(8,8,13,0.04)]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "dark" ? "bg-white" : "bg-[#5b4ef7]"}`} />
      {children}
    </span>
  );
}
