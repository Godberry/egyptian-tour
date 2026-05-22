type Props = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Cloud({ size = 80, className, style }: Props) {
  return (
    <svg
      width={size}
      height={(size * 0.66) | 0}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M30 60 Q10 60 12 42 Q14 26 30 28 Q34 12 56 14 Q76 8 84 28 Q108 28 108 46 Q108 64 90 64 Z"
        fill="#F4F1EA"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="42" cy="46" r="3" fill="#1A1A1A" />
      <circle cx="64" cy="46" r="3" fill="#1A1A1A" />
      <path d="M48 56 Q53 60 58 56" stroke="#D92B2F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
