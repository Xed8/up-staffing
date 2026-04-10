export default function VirtualAssistVisual() {
  return (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="480" fill="#e8e4de" />

      {/* Connection lines */}
      <line x1="300" y1="216" x2="300" y2="88" stroke="rgba(26,26,26,0.12)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="300" y1="216" x2="148" y2="354" stroke="rgba(26,26,26,0.12)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="300" y1="216" x2="452" y2="354" stroke="rgba(26,26,26,0.12)" strokeWidth="1" strokeDasharray="5 4" />

      {/* Hub circle */}
      <circle cx="300" cy="216" r="68" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.17)" strokeWidth="1.5" />
      {/* Hub content */}
      <rect x="266" y="196" width="68" height="9" rx="2" fill="rgba(26,26,26,0.14)" />
      <rect x="272" y="212" width="56" height="5" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="272" y="224" width="46" height="5" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="276" y="236" width="48" height="14" rx="1" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.15)" strokeWidth="0.75" />

      {/* Node 1 — top (email / calendar) */}
      <circle cx="300" cy="64" r="44" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.17)" strokeWidth="1.25" />
      <rect x="274" y="48" width="52" height="7" rx="1" fill="rgba(26,26,26,0.13)" />
      <rect x="278" y="62" width="44" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="278" y="72" width="36" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      {/* Small calendar grid hint */}
      <rect x="280" y="82" width="6" height="5" rx="0.5" fill="rgba(26,26,26,0.10)" />
      <rect x="290" y="82" width="6" height="5" rx="0.5" fill="rgba(26,26,26,0.10)" />
      <rect x="300" y="82" width="6" height="5" rx="0.5" fill="rgba(26,26,26,0.10)" />

      {/* Node 2 — bottom-left (CRM / pipeline) */}
      <circle cx="148" cy="354" r="44" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.17)" strokeWidth="1.25" />
      <rect x="122" y="337" width="52" height="7" rx="1" fill="rgba(26,26,26,0.13)" />
      <rect x="126" y="351" width="44" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="126" y="361" width="36" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      {/* Pipeline dots */}
      <circle cx="126" cy="377" r="4" fill="rgba(26,26,26,0.12)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <circle cx="140" cy="377" r="4" fill="rgba(26,26,26,0.12)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <circle cx="154" cy="377" r="4" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <circle cx="168" cy="377" r="4" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />

      {/* Node 3 — bottom-right (project / tasks) */}
      <circle cx="452" cy="354" r="44" fill="rgba(26,26,26,0.05)" stroke="rgba(26,26,26,0.17)" strokeWidth="1.25" />
      <rect x="426" y="337" width="52" height="7" rx="1" fill="rgba(26,26,26,0.13)" />
      <rect x="430" y="351" width="44" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="430" y="361" width="36" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      {/* Task checkboxes */}
      <rect x="430" y="374" width="9" height="9" rx="1" fill="rgba(26,26,26,0.07)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <rect x="444" y="377" width="32" height="4" rx="1" fill="rgba(26,26,26,0.09)" />
      <rect x="430" y="388" width="9" height="9" rx="1" fill="rgba(26,26,26,0.12)" stroke="rgba(26,26,26,0.18)" strokeWidth="0.75" />
      <rect x="444" y="391" width="24" height="4" rx="1" fill="rgba(26,26,26,0.09)" />

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
        VIRTUAL ASSIST
      </text>
    </svg>
  );
}
