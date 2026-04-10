export default function SocialMediaVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#e8e4de" />

      {/* Card 1 — top-left: image-heavy (Instagram post style) */}
      <rect x="64" y="56" width="222" height="172" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />
      {/* Image placeholder */}
      <rect x="64" y="56" width="222" height="112" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.00)" />
      <line x1="64" y1="56" x2="286" y2="168" stroke="rgba(26,26,26,0.10)" strokeWidth="0.75" />
      <line x1="286" y1="56" x2="64" y2="168" stroke="rgba(26,26,26,0.10)" strokeWidth="0.75" />
      {/* Caption area */}
      <rect x="78" y="181" width="100" height="7" rx="1" fill="rgba(26,26,26,0.13)" />
      <rect x="78" y="195" width="168" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="78" y="207" width="140" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      {/* Like / comment icons */}
      <rect x="78" y="218" width="14" height="8" rx="1" fill="rgba(26,26,26,0.10)" />
      <rect x="98" y="218" width="14" height="8" rx="1" fill="rgba(26,26,26,0.10)" />

      {/* Card 2 — top-right: carousel / text card */}
      <rect x="314" y="56" width="222" height="172" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />
      <rect x="330" y="76" width="160" height="18" rx="2" fill="rgba(26,26,26,0.13)" />
      <rect x="330" y="102" width="180" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="330" y="114" width="164" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="330" y="126" width="172" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="330" y="138" width="148" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      {/* Pagination dots */}
      <circle cx="390" cy="186" r="4" fill="rgba(26,26,26,0.18)" />
      <circle cx="404" cy="186" r="4" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <circle cx="418" cy="186" r="4" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />

      {/* Card 3 — bottom-left: quote card */}
      <rect x="64" y="252" width="222" height="172" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />
      {/* Quote mark */}
      <text x="80" y="295" fontFamily="Cormorant Garamond, serif" fontSize="48" fill="rgba(26,26,26,0.10)">&ldquo;</text>
      <rect x="80" y="306" width="180" height="8" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="80" y="322" width="168" height="8" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="80" y="338" width="140" height="8" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="80" y="368" width="60" height="6" rx="1" fill="rgba(26,26,26,0.10)" />
      <rect x="80" y="382" width="90" height="5" rx="1" fill="rgba(26,26,26,0.07)" />

      {/* Card 4 — bottom-right: infographic / stats */}
      <rect x="314" y="252" width="222" height="172" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />
      <rect x="330" y="272" width="120" height="10" rx="1" fill="rgba(26,26,26,0.13)" />
      {/* Stat bars */}
      <rect x="330" y="296" width="180" height="7" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="330" y="296" width="140" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="330" y="312" width="180" height="7" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="330" y="312" width="100" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="330" y="328" width="180" height="7" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="330" y="328" width="160" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="330" y="344" width="180" height="7" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="330" y="344" width="80" height="7" rx="1" fill="rgba(26,26,26,0.14)" />
      {/* Labels */}
      <rect x="330" y="370" width="50" height="5" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="330" y="382" width="70" height="5" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="330" y="394" width="56" height="5" rx="1" fill="rgba(26,26,26,0.09)" />

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
        SOCIAL MEDIA
      </text>
    </svg>
  );
}
