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

      <main id="main-content" className="container">
        <div className="day-tabs" role="tablist" aria-label="行程日期">
          {days.map((d) => (
            <button
              key={d.id}
              role="tab"
              id={`day-tab-${d.id}`}
              aria-selected={active === d.id}
              aria-controls={`day-panel-${d.id}`}
              tabIndex={active === d.id ? 0 : -1}
              className={`day-tab ${active === d.id ? "active" : ""}`}
              onClick={() => setActive(d.id)}
            >
              <span className="tab-icon" aria-hidden="true">{d.icon}</span>
              <span className="tab-label">{d.label}</span>
              <span className="tab-date">{d.date}</span>
            </button>
          ))}
        </div>

        {days.map((d) => {
          const filled = 0;
          const percent = Math.round((filled / d.slots) * 100);
          return (
          <div
            key={d.id}
            role="tabpanel"
            id={`day-panel-${d.id}`}
            aria-labelledby={`day-tab-${d.id}`}
            hidden={active !== d.id}
            className={`day-panel ${active === d.id ? "active" : ""}`}
          >
            <div className="day-title-wrapper">
              {d.chars.map((c, i) => (
                <div key={i} className="circle-text">{c}</div>
              ))}
              <span className="date-text">{d.full}</span>
            </div>
            <div
              className="memory-progress"
              role="progressbar"
              aria-valuenow={filled}
              aria-valuemin={0}
              aria-valuemax={d.slots}
              aria-label={`第 ${d.id} 日打卡進度`}
            >
              <span aria-hidden="true">📸</span>
              <div className="memory-progress-bar">
                <div className="memory-progress-fill" style={{ width: `${percent}%` }} />
              </div>
              <span>{filled}/{d.slots}</span>
            </div>
            <p className="memory-hint">點擊空格上傳照片（行程結束後填入回憶）</p>
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
        );
        })}
      </main>
    </>
  );
}
