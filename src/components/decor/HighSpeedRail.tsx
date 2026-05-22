type Props = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function HighSpeedRail({ size = 28, className, style }: Props) {
  return (
    <svg
      width={(size * 80) / 28}
      height={size}
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M5 5 Q3 5 3 7 L3 21 Q3 23 5 23 L58 23 Q72 23 77 14 Q72 5 58 5 Z"
        fill="#F4F1EA"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect x="8" y="9" width="48" height="5" fill="#264478" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="20" y1="9" x2="20" y2="14" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="32" y1="9" x2="32" y2="14" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="44" y1="9" x2="44" y2="14" stroke="#1A1A1A" strokeWidth="1.5" />
      <path
        d="M60 9 Q68 10 73 14 Q68 11 62 10 Z"
        fill="#264478"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 18 L58 18 Q70 18 75 14"
        stroke="#D92B2F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
