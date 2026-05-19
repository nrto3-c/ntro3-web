type IconProps = { color: string; size?: number }

export function IdeaIcon({ color, size = 64 }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="IDEA">
      <line x1="50" y1="14" x2="50" y2="86" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="14" y1="50" x2="86" y2="50" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="22" y1="22" x2="78" y2="78" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="78" y1="22" x2="22" y2="78" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function DesignIcon({ color, size = 64 }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="DESIGN">
      <rect x="14" y="14" width="72" height="72" fill="none" stroke={color} strokeWidth="4" />
      <rect x="22" y="22" width="22" height="22" fill={color} />
      <line x1="50" y1="24" x2="78" y2="24" stroke={color} strokeWidth="3.5" />
      <line x1="50" y1="32" x2="72" y2="32" stroke={color} strokeWidth="3.5" />
      <line x1="50" y1="40" x2="76" y2="40" stroke={color} strokeWidth="3.5" />
      <rect x="22" y="52" width="56" height="14" fill="none" stroke={color} strokeWidth="3.5" />
      <rect x="22" y="72" width="22" height="6" fill={color} />
    </svg>
  )
}

export function BuildIcon({ color, size = 64 }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="BUILD">
      <text
        x="50"
        y="68"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="64"
        fontWeight="900"
        textAnchor="middle"
        fill={color}
      >
        {'{ }'}
      </text>
      <line x1="18" y1="82" x2="82" y2="82" stroke={color} strokeWidth="4" />
      <line x1="28" y1="88" x2="62" y2="88" stroke={color} strokeWidth="3" opacity="0.5" />
    </svg>
  )
}

export function ShipIcon({ color, size = 64 }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SHIP">
      <circle cx="50" cy="50" r="34" fill="none" stroke={color} strokeWidth="3.5" strokeDasharray="3 5" />
      <circle cx="50" cy="50" r="22" fill="none" stroke={color} strokeWidth="3.5" />
      <circle cx="50" cy="50" r="8" fill={color} />
      <line x1="16" y1="16" x2="48" y2="48" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points="50,50 44,38 38,44" fill={color} />
    </svg>
  )
}
