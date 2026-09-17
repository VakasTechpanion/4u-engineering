# 4U Engineering — Industrial Precision UI Refresh

**Date:** 2026-09-17  
**Status:** Approved direction (pending final user review of this spec)  
**Scope:** Visual and interaction polish only — no copy or business logic changes

## Goal

Elevate the existing marketing site so it feels more interactive and premium while preserving every current heading, paragraph, list item, link target, and contact detail.

## Visual Direction

**Industrial Precision** (primary), with light motion inspired by modern tech UI:

- Deep navy headings, steel-gray body text, blue brand accents
- Soft blueprint-grid / subtle gradient section atmospheres (not flat white everywhere)
- Restrained motion: scroll reveals, hover lifts, navbar underline polish
- Avoid neon glow, purple gradients, dark-mode-first look, and generic “AI startup” chrome

## Hard Constraints

- Do **not** change any user-facing text (including punctuation and quotes)
- Do **not** change routing, form behavior, email/phone values, or section IDs used by anchors
- Do **not** add or remove sections or navigation destinations (desktop menu stays as-is)
- Keep responsive behavior working on mobile and desktop
- Prefer CSS / Tailwind + small client-side animation helpers; no new product features

## Components in Scope

| Component | File | UI changes |
|-----------|------|------------|
| Global styles / theme | `app/globals.css`, `app/layout.tsx` | CSS variables for navy/steel palette; optional subtle keyframe utilities; keep existing fonts (Poppins + Inter) |
| Page shell | `app/page.tsx` | Background / spacing wrappers only if needed for atmosphere |
| Navbar | `app/components/Navbar.jsx` | Stronger glass bar, link hover underline, smoother mobile menu transition; same links and toggle logic |
| About | `app/components/AboutSection.jsx` | Hero-adjacent treatment: grid/gradient atmosphere, entrance motion; same copy |
| Services | `app/components/ServicesSection.jsx` | Replace single gray block with interactive service panels (hover lift + left accent); same titles, body, lists |
| Contact | `app/components/ContactSection.jsx` | Cleaner focal layout, entrance motion, stronger visual emphasis on phone via styling only |
| Careers | `app/components/CareersSection.tsx` | Matching section rhythm and entrance motion; email emphasis via styling only |
| Footer | `app/components/Footer.jsx` | Darker steel/navy band for contrast; same links and copyright line |

## Interaction Spec

1. **Scroll-triggered fade/slide** — sections (or major blocks) animate in once when they enter the viewport; respect `prefers-reduced-motion`
2. **Service panel hover** — slight translate/shadow lift and accent bar emphasis on pointer devices
3. **Navbar polish** — link underline or color transition on hover; mobile menu open/close remains the same toggle behavior with smoother CSS transition

## Non-Goals

- New hero copy, stats, badges, or marketing callout chips
- New pages, CMS, or contact form backend
- Rewriting mobile nav label inconsistencies vs desktop (out of scope unless required for layout)
- Image asset replacement (unless existing assets need only CSS framing)

## Success Criteria

- Site looks distinctly more premium and interactive on first viewport and scroll
- Side-by-side copy check: all text identical to pre-change content
- Anchor links (`#about`, `#services`, `#contact`, `#careers`, `#home`) still work
- No layout breakage on common mobile widths (~375px) and desktop

## Implementation Notes

- Reuse existing component structure; prefer className / CSS updates over new abstractions
- If a tiny shared `Reveal` wrapper is needed for scroll animation, keep it presentational only
- Match existing Next.js App Router + Tailwind patterns already in the repo
