# Design System — maisamp.github.io

## Product Context
- **What this is:** Personal website and blog for Maisam Pyarali
- **Who it's for:** Sharing work, writing, and projects with the internet
- **Space/industry:** Personal developer/engineer portfolio + blog
- **Project type:** Static site — About page + Blog

## Base Theme
- **Template:** Astro Cactus (`chrismwilliams/astro-theme-cactus`)
- **Fork:** https://github.com/chrismwilliams/astro-theme-cactus
- **Modifications from base:** Teal accent, otter mascot, larger font, no Notes page

## Aesthetic Direction
- **Direction:** Brutally Minimal — monospace-forward, content-first
- **Decoration level:** Minimal — typography and whitespace do all the work
- **Mood:** Clean, focused, technical but approachable. Like reading a well-formatted terminal.

## Mascot
- **Mascot:** Otter 🦦 (replaces the cactus)
- **Usage:** Browser tab favicon, header logo area, footer

## Typography
- **Font:** System monospace — `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
- **Base size:** `text-base` (16px) — bumped up from Astro Cactus default of `text-sm` (14px)
- **Weight:** Normal (400) throughout, semibold (600) for nav links and dates

## Color
- **Approach:** Restrained — 1 accent + neutrals
- **Light mode:**
  - Background: `oklch(98.48% 0 0)` — near white
  - Text: `oklch(26.99% 0.0096 235.05)` — dark gray-blue
  - Muted: `oklch(44.6% 0.03 256.802)`
  - Accent (nav links): `oklch(60% 0.13 185)` ≈ `#0A9E96` — teal
  - Link: `oklch(60% 0.13 185)` — same teal
- **Dark mode:**
  - Background: `oklch(23.64% 0.0045 248)` — dark navy
  - Text: `oklch(83.54% 0 264)` — light gray
  - Muted: `oklch(70.7% 0.022 261.325)`
  - Accent (nav links): `oklch(72% 0.12 192)` ≈ `#2CC4BC` — teal
  - Link: same teal
- **What changed from base:** Replaced the red/orange accent (`oklch(55.27% 0.195 19.06)`) with teal in light mode. Dark mode accent was already green — shifted to teal.

## Layout
- **Max width:** `max-w-3xl` (Astro Cactus default ~768px)
- **Navigation:** Home | About | Blog (Notes removed)
- **Header:** Otter emoji + site name left, search + theme toggle right

## Motion
- **Approach:** Minimal-functional — theme transition 300ms ease-in-out (Astro Cactus default)

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-10 | Chose Astro Cactus as base | Minimal, monospace, dark/light, forkable, well-maintained |
| 2026-04-10 | Teal accent (#0A9E96 / #2CC4BC) | User's favourite colour, distinct from the default red |
| 2026-04-10 | Otter mascot 🦦 | Replaces cactus, user's choice |
| 2026-04-10 | Font size bumped to text-base | Default text-sm felt too small |
| 2026-04-10 | Removed Notes page | User only wants About + Blog |
