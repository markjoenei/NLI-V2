type Variant =
  | "portrait-warm"
  | "portrait-cool"
  | "portrait-rose"
  | "portrait-sand"
  | "portrait-teal"
  | "portrait-violet"
  | "scene-office"
  | "scene-studio"
  | "scene-light"
  | "scene-purple"
  | "scene-blue";

type Props = {
  variant?: Variant;
  className?: string;
  silhouette?: boolean;
};

type Palette = {
  bg: [string, string, string];
  accent: string;
  glow: string;
};

const palettes: Record<Variant, Palette> = {
  "portrait-warm": {
    bg: ["#ffd9b8", "#ff9d80", "#ff6f5b"],
    accent: "#5b2a1a",
    glow: "rgba(255, 197, 169, 0.6)",
  },
  "portrait-cool": {
    bg: ["#d8e6ff", "#9ec0f4", "#6e94d8"],
    accent: "#1a2a55",
    glow: "rgba(158, 192, 244, 0.55)",
  },
  "portrait-rose": {
    bg: ["#ffdbe5", "#f4a3bc", "#d96a92"],
    accent: "#5a1c30",
    glow: "rgba(244, 163, 188, 0.55)",
  },
  "portrait-sand": {
    bg: ["#f9eccc", "#e0c180", "#bf8c44"],
    accent: "#523a0c",
    glow: "rgba(224, 193, 128, 0.55)",
  },
  "portrait-teal": {
    bg: ["#cdeee0", "#7ec8aa", "#4ea884"],
    accent: "#143b2b",
    glow: "rgba(126, 200, 170, 0.55)",
  },
  "portrait-violet": {
    bg: ["#e8dcff", "#b8a4f5", "#8e74e0"],
    accent: "#2c1d63",
    glow: "rgba(184, 164, 245, 0.55)",
  },
  "scene-office": {
    bg: ["#eef2fa", "#cdd6e6", "#a4b1c6"],
    accent: "#2a3550",
    glow: "rgba(205, 214, 230, 0.5)",
  },
  "scene-studio": {
    bg: ["#1f1a46", "#16124a", "#0a0823"],
    accent: "#5b4ef7",
    glow: "rgba(91, 78, 247, 0.45)",
  },
  "scene-light": {
    bg: ["#f6f3eb", "#e5dccb", "#c7b896"],
    accent: "#3a2f1c",
    glow: "rgba(229, 220, 203, 0.5)",
  },
  "scene-purple": {
    bg: ["#ece8ff", "#c8c1ff", "#a094f0"],
    accent: "#2c2470",
    glow: "rgba(200, 193, 255, 0.55)",
  },
  "scene-blue": {
    bg: ["#dceaff", "#a7c2ee", "#7a9ed8"],
    accent: "#1c3060",
    glow: "rgba(167, 194, 238, 0.55)",
  },
};

export default function Placeholder({
  variant = "portrait-warm",
  className = "",
  silhouette = true,
}: Props) {
  const p = palettes[variant];
  const isScene = variant.startsWith("scene-");
  const gradId = `g-${variant}`;
  const shadowId = `s-${variant}`;
  const lightId = `l-${variant}`;

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, ${p.bg[0]} 0%, ${p.bg[1]} 55%, ${p.bg[2]} 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 30% 10%, ${p.glow} 0%, transparent 60%)`,
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(80% 60% at 70% 90%, rgba(0,0,0,0.18) 0%, transparent 60%)`,
        }}
      />

      {silhouette && !isScene && (
        <svg
          viewBox="0 0 100 120"
          preserveAspectRatio="xMidYMax meet"
          className="absolute inset-x-0 bottom-0 h-[90%] w-full"
        >
          <defs>
            <linearGradient id={shadowId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.32)" />
              <stop offset="60%" stopColor="rgba(0,0,0,0.18)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
            </linearGradient>
            <radialGradient id={lightId} cx="0.35" cy="0.3" r="0.6">
              <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="40" r="19" fill={`url(#${shadowId})`} />
          <circle cx="44" cy="35" r="9" fill={`url(#${lightId})`} />
          <path
            d="M10 120 C 10 86, 28 66, 50 66 C 72 66, 90 86, 90 120 Z"
            fill={`url(#${shadowId})`}
          />
        </svg>
      )}

      {isScene && (
        <>
          <svg
            viewBox="0 0 100 60"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full opacity-55"
          >
            <defs>
              <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
              </linearGradient>
            </defs>
            <circle cx="22" cy="22" r="13" fill={`url(#${gradId})`} />
            <rect x="42" y="14" width="46" height="3.5" rx="1.75" fill="rgba(255,255,255,0.32)" />
            <rect x="42" y="22" width="30" height="3.5" rx="1.75" fill="rgba(255,255,255,0.22)" />
            <rect x="42" y="30" width="38" height="3.5" rx="1.75" fill="rgba(255,255,255,0.15)" />
            <rect x="6" y="44" width="88" height="3.5" rx="1.75" fill="rgba(255,255,255,0.2)" />
            <rect x="6" y="52" width="56" height="3.5" rx="1.75" fill="rgba(255,255,255,0.13)" />
          </svg>
        </>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.12) 100%)",
        }}
      />
    </div>
  );
}
