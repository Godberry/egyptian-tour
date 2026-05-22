"use client";

import { useState } from "react";
import { Stamp } from "@/components/decor/Stamp";
import { NOTE_MAX_LENGTH, type StampRecord } from "@/lib/stamps";

type Props = {
  time: string;
  title: string;
  record?: StampRecord;
  stampColor: "red" | "green" | "blue";
  onStamp: (note?: string) => void;
  onUpdateNote: (note: string) => void;
  onRemove: () => void;
};

function formatTimestamp(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${mm}/${dd} ${hh}:${mi}`;
}

export function StampCard({
  time,
  title,
  record,
  stampColor,
  onStamp,
  onUpdateNote,
  onRemove,
}: Props) {
  const stamped = Boolean(record);
  const [draft, setDraft] = useState(record?.note ?? "");

  const handleStamp = () => onStamp(draft);
  const handleNoteBlur = () => {
    if (stamped && draft !== (record?.note ?? "")) {
      onUpdateNote(draft);
    }
  };

  return (
    <div className={`stamp-card${stamped ? " stamped" : ""}`}>
      <div className="stamp-card-head">
        <span className="time-badge">{time}</span>
        <h3 className="stamp-card-title">{title}</h3>
        {stamped && (
          <button
            type="button"
            className="stamp-card-remove"
            onClick={onRemove}
            aria-label={`取消蓋章：${title}`}
          >
            ✕
          </button>
        )}
      </div>

      <div className="stamp-card-body">
        {stamped ? (
          <>
            <Stamp text="已到訪" color={stampColor} />
            <span className="stamp-card-time" aria-label="蓋章時間">
              🕒 {formatTimestamp(record!.stampedAt)}
            </span>
          </>
        ) : (
          <button type="button" className="btn-retro stamp-card-action" onClick={handleStamp}>
            蓋章打卡 📮
          </button>
        )}
      </div>

      <label className="stamp-card-note">
        <span className="stamp-card-note-label">
          一句話心得（{draft.length}/{NOTE_MAX_LENGTH}）
        </span>
        <textarea
          value={draft}
          maxLength={NOTE_MAX_LENGTH}
          placeholder={stamped ? "寫下這一刻的感覺..." : "（蓋章前或蓋章後皆可填寫）"}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={handleNoteBlur}
          rows={2}
        />
      </label>
    </div>
  );
}
