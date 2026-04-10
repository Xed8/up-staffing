export default function HostingVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#ddd8d0" />

      {/* Browser window */}
      <rect x="76" y="64" width="448" height="326" rx="4" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.16)" strokeWidth="1" />

      {/* Browser chrome */}
      <rect x="76" y="64" width="448" height="42" rx="4" fill="rgba(26,26,26,0.08)" />
      <line x1="76" y1="105" x2="524" y2="105" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />

      {/* Traffic lights */}
      <circle cx="100" cy="85" r="6" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <circle cx="120" cy="85" r="6" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <circle cx="140" cy="85" r="6" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />

      {/* Address bar */}
      <rect x="172" y="73" width="264" height="24" rx="12" fill="rgba(26,26,26,0.06)" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
      <rect x="196" y="82" width="130" height="6" rx="3" fill="rgba(26,26,26,0.12)" />

      {/* Reload / menu icons */}
      <rect x="456" y="78" width="22" height="4" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="456" y="86" width="22" height="4" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="456" y="94" width="22" height="4" rx="1" fill="rgba(26,26,26,0.12)" />

      {/* Page nav bar */}
      <rect x="76" y="105" width="448" height="38" fill="rgba(26,26,26,0.04)" />
      <rect x="94" y="118" width="56" height="12" rx="1" fill="rgba(26,26,26,0.10)" />
      <rect x="280" y="120" width="34" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="326" y="120" width="34" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="372" y="120" width="34" height="8" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="436" y="114" width="68" height="22" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />

      {/* Hero band */}
      <rect x="76" y="143" width="448" height="100" fill="rgba(26,26,26,0.05)" />
      <rect x="188" y="160" width="224" height="14" rx="2" fill="rgba(26,26,26,0.14)" />
      <rect x="214" y="182" width="172" height="7" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="234" y="196" width="132" height="7" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="256" y="212" width="88" height="20" rx="1" fill="rgba(26,26,26,0.09)" stroke="rgba(26,26,26,0.15)" strokeWidth="1" />

      {/* Content + sidebar */}
      <rect x="76" y="243" width="316" height="146" fill="rgba(26,26,26,0.025)" />
      <rect x="94" y="260" width="198" height="8" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="94" y="276" width="258" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="94" y="288" width="234" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="94" y="300" width="246" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="94" y="312" width="210" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="94" y="353" width="116" height="26" rx="1" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.14)" strokeWidth="1" />

      <rect x="392" y="243" width="132" height="146" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.10)" strokeWidth="1" />
      <rect x="404" y="260" width="92" height="8" rx="1" fill="rgba(26,26,26,0.12)" />
      <rect x="404" y="276" width="84" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="404" y="288" width="92" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="404" y="300" width="76" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="404" y="312" width="88" height="5" rx="1" fill="rgba(26,26,26,0.08)" />
      <rect x="404" y="324" width="72" height="5" rx="1" fill="rgba(26,26,26,0.08)" />

      {/* Status bar */}
      <rect x="76" y="363" width="448" height="27" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.10)" strokeWidth="0.5" />
      <circle cx="94" cy="376" r="5" fill="rgba(26,26,26,0.10)" stroke="rgba(26,26,26,0.16)" strokeWidth="0.75" />
      <rect x="106" y="373" width="82" height="6" rx="1" fill="rgba(26,26,26,0.10)" />

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
        VPS HOSTING
      </text>
    </svg>
  );
}
