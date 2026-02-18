import type { IconProps } from "./types";

export function CarbonAtom({ className = "", size = 400 }: IconProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Nucleus */}
      <circle cx="200" cy="200" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="200" cy="200" r="6" fill="currentColor" opacity="0.4" />

      {/* Orbit 1 - horizontal ellipse */}
      <ellipse
        cx="200"
        cy="200"
        rx="150"
        ry="60"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Electron 1 */}
      <g className="atom-spin" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="350" cy="200" r="5" fill="currentColor" opacity="0.6" />
      </g>

      {/* Orbit 2 - tilted 60deg */}
      <g style={{ transform: "rotate(60deg)", transformOrigin: "200px 200px" }}>
        <ellipse
          cx="200"
          cy="200"
          rx="150"
          ry="60"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </g>
      {/* Electron 2 */}
      <g style={{ transform: "rotate(60deg)", transformOrigin: "200px 200px" }}>
        <g className="atom-spin" style={{ transformOrigin: "200px 200px", animationDirection: "reverse", animationDuration: "25s" }}>
          <circle cx="350" cy="200" r="5" fill="currentColor" opacity="0.6" />
        </g>
      </g>

      {/* Orbit 3 - tilted -60deg */}
      <g style={{ transform: "rotate(-60deg)", transformOrigin: "200px 200px" }}>
        <ellipse
          cx="200"
          cy="200"
          rx="150"
          ry="60"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </g>
      {/* Electron 3 */}
      <g style={{ transform: "rotate(-60deg)", transformOrigin: "200px 200px" }}>
        <g className="atom-spin" style={{ transformOrigin: "200px 200px", animationDuration: "30s" }}>
          <circle cx="350" cy="200" r="5" fill="currentColor" opacity="0.6" />
        </g>
      </g>

      {/* Inner glow ring */}
      <circle cx="200" cy="200" r="24" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}
