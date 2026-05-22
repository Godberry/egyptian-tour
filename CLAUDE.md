@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — produce a static export to `out/` (driven by `output: "export"` in `next.config.ts`)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (uses `eslint-config-next` flat config)

There is no test runner configured.

## Stack notes (read before coding)

- **Next.js 16.2.6 + React 19.2** with the App Router. The `AGENTS.md` warning applies: APIs and conventions differ from older Next.js — consult `node_modules/next/dist/docs/` when unsure rather than relying on prior knowledge.
- **Tailwind CSS v4** via `@tailwindcss/postcss`. There is no `tailwind.config.*`; theme tokens live in `src/app/globals.css` using the v4 `@theme` / CSS-variable approach. Edit tokens there, not in a JS config.
- TypeScript path alias `@/*` → `src/*`.

## Deployment & basePath (important)

The site deploys to GitHub Pages as a static export. `next.config.ts` sets `output: "export"`, `basePath`/`assetPrefix` to `/egyptian-tour` in production, `images.unoptimized: true`, and `trailingSlash: true`.

Consequences when writing code:
- Internal links go through `next/link` (it prepends `basePath` automatically). Do **not** hardcode `/egyptian-tour/...`.
- Static asset references (`<img>`, CSS `url(...)`, `fetch`) do **not** get `basePath` prepended automatically. Use `next/image` or prefix with `process.env.NEXT_PUBLIC_BASE_PATH`-style logic to avoid the bug fixed in commit `4a86af2` (broken images under the GH Pages subpath).
- Avoid runtime/server-only features (route handlers, dynamic rendering, middleware) — they don't survive `output: "export"`.

CI: `.github/workflows/deploy.yml` builds on push to `main` with `NODE_ENV=production`, touches `out/.nojekyll`, and publishes via `actions/deploy-pages`.

## Architecture

This is a single-purpose, content-heavy itinerary site (a 3-day Tainan trip, zh-Hant-TW). It is intentionally small; complexity lives in presentation, not data flow.

- `src/app/layout.tsx` — root layout. Loads `Zen_Maru_Gothic` via `next/font/google` exposed as the `--font-zen-maru` CSS variable, and renders persistent chrome: `TextureOverlay`, `BackToTop`, `Footer`, plus a skip-link.
- `src/app/page.tsx` — landing / itinerary index.
- `src/app/{hotel,memories,transport}/page.tsx` — sub-pages for hotel info, photo memories, and transport details.
- `src/app/globals.css` — Tailwind v4 entry + theme tokens + global styles (skip-link, retro/vintage visual treatments).

Components are grouped by role under `src/components/`:
- `itinerary/` — the core domain. `itinerary-data.ts` exports typed `ItineraryItem` / `ItineraryDay` arrays (`day1Items`, etc.) consumed by `DaySection.tsx` and `TimelineItem.tsx`. **To add/edit a stop on the trip, edit `itinerary-data.ts` — do not duplicate item markup in pages.** Item `variant` (`"card" | "flex-row" | "dashed"`) controls how `TimelineItem` renders.
- `hero/` — `Hero`, `SubHero` (page headers).
- `layout/` — `Footer`, `TextureOverlay` (paper-texture overlay applied globally).
- `ui/` — reusable primitives (`RetroButton`, `BackToTop`).
- `decor/` — purely decorative SVG-ish elements (`Cloud`, `Sparkle`, `Squiggle`, `Stamp`) used to dress up sections.

The visual design is a retro/vintage Taiwanese-stationery aesthetic; new components should use existing tokens in `globals.css` and the decor primitives rather than introducing one-off styles.
