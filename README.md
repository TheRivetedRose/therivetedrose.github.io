# TheRivetedRose — Portfolio Site

Production-ready Astro static site for [therivetedrose.github.io](https://therivetedrose.github.io/).

> **Transparency:** This site was built via human and AI collaboration (ChatGPT and Cursor). See [`Docs_transparency/`](Docs_transparency/) for prompts and content used during initial site establishment and subsequent updates (e.g., Resume section, Tech Stack tabs).

## Tech Stack

- **Astro** — static site generator
- **Tailwind CSS** — utility-first styling with token-based config
- **Content Collections** — Markdown for projects and blog posts

## Run Locally

```sh
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```sh
npm run build
```

Output goes to `docs/`. Deploys to GitHub Pages via Actions.

## Project Structure

```
src/
├── components/     # Astro components (Nav, Footer, cards, islands)
├── content/        # Markdown collections (projects, blog)
├── layouts/        # BaseLayout, PageLayout, ProjectLayout, PostLayout
├── pages/          # Routes
└── styles/         # global.css (tokens, component classes)
```

## Design System

Uses centralized design tokens. See `design-tokens.md` for variables and usage.
