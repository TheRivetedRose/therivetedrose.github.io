# Resume Section, Resume Page, and Tech Stack Tabs — Implementation Prompt

**Date:** February 2026  
**Purpose:** Add Resume section to homepage, dedicated Resume page, and replace Tools/Platforms with interactive Tech Stack hover-tabs.

---

You are editing the Astro site in repo: TheRivetedRose/therivetedrose.github.io.

## IMPORTANT CONTEXT / CONSTRAINTS

- This is an Astro v5 static site using Tailwind.
- Global design tokens and reusable component styles live in src/styles/global.css (e.g., card classes, section headings, hover glows).
- Homepage content is in src/pages/index.astro and currently contains sections: Hero, About, Tools & Platforms, Featured Projects, Latest Blog, Contact.
- Keep the existing thematic palette, typography, spacing, and card styles consistent. Do NOT introduce a new color system.
- Use Astro components + vanilla JS only (no React/Preact; no new dependencies).
- LinkedIn data is not available to scrape due to robots restrictions; use ONLY the attached resume content below as the source of truth.
- Resume source file (for reference): FREIXAS_Resume_2026.pdf.

## GOAL A — Add a "Resume" section immediately after "About" on the homepage

1. Create a new component: src/components/ResumeSection.astro
2. Insert `<ResumeSection />` into src/pages/index.astro immediately AFTER the About section and BEFORE the Tech Stack section (see Goal B).
3. Resume section design (inspired by the Resume section at https://snehavish595.github.io/Portfolio-Template/):
   - Section title: "Resume"
   - Short subtext under title: "A quick glance at my education and work experience."
   - Two columns on desktop: Education (left) and Work Experience (right). Stack on mobile.
   - Each entry is a card using existing styling (class="card" plus any small extra class if needed).
   - Each entry displays:
     - Title (bold): role or degree
     - Organization/school + location (muted)
     - Date range (muted)
     - Highlights (2–3 bullets max) but keep each item concise in the UI:
       - Ensure each entry's highlights render to no more than ~3 lines of visible text total.
       - Implement line clamping locally in the component CSS (no plugins). Example:
         `.clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }`
       - Use clamp strategically on the bullet container and/or bullet text.

4. Resume content (use this data exactly; condensed from the attached resume):

   **EDUCATION (in-progress first):**
   - B.S. Computer Science (Cybersecurity Focus) — Humboldt State University, CA — Jan 2024 – Present (Expected Dec 2026) | GPA: 3.8
     Highlights (pick the most impactful 2–3, keep ultra-compact):
     • Coursework: Computer Security, Telecommunications & Networking, Data Structures, Algorithms, Systems Architecture
     • Building foundations in Python, C++, JavaScript, SQL/PL/SQL, and Linux CLI; focusing on secure coding + packet analysis
   - A.S. Police Science — College of the Redwoods, CA — Jul 2016 – Dec 2021 | GPA: 4.0
     Highlights (2 max):
     • Graduated with highest honors; recognized for scholastic performance + community service
     • Completed P.O.S.T.-certified law enforcement training; appointed Class Sergeant
   - POST Certifications — Santa Rosa Junior College, CA — Aug 2014 – Sep 2014
     Highlights (1–2 max):
     • 196 hours: correctional operations, report writing, emergency response, legal compliance, ethics, courtroom testimony

   **WORK EXPERIENCE (most recent first):**
   - Sales Associate / Closing Manager — Pierson Building Center, CA — Oct 2020 – Oct 2024
     Highlights (2–3, compact):
     • Promoted to Closing Manager; led end-of-day security controls, reconciliation, and asset protection
     • Monitored suspicious activity; enforced loss prevention and security protocols
   - Deputy Sheriff (Criminal Investigation Division) — Humboldt County Sheriff's Office, CA — Jul 2016 – Sep 2020
     Highlights (2–3, compact and professional; avoid medical specifics):
     • Led felony investigations; managed evidence collection with strict chain-of-custody compliance
     • Produced warrants, investigative reports, and courtroom-ready documentation; conducted interviews and testimony
     • Selected for Explosive Ordnance Disposal team; recognized for valor during a hostage extraction (2018)
   - Correctional Deputy — Humboldt County Sheriff's Office, CA — Jan 2014 – Jul 2016
     Highlights (2–3):
     • Maintained facility safety; conducted searches for contraband and enforced regulations/statutes
     • Documented incidents and filed criminal complaints; coordinated bookings/transfers and transport logistics
     • Recommended for promotion based on procedural integrity and leadership
   - Aerospace Propulsion Journeyman — United States Air Force — Dec 2008 – Oct 2012
     Highlights (2–3):
     • Maintained/inspected/repaired aircraft propulsion systems supporting combat and special operations missions
     • Supported time-sensitive, mission-critical maintenance; strengthened base physical security as Security Forces augmentee
     • Earned Air Force Achievement Medal; deployed in support of Operation Enduring Freedom (2011)

   **Optional small "Awards" row below columns (short chips/badges, not required):**
   - Medal of Valor — HCSO (2018)
   - Air Force Achievement Medal (2011)
   - Afghanistan Campaign Medal (2011)
   - NATO Medal (ISAF) (2011)

## GOAL A2 — Create a dedicated Resume page and link to it (instead of "Download")

1. Create a new page route: src/pages/resume.astro
   - Use the site's existing layout/wrapper conventions and classes.
   - Page title: "Resume"
   - At the top of the page, include a clear, recruiter-friendly statement:
     "For the most up-to-date experience and details, please visit my LinkedIn."
   - Place a LinkedIn button next to or directly under that statement:
     - Reuse the same LinkedIn button component/style already used elsewhere on the site (do NOT create a new LinkedIn button style).
     - Link to: https://www.linkedin.com/in/rosefr
2. The /resume page should display the same resume content as the homepage ResumeSection, but can be slightly expanded (still concise). Keep card styling consistent.
3. Do not include phone number or email from resume anywhere.

4. On the homepage ResumeSection header row, add a button:
   - Label: "View Full Resume"
   - Link to: /resume
   - Use existing secondary/ghost button styling.

## GOAL B — Replace "Tools & Platforms" with a single interactive "Tech Stack" section (hover-tabs)

1. Remove or replace the current "## Tools & Platforms" mapped list in src/pages/index.astro.
2. Create a new component: src/components/TechStackTabs.astro and render it where "Tools & Platforms" used to be (but AFTER ResumeSection).
3. Behavior:
   - Show a row/grid of category cards (these act like hover-tabs):
     Categories:
       - Languages
       - Tools
       - Platforms
       - AI Agents & Tools
       - Security / Detection
   - When a user hovers over a category card (mouseenter), show that category's detail panel below (grid of smaller cards).
   - The last-hovered category stays active until another category is hovered.
   - Default active category on load: Languages.
4. Implementation constraints:
   - Astro + vanilla JS only (no new libs).
   - Use data attributes + class toggling (e.g., data-category, data-panel, is-active).
   - Accessible fallback:
     - If JS is disabled, show all panels stacked (or show Languages panel first, with others visible below it).
5. Styling:
   - Category cards should use class="card" plus whichever existing hover-glow helper matches best (e.g., language-card/tool-card/platform-card). Reuse existing hover rules.
   - Detail cards should also use card styling consistent with the site.
6. Content seeds (short labels only; keep consistent tone):
   - Languages: Python, C++, JavaScript, HTML, SQL, PL/SQL, Bash, PowerShell
   - Tools: Wireshark, Git, GitHub, Sysmon, Sigma, (optional: Windows Event Viewer)
   - Platforms: Ubuntu, Windows, macOS, Kali Linux, VMware
   - AI Agents & Tools: Cursor, ChatGPT
   - Security / Detection: Secure coding, Packet analysis, Log inspection, Incident documentation, Chain-of-custody rigor, MITRE ATT&CK mapping, NIST IR familiarity

## FINISHING REQUIREMENTS

- Update src/pages/index.astro imports to include ResumeSection and TechStackTabs.
- Ensure section spacing matches existing sections (container widths, heading classes).
- Do not modify unrelated sections.
- Keep code readable and consistent with existing formatting.
- Make sure the project builds.
