const badges = [
  { label: "Leader", sub: "Spring 2025" },
  { label: "Best Usability", sub: "Spring 2025" },
  { label: "Easiest to Use", sub: "Mid-Market" },
  { label: "Momentum Leader", sub: "Spring 2025" },
  { label: "Top 50", sub: "Products 2024" },
  { label: "Users Love Us", sub: "G2" },
];

export default function RatingRow() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container-x">
        <div className="relative mx-auto max-w-[920px] rounded-3xl bg-gradient-to-b from-white to-[#f9f9fc] ring-1 ring-black/[0.05] px-6 md:px-10 py-8 md:py-10 shadow-[0_1px_2px_rgba(8,8,13,0.03),0_24px_48px_-24px_rgba(8,8,13,0.08)]">
          <div className="flex flex-col items-center gap-7">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] md:text-[16px] text-[#08080d]">
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white text-[12px] font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #ff7a59 0%, #ff492c 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px -4px rgba(255,73,44,0.45)",
                }}
              >
                G
              </span>
              <span className="flex items-center gap-0.5 text-[#ff492c]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </span>
              <span className="font-semibold tracking-tight">4.75</span>
              <span className="text-[#5a5a6a]">from 2,000+ reviews</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="relative flex flex-col items-center justify-center text-center h-16 w-24 md:h-18 md:w-28 rounded-xl text-white px-2 transition-transform hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(180deg, #ff7a59 0%, #ff492c 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 18px -8px rgba(255,73,44,0.5)",
                  }}
                >
                  <span className="absolute inset-x-2 top-1.5 h-3 rounded-full bg-white/10 blur-sm" />
                  <span className="relative text-[9px] md:text-[10px] font-bold leading-tight tracking-tight">{b.label}</span>
                  <span className="relative text-[8px] md:text-[9px] opacity-85 leading-tight mt-0.5">{b.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M7 0.5L8.94 4.51L13.36 5.15L10.18 8.25L10.93 12.65L7 10.57L3.07 12.65L3.82 8.25L0.64 5.15L5.06 4.51L7 0.5Z" />
    </svg>
  );
}
