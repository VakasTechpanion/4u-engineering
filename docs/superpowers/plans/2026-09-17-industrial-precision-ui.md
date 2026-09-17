# Industrial Precision UI Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the 4U Engineering site to an Industrial Precision look with scroll reveals and hover interactions, without changing any copy or business logic.

**Architecture:** Keep the existing Next.js App Router component tree. Add CSS design tokens + utility keyframes in `globals.css`, a small presentational `Reveal` client wrapper for scroll-in motion (respects `prefers-reduced-motion`), then restyle each section/component with Tailwind classes only. No new routes, forms, or text.

**Tech Stack:** Next.js App Router, React client components, Tailwind CSS v4 (`@import "tailwindcss"`), existing Poppins + Inter fonts.

## Global Constraints

- Do not change any user-facing text (including punctuation and quotes)
- Do not change routing, form behavior, email/phone values, or section IDs used by anchors
- Do not add or remove sections or navigation destinations (desktop menu stays as-is)
- Keep responsive behavior working on mobile and desktop
- Prefer CSS / Tailwind + small client-side animation helpers; no new product features

---

## File Map

| File | Responsibility |
|------|----------------|
| `app/globals.css` | Design tokens (navy/steel), blueprint grid utility, keyframes, reduced-motion |
| `app/components/Reveal.jsx` | Presentational scroll-in wrapper (`children` only) |
| `app/layout.tsx` | Apply font CSS variables on `body` (currently imported but unused) |
| `app/page.tsx` | Optional atmosphere wrapper class on `<main>` |
| `app/components/Navbar.jsx` | Glass bar + link underline polish + smoother mobile menu |
| `app/components/AboutSection.jsx` | Hero-adjacent atmosphere + Reveal |
| `app/components/ServicesSection.jsx` | Interactive service panels |
| `app/components/ContactSection.jsx` | Focal layout + Reveal |
| `app/components/CareersSection.tsx` | Matching rhythm + Reveal |
| `app/components/Footer.jsx` | Darker steel/navy band |

---

### Task 1: Design tokens + Reveal helper

**Files:**
- Modify: `app/globals.css`
- Create: `app/components/Reveal.jsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: none
- Produces: `Reveal({ children, className? })` client component; CSS vars `--navy`, `--steel`, `--accent`, `.blueprint-grid`, `.reveal-ready` / data-state attrs

- [ ] **Step 1: Update `app/globals.css` with industrial tokens and motion utilities**

Replace/extend `:root` and add utilities (keep existing heading/body rules):

```css
:root {
  --background: #f4f7fb;
  --foreground: #1e293b;
  --navy: #0b1f3a;
  --navy-soft: #123056;
  --steel: #5b6b7c;
  --accent: #2563eb;
  --surface: #ffffff;
  --line: rgba(11, 31, 58, 0.12);
}

.blueprint-grid {
  background-color: var(--background);
  background-image:
    linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
}

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal[data-visible="false"] {
  opacity: 0;
  transform: translateY(18px);
}

.reveal[data-visible="true"] {
  animation: reveal-up 0.7s ease forwards;
}

@media (prefers-reduced-motion: reduce) {
  .reveal[data-visible="false"],
  .reveal[data-visible="true"] {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
```

- [ ] **Step 2: Create `app/components/Reveal.jsx`**

```jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible ? "true" : "false"}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Wire fonts on `body` in `app/layout.tsx`**

Apply `${poppins.variable} ${inter.variable}` on `<body>` alongside existing classes (no text/metadata changes).

- [ ] **Step 4: Visual smoke-check**

Run: `npm run dev` (or existing server) and confirm app still loads.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/components/Reveal.jsx app/layout.tsx
git commit -m "Add industrial design tokens and Reveal scroll helper"
```

---

### Task 2: Navbar + page shell

**Files:**
- Modify: `app/components/Navbar.jsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: CSS tokens from Task 1
- Produces: polished nav/shell only

- [ ] **Step 1: Restyle Navbar (classes only; same links/toggle)**

- Stronger glass: `bg-white/85 backdrop-blur-lg border-b border-[var(--line)]`
- Desktop links: underline grow on hover via `relative after:` pseudo or simple `hover:text-[var(--accent)]` + `transition`
- Mobile menu: add `transition` / fade classes while keeping `{open && (...)}` logic

- [ ] **Step 2: Update `app/page.tsx` main**

```tsx
<main className="bg-[var(--background)]">
```

- [ ] **Step 3: Verify desktop + mobile menu still toggles and anchors work**

- [ ] **Step 4: Commit**

```bash
git add app/components/Navbar.jsx app/page.tsx
git commit -m "Polish navbar glass bar and page shell atmosphere"
```

---

### Task 3: About + Services sections

**Files:**
- Modify: `app/components/AboutSection.jsx`
- Modify: `app/components/ServicesSection.jsx`

**Interfaces:**
- Consumes: `Reveal` from Task 1
- Produces: restyled sections with identical copy

- [ ] **Step 1: Restyle About**

- Section: `blueprint-grid` + soft navy wash overlay via gradient class
- Keep all paragraph text identical
- Wrap content in `<Reveal>`

- [ ] **Step 2: Restyle Services as interactive panels**

- Keep heading `Services 4U` and every service title/body/list item identical
- Map each service block into a panel:

```jsx
<div className="group rounded-xl border border-[var(--line)] bg-white p-6 pl-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg border-l-4 border-l-transparent hover:border-l-[var(--accent)]">
```

- Wrap section content in `<Reveal>` (or per-panel if cleaner)

- [ ] **Step 3: Copy check** — diff text against previous content; must match exactly

- [ ] **Step 4: Commit**

```bash
git add app/components/AboutSection.jsx app/components/ServicesSection.jsx
git commit -m "Restyle About and Services with industrial interactive panels"
```

---

### Task 4: Contact, Careers, Footer

**Files:**
- Modify: `app/components/ContactSection.jsx`
- Modify: `app/components/CareersSection.tsx`
- Modify: `app/components/Footer.jsx`

**Interfaces:**
- Consumes: `Reveal` from Task 1
- Produces: matching section rhythm + darker footer

- [ ] **Step 1: Contact** — focal max-width layout, Reveal, emphasize phone with larger weight/color classes only; text unchanged

- [ ] **Step 2: Careers** — matching padding/spacing, Reveal, emphasize `hr@4uengg.com` via classes only

- [ ] **Step 3: Footer** — navy/steel band (`bg-[var(--navy)] text-white` or similar), keep all link labels and copyright text

- [ ] **Step 4: Full-page visual pass** — scroll animations fire once; hover on services; mobile OK

- [ ] **Step 5: Commit**

```bash
git add app/components/ContactSection.jsx app/components/CareersSection.tsx app/components/Footer.jsx
git commit -m "Restyle Contact, Careers, and Footer for industrial finish"
```

---

## Spec Coverage Checklist

- Palette & type → Task 1 + layout fonts
- Navbar polish → Task 2
- About atmosphere → Task 3
- Services interactive grid → Task 3
- Contact & Careers → Task 4
- Footer contrast → Task 4
- Motion (scroll, hover, nav) → Tasks 1–3
- Hard constraints (no copy/logic) → all tasks
