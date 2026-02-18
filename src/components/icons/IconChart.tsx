import type { IconProps } from "./types";

export function IconChart({ className = "", size = 64 }: IconProps) {
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
      {/* Axes */}
      <path d="M12 52V12" strokeWidth="2" />
      <path d="M12 52h40" strokeWidth="2" />
      {/* Growth line */}
      <path d="M16 44l10-4 8-12 8-6 8-10" strokeWidth="2" />
      {/* Data points */}
      <circle cx="16" cy="44" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="26" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="34" cy="28" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="42" cy="22" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="12" r="3" fill="currentColor" opacity="0.8" />
      {/* Arrow at top point */}
      <path d="M47 15l3-3 2 4" />
      {/* Grid lines */}
      <line x1="12" y1="36" x2="52" y2="36" opacity="0.1" />
      <line x1="12" y1="24" x2="52" y2="24" opacity="0.1" />
    </svg>
  );
}
