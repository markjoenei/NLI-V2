import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden grain text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover -z-10"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,16,0.45) 0%, rgba(8,8,16,0.55) 55%, rgba(8,8,16,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[1100px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,78,247,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-[420px] w-[420px] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,167,140,0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-24 h-[420px] w-[420px] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(157,140,255,0.55), transparent 70%)",
        }}
      />

      <div className="relative container-x pt-20 md:pt-28 pb-8 md:pb-12 text-center">
        <h1 className="display-text mx-auto max-w-[22ch] text-[30px] sm:text-[42px] md:text-[56px] lg:text-[68px] font-semibold text-white text-balance drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
          Everyone&apos;s Adding AI.
          <br />
          <span className="editorial text-[#989898] relative">
            Almost No One Is Adding Intelligence.
          </span>
        </h1>

        <p className="mx-auto mt-7 md:mt-8 max-w-[38rem] text-[16px] md:text-[19px] leading-[1.55] text-white/75 text-pretty">
          There&apos;s a difference between bolting AI onto a broken process and building an intelligence layer that makes your entire operation smarter. That&apos;s the gap. And it&apos;s costing you more than you think.
        </p>
      </div>

      <div className="relative container-x pb-16 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-10 bottom-0 mx-auto max-w-[1200px] blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(91,78,247,0.28) 0%, transparent 70%)",
          }}
        />
        <DashboardMockup />
      </div>

      <TrustLogosMarquee />
    </section>
  );
}

function TrustLogosMarquee() {
  const items: BrandKind[] = [
    "meta",
    "kelloggs",
    "cisco",
    "seagate",
    "nationwide",
    "hbo",
  ];
  return (
    <div className="relative bg-white">
      <div className="relative overflow-hidden py-7 md:py-9">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 z-10"
          style={{ background: "linear-gradient(90deg, #ffffff, transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 z-10"
          style={{ background: "linear-gradient(270deg, #ffffff, transparent)" }}
        />
        <div
          className="flex w-max items-center will-change-transform"
          style={{ animation: "marqueeScroll 32s linear infinite" }}
        >
          {[0, 1].map((dup) =>
            items.map((kind) => (
              <BrandLogo key={`${dup}-${kind}`} kind={kind} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

type BrandKind = "meta" | "kelloggs" | "cisco" | "seagate" | "nationwide" | "hbo";

function BrandLogo({ kind }: { kind: BrandKind }) {
  const wrap = "inline-flex items-center justify-center gap-2 px-10 md:px-14 h-14 shrink-0";

  switch (kind) {
    case "meta":
      return (
        <span className={wrap}>
          <svg width="32" height="20" viewBox="0 0 60 38" fill="none" aria-label="Meta">
            <defs>
              <linearGradient id="meta-grad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0081fb" />
                <stop offset="100%" stopColor="#0064e0" />
              </linearGradient>
            </defs>
            <path
              d="M9 9c-3 0-5 3-5 10 0 6 2 10 5 10 3 0 5-2 8-7l4-7c-4-4-7-6-12-6Zm0 4c2 0 3 1 6 5l-4 6c-2 4-3 5-4 5-1 0-2-2-2-6 0-7 1-10 4-10Zm32-4c-5 0-8 2-12 6l-4 7c3 5 5 7 8 7 3 0 5-4 5-10 0-7-2-10 3-10Zm0 4c3 0 4 3 4 10 0 4-1 6-2 6-1 0-2-1-4-5l-4-6c3-4 4-5 6-5Z"
              fill="url(#meta-grad)"
            />
          </svg>
          <span className="text-[24px] leading-none font-medium tracking-[-0.02em] text-[#1c1e21]">Meta</span>
        </span>
      );
    case "kelloggs":
      return (
        <span className={wrap}>
          <span
            className="text-[26px] leading-none font-bold italic tracking-[-0.015em] text-[#e8252e]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Kellogg&apos;s
          </span>
        </span>
      );
    case "cisco":
      return (
        <span className={wrap}>
          <span className="inline-flex flex-col items-center gap-[5px] text-[#1c1e21]">
            <span className="inline-flex items-end gap-[2px] h-[14px]">
              {[6, 10, 14, 10, 6, 10, 14, 10, 6].map((h, i) => (
                <span
                  key={i}
                  className="w-[2px] bg-current rounded-[1px]"
                  style={{ height: `${h}px` }}
                />
              ))}
            </span>
            <span className="text-[15px] leading-none font-bold tracking-[0.04em]">CISCO</span>
          </span>
        </span>
      );
    case "seagate":
      return (
        <span className={wrap}>
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-label="Seagate">
            <path
              d="M20 8.5c-1-1.8-3-2.8-6-2.8-3 0-6 2-6 5 0 6 12 4 12 10 0 3-3 5-7 5-3 0-6-1-7-4"
              stroke="#5fb47a"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="text-[15px] leading-none font-semibold tracking-[0.2em] text-[#4a5560]">SEAGATE</span>
        </span>
      );
    case "nationwide":
      return (
        <span className={wrap}>
          <svg width="26" height="22" viewBox="0 0 32 26" fill="none" aria-label="Nationwide">
            <path
              d="M3 4.5C3 3 4 2 5.5 2c2 0 3 1 5 3.5l4 5V4.5C14.5 3 16 2 17 2c1 0 2 0.5 2 2v14.5C19 21 17.5 22 16 22c-1.5 0-3-1-5-3.5l-4-5V19.5C7 21 5.5 22 4.5 22 3.5 22 3 21.5 3 19.5V4.5Z"
              fill="#e21f26"
            />
            <circle cx="6" cy="6" r="1.2" fill="#ffffff" />
          </svg>
          <span className="text-[20px] leading-none font-bold tracking-[-0.025em] text-[#0033a0] lowercase">nationwide</span>
        </span>
      );
    case "hbo":
      return (
        <span className={wrap}>
          <span className="text-[28px] leading-none font-black tracking-[-0.03em] text-[#0a0a14]">HBO</span>
        </span>
      );
  }
}
