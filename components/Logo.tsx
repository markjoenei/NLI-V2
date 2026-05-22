type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "dark" ? "#08080d" : "#ffffff";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path d="M 10 30 L 50 40 L 90 30" stroke={color} strokeWidth="6" strokeOpacity="0.32" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d="M 10 44 L 50 54 L 90 44" stroke={color} strokeWidth="6" strokeOpacity="0.52" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d="M 10 58 L 50 68 L 90 58" stroke={color} strokeWidth="6" strokeOpacity="0.76" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d="M 10 72 L 50 82 L 90 72" stroke={color} strokeWidth="6" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d="M 60 16 L 88 8 L 88 26" stroke={color} strokeWidth="6" strokeOpacity="0.9" strokeLinejoin="miter" strokeLinecap="butt" />
      </svg>
      <span className="leading-[1.05]" style={{ color }}>
        <span className="block text-[17px] font-bold tracking-[-0.015em]">Next Layer</span>
        <span className="block text-[16px] font-normal tracking-[-0.015em] opacity-75">Intelligence</span>
      </span>
    </span>
  );
}
