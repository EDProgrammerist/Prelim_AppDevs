type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21c-4-4.5-7-8.2-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5c0 3.3-3 7-7 11.5Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

export function SendIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12 20 4 13 20l-2-7-7-1Z" />
    </svg>
  );
}

export function CodeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <polyline points="8 5 3 12 8 19" />
      <polyline points="16 5 21 12 16 19" />
    </svg>
  );
}

export function FolderIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

export function AwardIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
    </svg>
  );
}

export function ServerIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SettingsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}