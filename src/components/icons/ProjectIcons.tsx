export function SeraProjectIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="seraCircleClip">
          <circle cx="100" cy="100" r="88" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="88" fill="none" stroke="#1E8C8C" strokeWidth="6" />
      <g clipPath="url(#seraCircleClip)">
        <path d="M12 150 L70 90 L100 120 L188 60 L188 188 L12 188 Z" fill="#1E8C8C" opacity="0.9" />
      </g>
      {/* Building */}
      <g transform="translate(38,55)">
        <path d="M35 0 L70 30 L70 110 L0 110 L0 30 Z" fill="#0E3A4D" />
        <rect x="14" y="45" width="12" height="12" fill="#e9f6f6" />
        <rect x="32" y="45" width="12" height="12" fill="#e9f6f6" />
        <rect x="14" y="65" width="12" height="12" fill="#e9f6f6" />
        <rect x="32" y="65" width="12" height="12" fill="#e9f6f6" />
        <rect x="14" y="85" width="12" height="12" fill="#e9f6f6" />
        <rect x="32" y="85" width="12" height="12" fill="#e9f6f6" />
      </g>
      {/* Graduation cap */}
      <g transform="translate(95,40)">
        <path d="M45 0 L90 20 L45 40 L0 20 Z" fill="#7FDCD4" />
        <path d="M45 40 L45 58 C45 66 25 66 25 58 L25 32" fill="none" stroke="#3FA79D" strokeWidth="5" />
        <circle cx="86" cy="24" r="4" fill="#3FA79D" />
        <line x1="86" y1="20" x2="86" y2="45" stroke="#3FA79D" strokeWidth="3" />
      </g>
      {/* Bus */}
      <g transform="translate(58,110)">
        <rect x="0" y="10" width="115" height="55" rx="14" fill="#1E8C8C" />
        <rect x="14" y="22" width="35" height="24" rx="4" fill="#E9F6F6" />
        <rect x="60" y="22" width="35" height="24" rx="4" fill="#E9F6F6" />
        <circle cx="26" cy="70" r="10" fill="#0E3A4D" />
        <circle cx="90" cy="70" r="10" fill="#0E3A4D" />
      </g>
    </svg>
  );
}

export function GenericWebIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="#7A3FFF" strokeWidth="6" />
      <rect x="42" y="55" width="116" height="86" rx="10" fill="#7A3FFF" opacity="0.12" />
      <rect x="42" y="55" width="116" height="20" rx="10" fill="#7A3FFF" />
      <circle cx="54" cy="65" r="3.5" fill="#fff" />
      <circle cx="64" cy="65" r="3.5" fill="#fff" />
      <circle cx="74" cy="65" r="3.5" fill="#fff" />
      <rect x="55" y="90" width="60" height="10" rx="4" fill="#A94DFF" />
      <rect x="55" y="106" width="90" height="8" rx="4" fill="#A94DFF" opacity="0.6" />
      <rect x="55" y="120" width="70" height="8" rx="4" fill="#A94DFF" opacity="0.6" />
    </svg>
  );
}

export function GenericMobileIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="#D94FFF" strokeWidth="6" />
      <rect x="70" y="45" width="60" height="110" rx="12" fill="#D94FFF" opacity="0.12" stroke="#D94FFF" strokeWidth="3" />
      <rect x="80" y="58" width="40" height="70" rx="4" fill="#D94FFF" opacity="0.5" />
      <circle cx="100" cy="142" r="5" fill="#D94FFF" />
    </svg>
  );
}
