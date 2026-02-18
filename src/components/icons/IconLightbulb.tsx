import type { IconProps } from "./types";

export function IconLightbulb({ className = "", size = 64 }: IconProps) {
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
      {/* Bulb body */}
      <path d="M24 38c-1.5-2-4-5.5-4-12a12 12 0 1 1 24 0c0 6.5-2.5 10-4 12" />
      {/* Base */}
      <line x1="24" y1="42" x2="40" y2="42" />
      <line x1="26" y1="46" x2="38" y2="46" />
      <line x1="28" y1="50" x2="36" y2="50" />
      {/* Filament */}
      <path d="M28 38v-8l4-4 4 4v8" strokeWidth="1" opacity="0.5" />
      {/* Light rays */}
      <line x1="32" y1="6" x2="32" y2="10" opacity="0.4" />
      <line x1="50" y1="14" x2="47" y2="17" opacity="0.4" />
      <line x1="14" y1="14" x2="17" y2="17" opacity="0.4" />
      <line x1="54" y1="26" x2="50" y2="26" opacity="0.4" />
      <line x1="10" y1="26" x2="14" y2="26" opacity="0.4" />
    </svg>
  );
}
