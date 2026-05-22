"use client";

import { useEffect } from "react";
import { Sparkle } from "@/components/decor/Sparkle";
import { Stamp } from "@/components/decor/Stamp";
import { assetPath } from "@/lib/asset-path";

type Props = {
  dayLabel: string;
  totalStops: number;
  stampColor: "red" | "green" | "blue";
  photoSrc?: string;
  photoCaption?: string;
  onClose: () => void;
};

const CONFETTI = ["🎉", "✨", "🎊", "🌟", "🏮", "📮", "💖", "🍜"];
const CONFETTI_COUNT = 32;

export function DayCompleteCelebration({
  dayLabel,
  totalStops,
  stampColor,
  photoSrc,
  photoCaption,
  onClose,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="day-complete-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${dayLabel} 全部打卡完成`}
      onClick={onClose}
    >
      <div className="day-complete-confetti" aria-hidden="true">
        {Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
          const left = (i * 97) % 100;
          const delay = (i % 8) * 0.12;
          const duration = 1.6 + ((i * 37) % 14) / 10;
          const rotate = ((i * 53) % 360) - 180;
          return (
            <span
              key={i}
              className="day-complete-confetti-piece"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                ["--rot" as string]: `${rotate}deg`,
              }}
            >
              {CONFETTI[i % CONFETTI.length]}
            </span>
          );
        })}
      </div>

      <div
        className="day-complete-card"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <div className="day-complete-sparkles" aria-hidden="true">
          <Sparkle size={36} />
          <Sparkle size={28} color="var(--retro-red)" />
          <Sparkle size={32} color="var(--retro-blue)" />
        </div>
        <h2 className="day-complete-title">{dayLabel} 全部集滿！</h2>
        <p className="day-complete-sub">
          恭喜蒐集到 {totalStops} 枚紀念章 🎯
        </p>
        {photoSrc && (
          <figure className="day-complete-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(photoSrc)}
              alt={photoCaption || "過往台南回憶照"}
              loading="lazy"
              decoding="async"
            />
            {photoCaption && (
              <figcaption>📷 {photoCaption}</figcaption>
            )}
          </figure>
        )}
        <div className="day-complete-stamp-wrap">
          <Stamp text="COMPLETE ✦" color={stampColor} style={{ fontSize: "1.4rem" }} />
        </div>
        <button type="button" className="btn-retro" onClick={onClose}>
          繼續旅程 →
        </button>
      </div>
    </div>
  );
}
