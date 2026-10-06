# AGENTS.md

Single-page personal portfolio for Nur Izzatul Natasha, built with TanStack Start, React 19, TypeScript and Tailwind CSS 4, deployed on Netlify. No backend, database or forms.

## Structure

- `src/data/profile.ts` — **single source of truth for all content** (profile, links, expertise, about, journey, education, experience, projects, skills, contact, nav items).
- `src/routes/index.tsx` — the only page; composes the section components in order.
- `src/routes/__root.tsx` — HTML shell, meta tags, Poppins font, and an inline script that adds `.js` to `<html>` (enables scroll-reveal only when JS runs, so content is never hidden without JS).
- `src/components/` — one component per section (`Navbar`, `Hero`, `Expertise`, `About`, `Journey`, `Education`, `Experience`, `Projects`, `Skills`, `Contact`, `Footer`, `Background`), plus `Timeline.tsx` (shared vertical timeline) and `ui.tsx` (`Reveal`, `Section`, `Pill`, `PillButton`, `CopyText`, `ToBeAdded`).
- `src/styles.css` — theme tokens (ink, lavender, olive palettes; Poppins), glass utilities, reveal animation, reduced-motion handling.

## Conventions & decisions

- **Never invent facts** (dates, URLs, emails, achievements, responsibilities). Unknown values are `null` or `PLACEHOLDER(...)`, which the UI renders with a visible "to be added" marker. `PillButton` with `href={null}` renders a disabled, accessible placeholder instead of a fake link.
- Do not describe the e-Social Event Management System as an official government application.
- Glass cards use 24–36px radii (`rounded-[28px]`/`[32px]`); controls are fully rounded pills. No sharp corners, no dark-only theme, keep animation subtle.
- Reveal uses a keyframe animation with `backwards` fill (not a transition) so it doesn't fight the `glass-hover` lift transform.
- Profile photo, when set, is loaded via `/.netlify/images?url=...&w=640&fm=webp`.
- Navigation is in-page anchors; active state is tracked via IntersectionObserver in `Navbar.tsx`.
