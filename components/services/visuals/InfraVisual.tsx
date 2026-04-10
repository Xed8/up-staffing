export default function InfraVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#d8d3cb" />

      {/* Rack enclosure */}
      <rect x="180" y="56" width="240" height="336" rx="3" fill="rgba(26,26,26,0.06)" stroke="rgba(26,26,26,0.18)" strokeWidth="1.5" />

      {/* Rack rails */}
      <rect x="188" y="64" width="10" height="320" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />
      <rect x="402" y="64" width="10" height="320" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />

      {/* Server unit 1 */}
      <rect x="204" y="76" width="192" height="46" rx="2" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="1" />
      <rect x="214" y="93" width="4" height="12" rx="1" fill="rgba(26,26,26,0.15)" />
      <rect x="226" y="96" width="80" height="6" rx="1" fill="rgba(26,26,26,0.12)" />
      <circle cx="372" cy="99" r="4" fill="rgba(26,26,26,0.15)" />
      <circle cx="386" cy="99" r="4" fill="rgba(26,26,26,0.15)" />

      {/* Server unit 2 */}
      <rect x="204" y="132" width="192" height="46" rx="2" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="1" />
      <rect x="214" y="149" width="4" height="12" rx="1" fill="rgba(26,26,26,0.15)" />
      <rect x="226" y="152" width="96" height="6" rx="1" fill="rgba(26,26,26,0.12)" />
      <circle cx="372" cy="155" r="4" fill="rgba(26,26,26,0.15)" />
      <circle cx="386" cy="155" r="4" fill="rgba(26,26,26,0.15)" />

      {/* Server unit 3 */}
      <rect x="204" y="188" width="192" height="46" rx="2" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="1" />
      <rect x="214" y="205" width="4" height="12" rx="1" fill="rgba(26,26,26,0.15)" />
      <rect x="226" y="208" width="72" height="6" rx="1" fill="rgba(26,26,26,0.12)" />
      <circle cx="372" cy="211" r="4" fill="rgba(26,26,26,0.15)" />
      <circle cx="386" cy="211" r="4" fill="rgba(26,26,26,0.15)" />

      {/* Server unit 4 */}
      <rect x="204" y="244" width="192" height="46" rx="2" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="1" />
      <rect x="214" y="261" width="4" height="12" rx="1" fill="rgba(26,26,26,0.15)" />
      <rect x="226" y="264" width="88" height="6" rx="1" fill="rgba(26,26,26,0.12)" />
      <circle cx="372" cy="267" r="4" fill="rgba(26,26,26,0.15)" />
      <circle cx="386" cy="267" r="4" fill="rgba(26,26,26,0.15)" />

      {/* Server unit 5 */}
      <rect x="204" y="300" width="192" height="46" rx="2" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.18)" strokeWidth="1" />
      <rect x="214" y="317" width="4" height="12" rx="1" fill="rgba(26,26,26,0.15)" />
      <rect x="226" y="320" width="64" height="6" rx="1" fill="rgba(26,26,26,0.12)" />
      <circle cx="372" cy="323" r="4" fill="rgba(26,26,26,0.15)" />
      <circle cx="386" cy="323" r="4" fill="rgba(26,26,26,0.15)" />

      {/* Cable management strip */}
      <rect x="204" y="356" width="192" height="24" rx="2" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />
      <rect x="218" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="232" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="246" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="260" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="274" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="288" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="302" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="316" y="363" width="6" height="10" rx="1" fill="rgba(26,26,26,0.12)" />

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
        INFRASTRUCTURE
      </text>
    </svg>
  );
}
