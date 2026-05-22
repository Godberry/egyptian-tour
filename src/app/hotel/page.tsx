import type { Metadata } from "next";
import { SubHero, BackToHomeButton } from "@/components/hero/SubHero";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "住宿資訊 | 天下南隅",
};

export default function HotelPage() {
  return (
    <>
      <SubHero
        title="住宿資訊"
        bannerLeft="Provintia Hotel"
        bannerRight="天下南隅"
      />
      <main id="main-content" className="container">
        <div
          className="flex-row mobile-col"
          style={{ margin: "0 auto", maxWidth: 900, gap: "4rem", alignItems: "center" }}
        >
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "center", position: "relative" }}>
            <img
              src={assetPath("/assets/hotel_provintia.png")}
              alt="天下南隅飯店外觀"
              width={420}
              height={300}
              loading="eager"
              decoding="async"
              className="hotel-img"
            />
            <span className="hotel-zzz" aria-hidden="true">💤</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "2.6rem", lineHeight: 1.2, marginBottom: "0.5rem", letterSpacing: "2px", color: "var(--retro-red)", fontWeight: 900 }}>
                天下南隅
              </h2>
              <p style={{ color: "var(--retro-green)", fontSize: "1.2rem" }}>
                台南市最高質感的摩登復古飯店
              </p>
            </div>

            <div className="info-card">
              <p><strong>📍 地址：</strong> 臺南市北區成功路202號</p>
              <p><strong>入住時間：</strong> 5/23 (六) 15:00</p>
              <p><strong>退房時間：</strong> 5/25 (一) 11:00</p>
            </div>

            <p style={{ fontSize: "1.1rem" }}>
              體驗府城的歷史時光，享受帶有摩登台味的文青氛圍空間。我們將在這裡度過舒適的兩晚！
            </p>
          </div>
        </div>

        <BackToHomeButton />
      </main>
    </>
  );
}
