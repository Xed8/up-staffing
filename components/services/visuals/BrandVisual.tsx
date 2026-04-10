export default function BrandVisual() {
  // Concentric flat-top hexagons centered at (300, 232)
  // Radii: 160, 118, 78, 42
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#d8d3cb" />

      {/* Hexagon r=160 */}
      <polygon
        points="460,232 380,371 220,371 140,232 220,93 380,93"
        fill="rgba(26,26,26,0.04)"
        stroke="rgba(26,26,26,0.14)"
        strokeWidth="1"
      />

      {/* Hexagon r=118 */}
      <polygon
        points="418,232 359,334 241,334 182,232 241,130 359,130"
        fill="rgba(26,26,26,0.04)"
        stroke="rgba(26,26,26,0.14)"
        strokeWidth="1"
      />

      {/* Hexagon r=78 */}
      <polygon
        points="378,232 339,300 261,300 222,232 261,164 339,164"
        fill="rgba(26,26,26,0.05)"
        stroke="rgba(26,26,26,0.16)"
        strokeWidth="1"
      />

      {/* Hexagon r=42 */}
      <polygon
        points="342,232 321,268 279,268 258,232 279,196 321,196"
        fill="rgba(26,26,26,0.07)"
        stroke="rgba(26,26,26,0.18)"
        strokeWidth="1"
      />

      {/* Spoke lines from center to outer hexagon vertices */}
      <line x1="300" y1="232" x2="460" y2="232" stroke="rgba(26,26,26,0.08)" strokeWidth="0.75" />
      <line x1="300" y1="232" x2="380" y2="371" stroke="rgba(26,26,26,0.08)" strokeWidth="0.75" />
      <line x1="300" y1="232" x2="220" y2="371" stroke="rgba(26,26,26,0.08)" strokeWidth="0.75" />
      <line x1="300" y1="232" x2="140" y2="232" stroke="rgba(26,26,26,0.08)" strokeWidth="0.75" />
      <line x1="300" y1="232" x2="220" y2="93" stroke="rgba(26,26,26,0.08)" strokeWidth="0.75" />
      <line x1="300" y1="232" x2="380" y2="93" stroke="rgba(26,26,26,0.08)" strokeWidth="0.75" />

      {/* Center dot */}
      <circle cx="300" cy="232" r="7" fill="rgba(26,26,26,0.18)" stroke="rgba(26,26,26,0.20)" strokeWidth="1" />

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
        BRAND IDENTITY
      </text>
    </svg>
  );
}
