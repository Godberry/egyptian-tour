import Link from "next/link";
import type { ReactNode } from "react";

export function SubHero({
  title,
  bannerLeft,
  bannerRight,
  bannerExtra,
  subtitle,
}: {
  title: string;
  bannerLeft: string;
  bannerRight: string;
  bannerExtra?: ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="hero sub">
      <div className="hero-bg-texture" />
      <div className="hero-content">
        <h1 className="sticker-text">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
      <div className="hero-banner-bottom">
        <span>{bannerLeft}</span>
        {bannerExtra ?? <span className="squiggle">~</span>}
        <span>{bannerRight}</span>
      </div>
    </header>
  );
}

export function BackToHomeButton({ label = "回行程總覽" }: { label?: string }) {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <Link href="/" className="btn-retro" style={{ textDecoration: "none" }}>
        {label}
      </Link>
    </div>
  );
}
