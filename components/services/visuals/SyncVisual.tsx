export default function SyncVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#ddd8d0" />

      {/* Connection lines */}
      <line x1="300" y1="224" x2="162" y2="348" stroke="rgba(26,26,26,0.12)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="300" y1="224" x2="300" y2="364" stroke="rgba(26,26,26,0.12)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="300" y1="224" x2="438" y2="348" stroke="rgba(26,26,26,0.12)" strokeWidth="1" strokeDasharray="5 4" />

      {/* Cloud — overlapping ellipses to form cloud shape */}
      <ellipse cx="286" cy="206" rx="30" ry="22" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />
      <ellipse cx="314" cy="206" rx="30" ry="22" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />
      <ellipse cx="300" cy="218" rx="40" ry="18" fill="rgba(26,26,26,0.09)" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />
      {/* Mask the internal strokes */}
      <rect x="262" y="210" width="76" height="14" fill="rgba(221,216,208,1)" />
      {/* Bottom flat line */}
      <line x1="260" y1="236" x2="340" y2="236" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />

      {/* Laptop (left node) */}
      <rect x="120" y="348" width="84" height="54" rx="2" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />
      <rect x="128" y="356" width="68" height="38" rx="1" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
      <rect x="106" y="402" width="112" height="7" rx="3" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />
      <rect x="136" y="364" width="52" height="5" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="136" y="375" width="38" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="136" y="385" width="44" height="4" rx="1" fill="rgba(26,26,26,0.09)" />

      {/* Phone (center node) */}
      <rect x="272" y="364" width="56" height="92" rx="7" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />
      <rect x="279" y="374" width="42" height="68" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
      <circle cx="300" cy="449" r="4" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.17)" strokeWidth="0.75" />
      <rect x="285" y="382" width="30" height="5" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="285" y="393" width="24" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="285" y="403" width="28" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="285" y="413" width="20" height="4" rx="1" fill="rgba(26,26,26,0.09)" />

      {/* Tablet (right node) */}
      <rect x="398" y="338" width="84" height="64" rx="3" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.17)" strokeWidth="1" />
      <rect x="406" y="346" width="64" height="48" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
      <circle cx="440" cy="406" r="5" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.17)" strokeWidth="0.75" />
      <rect x="413" y="354" width="50" height="5" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="413" y="365" width="38" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="413" y="375" width="44" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="413" y="385" width="32" height="4" rx="1" fill="rgba(26,26,26,0.09)" />

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
        FILE SYNC
      </text>
    </svg>
  );
}
