export default function StorageVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#ddd8d0" />

      {/* App panel */}
      <rect x="70" y="55" width="460" height="368" rx="2" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />

      {/* Title bar */}
      <rect x="70" y="55" width="460" height="38" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />
      <circle cx="92" cy="74" r="5" fill="rgba(26,26,26,0.12)" />
      <circle cx="110" cy="74" r="5" fill="rgba(26,26,26,0.12)" />
      <circle cx="128" cy="74" r="5" fill="rgba(26,26,26,0.12)" />
      <rect x="200" y="63" width="190" height="20" rx="10" fill="rgba(26,26,26,0.06)" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
      <rect x="218" y="70" width="100" height="6" rx="3" fill="rgba(26,26,26,0.10)" />

      {/* Sidebar */}
      <rect x="70" y="93" width="130" height="330" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.10)" strokeWidth="1" />
      <rect x="86" y="112" width="9" height="9" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="102" y="114" width="68" height="6" rx="1" fill="rgba(26,26,26,0.11)" />
      <rect x="86" y="136" width="9" height="9" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="102" y="138" width="52" height="6" rx="1" fill="rgba(26,26,26,0.11)" />
      <rect x="86" y="160" width="9" height="9" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="102" y="162" width="62" height="6" rx="1" fill="rgba(26,26,26,0.11)" />
      <rect x="86" y="184" width="9" height="9" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="102" y="186" width="45" height="6" rx="1" fill="rgba(26,26,26,0.11)" />
      <rect x="86" y="208" width="9" height="9" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="102" y="210" width="58" height="6" rx="1" fill="rgba(26,26,26,0.11)" />

      {/* Column header */}
      <rect x="200" y="93" width="330" height="26" fill="rgba(26,26,26,0.06)" />
      <rect x="210" y="103" width="75" height="6" rx="1" fill="rgba(26,26,26,0.18)" />
      <rect x="370" y="103" width="38" height="6" rx="1" fill="rgba(26,26,26,0.18)" />
      <rect x="450" y="103" width="50" height="6" rx="1" fill="rgba(26,26,26,0.18)" />

      {/* File row 1 */}
      <rect x="200" y="119" width="330" height="36" fill="rgba(26,26,26,0.025)" stroke="rgba(26,26,26,0.07)" strokeWidth="0.5" />
      <rect x="210" y="130" width="12" height="14" rx="1" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.16)" strokeWidth="0.75" />
      <rect x="228" y="134" width="85" height="6" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="372" y="134" width="28" height="6" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="452" y="134" width="44" height="6" rx="1" fill="rgba(26,26,26,0.09)" />

      {/* File row 2 */}
      <rect x="200" y="155" width="330" height="36" stroke="rgba(26,26,26,0.07)" strokeWidth="0.5" fill="transparent" />
      <rect x="210" y="166" width="12" height="14" rx="1" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.16)" strokeWidth="0.75" />
      <rect x="228" y="170" width="100" height="6" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="372" y="170" width="36" height="6" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="452" y="170" width="44" height="6" rx="1" fill="rgba(26,26,26,0.09)" />

      {/* File row 3 */}
      <rect x="200" y="191" width="330" height="36" fill="rgba(26,26,26,0.025)" stroke="rgba(26,26,26,0.07)" strokeWidth="0.5" />
      <rect x="210" y="202" width="12" height="14" rx="1" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.16)" strokeWidth="0.75" />
      <rect x="228" y="206" width="70" height="6" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="372" y="206" width="24" height="6" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="452" y="206" width="44" height="6" rx="1" fill="rgba(26,26,26,0.09)" />

      {/* File row 4 */}
      <rect x="200" y="227" width="330" height="36" stroke="rgba(26,26,26,0.07)" strokeWidth="0.5" fill="transparent" />
      <rect x="210" y="238" width="12" height="14" rx="1" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.16)" strokeWidth="0.75" />
      <rect x="228" y="242" width="92" height="6" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="372" y="242" width="32" height="6" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="452" y="242" width="44" height="6" rx="1" fill="rgba(26,26,26,0.09)" />

      {/* File row 5 */}
      <rect x="200" y="263" width="330" height="36" fill="rgba(26,26,26,0.025)" stroke="rgba(26,26,26,0.07)" strokeWidth="0.5" />
      <rect x="210" y="274" width="12" height="14" rx="1" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.16)" strokeWidth="0.75" />
      <rect x="228" y="278" width="78" height="6" rx="1" fill="rgba(26,26,26,0.14)" />
      <rect x="372" y="278" width="40" height="6" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="452" y="278" width="44" height="6" rx="1" fill="rgba(26,26,26,0.09)" />

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
        CLOUD STORAGE
      </text>
    </svg>
  );
}
