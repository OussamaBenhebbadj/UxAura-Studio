export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E6BFF" />
          <stop offset="0.5" stopColor="#7A3FFF" />
          <stop offset="1" stopColor="#D94FFF" />
        </linearGradient>
      </defs>
      <path
        d="M6 8C6 8 6 24 6 26C6 32 12 34 16 30L24 20L32 30C36 34 42 32 42 26C42 24 42 8 42 8"
        stroke="url(#logoGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FigmaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19 28.5A9.5 9.5 0 1 1 19 9.5h0v19z" fill="#1ABCFE" />
      <path d="M0 38a9.5 9.5 0 0 1 9.5-9.5H19V38a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 19a9.5 9.5 0 0 0 9.5 9.5H19V9.5H9.5A9.5 9.5 0 0 0 0 19z" fill="#F24E1E" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#A259FF" />
    </svg>
  );
}

export function XdIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#3B0060" />
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#FFFFFF"
      >
        Xd
      </text>
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PencilIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4 20l1-4.5L15.5 5A2.12 2.12 0 1119 8.5L8.5 19 4 20z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.5 6.5l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="7" cy="5" r="4" />
      <path d="M0 19c0-4 3-7 7-7s7 3 7 7z" />
      <circle cx="20" cy="6" r="3.2" opacity="0.85" />
      <path d="M13.5 19c0.3-3.4 2.7-6 6.5-6s6.2 2.6 6.5 6z" opacity="0.85" />
    </svg>
  );
}

export function SearchAuditIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 10.5l2 2 3.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 6.5l8 6.5 8-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7.2" cy="8" r="1.4" />
      <rect x="6" y="10.5" width="2.4" height="7.5" />
      <path d="M11 10.5h2.3v1.2c.5-.85 1.5-1.4 2.7-1.4 2 0 3 1.3 3 3.7v4h-2.4v-3.5c0-1.1-.4-1.9-1.5-1.9-.8 0-1.3.55-1.5 1.1-.08.2-.1.5-.1.8v3.5H11v-7.5z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function CopyrightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fill="var(--color-dark)">
        C
      </text>
    </svg>
  );
}

export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
