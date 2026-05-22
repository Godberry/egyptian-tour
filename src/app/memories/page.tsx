"use client";

import { useState } from "react";
import Link from "next/link";

const days = [
  { id: 1, icon: "🌅", label: "第一天", date: "5/23", chars: ["第", "一", "日"], full: "5/23 (六)", slots: 15 },
  { id: 2, icon: "☀️", label: "第二天", date: "5/24", chars: ["第", "二", "日"], full: "5/24 (日)", slots: 15 },
  { id: 3, icon: "🌇", label: "第三天", date: "5/25", chars: ["第", "三", "日"], full: "5/25 (一)", slots: 15 },
];

export default function MemoriesPage() {
  const [active, setActive] = useState(1);

  return (
    <>
      <header className="hero sub" style={{ paddingBottom: "2rem" }}>
        <div className="hero-bg-texture" />
        <div className="hero-content">
          <h1 className="sticker-text">回憶打卡</h1>
          <p className="hero-subtitle">用照片記錄我們的台南旅程</p>
        </div>
        <div className="hero-banner-bottom">
          <span>上傳你的美好瞬間</span>
          <Link href="/" className="btn-retro" style={{ textDecoration: "none" }}>
            回行程總覽
          </Link>
          <span>打造專屬回憶錄</span>
        </div>
      </header>

      <main className="container">
        <div className="day-tabs">
          {days.map((d) => (
            <button
              key={d.id}
              className={`day-tab ${active === d.id ? "active" : ""}`}
              onClick={() => setActive(d.id)}
            >
              <span className="tab-icon">{d.icon}</span>
              <span className="tab-label">{d.label}</span>
              <span className="tab-date">{d.date}</span>
            </button>
          ))}
        </div>

        {days.map((d) => (
          <div key={d.id} className={`day-panel ${active === d.id ? "active" : ""}`}>
            <div className="day-title-wrapper">
              {d.chars.map((c, i) => (
                <div key={i} className="circle-text">{c}</div>
              ))}
              <span className="date-text">{d.full}</span>
            </div>
            <div className="memory-grid">
              {Array.from({ length: d.slots }).map((_, i) => (
                <div key={i} className="memory-slot">
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2rem" }}>📷</div>
                    <div style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>#{i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
