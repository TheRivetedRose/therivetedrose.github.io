# TheRivetedRose — Portfolio Site

Production-ready Astro static site for [therivetedrose.github.io](https://therivetedrose.github.io/).

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

## Build & Deploy

```sh
npm run build
```

Output goes to `docs/`. For GitHub Pages:

1. Push to the `main` branch — the workflow builds and pushes the site to the `gh-pages` branch.
2. In repo **Settings → Pages**, set **Source** to "Deploy from a branch", **Branch** to `gh-pages`, **Folder** to `/ (root)`.

## Adding Content

### Projects

Create a Markdown file in `src/content/projects/`:

```yaml
---
title: Project Title
summary: One-line description
tags: [tag1, tag2]
featured: false
repoUrl: https://github.com/username/repo
image: /img/projects/screenshot.svg
pubDate: 2026-02-01
---

## Problem
...
```

The **slug** is derived from the filename (e.g. `home-lab-architecture.md` → `/projects/home-lab-architecture/`).

### Blog Posts

Create a Markdown file in `src/content/blog/`:

```yaml
---
title: Post Title
summary: Short description
tags: [tag1, tag2]
pubDate: 2026-02-17
---

Content here...
```

Slug from filename (e.g. `2026-02-17-sample-post.md` → `/blog/2026-02-17-sample-post/`).

## Pretty URLs

Astro generates pretty URLs by default. With `trailingSlash: 'always'`:

- `/projects/home-lab-architecture/`
- `/blog/2026-02-17-sample-post/`

No `.html` or query strings.

## Design System

**Do not use arbitrary Tailwind utilities or inline hex values.** Add tokens to `tailwind.config.mjs` if needed. See `design-tokens.md` for variables and usage.

## Project Structure

```
src/
├── components/     # Astro components (Nav, Footer, cards, islands)
├── content/       # Markdown collections (projects, blog)
├── layouts/       # BaseLayout, PageLayout, ProjectLayout, PostLayout
├── pages/         # Routes
└── styles/       # global.css (tokens, component classes)
```
