"use client";

import { useMemo, useState } from "react";
import { Stamp } from "@/components/decor/Stamp";
import { Sparkle } from "@/components/decor/Sparkle";
import { BackToHomeButton } from "@/components/hero/SubHero";
import { StampCard } from "@/components/memories/StampCard";
import { DayCompleteCelebration } from "@/components/memories/DayCompleteCelebration";
import {
  day1Items,
  day2Items,
  day3Items,
  days as itineraryDays,
} from "@/components/itinerary/itinerary-data";
import {
  exportStampsAsJson,
  makeStopKey,
  useStamps,
} from "@/lib/stamps";

const dayMeta = [
  { id: "day1", icon: "🌅", label: "第一天", date: "5/23", chars: ["第", "一", "日"], full: "5/23 (六)", color: "red" as const, items: day1Items, photo: "/assets/easter-egg-1.jpg", caption: "府城時尚誌．那次試戴的墨鏡" },
  { id: "day2", icon: "☀️", label: "第二天", date: "5/24", chars: ["第", "二", "日"], full: "5/24 (日)", color: "green" as const, items: day2Items, photo: "/assets/easter-egg-2.jpg", caption: "巷弄追光．黃昏台南剪影" },
  { id: "day3", icon: "🌇", label: "第三天", date: "5/25", chars: ["第", "三", "日"], full: "5/25 (一)", color: "blue" as const, items: day3Items, photo: "/assets/easter-egg-3.jpg", caption: "南方花語．一朵金喇叭花" },
];

const totalStops = dayMeta.reduce((sum, d) => sum + d.items.length, 0);

export default function MemoriesPage() {
  void itineraryDays;
  const [activeId, setActiveId] = useState("day1");
  const [celebratingDayId, setCelebratingDayId] = useState<string | null>(null);
  const { store, hydrated, stamp, updateNote, remove } = useStamps();

  const totalStamped = useMemo(() => Object.keys(store).length, [store]);
  const allComplete = hydrated && totalStamped >= totalStops;

  const handleStamp = (dayId: string, idx: number, note?: string) => {
    const day = dayMeta.find((d) => d.id === dayId);
    if (!day) return;
    const key = makeStopKey(dayId, idx);
    const alreadyStamped = Boolean(store[key]);
    const currentFilled = day.items.reduce(
      (n, _, i) => (store[makeStopKey(dayId, i)] ? n + 1 : n),
      0,
    );
    const willComplete =
      !alreadyStamped && currentFilled + 1 === day.items.length;
    stamp(key, note);
    if (willComplete) setCelebratingDayId(dayId);
  };

  const celebratingDay = celebratingDayId
    ? dayMeta.find((d) => d.id === celebratingDayId)
    : null;

  const handleTabClick = (dayId: string) => {
    setActiveId(dayId);
    const day = dayMeta.find((d) => d.id === dayId);
    if (!day) return;
    const filled = day.items.reduce(
      (n, _, i) => (store[makeStopKey(dayId, i)] ? n + 1 : n),
      0,
    );
    if (filled === day.items.length) {
      setCelebratingDayId(dayId);
    }
  };

  return (
    <>
      <header className="hero sub" style={{ paddingBottom: "2rem" }}>
        <div className="hero-bg-texture" />
        <div className="hero-content">
          <h1 className="sticker-text">回憶打卡</h1>
          <p className="hero-subtitle">在台南旅程的每一站，蓋下屬於你的章</p>
        </div>
        <div className="hero-banner-bottom">
          <span>集滿 {totalStops} 站章</span>
          <span className="squiggle">~</span>
          <span>解鎖完成貼紙</span>
        </div>
      </header>

      <main id="main-content" className="container">
        {allComplete && (
          <div className="trip-complete">
            <Sparkle size={28} />
            <Stamp text="旅程完成 ✦" color="green" style={{ fontSize: "1.4rem" }} />
            <Sparkle size={28} />
            <button
              type="button"
              className="btn-retro"
              onClick={() => exportStampsAsJson(store)}
            >
              匯出回憶 JSON ⬇
            </button>
          </div>
        )}

        <div className="day-tabs" role="tablist" aria-label="行程日期">
          {dayMeta.map((d) => (
            <button
              key={d.id}
              role="tab"
              id={`day-tab-${d.id}`}
              aria-selected={activeId === d.id}
              aria-controls={`day-panel-${d.id}`}
              tabIndex={activeId === d.id ? 0 : -1}
              className={`day-tab ${activeId === d.id ? "active" : ""}`}
              onClick={() => handleTabClick(d.id)}
            >
              <span className="tab-icon" aria-hidden="true">{d.icon}</span>
              <span className="tab-label">{d.label}</span>
              <span className="tab-date">{d.date}</span>
            </button>
          ))}
        </div>

        {dayMeta.map((d) => {
          const slots = d.items.length;
          const filled = d.items.reduce(
            (n, _, idx) => (store[makeStopKey(d.id, idx)] ? n + 1 : n),
            0,
          );
          const percent = slots ? Math.round((filled / slots) * 100) : 0;

          return (
            <div
              key={d.id}
              role="tabpanel"
              id={`day-panel-${d.id}`}
              aria-labelledby={`day-tab-${d.id}`}
              hidden={activeId !== d.id}
              className={`day-panel ${activeId === d.id ? "active" : ""}`}
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
                aria-valuemax={slots}
                aria-label={`${d.label}打卡進度`}
              >
                <span aria-hidden="true">📮</span>
                <div className="memory-progress-bar">
                  <div className="memory-progress-fill" style={{ width: `${percent}%` }} />
                </div>
                <span>{filled}/{slots}</span>
              </div>
              <p className="memory-hint">點擊站點蓋章，並留下一句心得 ✏️</p>

              <div className="stamp-card-list">
                {d.items.map((item, idx) => {
                  const key = makeStopKey(d.id, idx);
                  const record = store[key];
                  return (
                    <StampCard
                      key={`${key}-${record ? "on" : "off"}`}
                      time={item.time}
                      title={item.title}
                      record={record}
                      stampColor={d.color}
                      onStamp={(note) => handleStamp(d.id, idx, note)}
                      onUpdateNote={(note) => updateNote(key, note)}
                      onRemove={() => remove(key)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        <BackToHomeButton />
      </main>

      {celebratingDay && (
        <DayCompleteCelebration
          dayLabel={celebratingDay.label}
          totalStops={celebratingDay.items.length}
          stampColor={celebratingDay.color}
          photoSrc={celebratingDay.photo}
          photoCaption={celebratingDay.caption}
          onClose={() => setCelebratingDayId(null)}
        />
      )}
    </>
  );
}
