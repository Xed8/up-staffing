export default function WebDesignVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#e8e4de" />

      {/* Browser window */}
      <rect x="72" y="58" width="456" height="346" rx="3" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />

      {/* Browser chrome */}
      <rect x="72" y="58" width="456" height="38" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />
      <circle cx="94" cy="77" r="5" fill="rgba(26,26,26,0.11)" stroke="rgba(26,26,26,0.17)" strokeWidth="0.75" />
      <circle cx="112" cy="77" r="5" fill="rgba(26,26,26,0.11)" stroke="rgba(26,26,26,0.17)" strokeWidth="0.75" />
      <circle cx="130" cy="77" r="5" fill="rgba(26,26,26,0.11)" stroke="rgba(26,26,26,0.17)" strokeWidth="0.75" />
      <rect x="168" y="65" width="232" height="22" rx="11" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
      <rect x="188" y="73" width="120" height="6" rx="3" fill="rgba(26,26,26,0.11)" />

      {/* Nav bar */}
      <rect x="72" y="96" width="456" height="40" fill="rgba(26,26,26,0.04)" />
      <rect x="90" y="110" width="52" height="12" rx="1" fill="rgba(26,26,26,0.10)" />
      <rect x="268" y="112" width="30" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="310" y="112" width="30" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="352" y="112" width="30" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="432" y="108" width="76" height="20" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />

      {/* Hero section */}
      <rect x="72" y="136" width="456" height="110" fill="rgba(26,26,26,0.04)" />
      <rect x="170" y="153" width="260" height="16" rx="2" fill="rgba(26,26,26,0.13)" />
      <rect x="194" y="177" width="212" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="214" y="192" width="172" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="240" y="210" width="120" height="22" rx="1" fill="rgba(26,26,26,0.09)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />

      {/* Two-column content */}
      <rect x="72" y="246" width="220" height="130" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.08)" strokeWidth="0.5" />
      <rect x="90" y="262" width="130" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="90" y="280" width="185" height="5" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="90" y="292" width="170" height="5" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="90" y="304" width="180" height="5" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="90" y="350" width="90" height="18" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />

      <rect x="308" y="246" width="220" height="130" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.08)" strokeWidth="0.5" />
      <rect x="326" y="262" width="130" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="326" y="280" width="185" height="5" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="326" y="292" width="160" height="5" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="326" y="304" width="178" height="5" rx="1" fill="rgba(26,26,26,0.07)" />
      <rect x="326" y="350" width="90" height="18" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />

      {/* Footer strip */}
      <rect x="72" y="376" width="456" height="28" fill="rgba(26,26,26,0.06)" />
      <rect x="90" y="385" width="60" height="8" rx="1" fill="rgba(26,26,26,0.10)" />
      <rect x="390" y="385" width="30" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="432" y="385" width="30" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="474" y="385" width="30" height="8" rx="1" fill="rgba(26,26,26,0.08)" />

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
        WEB DESIGN
      </text>
    </svg>
  );
}
