# Docs_transparency

This directory contains prompts and content inputs used during the initial establishment of this site. They are shared for transparency about how the site was initially built.

> **Note:** These files are not up to date with the current version of the associated pages. They reflect the initial inputs only; the live site and source files may have changed since then.

## Files

| File                           | Purpose                                                                                                                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Initial-prompt0.txt`          | The main prompt given to Cursor Composer to scaffold the Astro site. Defines tech stack, structure, design system, and deliverables.                                                                                                                                |
| `landing-page.txt`             | Structured content for the landing page (`src/pages/index.astro`): hero copy, about blurb, tools grid, featured projects, blog preview, contact. Used to populate the template.                                                                                     |
| `home-lab-architecture.txt`    | Structured content for the first project (`src/content/projects/home-lab-architecture.md`). Defines title, slug, tags, and full project case-study sections (objectives, architecture, network design, deployment, etc.). Converted into Markdown with frontmatter. |
| `resume-and-techstack-prompt.md` | Prompt for adding Resume section, dedicated Resume page (`/resume`), and Tech Stack hover-tabs. Defines resume content, TechStackTabs categories, and implementation constraints.                                                                                  |

## How They Were Used

1. **Initial-prompt0.txt** — Provided to Cursor as the primary specification. Cursor generated the Astro scaffold, layouts, components, Content Collections config, Tailwind setup, GitHub Actions workflow, and initial README based on this prompt.

2. **landing-page.txt** — Content was extracted and placed into `src/pages/index.astro` sections (Hero, About, Tools & Platforms, Featured Projects, Latest Blog, Contact). The page template pulls projects and posts from collections; this file supplied the copy and structure for static sections.

3. **home-lab-architecture.txt** — Content was converted to Markdown with YAML frontmatter and saved as `src/content/projects/home-lab-architecture.md`. The ProjectLayout renders this file at `/projects/home-lab-architecture/`.

4. **resume-and-techstack-prompt.md** — Prompt for adding the Resume section (after About), dedicated Resume page (`/resume`), and Tech Stack hover-tabs. Led to creation of `ResumeSection.astro`, `TechStackTabs.astro`, and `src/pages/resume.astro`. Replaced the separate Languages/Tools/AI/Platforms sections with a single interactive Tech Stack section.

These files are preserved as a record of the human and AI authored inputs that shaped the site, not as runnable code.
