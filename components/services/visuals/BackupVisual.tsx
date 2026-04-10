export default function BackupVisual() {
  // 270° arc: center (300, 190), radius 110
  // Start at top: (300, 80), end at left: (190, 190)
  // large-arc-flag=1 (>180°), sweep-flag=1 (clockwise)
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#d8d3cb" />

      {/* Track ring */}
      <circle
        cx="300"
        cy="190"
        r="110"
        fill="none"
        stroke="rgba(26,26,26,0.08)"
        strokeWidth="16"
      />

      {/* Progress arc (270° clockwise) */}
      <path
        d="M 300 80 A 110 110 0 1 1 190 190"
        fill="none"
        stroke="rgba(26,26,26,0.20)"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Center: percentage block */}
      <rect x="264" y="176" width="72" height="12" rx="3" fill="rgba(26,26,26,0.15)" />
      <rect x="278" y="196" width="44" height="7" rx="2" fill="rgba(26,26,26,0.09)" />

      {/* History cards */}
      <rect x="96" y="344" width="120" height="76" rx="2" fill="rgba(26,26,26,0.06)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />
      <rect x="108" y="358" width="52" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="108" y="372" width="80" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="108" y="382" width="64" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="108" y="400" width="40" height="9" rx="1" fill="rgba(26,26,26,0.10)" />

      <rect x="240" y="344" width="120" height="76" rx="2" fill="rgba(26,26,26,0.06)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />
      <rect x="252" y="358" width="52" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="252" y="372" width="80" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="252" y="382" width="64" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="252" y="400" width="40" height="9" rx="1" fill="rgba(26,26,26,0.10)" />

      <rect x="384" y="344" width="120" height="76" rx="2" fill="rgba(26,26,26,0.06)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />
      <rect x="396" y="358" width="52" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="396" y="372" width="80" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="396" y="382" width="64" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="396" y="400" width="40" height="9" rx="1" fill="rgba(26,26,26,0.10)" />

      {/* Ghost label */}
      <text
        x="510"
        y="462"
        fontFamily="Cormorant Garamond, serif"
        fontSize="13"
        letterSpacing="3"
        fill="rgba(26,26,26,0.3)"
        textAnchor="end"
      >
        AUTOMATED BACKUP
      </text>
    </svg>
  );
}
