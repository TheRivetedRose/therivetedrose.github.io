# Design Tokens

Centralized variables for consistent styling. Defined in `src/styles/global.css` and extended in `tailwind.config.mjs`.

## CSS Variables (`:root` / `.dark`)

| Variable | Light | Dark | Use |
|----------|-------|------|-----|
| `--c-accent` | `219 39 119` | same | Primary accent (rose) |
| `--c-accent-muted` | `236 72 153` | same | Hover/active accent |
| `--c-surface` | `245 240 230` (Rosie cream) | `23 23 23` | Page background |
| `--c-surface-elevated` | `248 244 235` | `38 38 38` | Cards, elevated surfaces |
| `--c-muted` | `115 115 115` | `163 163 163` | Secondary text |
| `--c-border` | `229 229 229` | `64 64 64` | Borders |
| `--c-text` | `23 23 23` | `250 250 250` | Primary text |
| `--c-text-muted` | `64 64 64` | `163 163 163` | Muted text |
| `--c-github` | `15 191 62` | same | GitHub green (#0FBF3E) |
| `--c-linkedin` | `10 102 194` | same | LinkedIn blue (#0A66C2) |
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
| `.btn-github` | GitHub link button (green, with logo) |
| `.btn-linkedin` | LinkedIn link button (blue, with logo) |
| `.badge` | Tags, labels |
| `.section-heading` | Section titles |
| `.prose-custom` | Markdown content styling |
| `.reveal` / `.reveal--visible` | Scroll-triggered reveal (RevealOnScroll) |
