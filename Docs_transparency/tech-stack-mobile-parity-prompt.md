# Tech Stack Mobile Parity — Implementation Prompt

> **Disclaimer:** The original reported issue (animations not playing on mobile) was resolved when the user discovered their phone had **Reduce Motion** enabled in system settings. The site correctly respects `prefers-reduced-motion` and disables animations when this preference is set. The implementations below are robustness improvements (touch support, scroll fallback, etc.) that remain useful for users who have animations enabled.

---

**Goal:** On mobile, my Tech Stack section is missing (a) the sub-card slide animation and (b) reveal-on-scroll. Desktop works. Fix mobile parity without breaking desktop behavior.

**Constraints:**
- Do NOT redesign the site.
- Keep existing layout, content, and styling as-is unless required for the fix.
- Only change files that directly control the Tech Stack section and its animations (component, CSS, and any JS that drives scroll/animation).
- Prefer minimal, surgical diffs.
- Ensure accessibility: keyboard + touch should work (no hover-only dependency on mobile).
- Respect prefers-reduced-motion.

## What to do

### 1) Locate the Tech Stack section implementation and any animation logic

- Search for: "Tech Stack", "stack", "skills", "cards", "sub-card"
- Search for animation triggers: hover:, group-hover:, mouseenter, mouseleave, IntersectionObserver, AOS, framer-motion, GSAP, ScrollReveal
- Search for Astro hydration directives: client:load, client:visible, client:only, client:media
- Search for breakpoint-gated logic: matchMedia, min-width, md:, lg:

### 2) Diagnose why mobile is missing BOTH

Common causes to check and address:

- **Hover-only trigger:** mobile has no hover, so the sub-card never reveals.
- **Hydration gated to desktop:** e.g., client:media="(min-width: 768px)" prevents mobile JS from running.
- **CSS animations disabled on mobile** by media queries or prefers-reduced-motion rules.
- **IntersectionObserver not initializing on mobile** due to conditional guards or SSR-only rendering.

### 3) Implement fixes

- **If hover-only:** add a touch-friendly fallback:
  - Tap-to-toggle an "open" state per card (or use `<details>`/`<summary>`), while keeping hover on desktop.
  - Support keyboard via :focus-within and Enter/Space.
- **If hydration is gated:** remove/adjust client:media so mobile hydrates as needed, or move scroll observer logic into a small client component that hydrates on all viewports.
- **Ensure reveal-on-scroll works on mobile** using IntersectionObserver (with sensible thresholds) and does not rely on hover.
- **Add/keep prefers-reduced-motion handling:** when reduce is enabled, reveal should still occur instantly (no animation), not remain hidden.

### 4) Deliverables

- Provide a short explanation of the root cause you found (point to specific file(s)/lines).
- Provide the minimal code diff(s) to fix it.
- Include notes on how to quickly test: mobile emulation + real device, and toggling prefers-reduced-motion.

## Output format

- List the files you changed.
- Then show the patches (diff style).
- No unrelated refactors.

---

## Implementation (2025-02)

### Root cause

1. **Sub-card slide animation on mobile:** Tab switching uses `mouseenter`, `focus`, `click`, and `touchstart` (touch already present). The slide animation is triggered by adding `slide-in` to the grid immediately after setting `targetPanel.hidden = false`. On mobile browsers (especially Safari), applying the animation class in the same synchronous block as the visibility change can prevent the animation from running—the element may not be painted before the animation starts.

2. **Reveal-on-scroll not noticeable on mobile:** IntersectionObserver and scroll fallback are present and work. The 48px translateY and 0.65s duration are too subtle on small screens to be noticeable.

### Files changed

- `src/components/TechStackTabs.astro`
- `src/styles/global.css`

### Patches

**TechStackTabs.astro** — Defer `slide-in` class to next event loop tick:

```diff
         targetGrid.classList.remove("slide-in");
         void (targetGrid as HTMLElement).offsetHeight;
-        targetGrid.classList.add("slide-in");
-
-        const childCount = targetGrid.children.length;
-        const totalDuration = (childCount - 1) * SLIDE_IN_STAGGER + SLIDE_IN_DURATION;
-        setTimeout(finishSwitch, totalDuration);
+        /* Defer slide-in to next tick so mobile browsers paint the panel before animating */
+        setTimeout(() => {
+          targetGrid.classList.add("slide-in");
+          const childCount = targetGrid.children.length;
+          const totalDuration = (childCount - 1) * SLIDE_IN_STAGGER + SLIDE_IN_DURATION;
+          setTimeout(finishSwitch, totalDuration);
+        }, 0);
```

**global.css** — Mobile reveal: larger movement (64px), longer duration (0.8s), new keyframes:

```diff
+  /* Mobile: more pronounced reveal (larger movement, longer duration) for visibility on small screens */
+  @media (max-width: 767px) {
+    .reveal--visible.reveal--animate-up {
+      animation: fadeUpMobile 0.8s ease-out forwards;
+    }
+    .reveal--visible.reveal--animate-down {
+      animation: fadeDownMobile 0.8s ease-out forwards;
+    }
+    .reveal.reveal--exit-up {
+      transform: translateY(-64px);
+    }
+    .reveal.reveal--exit-down {
+      transform: translateY(64px);
+    }
+  }
+
   @media (prefers-reduced-motion: reduce) {
```

```diff
   @keyframes slideDownSubtle {
     ...
   }
+
+  @keyframes fadeUpMobile {
+    from {
+      opacity: 0;
+      transform: translateY(64px);
+    }
+    to {
+      opacity: 1;
+      transform: translateY(0);
+    }
+  }
+
+  @keyframes fadeDownMobile {
+    from {
+      opacity: 0;
+      transform: translateY(-64px);
+    }
+    to {
+      opacity: 1;
+      transform: translateY(0);
+    }
+  }
```

### Testing

- **Mobile emulation:** Chrome DevTools → Toggle device toolbar (Cmd+Shift+M) → select a device (e.g. iPhone 14). Tap Tech Stack tabs; sub-cards should slide in. Scroll to Tech Stack; section should reveal with a visible slide-up.
- **Real device:** Load site on phone, repeat the above.
- **prefers-reduced-motion:** DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`. Reveal should appear instantly (no animation); slide animation should be disabled.
