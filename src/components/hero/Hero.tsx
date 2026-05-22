import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { Sparkle } from "@/components/decor/Sparkle";
import { Cloud } from "@/components/decor/Cloud";

const stickers = [
  { src: "/assets/icon_scooter.png", key: "scooter", cls: "sticker-1" },
  { src: "/assets/icon_boba.png", key: "boba", cls: "sticker-2" },
  { src: "/assets/icon_wagui.png", key: "wagui", cls: "sticker-3" },
  { src: "/assets/icon_bwabwei.png", key: "bwabwei", cls: "sticker-4" },
];

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg-texture" />

      <Cloud size={70} className="hero-decor hero-cloud-1" />
      <Cloud size={56} className="hero-decor hero-cloud-2" />
      <Sparkle size={28} color="#FFF3D6" className="hero-decor hero-sparkle-1" />
      <Sparkle size={20} color="#F4A6B8" className="hero-decor hero-sparkle-2" />
      <Sparkle size={32} color="#E5CA85" className="hero-decor hero-sparkle-3" />
      <Sparkle size={18} color="#B5DDC1" className="hero-decor hero-sparkle-4" />

      {stickers.map((s) => (
        <img
          key={s.key}
          src={assetPath(s.src)}
          alt=""
          role="presentation"
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
