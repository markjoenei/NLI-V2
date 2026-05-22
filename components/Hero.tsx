import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden grain text-white bg-[#08080e]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #0a0a18 0%, #0e0c24 55%, #07070f 100%)",
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/40"
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

      <div className="relative container-x">
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
    "stc",
    "oracle",
    "dell",
    "rbc",
    "lgcns",
  ];
  // Repeat the brands enough times that each half of the loop spans
  // wider than the largest viewport — guarantees a seamless, gap-free scroll.
  const oneTrack = [...items, ...items, ...items, ...items];
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
          style={{ animation: "marqueeScroll 40s linear infinite" }}
        >
          {[0, 1].map((dup) =>
            oneTrack.map((kind, i) => (
              <BrandLogo key={`${dup}-${i}-${kind}`} kind={kind} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

type BrandKind = "stc" | "oracle" | "dell" | "rbc" | "lgcns";

function BrandLogo({ kind }: { kind: BrandKind }) {
  const wrap = "inline-flex items-center justify-center gap-2 px-10 md:px-14 h-14 shrink-0";

  switch (kind) {
    case "stc":
      return (
        <span className={wrap}>
          <span
            className="text-[30px] leading-none font-bold tracking-[-0.04em] text-[#4a4a52] lowercase"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            stc
          </span>
        </span>
      );
    case "oracle":
      return (
        <span className={wrap}>
          <span
            className="text-[22px] leading-none font-extrabold tracking-[0.06em] text-[#c74634]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            ORACLE
          </span>
        </span>
      );
    case "dell":
      return (
        <span className={wrap}>
          <span className="inline-flex flex-col items-center leading-none gap-1">
            <span className="text-[24px] font-extrabold tracking-[-0.02em] text-[#08080d]">DELL</span>
            <span className="text-[8px] font-medium text-[#3a3a4a] tracking-[0.05em]">Technologies</span>
          </span>
        </span>
      );
    case "rbc":
      return (
        <span className={wrap}>
          <svg width="30" height="36" viewBox="0 0 30 36" fill="none" aria-label="RBC">
            <path
              d="M3 4 L27 4 L27 21 C27 28 15 33 15 33 C15 33 3 28 3 21 L3 4 Z"
              fill="#08080d"
            />
            <path
              d="M9 10 C9 9, 10 8, 11 8 L19 8 C20 8, 21 9, 21 10 L21 13 C21 14, 20 15, 19 15 L15 15 L15 20 L19 20 C20 20, 21 21, 21 22 L21 24"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="11" cy="22" r="1.4" fill="#ffd24a" />
          </svg>
        </span>
      );
    case "lgcns":
      return (
        <span className={wrap}>
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-full"
            style={{ background: "#a50034" }}
            aria-label="LG"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.2" fill="none" />
              <circle cx="15.5" cy="9.5" r="0.9" fill="#ffffff" />
              <path
                d="M6.5 5 L6.5 16 L13 16"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="ml-1 text-[18px] leading-none font-bold tracking-[-0.01em] text-[#08080d]">
            LG CNS
          </span>
        </span>
      );
  }
}
