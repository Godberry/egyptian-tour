type Props = {
  text: string;
  color?: "red" | "green" | "blue";
  className?: string;
  style?: React.CSSProperties;
};

const palette = {
  red: { fg: "#D92B2F", bg: "#FFF3D6" },
  green: { fg: "#187A2F", bg: "#FFF3D6" },
  blue: { fg: "#264478", bg: "#FFF3D6" },
};

export function Stamp({ text, color = "red", className, style }: Props) {
  const c = palette[color];
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        padding: "0.35rem 0.9rem",
        background: c.bg,
        color: c.fg,
        border: `3px double ${c.fg}`,
        borderRadius: "999px",
        fontWeight: 900,
        fontSize: "0.95rem",
        letterSpacing: "0.1em",
        transform: "rotate(-6deg)",
        boxShadow: `2px 2px 0 ${c.fg}`,
        ...style,
      }}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
