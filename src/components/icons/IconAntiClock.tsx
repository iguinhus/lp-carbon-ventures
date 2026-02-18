import type { IconProps } from "./types";

export function IconAntiClock({ className = "", size = 64 }: IconProps) {
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
      {/* Clock circle */}
      <circle cx="32" cy="32" r="24" />
      {/* Chaotic hands going in wrong directions */}
      <path d="M32 32l-8-14" strokeWidth="2" />
      <path d="M32 32l12-4" strokeWidth="2" />
      <path d="M32 32l-3 16" strokeWidth="1" opacity="0.5" />
      {/* Hour markers (scattered/uneven) */}
      <circle cx="32" cy="10" r="1.5" fill="currentColor" />
      <circle cx="54" cy="32" r="1.5" fill="currentColor" />
      <circle cx="32" cy="54" r="1.5" fill="currentColor" />
      <circle cx="10" cy="32" r="1.5" fill="currentColor" />
      {/* Spinning arrows suggesting wasted time */}
      <path d="M44 12a20 20 0 0 1 6 10" />
      <path d="M50 22l-1-5 5-1" />
    </svg>
  );
}
