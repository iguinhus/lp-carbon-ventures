import type { IconProps } from "./types";

export function IconAntiCode({ className = "", size = 64 }: IconProps) {
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
      {/* Tangled/messy code brackets */}
      <path d="M18 16L8 32l10 16" />
      <path d="M46 16l10 16-10 16" />
      {/* Messy/broken code lines */}
      <path d="M24 22l6 4-4 6 8 2-2 6 6-2" strokeDasharray="3 2" />
      <path d="M28 38l4-3 3 5" strokeDasharray="3 2" />
      {/* Strike-through */}
      <line x1="12" y1="52" x2="52" y2="12" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
