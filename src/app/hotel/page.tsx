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
      <main className="container">
        <div
          className="flex-row mobile-col"
          style={{ margin: "0 auto", maxWidth: 900, gap: "4rem", alignItems: "center" }}
        >
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "center" }}>
            <img src={assetPath("/assets/hotel_provintia.png")} alt="天下南隅" className="hotel-img" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
            <div>
              <h3 style={{ fontSize: "2.6rem", lineHeight: 1.2, marginBottom: "0.5rem", letterSpacing: "2px" }}>
                天下南隅
              </h3>
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
