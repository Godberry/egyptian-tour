import type { Metadata } from "next";
import Link from "next/link";
import { SubHero } from "@/components/hero/SubHero";

export const metadata: Metadata = {
  title: "交通資訊 | 台南柑仔蜜之旅",
};

export default function TransportPage() {
  return (
    <>
      <SubHero title="交通資訊" bannerLeft="交通攻略" bannerRight="行前必看" />
      <main className="container">
        <div
          className="card dashed"
          style={{ margin: "0 auto", maxWidth: 700, padding: "4rem 2rem", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.5rem", color: "var(--retro-green)" }}>目前內容施工中...</p>
          <p style={{ marginTop: "1rem" }}>
            高鐵時刻表與當地租機車等相關交通資訊，待後續補齊喔！
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/" className="btn-retro" style={{ textDecoration: "none" }}>
            回首頁
          </Link>
        </div>
      </main>
    </>
  );
}
