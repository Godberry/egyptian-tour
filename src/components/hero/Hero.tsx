import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

const stickers = [
  { src: "/assets/icon_scooter.png", alt: "機車", cls: "sticker-1" },
  { src: "/assets/icon_boba.png", alt: "珍奶", cls: "sticker-2" },
  { src: "/assets/icon_wagui.png", alt: "碗粿", cls: "sticker-3" },
  { src: "/assets/icon_bwabwei.png", alt: "擲茭", cls: "sticker-4" },
];

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg-texture" />

      {stickers.map((s) => (
        <img
          key={s.alt}
          src={assetPath(s.src)}
          alt={s.alt}
          width={140}
          height={140}
          className={`floating-sticker ${s.cls}`}
        />
      ))}

      <div className="hero-content">
        <h1 className="sticker-text">台南之旅</h1>
        <div className="date-badge">
          <span>2026.05.23</span>
          <span className="squiggle">~</span>
          <span>05.25</span>
        </div>
        <div className="vertical-text left">
          採<br />自<br />回<br />憶
        </div>
        <div className="vertical-text right">
          手<br />感<br />安<br />排
        </div>
      </div>

      <div className="hero-banner-bottom">
        <span>阿堡榮譽出品</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/#day1" className="btn-retro" style={{ textDecoration: "none" }}>
            行程總覽
          </Link>
          <Link href="/hotel" className="btn-retro" style={{ textDecoration: "none" }}>
            住宿資訊
          </Link>
          <Link href="/transport" className="btn-retro" style={{ textDecoration: "none" }}>
            交通資訊
          </Link>
          <Link
            href="/memories"
            className="btn-retro"
            style={{
              textDecoration: "none",
              background: "var(--retro-yellow)",
              borderColor: "var(--retro-green)",
            }}
          >
            📸 回憶打卡
          </Link>
        </div>
        <span>酸甘甜的全新行程</span>
      </div>
    </header>
  );
}
