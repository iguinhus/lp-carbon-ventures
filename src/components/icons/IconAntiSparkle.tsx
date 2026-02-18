import type { IconProps } from "./types";

export function IconAntiSparkle({ className = "", size = 64 }: IconProps) {
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
      {/* Big sparkle - hollow/empty */}
      <path d="M32 8l3 12 12 3-12 3-3 12-3-12-12-3 12-3z" />
      {/* Small sparkle 1 - hollow */}
      <path d="M50 42l1.5 5 5 1.5-5 1.5-1.5 5-1.5-5-5-1.5 5-1.5z" opacity="0.6" />
      {/* Small sparkle 2 - hollow */}
      <path d="M14 44l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" opacity="0.4" />
      {/* Fading dots suggesting hollow promises */}
      <circle cx="48" cy="14" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="52" cy="18" r="0.8" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="20" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
