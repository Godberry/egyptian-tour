import type { Metadata } from "next";
import Link from "next/link";
import { SubHero } from "@/components/hero/SubHero";

export const metadata: Metadata = {
  title: "交通資訊 | 台南柑仔蜜之旅",
};

type Leg = {
  label: string;
  date: string;
  carrier: string;
  depart: { time: string; place: string };
  arrive: { time: string; place: string };
};

const legs: Leg[] = [
  {
    label: "去程",
    date: "5/23 (六)",
    carrier: "和欣客運",
    depart: { time: "07:10", place: "重陽站" },
    arrive: { time: "約 11:30", place: "台南轉運站" },
  },
  {
    label: "回程",
    date: "5/25 (一)",
    carrier: "台灣高鐵",
    depart: { time: "19:41", place: "台南" },
    arrive: { time: "21:39", place: "台北" },
  },
];

export default function TransportPage() {
  return (
    <>
      <SubHero title="交通資訊" bannerLeft="交通攻略" bannerRight="行前必看" />
      <main id="main-content" className="container">
        <div
          style={{
            display: "grid",
            gap: "2rem",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          {legs.map((leg) => (
            <article key={leg.label} className="card" style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h2 style={{ margin: 0 }}>
                  {leg.label}．{leg.carrier}
                </h2>
                <span style={{ color: "var(--retro-green)", fontWeight: 600 }}>
                  {leg.date}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                    {leg.depart.time}
                  </div>
                  <div>{leg.depart.place}</div>
                </div>

                <div
                  className="transport-arrow"
                  aria-hidden="true"
                  style={{ flex: 1, minWidth: 80 }}
                >
                  <span className="transport-emoji">{leg.label === "去程" ? "🚌" : "🚄"}</span>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                    {leg.arrive.time}
                  </div>
                  <div>{leg.arrive.place}</div>
                </div>
              </div>
            </article>
          ))}
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
