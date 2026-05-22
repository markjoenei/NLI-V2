type Platform = "microsoft" | "aws";

const cards: {
  platform: Platform;
  title: string;
  body: string;
  badge: string;
  cta: string;
}[] = [
  {
    platform: "microsoft",
    title: "Microsoft",
    body: "Agent Platform AI solutions within Microsoft environments, including Azure AI Foundry, Microsoft Teams, Microsoft 365 Copilot, and enterprise cloud infrastructure.",
    badge: "Microsoft Partner",
    cta: "Explore Microsoft stack",
  },
  {
    platform: "aws",
    title: "AWS",
    body: "Agent Platform and AI solutions integrated with AWS services including Amazon Bedrock, Amazon Q, and Amazon SageMaker for enterprise-scale deployment.",
    badge: "AWS Partner",
    cta: "Explore AWS stack",
  },
];

export default function Skills() {
  return (
    <section
      className="relative py-24 md:py-32 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #08080d 0%, #100c2e 55%, #08080d 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[1100px] blur-3xl opacity-50 breathe"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,78,247,0.5), transparent 70%)",
        }}
      />
      <div className="relative container-x">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/55 mb-5">
            Partner ecosystem
          </p>
          <h2 className="display-text text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-white tracking-tight text-balance">
            The skills, insights, and support to{" "}
            <span className="editorial text-[#989898]">help you scale</span>
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c) => (
            <article
              key={c.platform}
              className="group relative overflow-hidden rounded-3xl min-h-[440px] flex flex-col card-hover text-white bg-white/[0.04] ring-1 ring-white/[0.08]"
            >
              <PlatformVisual platform={c.platform} />
              <div className="relative p-7 md:p-8 flex flex-col flex-1">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide bg-white/10 text-white backdrop-blur ring-1 ring-white/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a5b4ff]" />
                  {c.badge}
                </span>
                <h3 className="mt-5 text-[24px] md:text-[28px] font-semibold leading-[1.15] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] md:text-[15px] leading-relaxed text-white/65 max-w-[44ch]">
                  {c.body}
                </p>
                <button className="reveal-on-hover mt-6 self-start inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white">
                  {c.cta}
                  <span className="reveal-arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformVisual({ platform }: { platform: Platform }) {
  if (platform === "microsoft") {
    return (
      <div
        className="relative h-44 md:h-52 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1a3d 0%, #1a2d5c 55%, #0a1428 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(50% 45% at 50% 50%, rgba(0,120,212,0.55), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0.6px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-1.5 p-1">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-sm shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)]" style={{ background: "#f25022" }} />
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-sm shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)]" style={{ background: "#7fba00" }} />
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-sm shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)]" style={{ background: "#00a4ef" }} />
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-sm shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)]" style={{ background: "#ffb900" }} />
            </div>
          </div>
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {["Azure AI", "Teams", "Copilot"].map((p) => (
            <span key={p} className="inline-flex items-center px-1.5 py-0.5 rounded bg-white/10 backdrop-blur ring-1 ring-white/15 text-[9px] font-semibold text-white/85">
              {p}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 backdrop-blur ring-1 ring-white/15 px-2 py-1">
          <span className="h-1 w-1 rounded-full bg-[#00a4ef] pulse-soft" />
          <span className="text-[8.5px] font-semibold text-white/85">Microsoft certified</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative h-44 md:h-52 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a1408 0%, #2d1f0a 55%, #14100a 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 50%, rgba(255,153,0,0.45), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0.6px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative inline-flex flex-col items-center gap-2">
          <span className="text-[36px] md:text-[44px] leading-none font-bold tracking-[-0.04em] text-white">
            aws
          </span>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" aria-hidden>
            <path
              d="M3 12 C 15 18, 45 18, 57 12"
              stroke="#ff9900"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M48 9 L 57 12 L 50 17"
              fill="#ff9900"
            />
          </svg>
        </div>
      </div>
      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
        {["Bedrock", "Amazon Q", "SageMaker"].map((p) => (
          <span key={p} className="inline-flex items-center px-1.5 py-0.5 rounded bg-white/10 backdrop-blur ring-1 ring-white/15 text-[9px] font-semibold text-white/85">
            {p}
          </span>
        ))}
      </div>
      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 backdrop-blur ring-1 ring-white/15 px-2 py-1">
        <span className="h-1 w-1 rounded-full bg-[#ff9900] pulse-soft" />
        <span className="text-[8.5px] font-semibold text-white/85">AWS Advanced Partner</span>
      </div>
    </div>
  );
}
