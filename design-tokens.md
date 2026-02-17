# Design Tokens

Centralized variables for consistent styling. Defined in `src/styles/global.css` and extended in `tailwind.config.mjs`.

## CSS Variables (`:root` / `.dark`)

| Variable | Light | Dark | Use |
|----------|-------|------|-----|
| `--c-accent` | `219 39 119` | same | Primary accent (rose) |
| `--c-accent-muted` | `236 72 153` | same | Hover/active accent |
| `--c-surface` | `255 255 255` | `23 23 23` | Page background |
| `--c-surface-elevated` | `250 250 250` | `38 38 38` | Cards, elevated surfaces |
| `--c-muted` | `115 115 115` | `163 163 163` | Secondary text |
| `--c-border` | `229 229 229` | `64 64 64` | Borders |
| `--c-text` | `23 23 23` | `250 250 250` | Primary text |
| `--c-text-muted` | `64 64 64` | `163 163 163` | Muted text |
| `--font-sans` | DM Sans | — | Body font |
| `--font-mono` | JetBrains Mono | — | Code font |

## Tailwind Extensions

- `colors.accent`, `colors.accent-muted` — use `text-accent`, `bg-accent`, etc.
- `colors.surface`, `colors.surface-elevated`, `colors.muted`, `colors.border`
- `fontFamily.sans`, `fontFamily.mono` — from CSS variables

## Component Classes

| Class | Use |
|-------|-----|
| `.card` | Project/post cards, elevated containers |
| `.btn-primary` | Primary actions |
| `.btn-secondary` | Secondary actions |
| `.badge` | Tags, labels |
| `.section-heading` | Section titles |
| `.prose-custom` | Markdown content styling |
| `.reveal` / `.reveal--visible` | Scroll-triggered reveal (RevealOnScroll) |
