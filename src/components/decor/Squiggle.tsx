type Props = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function Squiggle({ width = 120, height = 16, color = "#D92B2F", className, style }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M2,8 Q15,1 30,8 T60,8 T90,8 T118,8"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
