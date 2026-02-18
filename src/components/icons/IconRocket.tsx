import type { IconProps } from "./types";

export function IconRocket({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Rocket body */}
      <path d="M32 8c-8 8-12 20-12 28h24c0-8-4-20-12-28z" />
      {/* Window */}
      <circle cx="32" cy="26" r="4" />
      {/* Left fin */}
      <path d="M20 36l-6 8h6" />
      {/* Right fin */}
      <path d="M44 36l6 8h-6" />
      {/* Exhaust flames */}
      <path d="M26 36l2 10 4-6 4 6 2-10" opacity="0.5" />
      {/* Exhaust particles */}
      <circle cx="28" cy="52" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="36" cy="54" r="0.8" fill="currentColor" opacity="0.2" />
      <circle cx="32" cy="56" r="1.2" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
