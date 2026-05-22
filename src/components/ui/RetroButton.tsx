import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CommonProps = {
  size?: "default" | "sm";
  children: ReactNode;
  className?: string;
  rotate?: number;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children">;

const baseClass = (size: "default" | "sm" = "default") =>
  `btn-retro${size === "sm" ? " btn-retro-sm" : ""}`;

export function RetroLinkButton({
  href,
  external,
  size = "default",
  children,
  className = "",
  rotate,
  style,
  ...rest
}: LinkProps) {
  const mergedStyle = rotate !== undefined ? { ...style, transform: `rotate(${rotate}deg)` } : style;
  const cls = `${baseClass(size)} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={mergedStyle} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={mergedStyle}>
      {children}
    </Link>
  );
}
