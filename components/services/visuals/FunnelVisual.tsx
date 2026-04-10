export default function FunnelVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#d8d3cb" />

      {/* Layer 1 — LEADS (widest) */}
      <polygon
        points="90,72 510,72 444,166 156,166"
        fill="rgba(26,26,26,0.07)"
        stroke="rgba(26,26,26,0.18)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <text
        x="300"
        y="127"
        fontFamily="Cormorant Garamond, serif"
        fontSize="15"
        letterSpacing="4"
        fill="rgba(26,26,26,0.35)"
        textAnchor="middle"
      >
        LEADS
      </text>

      {/* Layer 2 — NURTURE */}
      <polygon
        points="156,174 444,174 390,262 210,262"
        fill="rgba(26,26,26,0.09)"
        stroke="rgba(26,26,26,0.18)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <text
        x="300"
        y="225"
        fontFamily="Cormorant Garamond, serif"
        fontSize="15"
        letterSpacing="4"
        fill="rgba(26,26,26,0.35)"
        textAnchor="middle"
      >
        NURTURE
      </text>

      {/* Layer 3 — SALES (narrowest) */}
      <polygon
        points="210,270 390,270 348,348 252,348"
        fill="rgba(26,26,26,0.11)"
        stroke="rgba(26,26,26,0.18)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <text
        x="300"
        y="317"
        fontFamily="Cormorant Garamond, serif"
        fontSize="15"
        letterSpacing="4"
        fill="rgba(26,26,26,0.35)"
        textAnchor="middle"
      >
        SALES
      </text>

      {/* Arrow outlet */}
      <polygon
        points="252,356 348,356 328,406 272,406"
        fill="rgba(26,26,26,0.12)"
        stroke="rgba(26,26,26,0.18)"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Downward arrow tip */}
      <polygon
        points="272,412 328,412 300,438"
        fill="rgba(26,26,26,0.14)"
        stroke="rgba(26,26,26,0.18)"
        strokeWidth="1"
        strokeLinejoin="round"
      />

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
        FUNNEL DESIGN
      </text>
    </svg>
  );
}
