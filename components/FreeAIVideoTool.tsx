import Placeholder from "./Placeholder";

const avatars = [
  "portrait-warm",
  "portrait-cool",
  "portrait-rose",
  "portrait-violet",
  "portrait-teal",
] as const;

export default function FreeAIVideoTool() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative rounded-3xl md:rounded-[32px] overflow-hidden mesh-dark grain ring-1 ring-white/[0.06] p-7 md:p-14 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(91,78,247,0.55), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,125,107,0.32), transparent 70%)",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-stretch">
            <div className="flex flex-col text-white">
              <span className="inline-flex items-center gap-2 self-start rounded-full glass-dark px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80 font-semibold mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5b4ef7]" />
                Free tool · No signup
              </span>
              <h2 className="display-text text-[28px] sm:text-[36px] md:text-[44px] lg:text-[53px] font-semibold max-w-[14ch] tracking-tight">
                Try our free{" "}
                <span className="editorial text-white/90">AI Video Tool</span>
              </h2>
              <p className="mt-5 max-w-[44ch] text-[15px] md:text-[17px] text-white/65 text-pretty">
                Pick an avatar, paste a script, hit generate. You&apos;ll have a finished video in under a minute.
              </p>

              <div className="mt-10 space-y-6">
                <Step n={1} title="Select an AI avatar">
                  <div className="flex gap-2.5 flex-wrap">
                    {avatars.map((v, i) => (
                      <div
                        key={v}
                        className={`relative h-11 w-11 rounded-full overflow-hidden ring-2 transition-all ${
                          i === 0
                            ? "ring-[#5b4ef7] scale-110 shadow-[0_0_0_3px_rgba(91,78,247,0.25)]"
                            : "ring-white/15 hover:ring-white/30"
                        }`}
                      >
                        <Placeholder variant={v} />
                      </div>
                    ))}
                    <button className="h-11 w-11 rounded-full glass-dark text-white/70 flex items-center justify-center text-[18px] hover:text-white transition-colors">
                      +
                    </button>
                  </div>
                </Step>
                <Step n={2} title="Type your script in any language">
                  <div className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4 text-[13.5px] text-white/85 leading-relaxed relative overflow-hidden">
                    <span className="inline-block w-2 h-4 bg-white/40 align-middle animate-pulse mr-1" />
                    Hi! I&apos;m an AI avatar — paste any script here and watch me bring it to life in 140+ languages.
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-white/40">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#5b4ef7]" />
                        EN
                      </span>
                      · 142 characters
                    </div>
                  </div>
                </Step>
              </div>

              <button className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-white text-[#08080d] text-[15px] font-semibold px-7 self-start hover:bg-white/95 transition-all shadow-[0_8px_24px_-6px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
                Create free AI video
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="ml-1.5">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-0 blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 50% at 50% 50%, rgba(91,78,247,0.4), transparent 70%)",
                }}
              />
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#0a0a18] aspect-[4/3] lg:aspect-auto lg:min-h-[480px] ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                <Placeholder variant="portrait-warm" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-md glass-dark text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 z-10">
                  <span className="relative h-1.5 w-1.5 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[#ff5d5d] pulse-soft" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#ff5d5d]" />
                  </span>
                  Live preview
                </div>

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-lg glass-dark text-white text-[11px] font-medium px-2.5 py-1.5 z-10">
                  <span className="inline-flex h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#6f63ff] to-[#5b4ef7]" />
                  Helena
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-3 glass-dark rounded-xl px-3 py-2.5">
                    <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-md" aria-label="Play">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="#08080d">
                        <path d="M2 1L9 5L2 9V1Z" />
                      </svg>
                    </button>
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[10px] text-white/80">
                        <span>Intro · Helena</span>
                        <span>00:14 / 00:42</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                        <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#6f63ff] to-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/15 text-[13px] font-semibold text-white">
        {n}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[14.5px] font-semibold text-white mb-2.5 tracking-tight">{title}</div>
        {children}
      </div>
    </div>
  );
}
