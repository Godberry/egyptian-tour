"use client";

import { useCallback, useSyncExternalStore } from "react";

export type StampRecord = {
  stampedAt: string;
  note?: string;
};

export type StampStore = Record<string, StampRecord>;

const STORAGE_KEY = "egyptian-tour:stamps:v1";
export const NOTE_MAX_LENGTH = 50;

const EMPTY_STORE: StampStore = Object.freeze({}) as StampStore;

export function makeStopKey(dayId: string, index: number): string {
  return `${dayId}-${index}`;
}

let cachedSnapshot: StampStore | null = null;
let cachedRaw: string | null = null;

function readStore(): StampStore {
  if (typeof window === "undefined") return EMPTY_STORE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw && cachedSnapshot) return cachedSnapshot;
    cachedRaw = raw;
    if (!raw) {
      cachedSnapshot = EMPTY_STORE;
      return cachedSnapshot;
    }
    const parsed = JSON.parse(raw);
    cachedSnapshot =
      typeof parsed === "object" && parsed !== null ? (parsed as StampStore) : EMPTY_STORE;
    return cachedSnapshot;
  } catch {
    cachedSnapshot = EMPTY_STORE;
    return cachedSnapshot;
  }
}

function writeStore(store: StampStore): void {
  if (typeof window === "undefined") return;
  try {
    const raw = JSON.stringify(store);
    window.localStorage.setItem(STORAGE_KEY, raw);
    cachedRaw = raw;
    cachedSnapshot = store;
    window.dispatchEvent(new Event("egyptian-tour:stamps"));
  } catch {
    // quota / private mode — ignore
  }
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedRaw = null;
      callback();
    }
  };
  const onLocal = () => callback();
  window.addEventListener("storage", onStorage);
  window.addEventListener("egyptian-tour:stamps", onLocal);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("egyptian-tour:stamps", onLocal);
  };
}

function getServerSnapshot(): StampStore {
  return EMPTY_STORE;
}

export function useStamps() {
  const store = useSyncExternalStore(subscribe, readStore, getServerSnapshot);
  const hydrated = typeof window !== "undefined";

  const stamp = useCallback((key: string, note?: string) => {
    const current = readStore();
    const next: StampStore = {
      ...current,
      [key]: {
        stampedAt: new Date().toISOString(),
        note: note?.trim() || undefined,
      },
    };
    writeStore(next);
  }, []);

  const updateNote = useCallback((key: string, note: string) => {
    const current = readStore();
    const existing = current[key];
    if (!existing) return;
    const next: StampStore = {
      ...current,
      [key]: { ...existing, note: note.trim() || undefined },
    };
    writeStore(next);
  }, []);

  const remove = useCallback((key: string) => {
    const current = readStore();
    if (!(key in current)) return;
    const next: StampStore = { ...current };
    delete next[key];
    writeStore(next);
  }, []);

  return { store, hydrated, stamp, updateNote, remove };
}

export function exportStampsAsJson(store: StampStore): void {
  if (typeof window === "undefined") return;
  const blob = new Blob([JSON.stringify(store, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `tainan-memories-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
