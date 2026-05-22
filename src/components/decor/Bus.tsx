type Props = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Bus({ size = 32, className, style }: Props) {
  return (
    <svg
      width={(size * 60) / 32}
      height={size}
      viewBox="0 0 60 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M3 8 Q3 5 6 5 L48 5 Q51 5 52 7 L55 13 L55 23 Q55 26 52 26 L6 26 Q3 26 3 23 Z"
        fill="#E5CA85"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M48 8 L52 13 L52 17 L46 17 L46 8 Z"
        fill="#B7D5E3"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="6" y="9" width="7" height="7" fill="#B7D5E3" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="16" y="9" width="7" height="7" fill="#B7D5E3" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="26" y="9" width="7" height="7" fill="#B7D5E3" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="36" y="9" width="7" height="7" fill="#B7D5E3" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="4" y1="20" x2="55" y2="20" stroke="#D92B2F" strokeWidth="2" />
      <circle cx="14" cy="28" r="3.5" fill="#1A1A1A" />
      <circle cx="14" cy="28" r="1.2" fill="#F4F1EA" />
      <circle cx="44" cy="28" r="3.5" fill="#1A1A1A" />
      <circle cx="44" cy="28" r="1.2" fill="#F4F1EA" />
      <circle cx="53" cy="22" r="1.3" fill="#FFF3D6" stroke="#1A1A1A" strokeWidth="1" />
    </svg>
  );
}
