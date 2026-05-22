import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  imageClassName?: string;
};

export default function Logo({
  variant = "dark",
  className = "",
  imageClassName = "h-12 w-auto",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-black.png"
        alt="Next Layer Intelligence"
        width={240}
        height={240}
        priority
        className={imageClassName}
        style={variant === "light" ? { filter: "invert(1) brightness(2)" } : undefined}
      />
    </span>
  );
}
